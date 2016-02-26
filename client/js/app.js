var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		// controller: 'HomeController'
		templateUrl: '/partials/home.partial.html'
	})
	.when('/users', {
		controller:'UsersController',
		controllerAs:'usersCtrl',
		templateUrl:'/partials/users.partial.html'
	})
	.otherwise('/')
})