var mongoose = require('mongoose')
var compSchema = mongoose.Schema({
  name: String,
  room_no: String,
  floor: String,
  wing: String,
  type: String,
  desc: String,
  date: Date
})

module.exports = mongoose.model('Complaints', compSchema)
