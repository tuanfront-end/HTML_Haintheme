
    $(document).ready(function() {
 
      var owl = $("#owl-demo");
     
      owl.owlCarousel({
          items : 6, //10 items above 1000px browser width
          itemsDesktop : [1000,6], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 0
          itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
          pagination : false
      });
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
     
    });
// End owlCarousel_________



    $(document).ready(function(){
        var animationNameIn = 'animated bounceInLeft';
        var animationNameOut = 'animated hinge';
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

       $('.open-nav').click(function(){
        
          $(".reponsive-nav-list").css({"z-index":"100","width":"100%","display":"block","font-size":"40px",
            "text-align":"center"});
          $(".reponsive-nav-list").addClass(animationNameIn).one(animationEnd,function(){
            $(this).removeClass(animationNameIn);
         });
      });
        $('.close-nav').click(function(){
           $(".reponsive-nav-list").addClass(animationNameOut).one(animationEnd,function(){
             $(this).css("display","none");
             $(this).removeClass(animationNameOut);
          });
       });
    });
 // End REnponsive-menu________

