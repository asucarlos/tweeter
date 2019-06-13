
// hover effect on new-tweet
$(document).ready(function() {
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

//error on new-tweet
  // $('')

})


