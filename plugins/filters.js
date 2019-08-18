import Vue from 'vue';

Vue.filter('transformImage', function(image, option) {
  if (!image) return '';
  if (!option) return '';

  let imageService = '//img2.storyblok.com/';
  let path = image.replace('//a.storyblok.com', '');
  return imageService + option + path;
});

Vue.filter('dashify', function(value) {
  if (typeof value === 'undefined') {
    return 'undefined';
  }
  let dashified = value
    .toString()
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .replace(/[ _]/g, '-');

  return 'blok-' + dashified;
});

Vue.filter('siteName', function siteName(str) {
  str = str.toLowerCase().split('_');
  let final = [];
  for (let word of str) {
    final.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return final.join(' ');
});

Vue.filter('lightOrDark', function lightOrDark(input, variant) {
  if (input.includes('/')) {
    let colors = input.split('/');
    if (variant === true) {
      return colors[1];
    } else {
      return colors[0];
    }
  } else {
    return input;
  }
});
