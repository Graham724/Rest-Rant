const router = require('express').Router()
const db = require('../models')
const places = require('../models/places.js')

//Get
router.get('/', (req, res) => {     
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.get('/new', (req,res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id).populate('comments')
    .then(place => {
      console.log(place)
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})


//Post
router.post('/', (req, res) => {
    if(!req.body.pic) {
      delete req.body['pic']
    }
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
          let message = 'Validation Error:'
          for (let field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message} `
          }
          console.log('Validation error message', message)
          res.render('places/new', { message })
        }
        else {
          res.render('error404')
        }
    })
})

//Delete
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
      .then(() => {
          res.redirect('/places')
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})


//Edit
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
      .then(place => {
          res.render('places/edit', { place })
      })
      .catch(err => {
          res.render('error404')
      })
})


  router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      if(!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
      }
      if(!req.body.city) {
        req.body.city = 'Anytown'
      }
      if(!req.body.state) {
        req.body.state = 'USA'
      }
      places[id] = req.body
      res.redirect(`/places/${id}`)
    }
  })

  router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment._id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
})


module.exports = router
