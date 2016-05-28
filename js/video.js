/*jshint
browser:true,
devel:true,
jquery:true
*/


var main = function () {
  'use strict';
  
   $('.overlay li').on("click", function (){
       
        $('.overlay li').removeClass("current");
        $(this).closest('li').addClass("current");
        
       $(".informatie").addClass("hidden");
       
        var data = $(this).closest('li').data('content');
       var dataClass = "." + data;
       $(dataClass).removeClass("hidden");   
   });
};

$("document").ready(main);


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // Deze functie maakt een iframe aan nadat de code is ingeladen
var player;
function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '420',
          width: '315',
          videoId: 'v0NSeysrDYw',
          playerVars: { 'autohide':1, 'controls': 0, 'loop': 1, 'modestbranding': 1, 'showinfo': 0, 'rel':0, 'autoplay':1}
        });
}

//hotzone = document.getElementById("hotzone");
//hotzone.onmouseover = function() {
//      player.playVideo();
//}
//hotzone.onmouseout = function() {
//      player.pauseVideo();
//}


