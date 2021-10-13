function decimalToBinary() {
	var decimal = document.getElementById("decimal").value;
	
	if(decimal == ""){
		alert("Please fill up the required field!");
	}else{
		decimal = parseInt(decimal);
		var binary = decimal.toString(2);
		document.getElementById("result").innerHTML = "<center><label style='font-size:18px;'>The binary number is</label></center><center><h3 class='text-primary'>"+binary+"</h3></center>";
	}
}

function reset(){
	document.getElementById("decimal").value = "";
	document.getElementById("result").innerHTML = "";
}