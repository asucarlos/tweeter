
$(document).ready(function() {
var count = 0;
$(".new-tweet textarea").on("input", function() {
  var $text = $(".new-tweet textarea").val();
  if($text.length > 140){
    $($(this).siblings().children('.counter')).html("-" + ($text.length - 140));
    $($(this).siblings().children('.counter')).css("color", "red");
  } else {
    $(this).siblings().children('.counter').html($text.length);
    $(this).siblings().children('.counter').css("color", "#000000");
  }
});
})





