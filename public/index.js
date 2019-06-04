const handlebars = require('handlebars')

var source   = document.getElementById("entry-template").innerHTML;
var template = handlebars.compile(source);

var context = {title: "My New Post", body: "This is my first post!"};
var html    = template(context);