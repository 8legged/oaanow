'use strict';
// The 'wrapper' function
module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    // Import JSON metadata from package.json
    pkg: grunt.file.readJSON('package.json'),
    // Configure JSHint
    jshint: {
      // Which files JSHint will watch
      all: ['Gruntfile.js', 'server.js', 'api/**/*.js', 'app/assets**/*.js'],
      options: {
        // Look for personal jshintrc config
        jshintrc: true
      }
    }
  });

 // Load plugins following this pattern
 grunt.loadNpmTasks('grunt-simple-mocha');
 // Task(s) that can be run from the command line
 grunt.registerTask('default', 'simplemocha');
 grunt.registerTask('default', 'Log some stuff.', function () {
  grunt.log.write('Logging some stuff...').ok();
 });

};
