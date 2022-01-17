const authService=require('./authService');
exports.signInGet = (req, res)=>{
	res.render('auth/signIn', {wrongPassword: req.query.wrongPassword !== undefined});
};

exports.signUpGet=(req,res)=>{
	res.render('auth/signUp');
};

exports.signUpPost = async (req, res) => {
	const {username, password} = req.body;
	try {
		if (!username || !password) {
			res.render('auth/signUp', {errorCode: 1});
		} else {
			await authService.signUpPost(username, password);
			res.redirect('/signIn');
		}
	} catch (error) {
		res.render('auth/signUp', {errorCode: 2});
	}
//
// 	var redirectTo = req.session.redirectTo || '/';
// 	delete req.session.redirectTo;
// // is authenticated ?
// 	res.redirect(redirectTo);
};

exports.logout = (req, res) => {
	req.logout();
	res.redirect('/');
};

exports.userInfo = async (req, res) => {

	let account="user1";
	try{
		account=req.params.Account;

	}catch (err) {
		throw err;
	}
	const userInfo=await authService.userInfo(account);
	res.render('auth/userInfo',{userInfo});
};
