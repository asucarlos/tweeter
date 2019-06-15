
$(document).ready(function() {
//"Compose Tweet" appears when compose button is pressed
  $(".compose-button").on("click", () => {
    $('main .new-tweet').toggle('slow');
    $('#new-post').select();
  })
})


