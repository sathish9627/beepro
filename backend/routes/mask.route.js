
const express = require('express');
const app = express();
const maskRoute = express.Router();

// Mask model
let Mask = require('../models/Mask');

// Add Mask
maskRoute.route('/create').post((req, res, next) => {
    Mask.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Mask
maskRoute.route('/').get((req, res) => {
    Mask.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Mask
maskRoute.route('/read/:id').get((req, res) => {
    Mask.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Mask
maskRoute.route('/update/:id').put((req, res, next) => {
    Mask.findByIdAndUpdate(req.params.id, {
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

// Delete Mask
maskRoute.route('/delete/:id').delete((req, res, next) => {
    Mask.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = maskRoute;
