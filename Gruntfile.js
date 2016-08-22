module.exports = function(grunt) {
var target = grunt.option('target') || false;
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
        dist: {
            src: ['dist/'],
        },
        css: {
            src: ['ifrs-theme.css'],
        },
    },


    rsync: {
        options: {
            args: ['-rLtvzh', '--stats'],
            exclude: ['.git/', '.openshift/', 'cache/', '.gitignore', '.gitmodules', 'Gruntfile.js'],
        },
        prod: {
            options: {
                src: '.',
                dest: target,
            },
        },
    },

    watch: {
        options: {
            livereload: true,
        },
        css: {
            files: '**/*',
            tasks: [''],
        },
    },
});

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks("grunt-rsync");


    // Tasks
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('deploy', ['rsync']);
};
