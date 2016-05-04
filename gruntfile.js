
var mozjpeg = require('imagemin-mozjpeg');
module.exports = function(grunt) {

grunt.initConfig({
  imagemin: {                          // Task        
      options: {                       // Target options
        optimizationLevel: 3,
        svgoPlugins: [{ removeViewBox: false }],
        use: [mozjpeg()]
      },
      // files: {                         // Dictionary of files
      //   'dist/img.png': 'src/img.png', // 'destination': 'source'
      //   'dist/img.jpg': 'src/img.jpg',
      //   'dist/img.gif': 'src/img.gif'
      // }
   
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'img/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'dist/'                // Destination path prefix
      }]
    }
  }
});


  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin']);
  grunt.loadNpmTasks('grunt-contrib-uglify');
  

};

