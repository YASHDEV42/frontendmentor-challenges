$(function(){
    $('.accro-header').on('click',function(){
        $(this).next().slideToggle();

        $('.accro-header').next().not($(this).next()).slideUp();

        $('.accro-header').not($(this)).removeClass('active')

        $(this).toggleClass('active')

        $(this).next().toggleClass('body-ac')

    })
   
})