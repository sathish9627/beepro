
const express = require('express');
const app = express();
const infoRoute = express.Router();

// Info model
let Info = require('../models/Info');

// Add Info
infoRoute.route('/create').post((req, res, next) => {
  Info.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Info
infoRoute.route('/').get((req, res) => {
  Info.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single info
infoRoute.route('/read/:id').get((req, res) => {
  Info.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update info
infoRoute.route('/update/:id').put((req, res, next) => {
  Info.findByIdAndUpdate(req.params.id, {
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

// Delete info
infoRoute.route('/delete/:id').delete((req, res, next) => {
  Info.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = infoRoute;
