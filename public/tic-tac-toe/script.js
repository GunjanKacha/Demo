
function myfunc() {

	
	var gunjan1, gunjan2, gunjan3, gunjan4, gunjan5, gunjan6, gunjan7, gunjan8, gunjan9;
	gunjan1 = document.getElementById("gunjan1").value;
	gunjan2 = document.getElementById("gunjan2").value;
	gunjan3 = document.getElementById("gunjan3").value;
	gunjan4 = document.getElementById("gunjan4").value;
	gunjan5 = document.getElementById("gunjan5").value;
	gunjan6 = document.getElementById("gunjan6").value;
	gunjan7 = document.getElementById("gunjan7").value;
	gunjan8 = document.getElementById("gunjan8").value;
	gunjan9 = document.getElementById("gunjan9").value;

	
	if ((gunjan1 == 'x' || gunjan1 == 'X') && (gunjan2 == 'x' ||
		gunjan2 == 'X') && (gunjan3 == 'x' || gunjan3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan5").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		document.getElementById("gunjan7").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		document.getElementById("gunjan9").disabled = true;
		window.alert('Player X won');
	}
	else if ((gunjan1 == 'x' || gunjan1 == 'X') && (gunjan4 == 'x' ||
		gunjan4 == 'X') && (gunjan7 == 'x' || gunjan7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan3").disabled = true;
		document.getElementById("gunjan5").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		document.getElementById("gunjan9").disabled = true;

		window.alert('Player X won');
	}
	else if ((gunjan7 == 'x' || gunjan7 == 'X') && (gunjan8 == 'x' ||
		gunjan8 == 'X') && (gunjan9 == 'x' || gunjan9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("gunjan1").disabled = true;
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan3").disabled = true;
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan5").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		window.alert('Player X won');
	}
	else if ((gunjan3 == 'x' || gunjan3 == 'X') && (gunjan6 == 'x' ||
		gunjan6 == 'X') && (gunjan9 == 'x' || gunjan9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("gunjan1").disabled = true;
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan5").disabled = true;
		document.getElementById("gunjan7").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		window.alert('Player X won');
	}
	else if ((gunjan1 == 'x' || gunjan1 == 'X') && (gunjan5 == 'x' ||
		gunjan5 == 'X') && (gunjan9 == 'x' || gunjan9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan3").disabled = true;
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		document.getElementById("gunjan7").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		window.alert('Player X won');
	}
	else if ((gunjan3 == 'x' || gunjan3 == 'X') && (gunjan5 == 'x' ||
		gunjan5 == 'X') && (gunjan7 == 'x' || gunjan7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("gunjan1").disabled = true;
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		document.getElementById("gunjan9").disabled = true;
		window.alert('Player X won');
	}
	else if ((gunjan2 == 'x' || gunjan2 == 'X') && (gunjan5 == 'x' ||
		gunjan5 == 'X') && (gunjan8 == 'x' || gunjan8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("gunjan1").disabled = true;
		document.getElementById("gunjan3").disabled = true;
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		document.getElementById("gunjan7").disabled = true;
		document.getElementById("gunjan9").disabled = true;
		window.alert('Player X won');
	}
	else if ((gunjan4 == 'x' || gunjan4 == 'X') && (gunjan5 == 'x' ||
		gunjan5 == 'X') && (gunjan6 == 'x' || gunjan6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("gunjan1").disabled = true;
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan3").disabled = true;
		document.getElementById("gunjan7").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		document.getElementById("gunjan9").disabled = true;
		window.alert('Player X won');
	}

	else if ((gunjan1 == '0' || gunjan1 == '0') && (gunjan2 == '0' ||
		gunjan2 == '0') && (gunjan3 == '0' || gunjan3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan5").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		document.getElementById("gunjan7").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		document.getElementById("gunjan9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((gunjan1 == '0' || gunjan1 == '0') && (gunjan4 == '0' ||
		gunjan4 == '0') && (gunjan7 == '0' || gunjan7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan3").disabled = true;
		document.getElementById("gunjan5").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		document.getElementById("gunjan9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((gunjan7 == '0' || gunjan7 == '0') && (gunjan8 == '0' ||
		gunjan8 == '0') && (gunjan9 == '0' || gunjan9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("gunjan1").disabled = true;
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan3").disabled = true;
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan5").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((gunjan3 == '0' || gunjan3 == '0') && (gunjan6 == '0' ||
		gunjan6 == '0') && (gunjan9 == '0' || gunjan9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("gunjan1").disabled = true;
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan5").disabled = true;
		document.getElementById("gunjan7").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((gunjan1 == '0' || gunjan1 == '0') && (gunjan5 == '0' ||
		gunjan5 == '0') && (gunjan9 == '0' || gunjan9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan3").disabled = true;
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		document.getElementById("gunjan7").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((gunjan3 == '0' || gunjan3 == '0') && (gunjan5 == '0' ||
		gunjan5 == '0') && (gunjan7 == '0' || gunjan7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("gunjan1").disabled = true;
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		document.getElementById("gunjan9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((gunjan2 == '0' || gunjan2 == '0') && (gunjan5 == '0' ||
		gunjan5 == '0') && (gunjan8 == '0' || gunjan8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("gunjan1").disabled = true;
		document.getElementById("gunjan3").disabled = true;
		document.getElementById("gunjan4").disabled = true;
		document.getElementById("gunjan6").disabled = true;
		document.getElementById("gunjan7").disabled = true;
		document.getElementById("gunjan9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((gunjan4 == '0' || gunjan4 == '0') && (gunjan5 == '0' ||
		gunjan5 == '0') && (gunjan6 == '0' || gunjan6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("gunjan1").disabled = true;
		document.getElementById("gunjan2").disabled = true;
		document.getElementById("gunjan3").disabled = true;
		document.getElementById("gunjan7").disabled = true;
		document.getElementById("gunjan8").disabled = true;
		document.getElementById("gunjan9").disabled = true;
		window.alert('Player 0 won');
	}

	
	else if ((gunjan1 == 'X' || gunjan1 == '0') && (gunjan2 == 'X'
		|| gunjan2 == '0') && (gunjan3 == 'X' || gunjan3 == '0') &&
		(gunjan4 == 'X' || gunjan4 == '0') && (gunjan5 == 'X' ||
		gunjan5 == '0') && (gunjan6 == 'X' || gunjan6 == '0') &&
		(gunjan7 == 'X' || gunjan7 == '0') && (gunjan8 == 'X' ||
		gunjan8 == '0') && (gunjan9 == 'X' || gunjan9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}


function myfunc_2() {
	location.reload();
	document.getElementById('gunjan1').value = '';
	document.getElementById("gunjan2").value = '';
	document.getElementById("gunjan3").value = '';
	document.getElementById("gunjan4").value = '';
	document.getElementById("gunjan5").value = '';
	document.getElementById("gunjan6").value = '';
	document.getElementById("gunjan7").value = '';
	document.getElementById("gunjan8").value = '';
	document.getElementById("gunjan9").value = '';

}


flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("gunjan1").value = "X";
		document.getElementById("gunjan1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gunjan1").value = "0";
		document.getElementById("gunjan1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("gunjan2").value = "X";
		document.getElementById("gunjan2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gunjan2").value = "0";
		document.getElementById("gunjan2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("gunjan3").value = "X";
		document.getElementById("gunjan3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gunjan3").value = "0";
		document.getElementById("gunjan3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("gunjan4").value = "X";
		document.getElementById("gunjan4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gunjan4").value = "0";
		document.getElementById("gunjan4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("gunjan5").value = "X";
		document.getElementById("gunjan5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gunjan5").value = "0";
		document.getElementById("gunjan5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("gunjan6").value = "X";
		document.getElementById("gunjan6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gunjan6").value = "0";
		document.getElementById("gunjan6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("gunjan7").value = "X";
		document.getElementById("gunjan7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gunjan7").value = "0";
		document.getElementById("gunjan7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("gunjan8").value = "X";
		document.getElementById("gunjan8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gunjan8").value = "0";
		document.getElementById("gunjan8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("gunjan9").value = "X";
		document.getElementById("gunjan9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("gunjan9").value = "0";
		document.getElementById("gunjan9").disabled = true;
		flag = 1;
	}
}
