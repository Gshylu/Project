const  mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

let carRentalSchema = require('../Models/carRental')



router.route('/create-carRental').post((req, res, next) => {
  carRentalSchema.init() 
  carRentalSchema.create(req.body, (error, data) => {
    
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})


router.route('/').get((req, res , next) => {
  carRentalSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
     
      res.json(data)
    }
  })
})

router.route('/edit-carRental/:id').get((req, res, next) => {
  carRentalSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/update-carRental/:id').put((req, res, next) => {
  carRentalSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('carRental updated successfully !')
      }
    },
  )
})

// Delete cars
router.route('/delete-carRental/:id').delete((req, res, next) => {
  carRentalSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
