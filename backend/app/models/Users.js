'use strict';
const Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
    let Users = sequelize.define("Users", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        emailId: {
            unique: true,
            type: Sequelize.STRING,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phoneNumber: Sequelize.STRING,
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: Sequelize.DATE,
        dateOfBirth: Sequelize.DATE,
        password: Sequelize.STRING,
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: true
        }
    }, {
            freezeTableName: true
        });
    Users.associate = function (models) {
        
        Users.hasMany(models.Teams, {
            as: 'teams',
            foreignKey: { allowNull: false },
            onDelete: 'CASCADE'
        })
    }
    return Users;
};