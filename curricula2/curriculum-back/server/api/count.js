const express = require('express')
const mongoose = require('mongoose')
mongoose.set('debug', true)

const { Curriculum } = require('@db')

const router = express.Router()


// 为每个课程统计完成量(服务于页面进度条的)
// 课程添加了多少阶段, 完成了(选中了)多少
// { id: 5eca232b2a2e90b5300712ae, totalNumber: 2, numberCompleted: 1 }
// { 课程id, 阶段数量, 完成数量 }

router.route('/')
  .get(async function (req, res) {
    console.log(`(●'◡'●) → count.js → router.route('/').get()`)
    // return values: [{ id, totalProjects, totalResources }]
    try {
      const curricula = await Curriculum.find()
      let totals = []
      curricula.forEach((c, i) => {
        totals.push({
          id: c._id,
          totalNumber: 0,
          numberCompleted: 0,
        })
        c.sections.forEach((s) => {
          totals[i].totalNumber += s.resources.length + s.projects.length

          totals[i].numberCompleted += s.resources.reduce((acc, curr) => {
            return acc + (curr.isCompleted && 1)
          }, 0)
          totals[i].numberCompleted += s.projects.reduce((acc, curr) => {
            return acc + (curr.isCompleted && 1)
          }, 0)
        })
      })
      res.send(totals)
      console.log('totals:', totals)
    } catch (err) {
      throw new Error(err)
    }
  })

module.exports = router
