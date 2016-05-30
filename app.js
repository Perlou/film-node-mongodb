/**
 * @author Perlou
 * @app.js
 */

var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var path = require('path');
var app = express();
var Movie = require('./models/movie');
var _ = require('underscore');

mongoose.connect('mongodb://localhost/film');

app.set('views','./views/pages');
app.set('view engine', 'jade');
//app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.listen(port);

console.log('started on:' + port);

//index
app.get('/', function(req, res){
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err);
		}
		res.render('index',{
			title: '首页',
			movies: movies
		});		
	});
	
});

//detail
app.get('/movie/:id', function(req, res){
	var id = req.params.id;

	Movie.findById(id, function(err,movie){
		res.render('detail',{
			title: movie.title,
			movie: movie
		});
	});
});

//admin
app.get('/admin/movie', function(req, res){
	res.render('admin',{
		title: '后台录入页',
		movie: {
			doctor: 'perlou',
			country: '美国',
			title: '魔兽',
			year: 2014,
			poster: 'http://www.baidu.com',
			language: '英语',
			flash: 'http://www.baidu.com',
			summary: 'wowowow'
		}
	});
});

//admin update movie
app.get('/admin/update/:id',function(req,res){
	var id = req.params.id;
	if(id){
		Movie.findById(id, function(){
			res.render('admin',{
				title: '后台更新也'
			});
		});
	}
});

//admin post movie
app.post('/admin/movie/new',function(res,req){
	var id = req.body.movie._id;
	var movieObj = req.body.movie;
	var _movie;

	if(id !== 'undefined'){
		Movie.findById(id, function(err, movie){
			if(err){
				console.log(err);
			}
			_movie = _.extend(movie, movieObj);
			_movie.save(function(err,movie){
				if(err){
					console.log(err);
				}
				res.redirect('/movie/' + movie._id);
			});
		});
	}else{
		_movie = new Movies({
			doctor: movieObj.doctor,
			title: movieObj.title,
			country: movieObj.country,
			language: movieObj.language,
			year: movieObj.year,
			poster: movieObj.poster,
			summary: movieObj.summary,
			flash: movieObj.flash,
		});
		_movie.save(function(err,movie){
			if(err){
				console.log(err);
			}
			res.redirect('/movie/' + movie._id);
		});
	}
});

//list
app.get('/admin/list', function(req, res){
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err);
		}
		res.render('index',{
			title: '首页',
			movies: movies
		});		
	});
	
});







