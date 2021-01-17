const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const mdxEnhanced = require('next-mdx-enhanced');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [mdxEnhanced, {
    layoutPath: 'layouts',
    defaultLayout: true,
    remarkPlugins: [
      require('remark-autolink-headings'),
      require('remark-slug'),
    ],
    extendFrontMatter: {
      process: (mdxContent) => ({
        wordCount: mdxContent.split(/\s+/gu).length,
        readingTime: readingTime(mdxContent)
      })
    }
  }],
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/holistic-health-blog/_next/static/images/',
  }],
]);
