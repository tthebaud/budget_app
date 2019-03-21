
const models = require('../models');

exports.landing_get = function(req, res, next) {
  res.render('landing', { title: 'Express' });
}

exports.submit_lead = function(req, res, next) {
  console.log("lead email:", req.body.lead_email);

  return models.Lead.create({
  	email: req.body.lead_email
  }).then( lead => {
  	res.redirect('/');
  })
}