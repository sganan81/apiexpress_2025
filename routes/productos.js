const { Router } = require('express')
const { getProductos, getProducto } = require('../controllers/productos')

const rutas = Router()

rutas.get('/', getProductos)
rutas.get('/:id', getProducto)

module.exports = rutas
