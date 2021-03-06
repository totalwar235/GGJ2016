function item(name,power,speed,cond) {
	//basic
	this.name = "Fist";
	this.power = 1;
	this.speed = 1;
	this.cond = 5;
	this.filePath = "fistImg.svg";
	this.aniPath = "Anis/Fist_Ani.gif"
    this.cooldown = 2;
	var soundPath = "sound/punch.ogg";
	this.getName = function() {
		return this.name;
	}
	this.getPower = function() {
		return this.power;
	}
	this.getCond =  function() {
		return this.cond;
	}
	this.getSpeed = function() {
		return this.speed;
	}
	
	this.setName = function(name) {
		this.name = name;
	}
	this.setPower = function(pwr) {
		this.power = pwr;
	}
	this.setCond =  function(cond) {
		this.cond = cond;
	}
	this.setSpeed = function(spd) {
		this.speed = spd;
	}
	
	this.clone = function(){
		var box = new item();
		box.name = this.name;
		box.power = this.power;
		box.speed = this.speed;
		box.cond = this.cond;
		box.filePath = this.filePath;
		box.aniPath = this.aniPath;
		box.soundPath = this.soundPath;
		return box;
	}
}
