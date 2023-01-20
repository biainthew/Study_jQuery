const videoPlay=$('#videoPlay')
const videoPlay1=$('#videoPlay1')
$('#vplay').click(function(){
    videoPlay.get(0).play();
})
$('#vpause').click(function(){
    videoPlay.get(0).pause();
})
$('#vmuted').click(function(){
    videoPlay.get(0).muted=true;
})
$('#vmutedOn').click(function(){
    videoPlay.get(0).muted=false;
})

$('#vplay1').click(function(){
    videoPlay1.get(0).play();
})
$('#vpause1').click(function(){
    videoPlay1.get(0).pause();
})
$('#vmuted1').click(function(){
    videoPlay1.get(0).muted=true;
})
$('#vmutedOn1').click(function(){
    videoPlay1.get(0).muted=false;
})