
$(document).ready(function() {
  // hover effect on new-tweet
  $(".news-post").hover(function () {
    $(this).css("border", "1px solid black");
    $(this).children(".news-post-header").css("opacity", "1");
    $(this).children(".news-post-footer").children(".icons").css("opacity", "1");
    }

    , function(){
      $(this).css("border", "1px solid rgba(0, 0, 0, 0.3)")
      $(this).children(".news-post-header").css("opacity", "0.5");
      $(this).children(".news-post-footer").children(".icons").css("opacity", "0");
      })

  //"Compose Tweet" appears when compose button is pressed
  $(".compose-button").on("click", () => {
    $('main .new-tweet').toggle('slow');
    $('#new-post').select();
  })

})


