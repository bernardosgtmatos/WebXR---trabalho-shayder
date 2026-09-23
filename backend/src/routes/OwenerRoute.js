const {teste } = require('../controllers/OwnerController.js')
const express = require('express')
const OwnerRoute = express()

OwnerRoute.use('/', teste)

module.exports = {OwnerRoute}