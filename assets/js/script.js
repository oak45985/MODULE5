var headerContainerEl = document.querySelector("#headerOne");
var displayDateEl = document.createElement("p");
var hourByHourEl = document.querySelector("#hour");

var getDate = function() {

displayDateEl.textContent = moment().format("MMM Do YY");
displayDateEl.className = "lead";

console.log(displayDateEl);

headerContainerEl.appendChild(displayDateEl);
};

getDate();

var changeHour = function() {
   var currentTime = moment();

   // if 
}

