// Script: Task 2 Weekend UX

$(document).ready(function(){
    $("#menu-btn").click(function(){
        // $('#menu').toggleClass("active");
        $('#menu').toggleClass("active").stop(true, true),slideDown().slideUp();
        // $('#menu').slideDown("active");
        // $('#menu').slideUp();
        
    })
});