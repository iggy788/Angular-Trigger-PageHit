'use strict';

describe('myApp.aboutYou module', function() {

  beforeEach(module('myApp.aboutYou'));

  describe('aboutYou controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var aboutYouCtrl = $controller('View1Ctrl');
      expect(aboutYouCtrl).toBeDefined();
    }));

  });
});