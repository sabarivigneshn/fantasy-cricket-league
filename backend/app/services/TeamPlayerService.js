const teamPlayerDAO = require('../daos/TeamPlayerDao')

module.exports.createTeamPlayer = function (data, callback, errorCallback) {

    teamPlayerDAO.createTeamPlayer(data, (teamResponse) => {
        callback(teamResponse)
    },(teamError) => {
        errorCallback(teamError)
    })
    
}
