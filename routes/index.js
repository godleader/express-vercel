const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');
const demo = require('./demo.route');
const campaigns = require('./campaigns.route');
const user = require('./user.route');

const r = Router();

r.use('/demo', demo);
r.use('/campaigns', campaigns);
r.use('/user', user);

r.get('/', (req, res) => res.json(new SuccessResponseObject('express vercel boiler plate')));

module.exports = r;
