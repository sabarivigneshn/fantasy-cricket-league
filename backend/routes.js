var express = require('express');
var router = express.Router();
var userscontroller = require('./app/controllers/UsersController')
var teamscontroller = require('./app/controllers/TeamsController')
var playersController = require('./app/controllers/PlayersController')
var teamPlayersController = require('./app/controllers/TeamPlayersController')

router.post('/users/create', userscontroller.createUser)
router.get('/user/', userscontroller.getUser)
router.post('/teams/create', teamscontroller.createTeam)
router.post('/players/create', playersController.createPlayer)
router.get('/players/getAllPlayers', playersController.getAllPlayers)
router.post('/teamPlayers/create', teamPlayersController.CreateTeamPlayer)


module.exports = router;