const jwt = require('jsonwebtoken')
const User = require('../models/Users');
const config = require('../config');
const auth = async (req, res, next) => {
    
    try{
        const token = req.header('Authorization').replace('Bearer ','');
        const data = jwt.verify(token, config.JWT_KEY);
        if(!data) throw new Error()
        const user = await User.findOne({username: data.username});
        if(!user) throw new Error();
        req.user = user
        req.token = token
        next()
    }
    catch{
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
}
module.exports = auth;