const categoriesService = require('../services/categoiesService');
const categoriesController = {
    getCategoriesList: async (req, res) => {
        console.log("cat calll....->>>>>")
        try {
            const categoriesList = await categoriesService.getCategoriesList()
            console.log("🚀 ~ getCategoriesList: ~ categoriesList:", categoriesList)
            res.status(200).json({ message: 'get expense successfull', categoriesList: categoriesList })

        } catch (error) {
            console.log("🚀 ~ getCategoriesList: ~ error:", error)

        }

    }
}
module.exports = categoriesController