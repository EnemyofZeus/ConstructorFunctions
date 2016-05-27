//Contructer Functions

//1. Create an array called bands with 3 objects in it. Each of them describes a music band. Each object should have a name, genre, numberOfPerformers, and numberOfGroupies.
var bands = [{name:"Dubious at Best", genre: "Progressive Metal", numberOfPerformers:1, numberOfGroupies: "97"}, {name:"Brütal Density", genre: "Technical Death Metal", numberOfPerformers:5 numberOfGroupies:"3"}, {name:"Toster Man and the Naked Lady Hands", genre:"Hardcore Punk", numberOfPerformers:4, numberOfGroupies:1200} ];

//Now create a constructor function called Band. Have it take in a name, genre, numberOfPerformers, and numberOfGroupies. Set the keys to have the value of the parameters using the this keyword.
function Band(name, genre, numberOfPerformers, numberOfGroupies){
  this.name = name;
  this.genre = genre;
  this.numberOfPerformers = numberOfPerformers;
  this.numberOfGroupies = numberOfGroupies;
}
//Now create those same bands you made before using the constructor function Band using the new keyword. Plug in the values for each of the object keys as argumeters.
var dub = new Band("Dubious at Best", "Progressive Metal", 1, 97);
var bd = new Band("Brütal Density", "Technical Death Metal", 5, 2);
var tmanh = new Band("Toster Man and the Naked Lady Hands", "Hardcore Punk", 4, 1200);
//Now create a new array called newBands and push each of the objects that you made into that array.
var newBands = [];
newBands.push(dub);
newBands.push(bd);
newBands.push(tmanh);
//Alright, you have created new objects using a constructor function. Let's say we want to add a new key to the constructor function. To do so, go ahead and create a method called bandInfo using the prototype method for the Band constructor. Let's have the bandInfo method alert the band's name and their music genre.
Band.prototype.bandInfo = function(){
  alert("We are " +this.name + " and we play " +this.genre);
}
