const express = require('express');
//const over = require("../models/over");
//const overModel = require("../models/over");

const overRouter = express.Router();
const bowlerEconomy = require('../controllers/economy');
overRouter.get('/bowler/economy', bowlerEconomy.economy);
const batting = require('../controllers/score');
overRouter.get('/team/runs',batting.score);
const database= require('../controllers/showdb');
overRouter.get('/over/show',database.showDb);
const ballData= require('../controllers/updates');
overRouter.post('/over/add', ballData.updates);
const next= require('../controllers/newover');
overRouter.post('/over/append', next.newOver);
const wicket= require('../controllers/wickets');
overRouter.get('/bowler/wickets', wicket.wickets);
const runR= require('../controllers/runRate');
overRouter.get('/team/runrate', runR.runRate);

module.exports = overRouter
