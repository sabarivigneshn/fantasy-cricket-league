'use strict';
const moment = require('moment')
const time = require('../../config/config.json').time
const teamPlayerService = require('../services/TeamPlayerService');

module.exports.CreateTeamPlayer = function (req, res) {
    let data = req.body;
    let responseBody = { data: "", status: 0, error: null };
    //store utc date time format
    data.createdAt = moment().utc();
    console.log('==========config', time)
    const currentTime = new moment().format("HH:mm")
    if (currentTime < time.team_selection_end_time) {
        teamPlayerService.createTeamPlayer(
                data, (response) => {
                    responseBody.status = 200
                    responseBody.data = response
                    res.json(responseBody)
                }, error => {
                    responseBody.status = 400
                    responseBody.error = error
                    res.send(responseBody)
                });
    } else {
        responseBody.status = 400
        responseBody.error = "Team selection time exceeds.."
        res.send(responseBody)
    }
}



