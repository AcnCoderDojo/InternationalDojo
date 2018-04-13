$('#search-bar input').keyup(function() {
  // Set needded variables
  var input = $(this).val();
  var input = input.toLowerCase();
  var inputLength = input.length;

  // Add custom search attribute and replace with lowercase text.
  $('#results .result').each(function(){
    var name = $(this).text();
    var name = name.toLowerCase();
    $(this).attr('data-search',name);
  });

  // Hide or show results
  $('#results .result').removeClass('show hide');
  $('#results .result[data-search*="'+ input +'"]').addClass('show');
  $('#results .result:not([data-search*="'+ input +'"])').addClass('hide');

  // Show all results if no search is done
  if(inputLength === 0){
    $('#results .result').removeClass('show hide');
  }
});
