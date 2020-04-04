var Mouse = require('./Mouse');
var Cat = require('./Cat');
var Dog = require('./Dog')

var mouse = new Mouse('Jelly');
var cat = new Cat();
var dog = new Dog('Lulu');

try{
	cat.eat(dog);
}catch {
	console.log('Error while cat eating a dog');
}
console.log(cat);