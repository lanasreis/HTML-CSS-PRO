$(function(){

    //abre e fecha menu
    $('.nav-toggle, .nav-close').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active');
    });
    
    // fixar header
    $(window).scroll(function(){
        if($(this).scrollTop() > 120){
            $('.header').addClass('fixed');
        }
        else{
            $('.header').removeClass('fixed');
        }
    })

    // carregar mais
    $('.loadmore-destinos').click(function(e) {
        e.preventDefault();
        $('.mais-destinos').toggleClass('active');
    })

     // carregar mais
     $('.loadmore-destaques').click(function(e) {
         e.preventDefault();
         $('.mais-destaques').toggleClass('active');
    })
   
});