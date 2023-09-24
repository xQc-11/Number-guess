console.log("Welcome to Spotify");

let idx = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs =[
    {songname:"Warriyo - Mortals [NCS Release]",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"Cielo - Huma-Huma",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"DEAF KEV - Invincible [NCS Release]-320k",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Different Heaven & EH!DE - My Heart [NCS Release]",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"Janji-Heroes-Tonight-feat-Johnning-NCS-Release",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"Unknown Brain, Rival - Control ft. JEX (NCS Release)",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:" Robin Hustin x TobiMorrow - Light It Up (feat. Jex) [NCS Release]",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"Superhero - Unknown Brain ft. Chris Linton (NCS Release)",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songname:"Jim Yosef - Link [NCS Release]",filepath:"songs/9.mp3",coverpath:"covers/9.jpg"}
]

songitem.forEach((element,i)=> {
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate' ,()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
    // console.log(progress);
    if(progress == 100){
        var x = document.getElementById(`${idx}`);
        x.classList.remove('fa-circle-pause');
        x.classList.add('fa-circle-play');
        if(idx>=8){
            idx = 0
        }
        else{
            idx += 1;
        }
        var y = document.getElementById(`${idx}`);
        audioElement.src = `songs/${idx+1}.mp3`;
        masterSongName.innerText = songs[idx].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        y.classList.remove('fa-circle-play');
        y.classList.add('fa-circle-pause');
    }
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value * audioElement.duration/100;
})


const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
  })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
      element.addEventListener('click' ,(e)=>{
          makeallplay();
          idx = parseInt(e.target.id);
          e.target.classList.remove('fa-circle-play');
          e.target.classList.add('fa-circle-pause');
          audioElement.src = `songs/${idx+1}.mp3`;
          masterSongName.innerText = songs[idx].songname;
          audioElement.currentTime = 0;
          audioElement.autoplay = true;
          audioElement.load();
          gif.style.opacity =1;
          masterplay.classList.remove('fa-circle-play');
          masterplay.classList.add('fa-circle-pause');
      })
})
document.getElementById('next').addEventListener('click', ()=>{
        var x = document.getElementById(`${idx}`);
        x.classList.remove('fa-circle-pause');
        x.classList.add('fa-circle-play');
    if(idx>=8){
        idx = 0
    }
    else{
        idx += 1;
    }
    var y = document.getElementById(`${idx}`);
    audioElement.src = `songs/${idx+1}.mp3`;
    masterSongName.innerText = songs[idx].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    y.classList.remove('fa-circle-play');
    y.classList.add('fa-circle-pause');
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(idx<=0){
        idx = 0
    }
    else{
        idx -= 1;
    }
    audioElement.src = `songs/${idx+1}.mp3`;
    masterSongName.innerText = songs[idx].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

