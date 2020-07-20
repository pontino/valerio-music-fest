$(document).ready(function(){
    
    $("nav a").click(function(e){
        e.preventDefault();    
        var distanza=$(this.hash).offset().top;
 $("html,body").stop().animate({scrollTop:distanza},1000);
        
    });//$("nav a").click
    
    
    $("#tornaSu").click(function(){
        $("html,body").stop().animate({scrollTop:0},1000);
    });
    
    
    $(document).scroll(function(){
                
        console.log($(this).scrollTop());
        
        if($(this).scrollTop()>400){
 $("#tornaSu").stop().animate({bottom:"20px"},500);
            
        }
        else{
 $("#tornaSu").stop().animate({bottom:"-100px"},500);
        }

    });//.scroll
    

    var tempo=1000;
    
    
    $("#right").click(function(){
        
        
       var immagineAttiva=$("img.attiva");
        
        $("#slider img").each(function(){
            if(!$(this).hasClass("attiva")){
                $(this).css("left","100%");
            }
        })
                
        if(immagineAttiva.next("img").length>0){            immagineAttiva
            .next("img")
            .animate({"left":"0"},tempo)
            .addClass("attiva");
        }
        else{
            $("#slider img:first-of-type").animate({left:0},tempo).addClass("attiva");
        }
        
        immagineAttiva            
            .animate({"left":"-100%"},tempo)
             .removeClass("attiva");

    });
    
    
    $("#left").click(function(){
       var immagineAttiva=$("img.attiva");
        
        $("#slider img").each(function(){
            if(!$(this).hasClass("attiva")){
                $(this).css("left","-100%");
            }
        })
                
        if(immagineAttiva.prev("img").length>0){            immagineAttiva
            .prev("img")
            .animate({"left":"0"},tempo)
            .addClass("attiva");
        }
        else{
            $("#slider img:last-of-type").animate({left:0},tempo).addClass("attiva");
        }
        
        immagineAttiva            
            .animate({"left":"100%"},tempo)
             .removeClass("attiva");   

        
    });
    
    
    
/* slider */

$("#slider").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  nav: true,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "",   // String: Text for the "previous" button
  nextText: "",       // String: Text for the "next" button
//  maxwidth: "450",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: beforeTheSlideAppears,   // Function: Before callback
  after: afterTheSlideAppears     // Function: After callback
});

function beforeTheSlideAppears() {
    $('.slider-caption').css('bottom', -300);
    $('.slider-caption').animate({ bottom: 0 }, 500);
}

function afterTheSlideAppears() {
   // QUESTA FUNZIONE LA LASCIAMO VUOTA PER CHè NON CI SERVE PIU'
}

    
$(".rslides_tabs a").text("");

//popup scopridipiu

$(".buttom1").click(function(){

    alert("sono un popup")
})

    
    

    
});//.ready