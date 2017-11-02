$(document).ready(function(){
  
   // Shrink Nav Bar ------------
  $(window).scroll(function() {

      var scroll = $(window).scrollTop();

      if ( scroll >= 50 ) {
        $('#logo').addClass('shrink');
        $('.navigation-wrapper').addClass('shrink');
      } else {
        $('#logo').removeClass('shrink');
        $('.navigation-wrapper').removeClass('shrink');
      }

  });
  
  /* HOME PAGE - Add the class that pushes the top-most section down out of the visible window,
  to allow for the rev slider to initialise and display. This is because the rev slider has no 
  height intially */
  $('.first-section').addClass('shrink');
  
  // --------------------------------
  // object-cover Polyfill for Edge/IE
  
  // In Edge, replaces the <img> tag and uses background image.
  
  // This is a mashup of two different articles:
  // Taken from https://www.superrb.com/news/object-fit-fallback
  // AND
  // https://codepad.co/snippet/ah4P9mUE

  // Basically needed to do this because the test for Modernizr.objectfit doesn't seem to work:
  // See https://github.com/Modernizr/Modernizr/issues/1607
  // ... so ended up using a bit of browser sniffing for the user agent (yuk)
  // Might work ok with newer version of Modernizr from the CDN.
  
  
  // The Magic Begins for IE & MSEdge 12+
  function objectFit() {
      
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE ');
      var trident = ua.indexOf('Trident/');
      var edge = ua.indexOf('Edge/');
    
      if (msie > 0 || edge > 0 || trident > 0) {
        
        if ( ! Modernizr.objectfit ) {
          
            $('img.objFit').each(function(){
                
                var imgSrc = $(this).attr('src');
                var fitType = 'cover';

                if($(this).data('fit-type')) {
                    fitType = $(this).data('fit-type');
                }

                $(this).parent().css({ 'background' : 'transparent url("'+imgSrc+'") no-repeat center center/'+fitType, });
                $(this).remove(); 
     
            });
          
        }
      }
      
      return false;
    }
    
    // Execute the function
    objectFit();
  
});