'use strict';
const bcrypt = require('bcryptjs')
const moment = require('moment')

const userService = require('../services/UsersService');

/* Below method is used for creating user via API
*  To create User we need to send the user object in 
    body as JSON formant
*/
module.exports.createUser = function (req, res) {
    let userData = req.body;
    let responseBody = { data: "", status: 0, error: null };
    //store utc date time format
    userData.createdAt = moment().utc();
    userData.isActive = true
    if (userData.password != '') {
        const hashedPwd = bcrypt.hashSync(userData.password, 8);
        userData.password = hashedPwd;
    }
    userService.createUser(
        userData, (response) => {
            responseBody.status = 200
            responseBody.data = response
            res.json(responseBody)
        }, error => {
            responseBody.status = 400
            responseBody.error = error
            res.send(responseBody)
        });
}

module.exports.getUser = function (req, res) {
    let userData = req.body;
    let responseBody = { data: "success mr cooper", status: 200, error: null };
    //store utc date time format
    res.send(responseBody)
}




