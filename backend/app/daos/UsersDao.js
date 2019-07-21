const models = require('../models');
const moment = require('moment')

module.exports.createUser = function (userData, callback, errorCallback) {
    let data = userData
    models.Users.create(data).then(response => {
        callback(response)
    }).catch(error => {
        errorCallback(error)
    })
}
