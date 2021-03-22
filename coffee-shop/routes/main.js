const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {

    const data = {
        title: "My Coffee House",
        description: "Welcome to our house of coffee! We hope you enjoy our broad selection of premium coffee from all over the world."
    }

    res.render('home', data)
})

module.exports = router