/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _calc() {
  // Calc
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0,
      totalX = 1;
  totalValue.innerHTML = 0;

  var totalSumm = function totalSumm(elem) {
    total = totalX * (daysSum + personsSum) * 4000;

    if (elem.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  };

  persons.addEventListener('input', function () {
    personsSum = +this.value;
    totalSumm(this);
  });
  restDays.addEventListener('input', function () {
    daysSum = +this.value;
    totalSumm(this);
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = _calc;

/***/ }),

/***/ "./src/js/modules/sendMessage.js":
/*!***************************************!*\
  !*** ./src/js/modules/sendMessage.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function sendMessage() {
  var message = {
    loading: "идет загрузка ... ",
    success: ' Спасибо за заявку, наш менеджер свяжеться с вами!',
    fail: 'Что-то пошло не так'
  },
      form = document.querySelector('.main-form'),
      inputs = document.querySelectorAll('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status'); // навешиваем обработчик на форму

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.appendChild(statusMessage); // создаем запрос 

    var request = new XMLHttpRequest(),
        formData = new FormData(form),
        tempObj = {}; // открываем запрос

    request.open('POST', 'server.php'); // конфигурируем запрос

    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // conver FormData to JSON format

    formData.forEach(function (item, key) {
      tempObj[key] = item;
    });
    var json = JSON.stringify(tempObj); //  sent request to server

    request.send(json); //  add lisener for request

    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;

        for (var j = 0; j < inputs.length; j++) {
          inputs[j].value = "";
        }
      } else {
        statusMessage.innerHTML = message.fail;
      }
    });
  });
}

module.exports = sendMessage;

/***/ }),

/***/ "./src/js/modules/showForm.js":
/*!************************************!*\
  !*** ./src/js/modules/showForm.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function showForm() {
  var moreBtn = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      closeBtn = document.querySelector('.popup-close');
  moreBtn.addEventListener('click', function () {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  closeBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });
}

module.exports = showForm;

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function slider() {
  // slider
  var slides = document.querySelectorAll('.slider-item'),
      dots = document.querySelectorAll('.dot'),
      dotsBar = document.querySelector('.slider-dots'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      indexOfSLide = 0;

  function showSlide() {
    if (indexOfSLide > slides.length - 1) {
      indexOfSLide = 0;
    }

    if (indexOfSLide < 0) {
      indexOfSLide = slides.length - 1;
    }

    console.log(indexOfSLide);
    slides.forEach(function (e) {
      return e.style.display = 'none';
    });
    slides[indexOfSLide].style.display = 'block';
    dots.forEach(function (e) {
      return e.classList.remove('dot-active');
    });
    dots[indexOfSLide].classList.add('dot-active');
  }

  showSlide();

  function changeIndex() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    showSlide(indexOfSLide += n);
  }

  next.addEventListener('click', function () {
    return changeIndex();
  });
  prev.addEventListener('click', function () {
    return changeIndex(-1);
  });
  dotsBar.addEventListener('click', function (e) {
    dots.forEach(function (elem, i) {
      if (e.target == elem && e.target.classList.contains('dot')) {
        elem.classList.add('dot-active');
        showSlide(indexOfSLide = i);
      }
    });
  });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function tabs() {
  var info = document.querySelector('.info-header'),
      tabs = document.querySelectorAll('.info-header-tab'),
      tabsContent = document.querySelectorAll('.info-tabcontent');
  tabsContent.forEach(function (e) {
    e.classList.add('hide');
  });

  function show() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent.forEach(function (e) {
      e.classList.remove('show');
    });
    tabsContent[i].classList.add('show');
  }

  show();
  info.addEventListener('click', function (e) {
    var targetE = e.target;

    if (targetE && targetE.classList.contains('info-header-tab')) {
      tabs.forEach(function (_elem, i) {
        if (targetE == tabs[i]) {
          show(i);
        }
      });
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', function () {
  'use:sctirct';

  var tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
      showForm = __webpack_require__(/*! ./modules/showForm */ "./src/js/modules/showForm.js"),
      sendMessage = __webpack_require__(/*! ./modules/sendMessage */ "./src/js/modules/sendMessage.js"),
      _calc = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js"),
      slider = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");

  tabs();
  showForm();
  sendMessage();
  slider();

  _calc(); // class Options {
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

}); // 1) Привести свой проект в соответствие с ES6 (в проекте Yoga, то, 
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map