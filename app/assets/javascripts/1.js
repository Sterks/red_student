$(document).ready(function() {

$("#autocomplete_1").autocomplete({
source: function (request, response)
{
  $.ajax(
  {
    url: "autocomplete_1.php",
    dataType: "json",
    data:
    {
      query: request.term,
    },
    success: function (data)
    {
      response(data);
    }
  });
},
minLength: 1,
select: function( event, ui ) {
  $("#autocomplete_1").parents("form").submit();
}
});
});
