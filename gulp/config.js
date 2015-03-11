var path = require('path');

var config = {
  clean: [
    './dist/*.css',
    './dist/*.css.map',
  ],
  css: {
    stylus: {
      src: [
        './lib/aqua.styl'
      ],
      opts: {
        compress: true,
        errors: true,
        import: ['nib']
      },
      sourcemap_opts: {
        inline: true,
        sourceRoot: '../../',
        basePath: path.resolve('.')
      }
    },
    dest: './dist/'
  }
}

module.exports = config;
