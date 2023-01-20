
let progressWrap=$('.progress-bar');
let progressbar=progressWrap.find('.bar');
let progressnum=progressWrap.find('.num');
let progressdata=progressnum.attr('data-num');

// progressbar.animate({width:progressdata+'%'},2000);

$('.progress-bar').each(function(){
    let progressWrap=$(this);
    let progressbar=progressWrap.find('.bar');
    let progressnum=progressWrap.find('.num');
    let progressdata=progressnum.attr('data-num');
    console.log()
    progressbar.animate({width:progressdata+'%'},2000);
});
// progressbar.each(function(){
//     let progressdata=$(this).find('.num').attr('data-num');
//     console.log(progressdata)
//     progressbar.animate({width:progressdata+'%'},2000);
// });