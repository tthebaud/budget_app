
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

exports.show_bill = function(req, res, next) {
	return models.Bill.findOne({
		where : {
			id : req.params.bill_id
		}
	}).then( bill => {
		res.render('bill/bill', { bill: bill });
	});
}

exports.edit_bill = function(req, res, next) {
	return models.Bill.update({
		name: req.body.name,
		date: req.body.date,
		amount: req.body.amount
	}, {
		where: {
			id: req.params.bill_id
		}
	}).then( result => {
		res.redirect('/');
	});
}

exports.show_income = function(req, res, next) {
	return models.Income.findOne({
		where : {
			id : req.params.income_id
		}
	}).then( income => {
		res.render('income/income', { income: income });
	});
}

exports.edit_income = function(req, res, next) {
	return models.Income.update({
		name: req.body.name,
		date: req.body.date,
		amount: req.body.amount
	}, {
		where: {
			id: req.params.income_id
		}
	}).then( result => {
		res.redirect('/');
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