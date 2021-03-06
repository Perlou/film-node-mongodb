/**
 * routes
 * @author Perlou(perloukevin@gmail.com)
 */

var Index = require('../app/controllers/index')
var User = require('../app/controllers/user')
var Category = require('../app/controllers/category')

module.exports = function (app) {
    app.use(function (req, res, next) {
        var _user = req.session.user

        app.locals.user = _user

        next()
    })

    // index
    app.get('/', Index.index)

    // user
    app.post('/user/signup', User.signup)
    app.post('/user/signin', User.signin)
    app.get('/signin', User.showSignin)
    app.get('/signup', User.showSignup)
    app.get('/logout', User.logout)
    app.get('/admin/user/list', User.signinRequired, User.adminRequired, User.list)

    // category
    app.get('/admin/category/new', User.signinRequired, User.adminRequired, Category.new)
    app.post('/admin/category', User.signinRequired, User.adminRequired, Category.save)
    app.get('/admin/category/list', User.signinRequired, User.adminRequired, Category.list)
}
