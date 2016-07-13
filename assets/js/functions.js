var open = function () {
  $('.post').click(function () {
    $('.post').removeClass('open');
    $(this).toggleClass('open');
    $('.posts').toggleClass('open');
    $('.ftrd').toggleClass('open');
  });
};

$(document).ready(open);
