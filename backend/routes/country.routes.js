const Router = require('express')
const router = Router()
const {getFiveCountries} = require('../controller/country.controller')

router.get('', getFiveCountries)

module.exports = router