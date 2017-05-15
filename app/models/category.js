/**
 * category model
 * @author Perlou(perloukevin@gmail.com)
 */

var mongoose = require('mongoose')
var CategorySchema = require('../schemas/category')
var Category = mongoose.model('Category', CategorySchema)

module.exports = Category
