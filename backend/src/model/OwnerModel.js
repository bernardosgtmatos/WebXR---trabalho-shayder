const sequelize = require('./config/database.js');
const { DataTypes } = require('sequelize');

const Owner = sequelize.define('Owner', {
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
})asdasd
