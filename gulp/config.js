var config = {
  clean: [
    './dist/*.css'
  ],
  css: {
    stylus: {
      src: [
        './lib/aqua.styl'
      ],
      opts: {
        compress: false,
        errors: true,
        //import: ['nib']
      }
    },
    dest: './dist/'
  }
}

module.exports = config;
