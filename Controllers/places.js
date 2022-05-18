const router = require('express').Router()



router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/res-tables.jpg'
        // https://unsplash.com/photos/YYZU0Lo1uXE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee.jpg'
        // https://unsplash.com/photos/zUNs99PGDg0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
      }]
      
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/show', (req, res) => {
    res.render('places/show')
})

router.get('/edit', (req, res) => {
    res.render('places/edit')
})


module.exports = router
