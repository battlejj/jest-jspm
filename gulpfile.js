"use strict";

const gulp = require("gulp"),
    del = require("del"),
    gulpBabel = require("gulp-babel"),
    gulpJest = require("gulp-jest").default,
    gulpEslint = require("gulp-eslint");

gulp.task("clean:lib", () => del(["lib/**/*"]));
gulp.task("clean:testOutput", () => del(["test/output/**/*"]));

gulp.task("build", ["clean:lib"], () =>
    gulp.src("src/**/*.js")
        .pipe(gulpBabel())
        .pipe(gulp.dest("lib")));

const runTest = (withCover) =>
    gulp.src("")
        .pipe(gulpJest({
            "verbose": true,
            "debug": false,
            "config": {
                "roots": ["./test"],
                "collectCoverage": withCover,
                "coverageDirectory": "test/output",
                "collectCoverageFrom": ["src/**/*.js"],
                "coverageThreshold": {
                    "global": {
                        "branches": 90,
                        "functions": 90,
                        "lines": 90,
                        "statements": 90
                    }
                }
            }
        }));

gulp.task("lint", ()=>
    gulp.src("./src/**/*.js")
        .pipe(gulpEslint())
        .pipe(gulpEslint.format())
        .pipe(gulpEslint.failAfterError()));

gulp.task("test", () => runTest());
gulp.task("test:cover", ["clean:testOutput"], () => runTest(true));
gulp.task("default", ["lint", "build"]);