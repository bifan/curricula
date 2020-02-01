const express = require("express");
const mongoose = require("mongoose");

const { Curriculum } = require("@db");

const router = express.Router();

router.get("/", async function(req, res) {
  const Curricula = await Curriculum.find()
  // console.log(Curricula)
  res.send(Curricula);
});

router.post("/", async function(req, res) {
  // console.log(req.body);
  const { name, goal, description, sections } = req.body;
  const curriculum = new Curriculum({
    name,
    goal,
    description,
    sections
  });
  await curriculum.save();
  // res.send(201, "Success");
  res.status(201).send("Success");
});

router.get("/:id", function(req, res) {
  res.send(req.params);
});

router.patch("/:id", function(req, res) {
  res.send("Got a POST request");
});

router.delete("/:id", function(req, res) {
  res.send("Got a POST request");
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
