const postsContainer1 = document.getElementById('section1');
const postsContainer2 = document.getElementById('section2');
const loading = document.getElementById('loader')

// let limit = 2;
let page = 3;

function showLoading(){
    loading.classList.add('show');
    setTimeout(() => {
        loading.classList.remove('show');
        setTimeout(() => {
            showPosts();
        },300)
    },1000)
}
function showPosts(){
    const post1 = document.querySelectorAll('#section1 .imgwrap')
    const post2 = document.querySelectorAll('#section2 .imgwrap')
    post1[page-1].style.display="block"
    post1[page].style.display="block"
    post2[page-1].style.display="block"
    post2[page].style.display="block"
    page+=2
}

window.addEventListener('scroll',() => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement; //구조분해할당 destructurize
    if(scrollTop + clientHeight >= scrollHeight){
        showLoading()
    }
})
