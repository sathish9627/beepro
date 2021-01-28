
const express = require('express');
const app = express();
const smokerRoute = express.Router();

// Smoker model
let Smoker = require('../models/Smoker');

// Add Smoker
smokerRoute.route('/create').post((req, res, next) => {
    Smoker.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Smoker
smokerRoute.route('/').get((req, res) => {
    Smoker.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Smoker
smokerRoute.route('/read/:id').get((req, res) => {
    Smoker.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Smoker
smokerRoute.route('/update/:id').put((req, res, next) => {
    Smoker.findByIdAndUpdate(req.params.id, {
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

// Delete Smoker
smokerRoute.route('/delete/:id').delete((req, res, next) => {
    Smoker.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = smokerRoute;
