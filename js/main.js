$('button').button({ disabled: true });

$("video").on("ended",function(){
  $( "button" ).button( "option", "disabled", false );
});

$("#answers").click(function(){
  $("#answers:p").addClass("color");
});