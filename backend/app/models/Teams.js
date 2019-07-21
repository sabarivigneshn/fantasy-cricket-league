'use strict';
const Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
    let Teams = sequelize.define("Teams", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        description: Sequelize.TEXT,
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: Sequelize.DATE,
        isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
    }, {
            freezeTableName: true
        });

    Teams.associate = function (models) {
        Teams.belongsTo(models.Users, {
            foreignKey: { allowNull: false },
            onDelete: 'CASCADE'
        })
        Teams.hasMany(models.TeamPlayers, {
            as: 'TeamPlayers'
        })
    }

    return Teams;
};