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

//Actions perform on bills
router.get('/bill-:bill_id/edit_bill', landing.show_edit_bill);
router.post('/bill-:bill_id/edit_bill', landing.edit_bill);
router.post('/bill-:bill_id/delete_bill', landing.delete_bill);

//Actions perform on incomes
router.get('/income-:income_id/edit_income', landing.show_edit_income);
router.post('/income-:income_id/edit_income', landing.edit_income);
router.post('/income-:income_id/delete_income', landing.delete_income);



module.exports = router; //exports the module
