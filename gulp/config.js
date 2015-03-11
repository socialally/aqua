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
        compress: true,
        errors: true,
        import: ['nib']
      }
    },
    dest: './dist/'
  }
}

module.exports = config;
