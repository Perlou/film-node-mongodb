/**
 * movie model
 * @author Perlou(perloukevin@gmail.com)
 */

var mongoose = require('mongoose')
var MovieSchema = require('../schemas/movie')
var Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie
