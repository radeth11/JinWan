$(function () {
    'use strict'; // Start of use strict
    //hide preloader after loaded
    jQuery('#preloader').delay(500).fadeOut(500);
    // Fixed Navigation js
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#navbar').addClass('header-scrolled');
        } else {
            $('#navbar').removeClass('header-scrolled');
        }
    });

    // testimonials Slider
    $(".owl-testimonials-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    //mobile navbar click
    var w = $(window).width();
    if(w <= 769){
    $(".navbar-mobile .nav-item").on('click', function(){
        $(".navbar-toggler").trigger('click');
    });
    }
    //
    $("#sub-form").submit(function (e) {

		e.preventDefault(); // avoid to execute the actual submit of the form.

        var formData = {
            name:$("#name").val(),
            email:$("#email").val(),
            phone:$("#phone").val(),
            message:$("#message").val()
            }; 
		if ($("#email").val()) {
			$.ajax({
				'url': 'sendmail.php',
				'method': 'POST',
				'dataType': 'json',
				'contentType': 'application/json',
				'data': JSON.stringify(formData),
				'success': function (payload) {
                    if(payload.code=="200"){
                    $(".alert").removeClass("d-none").html("<p>Thanks for contacting us.. we will get back to you soon.</p>").addClass("alert-success");
                    $("#sub-form").trigger("reset");
                    }else{
                    $(".alert").removeClass("d-none").html("<p>Please enter required fields. (or) Try again..</p>").addClass("alert-warning");
                    }
				}
			});
		} else {
            $(".alert").removeClass("d-none").html("<p>Please enter required fields. (or) Try again..</p>").addClass("alert-warning");
		}
	});
});