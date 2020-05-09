/* ====================== Initialize Animate On Scroll Library ====================== */

$('.content .title').attr('data-aos', 'zoom-in');
$('.content .title').attr('data-aos-duration', '600');

$('.why-us-boxes .box').attr('data-aos', 'fade-up');
$('.why-us-boxes .box').attr('data-aos-duration', '600');

$('.courses .course').attr('data-aos', 'flip-left');
$('.courses .course').attr('data-aos-duration', '1000');

$('.testimonials .box').attr('data-aos', 'zoom-out');
$('.testimonials .box').attr('data-aos-duration', '1000');

$('.contact .contact-form').attr('data-aos', 'flip-down');
$('.contact .contact-form').attr('data-aos-duration', '1000');

AOS.init();

/* ====================== Create Slider For Testimonial Using slick.js ====================== */

$(document).ready(function(){
  
  // Hide Loader
  $('.loader').css('display', 'none');

  // Initialize Slick Slider
  $('.boxes').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

/* ====================== Scroll To Element ====================== */

$('header nav ul li a').click(function () {
  
  var element = $(this).attr('href');
  var top     = $(element).offset().top;
  
  $('html, body').animate({

    scrollTop: top

  }, 300);

});

/* ===================== Back to to top btn & Header Styling ===================== */

var scroll = $(document).scrollTop();

$(document).scroll(function () {

  // Top btn
  if (scroll > 500) {

    $('.top_btn').css({
      right: '10px',
    });
  
  } else {

    $('.top_btn').css({
      right: '-50px',
    });

  }

  scroll = $(document).scrollTop();

});

$('.top_btn').click(function () {

  $('html, body').animate({
    scrollTop: '0'
  }, 500);

});

/* ===================== Show Course Info Into Modal ===================== */

$('.courses .courses-list .course .more').click(function() {

  var course = $(this).siblings('.course-info');

  // Get Course Info
  var image     = course.find('.image').text();
  var title     = course.find('.title').text();
  var nthVideo  = course.find('.nth-video').text();
  var duration  = course.find('.duration').text();
  var teacher   = course.find('.teacher').text();
  var price     = course.find('.price').text();
  var link      = course.find('.link').text();

  // Put Course Info In There Right Place
  $('.course-modal .image img').attr('src', image);
  $('.course-modal .course-title').text(title);
  $('.course-modal .info .nth-video').append(nthVideo + ' فيديو');
  $('.course-modal .info .duration').append(duration + ' ساعة');
  $('.course-modal .info .teacher').append(teacher);
  $('.course-modal .info .price').append(price + ' $');
  $('.course-modal a').attr('href', link);

  // Show modal
  $('.course-modal').css({
    opacity: 1,
    zIndex: 999999999999999
  }).find('.modal-content').css('transform', 'scale(1)');  

});

// Close Modal
$('.close').click(function() {

  // Hide modal
  $('.course-modal').css({
    opacity: 0,
    zIndex: -9999999
  }).find('.modal-content').css('transform', 'scale(0)');  

  // Empty All course info
  $('.course-modal .image img').attr('src', '');
  $('.course-modal .course-title').text('');
  $('.course-modal .info .nth-video').html('<i class="fa fa fa-play-circle-o"></i>');
  $('.course-modal .info .duration').html('<i class="fa fa fa-clock-o"></i>');
  $('.course-modal .info .teacher').html('<i class="fa fa fa-users"></i>');
  $('.course-modal .info .price').html('<i class="fa fa fa-money"></i>');
  $('.course-modal a').attr('href', '');

});

/* ===================== Toggle Navbar Menu ===================== */

$('.toggle-nav-btn').click(function() {
  
  $('header nav ul').slideToggle(500);

});
