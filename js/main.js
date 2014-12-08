$('button').button({ disabled: true });

$("video").on("ended",function(){
  $( "button" ).button( "option", "disabled", false );
});

$("#answers").click(function(){
  $("#answers:p").addClass("color");
});



var sound = document.getElementsByTagName("audio")[0];

sound.addEventListener(function() { document.getElementsByTagName("audio")[0].play()});


$(".text-more-fun").click(function(event) {
	 event.preventDefault();
	$(this).addClass('rotate-text');
	window.setTimeout("src='Video2.html'",500);

});


