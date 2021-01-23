$(function(){

       /****************owlCarousel**************** */
        $(".owl-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            items: 1,
        });
        /************************************ */
        /************* form *******************/ 
        var place = $("input").attr("placeholder");
        $("input").focus(function(){
          $(this).attr("placeholder","")
        });
        $("input").blur(function(){
            $(this).attr("placeholder",place)
        });

        var placeho = $("textarea").attr("placeholder");
        $("textarea").focus(function(){
          $(this).attr("placeholder","")
        });
        $("textarea").blur(function(){
            $(this).attr("placeholder",place)
        });


        $("form input").focus(function(){
              
            $(this).css({
                border: "2px solid #007bff",
                borderRadius:"20px"
            })
        });

        
        $("form input").blur(function(){
              
            $(this).css({
                border: "2px solid #7a7a7a",
                borderRadius:"0"
            })
        });


        $("textarea").focus(function(){
              
            $(this).css({
                border: "2px solid #007bff",
                borderRadius:"20px"
            })
        });

        
        $("textarea").blur(function(){
              
            $(this).css({
                border: "2px solid #7a7a7a",
            })
        });
        /*************** *****************/
        /***************scroll top *************** */
        
         $(window).scroll(function(){

            if(pageYOffset > 600)
            {
                $(".scroll").fadeIn()
            }
            else
            {
                $(".scroll").fadeOut()
            }
         });

         $(".scroll").on("click",function(){
       
           $("html , body").animate({
                 
                scrollTop:0
           },1000);

         });
         /*************** links ********************** */
          
          $("nav li").on("click",function(){

           var sec =  $(this).data("scroll");
               
           $("html , body").animate({

              scrollTop: $(sec).offset().top        
           },1000); 
          });

          $(".back button").on("click",function(){

            var but = $(this).data("scroll");

            $("html , body").animate({
               
                scrollTop:$(but).offset().top

            },1500);

          });
        /**************************************** */
        $('.timer').counterUp({
            delay: 20,
            time: 1500
        });
        /********************************************* */

        var $grid =  $(".grid").isotope({

            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
         });
    
         $(".filter button").on("click",function(){
               
            var value = $(this).attr("data-name");
    
           $grid.isotope({
               filter: value
           });
    
         });
         /***************************/

         $(".filter button").click( function(){

           $(".filter button").removeClass("act");
           $(this).addClass("act");

         });
         /********************* */
         /*********scrolling************ */
           $("html , body").niceScroll({
           
            cursorcolor: "var(--main-color)",
            overflowx: "hidden"
     
           });
           /******************small menue ******************* */
          
           $(".bar .smenu").fadeOut();
          $(".bar i").click(function(){

           $(".bar .smenu").toggleClass("open");

           $(".bar .smenu").fadeIn();
        
          });
          /***************** header*********************** */

              $("header .back").height($(window).height());
               
          

});
