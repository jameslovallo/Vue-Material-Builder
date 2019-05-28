import Vue from 'vue'

Vue.filter('transformImage', function(image, option) {
  if (!image) return ''
  if (!option) return ''

  let imageService = '//img2.storyblok.com/'
  let path = image.replace('//a.storyblok.com', '')
  return imageService + option + path
})

Vue.filter('dashify', function(value) {
  if (typeof value === 'undefined') {
    return 'undefined'
  }
  let dashified = value
    .toString()
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .replace(/[ _]/g, '-')

  return 'blok-' + dashified
})
