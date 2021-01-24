const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')
const User = new Schema({
  username: {
      type: String,
      required: true
  },
  name: {
      type: String,
      required: true,
  },
  password: {
      type: String,
      required: true
  },
  avatar: {
      type: String,
  },
  friend_list: [String], // danh sách bạn bè
  wait_list: [String], // danh sách chờ kết bạn
  room_list: [String] // dánh sách phòng chat
});

/**
 * Hash mật khẩu trước khi lưu
 */
User.pre('save', async function (next) {
    
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
/**
 * Tạo token 
 */
User.methods.generateAuthToken = async function() {
    
    const user = this
    const token = jwt.sign({
        username: user.username,
        password: user.password
    }, config.JWT_KEY)
    return token
}

/**
 * Tìm user theo username và password
 * @param {String} username 
 * @param {String} password 
 */

User.statics.findByCredentials = async (username, password) => {
    
    const user = await User.findOne({username} )

    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}
module.exports = mongoose.model('User', User);