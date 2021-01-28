
const express = require('express');
const app = express();
const honeyextractorRoute = express.Router();

// Honeyextractor model
let Honeyextractor = require('../models/Honeyextractor');

// Add Honeyextractor
honeyextractorRoute.route('/create').post((req, res, next) => {
    Honeyextractor.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Honeyextractor
honeyextractorRoute.route('/').get((req, res) => {
    Honeyextractor.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Honeyextractor
honeyextractorRoute.route('/read/:id').get((req, res) => {
    Honeyextractor.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Honeyextractor
honeyextractorRoute.route('/update/:id').put((req, res, next) => {
    Honeyextractor.findByIdAndUpdate(req.params.id, {
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

// Delete Honeyextractor
honeyextractorRoute.route('/delete/:id').delete((req, res, next) => {
    Honeyextractor.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = honeyextractorRoute;
