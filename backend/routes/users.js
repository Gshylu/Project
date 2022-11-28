const  mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// car mode;
let usersSchema = require('../Models/users')

// Add users
router.route('/create-users').post((req, res, next) => {
  usersSchema.init() 
  usersSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ users
router.route('/').get((req, res , next) => {
  usersSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
     
      res.json(data)
    }
  })
})
router.route('/edit-users/:id').get((req, res, next) => {
  usersSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/update-users/:id').put((req, res, next) => {
  usersSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('users updated successfully !')
      }
    },
  )
})

// Delete cars
router.route('/delete-users/:id').delete((req, res, next) => {
  usersSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
