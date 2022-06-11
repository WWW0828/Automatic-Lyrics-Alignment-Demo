var lyrics = []
var time = []
var textcontent = ''

function readLyric() {
    let textfile = document.getElementById('orglyric').files[0]
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        textcontent = textFromFileLoaded.split('\r')
        for (let i = 0; i < textcontent.length; i++) {
            let lyric_line = textcontent[i].split(' ')
            for (let j = 0; j < lyric_line.length; j++) {
                if(lyric_line[j] == '\n') {
                    continue
                }
                lyrics.push(lyric_line[j])
            }
        }
    };

  fileReader.readAsText(textfile, "UTF-8");
}
function readTimestamp() {
    let textfile = document.getElementById('textfile').files[0]
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        textcontent = textFromFileLoaded.split('\n')
        for (let i = 0; i < textcontent.length; i++) {
            if(textcontent[i] == '\n' || textcontent[i] == '' || textcontent[i] == ' '){
                continue
            }
            let lyric_time = textcontent[i].split(' ')
            timestr = lyric_time[1].split('\r')[0]
            time.push(Number(timestr)*1000)
        }
    };

  fileReader.readAsText(textfile, "UTF-8");
    
}

function alignLyrics() {
    let align_lyrics = document.getElementById('lyric')
    align_lyrics.textContent = ''
    clearTimeout()
    for (let i = 0; i < time.length; i++) {
        setTimeout(() => {
            let new_content = align_lyrics.textContent + '  ' + lyrics[i]
            if(i < lyrics.length - 1) {
                if(lyrics[i + 1][0] === '\n') {
                     if(lyrics[i + 1][1] === lyrics[i + 1][1].toUpperCase()) {
                         new_content += '.'
                     }
                 }else {
                     if(lyrics[i + 1][0] === lyrics[i + 1][0].toUpperCase()) {
                         new_content += '.'
                     }
                 } 
            }
            align_lyrics.textContent = new_content
        }, time[i]+200);
    }
    
}


function loadSong() {
    let audio_control = document.getElementById('playsong')
    let song = document.getElementById('song').files[0]
    let source = URL.createObjectURL(song)
    audio_control.innerHTML = "<source src='" + source + "' type='audio/mp3'>"
}