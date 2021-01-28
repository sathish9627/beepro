
const express = require('express');
const app = express();
const beeboxRoute = express.Router();

// Beebox model
let Beebox = require('../models/Beebox');

// Add Beebox
beeboxRoute.route('/create').post((req, res, next) => {
    Beebox.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Beebox
beeboxRoute.route('/').get((req, res) => {
    Beebox.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Beebox
beeboxRoute.route('/read/:id').get((req, res) => {
    Beebox.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Beebox
beeboxRoute.route('/update/:id').put((req, res, next) => {
    Beebox.findByIdAndUpdate(req.params.id, {
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

// Delete Beebox
beeboxRoute.route('/delete/:id').delete((req, res, next) => {
    Beebox.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = beeboxRoute;
