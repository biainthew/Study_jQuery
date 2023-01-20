let imageList = $('#slider');
let img = $('#wrap>p')
imageList.slider({
    slide:function(event, ui){
        let max = $('#slider').slider( "option", "max" );
        // console.log(max)
        let end = img.size()-1
        // console.log(end)
        let imgIndex = parseInt((ui.value * end)/max);
        // console.log(imgIndex)
        img.css('display','none');
        img.eq(imgIndex).css('display','block')
    }
});