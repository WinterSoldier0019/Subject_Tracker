const sequelize = require("sequelize")

const DB = new sequelize({
    database: "attendance",
    username: "project",
    password: "password",
    dialect: "mysql"
})

const student = DB.define("student",({
    Roll: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    Name: {
        type: sequelize.STRING,
        allowNull: false
    },
}))

const subject = DB.define("subject",({
    English: {
        type: sequelize.BOOLEAN        
    },
    Hindi: {
        type: sequelize.BOOLEAN
    },
    Maths: {
        type: sequelize.BOOLEAN
    }
}))

student.hasMany(subject)
subject.belongsTo(student)

module.exports = { DB,student,subject }