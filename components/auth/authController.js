exports.signInGet = (req, res)=>{
	res.render('auth/signIn', { title: 'Express' });
};

exports.logout = (req, res) => {
	req.logout();
	res.redirect('/');
};