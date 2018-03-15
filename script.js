function Phone(brand, price, color, info) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.info = info;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " - " + this.info + ".");
}

var iPhone8 = new Phone ("Apple", 6000, "black", "basicaly this is shit");

iPhone8.printInfo();

Phone.prototype.showCase = function() {
	alert(this.brand + " is very expensive " + "and " + this.info + ".");
}

iPhone8.showCase();