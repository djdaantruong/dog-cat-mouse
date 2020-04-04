function Mouse(name) {
	// body...
	this.name = name;
	this.isDead = false;
}
module.exports = Mouse;
//hehe
Mouse.prototype.die = function (arguments) {
	// body...
	this.die = true;
}