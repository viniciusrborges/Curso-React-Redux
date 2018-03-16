const mongoose = require('mongoose')
mongoose.Promise = global.Promise
//module.exports = mongoose.connect('mongodb://localhost/todo')
module.exports = mongoose.connect('mongodb://vinicius:d27m10@ds215709.mlab.com:15709/todo')