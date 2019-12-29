const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(bodyParser.raw())

router.use(async (req, res) => {
    return res.send('ok')
})

module.exports = router