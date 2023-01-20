let topline1 = $('.top-line1');
let bottom1 = $('.bottom-line1');
let left1 = $('.left-line1');
let right1 = $('.right-line1');
let topline2 = $('.top-line2');
let bottom2 = $('.bottom-line2');
let left2 = $('.left-line2');
let right2 = $('.right-line2');
let topline3 = $('.top-line3');
let bottom3 = $('.bottom-line3');
let left3 = $('.left-line3');
let right3 = $('.right-line3');

let topline = $('.top-line');
let bottom = $('.bottom-line');
let left = $('.left-line');
let right = $('.right-line');



$('.animate').hover(function(){
    let tgleft = $(this).find('.top-line')
    tgleft.css({left:'-100%'}).stop().animate({left:'0'},800)
    $(this).find('.bottom-line').css({left:'100%'}).stop().animate({left:'0'},800)
},function(){
    $(this).find('.top-line').stop().animate({left:'-100%'},800)
    $(this).find('.bottom-line').stop().animate({left:'100%'},800)
})

// function line(){
//     $(this).find('.top-line').css({left:'-100%'}).stop().animate({left:'0'},800)
//     $(this).find('.bottom-line').css({left:'100%'}).stop().animate({left:'0'},800)
//     $(this).find('.left-line').css({top:'100%'}).stop().animate({top:'0'},800)
//     $(this).find('.right-line').css({top:'-100%'}).stop().animate({top:'0'},800)
// };
// line();
// function line(){
//     setInterval(function(){
//         topline.css({left:'-100%'}).stop().animate({left:'0'},800)
//         bottom.css({left:'100%'}).stop().animate({left:'0'},800)
//         left.css({top:'100%'}).stop().animate({top:'0'},800)
//         right.css({top:'-100%'}).stop().animate({top:'0'},800)
//     },1000)
// };
// $('.animate1').hover(function(){
//         topline1.css({left:'-100%'}).stop().animate({left:'0'},800)
//         bottom1.css({left:'100%'}).stop().animate({left:'0'},800)
//         left1.css({top:'100%'}).stop().animate({top:'0'},800)
//         right1.css({top:'-100%'}).stop().animate({top:'0'},800)
//     },function(){
//         topline1.stop().animate({left:'-100%'},800)
//         bottom1.stop().animate({left:'100%'},800)
//         left1.stop().animate({top:'100%'},800)
//         right1.stop().animate({top:'-100%'},800)
//     }
// );
// $('.animate2').hover(function(){
//     topline2.css({left:'-100%'}).stop().animate({left:'0'},800)
//     bottom2.css({left:'100%'}).stop().animate({left:'0'},800)
//     left2.css({top:'100%'}).stop().animate({top:'0'},800)
//     right2.css({top:'-100%'}).stop().animate({top:'0'},800)
// },function(){
//     topline2.stop().animate({left:'-100%'},800)
//     bottom2.stop().animate({left:'100%'},800)
//     left2.stop().animate({top:'100%'},800)
//     right2.stop().animate({top:'-100%'},800)
// }
// );
// $('.animate3').hover(function(){
//     topline3.css({left:'-100%'}).stop().animate({left:'0'},800)
//     bottom3.css({left:'100%'}).stop().animate({left:'0'},800)
//     left3.css({top:'100%'}).stop().animate({top:'0'},800)
//     right3.css({top:'-100%'}).stop().animate({top:'0'},800)
// },function(){
//     topline3.stop().animate({left:'-100%'},800)
//     bottom3.stop().animate({left:'100%'},800)
//     left3.stop().animate({top:'100%'},800)
//     right3.stop().animate({top:'-100%'},800)
// }
// );