(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../app/frontend/designer/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../app/frontend/designer/images/cursors/cursor_circle.png":
/*!**********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/images/cursors/cursor_circle.png ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/492f40d01cb4aa7e66fbae9f01abda49.png";

/***/ }),

/***/ "../../app/frontend/designer/images/cursors/cursor_line.png":
/*!********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/images/cursors/cursor_line.png ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/2545e9daa1296aeaf03c8ea0aaab4afe.png";

/***/ }),

/***/ "../../app/frontend/designer/images/cursors/cursor_port.png":
/*!********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/images/cursors/cursor_port.png ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/657c4c890bc69affe796a29f4d9d0dcf.png";

/***/ }),

/***/ "../../app/frontend/designer/images/cursors/cursor_rectangle.png":
/*!*************************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/images/cursors/cursor_rectangle.png ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/485860c000764fd82149fc94aa6673cd.png";

/***/ }),

/***/ "../../app/frontend/designer/images/cursors/cursor_text.png":
/*!********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/images/cursors/cursor_text.png ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/2e59ba615169ea5c7506a8094f9e1301.png";

/***/ }),

/***/ "../../app/frontend/designer/images/layer_circle.svg":
/*!*************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/images/layer_circle.svg ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/99fd154564faa73e994b9fe684497597.svg";

/***/ }),

/***/ "../../app/frontend/designer/images/layer_line.svg":
/*!***********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/images/layer_line.svg ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/1c021e8bb20ac2f29e3da9ff5815550c.svg";

/***/ }),

/***/ "../../app/frontend/designer/images/layer_port.svg":
/*!***********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/images/layer_port.svg ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/b18448d804a3c629d1b8b9f03d894e04.svg";

/***/ }),

/***/ "../../app/frontend/designer/images/layer_rect.svg":
/*!***********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/images/layer_rect.svg ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/7f7ebe1e9d6b4b01543498d12568eb3b.svg";

/***/ }),

/***/ "../../app/frontend/designer/images/layer_text.svg":
/*!***********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/images/layer_text.svg ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/cbca3e305b7b982c0745344c6951285c.svg";

/***/ }),

/***/ "../../app/frontend/designer/js/Application.js":
/*!*******************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/Application.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _View = __webpack_require__(/*! ./View */ "../../app/frontend/designer/js/View.js");

var _View2 = _interopRequireDefault(_View);

var _Toolbar = __webpack_require__(/*! ./Toolbar */ "../../app/frontend/designer/js/Toolbar.js");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Layer = __webpack_require__(/*! ./Layer */ "../../app/frontend/designer/js/Layer.js");

var _Layer2 = _interopRequireDefault(_Layer);

var _FilterPane = __webpack_require__(/*! ./FilterPane */ "../../app/frontend/designer/js/FilterPane.js");

var _FilterPane2 = _interopRequireDefault(_FilterPane);

var _BackendStorage = __webpack_require__(/*! ./io/BackendStorage */ "../../app/frontend/designer/js/io/BackendStorage.js");

var _BackendStorage2 = _interopRequireDefault(_BackendStorage);

var _SelectionToolPolicy = __webpack_require__(/*! ./policy/SelectionToolPolicy */ "../../app/frontend/designer/js/policy/SelectionToolPolicy.js");

var _SelectionToolPolicy2 = _interopRequireDefault(_SelectionToolPolicy);

var _FileOpen = __webpack_require__(/*! ./dialog/FileOpen */ "../../app/frontend/designer/js/dialog/FileOpen.js");

var _FileOpen2 = _interopRequireDefault(_FileOpen);

var _FileSave = __webpack_require__(/*! ./dialog/FileSave */ "../../app/frontend/designer/js/dialog/FileSave.js");

var _FileSave2 = _interopRequireDefault(_FileSave);

var _FileSaveAs = __webpack_require__(/*! ./dialog/FileSaveAs */ "../../app/frontend/designer/js/dialog/FileSaveAs.js");

var _FileSaveAs2 = _interopRequireDefault(_FileSaveAs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Andreas Herz
 */

var Application = function () {
  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  function Application() {
    var _this = this;

    _classCallCheck(this, Application);

    this.documentConfigurationTempl = {
      baseClass: "draw2d.SetFigure",
      code: $("#shape-edit-template").text().trim()
    };

    this.localStorage = [];
    try {
      if ('localStorage' in window && window.localStorage !== null) {
        this.localStorage = localStorage;
      }
    } catch (e) {}

    $("body").delegate(".mousetrap-pause", "focus", function () {
      Mousetrap.pause();
    }).delegate(".mousetrap-pause", "blur", function () {
      Mousetrap.unpause();
    });

    // automatic add the configuration to the very first shape
    // in the document as userData
    //
    this.documentConfiguration = $.extend({}, this.documentConfigurationTempl);

    this.storage = new _BackendStorage2.default();
    this.view = new _View2.default(this, "canvas");
    this.toolbar = new _Toolbar2.default(this, ".toolbar", this.view);
    this.layer = new _Layer2.default(this, "layer_elements", this.view);
    this.filter = new _FilterPane2.default(this, "#filter .filter_actions", this.view);

    this.view.installEditPolicy(new _SelectionToolPolicy2.default());

    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    var file = this.getParam("file");
    if (file) {
      this._load(file);
    } else {
      this.fileNew();
    }

    // listen on the history object to load files
    //
    window.addEventListener('popstate', function (event) {
      if (event.state && event.state.id === 'editor') {
        // Render new content for the hompage
        _this._load(event.state.file);
      }
    });
  }

  _createClass(Application, [{
    key: "_load",
    value: function _load(file) {
      var _this2 = this;

      this.storage.loadFile(file).then(function (content) {
        _this2.view.clear();
        _this2.view.centerDocument();
        var reader = new draw2d.io.json.Reader();
        reader.unmarshal(_this2.view, content);
        _this2.getConfiguration();
        _this2.storage.fileName = file;
        _this2.view.getCommandStack().markSaveLocation();
        _this2.view.centerDocument();
        return content;
      });
    }
  }, {
    key: "getParam",
    value: function getParam(name) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regexS = "[\\?&]" + name + "=([^&#]*)";
      var regex = new RegExp(regexS);
      var results = regex.exec(window.location.href);
      // the param isn't part of the normal URL pattern...
      //
      if (results === null) {
        // maybe it is part in the hash.
        //
        regexS = "[\\#]" + name + "=([^&#]*)";
        regex = new RegExp(regexS);
        results = regex.exec(window.location.hash);
        if (results === null) {
          return null;
        }
      }
      return results[1];
    }
  }, {
    key: "fileNew",
    value: function fileNew(shapeTemplate) {
      console.log(this);
      console.log(this.view);
      console.log(this.storage);
      this.view.clear();
      this.storage.currentFile = null;
      this.documentConfiguration = $.extend({}, this.documentConfigurationTempl);

      if (shapeTemplate) {
        new draw2d.io.json.Reader().unmarshal(this.view, shapeTemplate);
        this.view.getCommandStack().markSaveLocation();
        this.view.centerDocument();
      }
    }
  }, {
    key: "fileOpen",
    value: function fileOpen() {
      new _FileOpen2.default().show(this.storage, this.view);
    }
  }, {
    key: "fileSave",
    value: function fileSave() {
      this.setConfiguration();
      if (this.storage.currentFile === null) {
        new _FileSaveAs2.default().show(this.storage, this.view);
      } else {
        new _FileSave2.default().show(this.storage, this.view);
      }
    }
  }, {
    key: "getConfiguration",
    value: function getConfiguration(key) {
      var figures = this.view.getExtFigures();
      if (figures.getSize() > 0) {
        this.documentConfiguration = $.extend({}, this.documentConfiguration, figures.first().getUserData());
      }

      if (key) {
        return this.documentConfiguration[key];
      }
      return this.documentConfiguration;
    }
  }, {
    key: "setConfiguration",
    value: function setConfiguration(conf) {
      this.documentConfiguration = $.extend({}, this.documentConfiguration, conf);
      var figures = this.view.getExtFigures();
      if (figures.getSize() > 0) {
        figures.first().setUserData(this.documentConfiguration);
      }
    }
  }]);

  return Application;
}();

exports.default = Application;
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/Configuration.js":
/*!*********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/Configuration.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  fileSuffix: ".shape",
  serverless: false,
  backend: {
    file: {
      list: "/backend/shape/list",
      get: function get(file) {
        return "../backend/shape/get?filePath=" + file;
      },
      save: "/backend/shape/save"
    }
  }
};
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/FilterPane.js":
/*!******************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/FilterPane.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterPane = function () {
  function FilterPane(app, elementId, view) {
    _classCallCheck(this, FilterPane);

    this.DEFAULT_LABEL = "Properties";
    this.html = $(elementId);
    this.view = view;
    this.currentFigure = null;

    // Register a Selection listener for the state handling
    // of the Delete Button
    //
    view.on("select", this.onSelectionChanged.bind(this));
  }

  /**
   * @method
   * Called if the selection in the canvas has been changed. You must register this
   * class on the canvas to receive this event.
   *
   * @param {draw2d.Canvas} canvas the emitter of the event. In this case it is the canvas.
   * @param {draw2d.Figure} figure
   */


  _createClass(FilterPane, [{
    key: "onSelectionChanged",
    value: function onSelectionChanged(canvas) {
      var _this2 = this;

      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { figure: null };

      var figure = event.figure;

      this.html.html('');
      $('#add_filter_button').addClass('disabled');

      if (this.currentFigure !== null && typeof this.currentFigure.isExtFigure !== "undefined") {
        this.currentFigure.filters.each(function (i, filter) {
          filter.removePane();
        });
      }
      $("#add_filter_action_menu").html("");

      if (figure !== null && typeof figure.isExtFigure !== "undefined") {
        figure.filters.each(function (i, filter) {
          filter.insertPane(figure, _this2.html);
        });
        $('#add_filter_button').removeClass('disabled');

        $.each(figure.getPotentialFilters(), function (i, e) {
          $("#add_filter_action_menu").append("<li><a href='#' data-filter='" + e.impl + "' >" + e.label + "</a></li>");
        });

        var _this = this;
        $("#add_filter_action_menu a").on("click", function () {
          var $this = $(this);
          var filterName = $this.data("filter");
          var filter = eval("new " + filterName + "()");
          _this.currentFigure.addFilter(filter);
          _this.onSelectionChanged(_this.view, { figure: _this.currentFigure });
        });
      }

      this.currentFigure = figure;
    }
  }]);

  return FilterPane;
}();

exports.default = FilterPane;
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/Hardware.js":
/*!****************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/Hardware.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// just a simple mock object for the brainbox
// Hardware binding
//
exports.default = {

  raspi: {
    set: function set(pin, value) {},
    get: function get(pin) {
      return false;
    },
    on: function on(event, callback) {},
    connected: false
  },

  arduino: {
    set: function set(pin, value) {},
    get: function get(pin) {
      return false;
    },
    on: function on(event, callback) {},
    connected: false
  }
};
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/LabelInplaceEditor.js":
/*!**************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/LabelInplaceEditor.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = draw2d.ui.LabelInplaceEditor.extend({

  NAME: "LabelInplaceEditor",

  /**
   * @constructor
   *
   */
  init: function init(attr, setter, getter) {
    this._super({
      onStart: function onStart() {
        Mousetrap.pause();
      },
      onCancel: function onCancel() {
        Mousetrap.unpause();
      },
      onCommit: function onCommit() {
        Mousetrap.unpause();
      }
    }, setter, getter);
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/Layer.js":
/*!*************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/Layer.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layer = function () {
  function Layer(app, elementId, view) {
    _classCallCheck(this, Layer);

    this.html = $("#" + elementId);
    this.view = view;

    // register this class as event listener for the canvas
    // CommandStack. This is required to update the state of
    // the Undo/Redo Buttons.
    //
    view.getCommandStack().addEventListener(this);

    // Register a Selection listener for the state hnadling
    // of the Delete Button
    //
    view.on("select", this.onSelectionChanged.bind(this));
  }

  /**
   * @method
   * Called if the selection in the cnavas has been changed. You must register this
   * class on the canvas to receive this event.
   *
   * @param {draw2d.Figure} emitter
   */


  _createClass(Layer, [{
    key: "onSelectionChanged",
    value: function onSelectionChanged(emitter, event) {
      this._updateSelection();
    }

    /**
     * @method
     * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
     * can be used to identify the type of event which has occurred.
     *
     * @template
     *
     * @param {draw2d.command.CommandStackEvent} event
     **/

  }, {
    key: "stackChanged",
    value: function stackChanged(event) {
      var _this = this;

      this.html.html('');
      var figures = this.view.getExtFigures();
      figures.each(function (i, figure) {
        _this.html.append('<div class="layerElement ' + _this.figureToCSS(figure) + '" data-figure="' + figure.id + '"  data-visibility="' + figure.isVisible() + '" id="layerElement_' + figure.id + '" >' + figure.getUserData().name + '<span data-figure="' + figure.id + '"  data-toggle="tooltip" title="Toggle Visibility of the Layer"  class="layer_visibility pull-right"><img class="icon svg" src="' + (figure.isVisible() ? './images/layer_visible.svg' : './images/layer_hidden.svg') + '"/></span>' + '<span data-figure="' + figure.id + '"  data-toggle="tooltip" title="Edit Name of Layer" class="layer_edit pull-right" ><img class="icon svg" src="./images/layer_edit.svg"/></span>' + '</div>');
      }, true);

      inlineSVG.init();

      $('*[data-toggle="tooltip"]').tooltip({
        placement: "bottom",
        container: "body",
        delay: { show: 1000, hide: 100 },
        html: true
      });

      this.html.sortable({
        axis: "y",
        update: function update() {
          $(".layerElement").toArray().reverse().forEach(function (e) {
            _this.view.getExtFigure($(e).data("figure")).toFront();
          });
        }
      });

      $(".layerElement .layer_edit").on("click", $.proxy(function (event) {
        var figure = this.view.getExtFigure($(event.currentTarget).data("figure"));
        Mousetrap.pause();
        bootbox.prompt({
          title: "Layer Name",
          className: "layer-name-prompt",
          value: figure.getUserData().name,
          callback: $.proxy(function (result) {
            Mousetrap.unpause();
            if (result !== null) {
              figure.getUserData().name = result;
              this.stackChanged(null);
            }
          }, this)
        });

        // autoselect text for fast edit
        setTimeout(function () {
          $(".bootbox-input").focus().select();
        }, 200);
      }, this));

      $(".layerElement .layer_visibility").on("click", $.proxy(function (event) {
        var figure = this.view.getExtFigure($(event.currentTarget).data("figure"));
        figure.setVisible(!figure.isVisible());
        this.view.setCurrentSelection(null);
        $(event.currentTarget).html('<img class="icon svg" src="' + (figure.isVisible() ? './images/layer_visible.svg' : './images/layer_hidden.svg') + '"/>');
        inlineSVG.init();

        // set the "data" with attr and not with "data()". Otherwise the css selector won't work
        //
        $(event.currentTarget).parent().attr({ "data-visibility": figure.isVisible() });

        this.ripple(figure);
        return false;
      }, this));

      $(".layerElement").on("click", $.proxy(function (event) {
        var figure = this.view.getExtFigure($(event.currentTarget).data("figure"));
        if (figure.isVisible()) {
          this.view.setCurrentSelection(figure);
          this.ripple(figure);
        }
      }, this));

      this._updateSelection();
    }
  }, {
    key: "_updateSelection",
    value: function _updateSelection() {
      $(".layerElement").removeClass("layerSelectedElement");
      var selection = this.view.getSelection();
      selection.each(function (i, e) {
        $("#layerElement_" + e.id).addClass("layerSelectedElement");
      });
    }
  }, {
    key: "ripple",
    value: function ripple(figure) {
      var rect = figure.getBoundingBox();
      var p = rect.getCenter();
      var circle = this.view.paper.circle(p.x, p.y, Math.max(3, rect.w / 4), Math.max(3, rect.h / 4)).attr({
        fill: null,
        stroke: "#d0d0ff"
      });
      var anim = Raphael.animation({
        transform: "s6",
        opacity: 0.0,
        "stroke-width": 5
      }, 500, "linear", function () {
        circle.remove();
      });
      circle.animate(anim);
    }
  }, {
    key: "figureToCSS",
    value: function figureToCSS(figure) {
      return figure.NAME.split(".").slice(-1)[0];
    }
  }]);

  return Layer;
}();

exports.default = Layer;
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/Toolbar.js":
/*!***************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/Toolbar.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RectangleToolPolicy = __webpack_require__(/*! ./policy/RectangleToolPolicy */ "../../app/frontend/designer/js/policy/RectangleToolPolicy.js");

var _RectangleToolPolicy2 = _interopRequireDefault(_RectangleToolPolicy);

var _CircleToolPolicy = __webpack_require__(/*! ./policy/CircleToolPolicy */ "../../app/frontend/designer/js/policy/CircleToolPolicy.js");

var _CircleToolPolicy2 = _interopRequireDefault(_CircleToolPolicy);

var _LineToolPolicy = __webpack_require__(/*! ./policy/LineToolPolicy */ "../../app/frontend/designer/js/policy/LineToolPolicy.js");

var _LineToolPolicy2 = _interopRequireDefault(_LineToolPolicy);

var _TextToolPolicy = __webpack_require__(/*! ./policy/TextToolPolicy */ "../../app/frontend/designer/js/policy/TextToolPolicy.js");

var _TextToolPolicy2 = _interopRequireDefault(_TextToolPolicy);

var _PortToolPolicy = __webpack_require__(/*! ./policy/PortToolPolicy */ "../../app/frontend/designer/js/policy/PortToolPolicy.js");

var _PortToolPolicy2 = _interopRequireDefault(_PortToolPolicy);

var _SelectionToolPolicy = __webpack_require__(/*! ./policy/SelectionToolPolicy */ "../../app/frontend/designer/js/policy/SelectionToolPolicy.js");

var _SelectionToolPolicy2 = _interopRequireDefault(_SelectionToolPolicy);

var _GeoUnionToolPolicy = __webpack_require__(/*! ./policy/GeoUnionToolPolicy */ "../../app/frontend/designer/js/policy/GeoUnionToolPolicy.js");

var _GeoUnionToolPolicy2 = _interopRequireDefault(_GeoUnionToolPolicy);

var _GeoIntersectionToolPolicy = __webpack_require__(/*! ./policy/GeoIntersectionToolPolicy */ "../../app/frontend/designer/js/policy/GeoIntersectionToolPolicy.js");

var _GeoIntersectionToolPolicy2 = _interopRequireDefault(_GeoIntersectionToolPolicy);

var _GeoDifferenceToolPolicy = __webpack_require__(/*! ./policy/GeoDifferenceToolPolicy */ "../../app/frontend/designer/js/policy/GeoDifferenceToolPolicy.js");

var _GeoDifferenceToolPolicy2 = _interopRequireDefault(_GeoDifferenceToolPolicy);

var _FigureCodeEdit = __webpack_require__(/*! ./dialog/FigureCodeEdit */ "../../app/frontend/designer/js/dialog/FigureCodeEdit.js");

var _FigureCodeEdit2 = _interopRequireDefault(_FigureCodeEdit);

var _FigureMarkdownEdit = __webpack_require__(/*! ./dialog/FigureMarkdownEdit */ "../../app/frontend/designer/js/dialog/FigureMarkdownEdit.js");

var _FigureMarkdownEdit2 = _interopRequireDefault(_FigureMarkdownEdit);

var _FigureTest = __webpack_require__(/*! ./dialog/FigureTest */ "../../app/frontend/designer/js/dialog/FigureTest.js");

var _FigureTest2 = _interopRequireDefault(_FigureTest);

var _Configuration = __webpack_require__(/*! ./Configuration */ "../../app/frontend/designer/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Toolbar = function () {
  function Toolbar(app, elementId, view) {
    var _this = this;

    _classCallCheck(this, Toolbar);

    this.html = $(elementId);
    this.view = view;
    this.app = app;

    // register this class as event listener for the canvas
    // CommandStack. This is required to update the state of
    // the Undo/Redo Buttons.
    //
    view.getCommandStack().addEventListener(this);

    // Register a Selection listener for the state handling
    // of the Delete Button
    //
    view.on("select", this.onSelectionChanged.bind(this));
    view.on("unselect", this.onSelectionChanged.bind(this));

    this.fileName = null;
    var buttonGroup = null;

    if (_Configuration2.default.serverless === false) {
      buttonGroup = $("<div id='fileOperationGroup' class='group'></div>");
      this.html.append(buttonGroup);

      this.openButton = $('<div class="image-button" id="fileOpen" data-toggle="tooltip" title="Load File <span class=\'highlight\'> [ Ctrl+O ]</span>" ><img src="./images/toolbar_download.svg"/><div>Open</div></div>');
      buttonGroup.append(this.openButton);
      this.openButton.on("click", function () {
        _this.openButton.tooltip("hide");
        app.fileOpen();
      });
      Mousetrap.bindGlobal("ctrl+o", function () {
        _this.openButton.click();
        return false;
      });

      this.saveButton = $('<div class="image-button"  id="fileSave" data-toggle="tooltip" title="Save File <span class=\'highlight\'> [ Ctrl+S ]</span>"  ><img src="./images/toolbar_upload.svg"/><div>Save</div></div>');
      buttonGroup.append(this.saveButton);
      this.saveButton.on("click", function () {
        _this.saveButton.tooltip("hide");
        app.fileSave();
      });
      Mousetrap.bindGlobal("ctrl+s", function (event) {
        _this.saveButton.click();
        return false;
      });
    }

    // Inject the UNDO Button and the callbacks
    //
    buttonGroup = $('<div class="group"></div>');
    this.html.append(buttonGroup);
    this.undoButton = $('<div class="image-button" id="editUndo" data-toggle="tooltip" title="Undo <span class=\'highlight\'> [ Ctrl+Z ]</span>"  ><img class="icon disabled"  src="./images/toolbar_undo.svg"/><div>Undo</div></div>');
    buttonGroup.append(this.undoButton);
    this.html.delegate("#editUndo:not(.disabled)", "click", function () {
      _this.view.getCommandStack().undo();
    });
    Mousetrap.bindGlobal("ctrl+z", function () {
      _this.undoButton.click();
      return false;
    });

    // Inject the REDO Button and the callback
    //
    this.redoButton = $('<div class="image-button" id="editRedo" data-toggle="tooltip" title="Redo <span class=\'highlight\'> [ Ctrl+Y ]</span>"  ><img  class="icon disabled" src="./images/toolbar_redo.svg"/><div>Redo</div></div>');
    buttonGroup.append(this.redoButton);
    this.html.delegate("#editRedo:not(.disabled)", "click", function () {
      _this.view.getCommandStack().redo();
    });
    Mousetrap.bindGlobal("ctrl+y", function () {
      _this.redoButton.click();
      return false;
    });

    // Inject the DELETE Button
    //
    this.deleteButton = $('<div class="image-button" id="editDelete" data-toggle="tooltip" title="Delete <span class=\'highlight\'> [ Del ]</span>"  ><img class="icon disabled" src="./images/toolbar_delete.svg"/><div>Delete</div></div>');
    buttonGroup.append(this.deleteButton);
    this.html.delegate("#editDelete:not(.disabled)", "click", function () {
      view.getCommandStack().startTransaction(draw2d.Configuration.i18n.command.deleteShape);
      view.getSelection().each(function (index, figure) {
        var cmd = figure.createCommand(new draw2d.command.CommandType(draw2d.command.CommandType.DELETE));
        if (cmd !== null) {
          view.getCommandStack().execute(cmd);
        }
      });
      // execute all single commands at once.
      view.getCommandStack().commitTransaction();
    });
    Mousetrap.bindGlobal(["del", "backspace"], function () {
      _this.deleteButton.click();
      return false;
    });

    buttonGroup = $('<div class="group"></div>');
    this.html.append(buttonGroup);

    this.selectButton = $('<div class="image-button" id="editSelect" data-toggle="tooltip" title="Select mode <span class=\'highlight\'> [ spacebar ]</span>" ><img src="./images/toolbar_select.svg"/><div>Select</div></div>');
    buttonGroup.append(this.selectButton);
    this.selectButton.on("click", function () {
      _this.view.installEditPolicy(new _SelectionToolPolicy2.default());
    });
    Mousetrap.bindGlobal("space", function () {
      _this.selectButton.click();
      return false;
    });

    this.shapeButton = $('<label id="tool_shape" class="dropdown" >' + '    <div class="image-button" data-toggle="dropdown"  id="tool_shape_image" ><img  src="./images/toolbar_insert.svg"><div>Add</div></div>' + '    <ul class="dropdown-menu" role="menu" >' + '       <li class="tool_shape_entry policyRectangleToolPolicy" ><a href="#"><img  src="./images/toolbar_rectangle.svg"><span class="tool_label">Rectangle</span><span class="tool_shortcut">R</span></a></li>' + '       <li class="tool_shape_entry policyCircleToolPolicy"    ><a href="#"><img  src="./images/toolbar_circle.svg"><span class="tool_label">Circle</span><span class="tool_shortcut">C</span></a></li>' + '       <li class="tool_shape_entry policyLineToolPolicy"      ><a href="#"><img  src="./images/toolbar_line.svg"><span class="tool_label">Line</span><span class="tool_shortcut">L</span></a></li>' + '       <li class="tool_shape_entry policyTextToolPolicy"      ><a href="#"><img  src="./images/toolbar_text.svg"><span class="tool_label">Text</span><span class="tool_shortcut">T</span></a></li>' + '       <li class="tool_shape_entry policyPortToolPolicy"      ><a href="#"><img  src="./images/toolbar_rectangle.svg"><span class="tool_label">Port</span><span class="tool_shortcut">P</span></a></li>' + '    </ul>' + '</label>');
    buttonGroup.append(this.shapeButton);

    $(".policyRectangleToolPolicy").on("click", function () {
      var p = new _RectangleToolPolicy2.default();
      p.executed = function () {
        _this.selectButton.click();
      };
      _this.view.installEditPolicy(p);
    });
    $(".policyCircleToolPolicy").on("click", function () {
      var p = new _CircleToolPolicy2.default();
      p.executed = function () {
        _this.selectButton.click();
      };
      _this.view.installEditPolicy(p);
    });
    $(".policyLineToolPolicy").on("click", function () {
      var p = new _LineToolPolicy2.default();
      p.executed = function () {
        _this.selectButton.click();
      };
      _this.view.installEditPolicy(p);
    });
    $(".policyTextToolPolicy").on("click", function () {
      var p = new _TextToolPolicy2.default();
      p.executed = function () {
        _this.selectButton.click();
      };
      _this.view.installEditPolicy(p);
    });
    $(".policyPortToolPolicy").on("click", function () {
      var p = new _PortToolPolicy2.default();
      p.executed = function () {
        _this.selectButton.click();
      };
      _this.view.installEditPolicy(p);
    });

    Mousetrap.bindGlobal(["R", "r"], function () {
      $('.policyRectangleToolPolicy').click();
      return false;
    });
    Mousetrap.bindGlobal(["C", "c"], function () {
      $('.policyCircleToolPolicy').click();
      return false;
    });
    Mousetrap.bindGlobal(["T", "t"], function () {
      $('.policyTextToolPolicy').click();
      return false;
    });
    Mousetrap.bindGlobal(["P", "p"], function () {
      $('.policyPortToolPolicy').click();
      return false;
    });
    Mousetrap.bindGlobal(["L", "l"], function () {
      $('.policyLineToolPolicy').click();
      return false;
    });

    this.unionButton = $('<div class="image-button disabled" id="toolUnion" data-toggle="tooltip" title="Polygon Union <span class=\'highlight\'> [ U ]</span>" ><img src="./images/toolbar_geo_union.svg"/><div>Union</div></div>');
    buttonGroup.append(this.unionButton);
    this.html.delegate("#toolUnion:not(.disabled)", "click", function () {
      var selection = _this.view.getSelection().getAll();
      var p = new _GeoUnionToolPolicy2.default();
      p.executed = function () {
        _this.selectButton.click();
      };
      _this.view.installEditPolicy(p);
      p.execute(_this.view, selection);
    });
    Mousetrap.bindGlobal(["U", "u"], function () {
      _this.unionButton.click();
      return false;
    });

    this.differenceButton = $('<div class="image-button disabled" id="toolDifference" data-toggle="tooltip"  title="Polygon Difference <span class=\'highlight\'> [ D ]</span>" ><img src="./images/toolbar_geo_subtract.svg"/><div>Subtract</div></div>');
    buttonGroup.append(this.differenceButton);
    this.html.delegate("#toolDifference:not(.disabled)", "click", function () {
      _this.view.installEditPolicy(new _GeoDifferenceToolPolicy2.default());
    });
    Mousetrap.bindGlobal(["D", "d"], function () {
      _this.differenceButton.click();
      return false;
    });

    this.intersectionButton = $('<div class="image-button disabled" id="toolIntersection" data-toggle="tooltip" title="Polygon Intersection <span class=\'highlight\'> [ I ]</span>" ><img src="./images/toolbar_geo_intersect.svg"/><div>Intersect</div></div>');
    buttonGroup.append(this.intersectionButton);
    this.html.delegate("#toolIntersection:not(.disabled)", "click", function () {
      _this.view.installEditPolicy(new _GeoIntersectionToolPolicy2.default());
    });
    Mousetrap.bindGlobal(["I", "i"], function () {
      _this.intersectionButton.click();
      return false;
    });

    buttonGroup = $('<div class="group" style="float:right"></div>');
    this.html.append(buttonGroup);
    this.testButton = $('<div class="image-button" data-toggle="tooltip" title="Test your shape"><img src="./images/toolbar_element_test.svg"/><div>Test</div></div>');
    buttonGroup.append(this.testButton);
    this.testButton.on("click", function () {
      // if any error happens during the shape code create/execute -> goto the the JS editor
      try {
        new _FigureTest2.default().show();
      } catch (exc) {
        console.log(exc);
        new _FigureCodeEdit2.default().show();
      }
    });

    this.codeButton = $('<div class="image-button" data-toggle="tooltip" title="Edit JavaScript code</span>"><img src="./images/toolbar_element_js.svg"/><div>Code</div></div>');
    buttonGroup.append(this.codeButton);
    this.codeButton.on("click", function () {
      new _FigureCodeEdit2.default().show();
    });

    this.markdownButton = $('<div class="image-button" data-toggle="tooltip" title="Write documentation for your shape</span>"><img src="./images/toolbar_element_doc.svg"/><div>Doku</div></div>');
    buttonGroup.append(this.markdownButton);
    this.markdownButton.on("click", function () {
      new _FigureMarkdownEdit2.default().show();
    });

    // enable the tooltip for all buttons
    //
    $('*[data-toggle="tooltip"]').tooltip({
      placement: "bottom",
      container: "body",
      delay: { show: 1000, hide: 10 },
      html: true
    });
  }

  /**
   * @method
   * Called if the selection in the cnavas has been changed. You must register this
   * class on the canvas to receive this event.
   *
   * @param {draw2d.Figure} figure
   */


  _createClass(Toolbar, [{
    key: "onSelectionChanged",
    value: function onSelectionChanged(emitter, event) {
      if (event.figure === null) {
        $("#editDelete").addClass("disabled");
      } else {
        $("#editDelete").removeClass("disabled");
      }

      // available in BoundBox selection event
      if (event.selection) {
        if (event.selection.getSize() >= 2) {
          $("#toolUnion").removeClass("disabled");
          $("#toolDifference").removeClass("disabled");
          $("#toolIntersection").removeClass("disabled");
        } else {
          $("#toolUnion").addClass("disabled");
          $("#toolDifference").addClass("disabled");
          $("#toolIntersection").addClass("disabled");
        }
      }
    }

    /**
     * @method
     * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
     * can be used to identify the type of event which has occurred.
     *
     * @template
     *
     * @param {draw2d.command.CommandStackEvent} event
     **/

  }, {
    key: "stackChanged",
    value: function stackChanged(event) {
      $("#editUndo").addClass("disabled");
      $("#editRedo").addClass("disabled");

      if (event.getStack().canUndo()) {
        $("#editUndo").removeClass("disabled");
      }

      if (event.getStack().canRedo()) {
        $("#editRedo").removeClass("disabled");
      }
    }
  }]);

  return Toolbar;
}();

exports.default = Toolbar;
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/View.js":
/*!************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/View.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = draw2d.Canvas.extend({

  init: function init(app, id) {
    var _this = this;

    this._super(id, 16000, 16000);
    this.clippboardFigure = null;
    this.app = app;
    this.grid = new draw2d.policy.canvas.ShowGridEditPolicy(20);

    this.setScrollArea("#draw2dCanvasWrapper");

    this.installEditPolicy(this.grid);
    this.installEditPolicy(new draw2d.policy.canvas.FadeoutDecorationPolicy());
    this.installEditPolicy(new draw2d.policy.canvas.SnapToGeometryEditPolicy());
    this.installEditPolicy(new draw2d.policy.canvas.SnapToCenterEditPolicy());
    this.installEditPolicy(new draw2d.policy.canvas.SnapToInBetweenEditPolicy());

    Mousetrap.bindGlobal(['left'], function () {
      var diff = _this.getZoom() < 0.5 ? 0.5 : 1;
      _this.getSelection().each(function (i, f) {
        f.translate(-diff, 0);
      });
      return false;
    });
    Mousetrap.bindGlobal(['up'], function () {
      var diff = _this.getZoom() < 0.5 ? 0.5 : 1;
      _this.getSelection().each(function (i, f) {
        f.translate(0, -diff);
      });
      return false;
    });
    Mousetrap.bindGlobal(['right'], function () {
      var diff = _this.getZoom() < 0.5 ? 0.5 : 1;
      _this.getSelection().each(function (i, f) {
        f.translate(diff, 0);
      });
      return false;
    });
    Mousetrap.bindGlobal(['down'], function () {
      var diff = _this.getZoom() < 0.5 ? 0.5 : 1;
      _this.getSelection().each(function (i, f) {
        f.translate(0, diff);
      });
      return false;
    });

    Mousetrap.bindGlobal(['ctrl+c', 'command+c'], function () {
      var primarySelection = _this.getSelection().getPrimary();
      if (primarySelection !== null) {
        _this.clippboardFigure = primarySelection.clone();
        _this.clippboardFigure.translate(5, 5);
      }
      return false;
    });

    Mousetrap.bindGlobal(['ctrl+v', 'command+v'], function () {
      if (_this.clippboardFigure !== null) {
        var cloneToAdd = _this.clippboardFigure.clone();
        var command = new draw2d.command.CommandAdd(_this, cloneToAdd, cloneToAdd.getPosition());
        _this.getCommandStack().execute(command);
        _this.setCurrentSelection(cloneToAdd);
      }
      return false;
    });

    // this.installEditPolicy(new draw2d.policy.canvas.WheelZoomPolicy())

    var setZoom = function setZoom(newZoom) {
      console.log("zooom...");
      var bb = _this.getBoundingBox().getCenter();
      var c = $("#draw2dCanvasWrapper");
      _this.setZoom(newZoom);
      _this.scrollTo(bb.y / newZoom - c.height() / 2, bb.x / newZoom - c.width() / 2);

      // c.scrollTop((bb.y / newZoom - c.height() / 2))
      // c.scrollLeft((bb.x / newZoom - c.width() / 2))
    };

    // Inject the ZoomIn Button and the callbacks
    //
    $("#canvas_zoom_in").on("click", function () {
      setZoom(_this.getZoom() * 1.2);
    });

    // Inject the OneToOne Button
    //
    $("#canvas_zoom_normal").on("click", function () {
      setZoom(1.0);
    });

    // Inject the ZoomOut Button and the callback
    //
    $("#canvas_zoom_out").on("click", function () {
      setZoom(_this.getZoom() * 0.8);
    });

    $('#canvas_config_grid').on('change', function () {
      if ($('#canvas_config_grid').prop('checked')) {
        _this.installEditPolicy(_this.grid);
      } else {
        _this.uninstallEditPolicy(_this.grid);
      }
    });

    $("#canvas_config_items").on("click", function (e) {
      e.stopPropagation();
    });

    this.reset();
  },

  setCursor: function setCursor(cursor) {
    if (cursor !== null) {
      this.html.css("cursor", "url(" + cursor + ") 0 0, default");
    } else {
      this.html.css("cursor", "default");
    }
  },

  /**
   * @method
   * Reset the view/canvas and starts with a clean and new document with default decorations
   *
   *
   */
  reset: function reset() {
    this.clear();
  },

  setZoom: function setZoom(newZoom) {
    $("#canvas_zoom_normal").text(parseInt(1.0 / newZoom * 100) + "%");
    this._super(newZoom);
  },

  getExtFigure: function getExtFigure(id) {
    var figure = null;
    this.getExtFigures().each(function (i, e) {
      if (e.id === id) {
        figure = e;
        return false;
      }
    });
    return figure;
  },

  getExtFigures: function getExtFigures() {
    var figures = this.getFigures().clone();

    // the export rectangles are not part of the document itself. In this case we
    // filter them out
    //
    figures.grep(function (figure) {
      return typeof figure.isExtFigure !== "undefined";
    });

    var lines = this.getLines().clone();
    lines.grep(function (line) {
      return typeof line.isExtFigure !== "undefined";
    });

    figures.addAll(lines);

    return figures;
  },

  getBoundingBox: function getBoundingBox() {
    var xCoords = [];
    var yCoords = [];
    this.getExtFigures().each(function (i, f) {
      if (f instanceof shape_designer.figure.ExtPort) {
        return;
      }
      var b = f.getBoundingBox();
      xCoords.push(b.x, b.x + b.w);
      yCoords.push(b.y, b.y + b.h);
    });
    var minX = Math.min.apply(Math, xCoords);
    var minY = Math.min.apply(Math, yCoords);
    var width = Math.max(10, Math.max.apply(Math, xCoords) - minX);
    var height = Math.max(10, Math.max.apply(Math, yCoords) - minY);

    return new draw2d.geo.Rectangle(minX, minY, width, height);
  },

  hideDecoration: function hideDecoration() {
    this.uninstallEditPolicy(this.grid);
    this.getFigures().each(function (index, figure) {
      figure.unselect();
    });
  },

  showDecoration: function showDecoration() {
    this.installEditPolicy(this.grid);
  },

  /**
   * @method
   * Return the width of the canvas
   *
   * @return {Number}
   **/
  getWidth: function getWidth() {
    return this.html.find("svg").width();
  },

  /**
   * @method
   * Return the height of the canvas.
   *
   * @return {Number}
   **/
  getHeight: function getHeight() {
    return this.html.find("svg").height();
  },

  centerView: function centerView() {
    var bb = this.getBoundingBox().getCenter();
    var c = $("#draw2dCanvasWrapper");
    c.scrollTop(bb.y / this.getZoom() - c.height() / 2);
    c.scrollLeft(bb.x / this.getZoom() - c.width() / 2);
  },

  centerDocument: function centerDocument() {
    this.setZoom(1.0);
    // get the bounding box of the document and translate the complete document
    // into the center of the canvas. Scroll to the top left corner after them
    //
    var bb = this.getBoundingBox();

    var dx = this.getWidth() / 2 - (bb.x + bb.w / 2);
    var dy = this.getHeight() / 2 - (bb.y + bb.h / 2);

    this.getFigures().each(function (i, f) {
      f.translate(dx, dy);
    });
    this.getLines().each(function (i, f) {
      f.translate(dx, dy);
    });
    this.centerView();
  },

  /**
   * @method
   * Transforms a document coordinate to canvas coordinate.
   *
   * @param {Number} x the x coordinate relative to the window
   * @param {Number} y the y coordinate relative to the window
   *
   * @returns {draw2d.geo.Point} The coordinate in relation to the canvas [0,0] position
   */
  fromDocumentToCanvasCoordinate: function fromDocumentToCanvasCoordinate(x, y) {
    return new draw2d.geo.Point((x - this.getAbsoluteX()) * this.zoomFactor, (y - this.getAbsoluteY()) * this.zoomFactor);
  },

  /**
   * @method
   * Transforms a canvas coordinate to document coordinate.
   *
   * @param {Number} x the x coordinate in the canvas
   * @param {Number} y the y coordinate in the canvas
   *
   * @returns {draw2d.geo.Point} the coordinate in relation to the document [0,0] position
   */
  fromCanvasToDocumentCoordinate: function fromCanvasToDocumentCoordinate(x, y) {
    return new draw2d.geo.Point(x * (1 / this.zoomFactor) + this.getAbsoluteX(), y * (1 / this.zoomFactor) + this.getAbsoluteY());
  }
});
module.exports = exports['default'];

/***/ }),

/***/ "../../app/frontend/designer/js/dialog/FigureCodeEdit.js":
/*!*****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/dialog/FigureCodeEdit.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FigureTest = __webpack_require__(/*! ./FigureTest */ "../../app/frontend/designer/js/dialog/FigureTest.js");

var _FigureTest2 = _interopRequireDefault(_FigureTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FigureCodeEdit = function () {
  function FigureCodeEdit() {
    _classCallCheck(this, FigureCodeEdit);
  }

  _createClass(FigureCodeEdit, [{
    key: "show",
    value: function show() {
      Mousetrap.pause();
      var code = shape_designer.app.getConfiguration("code");
      var splash = $('<pre id="code_overlay">' + code + '</pre>' + '<img title="Run"   id="test_run"   class="icon" src="./images/dialog_run.svg"/>' + '<img title="Close" id="code_close" class="icon" src="./images/dialog_close.svg"/>');
      splash.hide();
      $("body").append(splash);
      splash.fadeIn();

      var before = function before(obj, method, wrapper) {
        var orig = obj[method];
        obj[method] = function () {
          var args = Array.prototype.slice.call(arguments);
          return wrapper.call(this, function () {
            return orig.apply(obj, args);
          }, args);
        };

        return obj[method];
      };

      var intersects = function intersects(range) {
        return editor.getSelectionRange().intersects(range);
      };

      var preventReadonly = function preventReadonly(next, args) {
        if (intersects(range)) return;
        next();
      };

      var lines = code.split("\n");
      var last = lines.length - 1;
      var first = lines.findIndex(function (element, index, array) {
        return element.startsWith("testShape");
      });

      var editor = ace.edit("code_overlay"),
          session = editor.getSession(),
          Range = ace.require("ace/range").Range,
          range = new Range(0, 0, first, lines[first].length),
          range2 = new Range(last, 0, last, lines[last].length);

      session.addMarker(range, "readonly-highlight");
      session.addMarker(range2, "readonly-highlight");
      session.setMode("ace/mode/javascript");
      session.setUseWrapMode(true);
      editor.moveCursorTo(first + 1, 0);
      editor.focus();

      editor.keyBinding.addKeyboardHandler({
        handleKeyboard: function handleKeyboard(data, hash, keyString, keyCode, event) {
          if (hash === -1 || keyCode <= 40 && keyCode >= 37) return false;

          if (intersects(range) || intersects(range2)) {
            return { command: "null", passEvent: false };
          }
        }
      });

      before(editor, 'onPaste', preventReadonly);
      before(editor, 'onCut', preventReadonly);

      range.start = session.doc.createAnchor(range.start);
      range.end = session.doc.createAnchor(range.end);
      range.end.$insertRight = true;

      range2.start = session.doc.createAnchor(range2.start);
      range2.end = session.doc.createAnchor(range2.end);
      range2.end.$insertRight = true;

      $("#code_close").on("click", function () {
        var code = editor.getValue();
        shape_designer.app.setConfiguration({ code: code });
        Mousetrap.unpause();
        splash.fadeOut(function () {
          splash.remove();
        });
      });

      $("#test_run").on("click", function () {
        var code = editor.getValue();
        shape_designer.app.setConfiguration({ code: code });
        new _FigureTest2.default().show();
      });
    }
  }]);

  return FigureCodeEdit;
}();

exports.default = FigureCodeEdit;
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/dialog/FigureMarkdownEdit.js":
/*!*********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/dialog/FigureMarkdownEdit.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _remarkable = __webpack_require__(/*! remarkable */ "../../node_modules/remarkable/index.js");

var _remarkable2 = _interopRequireDefault(_remarkable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FigureMarkdownEdit = function () {
  function FigureMarkdownEdit() {
    _classCallCheck(this, FigureMarkdownEdit);

    this.mdHtml = null;
    this.scrollMap = null;

    this.lineHeight = 1.45;
    this.defaults = {
      html: true, // Enable HTML tags in source
      xhtmlOut: false, // Use '/' to close single tags (<br />)
      breaks: false, // Convert '\n' in paragraphs into <br>
      langPrefix: 'language-', // CSS language prefix for fenced blocks
      linkify: true, // autoconvert URL-like texts to links
      linkTarget: '_blank', // set target to open link in
      typographer: true // Enable smartypants and other sweet transforms
    };
  }

  /**
   */


  _createClass(FigureMarkdownEdit, [{
    key: 'show',
    value: function show() {
      Mousetrap.pause();
      var _this = this;
      this.mdHtml = new _remarkable2.default('full', this.defaults);

      var markdown = shape_designer.app.getConfiguration("markdown");
      markdown = markdown ? markdown : "# Header \n## Subheader \nbe nice and write a help file for your new \ncreated ***DigitalTrainingStudion*** shape. \n\n  - point 1\n  - point 2\n  - point 3";
      var splash = $('<div id="FigureMarkdownEdit" class="overlay-scale">' + '<pre class="source full-height">' + markdown + '</pre>' + '<div class="preview full-height" >' + '' + '</div>' + ' <div class="header">' + '<span class="left">Documentation Editor (<a target="_blank" href="https://en.wikipedia.org/wiki/Markdown">markdown syntax </a>)</span>' + '<span class="right">HTML Preview</span></div>' + ' <img title="Close" id="test_close" class="icon" src="./images/dialog_close.svg"/>' + '<div>');

      // fadeTo MUSS leider sein. Man kann mit raphael keine paper.text elemente einfügen
      // wenn das canvas nicht sichtbar ist. In diesen Fall mach ich das Canvas "leicht" sichtbar und raphael ist
      // zufrieden.
      $("body").append(splash);

      var removeDialog = function removeDialog() {
        Mousetrap.unpause();
        shape_designer.app.setConfiguration({ markdown: _this.editor.getValue() });
        splash.removeClass("open");
        setTimeout(function () {
          splash.remove();
        }, 400);
      };

      $("#test_close").on("click", removeDialog);
      setTimeout(function () {
        splash.addClass("open");
      }, 100);

      // Inject line numbers for sync scroll.
      //
      this.mdHtml.renderer.rules.paragraph_open = function (tokens, idx) {
        var line;
        if (tokens[idx].lines && tokens[idx].level === 0) {
          line = tokens[idx].lines[0];
          return '<p class="line" data-line="' + line + '">';
        }
        return '<p>';
      };

      this.mdHtml.renderer.rules.heading_open = function (tokens, idx) {
        var line;
        if (tokens[idx].lines && tokens[idx].level === 0) {
          line = tokens[idx].lines[0];
          return '<h' + tokens[idx].hLevel + ' class="line" data-line="' + line + '">';
        }
        return '<h' + tokens[idx].hLevel + '>';
      };

      this.$preview = $("#FigureMarkdownEdit .preview");
      this.$source = $('#FigureMarkdownEdit .source');

      var editor = ace.edit(this.$source[0]),
          session = editor.getSession();
      this.editor = editor;
      editor.moveCursorTo(5, 0);
      editor.focus();

      session.setMode("ace/mode/markdown");

      session.on('changeScrollTop', _this._debounce($.proxy(_this.syncScroll, _this), 50, false));

      editor.keyBinding.addKeyboardHandler({ handleKeyboard: _this._debounce($.proxy(_this.updateResult, _this), 300, false) });

      this.updateResult();
    }
  }, {
    key: 'updateResult',
    value: function updateResult() {
      var source = this.editor.getValue();
      this.$preview.html(this.mdHtml.render(source));
      // reset lines mapping cache on content update
      this.scrollMap = null;
    }

    // Build offsets for each line (lines can be wrapped)
    // That's a bit dirty to process each line everytime, but ok for demo.
    // Optimizations are required only for big texts.

  }, {
    key: 'buildScrollMap',
    value: function buildScrollMap() {
      var _this = this;

      var i, offset, nonEmptyList, pos, a, b, lineHeightMap, linesCount, acc, sourceLikeDiv, _scrollMap;

      sourceLikeDiv = $('<div />').css({
        position: 'absolute',
        visibility: 'hidden',
        height: 'auto',
        width: $("#FigureMarkdownEdit .left")[0].clientWidth,
        'font-size': '10pt',
        'font-family': 'tahoma',
        'line-height': this.lineHeight,
        'white-space': 'nowrap'
      }).appendTo('body');

      offset = this.$preview.scrollTop() - this.$preview.offset().top - 40;
      _scrollMap = [];
      nonEmptyList = [];
      lineHeightMap = [];

      acc = 0;
      this.editor.getValue().split('\n').forEach(function (str) {
        var h, lh;

        lineHeightMap.push(acc);

        if (str.length === 0) {
          acc++;
          return;
        }

        sourceLikeDiv.text(str);
        h = parseFloat(sourceLikeDiv.css('height'));
        lh = parseFloat(_this.lineHeight);
        acc += Math.round(h / lh);
      });
      sourceLikeDiv.remove();
      lineHeightMap.push(acc);
      linesCount = acc;

      for (i = 0; i < linesCount; i++) {
        _scrollMap.push(-1);
      }

      nonEmptyList.push(0);
      _scrollMap[0] = 0;

      $('.line').each(function (n, el) {
        var $el = $(el),
            t = $el.data('line');
        if (t === '') {
          return;
        }
        t = lineHeightMap[t];
        if (t !== 0) {
          nonEmptyList.push(t);
        }
        _scrollMap[t] = Math.round($el.offset().top + offset);
      });

      nonEmptyList.push(linesCount);
      _scrollMap[linesCount] = this.$preview[0].scrollHeight;

      pos = 0;
      for (i = 1; i < linesCount; i++) {
        if (_scrollMap[i] !== -1) {
          pos++;
          continue;
        }

        a = nonEmptyList[pos];
        b = nonEmptyList[pos + 1];
        _scrollMap[i] = Math.round((_scrollMap[b] * (i - a) + _scrollMap[a] * (b - i)) / (b - a));
      }

      return _scrollMap;
    }
  }, {
    key: 'syncScroll',
    value: function syncScroll(scroll) {
      var lineNo, posTo;
      lineNo = Math.floor(scroll / this.lineHeight);
      if (!this.scrollMap) {
        this.scrollMap = this.buildScrollMap();
      }
      posTo = this.scrollMap[lineNo];
      this.$preview.stop(true).animate({
        scrollTop: posTo
      }, 400, 'linear');
    }

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.

  }, {
    key: '_debounce',
    value: function _debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var context = this,
            args = arguments;
        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
  }]);

  return FigureMarkdownEdit;
}();

exports.default = FigureMarkdownEdit;
module.exports = exports['default'];

/***/ }),

/***/ "../../app/frontend/designer/js/dialog/FigureTest.js":
/*!*************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/dialog/FigureTest.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FigureWriter = __webpack_require__(/*! ./../io/FigureWriter */ "../../app/frontend/designer/js/io/FigureWriter.js");

var _FigureWriter2 = _interopRequireDefault(_FigureWriter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FigureTest = function () {
  function FigureTest() {
    _classCallCheck(this, FigureTest);
  }

  _createClass(FigureTest, [{
    key: "show",
    value: function show() {
      var _this = this;
      this.animationFrameFunc = this._calculate.bind(this);

      var writer = new _FigureWriter2.default();
      var testShape = null;
      writer.marshal(shape_designer.app.view, "testShape", function (js) {
        try {
          js = $("#decoratedport-template").text().trim() + js;
          testShape = eval(js);
        } catch (exc) {
          alert("Error in shape code. \nRemove error and try it again:\n\n>>    " + exc);
          throw exc;
        }
        var splash = $('<div class="overlay-scale">' + '<div id="test_canvas">' + '</div>' + ' <div               id="test_info" >Test page for your designed and coded draw2d shape.</div>' + ' <img title="Close" id="test_close" class="icon" src="./images/dialog_close.svg"/>' + '<div>');

        // fadeTo MUSS leider sein. Man kann mit raphael keine paper.text elemente einfügen
        // wenn das canvas nicht sichtbar ist. In diesen Fall mach ich das Canvas "leicht" sichtbar und raphael ist
        // zufrieden.
        $("body").append(splash);

        var canvas = new draw2d.Canvas("test_canvas");
        _this.canvas = canvas;
        canvas.installEditPolicy(new draw2d.policy.canvas.ShowDotEditPolicy(20, 1, "#FF4981"));
        var router = new draw2d.layout.connection.InteractiveManhattanConnectionRouter();
        canvas.installEditPolicy(new draw2d.policy.connection.ComposedConnectionCreatePolicy([
        // create a connection via Drag&Drop of ports
        //
        new draw2d.policy.connection.DragConnectionCreatePolicy({
          createConnection: function createConnection() {
            return new draw2d.Connection({
              radius: 3,
              stroke: 2,
              color: "#129CE4",
              outlineStroke: 1,
              outlineColor: "#ffffff",
              router: router
            });
          }
        }),
        // or via click and point
        //
        new draw2d.policy.connection.OrthogonalConnectionCreatePolicy({
          createConnection: function createConnection() {
            return new draw2d.Connection({
              radius: 3,
              stroke: 2,
              color: "#129CE4",
              outlineStroke: 1,
              outlineColor: "#ffffff",
              router: router
            });
          }
        })]));
        var test = new testShape();
        canvas.add(test, 400, 160);

        // create and add two nodes which contains Ports (In and OUT)
        //
        var start = new draw2d.shape.node.Start();
        var toggle1 = new shape_designer.figure.TestSwitch();
        var toggle2 = new shape_designer.figure.TestSwitch();
        var end = new draw2d.shape.node.End();

        // ...add it to the canvas
        canvas.add(toggle1, 50, 150);
        canvas.add(toggle2, 50, 200);
        canvas.add(start, 50, 250);
        canvas.add(end, 630, 250);

        canvas.setCurrentSelection(test);
        var removeDialog = function removeDialog() {
          _this.simulate = false;
          splash.removeClass("open");
          setTimeout(function () {
            splash.remove();
          }, 400);
        };

        $("#test_close").on("click", removeDialog);
        splash.addClass("open");

        _this.simulate = true;
        requestAnimationFrame(_this.animationFrameFunc);
      });
    }
  }, {
    key: "_calculate",
    value: function _calculate() {
      // call the "calculate" method if given to calculate the output-port values
      //
      var figures = this.canvas.getFigures().clone().grep(function (f) {
        return f.calculate;
      });
      figures.each(function (i, figure) {
        figure.calculate();
      });

      // transport the value from oututPort to inputPort
      //
      this.canvas.getLines().each(function (i, line) {
        var outPort = line.getSource();
        var inPort = line.getTarget();
        inPort.setValue(outPort.getValue());
        line.setColor(outPort.getValue() ? "#ff5252" : "#0000ff");
      });

      if (this.simulate === true) {
        requestAnimationFrame(this.animationFrameFunc);
      }
    }
  }]);

  return FigureTest;
}();

exports.default = FigureTest;
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/dialog/FileOpen.js":
/*!***********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/dialog/FileOpen.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configuration = __webpack_require__(/*! ../Configuration */ "../../app/frontend/designer/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _hogan = __webpack_require__(/*! hogan.js */ "../../node_modules/hogan.js/lib/hogan.js");

var _hogan2 = _interopRequireDefault(_hogan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileOpen = function () {

  /**
   * @constructor
   *
   */
  function FileOpen() {
    _classCallCheck(this, FileOpen);
  }

  /**
   * @method
   *
   * Open the file picker and load the selected file.<br>
   *
   * @param {Function} successCallback callback method if the user select a file and the content is loaded
   * @param {Function} errorCallback method to call if any error happens
   *
   * @since 4.0.0
   */


  _createClass(FileOpen, [{
    key: "show",
    value: function show(storage, view) {
      $('#fileOpenDialog').modal('show');
      this.currentDir = storage.currentDir;
      this.fetchPathContent(storage, this.currentDir, view);
    }
  }, {
    key: "fetchPathContent",
    value: function fetchPathContent(storage, newPath, view) {
      var _this = this;

      storage.getFiles(newPath).then(function (files) {
        files = files.filter(function (file) {
          return file.name.endsWith(_Configuration2.default.fileSuffix) || file.type === 'dir';
        });
        var compiled = _hogan2.default.compile("\n           {{^rootDir}}     \n           <a href=\"#\" class=\"list-group-item githubPath\" data-type=\"dir\" data-path=\"{{parentPath}}\" >\n               <span class=\"glyphicon glyphicon-menu-left\"></span>\n               ..\n           </a>\n           {{/rootDir}}\n           {{#files}}\n             <a href=\"#\" data-draw2d=\"{{draw2d}}\" class=\"list-group-item githubPath text-nowrap\" data-type=\"{{type}}\" data-path=\"{{currentDir}}{{name}}\" data-id=\"{{id}}\">\n                <span class=\"glyphicon {{icon}}\"></span>\n                {{{name}}}\n             </a>\n           {{/files}}\n          ");

        var parentPath = storage.dirname(newPath);
        var output = compiled.render({
          parentPath: parentPath,
          currentDir: _this.currentDir,
          files: files,
          rootDir: newPath === null || newPath.length === 0,
          draw2d: function draw2d() {
            return this.name.endsWith(_Configuration2.default.fileSuffix);
          },
          icon: function icon() {
            if (this.name.endsWith(_Configuration2.default.fileSuffix)) {
              return "fa fa-object-group";
            }
            return this.type === "dir" ? "fa fa-folder-o" : "fa fa-file-o";
          }
        });

        $("#fileOpenDialog .list-group").html($(output));
        $("#fileOpenDialog .list-group").scrollTop(0);

        // Load the content of an directory
        //
        $(".githubPath[data-type='dir']").on("click", function (event) {
          var path = $(event.currentTarget).data("path");
          _this.currentDir = path;
          _this.fetchPathContent(storage, path, view);
        });

        // Load the user selected File
        //
        $('.githubPath*[data-draw2d="true"][data-type="file"]').on("click", function (event) {
          var path = $(event.currentTarget).data("path");
          storage.loadFile(path).then(function (content) {
            $('#fileOpenDialog').modal('hide');
            storage.currentFile = path;
            view.clear();
            new draw2d.io.json.Reader().unmarshal(view, content);
            view.app.getConfiguration();
            view.getCommandStack().markSaveLocation();
            view.centerDocument();
            return content;
          });
          event.preventDefault();
        });
      });
    }
  }]);

  return FileOpen;
}();

exports.default = FileOpen;
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/dialog/FileSave.js":
/*!***********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/dialog/FileSave.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configuration = __webpack_require__(/*! ./../Configuration */ "../../app/frontend/designer/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileSave = function () {

  /**
   * @constructor
   *
   */
  function FileSave() {
    _classCallCheck(this, FileSave);
  }

  /**
   * @method
   *
   * Open the file picker and load the selected file.<br>
   *
   * @param {Function} successCallback callback method if the user select a file and the content is loaded
   * @param {Function} errorCallback method to call if any error happens
   *
   * @since 4.0.0
   */


  _createClass(FileSave, [{
    key: "show",
    value: function show(storage, canvas) {

      new draw2d.io.png.Writer().marshal(canvas, function (imageDataUrl) {
        $("#fileSaveDialog .filePreview").attr("src", imageDataUrl);
        $("#fileSaveDialog .githubFileName").val(storage.currentFile ? storage.currentFile : "NewDocument" + _Configuration2.default.fileSuffix);

        $('#fileSaveDialog').on('shown.bs.modal', function (event) {
          $(event.currentTarget).find('input:first').focus();
        });
        $("#fileSaveDialog").modal("show");
        Mousetrap.pause();

        // Button: Commit to GitHub
        //
        $("#fileSaveDialog .okButton").off('click').on("click", function () {
          Mousetrap.unpause();
          var writer = new draw2d.io.json.Writer();
          writer.marshal(canvas, function (json) {
            var newName = $("#fileSaveDialog .githubFileName").val();
            storage.saveFile(json, imageDataUrl, newName).then(function () {
              storage.currentFile = newName;
              $('#fileSaveDialog').modal('hide');
            });
          });
        });
      }, canvas.getBoundingBox().scale(20, 20));
    }
  }]);

  return FileSave;
}();

exports.default = FileSave;
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/dialog/FileSaveAs.js":
/*!*************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/dialog/FileSaveAs.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configuration = __webpack_require__(/*! ./../Configuration */ "../../app/frontend/designer/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _hogan = __webpack_require__(/*! hogan.js */ "../../node_modules/hogan.js/lib/hogan.js");

var _hogan2 = _interopRequireDefault(_hogan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileSaveAs = function () {

  /**
   * @constructor
   *
   */
  function FileSaveAs() {
    _classCallCheck(this, FileSaveAs);
  }

  /**
   * @method
   *
   * Open the file picker and load the selected file.
   *
   * @since 4.0.0
   */


  _createClass(FileSaveAs, [{
    key: "show",
    value: function show(storage, canvas) {
      var _this = this;

      if (storage.currentFile === null) {
        storage.currentFile = "DocumentName" + _Configuration2.default.fileSuffix;
      }

      new draw2d.io.png.Writer().marshal(canvas, function (imageDataUrl) {
        // else reopen the already selected directory
        $("#githubFileSaveAsDialog .okButton").prop("disabled", false);
        _this.fetchPathContent(storage, storage.currentDir);

        $("#githubFileSaveAsDialog .filePreview").attr("src", imageDataUrl);
        $("#githubFileSaveAsDialog .githubFileName").val(storage.currentFile);

        $('#githubFileSaveAsDialog').off('shown.bs.modal').on('shown.bs.modal', function (event) {
          $(event.currentTarget).find('input:first').focus();
        });
        $("#githubFileSaveAsDialog").modal("show");
        Mousetrap.pause();

        // Button: Commit to GitHub
        //
        $("#githubFileSaveAsDialog .okButton").off('click').on("click", function () {
          Mousetrap.unpause();
          var writer = new draw2d.io.json.Writer();
          writer.marshal(canvas, function (json) {
            var title = $("#githubFileSaveAsDialog .githubFileName").val();
            storage.saveFile(json, imageDataUrl, title).then(function () {
              storage.currentFile = name;
              $('#githubFileSaveAsDialog').modal('hide');
            });
          });
        });
      }, canvas.getBoundingBox().scale(20, 20));
    }
  }, {
    key: "fetchPathContent",
    value: function fetchPathContent(storage, newPath) {
      var _this2 = this;

      storage.getFiles(newPath).then(function (files) {
        storage.currentFile = newPath;
        var compiled = _hogan2.default.compile('         <a href="#" class="list-group-item githubPath" data-type="{{parentType}}" data-path="{{parentPath}}" >' + '             <span class="glyphicon glyphicon-menu-left"></span>' + '             ..' + '         </a>' + '         {{#files}}' + '           <a href="#" data-draw2d="{{draw2d}}" class="list-group-item githubPath text-nowrap" data-type="{{type}}" data-path="{{currentDir}}{{name}}" data-title="{{name}}" data-id="{{id}}" data-sha="{{sha}}">' + '              <span class="glyphicon {{icon}}"></span>' + '              {{{name}}}' + '           </a>' + '         {{/files}}');

        var parentPath = storage.dirname(newPath);
        var output = compiled.render({
          parentPath: parentPath,
          currentDir: storage.currentDir,
          files: files,
          draw2d: function draw2d() {
            return this.name.endsWith(_Configuration2.default.fileSuffix);
          },
          icon: function icon() {
            if (this.name.endsWith(_Configuration2.default.fileSuffix)) {
              return "fa fa-object-group";
            }
            return this.type === "dir" ? "fa fa-folder-o" : "fa fa-file-o";
          }
        });
        $("#githubFileSaveAsDialog .list-group").html($(output));
        $("#githubFileSaveAsDialog .list-group").scrollTop(0);

        //we are in a folder. Create of a file is possible now
        //
        $("#githubFileSaveAsDialog .okButton").prop("disabled", false);

        $(".githubPath[data-type='dir']").on("click", function (event) {
          _this2.fetchPathContent(storage, $(event.currentTarget).data("path"));
        });

        $('.githubPath*[data-draw2d="true"][data-type="file"]').on("click", function (event) {
          var path = $(event.currentTarget).data("path");
          var title = path.split(/[\\/]/).pop(); // basename
          $("#githubFileSaveAsDialog .githubFileName").val(title);
        });
      });
    }
  }]);

  return FileSaveAs;
}();

exports.default = FileSaveAs;
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/CircuitFigure.js":
/*!****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/CircuitFigure.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = draw2d.SetFigure.extend({

  NAME: "CircuitFigure",

  init: function init(attr, setter, getter) {
    var _this = this;

    this.tooltip = null;
    this.tooltipTimer = -1;

    this._super($.extend({ stroke: 0, bgColor: null, width: 30, height: 32 }, attr), setter, getter);

    this.persistPorts = false;
    this.zoomCallback = $.proxy(this.positionTooltip, this);

    this.on("dragstart", function () {
      _this.hideTooltip(true);
    });

    this.on("mouseenter", function () {
      _this.tooltipTimer = window.setTimeout(function () {
        _this.tooltipTimer = -1;
        _this.showTooltip();
      }, 500);
    });

    this.on("mouseleave", function () {
      _this.hideTooltip();
    });

    this.on("move", function () {
      _this.positionTooltip();
    });
  },

  setCanvas: function setCanvas(canvas) {
    if (this.canvas !== null) this.canvas.off(this.zoomCallback);
    this._super(canvas);
    if (this.canvas !== null) this.canvas.on("zoom", this.zoomCallback);
  },

  hideTooltip: function hideTooltip(fast) {
    if (this.tooltipTimer !== -1) {
      window.clearTimeout(this.tooltipTimer);
      this.tooltipTimer = -1;
    } else if (this.tooltip !== null) {
      if (fast) {
        this.tooltip.remove();
      } else {
        this.tooltip.fadeOut(500, function () {
          $(this).remove();
        });
      }
      this.tooltip = null;
    }
  },

  showTooltip: function showTooltip() {
    this.tooltip = $('<div class="draw2d_tooltip">' + this.NAME + '</div>').appendTo('body').hide().fadeIn(1000);
    this.positionTooltip();
  },

  positionTooltip: function positionTooltip() {
    if (this.tooltip === null) {
      return;
    }

    var width = this.tooltip.outerWidth(true);
    var pos = this.canvas.fromCanvasToDocumentCoordinate(this.getAbsoluteX() + this.getWidth() / 2 - width / 2 + 8, this.getAbsoluteY() + this.getHeight() + 10);

    this.tooltip.css({ 'top': pos.y, 'left': pos.x });
  },

  applyAlpha: function applyAlpha() {},

  layerGet: function layerGet(name, attributes) {
    if (this.svgNodes === null) return null;

    var result = null;
    this.svgNodes.some(function (shape) {
      if (shape.data("name") === name) {
        result = shape;
      }
      return result !== null;
    });

    return result;
  },

  layerAttr: function layerAttr(name, attributes) {
    if (this.svgNodes === null) return;

    this.svgNodes.forEach(function (shape) {
      if (shape.data("name") === name) {
        shape.attr(attributes);
      }
    });
  },

  layerShow: function layerShow(name, flag, duration) {
    if (this.svgNodes === null) return;

    if (duration) {
      this.svgNodes.forEach(function (node) {
        if (node.data("name") === name) {
          if (flag) {
            node.attr({ opacity: 0 }).show().animate({ opacity: 1 }, duration);
          } else {
            node.animate({ opacity: 0 }, duration, function () {
              this.hide();
            });
          }
        }
      });
    } else {
      this.svgNodes.forEach(function (node) {
        if (node.data("name") === name) {
          if (flag) {
            node.show();
          } else {
            node.hide();
          }
        }
      });
    }
  },

  calculate: function calculate() {},

  onStart: function onStart() {},

  onStop: function onStop() {},

  getParameterSettings: function getParameterSettings() {
    return [];
  },

  getRequiredHardware: function getRequiredHardware() {
    return {
      raspi: false,
      arduino: false
    };
  },

  onDrop: function onDrop(dropTarget, x, y, shiftKey, ctrlKey) {
    // Activate a "smart insert" If the user drop this figure on connection
    //
    /*
    if (dropTarget instanceof draw2d.Connection) {
      let additionalConnection = dropTarget.getCanvas().createConnection()
      let oldSource = dropTarget.getSource()
      let oldTarget = dropTarget.getTarget()
      if (oldSource instanceof draw2d.InputPort) {
        oldSource = dropTarget.getTarget()
        oldTarget = dropTarget.getSource()
      }
       let stack = this.getCanvas().getCommandStack()
      let cmd = new draw2d.command.CommandReconnect(dropTarget)
      cmd.setNewPorts(oldSource, this.getInputPort(0))
      stack.execute(cmd)
       cmd = new draw2d.command.CommandConnect(oldTarget, this.getOutputPort(0))
      cmd.setConnection(additionalConnection)
      stack.execute(cmd)
    }
    */
  },

  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes: function getPersistentAttributes() {
    var memento = this._super();

    // add all decorations to the memento
    //
    memento.labels = [];
    this.children.each(function (i, e) {
      var labelJSON = e.figure.getPersistentAttributes();
      labelJSON.locator = e.locator.NAME;
      memento.labels.push(labelJSON);
    });

    return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes: function setPersistentAttributes(memento) {
    this._super(memento);

    // remove all decorations created in the constructor of this element
    //
    this.resetChildren();

    // and add all children of the JSON document.
    //
    $.each(memento.labels, $.proxy(function (i, json) {
      // create the figure stored in the JSON
      var figure = eval("new " + json.type + "()");

      // apply all attributes
      figure.attr(json);

      // instantiate the locator
      var locator = eval("new " + json.locator + "()");

      // add the new figure as child to this figure
      this.add(figure, locator);
    }, this));
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/DecoratedInputPort.js":
/*!*********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/DecoratedInputPort.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shape_designer.figure.DecoratedInputPort = draw2d.InputPort.extend({

  init: function init(attr, setter, getter) {
    this.hasChanged = true;

    this._super(attr, setter, getter);

    this.decoration = new shape_designer.figure.MarkerFigure();

    this.add(this.decoration, new draw2d.layout.locator.LeftLocator({ margin: 8 }));

    // a port can have a value. Useful for workflow engines or circuit diagrams
    this.setValue(true);
  },

  useDefaultValue: function useDefaultValue() {
    this.decoration.setStick(true);
  },

  setValue: function setValue(value) {
    this.hasChanged = this.value !== value;
    this._super(value);
  },

  hasChangedValue: function hasChangedValue() {
    return this.hasChanged;
  },

  hasRisingEdge: function hasRisingEdge() {
    return this.hasChangedValue() && this.getValue();
  },

  hasFallingEdge: function hasFallingEdge() {
    return this.hasChangedValue() && !this.getValue();
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/ExtLabel.js":
/*!***********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/ExtLabel.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shape_designer.figure.ExtLabel = draw2d.shape.basic.Label.extend({

  NAME: "shape_designer.figure.ExtLabel",

  init: function init() {
    this.blur = 0;
    this.isExtFigure = true;

    this._super();

    this.setUserData({ name: "Label" });

    this.filters = new draw2d.util.ArrayList();
    this.filters.add(new shape_designer.filter.PositionFilter());
    this.filters.add(new shape_designer.filter.FontSizeFilter());
    this.filters.add(new shape_designer.filter.FontColorFilter());

    this.installEditor(new LabelInplaceEditor());
  },

  getPotentialFilters: function getPotentialFilters() {
    return [{ label: "Opacity", impl: "shape_designer.filter.OpacityFilter" }, { label: "Blur", impl: "shape_designer.filter.BlurFilter" }, { label: "Outline", impl: "shape_designer.filter.OutlineStrokeFilter" }, { label: "Gradient", impl: "shape_designer.filter.TextLinearGradientFilter" }, { label: "Font Size", impl: "shape_designer.filter.FontSizeFilter" }, { label: "Font Color", impl: "shape_designer.filter.FontColorFilter" }];
  },

  setBlur: function setBlur(value) {
    this.blur = value;
    this.repaint();
  },

  getBlur: function getBlur() {
    return this.blur;
  },

  removeFilter: function removeFilter(filter) {
    this.filters.remove(filter);

    return this;
  },

  addFilter: function addFilter(filter) {
    var alreadyIn = false;

    this.filters.each($.proxy(function (i, e) {
      alreadyIn = alreadyIn || e.NAME === filter.NAME;
    }, this));
    if (alreadyIn === true) {
      return; // silently
    }

    this.filters.add(filter);
    filter.onInstall(this);
    this.repaint();

    return this;
  },

  /*
    setPosition: function(x, y) {
      if (x instanceof draw2d.geo.Point) {
        return this._super(
          parseFloat(x.x.toFixed(1)),
          parseFloat(x.y.toFixed(1)))
      }
  
      return this._super(
        parseFloat(x.toFixed(1)),
        parseFloat(y.toFixed(1)))
    },
  */

  /**
  * @method
  * Trigger the repaint of the element.
  *
  */
  repaint: function repaint(attributes) {
    if (this.shape === null) {
      return;
    }

    if (typeof attributes === "undefined") {
      attributes = {};
    }

    // style the label
    var lattr = {};
    lattr.text = this.text;
    lattr["font-weight"] = this.bold === true ? "bold" : "normal";
    lattr["text-anchor"] = "start";
    lattr["font-size"] = this.fontSize;
    if (this.fontFamily !== null) {
      lattr["font-family"] = this.fontFamily;
    }
    lattr.fill = this.fontColor.hash();
    // since 4.2.1
    lattr.stroke = this.outlineColor.hash();
    lattr["stroke-width"] = this.outlineStroke;

    this.filters.each($.proxy(function (i, filter) {
      filter.apply(this, attributes, lattr);
    }, this));

    this.svgNodes.attr(lattr);
    // set of the x/y must be done AFTER the font-size and bold has been set.
    // Reason: the getHeight method needs the font-size for calculation because
    //         it redirects the calculation to the SVG element.
    this.svgNodes.attr({ x: this.padding.left, y: this.getHeight() / 2 });

    // jump over the normal Label implementation
    draw2d.SetFigure.prototype.repaint.call(this, attributes);
  },

  getPersistentAttributes: function getPersistentAttributes() {
    var memento = this._super();

    memento.filters = [];
    this.filters.each($.proxy(function (i, e) {
      var filterMemento = e.getPersistentAttributes(this);
      memento.filters.push(filterMemento);
    }, this));

    return memento;
  },

  setPersistentAttributes: function setPersistentAttributes(memento) {
    this._super(memento);

    if (typeof memento.filters !== "undefined") {
      this.filters = new draw2d.util.ArrayList();
      $.each(memento.filters, $.proxy(function (i, e) {
        var filter = eval("new " + e.name + "()");
        filter.setPersistentAttributes(this, e);
        this.filters.add(filter);
      }, this));
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/ExtLine.js":
/*!**********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/ExtLine.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shape_designer.figure.ExtLine = draw2d.shape.basic.PolyLine.extend({

  NAME: "shape_designer.figure.ExtLine",

  init: function init() {
    this._super();

    this.blur = 0;
    this.isExtFigure = true;

    this.setUserData({ name: "Line" });

    this.filters = new draw2d.util.ArrayList();
    this.filters.add(new shape_designer.filter.StrokeFilter());

    this.setRouter(new draw2d.layout.connection.VertexRouter());
    this.installEditPolicy(new draw2d.policy.line.VertexSelectionFeedbackPolicy());
  },

  setBlur: function setBlur(value) {
    this.blur = parseInt(value);
    this.repaint();
  },

  getBlur: function getBlur() {
    return this.blur;
  },

  getPotentialFilters: function getPotentialFilters() {
    return [{ label: "Opacity", impl: "shape_designer.filter.OpacityFilter" }, { label: "Blur", impl: "shape_designer.filter.BlurFilter" }, { label: "Outline", impl: "shape_designer.filter.OutlineStrokeFilter" }, { label: "Corner Radius", impl: "shape_designer.filter.RadiusFilter" }, { label: "Stroke", impl: "shape_designer.filter.StrokeFilter" }];
  },

  removeFilter: function removeFilter(filter) {
    this.filters.remove(filter);

    return this;
  },

  addFilter: function addFilter(filter) {
    var alreadyIn = false;

    this.filters.each($.proxy(function (i, e) {
      alreadyIn = alreadyIn || e.NAME === filter.NAME;
    }, this));
    if (alreadyIn === true) {
      return; // silently
    }

    this.filters.add(filter);
    filter.onInstall(this);
    this.repaint();

    return this;
  },

  /**
   * @method
   * Trigger the repaint of the element.
   *
   */
  repaint: function repaint(attributes) {
    if (this.shape === null) {
      return;
    }

    if (typeof attributes === "undefined") {
      attributes = {};
    }

    this.filters.each($.proxy(function (i, filter) {
      filter.apply(this, attributes);
    }, this));

    //        this.shape.blur(this.blur);
    this._super(attributes);
  },

  getPersistentAttributes: function getPersistentAttributes() {
    var memento = this._super();

    memento.filters = [];
    this.filters.each($.proxy(function (i, e) {
      var filterMemento = e.getPersistentAttributes(this);
      memento.filters.push(filterMemento);
    }, this));

    return memento;
  },

  setPersistentAttributes: function setPersistentAttributes(memento) {
    this._super(memento);

    if (typeof memento.filters !== "undefined") {
      this.filters = new draw2d.util.ArrayList();
      $.each(memento.filters, $.proxy(function (i, e) {
        var filter = eval("new " + e.name + "()");
        filter.setPersistentAttributes(this, e);
        this.filters.add(filter);
      }, this));
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/ExtPolygon.js":
/*!*************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/ExtPolygon.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PositionFilter = __webpack_require__(/*! ../filter/PositionFilter */ "../../app/frontend/designer/js/filter/PositionFilter.js");

var _PositionFilter2 = _interopRequireDefault(_PositionFilter);

var _SizeFilter = __webpack_require__(/*! ../filter/SizeFilter */ "../../app/frontend/designer/js/filter/SizeFilter.js");

var _SizeFilter2 = _interopRequireDefault(_SizeFilter);

var _StrokeFilter = __webpack_require__(/*! ../filter/StrokeFilter */ "../../app/frontend/designer/js/filter/StrokeFilter.js");

var _StrokeFilter2 = _interopRequireDefault(_StrokeFilter);

var _FillColorFilter = __webpack_require__(/*! ../filter/FillColorFilter */ "../../app/frontend/designer/js/filter/FillColorFilter.js");

var _FillColorFilter2 = _interopRequireDefault(_FillColorFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint evil:true */
// required for serialie/deserialize of JSON
exports.default = shape_designer.figure.ExtPolygon = draw2d.shape.basic.Polygon.extend({

  NAME: "shape_designer.figure.ExtPolygon",

  init: function init(attr, setter, getter) {
    this.blur = 0;

    this.isExtFigure = true;

    this._super(attr, setter, getter);

    this.setUserData({ name: "Polygon" });

    this.filters = new draw2d.util.ArrayList();
    this.filters.add(new _PositionFilter2.default());
    this.filters.add(new _SizeFilter2.default());
    this.filters.add(new _StrokeFilter2.default());
    this.filters.add(new _FillColorFilter2.default());

    this.installEditPolicy(new draw2d.policy.figure.RectangleSelectionFeedbackPolicy());
  },

  setBlur: function setBlur(value) {
    this.blur = parseInt(value);
    this.repaint();
  },

  getBlur: function getBlur() {
    return this.blur;
  },

  getPotentialFilters: function getPotentialFilters() {
    return [{ label: "Stroke", impl: "shape_designer.filter.StrokeFilter" }, { label: "Opacity", impl: "shape_designer.filter.OpacityFilter" }, { label: "Blur", impl: "shape_designer.filter.BlurFilter" }, { label: "Corner Radius", impl: "shape_designer.filter.RadiusFilter" }, { label: "Linear Gradient", impl: "shape_designer.filter.LinearGradientFilter" }, { label: "Fill Color", impl: "shape_designer.filter.FillColorFilter" }];
  },

  removeFilter: function removeFilter(filter) {
    this.filters.remove(filter);
  },

  addFilter: function addFilter(filter) {
    var alreadyIn = false;

    this.filters.each($.proxy(function (i, e) {
      alreadyIn = alreadyIn || e.NAME === filter.NAME;
    }, this));

    if (alreadyIn === true) {
      return; // silently
    }

    this.filters.add(filter);
    filter.onInstall(this);
    this.repaint();
  },

  onDoubleClick: function onDoubleClick() {
    this.installEditPolicy(new draw2d.policy.figure.VertexSelectionFeedbackPolicy());
  },

  /**
   * @method
   * Unselect the figure and propagete this event to all edit policies.
   *
   * @final
   * @private
   **/
  unselect: function unselect() {
    this._super();

    this.installEditPolicy(new draw2d.policy.figure.RectangleSelectionFeedbackPolicy());
    return this;
  },

  /**
   * @method
   * Trigger the repaint of the element.
   *
   */
  repaint: function repaint(attributes) {
    if (this.shape === null) {
      return;
    }

    if (this.svgPathString === null) {
      this.calculatePath();
    }

    if (typeof attributes === "undefined") {
      attributes = {};
    }

    attributes.path = this.svgPathString;

    this.filters.each($.proxy(function (i, filter) {
      filter.apply(this, attributes);
    }, this));

    //this.shape.blur(this.blur===0?-1:this.blur);
    /*
            if(this.filter)
            this.filter = this.canvas.paper.createFilter();
            filter.addShiftToColor("red");
            filter.addBlur(7);
            this.shape.filter(filter);
    */
    this._super(attributes);
  },

  getPersistentAttributes: function getPersistentAttributes() {
    var memento = this._super();

    memento.blur = this.blur;
    memento.filters = [];
    this.filters.each($.proxy(function (i, e) {
      var filterMemento = e.getPersistentAttributes(this);
      memento.filters.push(filterMemento);
    }, this));

    return memento;
  },

  setPersistentAttributes: function setPersistentAttributes(memento) {
    this._super(memento);

    if (typeof memento.blur !== "undefined") this.setBlur(memento.blur);

    if (typeof memento.filters !== "undefined") {
      this.filters = new draw2d.util.ArrayList();
      var sizeFilterAdded = false;
      $.each(memento.filters, $.proxy(function (i, e) {

        var filter = eval("new " + e.name + "()");
        if (filter instanceof shape_designer.filter.SizeFilter) {
          sizeFilterAdded = true;
        }
        filter.setPersistentAttributes(this, e);
        this.filters.add(filter);
      }, this));
      if (!sizeFilterAdded) {
        this.filters.insertElementAt(new shape_designer.filter.SizeFilter(), 1);
      }
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/ExtPort.js":
/*!**********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/ExtPort.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shape_designer.figure.ExtPort = draw2d.shape.basic.Circle.extend({

  NAME: "shape_designer.figure.ExtPort",

  init: function init() {
    this.isExtFigure = true;
    this.decoration = null;
    this._super({
      bgColor: "#37B1DE",
      diameter: 10
    });

    this.setUserData({
      name: "Port",
      type: "Hybrid",
      direction: null,
      fanout: 20
    });

    this.filters = new draw2d.util.ArrayList();
    this.filters.add(new shape_designer.filter.PositionFilter());
    this.filters.add(new shape_designer.filter.FanoutFilter());
    this.filters.add(new shape_designer.filter.PortDirectionFilter());
    this.filters.add(new shape_designer.filter.PortTypeFilter());

    this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
  },

  setInputType: function setInputType(type) {
    this.getUserData().type = type;
  },

  getInputType: function getInputType() {
    return this.getUserData().type;
  },

  setMaxFanOut: function setMaxFanOut(count) {
    this.getUserData().fanout = parseInt(count);
  },

  getMaxFanOut: function getMaxFanOut() {
    return this.getUserData().fanout ? this.getUserData().fanout : 20;
  },

  setConnectionDirection: function setConnectionDirection(direction) {
    this.getUserData().direction = direction;
    this.updateDecoration();
  },

  getConnectionDirection: function getConnectionDirection() {
    return this.getUserData().direction;
  },

  updateDecoration: function updateDecoration() {
    if (this.decoration !== null) {
      this.remove(this.decoration);
      this.decoration = null;
    }
    var figure = null;
    var locator = null;
    switch (this.getConnectionDirection()) {
      case 0:
        figure = new draw2d.shape.icon.ArrowUp({ width: 8, height: 8, opacity: 0.5 });
        locator = new draw2d.layout.locator.TopLocator();
        break;
      case 1:
        figure = new draw2d.shape.icon.ArrowRight({ width: 8, height: 8, opacity: 0.5 });
        locator = new draw2d.layout.locator.RightLocator();
        break;
      case 2:
        figure = new draw2d.shape.icon.ArrowDown({ width: 8, height: 8, opacity: 0.5 });
        locator = new draw2d.layout.locator.BottomLocator();
        break;
      case 3:
        figure = new draw2d.shape.icon.ArrowLeft({ width: 8, height: 8, opacity: 0.5 });
        locator = new draw2d.layout.locator.LeftLocator();
        break;
    }
    if (figure !== null) {
      this.add(figure, locator);
      this.decoration = figure;
    }
  },

  getPotentialFilters: function getPotentialFilters() {
    return [{ label: "Port Type", impl: "shape_designer.filter.PortTypeFilter" }, { label: "Port Direction", impl: "shape_designer.filter.PortDirectionFilter" }, { label: "Color", impl: "shape_designer.filter.FillColorFilter" }];
  },

  removeFilter: function removeFilter(filter) {
    this.filters.remove(filter);
  },

  addFilter: function addFilter(filter) {
    var alreadyIn = false;

    this.filters.each($.proxy(function (i, e) {
      alreadyIn = alreadyIn || e.NAME === filter.NAME;
    }, this));
    if (alreadyIn === true) {
      return; // silently
    }

    this.filters.add(filter);
    filter.onInstall(this);
    this.repaint();
  },

  /**
   * @method
   * Trigger the repaint of the element.
   *
   */
  repaint: function repaint(attributes) {
    if (this.shape === null) {
      return;
    }

    if (typeof attributes === "undefined") {
      attributes = {};
    }

    this.filters.each($.proxy(function (i, filter) {
      filter.apply(this, attributes);
    }, this));

    this._super(attributes);
  },

  getPersistentAttributes: function getPersistentAttributes() {
    var memento = this._super();

    memento.filters = [];
    this.filters.each($.proxy(function (i, e) {
      var filterMemento = e.getPersistentAttributes(this);
      memento.filters.push(filterMemento);
    }, this));

    return memento;
  },

  setPersistentAttributes: function setPersistentAttributes(memento) {
    this._super(memento);

    if (typeof memento.filters !== "undefined") {
      this.filters = new draw2d.util.ArrayList();
      var fanoutFilterAdded = false;
      $.each(memento.filters, $.proxy(function (i, e) {
        var filter = eval("new " + e.name + "()");
        if (filter instanceof shape_designer.filter.FanoutFilter) {
          fanoutFilterAdded = true;
        }
        filter.setPersistentAttributes(this, e);
        this.filters.add(filter);
      }, this));
      if (!fanoutFilterAdded) {
        this.filters.insertElementAt(new shape_designer.filter.FanoutFilter(), 1);
      }
    }
    this.updateDecoration();
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/MarkerFigure.js":
/*!***************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/MarkerFigure.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The markerFigure is the left hand side annotation for a DecoratedPort.
 *
 * It contains two children
 *
 * StateAFigure: if the mouse hover and the figure isn't permanent visible
 * StateBFigure: either the mouse is over or the user pressed the checkbox to stick the figure on the port
 *
 * This kind of decoration is usefull for defualt values on workflwos enginges or circuit diagrams
 *
 */

exports.default = shape_designer.figure.MarkerFigure = draw2d.shape.layout.VerticalLayout.extend({

  NAME: "MarkerFigure",

  init: function init(attr, setter, getter) {
    var _this = this;

    this.isMouseOver = false; // indicator if the mouse is over the element
    this.stick = false; // indicator if the stateBFigure should always be visible
    this.defaultValue = true; // current selected default value for the decoration

    this._super($.extend({
      stroke: 0
    }, attr), setter, getter);

    // figure if the decoration is not permanent visible (sticky note)
    this.add(this.stateA = new shape_designer.figure.MarkerStateAFigure({ text: "X" }));
    // figure if the decoration permanent visible
    this.add(this.stateB = new shape_designer.figure.MarkerStateBFigure({ text: "X" }));

    this.on("mouseenter", function (emitter, event) {
      _this.onMouseOver(true);
    });

    this.on("mouseleave", function (emitter, event) {
      _this.onMouseOver(false);
    });

    this.on("click", function (emitter, event) {
      if (_this.isVisible() === false) {
        return; //silently
      }

      if (_this.stateB.getStickTickFigure().getBoundingBox().hitTest(event.x, event.y) === true) {
        _this.setStick(!_this.getStick());
      } else if (_this.stateB.getLabelFigure().getBoundingBox().hitTest(event.x, event.y) === true) {
        $.contextMenu({
          selector: 'body',
          trigger: "left",
          events: {
            hide: function hide() {
              $.contextMenu('destroy');
            }
          },
          callback: $.proxy(function (key, options) {
            // propagate the default value to the port
            //
            switch (key) {
              case "high":
                _this.setDefaultValue(true);
                break;
              case "low":
                _this.setDefaultValue(false);
                break;
              default:
                break;
            }
          }, this),
          x: event.x,
          y: event.y,
          items: {
            "high": { name: "High" },
            "low": { name: "Low" }
          }
        });
      }
    });

    this.setDefaultValue(true);
    this.onMouseOver(false);
  },

  onMouseOver: function onMouseOver(flag) {
    this.isMouseOver = flag;

    if (this.visible === false) {
      return; // silently
    }

    if (this.stick === true) {
      this.stateA.setVisible(false);
      this.stateB.setVisible(true);
    } else {
      this.stateA.setVisible(!this.isMouseOver);
      this.stateB.setVisible(this.isMouseOver);
    }

    return this;
  },

  setVisible: function setVisible(flag) {
    this._super(flag);

    // update the hover/stick state of the figure
    this.onMouseOver(this.isMouseOver);

    return this;
  },

  setStick: function setStick(flag) {
    this.stick = flag;
    this.onMouseOver(this.isMouseOver);

    // the port has only a default value if the decoration is visible
    this.parent.setValue(flag ? this.defaultValue : null);

    this.stateB.setTick(this.getStick());

    return this;
  },

  getStick: function getStick() {
    return this.stick;
  },

  setText: function setText(text) {
    this.stateB.setText(text);

    return this;
  },

  setDefaultValue: function setDefaultValue(value) {
    this.defaultValue = value;
    this.setText(this.defaultValue === true ? "High" : "Low");

    // only propagate the value to the parent if the decoration permanent visible
    //
    if (this.stick === true) {
      this.parent.setValue(this.defaultValue);
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/MarkerStateAFigure.js":
/*!*********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/MarkerStateAFigure.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This is only the mouseover reactive shape. A little bit smaller than the visible shape
 *
 * Or you can display this shape with opacity of 0.2 to indicate that this is a reactive area.
 */

exports.default = shape_designer.figure.MarkerStateAFigure = draw2d.shape.basic.Label.extend({

  NAME: "MarkerStateAFigure",

  /**
   * @param attr
   */
  init: function init(attr, setter, getter) {
    this._super($.extend({
      padding: { left: 5, top: 2, bottom: 2, right: 10 },
      bgColor: null,
      stroke: 1,
      color: null,
      fontColor: null,
      fontSize: 10
    }, attr), setter, getter);

    // we must override the hitTest method to ensure that the parent can receive the mouseenter/mouseleave events.
    // Unfortunately draw2D didn't provide event bubbling like HTML. The first shape in queue consumes the event.
    //
    // now this shape is "dead" for any mouse events and the parent must/can handle this.
    this.hitTest = function () {
      return false;
    };
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/MarkerStateBFigure.js":
/*!*********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/MarkerStateBFigure.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shape_designer.figure.MarkerStateBFigure = draw2d.shape.layout.HorizontalLayout.extend({

  NAME: "MarkerStateBFigure",

  /**
   * @param attr
   */
  init: function init(attr, setter, getter) {
    this._super($.extend({
      bgColor: "#FFFFFF",
      stroke: 1,
      color: "#00bcd4",
      radius: 2,
      padding: { left: 3, top: 3, bottom: 3, right: 8 },
      gap: 5
    }, attr), setter, getter);

    this.stickTick = new draw2d.shape.basic.Circle({
      diameter: 10,
      bgColor: "#f0f0f0",
      stroke: 1,
      resizeable: false
    });
    this.add(this.stickTick);
    this.stickTick.hitTest = function () {
      return false;
    };
    this.stickTick.addCssClass("cursorPointer");

    this.label = new draw2d.shape.basic.Label({
      text: attr.text,
      resizeable: false,
      stroke: 0,
      padding: 0,
      fontSize: 10,
      fontColor: "#303030"
    });
    this.add(this.label);
    // don't catch the mouse events. This is done by the parent container
    this.label.hitTest = function () {
      return false;
    };
    this.label.addCssClass("cursorPointer");

    // we must override the hitTest method to ensure that the parent can receive the mouseenter/mouseleave events.
    // Unfortunately draw2D didn't provide event bubbling like HTML. The first shape in queue consumes the event.
    //
    // now this shape is "dead" for any mouse events and the parent must/can handle this.
    this.hitTest = function () {
      return false;
    };
  },

  setText: function setText(text) {
    this.label.setText(text);
  },

  setTick: function setTick(flag) {
    this.stickTick.attr({ bgColor: flag ? "#00bcd4" : "#f0f0f0" });
  },

  getStickTickFigure: function getStickTickFigure() {
    return this.stickTick;
  },

  getLabelFigure: function getLabelFigure() {
    return this.label;
  },

  /**
   * @method
   *
   *
   * @template
   **/
  repaint: function repaint(attributes) {
    if (this.repaintBlocked === true || this.shape === null) {
      return;
    }

    attributes = attributes || {};

    attributes.path = this.calculatePath();

    this._super(attributes);
  },

  /**
   * @method
   *
   * Override the default rendering of the HorizontalLayout, which is a simple
   * rectangle. We want an arrow.
   */
  createShapeElement: function createShapeElement() {
    return this.canvas.paper.path(this.calculatePath());
  },

  /**
   * stupid copy&paste the code from the Polygon shape...unfortunately the LayoutFigure isn't a polygon.
   *
   * @returns {string}
   */
  calculatePath: function calculatePath() {
    var arrowLength = 8;

    this.vertices = new draw2d.util.ArrayList();

    var w = this.width;
    var h = this.height;
    var pos = this.getAbsolutePosition();
    var i = 0;
    var length = 0;
    this.vertices.add(new draw2d.geo.Point(pos.x, pos.y));
    this.vertices.add(new draw2d.geo.Point(pos.x + w - arrowLength, pos.y));

    this.vertices.add(new draw2d.geo.Point(pos.x + w, pos.y + h / 2));

    this.vertices.add(new draw2d.geo.Point(pos.x + w - arrowLength, pos.y + h));
    this.vertices.add(new draw2d.geo.Point(pos.x, pos.y + h));

    var radius = this.getRadius();
    var path = [];
    // hard corners
    //
    if (radius === 0) {
      length = this.vertices.getSize();
      var p = this.vertices.get(0);
      path.push("M", (p.x | 0) + 0.5, " ", (p.y | 0) + 0.5);
      for (i = 1; i < length; i++) {
        p = this.vertices.get(i);
        path.push("L", (p.x | 0) + 0.5, " ", (p.y | 0) + 0.5);
      }
      path.push("Z");
    }
    // soften/round corners
    //
    else {
        length = this.vertices.getSize();
        var start = this.vertices.first();
        var end = this.vertices.last();
        if (start.equals(end)) {
          length = length - 1;
          end = this.vertices.get(length - 1);
        }
        var begin = draw2d.geo.Util.insetPoint(start, end, radius);
        path.push("M", (begin.x | 0) + 0.5, ",", (begin.y | 0) + 0.5);
        for (i = 0; i < length; i++) {
          start = this.vertices.get(i);
          end = this.vertices.get((i + 1) % length);
          var modStart = draw2d.geo.Util.insetPoint(start, end, radius);
          var modEnd = draw2d.geo.Util.insetPoint(end, start, radius);
          path.push("Q", start.x, ",", start.y, " ", (modStart.x | 0) + 0.5, ", ", (modStart.y | 0) + 0.5);
          path.push("L", (modEnd.x | 0) + 0.5, ",", (modEnd.y | 0) + 0.5);
        }
      }
    return path.join("");
  }

});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/PolyCircle.js":
/*!*************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/PolyCircle.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shape_designer.figure.PolyCircle = draw2d.shape.basic.Oval.extend({

  NAME: "shape_designer.figure.PolyCircle",

  init: function init(center, radius) {
    this.blur = 0;
    this.isExtFigure = true;

    // set some good defaults
    if (typeof radius === "undefined") {
      radius = 10;
    }

    this._super({ stroke: 0, bgColor: "95C06A", width: radius * 2, height: radius * 2 });

    // center must be set after the width/height...bug
    if (typeof center !== "undefined") {
      this.setCenter(center);
    }

    this.setUserData({ name: "Circle" });

    this.filters = new draw2d.util.ArrayList();
    this.filters.add(new shape_designer.filter.PositionFilter());
    this.filters.add(new shape_designer.filter.SizeFilter());
    this.filters.add(new shape_designer.filter.FillColorFilter());
  },

  getPotentialFilters: function getPotentialFilters() {
    return [{ label: "Stroke", impl: "shape_designer.filter.StrokeFilter" }, { label: "Opacity", impl: "shape_designer.filter.OpacityFilter" }, { label: "Blur", impl: "shape_designer.filter.BlurFilter" }, { label: "Linear Gradient", impl: "shape_designer.filter.LinearGradientFilter" }, { label: "Fill Color", impl: "shape_designer.filter.FillColorFilter" }];
  },

  removeFilter: function removeFilter(filter) {
    this.filters.remove(filter);
  },

  addFilter: function addFilter(filter) {
    var alreadyIn = false;

    this.filters.each($.proxy(function (i, e) {
      alreadyIn = alreadyIn || e.NAME === filter.NAME;
    }, this));

    if (alreadyIn === true) {
      return; // silently
    }

    this.filters.add(filter);
    filter.onInstall(this);
    this.repaint();
  },

  setBlur: function setBlur(value) {
    this.blur = parseInt(value);
    this.repaint();
  },

  getBlur: function getBlur() {
    return this.blur;
  },

  /**
   * @method
   * Trigger the repaint of the element.
   *
   */
  repaint: function repaint(attributes) {
    if (this.shape === null) {
      return;
    }

    this.filters.each($.proxy(function (i, filter) {
      filter.apply(this, attributes);
    }, this));

    //        this.shape.blur(this.blur);
    this._super(attributes);
  },

  getVertices: function getVertices() {

    var w2 = this.getWidth() / 2;
    var h2 = this.getHeight() / 2;
    var center = this.getCenter();
    var sides = 36;

    var vertices = new draw2d.util.ArrayList();
    for (var i = 0; i < sides; i++) {
      var radian = 2 * Math.PI * i / sides;
      var x = Math.cos(radian) * w2 + center.x;
      var y = Math.sin(radian) * h2 + center.y;
      vertices.add(new draw2d.geo.Point(x, y));
    }
    return vertices;
  },

  getPersistentAttributes: function getPersistentAttributes() {
    var memento = this._super();

    memento.blur = this.blur;
    memento.filters = [];
    this.filters.each($.proxy(function (i, e) {
      var filterMemento = e.getPersistentAttributes(this);
      memento.filters.push(filterMemento);
    }, this));

    return memento;
  },

  setPersistentAttributes: function setPersistentAttributes(memento) {
    this._super(memento);

    if (typeof memento.blur !== "undefined") this.setBlur(memento.blur);

    if (typeof memento.filters !== "undefined") {
      this.filters = new draw2d.util.ArrayList();
      $.each(memento.filters, $.proxy(function (i, e) {
        var filter = eval("new " + e.name + "()");
        filter.setPersistentAttributes(this, e);
        this.filters.add(filter);
      }, this));
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/PolyRect.js":
/*!***********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/PolyRect.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ExtPolygon = __webpack_require__(/*! ./ExtPolygon */ "../../app/frontend/designer/js/figure/ExtPolygon.js");

var _ExtPolygon2 = _interopRequireDefault(_ExtPolygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = shape_designer.figure.PolyRect = _ExtPolygon2.default.extend({

  NAME: "shape_designer.figure.PolyRect",

  init: function init(topLeft, bottomRight) {
    this._super();
    if (typeof topLeft === "undefined") {
      this.vertices = new draw2d.util.ArrayList();
      this.addVertex(new draw2d.geo.Point(100, 100));
      this.addVertex(new draw2d.geo.Point(140, 100));
      this.addVertex(new draw2d.geo.Point(140, 140));
      this.addVertex(new draw2d.geo.Point(100, 140));
    } else {
      this.vertices = new draw2d.util.ArrayList();
      this.addVertex(new draw2d.geo.Point(topLeft.x, topLeft.y));
      this.addVertex(new draw2d.geo.Point(bottomRight.x, topLeft.y));
      this.addVertex(new draw2d.geo.Point(bottomRight.x, bottomRight.y));
      this.addVertex(new draw2d.geo.Point(topLeft.x, bottomRight.y));
    }

    this.setUserData({ name: "Rectangle" });
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/TestSwitch.js":
/*!*************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/TestSwitch.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shape_designer.figure.TestSwitch = draw2d.shape.basic.Label.extend({

  NAME: "shape_designer.figure.TestSwitch",

  init: function init(attr, setter, getter) {
    this._super({ text: "Low" }, setter, getter);

    this.createPort("output");

    var _this = this;

    this.value = false;
    this.on("click", function () {
      _this.toggleValue();
      _this.getOutputPort(0).setValue(_this.value);
      _this.getOutputPort(0).getConnections().each(function (i, c) {
        c.getTarget().setValue(_this.value);
      });
    });
  },

  toggleValue: function toggleValue() {
    this.value = !this.value;
    this.attr({ text: this.value ? "High" : "Low" });
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/figure/index.js":
/*!********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/figure/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// required to register them for JSON serialize/deserialize
//
exports.default = [__webpack_require__(/*! ./ExtLabel */ "../../app/frontend/designer/js/figure/ExtLabel.js"), __webpack_require__(/*! ./DecoratedInputPort */ "../../app/frontend/designer/js/figure/DecoratedInputPort.js"), __webpack_require__(/*! ./ExtLine */ "../../app/frontend/designer/js/figure/ExtLine.js"), __webpack_require__(/*! ./ExtPolygon */ "../../app/frontend/designer/js/figure/ExtPolygon.js"), __webpack_require__(/*! ./ExtPort */ "../../app/frontend/designer/js/figure/ExtPort.js"), __webpack_require__(/*! ./MarkerFigure */ "../../app/frontend/designer/js/figure/MarkerFigure.js"), __webpack_require__(/*! ./MarkerStateAFigure */ "../../app/frontend/designer/js/figure/MarkerStateAFigure.js"), __webpack_require__(/*! ./MarkerStateBFigure */ "../../app/frontend/designer/js/figure/MarkerStateBFigure.js"), __webpack_require__(/*! ./PolyCircle */ "../../app/frontend/designer/js/figure/PolyCircle.js"), __webpack_require__(/*! ./PolyRect */ "../../app/frontend/designer/js/figure/PolyRect.js"), __webpack_require__(/*! ./TestSwitch */ "../../app/frontend/designer/js/figure/TestSwitch.js")];
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/BlurFilter.js":
/*!*************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/BlurFilter.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.BlurFilter = function (_Filter) {
  _inherits(BlurFilter, _Filter);

  function BlurFilter() {
    _classCallCheck(this, BlurFilter);

    return _possibleConstructorReturn(this, (BlurFilter.__proto__ || Object.getPrototypeOf(BlurFilter)).call(this, "shape_designer.filter.BlurFilter"));
  }

  _createClass(BlurFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#' + this.cssScope + '_width_panel">' + '     Blur' + '    <span id="button_remove_' + this.cssScope + '"><img class="svg icon pull-right" src="./images/dialog_close.svg"/></span></span>' + '</div>' + ' <div class="panel-body collapse in" id="' + this.cssScope + '_blur_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '       <input id="filter_blur" type="text" value="' + figure.getBlur() + '"  name="filter_blur" class="mousetrap-pause form-control" />' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $("#filter_blur").TouchSpin({
        min: 0,
        max: 5,
        step: 1
      });

      $("#filter_blur").on("change", $.proxy(function () {
        this.setBlur(parseInt($("#filter_blur").val()));
      }, figure));

      $("#button_remove_" + this.cssScope).on("click", $.proxy(function () {
        figure.removeFilter(this);
        figure.setBlur(0);
        $('#' + this.containerId).animate({
          "height": "0",
          "opacity": 0,
          "margin-bottom": 0
        }, 500, function () {
          $('#' + this.containerId).remove();
        });
      }, this));
    }
  }]);

  return BlurFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/FanoutFilter.js":
/*!***************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/FanoutFilter.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.FanoutFilter = function (_Filter) {
  _inherits(FanoutFilter, _Filter);

  function FanoutFilter() {
    _classCallCheck(this, FanoutFilter);

    return _possibleConstructorReturn(this, (FanoutFilter.__proto__ || Object.getPrototypeOf(FanoutFilter)).call(this, "shape_designer.filter.FanoutFilter"));
  }

  _createClass(FanoutFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#' + this.cssScope + '_width_panel">' + '     Maximal fan out' + '</div>' + ' <div class="panel-body collapse in" id="' + this.cssScope + '_width_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '       <input id="filter_' + this.cssScope + '_fanout" type="text" value="' + figure.getMaxFanOut() + '" name="filter_' + this.cssScope + '_fanout" class="mousetrap-pause form-control" />' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $("input[name='filter_" + this.cssScope + "_fanout']").TouchSpin({
        min: 0,
        max: 50,
        step: 1,
        maxboostedstep: 1,
        postfix: 'px'
      });
      $("input[name='filter_" + this.cssScope + "_fanout']").on("change", $.proxy(function () {
        this.setMaxFanOut(parseInt($("input[name='filter_" + this.cssScope + "_fanout']").val()));
      }, figure));
    }
  }, {
    key: "removePane",
    value: function removePane() {}
  }, {
    key: "onInstall",
    value: function onInstall(figure) {}
  }]);

  return FanoutFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/FillColorFilter.js":
/*!******************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/FillColorFilter.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

var _jscolor = __webpack_require__(/*! ../widget/jscolor/jscolor */ "../../app/frontend/designer/js/widget/jscolor/jscolor.js");

var _jscolor2 = _interopRequireDefault(_jscolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.FillColorFilter = function (_Filter) {
  _inherits(FillColorFilter, _Filter);

  function FillColorFilter() {
    _classCallCheck(this, FillColorFilter);

    var _this = _possibleConstructorReturn(this, (FillColorFilter.__proto__ || Object.getPrototypeOf(FillColorFilter)).call(this, "shape_designer.filter.FillColorFilter"));

    _this.colorPicker = null;
    return _this;
  }

  _createClass(FillColorFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {

      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#color_fill_panel">' + '    Color Fill' + '    <span id="button_remove_FillColorFilter"><img class="svg icon pull-right" src="./images/dialog_close.svg"/><span>' + ' </div>' + ' <div class="panel-body collapse in" id="color_fill_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '      <div class="input-group">' + '          <span class="input-group-addon">#</span>' + '          <input id="filter_color_fill" type="text" value="" name="filter_color_fill" class="mousetrap-pause form-control color"/>' + '       </div>' + '    </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      var picker = this.colorPicker = new _jscolor2.default.color(document.getElementById('filter_color_fill'), {});
      this.colorPicker.fromString(figure.getBackgroundColor().hash());
      this.colorPicker.onImmediateChange = $.proxy(function () {
        this.setBackgroundColor("#" + picker.toString());
      }, figure);

      $("#button_remove_FillColorFilter").on("click", $.proxy(function () {
        figure.removeFilter(this);
        figure.setBackgroundColor(null);
        $("#" + this.containerId).animate({ "height": "0", "opacity": 0, "margin-bottom": 0 }, 500, function () {
          $('#' + this.containerId).remove();
        });
      }, this));
    }
  }, {
    key: "onInstall",
    value: function onInstall(figure) {
      figure.setBackgroundColor("#f0f3f3");
    }
  }, {
    key: "removePane",
    value: function removePane() {
      if (this.colorPicker !== null) {
        this.colorPicker.hidePicker();
      }
    }
  }]);

  return FillColorFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/Filter.js":
/*!*********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/Filter.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function () {
  function Filter(name) {
    _classCallCheck(this, Filter);

    this.NAME = name;
    this.colorPicker = null;
    this.cssScope = this.NAME.replace(/[.]/g, "_");
    this.containerId = this.cssScope + "_container";
  }

  /**
   * @method
   * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
   * can be used to identify the type of event which has occurred.
   *
   * @template
   *
   **/


  _createClass(Filter, [{
    key: "apply",
    value: function apply(figure, attributes) {}
  }, {
    key: "onInstall",
    value: function onInstall(figure) {}
  }, {
    key: "insertPane",
    value: function insertPane(figure, $parent) {}
  }, {
    key: "removePane",
    value: function removePane() {}
  }, {
    key: "getPersistentAttributes",
    value: function getPersistentAttributes(relatedFigure) {
      var memento = {};
      memento.name = this.NAME;

      return memento;
    }
  }, {
    key: "setPersistentAttributes",
    value: function setPersistentAttributes(relatedFigure, memento) {}
  }]);

  return Filter;
}();

exports.default = Filter;
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/FontColorFilter.js":
/*!******************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/FontColorFilter.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jscolor = __webpack_require__(/*! ../widget/jscolor/jscolor */ "../../app/frontend/designer/js/widget/jscolor/jscolor.js");

var _jscolor2 = _interopRequireDefault(_jscolor);

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.FontColorFilter = function (_Filter) {
  _inherits(FontColorFilter, _Filter);

  function FontColorFilter() {
    _classCallCheck(this, FontColorFilter);

    var _this = _possibleConstructorReturn(this, (FontColorFilter.__proto__ || Object.getPrototypeOf(FontColorFilter)).call(this, "shape_designer.filter.FontColorFilter"));

    _this.colorPicker = null;
    return _this;
  }

  _createClass(FontColorFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this2 = this;

      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#color_fill_panel">' + '    Font Color' + '    <span id="button_remove_FillColorFilter"><img class="svg icon pull-right" src="./images/dialog_close.svg"/></span>' + ' </div>' + ' <div class="panel-body collapse in" id="color_fill_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '      <div class="input-group">' + '          <span class="input-group-addon">#</span>' + '          <input id="filter_color_fill" type="text" value="" name="filter_color_fill" class="mousetrap-pause form-control color"/>' + '       </div>' + '    </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      var picker = this.colorPicker = new _jscolor2.default.color(document.getElementById('filter_color_fill'), {});
      this.colorPicker.fromString(figure.getFontColor().hash());
      this.colorPicker.onImmediateChange = $.proxy(function () {
        this.setFontColor("#" + picker.toString());
      }, figure);

      $("#button_remove_FillColorFilter").on("click", function () {
        figure.removeFilter(_this2);
        figure.setFontColor(null);
        $("#" + _this2.containerId).animate({ "height": "0", "opacity": 0, "margin-bottom": 0 }, 500, function () {
          $('#' + _this2.containerId).remove();
        });
      });
    }
  }, {
    key: "onInstall",
    value: function onInstall(figure) {
      figure.setFontColor("#000000");
    }
  }, {
    key: "removePane",
    value: function removePane() {
      if (this.colorPicker !== null) {
        this.colorPicker.hidePicker();
      }
    }
  }]);

  return FontColorFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/FontSizeFilter.js":
/*!*****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/FontSizeFilter.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.FontSizeFilter = function (_Filter) {
  _inherits(FontSizeFilter, _Filter);

  function FontSizeFilter() {
    _classCallCheck(this, FontSizeFilter);

    return _possibleConstructorReturn(this, (FontSizeFilter.__proto__ || Object.getPrototypeOf(FontSizeFilter)).call(this, "shape_designer.filter.FontSizeFilter"));
  }

  _createClass(FontSizeFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this2 = this;

      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#fontsize_width_panel">' + '     Font Size' + '    <span id="button_remove_FontSizeFilter"><img  class="svg icon pull-right" src="./images/dialog_close.svg"/></span>' + '</div>' + ' <div class="panel-body collapse in" id="fontsize_width_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '       <input id="filter_fontsize" type="text" value="' + figure.getFontSize() + '" name="filter_fontsize" class="mousetrap-pause form-control" />' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $("#filter_fontsize").TouchSpin({
        min: 4,
        max: 300,
        step: 1,
        boostat: figure.getFontSize(),
        maxboostedstep: 10,
        postfix: 'px'
      });

      $("input[name='filter_fontsize']").on("change", $.proxy(function () {
        this.setFontSize(parseInt($("input[name='filter_fontsize']").val()));
      }, figure));

      $("#button_remove_FontSizeFilter").on("click", function () {
        figure.removeFilter(_this2);
        figure.setFontSize(12);
        $("#" + _this2.containerId).animate({ "height": "0", "opacity": 0, "margin-bottom": 0 }, 500, function () {
          $('#' + _this2.containerId).remove();
        });
      });
    }
  }, {
    key: "removePane",
    value: function removePane() {}
  }, {
    key: "onInstall",
    value: function onInstall(figure) {
      //   figure.setFontSize(1);
    }
  }]);

  return FontSizeFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/LinearGradientFilter.js":
/*!***********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/LinearGradientFilter.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jscolor = __webpack_require__(/*! ../widget/jscolor/jscolor */ "../../app/frontend/designer/js/widget/jscolor/jscolor.js");

var _jscolor2 = _interopRequireDefault(_jscolor);

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

__webpack_require__(/*! ../widget/ui.anglepicker */ "../../app/frontend/designer/js/widget/ui.anglepicker.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.LinearGradientFilter = function (_Filter) {
  _inherits(LinearGradientFilter, _Filter);

  function LinearGradientFilter() {
    _classCallCheck(this, LinearGradientFilter);

    var _this = _possibleConstructorReturn(this, (LinearGradientFilter.__proto__ || Object.getPrototypeOf(LinearGradientFilter)).call(this, "shape_designer.filter.LinearGradientFilter"));

    _this.colorPicker1 = null;
    _this.colorPicker2 = null;

    _this.startColor = "#f0f0f0";
    _this.endColor = "#3f3f3f";
    _this.angle = 0;
    return _this;
  }

  _createClass(LinearGradientFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this2 = this;

      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#' + this.cssScope + '_panel">' + '     Linear Gradient' + '    <span id="button_remove_' + this.cssScope + '"><img  class="svg icon pull-right" src="./images/dialog_close.svg"/></span>' + '</div>' + ' <div class="panel-body collapse in" id="' + this.cssScope + '_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '      <div class="input-group text-center" style="width:100%" >' + '           <div id="' + this.cssScope + '_angle" />' + '      </div> ' + '       <div class="input-group">' + '          <span class="input-group-addon">#</span>' + '          <input id="' + this.cssScope + '_color1" type="text" value="' + this.startColor + '" class="mousetrap-pause form-control color"/>' + '       </div>' + '       <div class="input-group">' + '          <span class="input-group-addon">#</span>' + '          <input id="' + this.cssScope + '_color2" type="text" value="' + this.endColor + '" class="mousetrap-pause form-control color"/>' + '       </div>' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $('#' + this.cssScope + '_angle').anglepicker({
        start: function start(e, ui) {},
        change: function change(e, ui) {
          _this2.angle = ui.value;
          figure.repaint();
        },
        stop: function stop(e, ui) {},
        value: this.angle
      });

      var picker1 = this.colorPicker1 = new _jscolor2.default.color($("#" + this.cssScope + '_color1')[0], {});
      this.colorPicker1.fromString(this.startColor);
      this.colorPicker1.onImmediateChange = function () {
        _this2.startColor = "#" + picker1.toString();
        figure.repaint();
      };

      var picker2 = this.colorPicker2 = new _jscolor2.default.color($("#" + this.cssScope + '_color2')[0], {});
      this.colorPicker2.fromString(this.endColor);
      this.colorPicker2.onImmediateChange = function () {
        _this2.endColor = "#" + picker2.toString();
        figure.repaint();
      };

      $("#button_remove_" + this.cssScope).on("click", function () {
        figure.removeFilter(_this2);
        $('#' + _this2.containerId).animate({
          "height": "0",
          "opacity": 0,
          "margin-bottom": 0
        }, 500, function () {
          $('#' + _this2.containerId).remove();
        });
      });
    }
  }, {
    key: "apply",
    value: function apply(figure, attributes) {
      attributes.fill = this.angle + "-" + this.endColor + "-" + this.startColor;
    }
  }, {
    key: "removePane",
    value: function removePane() {
      if (this.colorPicker1 !== null) {
        this.colorPicker1.hidePicker();
      }
      if (this.colorPicker2 !== null) {
        this.colorPicker2.hidePicker();
      }
    }
  }, {
    key: "onInstall",
    value: function onInstall(figure) {
      figure.setStroke(1);
    }
  }, {
    key: "getPersistentAttributes",
    value: function getPersistentAttributes(relatedFigure) {
      var memento = _get(LinearGradientFilter.prototype.__proto__ || Object.getPrototypeOf(LinearGradientFilter.prototype), "getPersistentAttributes", this).call(this, relatedFigure);

      memento.startColor = this.startColor;
      memento.endColor = this.endColor;
      memento.angle = this.angle;

      return memento;
    }
  }, {
    key: "setPersistentAttributes",
    value: function setPersistentAttributes(relatedFigure, memento) {
      _get(LinearGradientFilter.prototype.__proto__ || Object.getPrototypeOf(LinearGradientFilter.prototype), "setPersistentAttributes", this).call(this, relatedFigure, memento);

      this.startColor = memento.startColor;
      this.endColor = memento.endColor;
      this.angle = memento.angle;

      return memento;
    }
  }]);

  return LinearGradientFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/OpacityFilter.js":
/*!****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/OpacityFilter.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.OpacityFilter = function (_Filter) {
  _inherits(OpacityFilter, _Filter);

  function OpacityFilter() {
    _classCallCheck(this, OpacityFilter);

    return _possibleConstructorReturn(this, (OpacityFilter.__proto__ || Object.getPrototypeOf(OpacityFilter)).call(this, "shape_designer.filter.OpacityFilter"));
  }

  _createClass(OpacityFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this2 = this;

      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#opacity_panel">' + '    Opacity' + '    <span id="button_remove_OpacityFilter"><img  class="svg icon pull-right" src="./images/dialog_close.svg"/></span>' + '</div>' + ' <div class="panel-body collapse in" id="opacity_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '      <div class="input-group">' + '         <input class="mousetrap-pause form-control" id="filter_opacity" type="text" value="' + parseInt(figure.getAlpha() * 100) + '" />' + '      </div>' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $("#filter_opacity").TouchSpin({
        min: 0,
        max: 100,
        step: 5,
        boostat: parseInt(figure.getAlpha() * 100),
        maxboostedstep: 10,
        postfix: '%'
      });
      $("#filter_opacity").on("change", $.proxy(function () {
        this.setAlpha(parseInt($("#filter_opacity").val()) / 100.0);
      }, figure));

      $("#button_remove_OpacityFilter").on("click", function () {
        figure.removeFilter(_this2);
        figure.setAlpha(1);
        $("#" + _this2.containerId).animate({ "height": "0", "opacity": 0, "margin-bottom": 0 }, 500, function () {
          $('#' + _this2.containerId).remove();
        });
      });
    }
  }, {
    key: "removePane",
    value: function removePane() {}
  }]);

  return OpacityFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/OutlineStrokeFilter.js":
/*!**********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/OutlineStrokeFilter.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jscolor = __webpack_require__(/*! ../widget/jscolor/jscolor */ "../../app/frontend/designer/js/widget/jscolor/jscolor.js");

var _jscolor2 = _interopRequireDefault(_jscolor);

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.OutlineStrokeFilter = function (_Filter) {
  _inherits(OutlineStrokeFilter, _Filter);

  function OutlineStrokeFilter() {
    _classCallCheck(this, OutlineStrokeFilter);

    var _this = _possibleConstructorReturn(this, (OutlineStrokeFilter.__proto__ || Object.getPrototypeOf(OutlineStrokeFilter)).call(this, "shape_designer.filter.OutlineStrokeFilter"));

    _this.colorPicker = null;
    return _this;
  }

  _createClass(OutlineStrokeFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this2 = this;

      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#outlinestroke_width_panel">' + '     Outline Stroke' + '    <img id="button_remove_OutlineStrokeFilter" class="icon pull-right" src="./images/dialog_close.svg"/>' + '</div>' + ' <div class="panel-body collapse in" id="outlinestroke_width_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '       <input id="filter_outlinestroke" type="text" value="' + figure.getOutlineStroke() + '" name="filter_outlinestroke" class="mousetrap-pause form-control" />' + '       <div class="input-group">' + '          <span class="input-group-addon">#</span>' + '          <input id="filter_outlinestroke_color" type="text" value="" name="outlinestroke-color" class="mousetrap-pause form-control color"/>' + '       </div>' + '   </div>' + ' </div>' + '</div>');

      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $("input[name='filter_outlinestroke']").TouchSpin({
        min: 0,
        max: 50,
        step: 1,
        boostat: figure.getOutlineStroke(),
        maxboostedstep: 10,
        postfix: 'px'
      }).on("change", $.proxy(function () {
        this.setOutlineStroke(parseFloat($("input[name='filter_outlinestroke']").val()));
      }, figure));

      var picker = this.colorPicker = new _jscolor2.default.color(document.getElementById('filter_outlinestroke_color'), {});
      this.colorPicker.fromString(figure.getOutlineColor().hash());
      this.colorPicker.onImmediateChange = $.proxy(function () {
        this.setOutlineColor("#" + picker.toString());
      }, figure);

      $("#button_remove_OutlineStrokeFilter").on("click", function () {
        figure.removeFilter(_this2);
        figure.setOutlineStroke(0);
        $("#" + _this2.containerId).animate({ "height": "0", "opacity": 0, "margin-bottom": 0 }, 500, function () {
          $('#' + _this2.containerId).remove();
        });
      });
    }
  }, {
    key: "removePane",
    value: function removePane() {
      if (this.colorPicker !== null) {
        this.colorPicker.hidePicker();
      }
    }
  }, {
    key: "onInstall",
    value: function onInstall(figure) {
      figure.setOutlineStroke(1);
      figure.setOutlineColor("#ff0000");
    }
  }]);

  return OutlineStrokeFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/PortDirectionFilter.js":
/*!**********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/PortDirectionFilter.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.PortDirectionFilter = function (_Filter) {
  _inherits(PortDirectionFilter, _Filter);

  function PortDirectionFilter() {
    _classCallCheck(this, PortDirectionFilter);

    return _possibleConstructorReturn(this, (PortDirectionFilter.__proto__ || Object.getPrototypeOf(PortDirectionFilter)).call(this, "shape_designer.filter.PortDirectionFilter"));
  }

  _createClass(PortDirectionFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this = this;
      var dir = figure.getConnectionDirection();
      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#' + this.cssScope + '_panel">' + '     Connection Direction' + '</div>' + ' <div class="panel-body collapse in" id="' + this.cssScope + '_panel">' + '   <div class="form-group portDirectionOption">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings

      '<label>' + '  <input ' + (dir === 0 ? ' checked="checked"' : '') + ' type="radio" value="" name="' + this.cssScope + '_label" name="' + this.cssScope + '_label" data-dir="0" />' + '  <span  title="up" class="glyphicon glyphicon-arrow-up"></span>' + '</label>' + '<br>' + '<label>' + '  <input ' + (dir === 3 ? ' checked="checked"' : '') + 'type="radio" value="" name="' + this.cssScope + '_label" name="' + this.cssScope + '_label" data-dir="3" />' + '  <span  title="left" class="glyphicon glyphicon-arrow-left"></span>' + '</label>' + '<label>' + '  <input ' + (dir === null ? ' checked="checked"' : '') + 'type="radio" value="" name="' + this.cssScope + '_label" name="' + this.cssScope + '_label" data-dir="null" />' + '  <span title="automatic" class="glyphicon glyphicon-screenshot"></span>' + '</label>' + '<label>' + '  <input ' + (dir === 1 ? ' checked="checked"' : '') + 'type="radio" value="" name="' + this.cssScope + '_label" name="' + this.cssScope + '_label" data-dir="1" />' + '  <span title="right"  class="glyphicon glyphicon-arrow-right"></span>' + '</label>' + '<br>' + '<label>' + '  <input ' + (dir === 2 ? ' checked="checked"' : '') + 'type="radio" value="" name="' + this.cssScope + '_label" name="' + this.cssScope + '_label" data-dir="2" />' + '  <span  title="down" class="glyphicon glyphicon-arrow-down"></span>' + '</label>' + '       </div>' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $("#" + _this.cssScope + "_panel .portDirectionOption input").on("change", function (event) {
        figure.setConnectionDirection($(event.currentTarget).data("dir"));
      });
    }
  }, {
    key: "removePane",
    value: function removePane() {}
  }, {
    key: "onInstall",
    value: function onInstall(figure) {}
  }, {
    key: "getPersistentAttributes",
    value: function getPersistentAttributes(relatedFigure) {
      var memento = _get(PortDirectionFilter.prototype.__proto__ || Object.getPrototypeOf(PortDirectionFilter.prototype), "getPersistentAttributes", this).call(this, relatedFigure);

      return memento;
    }
  }, {
    key: "setPersistentAttributes",
    value: function setPersistentAttributes(relatedFigure, memento) {
      _get(PortDirectionFilter.prototype.__proto__ || Object.getPrototypeOf(PortDirectionFilter.prototype), "setPersistentAttributes", this).call(this, relatedFigure, memento);

      return memento;
    }
  }]);

  return PortDirectionFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/PortTypeFilter.js":
/*!*****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/PortTypeFilter.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.PortTypeFilter = function (_Filter) {
  _inherits(PortTypeFilter, _Filter);

  function PortTypeFilter() {
    _classCallCheck(this, PortTypeFilter);

    return _possibleConstructorReturn(this, (PortTypeFilter.__proto__ || Object.getPrototypeOf(PortTypeFilter)).call(this, "shape_designer.filter.PortTypeFilter"));
  }

  _createClass(PortTypeFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this = this;
      var type = figure.getInputType();
      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#' + this.cssScope + '_panel">' + '     Port Type' + '</div>' + ' <div class="panel-body collapse in" id="' + this.cssScope + '_panel">' + '   <div class="form-group portTypeOption">' + '<label>' + '  <input ' + (type == 'Input' ? ' checked="checked"' : '') + 'type="radio" value="" name="' + this.cssScope + '_label" name="' + this.cssScope + '_label" data-type="Input" />' + '  <span  title="down" class="icon ion-log-in">input</span>' + '</label>' + '<br>' + '<label>' + '  <input ' + (type == 'Output' ? ' checked="checked"' : '') + 'type="radio" value="" name="' + this.cssScope + '_label" name="' + this.cssScope + '_label" data-type="Output" />' + '  <span  title="down" class="icon ion-log-out">output</span>' + '</label>' + '<br>' + '<label>' + '  <input ' + (type == 'Hybrid' ? ' checked="checked"' : '') + 'type="radio" value="" name="' + this.cssScope + '_label" name="' + this.cssScope + '_label" data-type="Hybrid" />' + '  <span  title="down" class="icon ion-ios-circle-outline">unspecified</span>' + '</label>' + '       </div>' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $("#" + _this.cssScope + "_panel .portTypeOption input").on("change", function (event) {
        figure.setInputType($(event.currentTarget).data("type"));
      });
    }
  }, {
    key: "removePane",
    value: function removePane() {}
  }, {
    key: "onInstall",
    value: function onInstall(figure) {}
  }, {
    key: "getPersistentAttributes",
    value: function getPersistentAttributes(relatedFigure) {
      var memento = _get(PortTypeFilter.prototype.__proto__ || Object.getPrototypeOf(PortTypeFilter.prototype), "getPersistentAttributes", this).call(this, relatedFigure);

      return memento;
    }
  }, {
    key: "setPersistentAttributes",
    value: function setPersistentAttributes(relatedFigure, memento) {
      _get(PortTypeFilter.prototype.__proto__ || Object.getPrototypeOf(PortTypeFilter.prototype), "setPersistentAttributes", this).call(this, relatedFigure, memento);

      return memento;
    }
  }]);

  return PortTypeFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/PositionFilter.js":
/*!*****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/PositionFilter.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.PositionFilter = function (_Filter) {
  _inherits(PositionFilter, _Filter);

  function PositionFilter() {
    _classCallCheck(this, PositionFilter);

    return _possibleConstructorReturn(this, (PositionFilter.__proto__ || Object.getPrototypeOf(PositionFilter)).call(this, "shape_designer.filter.PositionFilter"));
  }

  _createClass(PositionFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this2 = this;

      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#position_width_panel">' + '     Position' + '</div>' + ' <div class="panel-body  collapse in" id="position_width_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '       <input id="filter_position_x" type="text" value="' + parseFloat(figure.getPosition().x) + '" name="filter_position_x" class="mousetrap-pause form-control" />' + '       <input id="filter_position_y" type="text" value="' + parseFloat(figure.getPosition().y) + '" name="filter_position_y" class="mousetrap-pause form-control" />' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $("#filter_position_x").TouchSpin({
        min: 0,
        max: 10000,
        step: 1,
        maxboostedstep: 10,
        postfix: 'X'
      });

      $("#filter_position_y").TouchSpin({
        min: 0,
        max: 10000,
        step: 1,
        maxboostedstep: 10,
        postfix: 'Y'
      });

      $("input[name='filter_position_x']").on("change", function () {
        try {
          _this2.block = true;
          var pos = figure.getPosition();
          figure.setPosition(parseFloat($("input[name='filter_position_x']").val()), pos.y);
        } finally {
          _this2.block = false;
        }
      });

      $("input[name='filter_position_y']").on("change", function () {
        try {
          _this2.block = true;
          var pos = figure.getPosition();
          figure.setPosition(pos.x, parseFloat($("input[name='filter_position_y']").val()));
        } finally {
          _this2.block = false;
        }
      });
    }
  }, {
    key: "apply",
    value: function apply(figure, attributes) {
      if (this.block === true) {
        return;
      }
      var pos = figure.getPosition();
      $("input[name='filter_position_y']").val(pos.y);
      $("input[name='filter_position_x']").val(pos.x);
    }
  }, {
    key: "removePane",
    value: function removePane() {}
  }, {
    key: "onInstall",
    value: function onInstall(figure) {}
  }]);

  return PositionFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/RadiusFilter.js":
/*!***************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/RadiusFilter.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.RadiusFilter = function (_Filter) {
  _inherits(RadiusFilter, _Filter);

  function RadiusFilter() {
    _classCallCheck(this, RadiusFilter);

    return _possibleConstructorReturn(this, (RadiusFilter.__proto__ || Object.getPrototypeOf(RadiusFilter)).call(this, "shape_designer.filter.RadiusFilter"));
  }

  _createClass(RadiusFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this2 = this;

      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#radius_panel">' + '    Corner Radius' + '    <span id="button_remove_RadiusFilter"><img class="svg icon pull-right" src="./images/dialog_close.svg"/></span>' + '</div>' + ' <div class="panel-body collapse in" id="radius_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '      <div class="input-group">' + '         <input class="mousetrap-pause form-control" id="filter_radius" type="text" value="' + figure.getRadius() + '" />' + '      </div>' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $("#filter_radius").TouchSpin({
        min: 0,
        max: 200,
        step: 1,
        maxboostedstep: 10,
        postfix: 'px'
      });
      $("#filter_radius").on("change", $.proxy(function () {
        this.setRadius(parseInt($("#filter_radius").val()));
      }, figure));

      $("#button_remove_RadiusFilter").on("click", function () {
        figure.removeFilter(_this2);
        figure.setRadius(0);
        $("#" + _this2.containerId).animate({ "height": "0", "opacity": 0, "margin-bottom": 0 }, 500, function () {
          $('#' + _this2.containerId).remove();
        });
      });
    }
  }, {
    key: "removePane",
    value: function removePane() {}
  }]);

  return RadiusFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/SizeFilter.js":
/*!*************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/SizeFilter.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.SizeFilter = function (_Filter) {
  _inherits(SizeFilter, _Filter);

  function SizeFilter() {
    _classCallCheck(this, SizeFilter);

    return _possibleConstructorReturn(this, (SizeFilter.__proto__ || Object.getPrototypeOf(SizeFilter)).call(this, "shape_designer.filter.SizeFilter"));
  }

  _createClass(SizeFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this2 = this;

      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#size_width_panel">' + '     Size' + ' </div>' + ' <div class="panel-body  collapse in" id="size_width_panel">' + '   <div class="form-group">' + '       <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '       <input id="filter_width"  type="text" value="' + figure.getWidth() + '"  name="filter_width"  class="mousetrap-pause form-control" />' + '       <input id="filter_height" type="text" value="' + figure.getHeight() + '" name="filter_height" class="mousetrap-pause form-control" />' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $("#filter_width").TouchSpin({
        min: 0,
        max: 600,
        step: 1,
        maxboostedstep: 10,
        postfix: 'width'
      });

      $("#filter_height").TouchSpin({
        min: 0,
        max: 600,
        step: 1,
        maxboostedstep: 10,
        postfix: 'height'
      });

      $("input[name='filter_width']").on("change", function () {
        try {
          _this2.block = true;
          figure.setWidth(parseInt($("input[name='filter_width']").val()));
        } finally {
          _this2.block = false;
        }
      });

      $("input[name='filter_height']").on("change", function () {
        try {
          _this2.block = true;
          figure.setHeight(parseInt($("input[name='filter_height']").val()));
        } finally {
          _this2.block = false;
        }
      });
    }
  }, {
    key: "apply",
    value: function apply(figure, attributes) {
      if (this.block === true) {
        return;
      }

      $("input[name='filter_width']").val(figure.getWidth());
      $("input[name='filter_height']").val(figure.getHeight());
    }
  }, {
    key: "removePane",
    value: function removePane() {}
  }, {
    key: "onInstall",
    value: function onInstall(figure) {}
  }]);

  return SizeFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/StrokeFilter.js":
/*!***************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/StrokeFilter.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jscolor = __webpack_require__(/*! ../widget/jscolor/jscolor */ "../../app/frontend/designer/js/widget/jscolor/jscolor.js");

var _jscolor2 = _interopRequireDefault(_jscolor);

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.StrokeFilter = function (_Filter) {
  _inherits(StrokeFilter, _Filter);

  function StrokeFilter() {
    _classCallCheck(this, StrokeFilter);

    return _possibleConstructorReturn(this, (StrokeFilter.__proto__ || Object.getPrototypeOf(StrokeFilter)).call(this, "shape_designer.filter.StrokeFilter"));
  }

  _createClass(StrokeFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this2 = this;

      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#' + this.cssScope + '_width_panel">' + '     Stroke' + '    <span id="button_remove_' + this.cssScope + '"><img  class="svg icon pull-right" src="./images/dialog_close.svg"/></span>' + '</div>' + ' <div class="panel-body collapse in" id="' + this.cssScope + '_width_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '       <input id="filter_' + this.cssScope + '_width" type="text" value="' + figure.getStroke() + '" name="filter_' + this.cssScope + '_width" class="mousetrap-pause form-control" />' + '       <div class="input-group">' + '          <span class="input-group-addon">#</span>' + '          <input id="filter_' + this.cssScope + '_color" type="text" value="" name="stroke_' + this.cssScope + '_color" class="mousetrap-pause form-control color"/>' + '       </div>' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $("input[name='filter_" + this.cssScope + "_width']").TouchSpin({
        min: 0,
        max: 50,
        step: 1,
        maxboostedstep: 1,
        postfix: 'px'
      });
      $("input[name='filter_" + this.cssScope + "_width']").on("change", $.proxy(function () {
        this.setStroke(parseInt($("input[name='filter_" + this.cssScope + "_width']").val()));
      }, figure));

      var picker = this.colorPicker = new _jscolor2.default.color(document.getElementById('filter_' + this.cssScope + '_color'), {});
      this.colorPicker.fromString(figure.getColor().hash());
      this.colorPicker.onImmediateChange = $.proxy(function () {
        this.setColor("#" + picker.toString());
      }, figure);

      $("#button_remove_" + this.cssScope).on("click", function () {
        figure.removeFilter(_this2);
        figure.setStroke(0);
        $("#" + _this2.containerId).animate({ "height": "0", "opacity": 0, "margin-bottom": 0 }, 500, function () {
          $('#' + _this2.containerId).remove();
        });
      });
    }
  }, {
    key: "removePane",
    value: function removePane() {
      if (this.colorPicker !== null) {
        this.colorPicker.hidePicker();
      }
    }
  }, {
    key: "onInstall",
    value: function onInstall(figure) {
      figure.setStroke(1);
    }
  }]);

  return StrokeFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/TextLinearGradientFilter.js":
/*!***************************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/TextLinearGradientFilter.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jscolor = __webpack_require__(/*! ../widget/jscolor/jscolor */ "../../app/frontend/designer/js/widget/jscolor/jscolor.js");

var _jscolor2 = _interopRequireDefault(_jscolor);

var _Filter2 = __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js");

var _Filter3 = _interopRequireDefault(_Filter2);

__webpack_require__(/*! ../widget/ui.anglepicker */ "../../app/frontend/designer/js/widget/ui.anglepicker.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = shape_designer.filter.TextLinearGradientFilter = function (_Filter) {
  _inherits(TextLinearGradientFilter, _Filter);

  function TextLinearGradientFilter() {
    _classCallCheck(this, TextLinearGradientFilter);

    var _this = _possibleConstructorReturn(this, (TextLinearGradientFilter.__proto__ || Object.getPrototypeOf(TextLinearGradientFilter)).call(this, "shape_designer.filter.TextLinearGradientFilter"));

    _this.colorPicker1 = null;
    _this.colorPicker2 = null;
    _this.startColor = "#f0f0f0";
    _this.endColor = "#3f3f3f";
    _this.angle = 0;
    return _this;
  }

  _createClass(TextLinearGradientFilter, [{
    key: "insertPane",
    value: function insertPane(figure, $parent) {
      var _this2 = this;

      $parent.append('<div id="' + this.containerId + '" class="panel panel-default">' + ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#' + this.cssScope + '_panel">' + '     Linear Gradient' + '    <span id="button_remove_' + this.cssScope + '"><img  class="svg icon pull-right" src="./images/dialog_close.svg"/></span>' + '</div>' + ' <div class="panel-body collapse in" id="' + this.cssScope + '_panel">' + '   <div class="form-group">' + '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '      <div class="input-group text-center" style="width:100%" >' + '           <div id="' + this.cssScope + '_angle" />' + '      </div> ' + '       <div class="input-group">' + '          <span class="input-group-addon">#</span>' + '          <input id="' + this.cssScope + '_color1" type="text" value="' + this.startColor + '" class="mousetrap-pause form-control color"/>' + '       </div>' + '       <div class="input-group">' + '          <span class="input-group-addon">#</span>' + '          <input id="' + this.cssScope + '_color2" type="text" value="' + this.endColor + '" class="mousetrap-pause form-control color"/>' + '       </div>' + '   </div>' + ' </div>' + '</div>');
      inlineSVG.init({ svgSelector: "#" + this.containerId + " img.svg" });

      $('#' + this.cssScope + '_angle').anglepicker({
        start: function start(e, ui) {},
        change: function change(e, ui) {
          _this2.angle = ui.value;
          figure.repaint();
        },
        stop: function stop(e, ui) {},
        value: this.angle
      });

      var picker1 = this.colorPicker1 = new _jscolor2.default.color($("#" + this.cssScope + '_color1')[0], {});
      this.colorPicker1.fromString(this.startColor);
      this.colorPicker1.onImmediateChange = function () {
        _this2.startColor = "#" + picker1.toString();
        figure.repaint();
      };

      var picker2 = this.colorPicker2 = new _jscolor2.default.color($("#" + this.cssScope + '_color2')[0], {});
      this.colorPicker2.fromString(this.endColor);
      this.colorPicker2.onImmediateChange = function () {
        _this2.endColor = "#" + picker2.toString();
        figure.repaint();
      };

      $("#button_remove_" + this.cssScope).on("click", function () {
        figure.removeFilter(_this2);
        $('#' + _this2.containerId).animate({
          "height": "0",
          "opacity": 0,
          "margin-bottom": 0
        }, 500, function () {
          $('#' + _this2.containerId).remove();
        });
      });
    }
  }, {
    key: "apply",
    value: function apply(figure, attributes, lattr) {
      lattr.fill = this.angle + "-" + this.endColor + "-" + this.startColor;
    }
  }, {
    key: "removePane",
    value: function removePane() {
      if (this.colorPicker1 !== null) {
        this.colorPicker1.hidePicker();
      }
      if (this.colorPicker2 !== null) {
        this.colorPicker2.hidePicker();
      }
    }
  }, {
    key: "onInstall",
    value: function onInstall(figure) {}
  }, {
    key: "getPersistentAttributes",
    value: function getPersistentAttributes(relatedFigure) {
      var memento = _get(TextLinearGradientFilter.prototype.__proto__ || Object.getPrototypeOf(TextLinearGradientFilter.prototype), "getPersistentAttributes", this).call(this, relatedFigure);

      memento.startColor = this.startColor;
      memento.endColor = this.endColor;
      memento.angle = this.angle;

      return memento;
    }
  }, {
    key: "setPersistentAttributes",
    value: function setPersistentAttributes(relatedFigure, memento) {
      _get(TextLinearGradientFilter.prototype.__proto__ || Object.getPrototypeOf(TextLinearGradientFilter.prototype), "setPersistentAttributes", this).call(this, relatedFigure, memento);

      this.startColor = memento.startColor;
      this.endColor = memento.endColor;
      this.angle = memento.angle;

      return memento;
    }
  }]);

  return TextLinearGradientFilter;
}(_Filter3.default);

module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/filter/index.js":
/*!********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/filter/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// required to register them for JSON serialize/deserialize
//
exports.default = [__webpack_require__(/*! ./BlurFilter */ "../../app/frontend/designer/js/filter/BlurFilter.js"), __webpack_require__(/*! ./FanoutFilter */ "../../app/frontend/designer/js/filter/FanoutFilter.js"), __webpack_require__(/*! ./FillColorFilter */ "../../app/frontend/designer/js/filter/FillColorFilter.js"), __webpack_require__(/*! ./Filter */ "../../app/frontend/designer/js/filter/Filter.js"), __webpack_require__(/*! ./FontColorFilter */ "../../app/frontend/designer/js/filter/FontColorFilter.js"), __webpack_require__(/*! ./FontSizeFilter */ "../../app/frontend/designer/js/filter/FontSizeFilter.js"), __webpack_require__(/*! ./LinearGradientFilter */ "../../app/frontend/designer/js/filter/LinearGradientFilter.js"), __webpack_require__(/*! ./OpacityFilter */ "../../app/frontend/designer/js/filter/OpacityFilter.js"), __webpack_require__(/*! ./OutlineStrokeFilter */ "../../app/frontend/designer/js/filter/OutlineStrokeFilter.js"), __webpack_require__(/*! ./PortDirectionFilter */ "../../app/frontend/designer/js/filter/PortDirectionFilter.js"), __webpack_require__(/*! ./PortTypeFilter */ "../../app/frontend/designer/js/filter/PortTypeFilter.js"), __webpack_require__(/*! ./PositionFilter */ "../../app/frontend/designer/js/filter/PositionFilter.js"), __webpack_require__(/*! ./RadiusFilter */ "../../app/frontend/designer/js/filter/RadiusFilter.js"), __webpack_require__(/*! ./SizeFilter */ "../../app/frontend/designer/js/filter/SizeFilter.js"), __webpack_require__(/*! ./StrokeFilter */ "../../app/frontend/designer/js/filter/StrokeFilter.js"), __webpack_require__(/*! ./TextLinearGradientFilter */ "../../app/frontend/designer/js/filter/TextLinearGradientFilter.js")];
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/global.js":
/*!**************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/global.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DecoratedInputPort = __webpack_require__(/*! ./figure/DecoratedInputPort */ "../../app/frontend/designer/js/figure/DecoratedInputPort.js");

var _DecoratedInputPort2 = _interopRequireDefault(_DecoratedInputPort);

var _CircuitFigure = __webpack_require__(/*! ./figure/CircuitFigure */ "../../app/frontend/designer/js/figure/CircuitFigure.js");

var _CircuitFigure2 = _interopRequireDefault(_CircuitFigure);

var _mousetrap = __webpack_require__(/*! mousetrap */ "../../node_modules/mousetrap/mousetrap.js");

var _mousetrap2 = _interopRequireDefault(_mousetrap);

__webpack_require__(/*! ./util/mousetrap-global */ "../../app/frontend/designer/js/util/mousetrap-global.js");

__webpack_require__(/*! ./util/mousetrap-pause */ "../../app/frontend/designer/js/util/mousetrap-pause.js");

var _Hardware = __webpack_require__(/*! ./Hardware */ "../../app/frontend/designer/js/Hardware.js");

var _Hardware2 = _interopRequireDefault(_Hardware);

var _inlineSVG = __webpack_require__(/*! ../lib/inlineSVG */ "../../app/frontend/designer/lib/inlineSVG.js");

var _inlineSVG2 = _interopRequireDefault(_inlineSVG);

var _LabelInplaceEditor = __webpack_require__(/*! ./LabelInplaceEditor */ "../../app/frontend/designer/js/LabelInplaceEditor.js");

var _LabelInplaceEditor2 = _interopRequireDefault(_LabelInplaceEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  hardware: _Hardware2.default,
  DecoratedInputPort: _DecoratedInputPort2.default,
  LabelInplaceEditor: _LabelInplaceEditor2.default,
  Mousetrap: _mousetrap2.default,
  CircuitFigure: _CircuitFigure2.default,
  inlineSVG: _inlineSVG2.default
};
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/index.js":
/*!*************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../less/index.less */ "../../app/frontend/designer/less/index.less");

__webpack_require__(/*! font-awesome/css/font-awesome.css */ "../../node_modules/font-awesome/css/font-awesome.css");

var _global = __webpack_require__(/*! ./global */ "../../app/frontend/designer/js/global.js");

var _global2 = _interopRequireDefault(_global);

var _Configuration = __webpack_require__(/*! ./Configuration */ "../../app/frontend/designer/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

__webpack_require__(/*! ./figure/index */ "../../app/frontend/designer/js/figure/index.js");

__webpack_require__(/*! ./filter/index */ "../../app/frontend/designer/js/filter/index.js");

var _Application = __webpack_require__(/*! ./Application */ "../../app/frontend/designer/js/Application.js");

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//require('webpack-jquery-ui/css');  //ommit, if you don't want to load basic css theme

// Resolve name collision between jQuery UI and Twitter Bootstrap
/*** Handle jQuery plugin naming conflict between jQuery UI and Bootstrap ***/
$.widget.bridge('uibutton', $.ui.button);
$.widget.bridge('uitooltip', $.ui.tooltip);

// required to be compatible with jquery.layout and jquery.handsontable
//
jQuery.uaMatch = function (ua) {
  ua = ua.toLowerCase();
  var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
  return {
    browser: match[1] || "",
    version: match[2] || "0"
  };
};
if (!jQuery.browser) {
  var matched = jQuery.uaMatch(navigator.userAgent);
  var browser = {};
  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
  }
  // Chrome is Webkit, but Webkit is also Safari.
  if (browser.chrome) {
    browser.webkit = true;
  } else if (browser.webkit) {
    browser.safari = true;
  }
  jQuery.browser = browser;
}

$(window).load(function () {

  // export all required classes for deserialize JSON with "eval"
  // "eval" code didn't sees imported class or code
  //
  for (var k in _global2.default) {
    window[k] = _global2.default[k];
  }socket = io({
    path: '/socket.io'
  });

  // remove the fileOpen/Save stuff if we run in a "serverless" mode. e.g. on gh-pages
  // (fake event from the socket.io mock )
  //
  socket.on("serverless", function () {
    _Configuration2.default.serverless = true;
    _Configuration2.default.backend.file.get = function (file) {
      return "./shapes/" + file;
    };
  });

  socket.on("connect", function () {
    app = shape_designer.app = new _Application2.default();
  });
});

/***/ }),

/***/ "../../app/frontend/designer/js/io/BackendStorage.js":
/*!*************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/io/BackendStorage.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configuration = __webpack_require__(/*! ../Configuration */ "../../app/frontend/designer/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackendStorage = function () {

  /**
   * @constructor
   *
   */
  function BackendStorage() {
    _classCallCheck(this, BackendStorage);

    this.fileName = "";
    Object.preventExtensions(this);
  }

  _createClass(BackendStorage, [{
    key: 'getFiles',
    value: function getFiles(path) {
      return $.ajax({
        url: _Configuration2.default.backend.file.list,
        xhrFields: {
          withCredentials: true
        },
        data: {
          path: path
        }
      }).then(function (response) {
        // happens in "serverless" mode on the gh-pages/docs installation
        //
        if (typeof response === "string") response = JSON.parse(response);

        var files = response.files;
        // sort the result
        // Directories are always on top
        //
        files.sort(function (a, b) {
          if (a.type === b.type) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
          }
          if (a.type === "dir") {
            return -1;
          }
          return 1;
        });
        return files;
      });
    }
  }, {
    key: 'saveFile',
    value: function saveFile(json, imageDataUrl, fileName) {
      return $.ajax({
        url: _Configuration2.default.backend.file.save,
        method: "POST",
        xhrFields: {
          withCredentials: true
        },
        data: {
          filePath: fileName,
          content: JSON.stringify({ draw2d: json, image: imageDataUrl }, undefined, 2)
        }
      });
    }

    /**
     * Load the file content of the given path
     *
     * @param fileName
     * @returns {*}
     */

  }, {
    key: 'loadFile',
    value: function loadFile(fileName) {
      return $.ajax({
        url: _Configuration2.default.backend.file.get(fileName),
        xhrFields: {
          withCredentials: true
        }
      }).fail(function (error) {
        console.log(arguments);
      }).then(function (response) {
        // happens in "serverless" mode on the gh-pages/docs installation
        //
        if (typeof response === "string") response = JSON.parse(response);

        if (response.draw2d) return response.draw2d;
        return response;
      });
    }
  }, {
    key: 'dirname',
    value: function dirname(path) {
      if (path === undefined || path === null || path.length === 0) return null;

      var segments = path.split("/");
      if (segments.length <= 1) return null;

      segments = segments.filter(function (n) {
        return n != "";
      });
      path = segments.slice(0, -1).join("/");
      return path === "" ? null : path + "/";
    }
  }, {
    key: 'basename',
    value: function basename(path) {
      if (path === null || path === "" || path === undefined) {
        return null;
      }
      return path.split(/[\\/]/).pop();
    }
  }, {
    key: 'currentDir',
    get: function get() {
      return this.dirname(this.dirname());
    }
  }, {
    key: 'currentFile',
    get: function get() {
      return this.fileName;
    },
    set: function set(name) {
      this.fileName = name;

      var url = window.location.href.split('?')[0] + '?file=' + name;
      history.pushState({ id: 'editor', file: name }, 'Brainbox Designer ' + name, url);
    }
  }]);

  return BackendStorage;
}();

exports.default = BackendStorage;
module.exports = exports['default'];

/***/ }),

/***/ "../../app/frontend/designer/js/io/FigureWriter.js":
/*!***********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/io/FigureWriter.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hogan = __webpack_require__(/*! hogan.js */ "../../node_modules/hogan.js/lib/hogan.js");

var _hogan2 = _interopRequireDefault(_hogan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = shape_designer.FigureWriter = draw2d.io.Writer.extend({

  init: function init() {
    this._super();
  },

  /**
   * @method
   * Export the content to the implemented data format. Inherit class implements
   * content specific writer.
   * <br>
   * <br>
   *
   * Method signature has been changed from version 2.10.1 to version 3.0.0.<br>
   * The parameter <b>resultCallback</b> is required and new. The method calls
   * the callback instead of return the result.
   *
   * @param {draw2d.Canvas} canvas
   * @parma {String} className
   * @param {Function} resultCallback the method to call on success. The first argument is the result object, the second the base64 representation of the file content
   */
  marshal: function marshal(canvas, className, resultCallback) {
    var baseClass = shape_designer.app.getConfiguration("baseClass");
    var customCode = shape_designer.app.getConfiguration("code");
    customCode = customCode.replace(/testShape/g, className);

    var figures = canvas.getExtFigures();
    var b = canvas.getBoundingBox();

    var x = b.x;
    var y = b.y;

    var ports = [];
    var shapes = [];

    shapes.push({
      constructor: 'this.canvas.paper.path("M0,0 L' + b.w + ',0 L' + b.w + ',' + b.h + ' L0,' + b.h + '")',
      attr: '{"stroke":"none","stroke-width":0,"fill":"none"}',
      name: "BoundingBox"
    });

    figures.each(function (i, figure) {
      figure.uninstallEditPolicy("draw2d.policy.figure.RegionEditPolicy");
      var attr = {};
      figure.svgPathString = null;
      figure.translate(-x, -y);
      // paint the element and fill the "attr" object with the current
      // settings
      figure.repaint(attr);
      delete attr.path;
      delete attr.x;
      delete attr.y;
      if (figure instanceof shape_designer.figure.ExtPolygon) {
        shapes.push({
          constructor: "this.canvas.paper.path('" + figure.svgPathString + "')",
          attr: JSON.stringify(attr),
          extra: figure.getBlur() === 0 ? "" : "shape.blur(" + figure.getBlur() + ");\n",
          name: figure.getUserData().name
        });
      } else if (figure instanceof shape_designer.figure.PolyCircle) {
        shapes.push({
          constructor: "this.canvas.paper.ellipse()",
          attr: JSON.stringify(attr),
          extra: figure.getBlur() === 0 ? "" : "shape.blur(" + figure.getBlur() + ");\n",
          name: figure.getUserData().name
        });
      } else if (figure instanceof shape_designer.figure.ExtLine) {
        // drop shadow
        shapes.push({
          constructor: "this.canvas.paper.path('" + figure.svgPathString + "')",
          attr: JSON.stringify($.extend({}, attr, {
            "stroke-width": attr["stroke-width"] + figure.getOutlineStroke(),
            "stroke": figure.getOutlineColor().hash()
          })),
          extra: figure.getBlur() === 0 ? "" : "shape.blur(" + figure.getBlur() + ");\n",
          name: figure.getUserData().name + "_shadow"
        });

        // the line itself
        shapes.push({
          constructor: "this.canvas.paper.path('" + figure.svgPathString + "')",
          attr: JSON.stringify(attr),
          extra: figure.getBlur() === 0 ? "" : "shape.blur(" + figure.getBlur() + ");\n",
          name: figure.getUserData().name
        });
      } else if (figure instanceof shape_designer.figure.ExtLabel) {
        attr = figure.svgNodes[0].attr();
        attr.x = attr.x + figure.getAbsoluteX();
        attr.y = attr.y + figure.getAbsoluteY();
        delete attr.transform;
        shapes.push({
          constructor: "this.canvas.paper.text(0,0,'" + figure.getText() + "')",
          attr: JSON.stringify(attr),
          extra: "",
          name: figure.getUserData().name
        });
      } else if (figure instanceof shape_designer.figure.ExtPort) {
        ports.push({
          type: figure.getInputType() === "Input" ? "new DecoratedInputPort()" : '"' + figure.getInputType().toLowerCase() + '"',
          method: figure.getInputType() === "Input" ? "addPort" : 'createPort',
          direction: figure.getConnectionDirection(),
          x: 100 / b.w * figure.getCenter().x,
          y: 100 / b.h * figure.getCenter().y,
          color: figure.getBackgroundColor().hash(),
          name: figure.getUserData().name,
          fanout: figure.getMaxFanOut()
        });
      }
      figure.translate(x, y);
    });

    var template = $("#shape-base-template").text().trim();

    var tags = className.split("_");
    var compiled = _hogan2.default.compile(template);
    var tooltip = tags.length > 0 ? tags.slice(-1)[0] : name;
    tooltip = tooltip.split(/\s*(?=[A-Z][a-z])/).join(" ");
    var output = compiled.render({
      tooltip: tooltip,
      className: className,
      baseClass: baseClass,
      figures: shapes,
      ports: ports,
      width: b.w,
      height: b.h
    });

    output = output + "\n\n" + customCode;
    resultCallback(output, draw2d.util.Base64.encode(output));
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/policy/AbstractGeoToolPolicy.js":
/*!************************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/policy/AbstractGeoToolPolicy.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractToolPolicy = __webpack_require__(/*! ./AbstractToolPolicy */ "../../app/frontend/designer/js/policy/AbstractToolPolicy.js");

var _AbstractToolPolicy2 = _interopRequireDefault(_AbstractToolPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsts = __webpack_require__(/*! jsts/dist/jsts */ "../../node_modules/jsts/dist/jsts.js");

/* jshint evil: true */
exports.default = _AbstractToolPolicy2.default.extend({

  init: function init() {
    this._super();
    this.firstFigure = null;
    this.operation = null;
  },

  onInstall: function onInstall(canvas) {
    this.setToolHeader("");
    this.setToolMessage("Select first figure..");
  },

  select: function select(canvas, figure) {

    if (canvas.getSelection().getAll().contains(figure)) {
      return; // nothing to to
    }

    // check if the element an valid polygon. otherwise an boolean operation
    // isn't possible
    if (!(figure instanceof shape_designer.figure.ExtPolygon)) {
      return;
    }

    if (canvas.getSelection().getPrimary() !== null) {
      this.unselect(canvas, canvas.getSelection().getPrimary());
    }

    if (figure !== null) {
      figure.select(true); // primary selection
    }

    canvas.getSelection().setPrimary(figure);

    // inform all selection listeners about the new selection.
    //
    canvas.fireEvent("select", { figure: figure });
  },

  execute: function execute(canvas, firstFigure, figure) {
    if (firstFigure instanceof draw2d.util.ArrayList) {
      if (firstFigure.getSize() < 2) {
        return; // silently
      }
      figure = firstFigure.get(1);
      firstFigure = firstFigure.get(0);
    }
    this.executeGeometryOperation(canvas, firstFigure, figure, this.operation);
  },

  executeGeometryOperation: function executeGeometryOperation(canvas, figure1, figure2, operationFunc) {
    var p1 = this.getGeometry(figure1);
    var p2 = this.getGeometry(figure2);
    var union = eval("p1." + operationFunc + "(p2)");
    var geo = new jsts.io.GeoJSONWriter().write(union);
    var memento = figure1.getPersistentAttributes();
    var cmd = new draw2d.command.CommandCollection();
    cmd.add(new draw2d.command.CommandDelete(figure1));
    cmd.add(new draw2d.command.CommandDelete(figure2));
    $.each(geo.coordinates, $.proxy(function (i, poly) {
      var figure = new shape_designer.figure.ExtPolygon();
      figure.setPersistentAttributes(memento);
      figure.vertices = new draw2d.util.ArrayList();
      $.each(poly, function (i, vertex) {
        figure.addVertex(vertex[0], vertex[1]);
      });
      var command = new draw2d.command.CommandAdd(canvas, figure, figure.getX(), figure.getY());
      cmd.add(command);
    }, this));
    canvas.getCommandStack().execute(cmd);
    this.executed();
  },

  getGeometry: function getGeometry(figure) {
    var reader = new jsts.io.WKTReader();
    var v = figure.getVertices().clone().asArray();
    v.push(v[0]);
    return reader.read("POLYGON((" + $.map(v, function (e) {
      return e.x + " " + e.y;
    }).join(", ") + "))");
  }

});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/policy/AbstractToolPolicy.js":
/*!*********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/policy/AbstractToolPolicy.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = draw2d.policy.canvas.SelectionPolicy.extend({

  init: function init() {
    this._super();
  },

  setToolText: function setToolText(message) {
    $('#currentTool_message').fadeOut(200, function () {
      $("#currentTool_message").html(message);
      $('#currentTool_message').fadeIn(200);
    });
  },

  executed: function executed() {}
});
module.exports = exports['default'];

/***/ }),

/***/ "../../app/frontend/designer/js/policy/CircleToolPolicy.js":
/*!*******************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/policy/CircleToolPolicy.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractToolPolicy = __webpack_require__(/*! ./AbstractToolPolicy */ "../../app/frontend/designer/js/policy/AbstractToolPolicy.js");

var _AbstractToolPolicy2 = _interopRequireDefault(_AbstractToolPolicy);

var _cursor_circle = __webpack_require__(/*! ../../images/cursors/cursor_circle.png */ "../../app/frontend/designer/images/cursors/cursor_circle.png");

var _cursor_circle2 = _interopRequireDefault(_cursor_circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AbstractToolPolicy2.default.extend({

  TITLE: "Circle",

  init: function init() {
    this._super();

    this.center = null;
    this.boundingBoxFigure1 = null;
    this.boundingBoxFigure2 = null;
  },

  onInstall: function onInstall(canvas) {
    canvas.setCursor(_cursor_circle2.default);
  },

  onUninstall: function onUninstall(canvas) {
    if (this.boundingBoxFigure1 !== null) {
      this.boundingBoxFigure1.setCanvas(null);
      this.boundingBoxFigure1 = null;
      this.boundingBoxFigure2.setCanvas(null);
      this.boundingBoxFigure2 = null;
    }
    canvas.setCursor(null);
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   */
  onMouseDown: function onMouseDown(canvas, x, y, shiftKey, ctrlKey) {
    this.center = new draw2d.geo.Point(x, y);
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} dx The x diff between start of dragging and this event
   * @param {Number} dy The y diff between start of dragging and this event
   * @param {Number} dx2 The x diff since the last call of this dragging operation
   * @param {Number} dy2 The y diff since the last call of this dragging operation
   * @template
   */
  onMouseDrag: function onMouseDrag(canvas, dx, dy, dx2, dy2, shiftKey, ctrlKey) {
    var r = Math.sqrt(dx * dx + dy * dy);
    if (this.boundingBoxFigure1 !== null) {
      this.boundingBoxFigure1.setRadius(Math.abs(r));
      this.boundingBoxFigure2.setRadius(Math.abs(r));
    } else {
      this.boundingBoxFigure1 = new draw2d.shape.basic.Circle({ radius: 1 });
      this.boundingBoxFigure1.setCenter(this.center);
      this.boundingBoxFigure1.setCanvas(canvas);
      this.boundingBoxFigure1.setBackgroundColor("#333333");
      this.boundingBoxFigure1.setAlpha(0.1);

      this.boundingBoxFigure2 = new draw2d.shape.basic.Circle({ radius: 1 });
      this.boundingBoxFigure2.setCenter(this.center);
      this.boundingBoxFigure2.setCanvas(canvas);
      this.boundingBoxFigure2.setStroke(1);
      this.boundingBoxFigure2.setColor(new draw2d.util.Color("#333333"));
      this.boundingBoxFigure2.setBackgroundColor(null);
    }
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @template
   */
  onMouseUp: function onMouseUp(canvas, x, y) {
    var dx = Math.abs(this.center.x - x);
    var dy = Math.abs(this.center.y - y);
    var r = Math.sqrt(dx * dx + dy * dy);
    if (r > 3) {
      var circle = new shape_designer.figure.PolyCircle(this.center, r);
      var command = new draw2d.command.CommandAdd(canvas, circle, circle.getX(), circle.getY());
      canvas.getCommandStack().execute(command);
      canvas.setCurrentSelection(circle);
    }

    this.center = null;
    if (this.boundingBoxFigure1 !== null) {
      this.boundingBoxFigure1.setCanvas(null);
      this.boundingBoxFigure1 = null;
      this.boundingBoxFigure2.setCanvas(null);
      this.boundingBoxFigure2 = null;
    }
    this.executed();
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/policy/GeoDifferenceToolPolicy.js":
/*!**************************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/policy/GeoDifferenceToolPolicy.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractGeoToolPolicy = __webpack_require__(/*! ./AbstractGeoToolPolicy */ "../../app/frontend/designer/js/policy/AbstractGeoToolPolicy.js");

var _AbstractGeoToolPolicy2 = _interopRequireDefault(_AbstractGeoToolPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AbstractGeoToolPolicy2.default.extend({

  init: function init() {
    this._super();
    this.operation = "difference";
  },

  onInstall: function onInstall(canvas) {
    this.setToolText("Select polygon to subtract from");
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   */
  onMouseDown: function onMouseDown(canvas, x, y, shiftKey, ctrlKey) {
    var figure = canvas.getBestFigure(x, y);

    // check if the user click on a child shape. DragDrop and movement must redirect
    // to the parent
    // Exception: Port's
    while (figure !== null && figure.getParent() !== null && !(figure instanceof draw2d.Port)) {
      figure = figure.getParent();
    }

    if (figure !== canvas.getSelection().getPrimary() && figure !== null && figure.isSelectable() === true) {
      if (this.firstFigure === null) {
        this.firstFigure = figure;
        this.select(canvas, figure);
        this.setToolText("Select polygon to subtract");
      } else {
        this.execute(canvas, this.firstFigure, figure);
        this.firstFigure = null;
        this.setToolText("Select polygon to subtract from");
      }
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/policy/GeoIntersectionToolPolicy.js":
/*!****************************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/policy/GeoIntersectionToolPolicy.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractGeoToolPolicy = __webpack_require__(/*! ./AbstractGeoToolPolicy */ "../../app/frontend/designer/js/policy/AbstractGeoToolPolicy.js");

var _AbstractGeoToolPolicy2 = _interopRequireDefault(_AbstractGeoToolPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AbstractGeoToolPolicy2.default.extend({

  init: function init() {
    this._super();
    this.operation = "intersection";
  },

  onInstall: function onInstall(canvas) {
    this.setToolText("Select polygon to intersect with");
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   */
  onMouseDown: function onMouseDown(canvas, x, y, shiftKey, ctrlKey) {

    var figure = canvas.getBestFigure(x, y);

    // check if the user click on a child shape. DragDrop and movement must redirect
    // to the parent
    // Exception: Port's
    while (figure !== null && figure.getParent() !== null && !(figure instanceof draw2d.Port)) {
      figure = figure.getParent();
    }

    if (figure !== canvas.getSelection().getPrimary() && figure !== null && figure.isSelectable() === true) {
      if (this.firstFigure === null) {
        this.firstFigure = figure;
        this.select(canvas, figure);
        this.setToolText("Select polygon to intersect");
      } else {
        this.execute(canvas, this.firstFigure, figure);
        this.firstFigure = null;
        this.setToolText("Select polygon to intersect with");
      }
    }
  }

});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/policy/GeoUnionToolPolicy.js":
/*!*********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/policy/GeoUnionToolPolicy.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractGeoToolPolicy = __webpack_require__(/*! ./AbstractGeoToolPolicy */ "../../app/frontend/designer/js/policy/AbstractGeoToolPolicy.js");

var _AbstractGeoToolPolicy2 = _interopRequireDefault(_AbstractGeoToolPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AbstractGeoToolPolicy2.default.extend({

  init: function init() {
    this._super();
    this.operation = "union";
  },

  onInstall: function onInstall(canvas) {
    this.setToolText("Select polygon to add to..");
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   */
  onMouseDown: function onMouseDown(canvas, x, y, shiftKey, ctrlKey) {

    var figure = canvas.getBestFigure(x, y);

    // check if the user click on a child shape. DragDrop and movement must redirect
    // to the parent
    // Exception: Port's
    while (figure !== null && figure.getParent() !== null && !(figure instanceof draw2d.Port)) {
      figure = figure.getParent();
    }

    if (figure !== canvas.getSelection().getPrimary() && figure !== null && figure.isSelectable() === true) {
      if (this.firstFigure === null) {
        this.firstFigure = figure;
        this.select(canvas, figure);
        this.setToolText("Select polygon to merge");
      } else {
        this.execute(canvas, this.firstFigure, figure);
        this.firstFigure = null;
        this.setToolText("Select polygon to add to");
      }
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/policy/LineToolPolicy.js":
/*!*****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/policy/LineToolPolicy.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractToolPolicy = __webpack_require__(/*! ./AbstractToolPolicy */ "../../app/frontend/designer/js/policy/AbstractToolPolicy.js");

var _AbstractToolPolicy2 = _interopRequireDefault(_AbstractToolPolicy);

var _cursor_line = __webpack_require__(/*! ../../images/cursors/cursor_line.png */ "../../app/frontend/designer/images/cursors/cursor_line.png");

var _cursor_line2 = _interopRequireDefault(_cursor_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AbstractToolPolicy2.default.extend({

  MESSAGE_STEP1: "Select start point of the line.",
  MESSAGE_STEP2: "Click to add additional vertex.<br>Double click to finish line.",

  init: function init() {
    this._super();

    this.lineFigure = null;
    this.canvas = null;
  },

  onInstall: function onInstall(canvas) {
    this.setToolText(this.MESSAGE_STEP1);
    this.canvas = canvas;
    canvas.setCursor(_cursor_line2.default);
  },

  onUninstall: function onUninstall(canvas) {
    if (this.lineFigure !== null) {
      if (this.lineFigure.getVertices().getSize() < 2) {
        canvas.remove(this.lineFigure);
        this.lineFigure = null;
      } else {
        // stay in the canvas and finalize the stroke if a doubleClick
        var last = this.lineFigure.vertices.last();
        this.onDoubleClick(this.lineFigure, last.x, last.y, false, false);
      }
    }
    this.canvas = null;
    canvas.setCursor(null);
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   */
  onMouseDown: function onMouseDown(canvas, x, y, shiftKey, ctrlKey) {},

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse event
   * @param {Number} y the y-coordinate of the mouse event
   * @template
   */
  onMouseMove: function onMouseMove(canvas, x, y) {

    if (this.lineFigure !== null) {
      this.lineFigure.setEndPoint(x, y);
    }
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} dx The x diff between start of dragging and this event
   * @param {Number} dy The y diff between start of dragging and this event
   * @param {Number} dx2 The x diff since the last call of this dragging operation
   * @param {Number} dy2 The y diff since the last call of this dragging operation
   * @template
   */
  onMouseDrag: function onMouseDrag(canvas, dx, dy, dx2, dy2) {},

  onDoubleClick: function onDoubleClick(figure, x, y, shiftKey, ctrlKey) {
    this.onClick(figure, x, y, shiftKey, ctrlKey);

    // Remove duplicate points at the end of the polyLine. This happens during the DoubleClick.
    // Reason: before the double click is fired the two "single click" comes before. In this case we
    // added three vertex for a doubleClick event
    //

    // don't use the shortcut and assign the this.lineFigure.vertices to a local var.
    // the vertices are recreated in the "calculatePath" mnethod of the polygon and
    // the reference is in this case invalid...design flaw!
    //
    var last = this.lineFigure.vertices.last();
    var beforeLast = this.lineFigure.vertices.get(this.lineFigure.vertices.getSize() - 2);
    while (last.equals(beforeLast)) {
      this.lineFigure.removeVertexAt(this.lineFigure.vertices.getSize() - 2);
      beforeLast = this.lineFigure.vertices.get(this.lineFigure.vertices.getSize() - 2);
    }

    this.lineFigure = null;
    this.executed();
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   * @template
   */
  onClick: function onClick(figure, x, y, shiftKey, ctrlKey) {
    if (this.lineFigure === null) {
      this.setToolText(this.MESSAGE_STEP2);

      this.lineFigure = new shape_designer.figure.ExtLine();
      this.lineFigure.setStartPoint(x, y);
      this.lineFigure.setEndPoint(x, y);
      var command = new draw2d.command.CommandAdd(this.canvas, this.lineFigure, x, y);
      this.canvas.getCommandStack().execute(command);
      this.canvas.setCurrentSelection(this.lineFigure);
    } else {
      this.lineFigure.addVertex(x, y);
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/policy/PortToolPolicy.js":
/*!*****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/policy/PortToolPolicy.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SelectionToolPolicy = __webpack_require__(/*! ./SelectionToolPolicy */ "../../app/frontend/designer/js/policy/SelectionToolPolicy.js");

var _SelectionToolPolicy2 = _interopRequireDefault(_SelectionToolPolicy);

var _cursor_port = __webpack_require__(/*! ../../images/cursors/cursor_port.png */ "../../app/frontend/designer/images/cursors/cursor_port.png");

var _cursor_port2 = _interopRequireDefault(_cursor_port);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SelectionToolPolicy2.default.extend({

  TITLE: "Port",
  MESSAGE_STEP1: "Select location to add port.<br>Click on port to move.",

  init: function init() {
    this._super();
  },

  onInstall: function onInstall(canvas) {
    this.setToolText(this.MESSAGE_STEP1);
    canvas.setCursor(_cursor_port2.default);
  },

  onUninstall: function onUninstall(canvas) {
    canvas.setCursor(null);
  },

  select: function select(canvas, figure) {
    // check if the element an valid polygon. otherwise an boolean operation
    // isn't possible
    if (!(figure instanceof shape_designer.figure.ExtPort)) {
      return;
    }

    this._super(canvas, figure);
  },

  onMouseDown: function onMouseDown(canvas, x, y, shiftKey, ctrlKey) {
    var figure = canvas.getBestFigure(x, y);

    if (figure === null || figure instanceof shape_designer.figure.ExtPort) {
      this._super(canvas, x, y, shiftKey, ctrlKey);
    }
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @template
   */
  onMouseUp: function onMouseUp(canvas, x, y) {

    if (this.mouseDownElement === null || !(this.mouseDownElement instanceof shape_designer.figure.ExtPort)) {
      var command = new draw2d.command.CommandAdd(canvas, new shape_designer.figure.ExtPort(), x, y);
      canvas.getCommandStack().execute(command);
      canvas.setCurrentSelection(command.figure);
      this.executed();
    } else {
      this._super(canvas, x, y);
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/policy/RectangleToolPolicy.js":
/*!**********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/policy/RectangleToolPolicy.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PolyRect = __webpack_require__(/*! ../figure/PolyRect */ "../../app/frontend/designer/js/figure/PolyRect.js");

var _PolyRect2 = _interopRequireDefault(_PolyRect);

var _AbstractToolPolicy = __webpack_require__(/*! ./AbstractToolPolicy */ "../../app/frontend/designer/js/policy/AbstractToolPolicy.js");

var _AbstractToolPolicy2 = _interopRequireDefault(_AbstractToolPolicy);

var _cursor_rectangle = __webpack_require__(/*! ../../images/cursors/cursor_rectangle.png */ "../../app/frontend/designer/images/cursors/cursor_rectangle.png");

var _cursor_rectangle2 = _interopRequireDefault(_cursor_rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AbstractToolPolicy2.default.extend({

  init: function init() {
    this._super();

    this.topLeftPoint = null;
    this.boundingBoxFigure1 = null;
    this.boundingBoxFigure2 = null;
  },

  onInstall: function onInstall(canvas) {
    this.setToolText("Select first corner of rectangle");
    canvas.setCursor(_cursor_rectangle2.default);
  },

  onUninstall: function onUninstall(canvas) {
    if (this.boundingBoxFigure1 !== null) {
      this.boundingBoxFigure1.setCanvas(null);
      this.boundingBoxFigure1 = null;
      this.boundingBoxFigure2.setCanvas(null);
      this.boundingBoxFigure2 = null;
    }
    canvas.setCursor(null);
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   */
  onMouseDown: function onMouseDown(canvas, x, y, shiftKey, ctrlKey) {
    this.topLeftPoint = new draw2d.geo.Point(x, y);
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} dx The x diff between start of dragging and this event
   * @param {Number} dy The y diff between start of dragging and this event
   * @param {Number} dx2 The x diff since the last call of this dragging operation
   * @param {Number} dy2 The y diff since the last call of this dragging operation
   * @template
   */
  onMouseDrag: function onMouseDrag(canvas, dx, dy, dx2, dy2, shiftKey, ctrlKey) {

    if (this.boundingBoxFigure1 === null) {
      this.boundingBoxFigure1 = new draw2d.shape.basic.Rectangle({
        width: 1,
        height: 1,
        x: this.topLeftPoint.x,
        y: this.topLeftPoint.y,
        bgColor: "#d4d1d4",
        alpha: 0.1
      });
      this.boundingBoxFigure1.setCanvas(canvas);

      this.boundingBoxFigure2 = new draw2d.shape.basic.Rectangle({
        width: 1,
        height: 1,
        x: this.topLeftPoint.x,
        y: this.topLeftPoint.y,
        dash: "--..",
        stroke: 0.5,
        color: "#37a8ff",
        bgColor: null
      });
      this.boundingBoxFigure2.setCanvas(canvas);
    }

    if (this.boundingBoxFigure1 !== null) {
      this.boundingBoxFigure1.setDimension(Math.abs(dx), Math.abs(dy));
      this.boundingBoxFigure1.setPosition(this.topLeftPoint.x + Math.min(0, dx), this.topLeftPoint.y + Math.min(0, dy));
      this.boundingBoxFigure2.setDimension(Math.abs(dx), Math.abs(dy));
      this.boundingBoxFigure2.setPosition(this.topLeftPoint.x + Math.min(0, dx), this.topLeftPoint.y + Math.min(0, dy));
    }
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @template
   */
  onMouseUp: function onMouseUp(canvas, x, y) {
    if (this.boundingBoxFigure1 !== null) {
      this.boundingBoxFigure1.setCanvas(null);
      this.boundingBoxFigure1 = null;
      this.boundingBoxFigure2.setCanvas(null);
      this.boundingBoxFigure2 = null;
    }

    var bottomRight = new draw2d.geo.Point(x, y);
    if (this.topLeftPoint.distance(bottomRight) > 3) {
      var rect = new _PolyRect2.default(this.topLeftPoint, bottomRight);
      var command = new draw2d.command.CommandAdd(canvas, rect, rect.getX(), rect.getY());
      canvas.getCommandStack().execute(command);
      canvas.setCurrentSelection(rect);
    }
    this.executed();
    this.topLeftPoint = null;
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/policy/SelectionToolPolicy.js":
/*!**********************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/policy/SelectionToolPolicy.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = draw2d.policy.canvas.BoundingboxSelectionPolicy.extend({

  init: function init() {
    this._super();
  },

  onInstall: function onInstall(canvas) {
    this.setToolText("Click on shape to select<br>Double click to edit");
  },

  setToolHeader: function setToolHeader(heading, icon) {
    $("#currentTool_image").attr({ "src": icon });
    $("#currentTool_heading").text(heading);
  },

  setToolText: function setToolText(message) {
    $("#currentTool_message").html(message);
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   */
  onMouseDown: function onMouseDown(canvas, x, y, shiftKey, ctrlKey) {
    this.cloneOnDrag = shiftKey;
    this._super(canvas, x, y, shiftKey, ctrlKey);
  },

  /**
   * Copy the selected figure if the user start dragging the selection.
   *
   */
  onMouseDrag: function onMouseDrag(canvas, dx, dy, dx2, dy2) {
    if (!(this.mouseDraggingElement instanceof draw2d.ResizeHandle || this.mouseDraggingElement instanceof draw2d.Port)) {
      if (this.cloneOnDrag === true && this.mouseDraggingElement !== null) {
        // get the current position of the selected shape
        var pos = this.mouseDraggingElement.getPosition();

        // cancel the current drag&drop operation
        this.mouseDraggingElement.onDragEnd(pos.x, pos.y, false, false);
        this.mouseDraggingElement.unselect();

        // clone the selection
        this.mouseDraggingElement = this.mouseDraggingElement.clone();
        // add the clone to the canvas and start dragging of the clone
        canvas.add(this.mouseDraggingElement, pos);

        // select the cloned shape
        this.select(canvas, this.mouseDraggingElement);

        // start dragging if the clone accept this operation
        this.mouseDraggingElement.onDragStart(pos.x, pos.y, false, false);
      }
    }
    this.cloneOnDrag = false;
    this._super(canvas, dx, dy, dx2, dy2);
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/policy/TextToolPolicy.js":
/*!*****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/policy/TextToolPolicy.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractToolPolicy = __webpack_require__(/*! ./AbstractToolPolicy */ "../../app/frontend/designer/js/policy/AbstractToolPolicy.js");

var _AbstractToolPolicy2 = _interopRequireDefault(_AbstractToolPolicy);

var _cursor_text = __webpack_require__(/*! ../../images/cursors/cursor_text.png */ "../../app/frontend/designer/images/cursors/cursor_text.png");

var _cursor_text2 = _interopRequireDefault(_cursor_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AbstractToolPolicy2.default.extend({

  TITLE: "Text",
  MESSAGE_STEP1: "Select location for text",
  MESSAGE_STEP2: "Enter Text",

  init: function init() {
    this._super();

    this.topLeft = null;
    this.newFigure = null;
  },

  onInstall: function onInstall(canvas) {
    this.setToolText(this.MESSAGE_STEP1);
    canvas.setCursor(_cursor_text2.default);
  },

  onUninstall: function onUninstall(canvas) {
    canvas.setCursor(null);
  },

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   */
  onMouseDown: function onMouseDown(canvas, x, y, shiftKey, ctrlKey) {},

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse event
   * @param {Number} y the y-coordinate of the mouse event
   * @template
   */
  onMouseMove: function onMouseMove(canvas, x, y) {},

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} dx The x diff between start of dragging and this event
   * @param {Number} dy The y diff between start of dragging and this event
   * @param {Number} dx2 The x diff since the last call of this dragging operation
   * @param {Number} dy2 The y diff since the last call of this dragging operation
   * @template
   */
  onMouseDrag: function onMouseDrag(canvas, dx, dy, dx2, dy2) {},

  /**
   * @method
   *
   * @param {draw2d.Canvas} canvas
   * @param {Number} x the x-coordinate of the mouse down event
   * @param {Number} y the y-coordinate of the mouse down event
   * @template
   */
  onMouseUp: function onMouseUp(canvas, x, y) {
    if (this.topLeft === null) {
      this.topLeft = new draw2d.geo.Point(x, y);
      this.setToolText(this.MESSAGE_STEP2);

      this.newFigure = new shape_designer.figure.ExtLabel();
      this.newFigure.setText("Text");
      this.newFigure.setStroke(0);
      this.newFigure.setPadding(5);
      this.newFigure.setFontSize(16);

      var command = new draw2d.command.CommandAdd(canvas, this.newFigure, parseInt(x), parseInt(y));
      canvas.getCommandStack().execute(command);
      canvas.setCurrentSelection(this.newFigure);

      // start inplace editing
      //
      setTimeout($.proxy(function () {
        this.newFigure.onDoubleClick();
      }, this), 100);

      this.executed();
    } else {
      this.topLeft = null;
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/util/mousetrap-global.js":
/*!*****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/util/mousetrap-global.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * adds a bindGlobal method to Mousetrap that allows you to
 * bind specific keyboard shortcuts that will still work
 * inside a text input field
 *
 * usage:
 * Mousetrap.bindGlobal('ctrl+s', _saveChanges);
 */
/* global Mousetrap:true */
(function (Mousetrap) {
  var _globalCallbacks = {};
  var _originalStopCallback = Mousetrap.prototype.stopCallback;

  Mousetrap.prototype.stopCallback = function (e, element, combo, sequence) {
    var self = this;

    if (self.paused) {
      return true;
    }

    if (_globalCallbacks[combo] || _globalCallbacks[sequence]) {
      return false;
    }

    return _originalStopCallback.call(self, e, element, combo);
  };

  Mousetrap.prototype.bindGlobal = function (keys, callback, action) {
    var self = this;
    self.bind(keys, callback, action);

    if (keys instanceof Array) {
      for (var i = 0; i < keys.length; i++) {
        _globalCallbacks[keys[i]] = true;
      }
      return;
    }

    _globalCallbacks[keys] = true;
  };

  Mousetrap.init();
})(Mousetrap);

/***/ }),

/***/ "../../app/frontend/designer/js/util/mousetrap-pause.js":
/*!****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/util/mousetrap-pause.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * adds a pause and unpause method to Mousetrap
 * this allows you to enable or disable keyboard shortcuts
 * without having to reset Mousetrap and rebind everything
 */
/* global Mousetrap:true */
(function (Mousetrap) {
  var _originalStopCallback = Mousetrap.prototype.stopCallback;

  Mousetrap.prototype.stopCallback = function (e, element, combo) {
    var self = this;

    if (self.paused) {
      return true;
    }

    return _originalStopCallback.call(self, e, element, combo);
  };

  Mousetrap.prototype.pause = function () {
    var self = this;
    self.paused = true;
  };

  Mousetrap.prototype.unpause = function () {
    var self = this;
    self.paused = false;
  };

  Mousetrap.init();
})(Mousetrap);

/***/ }),

/***/ "../../app/frontend/designer/js/widget/jscolor/arrow.gif":
/*!*****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/widget/jscolor/arrow.gif ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/5034704a76cd55c1cbcbc58ea6bf523f.gif";

/***/ }),

/***/ "../../app/frontend/designer/js/widget/jscolor/cross.gif":
/*!*****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/widget/jscolor/cross.gif ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/ba9a274b9323753cd95bc3b1eb2f4e5f.gif";

/***/ }),

/***/ "../../app/frontend/designer/js/widget/jscolor/hs.png":
/*!**************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/widget/jscolor/hs.png ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/fefa1a03d92ebad25c88dca94a0b63db.png";

/***/ }),

/***/ "../../app/frontend/designer/js/widget/jscolor/hv.png":
/*!**************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/widget/jscolor/hv.png ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/990d71cada17da100653636cf8490884.png";

/***/ }),

/***/ "../../app/frontend/designer/js/widget/jscolor/jscolor.js":
/*!******************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/widget/jscolor/jscolor.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrow = __webpack_require__(/*! ./arrow.gif */ "../../app/frontend/designer/js/widget/jscolor/arrow.gif");

var _arrow2 = _interopRequireDefault(_arrow);

var _cross = __webpack_require__(/*! ./cross.gif */ "../../app/frontend/designer/js/widget/jscolor/cross.gif");

var _cross2 = _interopRequireDefault(_cross);

var _hs = __webpack_require__(/*! ./hs.png */ "../../app/frontend/designer/js/widget/jscolor/hs.png");

var _hs2 = _interopRequireDefault(_hs);

var _hv = __webpack_require__(/*! ./hv.png */ "../../app/frontend/designer/js/widget/jscolor/hv.png");

var _hv2 = _interopRequireDefault(_hv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * jscolor, JavaScript Color Picker
 *
 * @version 1.4.2
 * @license GNU Lesser General Public License, http://www.gnu.org/copyleft/lesser.html
 * @author  Jan Odvarko, http://odvarko.cz
 * @created 2008-06-15
 * @updated 2013-11-25
 * @link    http://jscolor.com
 */
var jscolor = null;
exports.default = jscolor = {

  dir: '', // location of jscolor directory (leave empty to autodetect)
  bindClass: 'color', // class name
  binding: true, // automatic binding via <input class="...">
  preloading: true, // use image preloading?


  install: function install() {
    jscolor.addEvent(window, 'load', jscolor.init);
  },

  init: function init() {
    if (jscolor.binding) {
      jscolor.bind();
    }
    if (jscolor.preloading) {
      jscolor.preload();
    }
  },

  bind: function bind() {
    var matchClass = new RegExp('(^|\\s)(' + jscolor.bindClass + ')\\s*(\\{[^}]*\\})?', 'i');
    var e = document.getElementsByTagName('input');
    for (var i = 0; i < e.length; i += 1) {
      var m;
      if (!e[i].color && e[i].className && (m = e[i].className.match(matchClass))) {
        var prop = {};
        if (m[3]) {
          try {
            prop = new Function('return (' + m[3] + ')')();
          } catch (eInvalidProp) {}
        }
        e[i].color = new jscolor.color(e[i], prop);
      }
    }
  },

  preload: function preload() {
    for (var fn in jscolor.imgRequire) {
      if (jscolor.imgRequire.hasOwnProperty(fn)) {
        jscolor.loadImage(fn);
      }
    }
  },

  images: {
    pad: [181, 101],
    sld: [16, 101],
    cross: [15, 15],
    arrow: [7, 11]
  },

  imgRequire: {},
  imgLoaded: {},

  requireImage: function requireImage(filename) {
    jscolor.imgRequire[filename] = true;
  },

  loadImage: function loadImage(filename) {
    if (!jscolor.imgLoaded[filename]) {
      jscolor.imgLoaded[filename] = new Image();
      jscolor.imgLoaded[filename].src = filename;
    }
  },

  fetchElement: function fetchElement(mixed) {
    return typeof mixed === 'string' ? document.getElementById(mixed) : mixed;
  },

  addEvent: function addEvent(el, evnt, func) {
    if (el.addEventListener) {
      el.addEventListener(evnt, func, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + evnt, func);
    }
  },

  fireEvent: function fireEvent(el, evnt) {
    if (!el) {
      return;
    }
    if (document.createEvent) {
      var ev = document.createEvent('HTMLEvents');
      ev.initEvent(evnt, true, true);
      el.dispatchEvent(ev);
    } else if (document.createEventObject) {
      var ev = document.createEventObject();
      el.fireEvent('on' + evnt, ev);
    } else if (el['on' + evnt]) {
      // alternatively use the traditional event model (IE5)
      el['on' + evnt]();
    }
  },

  getElementPos: function getElementPos(e) {
    var e1 = e,
        e2 = e;
    var x = 0,
        y = 0;
    if (e1.offsetParent) {
      do {
        x += e1.offsetLeft;
        y += e1.offsetTop;
      } while (e1 = e1.offsetParent);
    }
    while ((e2 = e2.parentNode) && e2.nodeName.toUpperCase() !== 'BODY') {
      x -= e2.scrollLeft;
      y -= e2.scrollTop;
    }
    return [x, y];
  },

  getElementSize: function getElementSize(e) {
    return [e.offsetWidth, e.offsetHeight];
  },

  getRelMousePos: function getRelMousePos(e) {
    var x = 0,
        y = 0;
    if (!e) {
      e = window.event;
    }
    if (typeof e.offsetX === 'number') {
      x = e.offsetX;
      y = e.offsetY;
    } else if (typeof e.layerX === 'number') {
      x = e.layerX;
      y = e.layerY;
    }
    return { x: x, y: y };
  },

  getViewPos: function getViewPos() {
    if (typeof window.pageYOffset === 'number') {
      return [window.pageXOffset, window.pageYOffset];
    } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
      return [document.body.scrollLeft, document.body.scrollTop];
    } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
      return [document.documentElement.scrollLeft, document.documentElement.scrollTop];
    } else {
      return [0, 0];
    }
  },

  getViewSize: function getViewSize() {
    if (typeof window.innerWidth === 'number') {
      return [window.innerWidth, window.innerHeight];
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
      return [document.body.clientWidth, document.body.clientHeight];
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      return [document.documentElement.clientWidth, document.documentElement.clientHeight];
    } else {
      return [0, 0];
    }
  },

  URI: function URI(uri) {
    // See RFC3986

    this.scheme = null;
    this.authority = null;
    this.path = '';
    this.query = null;
    this.fragment = null;

    this.parse = function (uri) {
      var m = uri.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);
      this.scheme = m[3] ? m[2] : null;
      this.authority = m[5] ? m[6] : null;
      this.path = m[7];
      this.query = m[9] ? m[10] : null;
      this.fragment = m[12] ? m[13] : null;
      return this;
    };

    this.toString = function () {
      var result = '';
      if (this.scheme !== null) {
        result = result + this.scheme + ':';
      }
      if (this.authority !== null) {
        result = result + '//' + this.authority;
      }
      if (this.path !== null) {
        result = result + this.path;
      }
      if (this.query !== null) {
        result = result + '?' + this.query;
      }
      if (this.fragment !== null) {
        result = result + '#' + this.fragment;
      }
      return result;
    };

    this.toAbsolute = function (base) {
      var base = new jscolor.URI(base);
      var r = this;
      var t = new jscolor.URI();

      if (base.scheme === null) {
        return false;
      }

      if (r.scheme !== null && r.scheme.toLowerCase() === base.scheme.toLowerCase()) {
        r.scheme = null;
      }

      if (r.scheme !== null) {
        t.scheme = r.scheme;
        t.authority = r.authority;
        t.path = removeDotSegments(r.path);
        t.query = r.query;
      } else {
        if (r.authority !== null) {
          t.authority = r.authority;
          t.path = removeDotSegments(r.path);
          t.query = r.query;
        } else {
          if (r.path === '') {
            t.path = base.path;
            if (r.query !== null) {
              t.query = r.query;
            } else {
              t.query = base.query;
            }
          } else {
            if (r.path.substr(0, 1) === '/') {
              t.path = removeDotSegments(r.path);
            } else {
              if (base.authority !== null && base.path === '') {
                t.path = '/' + r.path;
              } else {
                t.path = base.path.replace(/[^\/]+$/, '') + r.path;
              }
              t.path = removeDotSegments(t.path);
            }
            t.query = r.query;
          }
          t.authority = base.authority;
        }
        t.scheme = base.scheme;
      }
      t.fragment = r.fragment;

      return t;
    };

    function removeDotSegments(path) {
      var out = '';
      while (path) {
        if (path.substr(0, 3) === '../' || path.substr(0, 2) === './') {
          path = path.replace(/^\.+/, '').substr(1);
        } else if (path.substr(0, 3) === '/./' || path === '/.') {
          path = '/' + path.substr(3);
        } else if (path.substr(0, 4) === '/../' || path === '/..') {
          path = '/' + path.substr(4);
          out = out.replace(/\/?[^\/]*$/, '');
        } else if (path === '.' || path === '..') {
          path = '';
        } else {
          var rm = path.match(/^\/?[^\/]*/)[0];
          path = path.substr(rm.length);
          out = out + rm;
        }
      }
      return out;
    }

    if (uri) {
      this.parse(uri);
    }
  },

  //
  // Usage example:
  // var myColor = new jscolor.color(myInputElement)
  //

  color: function color(target, prop) {

    this.required = true; // refuse empty values?
    this.adjust = true; // adjust value to uniform notation?
    this.hash = false; // prefix color with # symbol?
    this.caps = true; // uppercase?
    this.slider = true; // show the value/saturation slider?
    this.valueElement = target; // value holder
    this.styleElement = target; // where to reflect current color
    this.onImmediateChange = null; // onchange callback (can be either string or function)
    this.hsv = [0, 0, 1]; // read-only  0-6, 0-1, 0-1
    this.rgb = [1, 1, 1]; // read-only  0-1, 0-1, 0-1
    this.minH = 0; // read-only  0-6
    this.maxH = 6; // read-only  0-6
    this.minS = 0; // read-only  0-1
    this.maxS = 1; // read-only  0-1
    this.minV = 0; // read-only  0-1
    this.maxV = 1; // read-only  0-1

    this.pickerOnfocus = true; // display picker on focus?
    this.pickerMode = 'HSV'; // HSV | HVS
    this.pickerPosition = 'bottom'; // left | right | top | bottom
    this.pickerSmartPosition = true; // automatically adjust picker position when necessary
    this.pickerButtonHeight = 20; // px
    this.pickerClosable = false;
    this.pickerCloseText = 'Close';
    this.pickerButtonColor = 'ButtonText'; // px
    this.pickerFace = 10; // px
    this.pickerFaceColor = 'ThreeDFace'; // CSS color
    this.pickerBorder = 1; // px
    this.pickerBorderColor = 'ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight'; // CSS color
    this.pickerInset = 1; // px
    this.pickerInsetColor = 'ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow'; // CSS color
    this.pickerZIndex = 10000;

    for (var p in prop) {
      if (prop.hasOwnProperty(p)) {
        this[p] = prop[p];
      }
    }

    this.hidePicker = function () {
      if (isPickerOwner()) {
        removePicker();
      }
    };

    this.showPicker = function () {
      if (!isPickerOwner()) {
        var tp = jscolor.getElementPos(target); // target pos
        var ts = jscolor.getElementSize(target); // target size
        var vp = jscolor.getViewPos(); // view pos
        var vs = jscolor.getViewSize(); // view size
        var ps = getPickerDims(this); // picker size
        var a, b, c;
        switch (this.pickerPosition.toLowerCase()) {
          case 'left':
            a = 1;
            b = 0;
            c = -1;
            break;
          case 'right':
            a = 1;
            b = 0;
            c = 1;
            break;
          case 'top':
            a = 0;
            b = 1;
            c = -1;
            break;
          default:
            a = 0;
            b = 1;
            c = 1;
            break;
        }
        var l = (ts[b] + ps[b]) / 2;

        // picker pos
        if (!this.pickerSmartPosition) {
          var pp = [tp[a], tp[b] + ts[b] - l + l * c];
        } else {
          var pp = [-vp[a] + tp[a] + ps[a] > vs[a] ? -vp[a] + tp[a] + ts[a] / 2 > vs[a] / 2 && tp[a] + ts[a] - ps[a] >= 0 ? tp[a] + ts[a] - ps[a] : tp[a] : tp[a], -vp[b] + tp[b] + ts[b] + ps[b] - l + l * c > vs[b] ? -vp[b] + tp[b] + ts[b] / 2 > vs[b] / 2 && tp[b] + ts[b] - l - l * c >= 0 ? tp[b] + ts[b] - l - l * c : tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l + l * c >= 0 ? tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l - l * c];
        }
        drawPicker(pp[a], pp[b]);
      }
    };

    this.importColor = function () {
      if (!valueElement) {
        this.exportColor();
      } else {
        if (!this.adjust) {
          if (!this.fromString(valueElement.value, leaveValue)) {
            styleElement.style.backgroundImage = styleElement.jscStyle.backgroundImage;
            styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
            styleElement.style.color = styleElement.jscStyle.color;
            this.exportColor(leaveValue | leaveStyle);
          }
        } else if (!this.required && /^\s*$/.test(valueElement.value)) {
          valueElement.value = '';
          styleElement.style.backgroundImage = styleElement.jscStyle.backgroundImage;
          styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
          styleElement.style.color = styleElement.jscStyle.color;
          this.exportColor(leaveValue | leaveStyle);
        } else if (this.fromString(valueElement.value)) {
          // OK
        } else {
          this.exportColor();
        }
      }
    };

    this.exportColor = function (flags) {
      if (!(flags & leaveValue) && valueElement) {
        var value = this.toString();
        if (this.caps) {
          value = value.toUpperCase();
        }
        if (this.hash) {
          value = '#' + value;
        }
        valueElement.value = value;
      }
      if (!(flags & leaveStyle) && styleElement) {
        styleElement.style.backgroundImage = "none";
        styleElement.style.backgroundColor = '#' + this.toString();
        styleElement.style.color = 0.213 * this.rgb[0] + 0.715 * this.rgb[1] + 0.072 * this.rgb[2] < 0.5 ? '#FFF' : '#000';
      }
      if (!(flags & leavePad) && isPickerOwner()) {
        redrawPad();
      }
      if (!(flags & leaveSld) && isPickerOwner()) {
        redrawSld();
      }
    };

    this.fromHSV = function (h, s, v, flags) {
      // null = don't change
      if (h !== null) {
        h = Math.max(0.0, this.minH, Math.min(6.0, this.maxH, h));
      }
      if (s !== null) {
        s = Math.max(0.0, this.minS, Math.min(1.0, this.maxS, s));
      }
      if (v !== null) {
        v = Math.max(0.0, this.minV, Math.min(1.0, this.maxV, v));
      }

      this.rgb = HSV_RGB(h === null ? this.hsv[0] : this.hsv[0] = h, s === null ? this.hsv[1] : this.hsv[1] = s, v === null ? this.hsv[2] : this.hsv[2] = v);

      this.exportColor(flags);
    };

    this.fromRGB = function (r, g, b, flags) {
      // null = don't change
      if (r !== null) {
        r = Math.max(0.0, Math.min(1.0, r));
      }
      if (g !== null) {
        g = Math.max(0.0, Math.min(1.0, g));
      }
      if (b !== null) {
        b = Math.max(0.0, Math.min(1.0, b));
      }

      var hsv = RGB_HSV(r === null ? this.rgb[0] : r, g === null ? this.rgb[1] : g, b === null ? this.rgb[2] : b);
      if (hsv[0] !== null) {
        this.hsv[0] = Math.max(0.0, this.minH, Math.min(6.0, this.maxH, hsv[0]));
      }
      if (hsv[2] !== 0) {
        this.hsv[1] = hsv[1] === null ? null : Math.max(0.0, this.minS, Math.min(1.0, this.maxS, hsv[1]));
      }
      this.hsv[2] = hsv[2] === null ? null : Math.max(0.0, this.minV, Math.min(1.0, this.maxV, hsv[2]));

      // update RGB according to final HSV, as some values might be trimmed
      var rgb = HSV_RGB(this.hsv[0], this.hsv[1], this.hsv[2]);
      this.rgb[0] = rgb[0];
      this.rgb[1] = rgb[1];
      this.rgb[2] = rgb[2];

      this.exportColor(flags);
    };

    this.fromString = function (hex, flags) {
      var m = hex.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);
      if (!m) {
        return false;
      } else {
        if (m[1].length === 6) {
          // 6-char notation
          this.fromRGB(parseInt(m[1].substr(0, 2), 16) / 255, parseInt(m[1].substr(2, 2), 16) / 255, parseInt(m[1].substr(4, 2), 16) / 255, flags);
        } else {
          // 3-char notation
          this.fromRGB(parseInt(m[1].charAt(0) + m[1].charAt(0), 16) / 255, parseInt(m[1].charAt(1) + m[1].charAt(1), 16) / 255, parseInt(m[1].charAt(2) + m[1].charAt(2), 16) / 255, flags);
        }
        return true;
      }
    };

    this.toString = function () {
      return (0x100 | Math.round(255 * this.rgb[0])).toString(16).substr(1) + (0x100 | Math.round(255 * this.rgb[1])).toString(16).substr(1) + (0x100 | Math.round(255 * this.rgb[2])).toString(16).substr(1);
    };

    function RGB_HSV(r, g, b) {
      var n = Math.min(Math.min(r, g), b);
      var v = Math.max(Math.max(r, g), b);
      var m = v - n;
      if (m === 0) {
        return [null, 0, v];
      }
      var h = r === n ? 3 + (b - g) / m : g === n ? 5 + (r - b) / m : 1 + (g - r) / m;
      return [h === 6 ? 0 : h, m / v, v];
    }

    function HSV_RGB(h, s, v) {
      if (h === null) {
        return [v, v, v];
      }
      var i = Math.floor(h);
      var f = i % 2 ? h - i : 1 - (h - i);
      var m = v * (1 - s);
      var n = v * (1 - s * f);
      switch (i) {
        case 6:
        case 0:
          return [v, n, m];
        case 1:
          return [n, v, m];
        case 2:
          return [m, v, n];
        case 3:
          return [m, n, v];
        case 4:
          return [n, m, v];
        case 5:
          return [v, m, n];
      }
    }

    function removePicker() {
      delete jscolor.picker.owner;
      document.getElementsByTagName('body')[0].removeChild(jscolor.picker.boxB);
    }

    function drawPicker(x, y) {
      if (!jscolor.picker) {
        jscolor.picker = {
          box: document.createElement('div'),
          boxB: document.createElement('div'),
          pad: document.createElement('div'),
          padB: document.createElement('div'),
          padM: document.createElement('div'),
          sld: document.createElement('div'),
          sldB: document.createElement('div'),
          sldM: document.createElement('div'),
          btn: document.createElement('div'),
          btnS: document.createElement('span'),
          btnT: document.createTextNode(THIS.pickerCloseText)
        };
        for (var i = 0, segSize = 4; i < jscolor.images.sld[1]; i += segSize) {
          var seg = document.createElement('div');
          seg.style.height = segSize + 'px';
          seg.style.fontSize = '1px';
          seg.style.lineHeight = '0';
          jscolor.picker.sld.appendChild(seg);
        }
        jscolor.picker.sldB.appendChild(jscolor.picker.sld);
        jscolor.picker.box.appendChild(jscolor.picker.sldB);
        jscolor.picker.box.appendChild(jscolor.picker.sldM);
        jscolor.picker.padB.appendChild(jscolor.picker.pad);
        jscolor.picker.box.appendChild(jscolor.picker.padB);
        jscolor.picker.box.appendChild(jscolor.picker.padM);
        jscolor.picker.btnS.appendChild(jscolor.picker.btnT);
        jscolor.picker.btn.appendChild(jscolor.picker.btnS);
        jscolor.picker.box.appendChild(jscolor.picker.btn);
        jscolor.picker.boxB.appendChild(jscolor.picker.box);
      }

      var p = jscolor.picker;

      // controls interaction
      p.box.onmouseup = p.box.onmouseout = function () {
        target.focus();
      };
      p.box.onmousedown = function () {
        abortBlur = true;
      };
      p.box.onmousemove = function (e) {
        if (holdPad || holdSld) {
          holdPad && setPad(e);
          holdSld && setSld(e);
          if (document.selection) {
            document.selection.empty();
          } else if (window.getSelection) {
            window.getSelection().removeAllRanges();
          }
          dispatchImmediateChange();
        }
      };
      if ('ontouchstart' in window) {
        // if touch device
        var handle_touchmove = function handle_touchmove(e) {
          var event = {
            'offsetX': e.touches[0].pageX - touchOffset.X,
            'offsetY': e.touches[0].pageY - touchOffset.Y
          };
          if (holdPad || holdSld) {
            holdPad && setPad(event);
            holdSld && setSld(event);
            dispatchImmediateChange();
          }
          e.stopPropagation(); // prevent move "view" on broswer
          e.preventDefault(); // prevent Default - Android Fix (else android generated only 1-2 touchmove events)
        };
        p.box.removeEventListener('touchmove', handle_touchmove, false);
        p.box.addEventListener('touchmove', handle_touchmove, false);
      }
      p.padM.onmouseup = p.padM.onmouseout = function () {
        if (holdPad) {
          holdPad = false;
          jscolor.fireEvent(valueElement, 'change');
        }
      };
      p.padM.onmousedown = function (e) {
        // if the slider is at the bottom, move it up
        switch (modeID) {
          case 0:
            if (THIS.hsv[2] === 0) {
              THIS.fromHSV(null, null, 1.0);
            }

            break;
          case 1:
            if (THIS.hsv[1] === 0) {
              THIS.fromHSV(null, 1.0, null);
            }

            break;
        }
        holdSld = false;
        holdPad = true;
        setPad(e);
        dispatchImmediateChange();
      };
      if ('ontouchstart' in window) {
        p.padM.addEventListener('touchstart', function (e) {
          touchOffset = {
            'X': e.target.offsetParent.offsetLeft,
            'Y': e.target.offsetParent.offsetTop
          };
          this.onmousedown({
            'offsetX': e.touches[0].pageX - touchOffset.X,
            'offsetY': e.touches[0].pageY - touchOffset.Y
          });
        });
      }
      p.sldM.onmouseup = p.sldM.onmouseout = function () {
        if (holdSld) {
          holdSld = false;
          jscolor.fireEvent(valueElement, 'change');
        }
      };
      p.sldM.onmousedown = function (e) {
        holdPad = false;
        holdSld = true;
        setSld(e);
        dispatchImmediateChange();
      };
      if ('ontouchstart' in window) {
        p.sldM.addEventListener('touchstart', function (e) {
          touchOffset = {
            'X': e.target.offsetParent.offsetLeft,
            'Y': e.target.offsetParent.offsetTop
          };
          this.onmousedown({
            'offsetX': e.touches[0].pageX - touchOffset.X,
            'offsetY': e.touches[0].pageY - touchOffset.Y
          });
        });
      }

      // picker
      var dims = getPickerDims(THIS);
      p.box.style.width = dims[0] + 'px';
      p.box.style.height = dims[1] + 'px';

      // picker border
      p.boxB.style.position = 'absolute';
      p.boxB.style.clear = 'both';
      p.boxB.style.left = x + 'px';
      p.boxB.style.top = y + 'px';
      p.boxB.style.zIndex = THIS.pickerZIndex;
      p.boxB.style.border = THIS.pickerBorder + 'px solid';
      p.boxB.style.borderColor = THIS.pickerBorderColor;
      p.boxB.style.background = THIS.pickerFaceColor;

      // pad image
      p.pad.style.width = jscolor.images.pad[0] + 'px';
      p.pad.style.height = jscolor.images.pad[1] + 'px';

      // pad border
      p.padB.style.position = 'absolute';
      p.padB.style.left = THIS.pickerFace + 'px';
      p.padB.style.top = THIS.pickerFace + 'px';
      p.padB.style.border = THIS.pickerInset + 'px solid';
      p.padB.style.borderColor = THIS.pickerInsetColor;

      // pad mouse area
      p.padM.style.position = 'absolute';
      p.padM.style.left = '0';
      p.padM.style.top = '0';
      p.padM.style.width = THIS.pickerFace + 2 * THIS.pickerInset + jscolor.images.pad[0] + jscolor.images.arrow[0] + 'px';
      p.padM.style.height = p.box.style.height;
      p.padM.style.cursor = 'crosshair';

      // slider image
      p.sld.style.overflow = 'hidden';
      p.sld.style.width = jscolor.images.sld[0] + 'px';
      p.sld.style.height = jscolor.images.sld[1] + 'px';

      // slider border
      p.sldB.style.display = THIS.slider ? 'block' : 'none';
      p.sldB.style.position = 'absolute';
      p.sldB.style.right = THIS.pickerFace + 'px';
      p.sldB.style.top = THIS.pickerFace + 'px';
      p.sldB.style.border = THIS.pickerInset + 'px solid';
      p.sldB.style.borderColor = THIS.pickerInsetColor;

      // slider mouse area
      p.sldM.style.display = THIS.slider ? 'block' : 'none';
      p.sldM.style.position = 'absolute';
      p.sldM.style.right = '0';
      p.sldM.style.top = '0';
      p.sldM.style.width = jscolor.images.sld[0] + jscolor.images.arrow[0] + THIS.pickerFace + 2 * THIS.pickerInset + 'px';
      p.sldM.style.height = p.box.style.height;
      try {
        p.sldM.style.cursor = 'pointer';
      } catch (eOldIE) {
        p.sldM.style.cursor = 'hand';
      }

      // "close" button
      function setBtnBorder() {
        var insetColors = THIS.pickerInsetColor.split(/\s+/);
        var pickerOutsetColor = insetColors.length < 2 ? insetColors[0] : insetColors[1] + ' ' + insetColors[0] + ' ' + insetColors[0] + ' ' + insetColors[1];
        p.btn.style.borderColor = pickerOutsetColor;
      }

      p.btn.style.display = THIS.pickerClosable ? 'block' : 'none';
      p.btn.style.position = 'absolute';
      p.btn.style.left = THIS.pickerFace + 'px';
      p.btn.style.bottom = THIS.pickerFace + 'px';
      p.btn.style.padding = '0 15px';
      p.btn.style.height = '18px';
      p.btn.style.border = THIS.pickerInset + 'px solid';
      setBtnBorder();
      p.btn.style.color = THIS.pickerButtonColor;
      p.btn.style.font = '12px sans-serif';
      p.btn.style.textAlign = 'center';
      try {
        p.btn.style.cursor = 'pointer';
      } catch (eOldIE) {
        p.btn.style.cursor = 'hand';
      }
      p.btn.onmousedown = function () {
        THIS.hidePicker();
      };
      p.btnS.style.lineHeight = p.btn.style.height;

      // load images in optimal order
      switch (modeID) {
        case 0:
          var padImg = _hs2.default;
          break;
        case 1:
          var padImg = _hv2.default;
          break;
      }

      p.padM.style.backgroundImage = "url('" + _cross2.default + "')";
      p.padM.style.backgroundRepeat = "no-repeat";
      p.sldM.style.backgroundImage = "url('./" + _arrow2.default + "')";
      p.sldM.style.backgroundRepeat = "no-repeat";
      p.pad.style.backgroundImage = "url('" + padImg + "')";
      p.pad.style.backgroundRepeat = "no-repeat";
      p.pad.style.backgroundPosition = "0 0";

      // place pointers
      redrawPad();
      redrawSld();

      jscolor.picker.owner = THIS;
      document.getElementsByTagName('body')[0].appendChild(p.boxB);
    }

    function getPickerDims(o) {
      var dims = [2 * o.pickerInset + 2 * o.pickerFace + jscolor.images.pad[0] + (o.slider ? 2 * o.pickerInset + 2 * jscolor.images.arrow[0] + jscolor.images.sld[0] : 0), o.pickerClosable ? 4 * o.pickerInset + 3 * o.pickerFace + jscolor.images.pad[1] + o.pickerButtonHeight : 2 * o.pickerInset + 2 * o.pickerFace + jscolor.images.pad[1]];
      return dims;
    }

    function redrawPad() {
      // redraw the pad pointer
      switch (modeID) {
        case 0:
          var yComponent = 1;
          break;
        case 1:
          var yComponent = 2;
          break;
      }
      var x = Math.round(THIS.hsv[0] / 6 * (jscolor.images.pad[0] - 1));
      var y = Math.round((1 - THIS.hsv[yComponent]) * (jscolor.images.pad[1] - 1));
      jscolor.picker.padM.style.backgroundPosition = THIS.pickerFace + THIS.pickerInset + x - Math.floor(jscolor.images.cross[0] / 2) + 'px ' + (THIS.pickerFace + THIS.pickerInset + y - Math.floor(jscolor.images.cross[1] / 2)) + 'px';

      // redraw the slider image
      var seg = jscolor.picker.sld.childNodes;

      switch (modeID) {
        case 0:
          var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 1);
          for (var i = 0; i < seg.length; i += 1) {
            seg[i].style.backgroundColor = 'rgb(' + rgb[0] * (1 - i / seg.length) * 100 + '%,' + rgb[1] * (1 - i / seg.length) * 100 + '%,' + rgb[2] * (1 - i / seg.length) * 100 + '%)';
          }
          break;
        case 1:
          var rgb,
              s,
              c = [THIS.hsv[2], 0, 0];
          var i = Math.floor(THIS.hsv[0]);
          var f = i % 2 ? THIS.hsv[0] - i : 1 - (THIS.hsv[0] - i);
          switch (i) {
            case 6:
            case 0:
              rgb = [0, 1, 2];
              break;
            case 1:
              rgb = [1, 0, 2];
              break;
            case 2:
              rgb = [2, 0, 1];
              break;
            case 3:
              rgb = [2, 1, 0];
              break;
            case 4:
              rgb = [1, 2, 0];
              break;
            case 5:
              rgb = [0, 2, 1];
              break;
          }
          for (var i = 0; i < seg.length; i += 1) {
            s = 1 - 1 / (seg.length - 1) * i;
            c[1] = c[0] * (1 - s * f);
            c[2] = c[0] * (1 - s);
            seg[i].style.backgroundColor = 'rgb(' + c[rgb[0]] * 100 + '%,' + c[rgb[1]] * 100 + '%,' + c[rgb[2]] * 100 + '%)';
          }
          break;
      }
    }

    function redrawSld() {
      // redraw the slider pointer
      switch (modeID) {
        case 0:
          var yComponent = 2;
          break;
        case 1:
          var yComponent = 1;
          break;
      }
      var y = Math.round((1 - THIS.hsv[yComponent]) * (jscolor.images.sld[1] - 1));
      jscolor.picker.sldM.style.backgroundPosition = '0 ' + (THIS.pickerFace + THIS.pickerInset + y - Math.floor(jscolor.images.arrow[1] / 2)) + 'px';
    }

    function isPickerOwner() {
      return jscolor.picker && jscolor.picker.owner === THIS;
    }

    function blurTarget() {
      if (valueElement === target) {
        THIS.importColor();
      }
      if (THIS.pickerOnfocus) {
        THIS.hidePicker();
      }
    }

    function blurValue() {
      if (valueElement !== target) {
        THIS.importColor();
      }
    }

    function setPad(e) {
      var mpos = jscolor.getRelMousePos(e);
      var x = mpos.x - THIS.pickerFace - THIS.pickerInset;
      var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
      switch (modeID) {
        case 0:
          THIS.fromHSV(x * (6 / (jscolor.images.pad[0] - 1)), 1 - y / (jscolor.images.pad[1] - 1), null, leaveSld);
          break;
        case 1:
          THIS.fromHSV(x * (6 / (jscolor.images.pad[0] - 1)), null, 1 - y / (jscolor.images.pad[1] - 1), leaveSld);
          break;
      }
    }

    function setSld(e) {
      var mpos = jscolor.getRelMousePos(e);
      var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
      switch (modeID) {
        case 0:
          THIS.fromHSV(null, null, 1 - y / (jscolor.images.sld[1] - 1), leavePad);
          break;
        case 1:
          THIS.fromHSV(null, 1 - y / (jscolor.images.sld[1] - 1), null, leavePad);
          break;
      }
    }

    function dispatchImmediateChange() {
      if (THIS.onImmediateChange) {
        var callback;
        if (typeof THIS.onImmediateChange === 'string') {
          callback = new Function(THIS.onImmediateChange);
        } else {
          callback = THIS.onImmediateChange;
        }
        callback.call(THIS);
      }
    }

    var THIS = this;
    var modeID = this.pickerMode.toLowerCase() === 'hvs' ? 1 : 0;
    var abortBlur = false;
    var valueElement = jscolor.fetchElement(this.valueElement),
        styleElement = jscolor.fetchElement(this.styleElement);
    var holdPad = false,
        holdSld = false,
        touchOffset = {};
    var leaveValue = 1 << 0,
        leaveStyle = 1 << 1,
        leavePad = 1 << 2,
        leaveSld = 1 << 3;

    // target
    jscolor.addEvent(target, 'focus', function () {
      if (THIS.pickerOnfocus) {
        THIS.showPicker();
      }
    });
    jscolor.addEvent(target, 'blur', function () {
      if (!abortBlur) {
        window.setTimeout(function () {
          abortBlur || blurTarget();
          abortBlur = false;
        }, 0);
      } else {
        abortBlur = false;
      }
    });

    // valueElement
    if (valueElement) {
      var updateField = function updateField() {
        THIS.fromString(valueElement.value, leaveValue);
        dispatchImmediateChange();
      };
      jscolor.addEvent(valueElement, 'keyup', updateField);
      jscolor.addEvent(valueElement, 'input', updateField);
      jscolor.addEvent(valueElement, 'blur', blurValue);
      valueElement.setAttribute('autocomplete', 'off');
    }

    // styleElement
    if (styleElement) {
      styleElement.jscStyle = {
        backgroundImage: styleElement.style.backgroundImage,
        backgroundColor: styleElement.style.backgroundColor,
        color: styleElement.style.color
      };
    }

    // require images
    switch (modeID) {
      case 0:
        jscolor.requireImage(_hs2.default);
        break;
      case 1:
        jscolor.requireImage(_hv2.default);
        break;
    }
    jscolor.requireImage(_cross2.default);
    jscolor.requireImage(_arrow2.default);

    this.importColor();
  }

};
module.exports = exports["default"];

/***/ }),

/***/ "../../app/frontend/designer/js/widget/ui.anglepicker.js":
/*!*****************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/js/widget/ui.anglepicker.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
    ui.anglepicker
*/

$.widget("ui.anglepicker", $.ui.mouse, {
  widgetEventPrefix: "angle",
  _init: function _init() {
    this._mouseInit();
    this.pointer = $('<div class="ui-anglepicker-pointer"></div>');
    this.pointer.append('<div class="ui-anglepicker-dot"></div>');
    this.pointer.append('<div class="ui-anglepicker-line"></div>');

    this.element.addClass("ui-anglepicker");
    this.element.append(this.pointer);

    this.setDegrees(this.options.value);
  },
  _propagate: function _propagate(name, event) {
    this._trigger(name, event, this.ui());
  },
  _create: function _create() {},
  destroy: function destroy() {
    this._mouseDestroy();

    this.element.removeClass("ui-anglepicker");
    this.pointer.remove();
  },
  _mouseStart: function _mouseStart(event) {
    var myOffset = this.element.offset();
    this.width = this.element.width();
    this.height = this.element.height();

    this.startOffset = {
      x: myOffset.left + this.width / 2,
      y: myOffset.top + this.height / 2
    };

    this.element.addClass("ui-anglepicker-dragging");
    this.setDegreesFromEvent(event);
    this._propagate("start", event);
  },
  _mouseStop: function _mouseStop(event) {
    this.element.removeClass("ui-anglepicker-dragging");
    this._propagate("stop", event);
  },
  _mouseDrag: function _mouseDrag(event) {
    this.setDegreesFromEvent(event);
    this._propagate("change", event);
  },
  _setOption: function _setOption(key, value) {

    this._super(key, value);
  },

  ui: function ui() {
    return {
      element: this.element,
      value: this.options.value
    };
  },
  value: function value(newValue) {

    if (!arguments.length) {
      return this.options.value;
    }

    var oldValue = this.options.value;
    this.setDegrees(newValue);

    if (oldValue !== this.options.value) {
      this._propagate("change");
    }

    return this;
  },
  drawRotation: function drawRotation() {
    var value = this.options.clockwise ? this.options.value : -this.options.value;
    var rotation = 'rotate(' + -value + 'deg)';

    this.pointer.css({
      '-webkit-transform': rotation,
      '-moz-transform': rotation,
      '-ms-transform': rotation,
      '-o-transform': rotation,
      'transform': rotation
    });
  },
  setDegrees: function setDegrees(degrees) {
    this.options.value = this.clamp(degrees);
    this.drawRotation();
  },
  clamp: function clamp(degrees) {
    if (typeof degrees !== "number") {
      degrees = 0;
    }

    var min = this.options.min,
        max = min + 360;

    while (degrees < min) {
      degrees += 360;
    }
    while (degrees > max) {
      degrees -= 360;
    }

    return degrees;
  },
  setDegreesFromEvent: function setDegreesFromEvent(event) {
    var opposite = this.startOffset.y - event.pageY;
    opposite = this.options.clockwise ? opposite : -opposite;

    var adjacent = event.pageX - this.startOffset.x,
        radians = Math.atan(opposite / adjacent),
        degrees = Math.round(radians * (180 / Math.PI), 10);

    if (event.shiftKey) {
      degrees = this.roundToMultiple(degrees, this.options.shiftSnap);
    } else {
      degrees = this.roundToMultiple(degrees, this.options.snap);
    }

    if (adjacent < 0 && opposite >= 0) {
      degrees += 180;
    } else if (opposite < 0 && adjacent < 0) {
      degrees -= 180;
    }

    this.setDegrees(degrees);
  },
  roundToMultiple: function roundToMultiple(number, multiple) {
    var value = number / multiple,
        integer = Math.floor(value),
        rest = value - integer;

    return rest > 0.5 ? (integer + 1) * multiple : integer * multiple;
  },
  options: {
    distance: 1,
    delay: 1,
    snap: 1,
    min: 0,
    shiftSnap: 15,
    value: 90,
    clockwise: true // anti-clockwise if false
  }
});

/***/ }),

/***/ "../../app/frontend/designer/less/index.less":
/*!*****************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/less/index.less ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!../../app/frontend/designer/less/index.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../../app/frontend/designer/lib/inlineSVG.js":
/*!******************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/app/frontend/designer/lib/inlineSVG.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory(root)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(typeof global !== "undefined" ? global : undefined.window || undefined.global, function (root) {

    // Variables
    var inlineSVG = {},
        supports = !!document.querySelector && !!root.addEventListener,
        settings;

    // Defaults
    var defaults = {
        initClass: 'js-inlinesvg',
        svgSelector: 'img.svg'
    };

    /**
     * Stolen from underscore.js
     * @private
     * @param {Int} times
     * @param {Function} func
     */

    var after = function after(times, func) {
        return function () {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };

    /**
     * Merge two objects together
     * @private
     * @param {Function} fn
     */
    var extend = function extend() {

        // Variables
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;

        // Check if a deep merge
        if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
            deep = arguments[0];
            i++;
        }

        // Merge the object into the extended object
        var merge = function merge(obj) {
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    // If deep merge and property is an object, merge properties
                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        // Loop through each object and conduct a merge
        for (; i < length; i++) {
            var obj = arguments[i];
            merge(obj);
        }

        return extended;
    };

    // Methods

    /**
     * Grab all the SVGs that match the selector
     * @public
     */
    var getAll = function getAll() {

        var svgs = document.querySelectorAll(settings.svgSelector);
        return svgs;
    };

    /**
     * Inline all the SVGs in the array
     * @public
     */
    var inliner = function inliner(cb) {

        var svgs = getAll();
        var callback = after(svgs.length, cb);

        Array.prototype.forEach.call(svgs, function (svg, i) {

            // Store some attributes of the image
            var src = svg.src || svg.getAttribute('data-src'),
                attributes = svg.attributes;

            // Get the contents of the SVG
            var request = new XMLHttpRequest();
            request.open('GET', src, true);

            request.onload = function () {

                if (request.status >= 200 && request.status < 400) {

                    // Setup a parser to convert the response to text/xml in order for it
                    // to be manipulated and changed
                    var parser = new DOMParser(),
                        result = parser.parseFromString(request.responseText, 'text/xml'),
                        inlinedSVG = result.getElementsByTagName('svg')[0];

                    var titles = inlinedSVG.getElementsByTagName('title');
                    while (titles[0]) {
                        titles[0].parentNode.removeChild(titles[0]);
                    }var descs = inlinedSVG.getElementsByTagName('desc');
                    while (descs[0]) {
                        descs[0].parentNode.removeChild(descs[0]);
                    } // Remove some of the attributes that aren't needed
                    inlinedSVG.removeAttribute('xmlns:a');
                    inlinedSVG.removeAttribute('width');
                    inlinedSVG.removeAttribute('height');
                    inlinedSVG.removeAttribute('x');
                    inlinedSVG.removeAttribute('y');
                    inlinedSVG.removeAttribute('enable-background');
                    inlinedSVG.removeAttribute('xmlns:xlink');
                    inlinedSVG.removeAttribute('xml:space');
                    inlinedSVG.removeAttribute('version');

                    // Add in the attributes from the original <img> except `src` or
                    // `alt`, we don't need either
                    Array.prototype.slice.call(attributes).forEach(function (attribute) {
                        if (attribute.name !== 'src' && attribute.name !== 'alt') {
                            inlinedSVG.setAttribute(attribute.name, attribute.value);
                        }
                    });

                    // Add an additional class to the inlined SVG to imply it was
                    // infact inlined, might be useful to know
                    if (inlinedSVG.classList) {
                        inlinedSVG.classList.add('inlined-svg');
                    } else {
                        inlinedSVG.className += ' ' + 'inlined-svg';
                    }

                    // Add in some accessibility quick wins
                    inlinedSVG.setAttribute('role', 'img');

                    // Use the `longdesc` attribute if one exists
                    if (attributes.longdesc) {
                        var description = document.createElementNS('http://www.w3.org/2000/svg', 'desc'),
                            descriptionText = document.createTextNode(attributes.longdesc.value);

                        description.appendChild(descriptionText);
                        inlinedSVG.insertBefore(description, inlinedSVG.firstChild);
                    }

                    // Use the `alt` attribute if one exists
                    if (attributes.alt) {
                        inlinedSVG.setAttribute('aria-labelledby', 'title');

                        var title = document.createElementNS('http://www.w3.org/2000/svg', 'title'),
                            titleText = document.createTextNode(attributes.alt.value);

                        title.appendChild(titleText);
                        inlinedSVG.insertBefore(title, inlinedSVG.firstChild);
                    }

                    // Replace the image with the SVG
                    svg.parentNode.replaceChild(inlinedSVG, svg);

                    // Fire the callback
                    callback(settings.svgSelector);
                } else {

                    console.error('There was an error retrieving the source of the SVG.');
                }
            };

            request.onerror = function () {
                console.error('There was an error connecting to the origin server.');
            };

            request.send();
        });
    };

    /**
     * Initialise the inliner
     * @public
     */
    inlineSVG.init = function (options, callback) {

        // Test for support
        if (!supports) return;

        // Merge users option with defaults
        settings = extend(defaults, options || {});

        // Kick-off the inliner
        inliner(callback || function () {});
    };

    return inlineSVG;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/font-awesome/css/font-awesome.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/node_modules/css-loader!/Users/d023280/Documents/workspace/brainbox/node_modules/font-awesome/css/font-awesome.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/d023280/Documents/workspace/brainbox/node_modules/css-loader/index.js):\nError: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/font-awesome/css/font-awesome.css'");

/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!../../app/frontend/designer/less/index.less":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/node_modules/css-loader!/Users/d023280/Documents/workspace/brainbox/node_modules/less-loader/dist/cjs.js!/Users/d023280/Documents/workspace/brainbox/app/frontend/designer/less/index.less ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "../../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar {\n  margin: 0;\n  padding-top: 0;\n  padding-right: 10px;\n  top: 0;\n  right: 0;\n  left: 220px;\n  height: 60px;\n  overflow: visible;\n  z-index: 1000 !important;\n  position: absolute;\n  background-color: #B2E2F2;\n  border: none !important;\n}\n.toolbar * {\n  outline: none;\n}\n.toolbar .group {\n  padding-right: 20px;\n  display: inline-block;\n  vertical-align: top;\n}\n.toolbar .group .image-button {\n  display: inline-block;\n}\n.toolbar .group .image-button img {\n  margin: 5px;\n  margin-bottom: 0;\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  color: #777;\n  font-size: 45px;\n  transition: all 0.5s;\n}\n.toolbar .group .image-button div {\n  color: rgba(0, 0, 0, 0.5);\n  text-align: center;\n  font-size: 10px;\n}\n.toolbar .group .image-button.disabled {\n  opacity: 0.2;\n}\n.toolbar .group .image-button:not(.disabled) img {\n  cursor: pointer;\n}\n.toolbar .group .image-button:not(.disabled) img:hover {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.modal-backdrop.in {\n  opacity: 0.7;\n  background-color: black;\n  transition: opacity 0.4s linear;\n}\n.genericDialog .modal-content {\n  border-radius: 4px;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n  background-color: #ffffff;\n}\n.genericDialog .modal-content .modal-header {\n  border-bottom: 0;\n  font-weight: 400;\n  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);\n}\n.genericDialog .modal-content .modal-body {\n  padding: 1px;\n  min-height: 120px;\n}\n.genericDialog .modal-content .modal-body .form-control {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin: 0;\n  padding: 0;\n  color: #4D4D4D;\n  display: inline-block;\n  font: inherit;\n  border: 1px solid #DFDFDF;\n  box-shadow: none;\n  height: 24px;\n  padding: 0 3px;\n}\n.genericDialog .modal-content .modal-body .form-control:focus {\n  background-color: #f5f5f5;\n}\n.genericDialog .modal-content .modal-body .list-group {\n  overflow-y: auto;\n  overflow-x: auto;\n}\n.genericDialog .modal-content .modal-body .list-group *[data-draw2d=\"true\"] {\n  font-weight: bold;\n  color: #C21B7A;\n}\n.genericDialog .modal-content .modal-body .list-group .glyphicon,\n.genericDialog .modal-content .modal-body .list-group .fa {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #C21B7A;\n}\n.genericDialog .modal-content .modal-body .list-group .list-group-item {\n  background-color: transparent;\n  font-weight: 300;\n}\n.genericDialog .modal-content .modal-body .list-group .list-group-item:hover {\n  text-decoration: underline;\n}\n.genericDialog .modal-content .modal-body .list-group *[data-draw2d=\"false\"][data-type=\"file\"] {\n  color: gray;\n  cursor: default;\n  text-decoration: none !important;\n}\n.genericDialog .modal-content .modal-body .list-group *[data-draw2d=\"false\"][data-type=\"file\"] .fa {\n  color: gray;\n}\n.genericDialog .modal-content .modal-footer {\n  background-color: transparent;\n  border-top: 0;\n}\n.genericDialog .modal-content .modal-footer .btn {\n  border: 0;\n  text-transform: uppercase;\n  background-color: transparent;\n  color: #C21B7A;\n  transition: all 0.5s;\n}\n.genericDialog .modal-content .modal-footer .btn:hover {\n  background-color: rgba(194, 27, 122, 0.04);\n  transition: all 0.5s;\n}\n.genericDialog .modal-content .modal-footer .btn-primary {\n  font-weight: bold;\n}\n#fileOpenDialog .list-group {\n  height: 60%;\n}\n#fileSaveDialog .filePreview {\n  max-width: 200px;\n  max-height: 200px;\n}\n#fileSaveDialog .modal-body .media {\n  padding: 20px;\n}\n#githubFileSaveAsDialog .filePreview {\n  max-width: 200px;\n  max-height: 200px;\n}\n#githubFileSaveAsDialog .list-group {\n  height: 250px;\n}\n#canvas_zoom {\n  position: fixed;\n  bottom: 20px;\n  right: 270px;\n  background-color: rgba(178, 226, 242, 0.3);\n  border-radius: 5px;\n}\n#canvas_zoom button {\n  background-color: transparent;\n  font-weight: 300;\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 1px solid transparent;\n  outline: none;\n  transition: all 0.5s;\n}\n#canvas_zoom button:hover {\n  border: 1px solid #C21B7A;\n}\n/***BOOTSTRAP****/\n.btn {\n  border-radius: 0 !important;\n}\n.tooltip-inner {\n  border-radius: 0 !important;\n  padding: 10px !important;\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n  font-family: 'Roboto', sans-serif !important;\n  font-weight: 300 !important;\n  font-size: 14px !important;\n  color: #b0b0b0 !important;\n}\n/********/\nbody {\n  overflow: hidden;\n  font-family: 'Roboto', sans-serif !important;\n  font-weight: 300;\n}\ninput {\n  background: none repeat scroll 0 0 #f8f8f8;\n  border-color: #C6C6C6 #DADADA #EAEAEA;\n  border-radius: 4px 4px 4px 4px;\n  -moz-box-sizing: border-box;\n  padding-left: 7px;\n  border-style: solid ;\n  border-width: 1px;\n  vertical-align: middle;\n  height: 25px;\n  font-size: 14px;\n  line-height: 25px;\n}\n.input-block-level {\n  display: block;\n  width: 100%;\n  min-height: 28px;\n}\n.control-label {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n}\n/******************************************************************\n * Einstellungen der PropertyViews im Editmodus der \"Form\".\n ******************************************************************/\n.palette_node_element {\n  width: 48px;\n  height: 48px;\n  cursor: move;\n  margin: 10px auto 10px auto;\n}\n.tooltip {\n  z-index: 1000000;\n}\n/* Effects */\n.overlay-scale {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transform: scale(0.9);\n  transform: scale(0.9);\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.overlay-scale.open {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.readonly-highlight {\n  background-color: rgba(50, 43, 168, 0.5);\n  opacity: 0.2;\n  color: darkblue;\n  position: absolute;\n}\n.content {\n  position: absolute;\n  top: 60px;\n  right: 250px;\n  left: 220px;\n  overflow: scroll;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  bottom: 0;\n  background-color: #FFFFFF;\n}\n#canvas {\n  width: 6000px;\n  height: 6000px;\n}\n#canvas_config {\n  position: fixed;\n  width: 40px;\n  top: 65px;\n  left: 225px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  background-color: rgba(178, 226, 242, 0.3);\n}\n#canvas_config:hover {\n  border: 1px solid #C21B7A !important;\n}\n#canvas_config:hover {\n  color: #C21B7A;\n}\n#canvas_config_items {\n  position: fixed;\n  top: 90px;\n  left: 225px;\n  cursor: pointer;\n  padding: 10px;\n  white-space: nowrap;\n  min-width: 250px;\n}\n.layer-name-prompt .modal-title {\n  font-weight: 100;\n}\n.layer-name-prompt .modal-footer {\n  border: 0;\n}\n.layer-name-prompt .modal-header {\n  border-bottom: 3px solid #C21B7A;\n}\n.layer-name-prompt input {\n  outline: none !important;\n  -webkit-box-shadow: inset !important;\n  box-shadow: inset !important;\n  background-color: rgba(0, 0, 0, 0.02) !important;\n  border-radius: 1px !important;\n}\n.layer-name-prompt input:focus {\n  border: 1px solid #C21B7A;\n}\n.layer-name-prompt .btn-primary {\n  background-color: #C21B7A;\n  border: 0;\n}\n.layer-name-prompt .btn-primary:hover {\n  background-color: #95155e;\n}\n#layer {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 220px;\n  background-color: #ffffff;\n  text-align: center;\n  box-shadow: 5px 0 20px -3px rgba(31, 73, 125, 0.3);\n  z-index: 1;\n}\n#layer .title {\n  left: 10px;\n  right: 0px;\n  top: 10px;\n  position: absolute;\n}\n#layer .title img {\n  padding-right: 20px;\n  position: absolute;\n  left: 10px;\n}\n#layer .title div {\n  position: absolute;\n  left: 90px;\n}\n#layer .title div h1 {\n  font-size: 25px;\n  font-weight: 200;\n  line-height: 45px;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n}\n#layer .title div h2 {\n  font-size: 15px;\n  font-weight: 200;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n}\n#layer .panetitle {\n  position: fixed;\n  height: 30px;\n  width: 220px;\n  top: 90px;\n  border-bottom: 1px solid #222222;\n  font-weight: 500;\n  font-size: 12px;\n  padding: 4px 4px 4px 20px;\n  letter-spacing: 5px;\n  text-align: left;\n  color: #C21B7A;\n  box-shadow: 0 4px 2px -2px rgba(31, 73, 125, 0.3);\n}\n#layer #layer_elements {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  position: fixed;\n  top: 120px;\n  left: 0;\n  bottom: 0;\n  width: 220px;\n  overflow: auto;\n}\n#layer #layer_elements .layerElement {\n  background-color: #fafafa;\n  color: black;\n  cursor: move;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 1px;\n  padding: 4px 4px 4px 5px;\n  text-align: left;\n  border: 1px solid transparent;\n  border-bottom: 1px solid #222222;\n}\n#layer #layer_elements .layerElement::before {\n  content: \"\";\n  display: block;\n  width: 20px;\n  height: 20px;\n  float: left;\n  margin-right: 5px;\n}\n#layer #layer_elements .layerElement.ExtLine::before {\n  background: url(" + escape(__webpack_require__(/*! ../images/layer_line.svg */ "../../app/frontend/designer/images/layer_line.svg")) + ") no-repeat;\n  background-size: cover;\n}\n#layer #layer_elements .layerElement.PolyRect::before {\n  background: url(" + escape(__webpack_require__(/*! ../images/layer_rect.svg */ "../../app/frontend/designer/images/layer_rect.svg")) + ") no-repeat;\n  background-size: cover;\n}\n#layer #layer_elements .layerElement.PolyCircle::before {\n  background: url(" + escape(__webpack_require__(/*! ../images/layer_circle.svg */ "../../app/frontend/designer/images/layer_circle.svg")) + ") no-repeat;\n  background-size: cover;\n}\n#layer #layer_elements .layerElement.ExtLabel::before {\n  background: url(" + escape(__webpack_require__(/*! ../images/layer_text.svg */ "../../app/frontend/designer/images/layer_text.svg")) + ") no-repeat;\n  background-size: cover;\n}\n#layer #layer_elements .layerElement.ExtPort::before {\n  background: url(" + escape(__webpack_require__(/*! ../images/layer_port.svg */ "../../app/frontend/designer/images/layer_port.svg")) + ") no-repeat;\n  background-size: cover;\n}\n#layer #layer_elements .layerElement[data-visibility=\"false\"] {\n  opacity: 0.5;\n  font-style: italic;\n}\n#layer #layer_elements .layerElement .icon {\n  cursor: pointer;\n  padding-right: 4px;\n  width: 20px;\n  height: 20px;\n}\n#layer #layer_elements .layerElement .icon * {\n  stroke: black !important;\n}\n#layer #layer_elements .layerElement .icon:hover * {\n  stroke: #C21B7A !important;\n}\n#layer #layer_elements .layerSelectedElement {\n  background-color: #f5f5f5;\n  color: black;\n  border-style: dotted;\n  border-width: 1px;\n  border-color: #C21B7A;\n  font-weight: 600;\n}\n#code_overlay {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  z-index: 10000;\n}\n#code_close {\n  position: fixed;\n  right: 40px;\n  top: 10px;\n  width: 32px;\n  height: 32px;\n  z-index: 10000;\n  cursor: pointer;\n  font-size: 50px;\n}\n#code_close:hover {\n  color: #C21B7A;\n}\n#test_run {\n  position: fixed;\n  right: 90px;\n  top: 10px;\n  width: 32px;\n  height: 32px;\n  z-index: 10000;\n  cursor: pointer;\n  font-size: 50px;\n}\n#test_run:hover {\n  color: #C21B7A;\n}\n#test_info {\n  position: absolute;\n  color: black;\n  z-index: 20000;\n  top: 20px;\n  left: 20px;\n  border: 1px solid lightgray;\n  padding: 7px;\n  background-color: white;\n  border-radius: 2px;\n}\n#test_canvas {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  z-index: 10000;\n}\n#test_close {\n  position: fixed;\n  right: 40px;\n  top: 10px;\n  width: 32px;\n  height: 32px;\n  z-index: 10000;\n  cursor: pointer;\n  font-size: 50px;\n}\n#test_close:hover {\n  color: #C21B7A;\n}\n#test_clipboard {\n  position: fixed;\n  right: 100px;\n  top: 10px;\n  width: 32px;\n  height: 32px;\n  z-index: 10000;\n  cursor: pointer;\n  font-size: 50px;\n}\n#test_clipboard:hover {\n  color: #C21B7A;\n}\n.portDirectionOption {\n  height: 60px;\n  text-align: center;\n}\n.portDirectionOption label > input {\n  /* HIDE RADIO */\n  display: none;\n}\n.portDirectionOption label > input + span {\n  /* IMAGE STYLES */\n  cursor: pointer;\n  color: gray !important;\n  padding-right: 5px;\n}\n.portDirectionOption label > input:checked + span {\n  /* (CHECKED) IMAGE STYLES */\n  color: #C21B7A !important;\n}\n.portTypeOption {\n  height: 65px;\n  padding-left: 60px;\n}\n.portTypeOption label > input {\n  /* HIDE RADIO */\n  display: none;\n}\n.portTypeOption label > input + span {\n  /* IMAGE STYLES */\n  cursor: pointer;\n  color: gray !important;\n  padding-right: 5px;\n  font-weight: 100;\n  font-size: 14px;\n}\n.portTypeOption label > input + span:before {\n  padding-right: 10px;\n}\n.portTypeOption label > input:checked + span {\n  /* (CHECKED) IMAGE STYLES */\n  color: #C21B7A !important;\n}\n#filter {\n  position: absolute;\n  top: 60px;\n  right: 0;\n  bottom: 0;\n  width: 250px;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  border: 0;\n  background-color: #282a30;\n}\n#filter .filter_header {\n  background: none repeat scroll 0 0 #303030;\n  position: fixed;\n  height: 30px;\n  width: 250px;\n  top: 60px;\n  border-bottom: 1px solid #222222;\n  border-top: 1px solid #111111;\n  font-weight: 500;\n  font-size: 12px;\n  padding-top: 5px;\n  letter-spacing: 5px;\n  text-align: center;\n  color: #C21B7A;\n}\n#filter .filter_toolbar {\n  overflow: visible;\n  border: 0;\n  padding: 3px;\n  padding-left: 10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 250px;\n  height: 30px;\n  background: none repeat scroll 0 0 #303030;\n}\n#filter .filter_actions {\n  position: fixed;\n  top: 90px;\n  bottom: 30px;\n  width: 250px;\n  border: 0;\n  padding: 0;\n  overflow-y: auto;\n}\n#filter .filter_actions .panel-body {\n  padding: 7px;\n  padding-top: 0;\n}\n#filter .filter_actions .form-group {\n  margin-bottom: 2px !important;\n}\n#filter .filter_actions .form-group > .input-group {\n  margin-bottom: 10px;\n}\n#filter .filter_actions .form-group > .input-group:last-child {\n  margin-bottom: 0px;\n}\n#filter .filter_actions .icon {\n  color: #26B4A8;\n  padding: 0;\n  top: -4px;\n  color: rgba(255, 255, 255, 0.25);\n}\n#filter .filter_actions .icon:hover {\n  color: #C21B7A;\n}\n#filter .filter_actions .filter-heading {\n  color: #DDDDDD !important;\n  font-size: 12px;\n  padding-right: 10px !important;\n  padding-top: 1px !important;\n  padding-bottom: 0 !important;\n  background-color: transparent !important;\n  background-image: none !important;\n  border: 0 !important;\n  margin-top: 4px;\n  cursor: pointer;\n  font-weight: 300;\n}\n#filter .filter_actions .filter-heading .icon {\n  width: 15px;\n}\n#filter .filter_actions .filter-heading .icon * {\n  stroke: white !important;\n}\n#filter .form-control {\n  height: 25px;\n}\n#filter .btn {\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 1px;\n  padding-bottom: 2px;\n}\n#filter .input-group-addon {\n  padding: 0;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: rgba(0, 0, 0, 0.3);\n  background-color: white;\n  border-left: 0;\n  border-radius: 0;\n  font-weight: 100;\n  text-transform: lowercase;\n  font-size: 12px;\n}\n#filter .panel-default {\n  margin: 0;\n  border-radius: 0;\n  background-color: rgba(194, 27, 122, 0.02);\n  border: 0;\n  border-top: 1px solid #303030;\n  border-bottom: 1px solid #202525;\n  margin-top: 3px;\n}\n#FigureMarkdownEdit .header {\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: inline-block;\n  height: 60px;\n  background-color: white;\n  overflow: hidden;\n}\n#FigureMarkdownEdit .header .left {\n  width: 50%;\n  display: inline-block;\n  height: 60px;\n  font-size: 20px;\n  padding: 6px;\n  color: #CC4F5A;\n  background-color: rgba(0, 0, 0, 0.1);\n  vertical-align: top;\n}\n#FigureMarkdownEdit .header .left small {\n  font-size: 16px;\n}\n#FigureMarkdownEdit .header .right {\n  width: 50%;\n  display: inline-block;\n  height: 60px;\n  font-size: 20px;\n  padding: 6px;\n  color: #CC4F5A;\n  background-color: rgba(0, 0, 0, 0.05);\n  vertical-align: top;\n}\n#FigureMarkdownEdit .source {\n  width: 50%;\n  display: inline-block;\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  font-size: 13px;\n  padding: 2px;\n  top: 60px;\n  bottom: 0px;\n  position: absolute;\n}\n#FigureMarkdownEdit .preview {\n  width: 50%;\n  display: inline-block;\n  top: 0px;\n  left: 50%;\n  position: absolute;\n  background-color: white;\n  padding: 30px;\n  overflow: auto;\n  top: 60px;\n  bottom: 0px;\n}\n#FigureMarkdownEdit .preview img {\n  max-width: 35%;\n}\n#FigureMarkdownEdit .preview table {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #666;\n  font-size: 12px;\n  text-shadow: 1px 1px 0px #fff;\n  background: #eaebec;\n  margin: 20px;\n  margin-left: 0;\n  border: #ccc 1px solid;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  -moz-box-shadow: 0 1px 2px #d1d1d1;\n  -webkit-box-shadow: 0 1px 2px #d1d1d1;\n  box-shadow: 0 1px 2px #d1d1d1;\n}\n#FigureMarkdownEdit .preview table th {\n  padding: 21px 25px 22px 25px;\n  border-top: 1px solid #fafafa;\n  border-bottom: 1px solid #e0e0e0;\n}\n#FigureMarkdownEdit .preview table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n}\n#FigureMarkdownEdit .preview table tr:first-child th:first-child {\n  -moz-border-radius-topleft: 3px;\n  -webkit-border-top-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n#FigureMarkdownEdit .preview table tr:first-child th:last-child {\n  -moz-border-radius-topright: 3px;\n  -webkit-border-top-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n#FigureMarkdownEdit .preview table tr {\n  text-align: center;\n  padding-left: 20px;\n}\n#FigureMarkdownEdit .preview table tr td:first-child {\n  text-align: left;\n  padding-left: 20px;\n  border-left: 0;\n}\n#FigureMarkdownEdit .preview table tr td {\n  padding: 18px;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #e0e0e0;\n  border-left: 1px solid #e0e0e0;\n}\n#FigureMarkdownEdit .preview tbody tr:nth-child(odd) {\n  background: #fafafa;\n}\n#FigureMarkdownEdit .preview tbody tr:nth-child(even) {\n  background: #f3f3f3;\n}\n#FigureMarkdownEdit .preview table tr:last-child td {\n  border-bottom: 0;\n}\n#FigureMarkdownEdit .preview table tr:last-child td:first-child {\n  -moz-border-radius-bottomleft: 3px;\n  -webkit-border-bottom-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n#FigureMarkdownEdit .preview table tr:last-child td:last-child {\n  -moz-border-radius-bottomright: 3px;\n  -webkit-border-bottom-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.ui-anglepicker {\n  width: 52px;\n  height: 52px;\n  background: #dbdbdb;\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2RiZGJkYiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjIwJSIgc3RvcC1jb2xvcj0iI2UxZTFkZSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmOGY4ZjMiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\n  background: -moz-linear-gradient(top, #dbdbdb 0%, #e1e1de 20%, #f8f8f3 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #dbdbdb), color-stop(20%, #e1e1de), color-stop(100%, #f8f8f3));\n  background: -webkit-linear-gradient(top, #dbdbdb 0%, #e1e1de 20%, #f8f8f3 100%);\n  background: -o-linear-gradient(top, #dbdbdb 0%, #e1e1de 20%, #f8f8f3 100%);\n  background: -ms-linear-gradient(top, #dbdbdb 0%, #e1e1de 20%, #f8f8f3 100%);\n  background: linear-gradient(to bottom, #dbdbdb 0%, #e1e1de 20%, #f8f8f3 100%);\n  border: 2px solid #666;\n  -moz-box-shadow: inset 0 2px 3px white, inset 0 -1px 2px #fffef8;\n  -webkit-box-shadow: inset 0 2px 3px white, inset 0 -1px 2px #fffef8;\n  box-shadow: inset 0 2px 3px white, inset 0 -1px 2px #fffef8;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  position: relative;\n  display: inline-block;\n}\n.ui-anglepicker-pointer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  margin: -2px 0 0 -2px;\n  -moz-transform-origin: 2px 2px;\n  -webkit-transform-origin: 2px 2px;\n  -ms-transform-origin: 2px 2px;\n  -o-transform-origin: 2px 2px;\n  transform-origin: 2px 2px;\n}\n.ui-anglepicker:hover,\n.ui-anglepicker.ui-anglepicker-dragging {\n  border-color: #494949;\n}\n.ui-anglepicker-dragging .ui-anglepicker-dot,\n.ui-anglepicker-dragging .ui-anglepicker-line,\n.ui-anglepicker:hover .ui-anglepicker-dot,\n.ui-anglepicker:hover .ui-anglepicker-line {\n  background: #494949;\n}\n.ui-anglepicker-dot {\n  height: 4px;\n  width: 4px;\n  position: absolute;\n  background: #838383;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n}\n.ui-anglepicker-line {\n  margin-top: 1.5px;\n  margin-right: -2px;\n  height: 1px;\n  background: #838383;\n}\n#tool_shape.open .dropdown-menu {\n  -webkit-transform: scale(1, 1);\n  opacity: 1;\n  transform: scale(1, 1);\n}\n#tool_shape .dropdown-menu {\n  opacity: 0.1;\n  animation-fill-mode: forwards;\n  transform: scale(1, 0);\n  transform-origin: 0 0 ;\n  display: block;\n  transition: all 0.2s ease;\n}\n#tool_shape .tool_shape_entry {\n  text-align: left;\n}\n#tool_shape .tool_shape_entry img {\n  height: 30px;\n  padding-right: 20px;\n}\n#tool_shape .tool_shape_entry .tool_label {\n  min-width: 95px;\n  display: inline-block;\n}\n#tool_shape .tool_shape_entry .tool_shortcut {\n  color: rgba(0, 0, 0, 0.5);\n}\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/lib/css-base.js":
/*!*******************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/node_modules/css-loader/lib/css-base.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ "../../node_modules/css-loader/lib/url/escape.js":
/*!*********************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/node_modules/css-loader/lib/url/escape.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/css-loader/lib/url/escape.js'");

/***/ }),

/***/ "../../node_modules/font-awesome/css/font-awesome.css":
/*!**************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/node_modules/font-awesome/css/font-awesome.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader!./font-awesome.css */ "../../node_modules/css-loader/index.js!../../node_modules/font-awesome/css/font-awesome.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "../../node_modules/hogan.js/lib/hogan.js":
/*!**************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/node_modules/hogan.js/lib/hogan.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/hogan.js/lib/hogan.js'");

/***/ }),

/***/ "../../node_modules/jsts/dist/jsts.js":
/*!**********************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/node_modules/jsts/dist/jsts.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/jsts/dist/jsts.js'");

/***/ }),

/***/ "../../node_modules/mousetrap/mousetrap.js":
/*!***************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/node_modules/mousetrap/mousetrap.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/mousetrap/mousetrap.js'");

/***/ }),

/***/ "../../node_modules/remarkable/index.js":
/*!************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/node_modules/remarkable/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/remarkable/index.js'");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/d023280/Documents/workspace/brainbox/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'");

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/webpack/buildin/global.js'");

/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map