const Sequelize = require('sequelize')



const sequelize = new Sequelize('Expense', 'root', 'Vathsalapm@152',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;
