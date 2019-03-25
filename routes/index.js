var express = require('express');
var router = express.Router(); //router variable is an instance of an express router

let landing = require('../controllers/landing');
let user = require('../controllers/user');
let { isLoggedIn, hasAuth, } = require("../middleware/hasAuth.js");

/* GET home page. */
router.get('/', landing.landing_get);
router.post('/', landing.submit_form);

//Login
router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);
router.get('/logout', user.logout);

//Actions perform on Bill and Income
router.get('/bill-:bill_id', landing.show_bill);
router.post('/bill-:bill_id', landing.edit_bill);
router.get('/income-:income_id', landing.show_income);
router.post('/income-:income_id', landing.edit_income);



router.get('/lead/:lead_id/edit', landing.show_edit_lead);

router.post('/lead/:lead_id/delete', landing.delete_lead);
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json);

module.exports = router; //exports the module
