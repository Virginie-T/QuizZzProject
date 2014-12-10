




/************************************SOUND*******************************/


/*////////////////PLAY PAGE ////////*/

/*logo*/

$(document).ready(function(){
  console.log("document ready");
    
    
/*/////////////WRONG_RESULT PAGE //////*/


$('.sound-link').click(function(){
  event.preventDefault();  
  var $soundFile = $(this).attr('data-sound');
  var $link = $(this).attr('href');

  var audioTag = "<audio class='playing-audio' data-next-page='" +$link + "'></audio>";
  $('.sound-link')
    .append($(audioTag)
            .attr('src', $soundFile).attr('autoplay', 'autoplay'));  
  
  // $(".playing-audio").on("ended", function(){
  //     var $link = $(this).attr('data-next-page');
  //     window.location = $link;
  // });
      
});



/************************************ANIMATION*******************************/

    $(".text-more-fun").click(function(event) {
	   $(this).addClass('rotate-text');

              window.location.href = $(this).attr('href');  
       event.preventDefault();

    });

});




/************************************SVG ARROW*******************************/

