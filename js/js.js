
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
     
      //----------------------------------------------------------------------
      // external js: isotope.pkgd.js
      // init Isotope
      var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      });
      // filter functions
      var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
          var name = $(this).find('.name').text();
          return name.match( /ium$/ );
        }
      };
      // bind filter button click
      $('.filters-button-group').on( 'click', 'li', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
      });
      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });
      //- END ISOTOPE---------------------------------------------------------------------
     
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

    $(function(){
            // SyntaxHighlighter.all();
        });
      $(window).load(function(){
        $('.flexslider').flexslider({
          animation: "slide",
          start: function(slider){
            $('body').removeClass('loading');
          }
        });
      });

      // End Flex Slider-2-________


