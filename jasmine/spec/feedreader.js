/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 *
 * EDITED BY: Michele "Dev-Mikko" De Palma
 *
 */

$(function() {
	/* Test suite for "RSS Feed" */
    describe('RSS Feeds', function() {
		/* This test verifies that allFeed variable (in ./js/app.js file):
		 * - is defined;
		 * - lenght != 0;
		 */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

		/* This test verifies that allFeed.url: 
		 * - is defined;
		 * - is not empty;
		 */

		it('URL is defined and not empty', function() {
			for(let i in allFeeds) {
				expect(allFeeds[i].url).toBeDefined();
				expect(allFeeds[i].url).not.toBe('');
			}
		});

		/* This test verifies that allFeed.name:
		 * - is defined;
		 * - is not empty;
		 */

		it('name is defined and not empty', function() {
			for(let i in allFeeds) {
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name).not.toBe('');
			}			 
		});
    });


    /* Test suite for "The menu" */
	describe('The menu', function() {
		/* This test verifies that menu is hidden when the page is (re)loaded */
		
		it('is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});

		/* This test verifies that the menu is visibile/hidden after an user clicks on menu icon*/

		it('changes visibility when the menu icon is clicked', function() {
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).not.toBe(true);
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
	});


    /* Test suite for "Initial entries" */
	describe('Initial entries', function() {
		/* This test verifies that there is at least one entry inside feeds container
		 * NOTE: Asynch function
		 */

		beforeEach(function(done) {
			loadFeed(0, done);
		});

		it('should be at least one entry in the feeds container', function() {
			let entries = $('.feed .entry');
			expect(entries.length).toBeGreaterThan(0);
		});
	});


    /* Test suite for "New feed selection" */
	describe('New feed selection', function() {
        /* This test verifies that the content change when a new feed is loaded
		 * NOTE: Asynch function
		 */

		let previewsUrl, newUrl;

		beforeEach(function(done) {
			previewsUrl = $('.feed').html();
			loadFeed(1, done);
		});

		it('should change content if a new feed is loaded', function(done) {
			newUrl = $('.feed').html();
			expect(newUrl).not.toBe(previewsUrl);
			done();
		});
	});
}());
