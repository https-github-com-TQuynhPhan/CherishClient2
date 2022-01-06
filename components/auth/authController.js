exports.signInGet = (req, res)=>{
	res.render('auth/signIn', {wrongPassword: req.query.wrongPassword !== undefined});
};

exports.logout = (req, res) => {
	req.logout();
	res.redirect('/');
};