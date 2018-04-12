'use strict';

angular.module('myApp.aboutYou', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aboutYou', {
    templateUrl: 'aboutYou/aboutYou.html',
    controller: 'AboutYouCtrl'
  });
}])

.controller('AboutYouCtrl', [function () {
	// This function is typically used when visitors navigate around your website, but the URL doesn’t change.
	_st.triggerPageHit();
}]);