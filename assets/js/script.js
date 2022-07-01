var headerContainerEl = document.querySelector("#headerOne");
var displayDateEl = document.createElement("p");

console.dir(headerContainerEl);

var getDate = function() {

displayDateEl.textContent = moment().format("MMM Do YY");
displayDateEl.className = "lead";

console.log(displayDateEl);

headerContainerEl.appendChild(displayDateEl);
};

getDate();
