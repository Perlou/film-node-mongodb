/**
 * user controller
 * @author Perlou(perloukevin@gmail.com)
 */

var mongoose = require('mongoose')
var User = mongoose.model('User')

exports.showSignup = function (req, res) {
    res.render('signup', {
        title: '注册页面'
    })
}

exports.showSignin = function (req, res) {
    res.render('signin', {
        title: '登录页面'
    })
}

/**
 * 注册
 */
exports.signup = function (req, res) {

}

/**
 * 登录
 */
exports.signin = function (req, res) {

}

/**
 * 登出 logout
 */
exports.logout = function (req, res) {
    
}
