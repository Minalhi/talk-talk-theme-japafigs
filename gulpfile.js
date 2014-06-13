var fs = require("fs");

var path = require("path");
// Gulp stuff
var gulp = require("gulp");
var livereload = require("gulp-livereload");
var less = require("gulp-less");


gulp.task("less", function () {
  return gulp.src("less/**/*.less")
    .pipe(less())
    .pipe(gulp.dest("css/"));
});


gulp.task("watch:less", ["less"], function() {
  console.log("Watching LESS files modifications...");
  gulp.watch([ 
      "less/**/*.less"
    ],
    ["less"]
  )
});

gulp.task("watch", [], function() {

  console.log("LESS files watching starts.");
  
  var livereloadAddr = "0.0.0.0:4000";//4000;//"0.0.0.0:4000";//"talktalk-122155.euw1.nitrousbox.com:4000";
  var server = livereload(livereloadAddr);  
    console.log("LiveReload started on "+livereloadAddr+".");
  
 
  //console.log("Yes captain?");
  gulp.watch([ 
      "**/*.*"
     
    ]
  ).on("change", function(file) {

      console.log(file.path + " changed.");

  
        server.changed(file.path);
      

  });
  console.log("Ready to serve!");

});

gulp.task("default", ["watch:less"]);