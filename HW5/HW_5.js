function total_number() {
	var chicken, cow, pig, total;
	chicken = document.getElementById("id_1").value;
	cow = document.getElementById("id_2").value;
	pig = document.getElementById("id_3").value;
	total = (Number(chicken) * 2) + (Number(cow) * 4) + (Number(pig) * 4);
	document.getElementById("id_4").value = total;
}


function isPlural() {
	var string, s;
	string = document.getElementById("ex_2").value;
	s = string[string.length-1];
	if (s == "s") {
		document.getElementById("ex_2_2").innerHTML = "true"
	}
	else {
		document.getElementById("ex_2_2").innerHTML = "false"
	}
}


function equalSlices(total_slices, num_recipients, slices_each) {
	var n;
	n = (Number(num_recipients) * Number(slices_each));
	if (n <= Number(total_slices)) {
		document.getElementById("ex_3_4").innerHTML = "true";
	}
	else {
		document.getElementById("ex_3_4").innerHTML = "false";
		
	}
}


function difference(pp1, pp2, pp3) {
	p1 = Number(pp1);
	p2 = Number(pp2);
	p3 = Number(pp3);

	var max, min, dif;
	max = Math.max(p1, (Math.max(p2, p3)));
	min = Math.min(p1, (Math.min(p2, p3)));
	dif = Number(max) - Number(min);
	document.getElementById("ex_4_4").innerHTML = dif;
}


function findDigitAmount(number) {
	var length = number.length;
	document.getElementById("ex_5_2").innerHTML = length;
}


function cubes(argument) {
	var n = Number(argument);
	var res = ""; 
	var sum = 0;
	for (var i = 1; (i*i*i) <= n; i++) {
		res += "The number is " + (i*i*i) + "<br>";
		sum += (i*i*i);
	}
	res = res + "<br>" + "The sum is " + sum;
	document.getElementById("ex_6_2").innerHTML = res;
}