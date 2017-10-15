module.exports = function (grunt) {
    const webpackConfig = require('./webpack.config');
    grunt.initConfig({
        webpack: {
            options: {

            },
            build: webpackConfig
        },
/*        browserify: {
            hci: {
                src: ['./src/js/hci.js'],
                dest: './public/js/hci-bundle.js',
                options: {
                    require: ['reveal']
                }
            },
            main: {
                src: ['./src/js/main.js'],
                dest: './public/js/main-bundle.js',
                options: {
                    require: []
                }
            }
        },*/
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    includePaths: [require('path').join(__dirname, 'node_modules')],
                    /*importer: function(url, prev, done) {
                        let fs = require('fs');
                        let file = fs.readFileSync(__dirname + url, "utf8");
                        done({contents: file});
                    }*/
                },
                files: {
                    './public/css/main.css': './src/sass/main.sass'
                }
            }
        },
        jshint: {
            all: ['src/js/*.js'],
            options: {
                esversion: 6
            }
        },
        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['jshint', 'webpack'],
                options: {
                    spawn: true
                }
            },
            sass: {
                files: ['src/sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: true
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint'); 
    grunt.loadNpmTasks('grunt-contrib-watch');

}