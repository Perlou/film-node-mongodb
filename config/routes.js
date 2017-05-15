/**
 * routes
 * @author Perlou(perloukevin@gmail.com)
 */

var Index = require('../app/controllers/index')
var User = require('../app/controllers/user')
var Category = require('../app/controllers/category')

module.exports = function (app) {
    // app.use(function (req, res, next) {
    //     var _user
    // })

    // index
    app.get('/', Index.index)

    // user
    app.post('/user/signup', User.signup)
}
