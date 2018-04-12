'use strict';

angular.module('myApp.driverDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/driverDetails', {
    templateUrl: 'driverDetails/driverDetails.html',
    controller: 'DriverDetailsCtrl'
  });
}])

.controller('DriverDetailsCtrl', [function () {
	// This function is typically used when visitors navigate around your website, but the URL doesn’t change.
	_st.triggerPageHit();
}]);
