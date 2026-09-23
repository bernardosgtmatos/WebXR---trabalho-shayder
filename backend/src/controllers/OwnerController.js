const sequelize = require('../config/Database.js')
const DataTypes = require('sequelize')

const teste = async (req, res) => {
    const {nome} = req.body
    if(!nome){
        return res.status(400).json(`error ao fazer requisição`)
    }
    try {
        console.log('requisição feita com sucesso!');
        
    } catch (error) {
        return res.status(400).json(`error ao fazer requisição ${error}`)
    }
}

module.exports ={ teste }