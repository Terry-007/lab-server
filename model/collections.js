const mongoose = require('./db')

//定义schema，也就是定义一个表（集合）,_id是默认给的，可以禁用的
const UserSchema = mongoose.Schema({
  _id: String,
  studentNum: String,
  password: String,
  avaterUrl: String,
  level: {
    type: Number,
    default: 3
  },
}, { _id: false })

const UserModel = mongoose.model('Users', UserSchema, 'users')

const SchoolSchema = mongoose.Schema({
  _id: String,
  studentNum: String,
  name: String,
  department: String,
  subject: String,
  sex: Number,
  identity: Number,
}, { _id: false })

const SchoolModel = mongoose.model('School', SchoolSchema, 'school')

const DiscussSchema = mongoose.Schema({
  _id: String,
  type: Number,
  openid: String,
  content: String,
  createTime: Number,
  follow: {
    type: Array,
    default: []
  }
}, { _id: false })

const DiscussModel = mongoose.model('Discuss', DiscussSchema, 'discuss')


module.exports = {
  UserModel,
  SchoolModel,
  DiscussModel
}
