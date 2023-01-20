//아이디

$('#id').on({keyup:function(event){
    event.preventDefault();
    //영문+숫자 6~10자 이내
    let regExp=/^(?=.*[A-Za-z])+(?=.*[0-9])+[A-Za-z0-9]{6,10}$/g;
    let idValue=$(this).val().toString();
    if(regExp.test(idValue)===false){
        $(this).addClass('error');  
    }else{
        $(this).removeClass('error'); 
    }  
},focusout:function(event){
    event.preventDefault();
    let idValue=$(this).val().toString();
    if(idValue===''){
        $(this).removeClass('error'); 
        $('.point').text('필수입력값입니다'); 
    }
}
});

//아이디 중복확인
$('.chkchk').on({ click:function(e){
    e.preventDefault();
    let regExp=/^(?=.*[A-Za-z])+(?=.*[0-9])+[A-Za-z0-9]{6,10}$/g;

    if($('#id').val()===''){
        alert('아이디를 입력하세요!')
    }else if(regExp.test($('#id').val())===false){
        alert('아이디를 확인하세요')
    }
}

});

//비밀번호
$('#pw').on({keyup:function(event){
    event.preventDefault();
    //영문+숫자+특수문자(!@#$) 각 1자이상 포함하여 9~12자 이내
    let regExp=/^(?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[!@#$])+[A-Za-z0-9!@#$]{9,12}$/g;
    let pwValue=$(this).val().toString();
    if(regExp.test(pwValue)===false){
        $(this).addClass('error');  
        $(this).next('.point').text('영문+숫자+특수문자(!@#$) 각 1자이상 포함하여 9~12자 이내값만 사용'); 
    }else{
        $(this).removeClass('error'); 
        $(this).next('.point').text(''); 
    }  

},focusout:function(event){
    let pwValue=$(this).val().toString();
    if(pwValue===''){
        $(this).removeClass('error'); 
        $('.point').text('필수입력값입니다'); 
    }
}
});
$('#pw1').on('keyup focusout',function(){
    if($('#pw').val()==$('#pw1').val()){
        console.log('같음')
    }
})