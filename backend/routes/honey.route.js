
const express = require('express');
const app = express();
const honeyRoute = express.Router();

// Honey model
let Honey = require('../models/Honey');

// Add Honey
honeyRoute.route('/create').post((req, res, next) => {
    Honey.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Honey
honeyRoute.route('/').get((req, res) => {
    Honey.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Honey
honeyRoute.route('/read/:id').get((req, res) => {
    Honey.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Honey
honeyRoute.route('/update/:id').put((req, res, next) => {
    Honey.findByIdAndUpdate(req.params.id, {
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

// Delete Honey
honeyRoute.route('/delete/:id').delete((req, res, next) => {
    Honey.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = honeyRoute;
