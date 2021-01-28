
const express = require('express');
const app = express();
const beesRoute = express.Router();

// Bees model
let Bees = require('../models/Bees');

// Add Bees
beesRoute.route('/create').post((req, res, next) => {
    Bees.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Bees
beesRoute.route('/').get((req, res) => {
    Bees.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Bees
beesRoute.route('/read/:id').get((req, res) => {
    Bees.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Bees
beesRoute.route('/update/:id').put((req, res, next) => {
    Bees.findByIdAndUpdate(req.params.id, {
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

// Delete Bees
beesRoute.route('/delete/:id').delete((req, res, next) => {
    Bees.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = beesRoute;
