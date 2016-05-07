

module.exports = function(grunt) {

grunt.initConfig({
  imagemin: {                          // Task        
      options: {
        progressive: true,                       // Target options
        optimizationLevel: 7
        
      },
   
      dist: {                // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'dist/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'dist/'                // Destination path prefix
      }]
    }
  },

  uglify: {
   dist: {
      options: {
         banner: ''
      },
      files: {
         'views/js/main.min.js': ['views/js/main.js']
      }
   }
}


});


  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
   

};

