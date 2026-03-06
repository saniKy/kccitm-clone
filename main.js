

<!--Read More JS	-->
		function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}	
	function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}
	function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}
	function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}
	function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}
	function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}
	function myFunction7() {
  var dots = document.getElementById("dots7");
  var moreText = document.getElementById("more7");
  var btnText = document.getElementById("myBtn7");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}
	function myFunction8() {
  var dots = document.getElementById("dots8");
  var moreText = document.getElementById("more8");
  var btnText = document.getElementById("myBtn8");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}
	function myFunction9() {
  var dots = document.getElementById("dots9");
  var moreText = document.getElementById("more9");
  var btnText = document.getElementById("myBtn9");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}
	function myFunction10() {
  var dots = document.getElementById("dots10");
  var moreText = document.getElementById("more10");
  var btnText = document.getElementById("myBtn10");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}
	function myFunction11() {
  var dots = document.getElementById("dots11");
  var moreText = document.getElementById("more11");
  var btnText = document.getElementById("myBtn11");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Learn more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Learn less";
    moreText.style.display = "inline";
  }
}


(function($) {
  "use strict"; // Start of use strict  
   // $(window).resize(function(){location.reload();});
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 150)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });
  $('.sliding_form_icon').click(function() {
	$('.sliding_form').addClass('open');
  });
  $('.sliding_form_box .close_btn').click(function() {
	$('.sliding_form').removeClass('open');
  });
  
})(jQuery); // End of use strict

$(document).ready(function () {
    if ($('#mainNav .navbar-nav .nav-item').children(".mega_menu").length > 0) {
        //alert($(this).children(".mega_menu"));
        $('.mega_menu').parents('.nav-item').addClass('open');
    }
    //Examples of how to assign the Colorbox event to elements
    $(".group1").colorbox({ rel: 'group1', maxWidth: "95%", maxHeight: "95%" });
    $(".group2").colorbox({ rel: 'group2', transition: "fade" });
    $(".group3").colorbox({ rel: 'group3', transition: "none", width: "75%", height: "75%" });
    $(".group4").colorbox({ rel: 'group4', slideshow: true });
    $(".ajax").colorbox();
    $(".youtube").colorbox({ iframe: true, innerWidth: 640, innerHeight: 390 });
    $(".vimeo").colorbox({ iframe: true, innerWidth: 500, innerHeight: 409 });
    $(".iframe").colorbox({ iframe: true, width: "80%", height: "80%" });
    $(".inline2").colorbox({ inline: true, width: "65%",
        onOpen: function () { $('#colorbox').addClass('inline_content'); },
        onClosed: function () { $('#colorbox').addClass('inline_content'); }
    });
    $(".callbacks").colorbox({
        onOpen: function () { alert('onOpen: colorbox is about to open'); },
        onLoad: function () { alert('onLoad: colorbox has started to load the targeted content'); },
        onComplete: function () { alert('onComplete: colorbox has displayed the loaded content'); },
        onCleanup: function () { alert('onCleanup: colorbox has begun the close process'); },
        onClosed: function () { alert('onClosed: colorbox has completely closed'); }
    });

    $('.non-retina').colorbox({ rel: 'group5', transition: 'none' });
    $('.retina').colorbox({ rel: 'group5', transition: 'none', retinaImage: true, retinaUrl: true });

    //Example of preserving a JavaScript event for inline calls.
    $("#click").click(function () {
        $('#click').css({ "background-color": "#f00", "color": "#fff", "cursor": "inherit" }).text("Open this window again and this message will still be here.");
        return false;
    });

    $('.mobile_nav_icon').on('click', function () {
        $('#navbarResponsive2').toggleClass('menuopened');
        $(this).toggleClass('open');
    });
    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.nav-item').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.nav-item').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
    $('.dropdown-submenu a.link').on("click", function (e) {
        //$(this).next('ul').toggle();
        $(this).parent().find('.dropdown-menu').first().stop(true, true).slideToggle();
        $(this).toggleClass('open');
        e.stopPropagation();
        e.preventDefault();
    });
    var wdth = $(window).width();
    if (wdth < 992) {

    }
    else {

    }

    $('.search_icon a').on("click", function () {
        $('.search_box').addClass('open');
        //$('body').addClass('noScroll');
    });
    $('.search_icon .search_box .close_btn').on("click", function () {
        $('.search_box').removeClass('open');
        //$('body').removeClass('noScroll');
    });

    $('.search_block input.form-control').click(function () {

        $('html, body').animate({
            scrollTop: ($('#program_section').offset().top - 88)
        }, 1000, "easeInOutExpo");
    });
    var s = $(".navbar.fixed-top");
    var pos = s.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top & windowpos >= 100) {
            s.addClass("navbar-shrink");
        } else {
            s.removeClass("navbar-shrink");
        }
    });
    $('.home_section5 .tab-pane:first-child').find('h5').find('a').removeClass('collapsed');
	$('.infra-category .carousel.slide').carousel({
    interval: 2000
});



