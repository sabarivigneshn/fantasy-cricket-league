const models = require('../models');

module.exports.createTeamPlayer = function (playerData, callback, errorCallback) {
    let data = playerData
    models.TeamPlayers.create(data).then(response => {
        callback(response)
    }).catch(error => {
        errorCallback(error)
    })
}
