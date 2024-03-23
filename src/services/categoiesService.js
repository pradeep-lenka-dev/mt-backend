const categories = require('../models/categoriesModel')

class categoriesService {

    async getCategoriesList() {
        console.log("calll service....---->>>>")
        try {
            const categoriesList = await categories.find()
            console.log("🚀 ~ categoriesService ~ getCategoriesList ~ categoriesList:", categoriesList)
            return categoriesList
        } catch (error) {

        }
    }

}

module.exports = new categoriesService()
