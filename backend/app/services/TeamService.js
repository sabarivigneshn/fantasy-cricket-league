const teamDAO = require('../daos/TeamDao')
const bcrypt = require('bcryptjs')

module.exports.createTeam = function (data, callback, errorCallback) {

    teamDAO.createTeam(data, (teamResponse) => {
        callback(teamResponse)
    },(teamError) => {
        errorCallback(teamError)
    })
    
}