$(function() {

	$.getJSON("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", function(data){
		var usd_data = "";
		$.each(data, function(key, value){
			usd_data += value.sale;
		});
		var show = Number(usd_data[0] + usd_data[1] + usd_data[2] + usd_data[3] + usd_data[4]);
		var show1 = (show + 0.29).toPrecision(3);
		$("#usd-rate").append(show1);
	});


	$("form.callback").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", 
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	




	function isVisible(elem) {

		var coords = elem.getBoundingClientRect();

		var windowHeight = document.documentElement.clientHeight;

		var topVisible = coords.top > 0 && coords.top < windowHeight;
		var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

		return topVisible || bottomVisible;
	}

	function showVisible() {
		var imgs = document.getElementsByTagName('img');
		for (var i = 0; i < imgs.length; i++) {

			var img = imgs[i];

			var realsrc = img.getAttribute('realsrc');
			if (!realsrc) continue;

			if (isVisible(img)) {
				img.src = realsrc;
				img.setAttribute('realsrc', '');
			}
		}
	}
	window.onscroll = showVisible;
	showVisible();





	$(window).scroll(function(){
		$('.navbar-dark').toggleClass('navbar-active', $(this).scrollTop() > 400);
	});

	$('.clients').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		autoplay: true,
		autoplayTimeout: 6000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768:{
				items: 2
			},
			992: {
				items: 3
			}, 
			1200: {
				items: 4
			}
		}
	});



	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		autoplay: true,
		autoplayTimeout: 6000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768:{
				items: 2
			},
			992: {
				items: 2
			}, 
			1200: {
				items: 2
			}
		}
	});






	$('.certificates').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		autoplay: true,
		autoplayTimeout: 12000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768:{
				items: 1
			},
			992: {
				items: 1
			}, 
			1200: {
				items: 1
			}
		}
	});

	// Custom JS

	$( '.on-top' ).on( 'click', function(e){
		var href = $(this).attr( 'href' );
		$( 'html, body' ).animate({
			scrollTop: $( href ).offset().top
		}, '300' );
		e.preventDefault();

	});

	
	$(window).scroll(function(){
		if ($(this).scrollTop()*4 > $(this).height()){
			$(".on-top").addClass("on-top_active");
		}
		else $(".on-top").removeClass("on-top_active");
	})

});



$( '.ultravision-link').on( 'click', function(e){
	var href = $(this).attr( 'href' );
	$( 'html, body' ).animate({
		scrollTop: $( href ).offset().top
	}, '300' );
	e.preventDefault();

});

$(document).mouseup(function (e) {
	var container = $(".sidenav");
	if (container.has(e.target).length === 0){
		container.removeClass("sidenav-close");
		$(".menu-btn").click(function(){
			$(".sidenav").toggleClass("sidenav-close");
		});

	}
});

//$('#usd-rate').remove()