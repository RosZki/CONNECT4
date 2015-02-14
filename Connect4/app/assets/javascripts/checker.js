checker = function(){
	this.check = function(d, r, c){
		return this.checkVertically(d, r, c) || this.checkHorizontally(d,r,c)|| this.checkDiagonally(d,r,c);
	}
	this.checkVertically = function(d, r, c){
		var number = d[c].data[r];
		var i = -3;
		var count = 0;
		while (i < 4){
			if(d[c].data[r+i] == undefined){
				i++;
				continue;
			}
			else if(d[c].data[r+i] == number){
				count++;
				i++;
				if(count >=4)
					break;
				continue;
			}
			else{
				count = 0;
				i++;
				continue;
			}
		}
		if(count >= 4)
			return true;
		else
			return false;
	}
	this.checkHorizontally = function(d,r,c){
		var number = d[c].data[r];
		var i = -3;
		var count = 0;
		while (i < 4){
			if(d[c+i] == undefined){
				i++;
				continue;
			}
			else if(d[c+i].data[r] == number){
				count++;
				i++;
				if(count>=4)
					break;
				continue;
			}
			else{
				count = 0;
				i++;
				continue;
			}
		}
		if(count >= 4)
			return true;
		else
			return false;
	}
	this.checkDiagonally = function(d,r,c){
		return this.checkNegDiagonal(d,r,c) || this.checkPosDiagonal(d,r,c);
	}
	this.checkPosDiagonal = function(d,r,c){
		var number = d[c].data[r];
		var i = -3;
		var count = 0;
		while (i < 4){
			if(d[c+i] == undefined){
				i++;
				continue;
			}
			else if(d[c+i].data[r-i] == number){
				count++;
				i++;
				if(count>=4)
					break;
				continue;
			}
			else{
				count = 0;
				i++;
				continue;
			}
		}
		if(count >= 4)
			return true;
		else
			return false;
	}
	this.checkNegDiagonal = function(d,r,c){
		var number = d[c].data[r];
		var i = -3;
		var count = 0;
		while (i < 4){
			if(d[c+i] == undefined){
				i++;
				continue;
			}
			else if(d[c+i].data[r+i] == number){
				count++;
				i++;
				if(count>=4)
					break;
				continue;
			}
			else{
				count = 0;
				i++;
				continue;
			}
		}
		if(count >= 4)
			return true;
		else
			return false;
	}
	this.checkIfFilled = function(d){
		for(i=0;i<d.length;i++)
			if(d[i].num < 6)
				return false;	
		return true;
	}
}