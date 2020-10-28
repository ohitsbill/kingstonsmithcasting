$(window).scroll(function() {

  const logoHeight = $('.navbar-dark .navbar-brand').outerHeight();
  const navHeight = $('.navbar').outerHeight();

  if ($(this).scrollTop() > logoHeight) {
    $('nav').addClass("fixed-top");
    if  ($(this).width() > 768) {
      $('.navbar-dark .navbar-brand').hide();
      $('body').css('padding-top', logoHeight + 'px');
    }
  } else {
    $('nav').removeClass("fixed-top");
    if ($(this).width() > 768) {
      $('.navbar-dark .navbar-brand').show();
      $('body').css('padding-top', '0');
    }
  }
});

$(document).ready(function() {
  if ($('footer').hasClass('fixed-footer')) {
    const extraPadding = $('footer').outerHeight() + 100;
    $('body').css('padding-bottom', extraPadding + 'px');
  }
});
