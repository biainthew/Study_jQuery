$('.box').draggable({
    axis: "x",
    containment: "parent"
});
$('.box').on('drag',function(){
    getPos();
});

let min = 0;
let max = -1800;

// getPos()
function getPos(){
    let barLeft=$('.box').css('left');
    barLeft=parseInt(barLeft);
    let pos = (barLeft * (max-min))/570;
    $('.content').css('left',pos);
}