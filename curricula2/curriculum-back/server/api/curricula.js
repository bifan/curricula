const express = require('express')
const mongoose = require('mongoose')
mongoose.set('debug', true)

const { Curriculum } = require('@db')

// 不需要登陆的路由
const router = express.Router()
// 需要登陆的路由
const authRouter = express.Router()

router.route('/')
  .get(async function (req, res) {
    const curricula = await Curriculum.find()
    console.log(`(●'◡'●) → curricula.js → router.route('/').get()`)
    res.send(curricula)
  })
  
authRouter.route('/')
  .post(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → authRouter.route('/').post()`)
    const { name, goal, description, sections, createdBy } = req.body
    const curriculum = new Curriculum({
      name,
      goal,
      description,
      sections,
      createdBy
    })
    const currRes = await curriculum.save()
    res.send(201, currRes)
  })

router.route('/:id/sections/:sectionId/:type/:typeId')
  .get(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → router.route('/:id/sections/:sectionId/:type/:typeId').get()`)
    // this function is only for testing purposes
    const { id, sectionId, type, typeId } = req.params
    const doc = await Curriculum.findById(id)

    const section = doc.sections.id(sectionId)
    const item = section[type].id(typeId)

    res.send(item)
  })
authRouter.route('/:id/sections/:sectionId/:type/:typeId')
  .put(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → authRouter.route('/:id/sections/:sectionId/:type/:typeId').put()`)
    const { id, sectionId, type, typeId } = req.params
    const { name, url } = req.body
  })
  .patch(async function (req, res) {
    try {
      console.log(`(●'◡'●) → curricula.js → authRouter.route('/:id/sections/:sectionId/:type/:typeId').patch()`)
      const { id, sectionId, type, typeId } = req.params
      const { isCompleted, name, url } = req.body
      const doc = await Curriculum.findById(id)

      const section = doc.sections.id(sectionId)
      let item = section[type].id(typeId)

      item.isCompleted = isCompleted
      item.name = name
      item.url = url

      await doc.save()

      res.send(item)
    } catch(err) {
      res.status(500).send(err)
    }
  })
  .delete(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → authRouter.route('/:id/sections/:sectionId/:type/:typeId').delete()`)
    const { id, sectionId, type, typeId } = req.params

    try {
      let result = await Curriculum.updateOne(
        { _id: id, 'sections._id': sectionId },
        { $pull: 
          {[`sections.$.${type}`]:
            {'_id': typeId}
          }
        }
      )
      res.send(result)
    } catch (err) {
      throw new Error(err)
    }
  })

router.route('/:id/sections/:sectionId/:type')
  .get(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → router.route('/:id/sections/:sectionId/:type/:typeId').get()`)
    try {
      const { id, sectionId, type } = req.params

      const doc = await Curriculum.findById(id)

      const section = doc.sections.id(sectionId)
      let item = section[type]

      res.send(item)
    } catch(err) {
      res.status(500).send(err)
    }
  })
authRouter.route('/:id/sections/:sectionId/:type')  
  .post(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → authRouter.route('/:id/sections/:sectionId/:type').post()`)
    try {
      const { id, sectionId, type } = req.params
      const { name, link } = req.body

      const doc = await Curriculum.findById(id)

      const section = doc.sections.id(sectionId)
      let items = section[type]
      const itemId = mongoose.Types.ObjectId()

      items.push({
        _id: itemId,
        name,
        link,
        isCompleted: false
      })

      await doc.save()

      const item = section[type].id(itemId)

      res.send(item)
    } catch(err) {
      res.status(500).send(err)
    }
  })

router.route('/:id/sections/:sectionId')
  .patch(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → router.route('/:id/sections/:sectionId').patch()`)
    try {
      const { id, sectionId, type, typeId } = req.params
      const { isCompleted, name, url } = req.body
      const doc = await Curriculum.findById(id)

      const section = doc.sections.id(sectionId)
      let item = section[type].id(typeId)

      item.isCompleted = isCompleted
      item.name = name
      item.url = url

      await doc.save()

      res.send(item)
    } catch(err) {
      res.status(500).send(err)
    }
  })
authRouter.route('/:id/sections/:sectionId')
  .delete(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → authRouter.route('/:id/sections/:sectionId').delete()`)
    const { id, sectionId } = req.params

    try {
      let result = await Curriculum.updateOne(
        { _id: id },
        { $pull: 
          {sections:
            {'_id': sectionId}
          }
        }
      )
      res.send(result)
    } catch (err) {
      throw new Error(err)
    }
  })

router.route('/:id/sections')
  .get(async function(req, res) {
    console.log(`(●'◡'●) → curricula.js → router.route('/:id/sections').get()`)
    const { id } = req.params
    const doc = await Curriculum.findById(id)

    res.send(doc.sections)
  })
authRouter.route('/:id/sections')
  .post(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → authRouter.route('/:id/sections').post()`)
    const { id } = req.params
    const { name } = req.body
    const sectionId = mongoose.Types.ObjectId()

    const doc = await Curriculum.findById(id)
    doc.sections.push({
      _id: sectionId,
      name
    })
    await doc.save()

    const section = await doc.sections.id(sectionId)

    res.send(section)
  })

router.route('/:id')
  .get(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → router.route('/:id').get()`)
    const curriculum = await Curriculum.findById(req.params.id)
    res.send(curriculum)
  })
authRouter.route('/:id')
  .patch(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → authRouter.route('/:id').patch()`)
    try {
      await Curriculum.updateOne({ _id: req.params.id }, { ...req.body })
      res.send('Success')
    } catch(err) {
      
    }
  })
  .delete(async function (req, res) {
    console.log(`(●'◡'●) → curricula.js → authRouter.route('/:id').delete()`)
    await Curriculum.deleteOne({ _id: req.params.id })
    res.send('Success')
  })

module.exports = {
  curricula: router,
  authCurricula: authRouter
}
