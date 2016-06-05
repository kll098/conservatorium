/*jshint
browser:true,
devel:true,
jquery:true
*/

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var knopOptie1;
var knopOptie2;
var knopOptie3;
var controls = document.getElementsByClassName("controls")[0]

var clips = [];
clips.push({titel:'OPNIEUW BEGINNEN', info:'conservatorium', optie1:'MUZIEK', optie2:'DANS', optie3:'THEATER', link:'LMiadma1Ih8'});

// MUZIEK clips
clips.push({titel:'MUZIEK', info:'conservatorium', optie1:'Foto nemen en op Facebook plaatsen', optie2:'Jodelen om de akoestiek te testen', optie3:'', link:'zdmS6oHCid8'});

clips.push({titel:'Foto nemen en op Facebook plaatsen', info:'rode_zaal', optie1:'Chillen in de tuin', optie2:'Meespelen', optie3:'', link:'w4b7nbFdXe4'}); // muziek 3a -3-

clips.push({titel:'Jodelen om de akoestiek te testen', info:'rode_zaal', optie1:'Chillen in de tuin', optie2:'Meespelen', optie3:'', link:'vu0ImnCCuo8'}); // muziek 3b -4-

clips.push({titel:'Chillen in de tuin', info:'tuin', optie1:'Applaudisseren', optie2:'Weglopen', optie3:'', link:'GP5Q6YqUzi8'}); // muziek 4a -5-

clips.push({titel:'Meespelen', info:'gitaargang', optie1:'Applaudisseren', optie2:'Weglopen', optie3:'', link:'C4WTO5CcSw8'}); // muziek 4b -6-

clips.push({titel:'Applaudisseren', info:'gele_zaal', optie1:'Chillen in de witte foyer', optie2:'Naar huis gaan', optie3:'', link:'5uVIkMs143k'}); // muziek 6a -8-

clips.push({titel:'Weglopen', info:'gele_zaal', optie1:'Chillen in de witte foyer', optie2:'Naar huis gaan', optie3:'', link:'f3QpaLTNRlw'}); // muziek 6b -9-

clips.push({titel:'Chillen in de witte foyer', info:'witte_foyer', optie1:'OPNIEUW BEGINNEN', optie2:'', optie3:'', link:'CTgwRPA-RRo'}); // muziek 7a -10-

clips.push({titel:'Naar huis gaan', info:'openbaar_vervoer', optie1:'OPNIEUW BEGINNEN', optie2:'', optie3:'', link:'5BiBz100bLg'}); // muziek 7b -11-

// DANS
clips.push({titel:'DANS', info:'studio_top', optie1:'Genieten van het uitzicht', optie2:'Opwarmen', optie3:'', link:'V1keGHWNRC4'}); // dans 2 -12-
clips.push({titel:'Genieten van het uitzicht', info:'studio_top', optie1:'AUW, het doet nog pijn', optie2:'Het doet geen pijn meer', optie3:'', link:'EjYO0u5yrdg'}); // dans 3a -13-
clips.push({titel:'Opwarmen', info:'studio_top', optie1:'AUW, het doet nog pijn', optie2:'Het doet geen pijn meer', optie3:'', link:'u38NlMoIw5Q'}); // dans 3b -14-
clips.push({titel:'AUW, het doet nog pijn', info:'kinesist', optie1:'Eten in de cafetaria', optie2:'Eten in de tuin', optie3:'', link:'M4m-z9t6iPk'}); // dans 4a -15-
clips.push({titel:'Het doet geen pijn meer', info:'kinesist', optie1:'Eten in de cafetaria', optie2:'Eten in de tuin', optie3:'', link:'fCOATgoM1Eg'}); // dans 4b -16-
clips.push({titel:'Eten in de cafetaria', info:'cafetaria', optie1:'Chillen in de witte foyer', optie2:'Naar huis gaan', optie3:'', link:'TzFPJeApcWM'}); // dans 5a -17-
clips.push({titel:'Eten in de tuin', info:'tuin', optie1:'Chillen in de witte foyer', optie2:'Naar huis gaan', optie3:'', link:'A6CspDVAAGI'}); // dans 5b -18-
clips.push({titel:'Chillen in de witte foyer', info:'witte_foyer', optie1:'OPNIEUW BEGINNEN', optie2:'', optie3:'', link:'CTgwRPA-RRo'}); // dans 7a -19-
clips.push({titel:'Naar huis gaan', info:'openbaar_vervoer', optie1:'OPNIEUW BEGINNEN', optie2:'', optie3:'', link:'5BiBz100bLg'}); // dans 7b -20-

// THEATER
clips.push({titel:'THEATER', info:'conservatorium', optie1:'Hysterisch schreeuwen', optie2:'Zacht en liefelijk voordragen', optie3:'', link:'sMoK1CK0cxY'}); // theater 2 -21-
clips.push({titel:'Hysterisch schreeuwen', info:'zwarte_zaal', optie1:'Tetris Battle spelen met je buurman', optie2:'Werken aan je opstel', optie3:'', link:'VVne4lY4LBg'}); // theater 3a -22-
clips.push({titel:'Zacht en liefelijk voordragen', info:'zwarte_zaal', optie1:'Tetris Battle spelen met je buurman', optie2:'Werken aan je opstel', optie3:'', link:'5wf2D2b3avs'}); // theater 3b -23-
clips.push({titel:'Tetris Battle spelen met je buurman', info:'computerlokaal', optie1:'Medestudent helpen', optie2:'Een koffietje drinken', optie3:'', link:'JpqXI0xa0Bg'}); // theater 4a -24-
clips.push({titel:'Werken aan je opstel', info:'computerlokaal', optie1:'Medestudent helpen', optie2:'Een koffietje drinken', optie3:'', link:'DcKePKQN9EQ'}); // theater 4b -25-
clips.push({titel:'Medestudent helpen', info:'percussielokalen', optie1:'Bij je klasgenoten gaan zitten', optie2:'Bij de Erasmusstudent gaan zitten', optie3:'', link:'idkNLyxFEtE'}); // theater 5a -26-
clips.push({titel:'Een koffietje drinken', info:'percussielokalen', optie1:'Bij je klasgenoten gaan zitten', optie2:'Bij de Erasmusstudent gaan zitten', optie3:'', link:'3b922Jen6kY'}); // theater 5b -27-

clips.push({titel:'Bij je klasgenoten gaan zitten', info:'artiestenfoyer', optie1:'Naar de voorstelling gaan kijken', optie2:'De tram naar huis nemen', optie3:'', link:'7zd0CsPRF24'}); // theater 6a -28-

clips.push({titel:'Bij de Erasmus student gaan zitten', info:'artiestenfoyer', optie1:'Naar de voorstelling gaan kijken', optie2:'De tram naar huis nemen', optie3:'', link:'fAGVm5wy9vI'}); // theater 6b -29-

clips.push({titel:'Naar de voorstelling gaan kijken', info:'rode_zaal', optie1:'OPNIEUW BEGINNEN', optie2:'', optie3:'', link:'18c5LY0qGfU'}); // theater 7a -30-

clips.push({titel:'De tram naar huis nemen', info:'openbaar_vervoer', optie1:'OPNIEUW BEGINNEN', optie2:'', optie3:'', link:'5BiBz100bLg'}); // theater 7b -31-


var clip = getFirstClip();
setClipInfo();
//showOptions();


function getFirstClip() {
    return clips[0];
}

function getClip(titel) {
    for (var i = 0; i < clips.length; i++) {
        if (clips[i].titel === titel) {
            return clips[i];
        }
    }
    return clips[clips.lastIndexOf];
}

//var main = function () {
//  'use strict';
//  
//   $('.overlay li').on("click", function (){
//       
//        $('.overlay li').removeClass("current");
//        $(this).closest('li').addClass("current");
//        
//       $(".informatie").addClass("hidden");
//       
//        var data = $(this).closest('li').data('content');
//       var dataClass = "." + data;
//       $(dataClass).removeClass("hidden");   
//   });
//};
//
//$("document").ready(main);

function setClipInfo() {
    $(".informatie").addClass("hidden");    
    var dataClass = "." + clip.info;
    $(dataClass).removeClass("hidden");   
}

function showOptions() {
   controls.innerHTML = "\n";
    if (clip.optie1.length != 0) {
        controls.innerHTML += "    <a href=\"#\">" + clip.optie1 + "</a>\n";
    }
    if (clip.optie2.length != 0) {
        controls.innerHTML += "    <a href=\"#\" class=\"\">" + clip.optie2 + "</a>\n";
    }
    if (clip.optie3.length != 0) {
        controls.innerHTML += "    <a href=\"#\" class=\"\">" + clip.optie3 + "</a>\n";
    }
    
    if (clip.optie1.length != 0) {
        knopOptie1 = document.getElementsByTagName("a")[0];
        knopOptie1.onclick = playOptie1;
    }
    if (clip.optie2.length != 0) {
        knopOptie2 = document.getElementsByTagName("a")[1];
        knopOptie2.onclick = playOptie2;
    }
    if (clip.optie3.length != 0) {
        knopOptie3 = document.getElementsByTagName("a")[2];
        knopOptie3.onclick = playOptie3;
    }
}

var player;
function playOptie1() {
    clip = getClip(clip.optie1);
    setClipInfo();
    player.loadVideoById(clip.link,0);
    player.playVideo();
}

function playOptie2() {
    clip = getClip(clip.optie2);
    setClipInfo();
    player.loadVideoById(clip.link,0);    
    player.playVideo();
}

function playOptie3() {
    clip = getClip(clip.optie3);
    setClipInfo();
    player.loadVideoById(clip.link,0);    
    player.playVideo();
}

//  Deze functie maakt een iframe aan nadat de code is ingeladen
var player;
function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: clip.link,
          playerVars: { 'controls': 0, 'loop': 1, 'modestbranding': 1, 'showinfo': 0, 'rel':0, 'autoplay':1, 'autohide':1},
          events: {
            'onStateChange': onPlayerStateChange}
        });
}

function onPlayerStateChange(event) {
      switch(event.data) {
          case 0:
            controls.className = "";
//            if (knopOption2.className === "onzichtbaar")
//            {
//                knopOption2.className="";
//                knopOption1.className="onzichtbaar";
//            } else {
//                knopOption2.className="onzichtbaar";
//                knopOption1.className="";
//            }
            showOptions();
            break;
          case 1:
            controls.innerHTML = "\n";
            controls.className = "onzichtbaar";
            break;
          case 2:
            controls.className = "";
              break;
      }
}
