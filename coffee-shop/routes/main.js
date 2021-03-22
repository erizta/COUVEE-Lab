const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {

    const data = { title: "My Coffee House" }

    res.render('home', data)
})

module.exports = router