const sequelize=require('../db')
const {DataTypes}=require('sequelize')

const Course=sequelize.define('Course',{
    name:{
        type:DataTypes.STRING,
        allowNull:true
    }
});

module.exports = Course;