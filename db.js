const { Sequelize } = require('sequelize');

const sequelize= new Sequelize(process.env.DATABASE_URL, {
    retry:{max:10}
});

module.exports = sequelize;