const mongoose = require('mongoose')
const categoriesSchema = new mongoose.Schema({
    name: { type: String }
})

const categories = mongoose.model("categories", categoriesSchema)
module.exports = categories