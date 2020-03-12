// const express = require('express');
const router = require("express").Router();
const Shows = require("../helpers/showsModel.js");

//GET shows

router.get("/", (req, res) => {
  Shows.get()
    .then(shows => {
      res.status(200).json(shows);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//GET shows /:id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Shows.get(id)
    .then(show => {
      res.status(200).json(show);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//GET shows' characters ?/:id?
router.get("/:id/characters", (req, res) => {
    const { id} = req.params;

  Shows.getShowsCharacters(id)
    .then(characters => {
        res.status(200).json(characters)
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `this is an error ${err}`
      });
    });
});

//POST
router.post("/", (req, res) => {
  Shows.insert(req.body)
    .then(() => {
      res.status(201).json(req.body);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `there is an error ${err}` });
    });
});

//DEL /:id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Shows.remove(id)
    .then(deleteShow => {
      res.status(201).json(deleteShow);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `this is an error ${err}` });
    });
});

//PUT || PATCH/:id
router.put("/:id", (req, res) => {
  const updateShow = req.body;
  const { id } = req.params;
  Shows.update(id, updateShow)
    .then(updateShow => {
      res.status(200).json(updateShow);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `this is an error ${err}` });
    });
});

module.exports = router;
