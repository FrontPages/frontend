import Ember from 'ember';

var originalBackgroundColor, originalBorderColor;

var getOriginalBackgroundColor = function($imageWrapper) {
  var color = originalBackgroundColor || $imageWrapper.css('background-color');
  if (!originalBackgroundColor) {
    originalBackgroundColor = color;
  }
  return color;
};

var getOriginalBorderColor = function($imageWrapper) {
  var color = originalBorderColor || $imageWrapper.css('border-color');
  if (!originalBorderColor) {
    originalBorderColor = color;
  }
  return color;
};

export default function coverflowAnimator(event, cover, offset) {
  var opacity = 1 - Math.sqrt(Math.abs(offset)),
      $imageWrapper = Ember.$(cover).find('.site-screenshot-image'),
      bodyBackgroundColor = Ember.$('body').css('background-color'),
      borderColor,
      newBorderColor,
      backgroundColor,
      newBackgroundColor;

  $(cover).find('img, figcaption').css({ opacity: opacity });
  borderColor = getOriginalBorderColor($imageWrapper);
  newBorderColor = $.xcolor.opacity(bodyBackgroundColor, borderColor, opacity).getHex();
  $imageWrapper.css('border-color', newBorderColor);

  if ($imageWrapper.hasClass('site-screenshot-image-loading')) {
    backgroundColor = getOriginalBackgroundColor($imageWrapper);
    newBackgroundColor = $.xcolor.opacity(bodyBackgroundColor, backgroundColor, opacity).getHex();
    $imageWrapper.css('background-color', newBackgroundColor);
  }
}
