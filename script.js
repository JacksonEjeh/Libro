$(document).ready(function(){
    // var isOpen = false
    $('#nav_toggle_open').click(function(){

        $('.navigation').addClass('navbar_open')
    
    })
    $('#nav_toggle_close').click(function(){
        $('.navigation').removeClass('navbar_open')
    })
})