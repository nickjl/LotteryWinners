module.exports = function (grunt) {
    grunt.initConfig({

        // WATCH task config
        watch: {
            sass: {
                files: ['source/**/*.sass', 'source/**/*.scss'],
                tasks: ['sass', 'concat', 'autoprefixer']
            },

            css: {
                files: ['source/**/*.sass', 'source/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },

            pug: {
                files: ['source/**/*.pug'],
                tasks: ['pug']
            },

            js: {
                files: ['source/assets/js/*.js'],
                tasks: ['concat', 'uglify']
            },

            // browserSync: {
            //     files: ['app/**/*.css', 'app/**/*.html'],
            //     tasks: ['pug']
            //  },

        },

        // SASS task config
        sass: {
            dev: {
                files: {
                    // destination				// source file
                    'app/assets/css/app.min.css':			'source/sass/styles.scss'

                },
                options: {
                    style: 'compressed',
                }
            }
        },

        // AUTOPREFIXER
        autoprefixer: {
            dev: {
                files: {
                    'app/assets/css/app.min.css': 'app/assets/css/app.min.css'
                }
            }
        },

        // PUG
        pug: {
            compile: {
                options: {
                    client: false,
                    pretty: true,
                    data: {
                        data: grunt.file.readJSON('./source/data/data.json')
                    }
                },
                files: [ {
                    cwd: 'source',
                    src: '*.pug',
                    dest: 'app/',
                    expand: true,
                    ext: '.html'
                }]
            }
        },

        concat: {

            js: {
                // the files to concatenate
                src: ['source/assets/js/jquery.bxslider.min.js', 'source/assets/js/tether.min.js', 'source/assets/js/bootstrap.js','source/assets/js/stackblur.js', 'source/assets/js/jquery.tickerNews.js', 'source/assets/js/custom.js'],
                // the location of the resulting JS file
                dest: 'app/assets/js/lotterywinners.js',
                options: {
                    // define a string to put between each file in the concatenated output
                    separator: ';'
                }

            },

            css: {
                src: ['app/assets/css/app.min.css'], // insert additional css here, in order
                dest: 'app/assets/css/lotterywinners.min.css'
            }

        },

        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    'app/assets/js/lotterywinners.min.js': ['app/assets/js/lotterywinners.js']
                }
            }
        },



        copy: {
            //app: {
            //	files: [{
            //			src: [ 'js/*','style/**/*.css', '!**/*.jade', 'img/**/*'],
            //			dest: './app'
            //		}]
            //}
            app: {
                cwd: 'sources',
                src: [ 'js/*','style/**/*.css', '!**/*.jade', 'img/**/*' ],
                dest: 'app',
                expand: true
            }
        },


        clean: {
            app: ['./app/**']
        },



        // Using the BrowserSync Server for your static .html files.
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        'app/css/*.css',
                        'app/*.html'
                        // '*.pug',
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './app'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']);
};