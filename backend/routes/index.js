const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const movieDB = mongoose.model("Movie");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/movieList", function (req, res, next) {
  try {
    movieDB.find().exec(function (err, resData) {
      if (err) {
        res.status(500).json({
          status: false,
          Message: "Something Went Wrong",
        });
      }
      if (resData) {
        res.json({
          status: true,
          data: resData,
        });
      } else {
        res.status(404).json({
          status: false,
          Message: "No Records Found",
        });
      }
    });
  } catch (e) {
    res.status(500).json({ Message: "Something went wrong" });
  }
});

router.get("/movieCard/:id", function (req, res, next) {
  try {
    let info = req.params.id;
    movieDB
      .findOne({ _id: mongoose.mongo.ObjectID(info) })
      .exec(function (err, resData) {
        if (err) {
          res.status(500).json({
            status: false,
            Message: "Something Went Wrong",
          });
        }
        if (resData) {
          res.json({
            status: true,
            data: resData,
          });
        } else {
          res.status(404).json({
            status: false,
            Message: "No Records Found",
          });
        }
      });
  } catch (e) {
    res.status(500).json({ Message: "Something went wrong" });
  }
});

module.exports = router;
