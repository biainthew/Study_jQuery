let progressWrap=$('.progress-bar');
let progressbar=progressWrap.find('.bar');
let progressnum=progressWrap.find('.num');
let progressdata=progressnum.attr('data-num');

progressbar.animate({width:progressdata+'%'},2000);

// setInterval(textAni,1000/10)
// function textAni(){
//     let currentWidth=progressbar.width()/progressWrap.width()*100; //원래 넓이 나누기 들어오는 넓이 곱하기 백 == 퍼센트 계산
//     progressnum.text(Math.floor(currentWidth)+'%')
// }

var comma_separator_number_step = $.animateNumber.numberStepFactories.append('%')
progressnum.animateNumber(
  {
    number: progressdata,
    numberStep: comma_separator_number_step
  },2500
);