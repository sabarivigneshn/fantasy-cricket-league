'use strict';
const Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
    let TeamPlayers = sequelize.define("TeamPlayers", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: Sequelize.DATE
    }, {
            freezeTableName: true
        });

    TeamPlayers.associate = function (models) {
        TeamPlayers.belongsTo(models.Players, {
            foreignKey: { allowNull: false },
        })
    }

    return TeamPlayers;
};