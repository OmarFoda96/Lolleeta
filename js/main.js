'use strict';
$(document).ready(function(){ 
    /*start site effects*/
    
    $('.filtering').show(1500);   
    $(".stylistCaption").fadeIn(500);
    $(".information").fadeIn(1500);
    $("#brand").fadeIn(1500);
    $(".mainRow").fadeIn(1000);
    $(".carousel").fadeIn(1500);
    
    
    $(".custom-file-upload").hover(function(){
        $(".hovcam").css("display","block")
    });
    $(".custom-file-upload").mouseleave(function(){
        $(".hovcam").css("display","none")
    });
    /*end site effects*/
    
    
    var max_fields_limit      = 10; 
    var x = 1; 
    $('.add_more_button').click(function(e){
        e.preventDefault();
        if(x < max_fields_limit){ 
            x++; 
            $('.input_fields_container').append('<div><input type="text" name="product_name[]"/><a href="#" class="remove_field" style="margin-left:10px;">Remove</a></div>'); 
        }
    });  
    $('.input_fields_container').on("click",".remove_field", function(e){ //user click on remove text links
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
    
    
    // start  posts page
    $("#postBtn").click(function(){
          $('.overlay').show(500);
          $('.postForm').fadeIn(1500);  
    });
    $(".overlay").click(function(){
          $(this).hide(500);
          $('.postForm').hide(500);  
    });
    // end  posts page
    
    
    /*start nav scroll change*/
    $(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() >$nav.height());
      });
    });
    /*end nav scrolling change*/

    //second nav scroll
    $(window).scroll(function () { 

    

    if ($(window).scrollTop() > 450) {
      $('#secondNav').css("position","fixed");
      $('#secondNav').css("top","71px");
    }
    if ($(window).scrollTop() < 451) {
      $('#secondNav').css("position","static");
    }
  });
    /*end second nav scrolling*/
    
    /*start nice scroll*/
     $("body").niceScroll({
         cursorcolor:"var(--secondary-color)",
         cursorwidth: "8px",
         cursorborder: "0px solid #000",
         cursorborderradius: "3px",
         zindex: "auto",
         scrollspeed: 80,
         mousescrollstep: 80,
         autohidemode: false,
         horizrailenabled:false
     });
    /*end nice scroll*/
    $('a[href*="#"]')
    
    
  // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
     });