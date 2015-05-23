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
      },
      lint: {
        config: './stylintrc',
        src: './lib'
      }
    },
    dest: './dist/'
  }
}

module.exports = config;
