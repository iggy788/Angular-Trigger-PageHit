'use strict';

// Declare app level module which depends on views, and components
angular
	.module('myApp', [
		'ngRoute',
		'myApp.aboutYou',
		'myApp.vehicles',
		'myApp.driverDetails',
		'myApp.version'
	])
	.config([
		'$locationProvider',
		'$routeProvider',
		function($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');

			$routeProvider.otherwise({ redirectTo: '/aboutYou' });
			// _st.render();
		}
	]);
