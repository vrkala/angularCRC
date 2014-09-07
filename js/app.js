angular.module('myApp', ['ngRoute'])
	
	.config(function($routeProvider, $locationProvider) {

		$routeProvider
	 .when('/student', {
		templateUrl: 'partials/student.html',
		controller: 'ListController'
	  }).
	   when('/e2', {
		templateUrl: 'partials/e2.html',
		controller: 'ListController'
	  }).
	  when('/employer', {
		templateUrl: 'partials/employer.html',
		controller: 'employerCtrl'
	  }).
	  when('/faculty', {
		templateUrl: 'partials/faculty.html',
		controller: 'ListController'
	  }).
	   when('/alumni', {
		templateUrl: 'partials/alumni.html',
		controller: 'ListController'
	  }).
	   when('/about', {
		templateUrl: 'partials/about.html',
		controller: 'ListController'
	  }).
	   when('/contact', {
		templateUrl: 'partials/contact.html',
		controller: 'ListController'
	  }).
	  when('/employer/gatorcareerlink', {
		templateUrl: 'partials/gatorcareerlink.html',
		controller: 'ListController'
	  }).
	  otherwise({
		redirectTo: '/',
		templateUrl: 'partials/student.html'
	  });
	
		// use the HTML5 History API
		$locationProvider.html5Mode(true);
	});