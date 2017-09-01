document.addEventListener("DOMContentLoaded", main);

function main() {
	var seconds = document.getElementById("seconds");
	var minutes = document.getElementById("minutes");
	var secNum = document.getElementById("sec");
	var minNum = document.getElementById("min");
	// var secondsStr = window.getComputedStyle(seconds).getPropertyValue('transform');
	// var minutesStr = window.getComputedStyle(minutes).getPropertyValue('transform');
	// var valuesSec = secondsStr.split('(')[1],
	//     valuesSec = valuesSec.split(')')[0],
	//     valuesSec = valuesSec.split(',');
	// var angleSec = Math.round(Math.asin(valuesSec[1]) * (180/Math.PI));
	// var valuesMin = minutesStr.split('(')[1],
	//     valuesMin = valuesMin.split(')')[0],
	//     valuesMin = valuesMin.split(',');
	// var angleMin = Math.round(Math.asin(valuesMin[1]) * (180/Math.PI));
	var angleMin = 0;
	var angleSec = 0;

	var timer = null;
	var timerStarted = false;

	var start = document.getElementById("start");
	start.onclick = function() {
		if(!timerStarted) {
			timerStarted = true;
			timer = setInterval(function() {
				angleSec += 6;
				seconds.style.transform = "rotate(" + angleSec + "deg)";
				secNum.style.transform = "rotate(" + (-angleSec) + "deg)";
				secNum.innerHTML = angleSec / 6;
				if(angleSec == 360) {
					angleMin += 6;
					minutes.style.transform = "rotate(" + angleMin + "deg)";
					minNum.style.transform = "rotate(" + (-angleMin) + "deg)";
					minNum.innerHTML = angleMin / 6;
					angleSec = 0;
				}
			}, 1000);
		}
	}

	var pause = document.getElementById("pause");
	pause.onclick = function() {
		window.clearInterval(timer);
		timerStarted = false;
		min = angleMin / 6;
		sec = angleSec / 6;
		alert("Прошло " + min + " мин. и " + sec + " cек.");
	}
}
