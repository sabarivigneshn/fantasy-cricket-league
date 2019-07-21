'use strict';
const moment = require('moment')

const teamService = require('../services/TeamService');

module.exports.createTeam = function (req, res) {
    let teamData = req.body;
    let responseBody = { data: "", status: 0, error: null };
    //store utc date time format
    teamData.createdAt = moment().utc();
    teamData.isActive = true
    
    teamService.createTeam(
        teamData, (response) => {
            responseBody.status = 200
            responseBody.data = response
            res.json(responseBody)
        }, error => {
            responseBody.status = 400
            responseBody.error = error
            res.send(responseBody)
        });
}




