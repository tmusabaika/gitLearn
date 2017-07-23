$(".toolTip, .circularToolTip").hide().slideDown(100);
$(".toolTip").click(function(){
    $(".toolTip").slideToggle(1000)
    .css({"background": "lightblue",
          "border-color": "lightblue"
         });
  });

$(".circularToolTip").click(function(){
  $(".circularToolTip").slideUp(1000);
});
  
