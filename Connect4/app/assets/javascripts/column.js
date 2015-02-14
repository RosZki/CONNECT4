column = function(){
	this.num = 0;
	this.data = [0,0,0,0,0,0];
	this.add = function(number){
		this.data[this.data.length-1-this.num] = number;
		this.num++;
		return this.num-1;
	}
}