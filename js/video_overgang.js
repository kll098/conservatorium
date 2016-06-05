var clips = [];
clips.push({titel:'clip-1', optie1:'clip-2', optie2:'clip-3', optie3:'clip-4', link:'LMiadma1Ih8'});
clips.push({titel:'clip-2', optie1:'clip-3', optie2:'clip-4', optie3:'', link:'link-naar-clip-2'});
clips.push({titel:'clip-3', optie1:'', optie2:'', optie3:'', link:'link-naar-clip-3'});
clips.push({titel:'clip-4', optie1:'', optie2:'', optie3:'', link:'link-naar-clip-4'});
clips.push({titel:'', optie1:'', optie2:'', optie3:'', link:''});



function getFirstClipaa() {
    return clips[0];
}

function getNextClipaa(titel) {
    for (var i = 0; i < clips.length(); i++) {
        if (clips[i].titel === titel) {
            return clips[i];
        }
    }
    return clips[clips.lastIndexOf];
}


