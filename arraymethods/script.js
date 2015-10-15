console.log("test");

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML
// var outputPlanet = "";
planets.forEach(function (planet) {
	document.getElementById("planet-names").innerHTML += "<p>" + planet + "</p>";
});
// document.getElementById("planet-names").innerHTML = outputPlanet;

// Use the map method to create a new array where the first letter of each planet is capitalized
var capsPlanets = planets.map(function (planet) {
	return planet.slice(0,1).toUpperCase() + planet.slice(1);
})
console.log(capsPlanets)

// Use the filter method to create a new array that contains planets with the letter 'e'
var planetsWithE = planets.filter(function (planet) {
	return planet.indexOf("e")!== -1
})
console.log(planetsWithE);

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var sentence = words.reduce(function (prev, curr) {
	return prev + " " + curr;
})
console.log(sentence);











































