
const express = require('express');
const app = express();
const beestandRoute = express.Router();

// Beestand model
let Beestand = require('../models/Beestand');

// Add Beestand
beestandRoute.route('/create').post((req, res, next) => {
    Beestand.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Beestand
beestandRoute.route('/').get((req, res) => {
    Beestand.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Beestand
beestandRoute.route('/read/:id').get((req, res) => {
    Beestand.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Beestand
beestandRoute.route('/update/:id').put((req, res, next) => {
    Beestand.findByIdAndUpdate(req.params.id, {
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

// Delete Beestand
beestandRoute.route('/delete/:id').delete((req, res, next) => {
    Beestand.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = beestandRoute;
