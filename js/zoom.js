
    jQuery('.app-figure .selectors a').on('click touch', function(e) {
        var iframe = jQuery('.active iframe[src*="youtube"],.active iframe[src*="vimeo"]');
        if (iframe.length) {
            iframe.attr('src',iframe.attr('src'));
        }
        jQuery('.app-figure .zoom-gallery-slide').removeClass('active');
        jQuery('.app-figure .selectors a').removeClass('active');
        jQuery('.app-figure .zoom-gallery-slide[data-slide-id="'+jQuery(this).attr('data-slide-id')+'"]').addClass('active');
        jQuery(this).addClass('active');
        e.preventDefault();
    });
    

    $(function() {
        $(".dd").click(function() {
            $(".zoom-gallery-slide").addClass('active');
            $(".f").removeClass('active');
        });
    });

   
        $(document).ready(function() {
	$('.zoom-slider').owlCarousel({
//        animateIn: 'fadeInLeft',
		loop : false,
		margin : 10,
		dots : false,
		nav : true,
		autoplay : false,
		autoplayHoverPause : true,
		autoplayTimeout : 3000,
		autoplaySpeed : false,
		responsive : {
			0 : {
				items : 1
			},
            741 : {
				items : 1
			},
			768 : {
				items : 2
			},
			800 : {
				items : 2
			},
            
			1000 : {
				items : 3
			}
		}
	});
}); 
      

