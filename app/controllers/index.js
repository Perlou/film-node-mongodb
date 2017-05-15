/**
 * index controller
 * @author Perlou(perloukevin@gmail.com)
 */

var mongoose = require('mongoose')
var Category = mongoose.model('Category')

/**
 * index page
 */
exports.index = function (req, res) {
    // res.render('index', {
    //     title: 'film 首页',
    //     categories: []
    // })
    Category
        .find({})
        .populate({
            path: 'movies',
            select: 'title poster',
            options: {
                limit: 6
            }
        })
        .exec(function (err, categories) {
            if (err) {
                console.log(err)
            }

            res.render('index', {
                title: 'film 首页',
                categories: categories
            })
        })
}