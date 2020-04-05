function _timer() {

	const deadLine = '2020-04-04';

	function getRemainTime (endTime) {
		let t = Date.parse(endTime) - Date.now(),
			hours = Math.floor( (t/1000/60/60)),
			minutes = Math.floor( (t/1000/60) % 60),
			seconds = Math.floor( (t/1000) % 60);

			if ( t < 0 ){
				hours = minutes = seconds = 0;
			}
		return {
				'time': t, 
				'hours' : hours,
				'minutes' : minutes,
				'seconds' : seconds 
		};
	}

	function setTimer(id, endTime) {
		let timer = document.getElementById(id),
			timeInterval = setInterval(updateTime, 1000);

		function updateTime() {
			let remainTime = getRemainTime(endTime); 

			for (let i of timer.children) {
				if (i.className == '')  {
					i.textContent = remainTime[i.className];
					if( i.textContent.length == 1) {
						i.textContent = '0' + i.textContent;
					}
				}
			}
			
			if(remainTime.time <= 0) {
				clearTimeout(timeInterval);
			}
	
		}
	}

	// setTimer('timer', deadLine);

}

module.exports = _timer;