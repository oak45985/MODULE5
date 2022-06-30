var displayDate = function() {
   var displayAgain = $("<p>").addClass("current-day").text(moment());
   displayAgain.append(jumbotron);
}

displayDate();

updated 