const bcrypt=require('bcrypt');
const useraccounts=require('../../models/useraccounts');
const userinfos=require('../../models/userinfos');

exports.signUpPost=async (username,password)=>{
    const account = await useraccounts.findOne({Account:username});
    if (account) {
        throw new Error('Username already sign up');
    }
    const hashPassword = await bcrypt.hash(password, 10);
    return useraccounts.create({Account: username, Password: hashPassword});
};

exports.userInfo=(account)=>{
    return userinfos.find({Account: account}).lean();
};