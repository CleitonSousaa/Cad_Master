require('dotenv').config({ path: '../.env' });
const Sequelize = require('sequelize')

const name = process.env.DB_NAME
const user = process.env.DB_USER
const pass= process.env.DB_PASS
const host= process.env.DB_HOST

console.log(name);
const sequelize = new Sequelize(name, user, pass, {
    host: host,
    dialect:"mysql",
    query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
