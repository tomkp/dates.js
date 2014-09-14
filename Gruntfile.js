module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': 'src/dates.js'
                }
            }
        },

        jshint: {
            files: 'src/dates.js',
            options: {
                globals: {
                }
            }
        },

        mocha_phantomjs: {
            all: ['test/**/*.html']
        },

        watch: {
            js: {
                files: 'src/*.js',
                tasks: ['test']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-phantomjs');

    grunt.registerTask('test', ['jshint', 'mocha_phantomjs']);
    grunt.registerTask('default', ['uglify']);
};