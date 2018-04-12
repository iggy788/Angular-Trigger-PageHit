'use strict';

angular.module('myApp.vehicles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vehicles', {
    templateUrl: 'vehicles/vehicles.html',
    controller: 'VehiclesCtrl',
  });
}])

.controller('VehiclesCtrl', [function() {
	// This function is typically used when visitors navigate around your website, but the URL doesn’t change.
	_st.triggerPageHit();
}]);
