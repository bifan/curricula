const express = require("express");
require("mongoose");

const { Curriculum } = require("@db");

const router = express.Router();

router.get("/", async function(req, res) {
  const Curricula = await Curriculum.find();
  // console.log(Curricula)
  res.send(Curricula);
});

router.post("/", async function(req, res) {
  const { name, goal, description, sections } = req.body;
  const curriculum = new Curriculum({
    name,
    goal,
    description,
    sections
  });
  await curriculum.save();
  // res.send(201, "Success");
  res.sendStatus(201);
});

router.get("/:id", async function(req, res) {
  const curriculum = await Curriculum.findById(req.params.id);
  res.send(curriculum);
});

router.patch("/:id", async function(req, res) {
  await Curriculum.findByIdAndUpdate(req.params.id, req.body);
  res.sendStatus(204);
});

router.delete("/:id", async function(req, res) {
  await Curriculum.findByIdAndRemove(req.params.id);
  res.sendStatus(204);
});

module.exports = router;

/*
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(function(req, res) {
    res.send("Hello Curricula!");
  })
  .post(function(req, res) {
    res.send("Got a POST request");
  });

router
  .route("/")
  .get(function(req, res) {
    res.send(req.params);
  })
  .patch(function(req, res) {
    res.send("Got a POST request");
  })
  .delete(function(req, res) {
    res.send("Got a POST request");
  });

module.exports = router;

*/
