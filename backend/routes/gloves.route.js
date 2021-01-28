
const express = require('express');
const app = express();
const glovesRoute = express.Router();

// Gloves model
let Gloves = require('../models/Gloves');

// Add Gloves
glovesRoute.route('/create').post((req, res, next) => {
    Gloves.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Gloves
glovesRoute.route('/').get((req, res) => {
    Gloves.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Gloves
glovesRoute.route('/read/:id').get((req, res) => {
    Gloves.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Gloves
glovesRoute.route('/update/:id').put((req, res, next) => {
    Gloves.findByIdAndUpdate(req.params.id, {
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

// Delete Gloves
glovesRoute.route('/delete/:id').delete((req, res, next) => {
    Gloves.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = glovesRoute;
