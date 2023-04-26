const CategoryService = require('../services/category.service');

function get(req, res) {

       return  CategoryService.get()
       .then(function(categories) {
            return res.status(200).json(categories)
        })
        .catch(function(err) {
            return res.status(400).json({error: err.message})
        });
   }

exports.get = get; 