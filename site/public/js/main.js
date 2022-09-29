jQuery(document).ready(function($) {

    // HEADER FIXO
    window.onscroll = function() {
        if(window.pageYOffset > 140) {
            $('#header').addClass("active");
        }else {
            $('#header').removeClass("active");
        }
    }
});

window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollTop')
        scroll.classList.toggle('active', window.scrollY > 450)
})

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
})
}