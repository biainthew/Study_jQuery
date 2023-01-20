const gallerywrap = $('.gallery-wrap ul');
let offsetL = gallerywrap.offset().left;
gallerywrap.on({mousemove(e){
    // let offsetL = gallerywrap.offset().left;
    $(this).css({left:-e.pageX})
    console.log(e.pageX)
}})