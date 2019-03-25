
const models = require('../models');

exports.landing_get = function(req, res, next) {
	return Promise.all([
		models.Income.findAll({
			order: [[ "date", "DESC" ]],
		}),
		models.Bill.findAll({
			order: [[ "date", "DESC" ]],
		})]).then( data => {
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

exports.show_edit_bill = function(req, res, next) {
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

exports.delete_bill = function(req, res, next) {
	return models.Bill.destroy({
		where: {
			id: req.params.bill_id
		}
	}).then( result => {
		res.send({ msg: "Success"});
	});
}

exports.show_edit_income = function(req, res, next) {
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

exports.delete_income = function(req, res, next) {
	return models.Income.destroy({
		where: {
			id: req.params.income_id
		}
	}).then( result => {
		res.send({ msg: "Success"});
	});
}
