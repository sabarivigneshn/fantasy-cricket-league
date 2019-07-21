const usersDAO = require('../daos/UsersDao')
const bcrypt = require('bcryptjs')

module.exports.createUser = function (data, callback, errorCallback) {

    usersDAO.createUser(data, (userResponse) => {
        callback(userResponse)
    },(userError) => {
        errorCallback(userError)
    })
    //create wallet for signedUp user, mandatory dob
    
}