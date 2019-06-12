// $('.post-tweet').on('click', function(e){
//   $('.post-tweet').on('submit', function(e){
//   e.preventDefault();
//   $.ajax({
//   type: 'POST',
//   url: '/index.html',
//   })
//   // .then(function ()){
//     // }
// });
// });

$(function() {
  var $button = $('div input');
  var $form = $('.post-tweet')
  $('form').submit(function (e) {
    console.log('working');
  e.preventDefault();
  var $data = $form.serialize();
  console.log($data);

  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: $data,
    success: function (e) {
    console.log('Success: ', e);
    // $button.replaceWith(morePostsHtml);
    }
  });
});
})

