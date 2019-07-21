const models = require('../models');

module.exports.createTeam = function (teamData, callback, errorCallback) {
    let data = teamData
    models.Teams.create(data).then(response => {
        callback(response)
    }).catch(error => {
        errorCallback(error)
    })
}
