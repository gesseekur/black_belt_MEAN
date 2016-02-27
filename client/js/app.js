var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		// controller: 'HomeController'
		templateUrl: '/partials/login.html'
	})

	.when('/main', {
		templateUrl:'/partials/main.html'
	})

	.when('/create', {
		templateUrl:'/partials/create.html'
	})

	.when('/surveys/:id', {
		templateUrl:'/partials/show.html'
	})
	.otherwise('/')
})