const videoPlay=document.getElementById('videoPlay');
const play=document.getElementById('vplay');
const pause=document.getElementById('vpause');
const muted=document.getElementById('vmutedOn');

play.addEventListener('click',function(){
    videoPlay.play();
});
pause.addEventListener('click',function(){
    videoPlay.pause();
});
muted.addEventListener('click',function(){
    videoPlay.muted=true;
})
mutedOn.addEventListener('click', function(){
    videoPlay.muted=false;
})