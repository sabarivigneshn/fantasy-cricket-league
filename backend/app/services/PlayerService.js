const playerDAO = require('../daos/PlayerDao')

module.exports.createPlayer = function (data, callback, errorCallback) {

    playerDAO.createPlayer(data, (teamResponse) => {
        callback(teamResponse)
    },(teamError) => {
        errorCallback(teamError)
    })
    
}

module.exports.getAllPlayers = function (data, callback, errorCallback) {

    playerDAO.getAllPlayers(data, (teamResponse) => {
        callback(teamResponse)
    },(teamError) => {
        errorCallback(teamError)
    })
    
}