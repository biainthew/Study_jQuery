$('.cover').hover(function(){
    $('.left').stop().animate({height:'100%'})
    $('.right').stop().animate({height:'100%',bottom:0})
    $('.text').css('display','block')
},function(){
    $('.left').css('opacity','.2').stop().animate({height:0})
    $('.right').css('opacity','.2').stop().animate({height:0,bottom:0})
    $('.text').css('display','none')
})

