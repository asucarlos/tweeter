
$(document).ready(function() {
console.log("hi");

var count = 0;
$("textarea").on("input", function() {
  var $text = $("textarea").val();
  if($text.length > 140){
    $($(this).siblings().children()[1]).html("-" + ($text.length - 140));
    $($(this).siblings().children()[1]).css("color", "red");
  } else {
    $($(this).siblings().children()[1]).html($text.length);
    $($(this).siblings().children()[1]).css("color", "#000000");
  }
});
})





