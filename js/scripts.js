(function($) {

	/////////////////////////////////////////////
	// Execute when DOM is ready
	/////////////////////////////////////////////

	$(document).ready(function() {

		/////////////////////////////////////////////
		// Initialize map
		/////////////////////////////////////////////
		initialize();

		/////////////////////////////////////////////
		// Pageslide
		/////////////////////////////////////////////
		TriggerClick = 0;
		$("#click-me").click(function () {
			if(TriggerClick==0){
				TriggerClick=1;
	        	$(".lines-button.x").toggleClass("open");
	        	$(".lines-button.x").toggleClass("close");
	        	$("nav").animate({right: "0px", opacity: "1"},1000, "easeOutExpo");
	        }else{
		        TriggerClick=0;
		        $(".lines-button.x").toggleClass("open");
	        	$(".lines-button.x").toggleClass("close");
		        $("nav").animate({right: "-100%", opacity: "0"},1000, "easeOutExpo");
		    };
	    });

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

		$('#nav a.slide-me').click(function(){
			TriggerClick=0;
	        $(".lines-button.x").toggleClass("open");
        	$(".lines-button.x").toggleClass("close");
	        $("nav").animate({right: "-350px", opacity: "0"},1000, "easeOutExpo");
		});

		/////////////////////////////////////////////
		// Add .active class to nav items
		/////////////////////////////////////////////
		var header_height = $('#nav').outerHeight();
		var sections = [];
		$('#nav a.slide-me').each(function(){
		    var section = $(this.hash).offset()
		    sections.push({
		        'link':$(this).parent(),
		        'top' : $(this.hash).offset().top-header_height,
		        'bottom' : $(this.hash).offset().top + $(this.hash).outerHeight() -header_height
		    });
		});

		$(window).scroll(function(){
		    for(var i = 0; i < sections.length; i++)
		        if($(window).scrollTop() >= sections[i].top &&
		           $(window).scrollTop() <= sections[i].bottom){
		            sections[i].link.addClass('active')
		                .siblings().removeClass('active');
		        }
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

		/*
		* Call the leavePage function upon link clicks with the "transition" class
		*/
		$('.transition').leavePage();

		// var loadPage = function(){
		//   $(".subpage").fadeIn(2000);
		// }

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
