const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('https://chat-app3870.herokuapp.com/')
})

module.exports = router
