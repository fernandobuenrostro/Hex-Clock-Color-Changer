
const clk = document.getElementById("clock");

var clr;

function updateClock(){
//dt is created and updated with the new time value
	var dt = new Date();

//parse dt into hour, minute, and second
	var h = dt.getHours();
	var m = dt.getMinutes();
	var s = dt.getSeconds();

//add '0' to single digit values
	s = (s < 10 ? "0" + s : s);
	m = (m < 10 ? "0" + m : m);
	h = (h < 10 ? "0" + h : h);

//concatenate time values into a 6 digit value with a leading '#'
//	used as the hex color value
	var clr = "#" + h + m + s;

//concatenate time values into standard clock format with ':'
//	and then update the displayed time value
	var tm =  "#" + h + ":" + m + ":" + s;

	clk.innerHTML = tm;

	return clr;
}

function updateColor(clr){
	document.body.style.backgroundColor = clr;
}

function updateTextColor(clr){
//initialize opposite hex color placeholder with '#'
	var opp = "#";

//parse original color string by character and calculate oppotie hex value
//	by subtracting 15 with current character; if difference is greater than
//	9, convert to Hex value
	for(var i = 1; i < clr.length; i++){
		if((15 - clr[i]) > 9){
			switch(15 - clr[i]){
				case 10:
					opp += "A";
					break;
				case 11:
					opp += "B";
					break;
				case 12:
					opp += "C";
					break;
				case 13:
					opp += "D";
					break;
				case 14:
					opp += "E";
					break;
				case 15:
					opp += "F";
					break;
			}
		}
		else{
			opp += 15 - clr[i];
		}
	}
//update clock text color to opposite of background to ensure contrast
	document.getElementById("clock").style.color = opp;
}

//foo is the main driver function
function foo(){
	clr = updateClock();
	updateColor(clr);
	updateTextColor(clr);
}

//update clock every second
window.setInterval(foo, 1000);


