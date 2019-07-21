const models = require('../models');

module.exports.createPlayer = function (playerData, callback, errorCallback) {
    let data = playerData
    models.Players.create(data).then(response => {
        callback(response)
    }).catch(error => {
        errorCallback(error)
    })
}

module.exports.getAllPlayers = function (playerData, callback, errorCallback) {
    let data = playerData
    models.Players.findAll().then(response => {
        callback(response)
    }).catch(error => {
        errorCallback(error)
    })
}
