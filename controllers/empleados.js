
const axios = require('axios')
const  {request, response} = require('express');

const getEmpleados = (req = request, res = response) => {
    const {filter} = req.query;

    const filtro = (filter) ? `?filter=${filter}` : '';

    axios.get(`https://66c78f59732bf1b79fa6e8c7.mockapi.io/api/v1/empleados${filtro}`)
    .then((response)=>{
        const { data = [] } = response;
        
        res.status(200).json({
            msg: 'Ok',
            code: 200,
            data: data
        })
    })
    .catch((e)=>{
        res.status(500).json({
            msg: `Error: ${e} `,
            code: 500,            
        })
    })
}

const getEmpleado = (req = request, res = response) => {
    const {id} = req.params
    axios.get(`https://66c78f59732bf1b79fa6e8c7.mockapi.io/api/v1/empleados/${id}`)
    .then((response)=>{
        const { data = [] } = response;
        
        res.status(200).json({
            msg: 'Ok',
            code: 200,
            data: data
        })
    })
    .catch((e)=>{
        res.status(500).json({
            msg: `Error: ${e} `,
            code: 500,            
        })
    })
}


module.exports = {
    getEmpleados,
    getEmpleado
}