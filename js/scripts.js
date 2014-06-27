(function($) {

	/////////////////////////////////////////////
	// Execute when DOM is ready
	/////////////////////////////////////////////

	$(function() {

		/////////////////////////////////////////////
		// Initialize map
		/////////////////////////////////////////////
		initialize();

	  /////////////////////////////////////////////
		// Find any element starting with a # in the URL
		//  And listen to any click events it fires
		/////////////////////////////////////////////

		$('a[href^="#"]').click(function() {

			//  Find the target element
			var target = $($(this).attr('href'));

			$('html,body').animate({scrollTop: $(target).offset().top},'slow');

			//  Don't let them visit the url, we'll scroll you there
			return false;
		});

		//////////////////////////////////////
		// Function to animate leaving a page
		//////////////////////////////////////

		$.fn.leavePage = function() {

		  this.click(function(event){
		    // Don't go to the next page yet.
		    event.preventDefault();
		    linkLocation = this.href;

		    // Fade out this page first.
		    $('body').fadeOut(1000, function(){

		      // Then go to the next page.
		      window.location = linkLocation;
		    });
		  });
		};

		// Call the leavePage function upon link clicks with the "transition" class
		$('.transition').leavePage();
		$(".subpage").fadeIn(2000);


		/////////////////////////////////////////////
		// Scroll to top
		/////////////////////////////////////////////
		$('.back-top a').click(function() {
			$('body,html').animate({
				scrollTop : 0
			}, 800);
			return false;
		});

	});

}(jQuery));
