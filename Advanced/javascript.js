

function nummereingabe(num){
	var a = document.getElementsByClassName("textfeld")[0];
	a.value += num;
}

function ergebnis() {
	var a = document.getElementsByClassName("textfeld")[0];
	var exp = a.value;
	
	a.value = eval(exp);
	
	if (false) {
	a.value = eval(exp);
	}	
}
