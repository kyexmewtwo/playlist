let song = [];
let artist = [];
let length = [];
let image = [];
let link = [];
let playlist = [song, artist, length, image, link];
var firstName = $("input").val();
song.forEach(function(data) {
  $("#song").append("<li>"+data+"</li>");
});
artist.forEach(function(data) {
  $("#song").append("<li>"+data+"</li>");
});
length.forEach(function(data) {
  $("#song").append("<li>"+data+"</li>");
});
image.forEach(function(data) {
  $("#song").append("<li>"+data+"</li>");
});
link.forEach(function(data) {
  $("#song").append("<li>"+data+"</li>");
});