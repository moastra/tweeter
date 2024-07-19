$(document).ready(function() {
  console.log('composer-char-counter.js is loaded');

  
  $('.new-tweet textarea').on('input', function() {
    const maxLength = 140;
    const currentLength = $(this).val().length;
    const remainingCharacters = maxLength - currentLength;

    const counterElement = $(this).siblings('div').find('.counter');
    counterElement.text(remainingCharacters);

    if (remainingCharacters < 0) {
      counterElement.addClass('counter-red');
    } else {
      counterElement.removeClass('counter-red');
    }
  });
});