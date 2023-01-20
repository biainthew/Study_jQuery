$('#location').selectmenu();

var spinner = $( "#spinner" ).spinner({
    min:0,
    max:20,
    step:2
});

$( "button" ).button();

$( "#datepicker" ).datepicker({
    minDate: new Date(), //이때부터
    maxDate: "+2w" //이때까지 선택 가능
});

$( "#datepicker" ).datepicker(
    'setDate', new Date()
); //오늘 날짜 넣기

$( "input" ).checkboxradio();

//button
$( "#submit" ).button({
    disabled:true
});

//progress
$( "#progress" ).progressbar({
    value: 0
});

$('input').change(function(){
    updateProgress();

})
updateProgress()
function updateProgress(){
    let progress=0;
    let itemCount=5;
    let itemCompleted=0;

    let $location=$('#location option:selected').val();
    // console.log($location);
    let $categori=$('#category').val();
    let $spinner=$('#spinner').val();
    let $datapicker=$('#datapicker').val();
    let $referrer=$('input[type="checkbox"]:checked').val();

    if($location) itemCompleted++;
    if($categori) itemCompleted++;
    if($spinner) itemCompleted++;
    if($datapicker) itemCompleted++;
    if($referrer) itemCompleted++;

    progress=itemCompleted/itemCount*100 /* 1/5 2/5 ... */

    $('#progress').progressbar('option','value',progress)

    $('#progress').text(progress);
    if(progress==100){
        $('#submit').button({
            disabled:false
        })
    };

}