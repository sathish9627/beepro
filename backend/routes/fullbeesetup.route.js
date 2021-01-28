
const express = require('express');
const app = express();
const fullbeesetupRoute = express.Router();

// Fullbeesetup model
let Fullbeesetup = require('../models/Fullbeesetup');

// Add Fullbeesetup
fullbeesetupRoute.route('/create').post((req, res, next) => {
    Fullbeesetup.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Fullbeesetup
fullbeesetupRoute.route('/').get((req, res) => {
    Fullbeesetup.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Fullbeesetup
fullbeesetupRoute.route('/read/:id').get((req, res) => {
    Fullbeesetup.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Fullbeesetup
fullbeesetupRoute.route('/update/:id').put((req, res, next) => {
    Fullbeesetup.findByIdAndUpdate(req.params.id, {
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

// Delete Fullbeesetup
fullbeesetupRoute.route('/delete/:id').delete((req, res, next) => {
    Fullbeesetup.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = fullbeesetupRoute;
