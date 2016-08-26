module.exports = function(grunt) {
var target = grunt.option('target') || false;
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    rsync: {
        options: {
            args: ['-rLtvzh', '--stats'],
            exclude: ['.git/', '.openshift/', 'cache/', 'node_modules/', '.gitignore', '.gitmodules', 'Gruntfile.js', 'package.json'],
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-rsync");


    // Tasks
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('deploy', ['rsync']);
};
