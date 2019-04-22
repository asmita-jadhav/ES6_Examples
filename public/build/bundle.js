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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ToDo */ \"./src/scripts/ToDo.js\");\n\r\n\r\nlet todo = new _scripts_ToDo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/ToDo.js":
/*!*****************************!*\
  !*** ./src/scripts/ToDo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet mockData = [{\r\n    id: '1',\r\n    title: 'This is title',\r\n    done: false,\r\n    date: new Date()\r\n  }, {\r\n    id: '2',\r\n    title: 'This is second title',\r\n    done: false,\r\n    date: new Date()\r\n  }, {\r\n    id: '3',\r\n    title: 'This is third title',\r\n    done: false,\r\n    date: new Date()\r\n  }, {\r\n    id: '4',\r\n    title: 'This is forth title',\r\n    done: false,\r\n    date: new Date()\r\n  }];\r\n  \r\n  class Todo {\r\n  \r\n    constructor() {\r\n      let self = this;\r\n  \r\n      this.list = document.querySelector('.list-items');\r\n      this.render();\r\n  \r\n      document.querySelector('.btn-add-item').addEventListener('click', this.insertItem.bind(this));\r\n      document.querySelector('.btn-update').addEventListener('click', this.updateItem.bind(this));\r\n  \r\n      document.addEventListener('click', event => {\r\n        if (!event.target) {\r\n          return;\r\n        }\r\n  \r\n        if (event.target.classList.contains('btn-delete')) {\r\n          self.removeItem(event);\r\n        }\r\n  \r\n        if (event.target.classList.contains('btn-edit')) {\r\n          self.renderEditForm(event);\r\n        }\r\n  \r\n        if (event.target.classList.contains('btn-complete')) {\r\n          self.setTaskComplete(event);\r\n        }\r\n      });\r\n    }\r\n  \r\n    render() {\r\n      this.list.innerHTML = '';\r\n  \r\n      mockData.forEach(item => {\r\n        this.createDomElements(item.id);\r\n        this.li.insertAdjacentHTML('afterbegin', item.title);\r\n  \r\n        if (item.done) {\r\n          this.li.classList.add('done');\r\n        }\r\n  \r\n        this.list.appendChild(this.li);\r\n      });\r\n    }\r\n  \r\n    renderEditForm(event) {\r\n      let id = event.target.getAttribute('data-id');\r\n  \r\n      document.querySelector('.edit-popup').classList.remove('hide');\r\n      document.querySelector('.edit-popup').classList.add('show');\r\n      document.querySelector('.btn-update').setAttribute('data-id', id);\r\n  \r\n      mockData.forEach(item => {\r\n        if (item.id === id) {\r\n          document.querySelector('.edit-item').value = item.title;\r\n        }\r\n      });\r\n    }\r\n  \r\n    createDomElements(id) {\r\n      this.li = document.createElement('li');\r\n      this.edit = document.createElement('button');\r\n      this.delete = document.createElement('button');\r\n      this.complete = document.createElement('button');\r\n  \r\n      this.edit.classList.add('btn-edit');\r\n      this.delete.classList.add('btn-delete');\r\n      this.complete.classList.add('btn-complete');\r\n  \r\n      this.delete.setAttribute('data-id', id);\r\n      this.edit.setAttribute('data-id', id);\r\n      this.complete.setAttribute('data-id', id);\r\n  \r\n      this.edit.innerHTML = 'Edit';\r\n      this.delete.innerHTML = 'Delete';\r\n      this.complete.innerHTML = 'Complete';\r\n  \r\n      this.li.appendChild(this.delete);\r\n      this.li.appendChild(this.edit);\r\n      this.li.appendChild(this.complete);\r\n    }\r\n  \r\n    insertItem() {\r\n      let todoItem = document.querySelector('.item').value;\r\n  \r\n      let newItem = {\r\n        id: Date.now().toString(),\r\n        title: todoItem,\r\n        done: false,\r\n        date: new Date()\r\n      };\r\n  \r\n      mockData.push(newItem);\r\n  \r\n      document.querySelector('.item').value = '';\r\n      this.render();\r\n    }\r\n  \r\n    removeItem(event) {\r\n      let id = event.target.getAttribute('data-id');\r\n  \r\n      mockData = mockData.filter(item => {\r\n        if (item.id !== id) {\r\n          return item;\r\n        }\r\n      });\r\n  \r\n      this.render();\r\n    }\r\n  \r\n    updateItem(event) {\r\n      let id = event.target.getAttribute('data-id');\r\n      let itemTobeUpdated = document.querySelector('.edit-item').value;\r\n  \r\n      mockData = mockData.map(item => {\r\n        if (item.id === id) {\r\n          item['title'] = itemTobeUpdated;\r\n        }\r\n  \r\n        return item;\r\n      });\r\n  \r\n      document.querySelector('.edit-popup').classList.remove('show');\r\n      document.querySelector('.edit-popup').classList.add('hide');\r\n  \r\n      this.render();\r\n    }\r\n  \r\n    setTaskComplete(event) {\r\n      let id = event.target.getAttribute('data-id');\r\n  \r\n      mockData = mockData.map(item => {\r\n        if (item.id === id) {\r\n          item['done'] = true;\r\n        }\r\n  \r\n        return item;\r\n      });\r\n  \r\n      this.render();\r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\r\n  \n\n//# sourceURL=webpack:///./src/scripts/ToDo.js?");

/***/ })

/******/ });