$('button').button({ disabled: true });

$("video").on("ended",function(){
  $( "button" ).button( "option", "disabled", false );
});

