'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /aboutYou when location hash/fragment is empty', function() {
		browser.get('index.html');
		expect(browser.getLocationAbsUrl()).toMatch('/aboutYou');
	});


  describe('aboutYou', function() {

    beforeEach(function() {
      browser.get('index.html#!/aboutYou');
    });


    it('should render aboutYou when user navigates to /aboutYou', function() {
      expect(element.all(by.css('[ng-aboutYou] p')).first().getText()).
        toMatch(/partial for aboutYou/);
    });

  });


  describe('vehicles', function() {

    beforeEach(function() {
      browser.get('index.html#!/vehicles');
    });


    it('should render vehicles when user navigates to /vehicles', function() {
      expect(element.all(by.css('[ng-vehicles] p')).first().getText()).
        toMatch(/partial for vehicles/);
    });

  });

	describe('driverDetails', function() {
		beforeEach(function() {
			browser.get('index.html#!/driverDetails');
		});

		it('should render driverDetails when user navigates to /driverDetails', function() {
			expect(element
					.all(by.css('[ng-driverDetails] p'))
					.first()
					.getText()).toMatch(/partial for Driver Details/);
		});
	});
});
