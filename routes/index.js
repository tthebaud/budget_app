var express = require('express');
var router = express.Router(); //router variable is an instance of an express router

/* GET home page. */
let landing = require('../controllers/landing');
//The http get method if the path '/' than we are looking for matched 
//we call the next funtion as an handler.
//Then the render method is called to render the index page.
router.get('/', landing.landing_get);
router.post('/', landing.submit_lead);
module.exports = router; //exports the module