

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'sm',
            width: '20%',
            suffix: '',
            quality: 20
          },{
            name: 'lg',
            width: '50%',
            suffix: '',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'srcimg/',
          cwd: 'views/images/',
          dest: 'views/srcimages'
        }]
      }
    },
  });

    grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            'views/js/main.min.js': ['views/js/main.js']
          }
        }
      }
    });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

};

