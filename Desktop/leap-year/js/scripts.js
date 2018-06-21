$(document).ready(function() {

  var leapYear = function(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  };

  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    if (result === true) {
      $("#result").text("it is a leap year!")
    } else {
      $("#result").text("it is NOT a leap year!");
    }

  });
});
