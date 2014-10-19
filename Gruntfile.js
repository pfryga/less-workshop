'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            styles: {
                files: ['app/styles/**/*.less'],
                tasks: ['less:development']
            }
        },
        less: {
            development: {
                options: {
                    cleancss: true
                },
                files: {
                    "app/styles/style.css": "app/styles/less/main.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch']);
};
