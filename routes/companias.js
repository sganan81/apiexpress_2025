const { Router } = require('express')
const { getCompanias, getCompania } = require('../controllers/companias')

const rutas = Router()

rutas.get('/', getCompanias)
rutas.get('/:id', getCompania)

module.exports = rutas
