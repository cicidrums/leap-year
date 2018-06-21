$(document).ready(function() {

  var leapYear = function(year) {
    return false;
  };

  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $("#result").text(result);
  });
});
