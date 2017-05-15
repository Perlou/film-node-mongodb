/**
 * category controller
 * @author Perlou(perloukevin@gmail.com)
 */

 var mongoose = require('mongoose')
 var Category = mongoose.model('Category')

exports.new = function (req, res) {
    res.render('categoryadmin', {
        title: '后台分类录入页',
        category: {}
    })
}

exports.save = function (req, res) {
    var _category = req.body.category
    var category = new Category(_category)

    category.save(function (err, category) {
        if (err) {
            console.log(err)
        }

        res.redirect('/admin/category/list')
    })
}

exports.list = function (req, res) {
    Category.fetch(function (err, catetories) {
        if (err) {
            console.log(err)
        }

        res.render('categorylist', {
            title: '分类列表页',
            catetories: catetories
        })
    })
}
