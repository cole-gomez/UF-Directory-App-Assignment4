//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://CEN3031:CEN3031TA@ds161062.mlab.com:61062/assignment3app', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT || 8080
};
