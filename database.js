const mongoose = require('mongoose');
//const url = 'mongodb+srv://pradeeplenka6:hOu2u345lcR3Psys@cluster0.3zmogrl.mongodb.net/mt_dev?retryWrites=true&w=majority'
const connectDB = (url) => {
    console.log("call")
    mongoose.connect(url)
}
// connectDB()
module.exports=connectDB