
const express = require('express');
const app = express();
const knifeRoute = express.Router();

// Knife model
let Knife = require('../models/Knife');

// Add Knife
knifeRoute.route('/create').post((req, res, next) => {
    Knife.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Knife
knifeRoute.route('/').get((req, res) => {
    Knife.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Knife
knifeRoute.route('/read/:id').get((req, res) => {
    Knife.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Knife
knifeRoute.route('/update/:id').put((req, res, next) => {
    Knife.findByIdAndUpdate(req.params.id, {
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

// Delete Knife
knifeRoute.route('/delete/:id').delete((req, res, next) => {
    Knife.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = knifeRoute;
