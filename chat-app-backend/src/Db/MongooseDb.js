const mongoose = require('mongoose');

const URL = "mongodb://localhost/chat_app"


const connectDb = async () =>{
    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log('DataBase Connected!');
}

module.exports = connectDb;