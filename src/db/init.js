const mongoose = require('mongoose')
const uri = "mongodb://127.0.0.1:27017/shopping-portal"

const initDbConnection = () => {
  return mongoose.connect(uri);
}

module.exports = initDbConnection;