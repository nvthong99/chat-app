const User = require('../models/Users')

class UserController {
    getAllUser = async (req, res) =>{
        const users = await User.find();
        if(!users)
            return res.status(404).send({error:'Not Found!'})
        return res.status(200).send(users);
    }
}
module.exports = new UserController();