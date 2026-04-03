const sequelize=require('../db');
const {DataTypes} = require("sequlize")

const Batch=sequelize.define('Batch',{
    name:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
})

module.exports = Batch;