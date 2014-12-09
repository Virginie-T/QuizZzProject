$('button').button({ disabled: true });

$("video").on("ended",function(){
  $( "button" ).button( "option", "disabled", false );
});

$("#answers").click(function(){
  $("#answers:p").addClass("color");
});





/************************************SOUND*******************************/


/*////////////////PLAY PAGE ////////*/

/*logo*/

$(document).ready(function(){
    
    $('.logo').on('click', function(event){
        event.preventDefault(); 
        

        $('<audio></audio>')
            .attr('src', 'http://www.freesfx.co.uk/rx2/mp3s/10/12016_1415549742.mp3')
            .attr('autoplay', 'autoplay');  
        
        window.location.href = $(this).attr('href');  
    });
    

/* anim principale */

    
    $('.anim-principal').on('click', function(event){
        event.preventDefault(); 
        

        $('<audio></audio>')
            .attr('src', 'http://www.freesfx.co.uk/rx2/mp3s/10/12016_1415549742.mp3')
            .attr('autoplay', 'autoplay');  
        
        window.location.href = $(this).attr('href');  
    });
    
/* Play  button */

    
    $('.banner').on('click', function(event){
        event.preventDefault(); 
        

        $('<audio></audio>')
            .attr('src', 'http://www.freesfx.co.uk/rx2/mp3s/10/12016_1415549742.mp3')
            .attr('autoplay', 'autoplay');  
        
        window.location.href = $(this).attr('href');  
    });
    
/*///////////////////VIDEO PAGE/////////*/

/*guess button*/

    
    $('.guess-anim').on('click', function(event){
        event.preventDefault(); 
        

        $('<audio></audio>')
            .attr('src', 'http://www.freesfx.co.uk/rx2/mp3s/10/12016_1415549742.mp3')
            .attr('autoplay', 'autoplay');  
        
        window.location.href = $(this).attr('href');  
    });

/*/////////ANSWERS PAGE //////////*/   

/*banner*/

    $('.wrong').on('click', function(event){
        event.preventDefault(); 
        

        $('<audio></audio>')
            .attr('src', 'http://www.freesfx.co.uk/rx2/mp3s/10/12016_1415549742.mp3')
            .attr('autoplay', 'autoplay');  
        
        window.location.href = $(this).attr('href');  
    });



  $('.right').on('click', function(event){
        event.preventDefault(); 
        

        $('<audio></audio>')
            .attr('src', 'http://www.freesfx.co.uk/rx2/mp3s/10/12016_1415549742.mp3')
            .attr('autoplay', 'autoplay');  
        
        window.location.href = $(this).attr('href');  
    });

/*/////////////WRONG_RESULT PAGE //////*/

  $('#more-fun').on('click', function(event){
        event.preventDefault(); 
        

        $('<audio></audio>')
            .attr('src', 'http://www.freesfx.co.uk/rx2/mp3s/10/12016_1415549742.mp3')
            .attr('autoplay', 'autoplay');  
        
        window.location.href = $(this).attr('href');  
    });


/************************************ANIMATION*******************************/

    $(".text-more-fun").click(function(event) {
	    event.preventDefault();
	   $(this).addClass('rotate-text');
    });

});
