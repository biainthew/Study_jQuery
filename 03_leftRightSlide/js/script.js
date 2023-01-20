const page=$('.imgBox .page .view');
const prev=$('.imgBox .btn .prev');
const next=$('.imgBox .btn .next');
const pager=$('.imgBox .pager a');
let current=0;
let timer;

event();
function event(){
    timer=setInterval(function(){
        if(current==page.size()) current=0;
        let next=current+1;
        if(current==2) next=0;
        page.eq(current).css({zIndex:0}).removeClass('right');
        page.eq(current).stop().animate({width:'0%'},1500);

        page.eq(next).css({zIndex:1}).addClass('right');
        page.eq(next).stop().animate({width:'100%'},1500);
        current++;
        pager.removeClass('on');
        pager.eq(next).addClass('on');
    },3000);
}

$('.imgBox .page .view, .imgBox .btn .prev, .imgBox .btn .next, .imgBox .pager a').hover(function(){
    clearInterval(timer)
},function(){
    event()
})

next.click(function(){
    if(current==page.size()) current=0;
        let next=current+1;
        if(current==2) next=0;
        page.eq(current).css({zIndex:0}).removeClass('right');
        page.eq(current).stop().animate({width:'0%'},1500);

        page.eq(next).css({zIndex:1}).addClass('right');
        page.eq(next).stop().animate({width:'100%'},1500);
        current++;
        pager.removeClass('on');
        pager.eq(next).addClass('on');
})

prev.click(function(){
    if(current==-page.size()) current=0;
        let next=current-1;
        if(current==-2) next=0;
        page.eq(current).css({zIndex:0}).removeClass('right');
        page.eq(current).stop().animate({width:'0%'},1500);

        page.eq(next).css({zIndex:1}).addClass('right');
        page.eq(next).stop().animate({width:'100%'},1500);
        current--;
        pager.removeClass('on');
        pager.eq(next).addClass('on');
});

pager.click(function(){
    let tg = $(this).index();
    page.eq(current).css({zIndex:0 , width:'100%'}).removeClass('right');
    page.eq(current).stop().animate({width:'0%'},500);

    page.eq(tg).css({zIndex:1 , width:0}).addClass('right');
    page.eq(tg).stop().animate({width:'100%'},500);
    current=tg
    pager.removeClass('on');
    $(this).addClass('on');
    return
});