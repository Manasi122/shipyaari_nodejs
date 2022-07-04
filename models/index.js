const dbConfig = require('../config/db.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password, {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: 1,
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected to shipyaari database..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require('./users.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('All models were synchronized successfully.')
})

module.exports = db

