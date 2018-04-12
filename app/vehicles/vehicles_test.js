'use strict';

describe('myApp.vehicles module', function() {

  beforeEach(module('myApp.vehicles'));

  describe('vehicles controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var vehiclesCtrl = $controller('VehiclesCtrl');
      expect(vehiclesCtrl).toBeDefined();
    }));

  });
});