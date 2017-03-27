$(document).ready(function() {
  $("#formOne").submit(function(event) {
// set variables and retrieve value of each input
  var question1 = $("input#question1").val();
  var question2 = $("input#question2").val();
  var question3 = $("input#question3").val();
// set variable to create array
  var inputs = [question1, question2, question3];
  // create new array for moving elements of original array
  var cloneInputs = inputs.slice();
  cloneInputs.push(question1);
  cloneInputs.shift();
  cloneInputs.push(question3);
  cloneInputs.splice(1, 1);
  cloneInputs.forEach(function(cloneInput) {
    $("#result").append("<li>" + cloneInput + "</li>");
  });
  event.preventDefault();
  });
});
