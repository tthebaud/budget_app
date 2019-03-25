
const models = require('../models');

exports.landing_get = function(req, res, next) {
	return Promise.all([models.Income.findAll(), models.Bill.findAll()]).then( data => {
		res.render('landing', { title: 'Express', incomes: data[0], bills: data[1] });
	})
}

exports.submit_form = function(req, res, next) {

	if ( req.body.bill == "bill" ){
		return models.Bill.create({
		  	name: req.body.name,
		  	date: req.body.date,
		  	amount: req.body.amount
		  }).then( Bill => {
		  	res.redirect('/');
		})
	} else {
		return models.Income.create({
		  	name: req.body.name,
		  	date: req.body.date,
		  	amount: req.body.amount
		  }).then( Income => {
		  	res.redirect('/');
		})
	}
}


exports.show_leads = function(req, res, next) {
	return models.Bill.findAll().then( bills => {
		res.render('lead/leads', { title: 'Express', bills: bills });
	})
}

exports.show_lead = function(req, res, next) {
	return models.Lead.findOne({
		where : {
			id : req.params.lead_id
		}
	}).then( lead => {
		res.render('lead/lead', { lead : lead });
	});
}

exports.show_edit_lead = function(req, res, next) {
	return models.Lead.findOne({
		where : {
			id : req.params.lead_id
		}
	}).then( lead => {
		res.render('lead/edit_lead', { lead : lead });
	});
}

exports.edit_lead = function(req, res, next) {
	req.params.lead_id
	req.body.lead_email

	return models.Lead.update({
		email: req.body.lead_email
	}, {
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.redirect('/lead/' + req.params.lead_id);
	});
}

exports.delete_lead = function(req, res, next) {
	return models.Lead.destroy({
		where: {
			id: req.params.lead_id
		}
	}).then( result => {
		res.redirect('/leads');
	});
}

exports.delete_lead_json = function(req, res, next) {
	return models.Lead.destroy({
		where: {
			id: req.params.lead_id
		}
	}).then( result => {
		res.send({ msg: "Success"});
	});
}