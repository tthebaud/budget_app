var express = require('express');
var router = express.Router(); //router variable is an instance of an express router

let landing = require('../controllers/landing');
let user = require('../controllers/user');

/* GET home page. */
router.get('/', landing.landing_get);

//Login
router.get('/login', user.show_login);
router.get('/signup', user.show_signup);

//Actions perform on leads
router.post('/', landing.submit_lead);
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_lead);
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
router.post('/lead/:lead_id/edit', landing.edit_lead);
router.post('/lead/:lead_id/delete', landing.delete_lead);
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json);
module.exports = router; //exports the module
