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
    db.Place.findById(req.params.id)
    .then(place => {
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
        console.log('err', err)
        res.render('error404')
    })
})

//Delete
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Place.findByIdAndDelete(id)
    res.status(303).redirect('/places')
  } catch (error) {
    console.log(error)
    res.send("ERROR")
  }
})


//Edit
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id], id })
    }
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

module.exports = router
