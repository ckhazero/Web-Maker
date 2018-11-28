
var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local


if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely

  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment

  var password = process.env.MLAB_PASSWORD_WEBDEV;

  connectionString = 'mongodb://' + username + ':' + password;

  connectionString += '@ds119394.mlab.com:19394/heroku_0b64ml6g'; // use yours

}

// Import mongoose library
var mongoose = require("mongoose");


// Connect server with database
var db = mongoose.connect(connectionString, { useNewUrlParser: true });

// Export this file
module.exports = db;