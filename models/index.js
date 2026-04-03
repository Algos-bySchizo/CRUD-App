const sequelize=require('../db');

const User=require('./User');
const Batch=require('./Batch');
const Course=require('./Course');

Course.hasMany(Batch,{foreignKey:"courseId"});
Batch.belongsTo(Course,{foreignKey:'courseId'});

Batch.hasMany(User, {foreignKey:"batchId"});
User.belongsTo(Batch, {foreignKey:"batchId"});

module.exports={sequelize, User, Batch, Course}