




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
setTimeout(function(){  


    $(".text-more-fun").click(function(event) {
	   $(this).addClass('rotate-text');

              window.location.href = $(this).attr('href');  
       event.preventDefault();

    }); }, 1000);

});




/************************************SVG ARROW*******************************/


var arrowOffset = 26;     // how far apart vertically arrows are spaced
var arrowHeight = 34;   // must match the basicArrow polyline
var counterBoxHeight = 420; // how tall the whole display is
var counterBoxWidth = 40;   // how wide the whole display is
var maxScore = 10;      // 20 - all arrows - fixed for a particular stage of the game
var currentScore = 4; // 5 - red arrows - the game will set this based on user answers
                // change this to see the score change
/*
in this version of the game, we have to adjust the size of the display and the number of arrows by hand
be sure to adjust the counterBoxHeight, counterBoxWidth, and maxScore to match the desired display size
*/

/* draw the display when the document is ready */
$(document).ready(function(){
  $("#boxFrame").html(drawCounter(counterBoxHeight, counterBoxWidth, currentScore, maxScore));
});

function drawCounter(boxHeight, boxWidth, currentScore, maxScore){
  /* Returns an SVG tag for the score display */
  // console.log ("Running drawCounter with " +  currentScore +":" + maxScore)
  // start the svg tag
  var tag = '<svg id="counterBox" height="' + boxHeight +'" width="' + boxWidth + '">';
  // add the style information (which must be inside the tag if we are using classes in SVG)
  tag+= '<defs><style type="text/css"><![CDATA[' +
       '.score { fill: rgb(255, 6, 123); stroke-width: 2;  stroke: rgba(145, 22, 22, 0.65);}'+
      '.blank { fill: khaki; stroke-width: 1; stroke: #F7F;}'+
      ' ]]></style> </defs>'
  
  var yOffset = boxHeight - arrowHeight; // position the first arrow near the bottom
  // add the polylines that are visible
  for (var p = 0; p< currentScore; p++){
    tag += drawArrow(yOffset, "score"); // add the next polyline to the svg tag
    yOffset -= arrowOffset;         // move up for the next one
  }
  // now the blank arrows to show what else they need to earn
    for (var p = currentScore; p < maxScore; p++){
    tag += drawArrow(yOffset, "blank"); // add the next polyline to the svg tag
    yOffset -= arrowOffset;           // move up for the next one
  }
  // finish the svg tag
  tag += '</svg>';
  return(tag);
}

function drawArrow(yOffset, polyLineClass){
  // this function draws the arrow using a polyline shape
  // offset by a certain amount and assigned a given class name
  var baseArrow =[
    {x:0,  y:20},
    {x:30, y:-6},
    {x:60, y:20}, // width = 40
    {x:52, y:28}, // height = 34
    {x:30, y:9},
    {x:7,  y:28},
    {x:1,  y:20}
  ];
  // console.log ("Running drawArrow with " +  yOffset)
    // {x:0,  y:20},
    // {x:20, y:0},
    // {x:40, y:20}, // width = 40
    // {x:34, y:26}, // height = 34
    // {x:20, y:12},
    // {x:5,  y:26},
    // {x:1,  y:20}

  // start off the tag
  var tag = '<polyline class="'+ polyLineClass + '" points="';
  // write out the values in the array as points in the tag
  for (var p = 0; p < baseArrow.length; p++){
    var newY = baseArrow[p].y + yOffset;
    tag = tag + baseArrow[p].x + "," + newY + " ";
  }
  // finish off the tag
  tag += '"/>';
  // console.log(tag);
  return(tag);
}

// 0,406     20,386      40,406     34,412     20,398     5,412     1,406 
//           x+10        x+20     x+22,y+3    x+10,y+1   x+2,y+2
// 0,406     30,386      60,406     54,415     30,399     7,414     1,406 

