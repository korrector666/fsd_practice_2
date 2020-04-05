function sendMessage() {
	let message = {
		loading : "идет загрузка ... ",
		success : ' Спасибо за заявку, наш менеджер свяжеться с вами!',
		fail : 'Что-то пошло не так'
	},
	form = document.querySelector('.main-form'),
	inputs = document.querySelectorAll('input'),
	statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

// навешиваем обработчик на форму
	form.addEventListener('submit' , function(e) {
	e.preventDefault();
	form.appendChild(statusMessage);

	// создаем запрос 
	let request = new XMLHttpRequest(),
		formData = new FormData(form),
		tempObj = {};

	// открываем запрос
	request.open('POST', 'server.php');
	// конфигурируем запрос
	request.setRequestHeader('Content-Type',
		 'application/json; charset=utf-8');
	
	// conver FormData to JSON format

	formData.forEach( function(item, key) {
		tempObj[key] = item;
	});

	let json = JSON.stringify(tempObj); 

	//  sent request to server

	request.send(json); 

	//  add lisener for request
	request.addEventListener('readystatechange', () => {
		if (request.readyState < 4) {
			statusMessage.innerHTML = message.loading;

		} else if (request.readyState === 4 && request.status == 200) {
			statusMessage.innerHTML = message.success;

			for (let j = 0; j < inputs.length; j++ ) {
				inputs[j].value = "";
			}
					
		} else {
			statusMessage.innerHTML = message.fail;
		}
	});
});


}

module.exports =  sendMessage; 