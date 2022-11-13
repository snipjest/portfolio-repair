$(document).ready(function() {

	$( ".rel-form" ).on( "click", function() {
    var title = $(this).attr('rel');
    var form = $('.form-work');
    form.find('input[name="type"]').val(title);
    form.find('h2').html(title);
  });

	//Модальное окно
	$(".popup-form").magnificPopup({
		type: 'inline',
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
	});

	$('.phone-mask').mask("+7(999)999-9999", {autoclear: false});

	function isValidPhone(phoneAddress) {
    var pattern = new RegExp(/\+\d{1}\(\d{3}\)\d{3}-\d{4}/g);
    return pattern.test(phoneAddress);
  }


	$( "#form-free-price" ).on( "submit", function(e) {
    var name = $('#form-free-price .name').val();
    var phone = $("#form-free-price .tele").val();
    var type = $("#form-free-price .type").val();

    if (name == ""){
        $('#form-free-price .name').addClass('inerror');
        setTimeout("$('#form-free-price .name').removeClass('inerror');", 1000);
        send_name = '0';
     }
     else{
        send_name = '1';
     }     
     if (isValidPhone(phone) == false){
         $('#form-free-price .tele').addClass('inerror');
         setTimeout("$('#form-free-price .tele').removeClass('inerror');", 1000);
         send_phone = '0';
      }
      else{ 
          send_phone = '1'; 
      }
     if (send_name == '1' && send_phone == '1'){
      
      $.ajax({
        type: 'POST',
        url: '../call/call.php',
        data: "name=" + name + "&phone=" + phone + "&type=" + type,
        dataType: "html",
        success: function(data) {
        	$('#modal-free-price .form-hidd').fadeOut(200, function() {  
			      $('#modal-free-price .form-success').fadeIn(200);
			    });
			    setTimeout(function() {
			      $.magnificPopup.close();
			      $('#modal-free-price .reset').val('');
			      $('#modal-free-price .form-success').fadeOut(200, function() {  
				      $('#modal-free-price .form-hidd').fadeIn(200);
				    });
			    }, 10000);
      	}
      });
    }
    e.preventDefault();
  });


  $( "#form-work" ).on( "submit", function(e) {
    var name = $('#form-work .name').val();
    var phone = $("#form-work .tele").val();
    var type = $("#form-work .type").val();

    if (name == ""){
        $('#form-work .name').addClass('inerror');
        setTimeout("$('#form-work .name').removeClass('inerror');", 1000);
        send_name = '0';
     }
     else{
        send_name = '1';
     }     
     if (isValidPhone(phone) == false){
         $('#form-work .tele').addClass('inerror');
         setTimeout("$('#form-work .tele').removeClass('inerror');", 1000);
         send_phone = '0';
      }
      else{ 
          send_phone = '1'; 
      }
     if (send_name == '1' && send_phone == '1'){
      
      $.ajax({
        type: 'POST',
        url: '../call/call.php',
        data: "name=" + name + "&phone=" + phone + "&type=" + type,
        dataType: "html",
        success: function(data) {
        	$('#modal-work .form-hidd').fadeOut(200, function() {  
			      $('#modal-work .form-success').fadeIn(200);
			    });
			    setTimeout(function() {
			      $.magnificPopup.close();
			      $('#modal-work .reset').val('');
			      $('#modal-work .form-success').fadeOut(200, function() {  
				      $('#modal-work .form-hidd').fadeIn(200);
				    });
			    }, 10000);
      	}
      });
    }
    e.preventDefault();
  });



  $( "#form-free1" ).on( "submit", function(e) {
    var name = $('#form-free1 .name').val();
    var phone = $("#form-free1 .tele").val();
    var type = $("#form-free1 .type").val();

    if (name == ""){
        $('#form-free1 .name').addClass('inerror');
        setTimeout("$('#form-free1 .name').removeClass('inerror');", 1000);
        send_name = '0';
     }
     else{
        send_name = '1';
     }     
     if (isValidPhone(phone) == false){
         $('#form-free1 .tele').addClass('inerror');
         setTimeout("$('#form-free1 .tele').removeClass('inerror');", 1000);
         send_phone = '0';
      }
      else{ 
          send_phone = '1'; 
      }
     if (send_name == '1' && send_phone == '1'){
      
      $.ajax({
        type: 'POST',
        url: '../call/call.php',
        data: "name=" + name + "&phone=" + phone + "&type=" + type,
        dataType: "html",
        success: function(data) {
			  	$.magnificPopup.open({
			      items: {
			        src: '#modal-popup-success',
			           
			      },
			      removalDelay: 300,
    				mainClass: 'my-mfp-zoom-in'
			    });
			    setTimeout(function() {
			    	$('.reset').val('');
			      $.magnificPopup.close();
			    }, 10000);
				}
      });
    }
    e.preventDefault();
  });


  $( "#form-free2" ).on( "submit", function(e) {
    var name = $('#form-free2 .name').val();
    var phone = $("#form-free2 .tele").val();
    var type = $("#form-free2 .type").val();

    if (name == ""){
        $('#form-free2 .name').addClass('inerror');
        setTimeout("$('#form-free2 .name').removeClass('inerror');", 1000);
        send_name = '0';
     }
     else{
        send_name = '1';
     }     
     if (isValidPhone(phone) == false){
         $('#form-free2 .tele').addClass('inerror');
         setTimeout("$('#form-free2 .tele').removeClass('inerror');", 1000);
         send_phone = '0';
      }
      else{ 
          send_phone = '1'; 
      }
     if (send_name == '1' && send_phone == '1'){
      
      $.ajax({
        type: 'POST',
        url: '../call/call.php',
        data: "name=" + name + "&phone=" + phone + "&type=" + type,
        dataType: "html",
        success: function(data) {
			  	$.magnificPopup.open({
			      items: {
			        src: '#modal-popup-success',
			           
			      },
			      removalDelay: 300,
    				mainClass: 'my-mfp-zoom-in'
			    });
			    setTimeout(function() {
			    	$('.reset').val('');
			      $.magnificPopup.close();
			    }, 10000);
				}
      });
    }
    e.preventDefault();
  });







	// Анимация гамбургера
	$('.mobile-menu-btn').on('click', function() {
	  if($(this).hasClass('active')) {
	    $('.mobile-menu-btn').removeClass('active');
	  } else {
	    $('.mobile-menu-btn').addClass('active');
	  }
	});



	//Моб. меню
	var touch   = $('#touch-menu');
	var menu    = $('#my-menu');
	$(touch).on('click', function(e) {
	    e.preventDefault();
	    menu.toggle();
	});
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 767 && menu.is(':hidden')) {
	        menu.removeAttr('style');
	    }
	});



	//Меню при скролле
	$(window).scroll(function() {
	var w = $(window).width();
	var scrollTop = $(window).scrollTop();

	if(w > 767) {
    if (scrollTop > 1) {
      $(".header").addClass("menu-fixed");
    } else {
      $(".header").removeClass("menu-fixed");
    }
  }
  else{
  	$(".header").removeClass("menu-fixed");
  }
  });


 //Плавный скролл до якоря
	$("a.ancLinks").click(function () { 
	  var elementClick = $(this).attr("href");
	  var destination = $(elementClick).offset().top - 80;
	  $('html,body').animate( { scrollTop: destination }, 1100 );
	  return false;
	});


	//Вверх
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

	var swiper = new Swiper('.slider-dvs', {
	slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
	});


	var swiper = new Swiper('.slider-work', {
		slidesPerView: 4,
	  spaceBetween: 30,
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  breakpoints: {
	    600: {
	      slidesPerView: 1,
	      spaceBetween: 10,
	      pagination: {
	        el: '.swiper-pagination',
	      }
	    },
	    768: {
	      slidesPerView: 2,
	      spaceBetween: 20,
	      pagination: {
	        el: '.swiper-pagination',
	      }
	    },
	    1024: {
	      slidesPerView: 3,
	      spaceBetween: 30
	    }
	  }
	});


	var swiper = new Swiper('.slider-feed', {
		slidesPerView: 3,
	  spaceBetween: 30,
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	  breakpoints: {
	    600: {
	      slidesPerView: 1,
	      spaceBetween: 10,
	      pagination: {
	        el: '.swiper-pagination',
	      }
	    },
	    768: {
	      slidesPerView: 2,
	      spaceBetween: 20,
	      pagination: {
	        el: '.swiper-pagination',
	      }
	    },
	    1024: {
	      slidesPerView: 3,
	      spaceBetween: 30
	    }
	  }
	});


	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});



	if($(window).width() > 767) {
	    	var height = $(window).height() + 5;
	      var unitHeight = parseInt(height) + 'px';
	      $('.homepage-hero-module').css('height',unitHeight);

	      var videobackground = new $.backgroundVideo($('.homepage-hero-module'), {
	        "align": "centerXY",
	        "width": 1920,
	        "height": 1080,
	        "path": "video/",
	        "filename": "videoplayback",
	        "types": ["mp4","ogv","webm"],
	        "preload": true,
	        "autoplay": true,
	        "loop": true
	      });

	      $(window).on('resize', function() {
	        var height = $(window).height() + 5;
	        var unitHeight = parseInt(height) + 'px';
	        $('.homepage-hero-module').css('height',unitHeight);
	      });
			}



			/*$(window).scroll(function() {
				var w = $(window).width();
				var scrollTop = $(window).scrollTop();
				if(w > 767) {
			    if (scrollTop > 400) {
			      $(".call-fix").addClass("active");
			    } else {
			      $(".call-fix").removeClass("active");
			    }
			  }
			  else{
			  	$(".call-fix").removeClass("active");
			  }
		  });*/

		  $(window).scroll(function() {
				var scrollTop = $(window).scrollTop();
		    if (scrollTop > 400) {
		      $(".call-fix").addClass("active");
		    } else {
		      $(".call-fix").removeClass("active");
		    }
		  });


});