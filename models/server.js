const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.rutas()
  }

  rutas () {
    /* this.app.get('/', (req, res) => res.send('Hello World!')) */
    this.app.use('/api/v1/empleados', require('../routes/empleados'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Api escuchando en el puerto: ${this.port}`)
    })
  }
}

module.exports = Server
