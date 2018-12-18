const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')
const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const options = {
  purgeCss: {
    whitelist: () => ['body', 'html', '__next', 'slick-slider', 'slick-list', 'slick-track', 'slick-slide']
  }
}

// module.exports = withOffline(withCss(
//   withSass(withImages(options))
// ));

module.exports = withPlugins([
  // [optimizedImages, {
  //   /* config for next-optimized-images */
  // }],
  // [withOffline,{}],
  [withCss, {}],
  [withSass, {}],
  [withImages, {}]
  // options,
  // [withPurgeCss, {
  //   // whitelistPatterns: [/^whitelisted-/]
  //   whitelist: ['body', 'html', '__next', 'carousel', 'slick-slider', 'slick-list', 'slick-track', 'slick-slide', 'slick-arrow']
  // }]
  // your other plugins here
])
