const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

  //name: { type: String, required: true },
  email: { type: String, required: true },
  //phone: { type: String, required: true },
  password: { type: String, required: true },
  //isVerified: { type: Boolean, default: true },
  //verficationToken: { type: String },
  //restPasswordToken: { type: String },
  //profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }, // Reference to Profile document
  // transections:[{type: mongoose.Schema.Types.objectId, ref: 'Transaction'}],

})

const User = mongoose.model('User', userSchema);


module.exports = User