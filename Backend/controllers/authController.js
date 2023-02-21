const User = require('../models/User')

exports.createUser = async (req, res) => { 
    try {
        const user = await User.create(req.body);
        console.log(user);
        res.status(201).json({
            status: 'success',
            user
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        await User.findOne({email}).then(user => {
            if(password === user.password) {
                res.status(200).json({
                    status: 'success',
                    user
                })
            } else {
                res.status(400).json({
                    status: 'fail',
                    msg: 'Wrong password'
                })
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            msg: 'No users found',
            error
        })
    }
}