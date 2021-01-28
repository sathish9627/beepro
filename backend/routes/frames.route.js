
const express = require('express');
const app = express();
const framesRoute = express.Router();

// Frames model
let Frames = require('../models/Frames');

// Add Frames
framesRoute.route('/create').post((req, res, next) => {
    Frames.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Frames
framesRoute.route('/').get((req, res) => {
    Frames.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Frames
framesRoute.route('/read/:id').get((req, res) => {
    Frames.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Frames
framesRoute.route('/update/:id').put((req, res, next) => {
    Frames.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Frames
framesRoute.route('/delete/:id').delete((req, res, next) => {
    Frames.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = framesRoute;
