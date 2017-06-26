module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            scripts: {
                src: [
                    'assets/*.js',
                    'src/js/*.js',
                    'src/js/*/*.js'
                ],
                dest: 'dist/js/scripts.js'
            },
            styles: {
                src: [
                    'assets/*.css',
                    'src/css/*.css'
                ],
                dest: 'dist/css/styles.css'
            }
        },
        watch: {
            scripts: {
                files: [
                    'src/js/*.js',
                    'src/js/*/*.js'
                ],
                tasks: ['scripts'],
                options: {
                    spawn: false,
                }
            },
            styles: {
                files: ['src/css/*.css'],
                tasks: ['styles'],
                options: {
                    spawn: false,
                }
            }
        }
    }
);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['styles', 'scripts']);
    grunt.registerTask('dev', ['default', 'watch']);
    grunt.registerTask('styles', ['concat:styles']);
    grunt.registerTask('scripts', ['concat:scripts']);
};
