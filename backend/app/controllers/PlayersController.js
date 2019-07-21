'use strict';
const moment = require('moment')

const playerService = require('../services/PlayerService');

module.exports.createPlayer = function (req, res) {
    let data = req.body;
    let responseBody = { data: "", status: 0, error: null };
    //store utc date time format
    data.createdAt = moment().utc();
    
    playerService.createPlayer(
        data, (response) => {
            responseBody.status = 200
            responseBody.data = response
            res.json(responseBody)
        }, error => {
            responseBody.status = 400
            responseBody.error = error
            res.send(responseBody)
        });
}

module.exports.getAllPlayers = function (req, res) {
    let data = req.body;
    let responseBody = { data: "", status: 0, error: null };
    console.log('ssssssssssss', new moment().format("HH:mm"))
    playerService.getAllPlayers(
        data, (response) => {
            responseBody.status = 200
            responseBody.data = response
            res.json(responseBody)
        }, error => {
            responseBody.status = 400
            responseBody.error = error
            res.send(responseBody)
        });
}




