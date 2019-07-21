'use strict';
const Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
    let Players = sequelize.define("Players", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: Sequelize.DATE
    }, {
            freezeTableName: true
        });

    Players.associate = function (models) {
        Players.hasMany(models.TeamPlayers, {
            foreignKey: { allowNull: false },
            onDelete: 'CASCADE'
        })
    }

    return Players;
};