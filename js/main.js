$('button').button({ disabled: true });

$("video").on("ended",function(){
  $( "button" ).button( "option", "disabled", false );
});

$("#answers").click(function(){
  $("#answers:p").addClass("color");
});


var sound = new Audio();
sound.src = "sound-effect/QuizZz-voice-Fernando.m4a";