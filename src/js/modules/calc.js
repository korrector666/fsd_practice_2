function _calc() {
	 // Calc

	 let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0,
		totalX = 1;


	totalValue.innerHTML = 0;

	let totalSumm= function (elem) {
		total = totalX*(daysSum + personsSum)*4000;

		if(elem.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}

	};
	persons.addEventListener('input', function() {
		personsSum = +this.value;
		totalSumm(this);
	});

	restDays.addEventListener('input', function() {
		daysSum = +this.value;
		totalSumm(this);
	});

	place.addEventListener('change', function() {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});


}

module.exports =  _calc;