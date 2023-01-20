let wheelDelta = 0; //휠 이벤트 발생 시 반환값 확인 변수
let browser = 0; //파이어폭스인지 브라우저 판별하기 위해

//9개의 섹션 클래스를 배열처리
//마우스 휠을 아래로 한 번 내리면 -120
//-120 이라는 값이 있으면 다음으로 이동하게 스크롤이벤트 시킴
//마우스 휠을 위로 한 번 올리면 120
//120 이라는 값이 있으면 이전으로 이동하게 스크롤이벤트 시킴
//크롬, 익스, 사파리, 오페라 등 : mousewheel 가능
//파이어폭스 : DOMMouseScroll 휠을 아래로 한 번 움직이면 (3) 위(-3) 다른 브라우저랑 반대로 움직임
//브라우저 판별 : window.navigator,userAgent

$('.section').each(function(index){
    $(this).on('mousewheel DOMMouseScroll', function(event){
        // console.log(event)
        event.preventDefault()

        //사용자가 사용하는 브라우저가 뭔지 판별하기 위해
        browser=window.navigator.userAgent.toLowerCase().indexOf('firefox') //내가 찾는 게 있으면 값을 가져오고 없으면 마이너스 , 대소문자 가림
        console.log(window.navigator.userAgent)
        if(browser>=0){
            wheelDelta=-event.detail*40;
            console.log(wheelDelta)
        }else{
            wheelDelta=event.originalEvent.wheelDelta;
            console.log(wheelDelta)
        }
        if(wheelDelta<0){ //마우스 내릴 때
            if(index<$('.section').size()-1){
                $('html, body').stop().animate({scrollLeft: $(this).next().offset().left},500)
            }
        }else{ //마우스 올릴 때
            if(index>0){
                $('html, body').stop().animate({scrollLeft: $(this).prev().offset().left},500)
            }
        }
    })
});