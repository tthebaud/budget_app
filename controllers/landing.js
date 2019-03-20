

exports.landing_get = function(req, res, next) {
  res.render('landing', { title: 'Express' });
}