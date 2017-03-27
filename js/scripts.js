$(document).ready(function() {
  $("#formOne").submit(function(event) {
// set variables and retrieve value of each input
  var question1 = $("input#question1").val();
  var question2 = $("input#question2").val();
  var question3 = $("input#question3").val();
// set variable to create array
  var inputs = [question1, question2, question3];

  console.log(inputs);

  // return()
  event.preventDefault();
  });
});
