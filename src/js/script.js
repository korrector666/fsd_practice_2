window.addEventListener('DOMContentLoaded', function () {
	'use:sctirct'; 
	
	let tabs = require('./modules/tabs'),
		showForm = require('./modules/showForm'),
		sendMessage = require('./modules/sendMessage'),
		_calc = require('./modules/calc'),
		slider = require('./modules/slider');

	tabs();

	showForm();
	sendMessage();
	slider();
	_calc();

	



	// class Options {
	// 	constructor (height, width, bg, fontSize, textAlign) {
	// 		this.height = height;
	// 		this.width = width;
	// 		this.bg = bg;
	// 		this.fontSize = fontSize;
	// 		this.textAlign = textAlign;
	// 	}

	// 	createDIV (text = "") {
	// 		let e = document.createElement('div');
	// 			e.style.cssText = `
	// 			height: ${this.height}px; 
	// 			width: ${this.width}px; 
	// 			background-color: ${this.bg};
	// 			font-size: ${this.fontSize}px;
	// 			text-align: ${this.textAlign};`;
	// 		e.textContent = text;
	// 		document.body.appendChild(e);
	// 	}
	// }	

	// const newItem = new Options(300, 350, "red", 14, "center");
	// newItem.createDIV('НОВЫЙ');



});

// 1) Привести свой проект в соответствие с ES6 (в проекте Yoga, то, 
// что можно преобразовать)
// 2) Используя синтаксис ES6 в отдельном документе:
// - Создать класс options
// - Он должен содержать свойства: height, width, bg, fontSize, textAlign
// - Он должен содержать метод, создающий новый div на странице, записывающий
//  в него любой текст и при помощи cssText изменять свой стиль 
// из переданных параметров
// - Создать новый объект через класс
// - Вызвать его метод и получить элемент на странице
// 3) Проверить, чтобы все работало и не было ошибок в консоли
// 4) Добавить папку с уроком на GitHub