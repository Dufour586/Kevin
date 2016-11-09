module.exports = function(grunt) {

    // https://github.com/screeps/grunt-screeps
    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'kevin-dufour@hotmail.com',
                password: 'dufo9144',
                branch: 'master',
                ptr: false
            },
            dist: {
                src: ['src/*.js', 'lib/*.js']
            }
        }
    });

}
