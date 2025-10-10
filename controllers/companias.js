const axios = require('axios')
const { request, response } = require('express')
const URL = process.env.URL_API

const getCompanias = (req = request, res = response) => {
  const { filter } = req.query

  const filtro = (filter) ? `?filter=${filter}` : ''

  console.log(`${URL}/api/v1/companies${filtro}`)

  axios.get(`${URL}/api/v1/companies${filtro}`)
    .then((response) => {
      const { data = [] } = response

      res.status(200).json({
        msg: 'Ok',
        code: 200,
        data
      })
    })
    .catch((e) => {
      res.status(500).json({
        msg: `Error: ${e} `,
        code: 500
      })
    })
}

const getCompania = (req = request, res = response) => {
  const { id } = req.params
  axios.get(`${URL}/api/v1/companies/${id}`)
    .then((response) => {
      const { data = [] } = response

      res.status(200).json({
        msg: 'Ok',
        code: 200,
        data
      })
    })
    .catch((e) => {
      res.status(500).json({
        msg: `Error: ${e} `,
        code: 500
      })
    })
}

module.exports = {
  getCompanias,
  getCompania
}
