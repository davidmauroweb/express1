const CategoryService = require('../services/category.service');

class CategoryController {

async get(req, res) {

       return  CategoryService.get()
       .then(function(categories) {
            return res.status(200).json(categories)
        })
        .catch(function(err) {
            return res.status(400).json({error: err.message})
        });
   }

async create(req, res){
    let category = new CategoryService();
    return category.create(req.body)
    .then(function(categories) {
         return res.status(201).json(categories)
     })
     .catch(function(err) {
         return res.status(400).json({error: err.message})
     });

}
}
module.exports = CategoryController; 