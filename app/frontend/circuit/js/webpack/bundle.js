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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/frontend/circuit/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/frontend/circuit/images/status_index.svg":
/*!******************************************************!*\
  !*** ./app/frontend/circuit/images/status_index.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/f8f2bdefb19f747d6637978fb9b0782c.svg";

/***/ }),

/***/ "./app/frontend/circuit/images/status_index_false.svg":
/*!************************************************************!*\
  !*** ./app/frontend/circuit/images/status_index_false.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/9b2205bc5b0cad9dfc56d407c90dfa0c.svg";

/***/ }),

/***/ "./app/frontend/circuit/images/status_index_true.svg":
/*!***********************************************************!*\
  !*** ./app/frontend/circuit/images/status_index_true.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "js/webpack/df803345f8879faa61c4f4d0c66224e1.svg";

/***/ }),

/***/ "./app/frontend/circuit/js/Application.js":
/*!************************************************!*\
  !*** ./app/frontend/circuit/js/Application.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The **GraphicalEditor** is responsible for layout and dialog handling.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Andreas Herz
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Palette = __webpack_require__(/*! ./Palette */ "./app/frontend/circuit/js/Palette.js");

var _Palette2 = _interopRequireDefault(_Palette);

var _View = __webpack_require__(/*! ./View */ "./app/frontend/circuit/js/View.js");

var _View2 = _interopRequireDefault(_View);

var _FilesScreen = __webpack_require__(/*! ./view/FilesScreen */ "./app/frontend/circuit/js/view/FilesScreen.js");

var _FilesScreen2 = _interopRequireDefault(_FilesScreen);

var _FileOpen = __webpack_require__(/*! ./dialog/FileOpen */ "./app/frontend/circuit/js/dialog/FileOpen.js");

var _FileOpen2 = _interopRequireDefault(_FileOpen);

var _FileSave = __webpack_require__(/*! ./dialog/FileSave */ "./app/frontend/circuit/js/dialog/FileSave.js");

var _FileSave2 = _interopRequireDefault(_FileSave);

var _BackendStorage = __webpack_require__(/*! ./io/BackendStorage */ "./app/frontend/circuit/js/io/BackendStorage.js");

var _BackendStorage2 = _interopRequireDefault(_BackendStorage);

var _Configuration = __webpack_require__(/*! ./Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * wait asyn that an DOM element is present
 * Usage: checkElement("<selector>").then(function(){alert("element found")})
 *
 * @returns {Promise<any>}
 */
function rafAsync() {
  return new Promise(function (resolve) {
    requestAnimationFrame(resolve); //faster than set time out
  });
}
function checkElement(selector) {
  if (document.querySelector(selector) === null) {
    return rafAsync().then(function () {
      return checkElement(selector);
    });
  } else {
    return Promise.resolve(true);
  }
}

var Application = function () {

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  function Application() {
    var _this = this;

    _classCallCheck(this, Application);

    this.palette = new _Palette2.default();
    this.view = new _View2.default("draw2dCanvas");
    this.filePane = new _FilesScreen2.default();

    $("#fileOpen, #editorFileOpen").on("click", function () {
      new _FileOpen2.default().show(_this.view);
    });
    $("#fileNew").on("click", function () {
      _this.fileNew();
    });

    $("#fileSave, #editorFileSave").on("click", function () {
      new _FileSave2.default().show(_this.view);
    });

    $("#appHelp").on("click", function () {
      $("#leftTabStrip .gitbook").click();
    });

    $("#appAbout").on("click", function () {
      $("#leftTabStrip .about").click();
    });

    /*
     * Replace all SVG images with inline SVG
     */
    $('img.svg').each(function (e) {
      var $img = $(e);
      var imgURL = $img.attr('src');

      $.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
        // Replace image with new SVG
        $img.replaceWith($svg);
      }, 'xml');
    });

    // check if the user has added a "file" parameter. In this case we load the shape from
    // the draw2d.shape github repository
    //
    var tutorial = this.getParam("tutorial");
    if (tutorial) {
      this.checkForTutorialMode();
    } else {
      var file = this.getParam("file");
      if (file) {
        $("#leftTabStrip .editor").click();
        this._load(file).then(function () {
          _this.checkForTutorialMode();
        });
      }
    }

    // listen on the history object to load files
    //
    window.onpopstate = function (event) {
      if (history.state && history.state.id === 'editor') {
        // Render new content for the hompage
        $("#leftTabStrip .editor").click();
        _this._load(history.state.file);
      }
    };
  }

  _createClass(Application, [{
    key: "_load",
    value: function _load(file) {
      var _this2 = this;

      return _BackendStorage2.default.loadFile(file).then(function (content) {
        _BackendStorage2.default.currentFile = file;
        _this2.view.clear();
        new draw2d.io.json.Reader().unmarshal(_this2.view, content);
        _this2.view.getCommandStack().markSaveLocation();
        _this2.view.centerDocument();
        return content;
      });
    }
  }, {
    key: "dump",
    value: function dump() {
      var writer = new draw2d.io.json.Writer();
      writer.marshal(this.view, function (json) {
        console.log(JSON.stringify(json, undefined, 2));
      });
    }
  }, {
    key: "checkForTutorialMode",
    value: function checkForTutorialMode() {
      var tutorial = this.getParam("tutorial");
      if (!tutorial || tutorial === '') {
        return;
      }

      switch (tutorial) {
        case "pairWebUSB":
          $("#leftTabStrip .editor").click();
          this._load("tutorial_pairWebUSB.brain").then(function () {
            checkElement("#paletteElementsScroll").then(function () {
              var anno = new Anno([{
                target: '#editConnections',
                content: 'Click here to pair your USB device...'
              }, {
                target: "#simulationStartStop",
                position: 'left',
                content: '..and press start to see how the LED is blinking.<br>' + 'Check the buildin LED of the connected Arduino on the USB port'
              }]);
              anno.show();
            });
          });
          break;
        default:
          break;
      }
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
    value: function fileNew(shapeTemplate, fileName) {
      $("#leftTabStrip .editor").click();

      this.view.clear();
      if (shapeTemplate) {
        new Reader().unmarshal(this.view, shapeTemplate);
      }

      if (fileName) {
        _BackendStorage2.default.currentFile = _BackendStorage2.default.sanitize(fileName);
      } else {
        _BackendStorage2.default.currentFile = "CircuitDiagram" + _Configuration2.default.fileSuffix;
      }
      this.view.centerDocument();
    }
  }]);

  return Application;
}();

var app = new Application();
exports.default = app;
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/Configuration.js":
/*!**************************************************!*\
  !*** ./app/frontend/circuit/js/Configuration.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// This configuration file will be overridden if the application
// is provided by a node.js server. In this case we store all
// circuits and shapes on the local node.js server instead of
// using the global available repository.
// Check the special route in the ./server/main.js for this.
//
// This is useful if you want run the DigitalTrainingStudio local on
// RaspberryPi or another IoT device
//
//
exports.default = {
  fileSuffix: ".brain",
  backend: {
    file: {
      list: function list(path) {
        return "../backend/brain/list?path=" + path;
      },
      get: function get(file) {
        return "../backend/brain/get?filePath=" + file;
      },
      image: function image() {
        return "../backend/brain/image?filePath=";
      },
      del: "../backend/brain/delete",
      rename: "../backend/brain/rename",
      save: "../backend/brain/save"
    }
  },
  issues: {
    url: "dddddd"
  },
  designer: {
    url: "../designer/"
  },
  updates: {
    url: "../backend/updates",
    shapes: "../backend/updates/shapes"
  },
  shapes: {
    url: "./shapes/",
    version: "0.0.0" // updated during after loading from the index.json file
  },
  color: {
    high: "#C21B7A",
    low: "#0078F2"
  }
};
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/ConnectionRouter.js":
/*!*****************************************************!*\
  !*** ./app/frontend/circuit/js/ConnectionRouter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ConnectionSelectionFeedbackPolicy = __webpack_require__(/*! ./ConnectionSelectionFeedbackPolicy */ "./app/frontend/circuit/js/ConnectionSelectionFeedbackPolicy.js");

var _ConnectionSelectionFeedbackPolicy2 = _interopRequireDefault(_ConnectionSelectionFeedbackPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = draw2d.layout.connection.InteractiveManhattanConnectionRouter.extend({
    NAME: "ConnectionRouter",

    /**
     * @constructor
     * Creates a new Router object.
     *
     */
    init: function init() {
        this._super();

        this.setBridgeRadius(4);
        this.setVertexRadius(3);
    },

    onInstall: function onInstall(conn) {
        this._super.apply(this, arguments);
        conn.installEditPolicy(new _ConnectionSelectionFeedbackPolicy2.default());
    },

    /**
     * @method
     * Set the radius of the vertex circle.
     *
     * @param {Number} radius
     */
    setVertexRadius: function setVertexRadius(radius) {
        this.vertexRadius = radius;

        return this;
    },

    /**
     * @method
     * Set the radius or span of the bridge. A bridge will be drawn if two connections are crossing and didn't have any
     * common port.
     *
     * @param {Number} radius
     */
    setBridgeRadius: function setBridgeRadius(radius) {
        this.bridgeRadius = radius;
        this.bridge_LR = [" r", 0.5, -0.5, radius - radius / 2, -(radius - radius / 4), radius, -radius, radius + radius / 2, -(radius - radius / 4), radius * 2, "0 "].join(" ");
        this.bridge_RL = [" r", -0.5, -0.5, -(radius - radius / 2), -(radius - radius / 4), -radius, -radius, -(radius + radius / 2), -(radius - radius / 4), -radius * 2, "0 "].join(" ");

        return this;
    },

    /**
     * @inheritdoc
     */
    x_paint: function x_paint(conn) {
        var _this = this;
        // get the intersections to the other connections
        //
        var intersectionsASC = conn.getCanvas().getIntersection(conn).sort("x");
        var intersectionsDESC = intersectionsASC.clone().reverse();

        var intersectionForCalc = intersectionsASC;

        // add a ArrayList of all added vertex nodes to the connection
        //
        if (typeof conn.vertexNodes !== "undefined" && conn.vertexNodes !== null) {
            conn.vertexNodes.remove();
        }
        conn.vertexNodes = conn.canvas.paper.set();

        // ATTENTION: we cast all x/y coordinates to integer and add 0.5 to avoid subpixel rendering of
        //            the connection. The 1px or 2px lines look much clearer than before.
        //
        var ps = conn.getVertices();
        var p = ps.get(0);
        var path = ["M", p.x, " ", p.y];

        var oldP = p;
        var bridgeWidth = this.bridgeRadius;
        var bridgeCode = null;

        var calc = function calc(ii, interP) {
            if (draw2d.shape.basic.Line.hit(5, oldP.x, oldP.y, p.x, p.y, interP.x, interP.y) === true) {
                // It is a vertex node..
                //
                if (conn.sharingPorts(interP.other)) {
                    var other = interP.other;
                    var otherZ = other.getZOrder();
                    var connZ = conn.getZOrder();
                    if (connZ < otherZ) {
                        var vertexNode = conn.canvas.paper.ellipse(interP.x, interP.y, _this.vertexRadius, _this.vertexRadius).attr({ fill: conn.lineColor.hash() });
                        conn.vertexNodes.push(vertexNode);
                    }
                }
                // ..or a bridge. We draw only horizontal bridges. Just a design decision
                //
                else if ((p.y | 0) === (interP.y | 0)) {
                        path.push(" L", interP.x - bridgeWidth, " ", interP.y);
                        path.push(bridgeCode);
                    }
            }
        };

        for (var i = 1; i < ps.getSize(); i++) {
            p = ps.get(i);

            // line goes from right->left.
            if (oldP.x > p.x) {
                intersectionForCalc = intersectionsDESC;
                bridgeCode = this.bridge_RL;
                bridgeWidth = -this.bridgeRadius;
            }
            // line goes from left->right
            else {
                    intersectionForCalc = intersectionsASC;
                    bridgeCode = this.bridge_LR;
                    bridgeWidth = this.bridgeRadius;
                }

            // bridge   => the connections didn't have a common port
            // vertex => the connections did have a common source or target port
            //
            intersectionForCalc.each(calc);

            path.push(" L", p.x, " ", p.y);
            oldP = p;
        }
        conn.svgPathString = path.join("");
    }
});
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/ConnectionSelectionFeedbackPolicy.js":
/*!**********************************************************************!*\
  !*** ./app/frontend/circuit/js/ConnectionSelectionFeedbackPolicy.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProbeFigure = __webpack_require__(/*! ./figures/ProbeFigure */ "./app/frontend/circuit/js/figures/ProbeFigure.js");

var _ProbeFigure2 = _interopRequireDefault(_ProbeFigure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = draw2d.policy.line.OrthogonalSelectionFeedbackPolicy.extend({

  NAME: "ConnectionSelectionFeedbackPolicy",

  /**
   * @constructor
   * Creates a new Router object.
   *
   */
  init: function init() {
    this._super();
  },

  onRightMouseDown: function onRightMouseDown(conn, x, y, shiftKey, ctrlKey) {
    var segment = conn.hitSegment(x, y);

    if (segment === null) {
      return;
    }

    // standard menu entry "split". It is always possible to split a connection
    //
    var items = {};

    // add/remove of connection segments is only possible in the edit mode
    //
    if (conn.getCanvas().isSimulationRunning() === false) {
      items.split = { name: draw2d.Configuration.i18n.menu.addSegment

        // "remove" a segment isn't always possible. depends from the router algorithm
        //
      };if (conn.getRouter().canRemoveSegmentAt(conn, segment.index)) {
        items.remove = { name: draw2d.Configuration.i18n.menu.deleteSegment };
      }
    }

    // add a probe label is always possible
    //
    var probeFigure = conn.getProbeFigure();
    if (probeFigure === null) {
      items.probe = { name: "Add Probe" };
    } else {
      items.unprobe = { name: "Remove Probe" };
    }

    $.contextMenu({
      selector: 'body',
      events: {
        hide: function hide() {
          $.contextMenu('destroy');
        }
      },
      callback: $.proxy(function (key, options) {
        var originalVertices = void 0,
            newVertices = void 0;

        switch (key) {
          case "remove":
            // deep copy of the vertices of the connection for the command stack to avoid side effects
            originalVertices = conn.getVertices().clone(true);
            this.removeSegment(conn, segment.index);
            newVertices = conn.getVertices().clone(true);
            conn.getCanvas().getCommandStack().execute(new draw2d.command.CommandReplaceVertices(conn, originalVertices, newVertices));
            break;

          case "split":
            // deep copy of the vertices of the connection for the command stack to avoid side effects
            originalVertices = conn.getVertices().clone(true);
            this.splitSegment(conn, segment.index, x, y);
            newVertices = conn.getVertices().clone(true);
            conn.getCanvas().getCommandStack().execute(new draw2d.command.CommandReplaceVertices(conn, originalVertices, newVertices));
            break;

          case "probe":
            var text = prompt("Probe Signal Label");
            if (text) {
              var label = new _ProbeFigure2.default({ text: text, stroke: 0, x: -20, y: -40 });
              var locator = new draw2d.layout.locator.ManhattanMidpointLocator();
              label.installEditor(new draw2d.ui.LabelInplaceEditor());
              conn.add(label, locator);
            }
            break;

          case "unprobe":
            conn.remove(conn.getProbeFigure());
            break;
          default:
            break;
        }
      }, this),
      x: x,
      y: y,
      items: items
    });
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/DropInterceptorPolicy.js":
/*!**********************************************************!*\
  !*** ./app/frontend/circuit/js/DropInterceptorPolicy.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = draw2d.policy.canvas.DropInterceptorPolicy.extend({

  NAME: "draw2d.policy.canvas.DropInterceptorPolicy",

  /**
   * @constructor
   *
   */
  init: function init(attr, setter, getter) {
    this._super(attr, setter, getter);
  },

  /**
   * @method
   * Called if the user want connect a port with any kind draw2d.Figure.<br>
   * Return a non <b>null</b> value if the interceptor accept the connect event.<br>
   * <br>
   * It is possible to delegate the drop event to another figure if the policy
   * returns another figure. This is usefull if a figure want to accept a port
   * drop event and delegates this drop event to another port.<br>
   *
   *
   * @param {draw2d.Figure} connectInquirer the figure who wants connect
   * @param {draw2d.Figure} connectIntent the potential connect target
   *
   * @return {draw2d.Figure} the calculated connect intent or <b>null</b> if the interceptor uses the veto right
   */
  delegateTarget: function delegateTarget(connectInquirer, connectIntent) {
    // we allow that a figure with a special class is droppable to a connection
    //
    if (connectInquirer instanceof draw2d.shape.node.Node && connectIntent instanceof draw2d.Connection) {
      if (connectInquirer.getInputPorts().getSize() > 0 && connectInquirer.getOutputPorts().getSize() > 0) {
        return connectIntent;
      }
    }

    // a composite accept any kind of figures exceptional ports
    //
    if (!(connectInquirer instanceof draw2d.Port) && connectIntent instanceof draw2d.shape.composite.StrongComposite) {
      return connectIntent;
    }

    // Ports accepts only Ports as DropTarget
    //
    if (!(connectIntent instanceof draw2d.Port) || !(connectInquirer instanceof draw2d.Port)) {
      return null;
    }

    // consider the max possible connections for this port
    //
    if (connectIntent.getConnections().getSize() >= connectIntent.getMaxFanOut()) {
      return null;
    }

    // It is not allowed to connect two output ports
    if (connectInquirer instanceof draw2d.OutputPort && connectIntent instanceof draw2d.OutputPort) {
      return null;
    }

    // It is not allowed to connect two input ports
    if (connectInquirer instanceof draw2d.InputPort && connectIntent instanceof draw2d.InputPort) {
      return null;
    }

    // It is not possible to create a loop back connection at the moment.
    // Reason: no connection router implemented for this case
    if (connectInquirer instanceof draw2d.Port && connectIntent instanceof draw2d.Port) {}
    //    if(connectInquirer === connectIntent){
    //       return null;
    // }


    // redirect the dragEnter handling to the hybrid port
    //
    if (connectInquirer instanceof draw2d.Port && connectIntent instanceof draw2d.shape.node.Hub) {
      return connectIntent.getHybridPort(0);
    }

    // return the connectTarget determined by the framework or delegate it to another
    // figure.
    return connectIntent;
  }

});
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/EditEditPolicy.js":
/*!***************************************************!*\
  !*** ./app/frontend/circuit/js/EditEditPolicy.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MarkerFigure = __webpack_require__(/*! ./figures/MarkerFigure */ "./app/frontend/circuit/js/figures/MarkerFigure.js");

var _MarkerFigure2 = _interopRequireDefault(_MarkerFigure);

var _FigureConfigDialog = __webpack_require__(/*! ./dialog/FigureConfigDialog */ "./app/frontend/circuit/js/dialog/FigureConfigDialog.js");

var _FigureConfigDialog2 = _interopRequireDefault(_FigureConfigDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = draw2d.policy.canvas.BoundingboxSelectionPolicy.extend({

  init: function init() {
    this._super();
    this.mouseMoveProxy = this._onMouseMoveCallback.bind(this);
    this.configIcon = null;
  },

  /**
   * @method
   * Called by the canvas if the user click on a figure.
   *
   * @param {draw2d.Figure} the figure under the click event. Can be null
   * @param {Number} mouseX the x coordinate of the mouse during the click event
   * @param {Number} mouseY the y coordinate of the mouse during the click event
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   *
   * @since 3.0.0
   */
  onClick: function onClick(figure, mouseX, mouseY, shiftKey, ctrlKey) {
    // we only forward the click-event to the MarkerFigure which the user can show hide per
    // default
    // lt in the edit mode as well.
    if (figure instanceof _MarkerFigure2.default) {
      this._super(figure, mouseX, mouseY, shiftKey, ctrlKey);
    }
  },

  onInstall: function onInstall(canvas) {
    this._super(canvas);

    // provide configuration menu if the mouse is close to a shape
    //
    canvas.on("mousemove", this.mouseMoveProxy);
  },

  onUninstall: function onUninstall(canvas) {
    this._super(canvas);

    canvas.off(this.mouseMoveProxy);
  },

  onMouseUp: function onMouseUp(canvas, x, y, shiftKey, ctrlKey) {
    if (shiftKey === true && this.mouseDownElement === null) {
      var rx = Math.min(x, this.x);
      var ry = Math.min(y, this.y);
      var rh = Math.abs(y - this.y);
      var rw = Math.abs(x - this.x);
      var raftFigure = new Raft();
      raftFigure.attr({
        x: rx,
        y: ry,
        width: rw,
        height: rh,
        color: "#1c9bab"
      });
      canvas.add(raftFigure);
      this.boundingBoxFigure1.setCanvas(null);
      this.boundingBoxFigure1 = null;
      this.boundingBoxFigure2.setCanvas(null);
      this.boundingBoxFigure2 = null;
    } else {
      this._super(canvas, x, y, shiftKey, ctrlKey);
    }
  },

  _onMouseMoveCallback: function _onMouseMoveCallback(emitter, event) {
    // there is no benefit to show decorations during Drag&Drop of an shape
    //
    if (this.mouseMovedDuringMouseDown === true) {
      if (this.configIcon !== null) {
        this.configIcon.remove();
        this.configIcon = null;
      }
      return;
    }

    var hit = null;

    emitter.getFigures().each(function (index, figure) {
      if (figure.hitTest(event.x, event.y, 30)) {
        hit = figure;
        return false;
      }
    });

    if (hit !== null && hit.getParameterSettings && hit.getParameterSettings().length > 0) {
      var pos = hit.getBoundingBox().getTopLeft();
      pos = emitter.fromCanvasToDocumentCoordinate(pos.x, pos.y);
      pos.y -= 30;

      if (this.configIcon === null) {
        this.configIcon = $("<div class='ion-gear-a' id='configMenuIcon'></div>");
        $("body").append(this.configIcon);
        this.configIcon.on("click", function () {
          _FigureConfigDialog2.default.show(hit, pos);
          this.configFigure = hit;
          if (this.configIcon !== null) {
            this.configIcon.remove();
            this.configIcon = null;
          }
        });
      }
      this.configIcon.css({ top: pos.y, left: pos.x, position: 'absolute' });
    } else {
      if (this.configIcon !== null) {
        var x = this.configIcon;
        this.configIcon = null;
        x.fadeOut(500, function () {
          return x.remove();
        });
      }
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/LabelInplaceEditor.js":
/*!*******************************************************!*\
  !*** ./app/frontend/circuit/js/LabelInplaceEditor.js ***!
  \*******************************************************/
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

/***/ "./app/frontend/circuit/js/Palette.js":
/*!********************************************!*\
  !*** ./app/frontend/circuit/js/Palette.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Configuration = __webpack_require__(/*! ./Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _hogan = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");

var _hogan2 = _interopRequireDefault(_hogan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Andreas Herz
 */

var Palette =
/**
 * @constructor
 *
 * @param {String} canvasId the id of the DOM element to use as paint container
 */
function Palette() {
  _classCallCheck(this, Palette);

  var $grid = $("#paletteElements");

  $.getJSON(_Configuration2.default.shapes.url + "index.json", function (data) {
    _Configuration2.default.shapes.version = data[0].version;
    data.forEach(function (element) {
      element.basename = element.name.split("_").pop();
    });

    var tmpl = _hogan2.default.compile($("#shapeTemplate").html());
    var html = tmpl.render({
      shapesUrl: _Configuration2.default.shapes.url,
      shapes: data
    });

    $("#paletteElements").html(html);

    // Advanced filtering
    $('#filter').on('keyup change', function (event) {
      if (event.keyCode === 27) {
        $('#filter').val("");
      }
      var val = this.value.toLowerCase();
      $grid.shuffle('shuffle', function ($el, shuffle) {
        var text = $.trim($el.data("name")).toLowerCase();
        if (text === "_request_") return true;
        return text.indexOf(val) !== -1;
      });
    });

    // Create the jQuery-Draggable for the palette -> canvas drag&drop interaction
    //
    $(".draw2d_droppable").draggable({
      appendTo: "body",
      helper: "clone",
      drag: function drag(event, ui) {
        event = app.view._getEvent(event);
        var pos = app.view.fromDocumentToCanvasCoordinate(event.clientX, event.clientY);
        app.view.onDrag(ui.draggable, pos.getX(), pos.getY(), event.shiftKey, event.ctrlKey);
      },
      stop: function stop(e, ui) {},
      start: function start(e, ui) {
        $(ui.helper).addClass("shadow");
      }
    });

    $('.draw2d_droppable').on('mouseover', function () {
      $(this).parent().addClass('glowBorder');
    }).on('mouseout', function () {
      $(this).parent().removeClass('glowBorder');
    });

    // add the "+" to the palette
    //
    var requestUrl = _Configuration2.default.issues.url + '?title=Request for shape&body=' + encodeURIComponent("Please add the description of the shape you request.\nWe try to implement it as soon as possible...");
    $("#paletteElements").append('  <div data-name="_request_" class="mix col-md-6 pallette_item">' + '  <a href="' + requestUrl + '" target="_blank">' + '    <div class="request">' + '       <div class="icon ion-ios-plus-outline"></div>' + '       <div >Request a Shape</div>' + '   </div>' + '   </a>' + '  </div>');

    //    $("#paletteElements").append("<div>++</div>");
  });

  socket.on("shape:generating", function (msg) {
    $("div[data-file='" + msg.filePath + "'] ").addClass("spinner");
  });

  socket.on("shape:generated", function (msg) {
    $("div[data-file='" + msg.filePath + "'] ").removeClass("spinner");
    $("div[data-file='" + msg.filePath + "'] img").attr({ src: _Configuration2.default.shapes.url + msg.imagePath + "?timestamp=" + new Date().getTime() });
  });
};

exports.default = Palette;
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/ProbeWindow.js":
/*!************************************************!*\
  !*** ./app/frontend/circuit/js/ProbeWindow.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _storageHelper = __webpack_require__(/*! storage-helper */ "./node_modules/storage-helper/dist/storage-helper.common.js");

var _storageHelper2 = _interopRequireDefault(_storageHelper);

var _d = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProbeWindow = function () {
  function ProbeWindow(canvas) {
    var _this2 = this;

    _classCallCheck(this, ProbeWindow);

    this.canvas = canvas;
    this.visible = false;

    // the tick function if the oszi goes from left to the right
    //
    this.rightShiftTick = function (entry) {
      entry.data.unshift(entry.probe.getValue() ? 5 : 0);
      entry.vis.selectAll("path").attr("transform", "translate(-" + _this2.xScale(1) + ")").attr("d", entry.path).transition().ease(d3.easeLinear)
      //.ease("linear")
      .duration(_this2.intervalTime).attr("transform", "translate(0)");
      entry.data.pop();
    };

    this.leftShiftTick = function (entry) {
      entry.data.push(entry.probe.getValue() ? 5 : 0);
      entry.vis.selectAll("path").attr("transform", "translate(" + _this2.xScale(1) + ")").attr("d", entry.path).transition().ease(d3.easeLinear)
      //.ease("linear")
      .duration(_this2.intervalTime).attr("transform", "translate(0)");
      entry.data.shift();
    };

    $(window).resize(function () {
      return _this2.resize();
    });

    this.canvas.on("probe:add", function (emitter, event) {
      return _this2.addProbe(event.figure);
    });
    this.canvas.on("probe:remove", function (emitter, event) {
      return _this2.removeProbe(event.figure);
    });

    this.channelBufferSize = 500;
    this.channelHeight = 20;
    this.channelWidth = $("#probe_window").width();
    this.probes = [];

    this.xScale = d3.scaleLinear().domain([0, this.channelBufferSize - 1]).range([0, this.channelWidth]);
    this.yScale = d3.scaleLinear().domain([0, 5]).range([this.channelHeight, 0]);

    $("#probe_window_stick").on("click", function () {
      if (_this2.visible) {
        _this2.hide();
      } else {
        _this2.show();
      }
    });
  }

  _createClass(ProbeWindow, [{
    key: "show",
    value: function show() {
      var _this = this;
      var probes = [];

      this.resize();

      // get all probes from the canvas and add them to the window
      //
      this.canvas.getLines().each(function (i, line) {
        var probe = line.getProbeFigure();
        if (probe !== null) {
          probes.push(probe);
        }
      });

      // sort the probes by the "index" attribute
      //
      probes.sort(function (a, b) {
        return a.index - b.index;
      });

      $("#probeSortable").remove();
      $("#probe_window").append('<ul id="probeSortable"></ul>');

      probes.forEach(function (probe) {
        _this.addProbe(probe);
      });

      if (probes.length > 0) $("#probe_hint").hide();else $("#probe_hint").show();
      $("#probe_window").show().animate({ height: '200px' }, 300);
      $("#draw2dCanvasWrapper").animate({ bottom: '200px' }, 300);
      $("#probeSortable").sortable({
        update: function update(event, ui) {
          var lis = $("#probeSortable li");
          $.each(lis, function (index, li) {
            var probeEntry = _this.probes.find(function (entry) {
              return entry.probe.id === li.attributes.id.value;
            });
            probeEntry.probe.setIndex(index);
          });
        }
      });
      this.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      $("#probe_window").animate({ height: '0' }, 300);
      $("#draw2dCanvasWrapper").animate({ bottom: '0' }, 300, function () {
        $("#probeSortable").remove();
      });
      this.visible = false;
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this3 = this;

      this.channelWidth = $("#probe_window").width();
      this.xScale = d3.scaleLinear().domain([0, this.channelBufferSize - 1]).range([0, this.channelWidth]);
      this.yScale = d3.scaleLinear().domain([0, 5]).range([this.channelHeight, 0]);

      this.probes.forEach(function (entry) {
        entry.svg.attr("width", _this3.channelWidth);
      });
    }
  }, {
    key: "tick",
    value: function tick(intervalTime) {
      // test fiddle for D3 line chart
      // http://jsfiddle.net/Q5Jag/1859/

      this.intervalTime = intervalTime;
      this.probes.forEach(this.leftShiftTick);
    }
  }, {
    key: "removeProbe",
    value: function removeProbe(probeFigure) {
      this.probes = $.grep(this.probes, function (entry) {
        return entry.probe !== probeFigure;
      });
      $("#" + probeFigure.id).remove();
      this.resize();
      if (this.probes.length > 0) $("#probe_hint").fadeOut();else $("#probe_hint").fadeIn();
    }
  }, {
    key: "addProbe",
    value: function addProbe(probeFigure) {
      probeFigure.setIndex(this.probes.length);

      var _this = this;

      var data = d3.range(this.channelBufferSize).map(function () {
        return 0;
      });
      var li = d3.select("#probeSortable").append("li").attr("id", probeFigure.id).attr("index", probeFigure.getIndex());
      var label = li.append("div").text(probeFigure.getText());

      var svg = li.append("svg:svg").attr("width", this.channelWidth).attr("height", this.channelHeight);
      var vis = svg.append("svg:g");
      var path = d3.line().x(function (d, i) {
        return _this.xScale(i);
      }).y(function (d, i) {
        return _this.yScale(d);
      }).curve(d3.curveStepBefore);
      //   .interpolate("step-before")

      vis.selectAll("path").data([data]).enter().append("svg:path").attr("d", path).attr('stroke', 'green').attr('stroke-width', 1).attr('fill', 'none');

      this.probes.push({
        data: data,
        svg: svg,
        vis: vis,
        path: path,
        probe: probeFigure
      });
      if (this.probes.length > 0) $("#probe_hint").hide();else $("#probe_hint").show();

      // direct edit of the label
      //
      var $label = $(label[0]);
      $label.click(function () {

        var $replaceWith = $('<input type="input" class="inplaceEdit" value="' + probeFigure.getText() + '" />');
        $label.hide();
        $label.after($replaceWith);
        $replaceWith.focus();

        var fire = function fire() {
          var newLabel = $replaceWith.val();
          if (newLabel !== "") {
            $replaceWith.remove();
            $label.html(newLabel);
            $label.show();
            probeFigure.setText(newLabel);
          } else {
            // get the value and post them here
            $replaceWith.remove();
            $label.show();
          }
        };
        $replaceWith.blur(fire);
        $replaceWith.keypress(function (e) {
          if (e.which === 13) {
            fire();
          }
        });
      });
      this.resize();
    }
  }]);

  return ProbeWindow;
}();

exports.default = ProbeWindow;
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/SimulationEditPolicy.js":
/*!*********************************************************!*\
  !*** ./app/frontend/circuit/js/SimulationEditPolicy.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = draw2d.policy.canvas.ReadOnlySelectionPolicy.extend({

  init: function init() {
    this._super();
    this.mouseDownElement = null;
  },

  onInstall: function onInstall(canvas) {
    canvas.getFigures().each(function (index, shape) {
      shape.onStart();
    });
  },

  onUninstall: function onUninstall(canvas) {
    canvas.getFigures().each(function (index, shape) {
      shape.onStop();
    });
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

    // may the figure is assigned to a composite. In this case the composite can
    // override the event receiver
    while (figure !== null) {
      var delegated = figure.getSelectionAdapter()();
      if (delegated === figure) {
        break;
      }
      figure = delegated;
    }

    // ignore ports since version 6.1.0. This is handled by the ConnectionCreatePolicy
    //
    if (figure instanceof draw2d.Port) {
      return; // silently
    }

    this.mouseDownElement = figure;

    if (this.mouseDownElement !== null) {
      this.mouseDownElement.fireEvent("mousedown", { x: x, y: y, shiftKey: shiftKey, ctrlKey: ctrlKey });
    }
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
  onMouseUp: function onMouseUp(canvas, x, y, shiftKey, ctrlKey) {
    if (this.mouseDownElement !== null) {
      this.mouseDownElement.fireEvent("mouseup", { x: x, y: y, shiftKey: shiftKey, ctrlKey: ctrlKey });
    }
    this.mouseDownElement = null;
  },

  /**
   * @method
   * Called by the canvas if the user click on a figure.
   *
   * @param {draw2d.Figure} the figure under the click event. Can be null
   * @param {Number} mouseX the x coordinate of the mouse during the click event
   * @param {Number} mouseY the y coordinate of the mouse during the click event
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   *
   * @since 3.0.0
   */
  onClick: function onClick(figure, mouseX, mouseY, shiftKey, ctrlKey) {
    if (figure !== null) {
      figure.fireEvent("click", {
        figure: figure,
        x: mouseX,
        y: mouseY,
        relX: mouseX - figure.getAbsoluteX(),
        relY: mouseY - figure.getAbsoluteY(),
        shiftKey: shiftKey,
        ctrlKey: ctrlKey
      });

      figure.onClick();
    }
  }
});
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/View.js":
/*!*****************************************!*\
  !*** ./app/frontend/circuit/js/View.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProbeWindow = __webpack_require__(/*! ./ProbeWindow */ "./app/frontend/circuit/js/ProbeWindow.js");

var _ProbeWindow2 = _interopRequireDefault(_ProbeWindow);

var _ConnectionRouter = __webpack_require__(/*! ./ConnectionRouter */ "./app/frontend/circuit/js/ConnectionRouter.js");

var _ConnectionRouter2 = _interopRequireDefault(_ConnectionRouter);

var _DropInterceptorPolicy = __webpack_require__(/*! ./DropInterceptorPolicy */ "./app/frontend/circuit/js/DropInterceptorPolicy.js");

var _DropInterceptorPolicy2 = _interopRequireDefault(_DropInterceptorPolicy);

var _EditEditPolicy = __webpack_require__(/*! ./EditEditPolicy */ "./app/frontend/circuit/js/EditEditPolicy.js");

var _EditEditPolicy2 = _interopRequireDefault(_EditEditPolicy);

var _ProbeFigure = __webpack_require__(/*! ./figures/ProbeFigure */ "./app/frontend/circuit/js/figures/ProbeFigure.js");

var _ProbeFigure2 = _interopRequireDefault(_ProbeFigure);

var _Configuration = __webpack_require__(/*! ./Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _Connection = __webpack_require__(/*! ./figures/Connection */ "./app/frontend/circuit/js/figures/Connection.js");

var _Connection2 = _interopRequireDefault(_Connection);

var _SimulationEditPolicy = __webpack_require__(/*! ./SimulationEditPolicy */ "./app/frontend/circuit/js/SimulationEditPolicy.js");

var _SimulationEditPolicy2 = _interopRequireDefault(_SimulationEditPolicy);

var _MarkdownDialog = __webpack_require__(/*! ./dialog/MarkdownDialog */ "./app/frontend/circuit/js/dialog/MarkdownDialog.js");

var _MarkdownDialog2 = _interopRequireDefault(_MarkdownDialog);

var _CodeDialog = __webpack_require__(/*! ./dialog/CodeDialog */ "./app/frontend/circuit/js/dialog/CodeDialog.js");

var _CodeDialog2 = _interopRequireDefault(_CodeDialog);

var _WebUSBHelpDialog = __webpack_require__(/*! ./dialog/WebUSBHelpDialog */ "./app/frontend/circuit/js/dialog/WebUSBHelpDialog.js");

var _WebUSBHelpDialog2 = _interopRequireDefault(_WebUSBHelpDialog);

var _hardware = __webpack_require__(/*! ./hardware */ "./app/frontend/circuit/js/hardware.js");

var _hardware2 = _interopRequireDefault(_hardware);

var _status_index = __webpack_require__(/*! ../images/status_index.svg */ "./app/frontend/circuit/images/status_index.svg");

var _status_index2 = _interopRequireDefault(_status_index);

var _status_index_true = __webpack_require__(/*! ../images/status_index_true.svg */ "./app/frontend/circuit/images/status_index_true.svg");

var _status_index_true2 = _interopRequireDefault(_status_index_true);

var _status_index_false = __webpack_require__(/*! ../images/status_index_false.svg */ "./app/frontend/circuit/images/status_index_false.svg");

var _status_index_false2 = _interopRequireDefault(_status_index_false);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! bootstrap-toggle/css/bootstrap-toggle.min.css */ "./node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css"); /**
                                                           *
                                                           * The **GraphicalEditor** is responsible for layout and dialog handling.
                                                           *
                                                           * @author Andreas Herz
                                                           */

__webpack_require__(/*! bootstrap-toggle/js/bootstrap-toggle.min */ "./node_modules/bootstrap-toggle/js/bootstrap-toggle.min.js");

exports.default = draw2d.Canvas.extend({

  init: function init(id) {
    var _this2 = this;

    var _this = this;

    this._super(id, 6000, 6000);

    this.probeWindow = new _ProbeWindow2.default(this);

    this.simulate = false;
    this.animationFrameFunc = this._calculate.bind(this);

    this.timerBase = 10; // ms calculate every 10ms all elements

    this.setScrollArea("#draw2dCanvasWrapper");

    // register this class as event listener for the canvas
    // CommandStack. This is required to update the state of
    // the Undo/Redo Buttons.
    //
    this.getCommandStack().addEventListener(this);

    var router = new _ConnectionRouter2.default();
    router.abortRoutingOnFirstVertexNode = false;
    var createConnection = this.createConnection = function (sourcePort, targetPort) {
      var c = new _Connection2.default({
        color: "#000000",
        router: router,
        stroke: 1.5,
        radius: 2
      });
      if (sourcePort) {
        c.setSource(sourcePort);
        c.setTarget(targetPort);
      }
      return c;
    };

    this.installEditPolicy(new _DropInterceptorPolicy2.default());

    // install a Connection create policy which matches to a "circuit like"
    // connections
    //
    this.connectionPolicy = new draw2d.policy.connection.ComposedConnectionCreatePolicy([
    // create a connection via Drag&Drop of ports
    //
    new draw2d.policy.connection.DragConnectionCreatePolicy({
      createConnection: createConnection
    }),
    // or via click and point
    //
    new draw2d.policy.connection.OrthogonalConnectionCreatePolicy({
      createConnection: createConnection
    })]);
    this.installEditPolicy(this.connectionPolicy);

    // show the ports of the elements only if the mouse cursor is close to the shape.
    //
    this.coronaFeedback = new draw2d.policy.canvas.CoronaDecorationPolicy({ diameterToBeVisible: 50 });
    this.installEditPolicy(this.coronaFeedback);

    // nice grid decoration for the canvas paint area
    //
    this.grid = new draw2d.policy.canvas.ShowGridEditPolicy(20);
    this.installEditPolicy(this.grid);

    // add some SnapTo policy for better shape/figure alignment
    //
    this.installEditPolicy(new draw2d.policy.canvas.SnapToGeometryEditPolicy());
    this.installEditPolicy(new draw2d.policy.canvas.SnapToCenterEditPolicy());
    this.installEditPolicy(new draw2d.policy.canvas.SnapToInBetweenEditPolicy());

    this.installEditPolicy(new _EditEditPolicy2.default());

    // Enable Copy&Paste for figures
    //
    Mousetrap.bindGlobal(['ctrl+c', 'command+c'], function () {
      var primarySelection = _this2.getSelection().getPrimary();
      if (primarySelection !== null) {
        _this2.clippboardFigure = primarySelection.clone({ excludePorts: true });
        _this2.clippboardFigure.translate(5, 5);
      }
      return false;
    });
    Mousetrap.bindGlobal(['ctrl+v', 'command+v'], function () {
      if (_this2.clippboardFigure !== null) {
        var cloneToAdd = _this2.clippboardFigure.clone({ excludePorts: true });
        var command = new draw2d.command.CommandAdd(_this2, cloneToAdd, cloneToAdd.getPosition());
        _this2.getCommandStack().execute(command);
        _this2.setCurrentSelection(cloneToAdd);
      }
      return false;
    });
    Mousetrap.bindGlobal(['left'], function (event) {
      var diff = _this.getZoom() < 0.5 ? 0.5 : 1;
      _this.getSelection().each(function (i, f) {
        f.translate(-diff, 0);
      });
      return false;
    });
    Mousetrap.bindGlobal(['up'], function (event) {
      var diff = _this.getZoom() < 0.5 ? 0.5 : 1;
      _this.getSelection().each(function (i, f) {
        f.translate(0, -diff);
      });
      return false;
    });
    Mousetrap.bindGlobal(['right'], function (event) {
      var diff = _this.getZoom() < 0.5 ? 0.5 : 1;
      _this.getSelection().each(function (i, f) {
        f.translate(diff, 0);
      });
      return false;
    });
    Mousetrap.bindGlobal(['down'], function (event) {
      var diff = _this.getZoom() < 0.5 ? 0.5 : 1;
      _this.getSelection().each(function (i, f) {
        f.translate(0, diff);
      });
      return false;
    });

    var setZoom = function setZoom(newZoom) {
      var bb = _this2.getBoundingBox().getCenter();
      var c = $("#draw2dCanvasWrapper");
      _this2.setZoom(newZoom);
      _this2.scrollTo(bb.y / newZoom - c.height() / 2, bb.x / newZoom - c.width() / 2);
    };

    //  ZoomIn Button and the callbacks
    //
    $("#canvas_zoom_in").on("click", function () {
      setZoom(_this2.getZoom() * 1.2);
    });

    // OneToOne Button
    //
    $("#canvas_zoom_normal").on("click", function () {
      return setZoom(1.0);
    });

    //ZoomOut Button and the callback
    //
    $("#canvas_zoom_out").on("click", function () {
      return setZoom(_this.getZoom() * 0.8);
    });

    $("#statusWebUSB .help-link").on("click", function () {
      return new _WebUSBHelpDialog2.default().show();
    });

    _hardware2.default.arduino.on("disconnect", this.hardwareChanged.bind(this));
    _hardware2.default.arduino.on("connect", this.hardwareChanged.bind(this));
    _hardware2.default.raspi.on("disconnect", this.hardwareChanged.bind(this));
    _hardware2.default.raspi.on("connect", this.hardwareChanged.bind(this));

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isHTTPS = location.protocol === 'https:';
    if (isChrome && isHTTPS) {
      $('#statusWebUSB').on("click", function () {
        if (_hardware2.default.arduino.connected) {
          _hardware2.default.arduino.disconnect();
        } else {
          _hardware2.default.arduino.connect();
        }
      });
    } else {
      $('#statusWebUSB').addClass("disabled");
    }

    this.deleteSelectionCallback = function () {
      var selection = _this.getSelection();
      _this.getCommandStack().startTransaction(draw2d.Configuration.i18n.command.deleteShape);
      selection.each(function (index, figure) {

        // Don't delete the conection if the source or target node part of the
        // selection. In this case the nodes deletes all connections by itself.
        //
        if (figure instanceof draw2d.Connection) {
          if (selection.contains(figure.getSource().getRoot()) || selection.contains(figure.getTarget().getRoot())) {
            return;
          }
        }

        var cmd = figure.createCommand(new draw2d.command.CommandType(draw2d.command.CommandType.DELETE));
        if (cmd !== null) {
          _this.getCommandStack().execute(cmd);
        }
      });
      // execute all single commands at once.
      _this.getCommandStack().commitTransaction();
    };

    $(".toolbar").delegate("#editDelete:not(.disabled)", "click", this.deleteSelectionCallback);
    Mousetrap.bindGlobal(['del', 'backspace'], this.deleteSelectionCallback);

    $(".toolbar").delegate("#editUndo:not(.disabled)", "click", function () {
      _this.getCommandStack().undo();
    });

    $(".toolbar").delegate("#editRedo:not(.disabled)", "click", function () {
      _this.getCommandStack().redo();
    });

    $("#simulationStartStop").on("click", function () {
      _this.simulationToggle();
    });

    // Register a Selection listener for the state hnadling
    // of the Delete Button
    //
    this.on("select", function (emitter, event) {
      $("#editDelete").removeClass("disabled");
    });
    this.on("unselect", function (emitter, event) {
      $("#editDelete").addClass("disabled");
    });

    this.on("contextmenu", function (emitter, event) {
      var figure = _this.getBestFigure(event.x, event.y);

      // a connectionprovides its own context menu
      //
      if (figure instanceof draw2d.Connection) {
        return;
      }
      if (figure instanceof _ProbeFigure2.default) {
        return;
      }

      if (figure !== null) {
        var x = event.x;
        var y = event.y;

        var baseName = figure.attr("userData.file").replace(/\.shape$/, "");
        var version = figure.VERSION;
        var pathToMD = _Configuration2.default.shapes.url + baseName + ".md";
        var pathToCustom = _Configuration2.default.shapes.url + baseName + ".custom";
        var pathToDesign = _Configuration2.default.designer.url + "?timestamp=" + new Date().getTime() + "&file=" + baseName + ".shape";
        var items = {
          "label": { name: "Attach Label", icon: "x ion-ios-pricetag-outline" },
          "delete": { name: "Delete", icon: "x ion-ios-close-outline" },
          "sep1": "---------",
          "design": { name: "Edit Shape", icon: "x ion-ios-compose-outline" },
          "code": { name: "Show Custom Code", icon: "x ion-code" },
          "help": { name: "Info", icon: "x ion-ios-information-outline" }
        };

        $.contextMenu({
          selector: 'body',
          events: {
            hide: function hide() {
              $.contextMenu('destroy');
            }
          },
          callback: $.proxy(function (key, options) {
            switch (key) {
              case "code":
                $.get(pathToCustom, function (content) {
                  new _CodeDialog2.default().show(content);
                });
                break;
              case "label":
                var text = prompt("Label");
                if (text) {
                  var label = new draw2d.shape.basic.Label({ text: text, stroke: 0, x: -20, y: -40 });
                  var locator = new draw2d.layout.locator.SmartDraggableLocator();
                  label.installEditor(new LabelInplaceEditor());
                  figure.add(label, locator);
                  Object.defineProperty(figure, "canvas", { configurable: false, writable: false });
                }
                break;
              case "design":
                window.open(pathToDesign, "designer");
                break;
              case "help":
                $.get(pathToMD, function (content) {
                  new _MarkdownDialog2.default().show(content, version);
                });
                break;
              case "delete":
                var cmd = new draw2d.command.CommandDelete(figure);
                _this.getCommandStack().execute(cmd);
                break;
              default:
                break;
            }
          }, this),
          x: x,
          y: y,
          items: items

        });
      }
    });

    // hide the figure configuration dialog if the user clicks inside the canvas
    //
    this.on("click", function () {
      $("#figureConfigDialog").hide();
    });

    socket.on("shape:generated", function (msg) {
      $.getScript(_Configuration2.default.shapes.url + msg.jsPath + "?timestamp=" + new Date().getTime(), _this2.reloadFromCache.bind(_this2));
    });

    this.slider = $('#simulationBaseTimer').slider({
      id: "simulationBaseTimerSlider"
    }).on("slide", function (event) {
      // min = 50     => 100ms
      // norm= 100    => 10ms ticks
      // max = 500    =>  2ms ticks
      //
      // To map between the different intervals
      // [A, B] --> [a, b]
      // use this formula
      // (val - A)*(b-a)/(B-A) + a

      if (event.value < 100) {
        _this.timerBase = parseInt(100 - ((event.value - 50) * (100 - 10) / (100 - 50) + 10));
      } else {
        _this.timerBase = parseInt(11 - ((event.value - 100) * (10 - 2) / (500 - 100) + 2));
      }
    });
  },

  isSimulationRunning: function isSimulationRunning() {
    return this.simulate;
  },

  /**
   * @method
   * Clear the canvas and stop the simulation. Be ready for the next clean circuit
   * load. Start from the beginning
   */
  clear: function clear() {
    this.simulationStop();

    this._super();

    this.centerDocument();
  },

  /**
   * Disable snapTo GRID if we have select more than one element
   * @param figure
   * @param pos
   */
  snapToHelper: function snapToHelper(figure, pos) {
    if (this.getSelection().getSize() > 1) {
      return pos;
    }
    return this._super(figure, pos);
  },

  /**
   * @method
   * Called if the user drop the droppedDomNode onto the canvas.<br>
   * <br>
   * Draw2D use the jQuery draggable/droppable lib. Please inspect
   * http://jqueryui.com/demos/droppable/ for further information.
   *
   * @param {HTMLElement} droppedDomNode The dropped DOM element.
   * @param {Number} x the x coordinate of the drop
   * @param {Number} y the y coordinate of the drop
   * @param {Boolean} shiftKey true if the shift key has been pressed during this event
   * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
   * @private
   **/
  onDrop: function onDrop(droppedDomNode, x, y, shiftKey, ctrlKey) {
    var type = $(droppedDomNode).data("shape");
    var file = $(droppedDomNode).data("file");
    console.log(file);
    var figure = eval("new " + type + "();"); // jshint ignore:line
    figure.attr("userData.file", file);

    // create a command for the undo/redo support
    var command = new draw2d.command.CommandAdd(this, figure, x, y);
    this.getCommandStack().execute(command);
  },

  simulationToggle: function simulationToggle() {
    if (this.simulate === true) {
      this.simulationStop();
    } else {
      this.simulationStart();
    }
  },

  simulationStart: function simulationStart() {
    if (this.simulate === true) {
      return; // silently
    }

    this.simulate = true;

    this.installEditPolicy(new _SimulationEditPolicy2.default());
    this.uninstallEditPolicy(this.connectionPolicy);
    this.uninstallEditPolicy(this.coronaFeedback);
    this.commonPorts.each(function (i, p) {
      p.setVisible(false);
    });

    this._calculate();

    $("#simulationStartStop").addClass("pause");
    $("#simulationStartStop").removeClass("play");
    $(".editBase").fadeOut("slow", function () {
      $(".simulationBase").fadeIn("slow");
    });
    $("#paletteElementsOverlay").fadeIn("fast");
    $("#paletteElementsOverlay").height($("#paletteElements").height());
    this.slider.slider("setValue", 100);
  },

  simulationStop: function simulationStop() {
    this.simulate = false;
    this.commonPorts.each(function (i, p) {
      p.setVisible(true);
    });
    this.installEditPolicy(new _EditEditPolicy2.default());
    this.installEditPolicy(this.connectionPolicy);
    this.installEditPolicy(this.coronaFeedback);

    $("#simulationStartStop").addClass("play");
    $("#simulationStartStop").removeClass("pause");
    $(".simulationBase").fadeOut("slow", function () {
      $(".editBase").fadeIn("slow");
    });
    $("#paletteElementsOverlay").fadeOut("fast");
  },

  _calculate: function _calculate() {
    // call the "calculate" method if given to calculate the output-port values
    //
    this.getFigures().each(function (i, figure) {
      figure.calculate();
    });

    // transport the value from oututPort to inputPort
    //
    this.getLines().each(function (i, line) {
      var outPort = line.getSource();
      var inPort = line.getTarget();
      inPort.setValue(outPort.getValue());
      line.setColor(outPort.getValue() ? _Configuration2.default.color.high : _Configuration2.default.color.low);
    });

    if (this.simulate === true) {
      //     setImmediate(this.animationFrameFunc);
      setTimeout(this.animationFrameFunc, this.timerBase);
    }

    this.probeWindow.tick(this.timerBase);
  },

  /**
   * @method
   * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
   * can be used to identify the type of event which has occurred.
   *
   * @template
   *
   * @param {draw2d.command.CommandStackEvent} event
   **/
  stackChanged: function stackChanged(event) {
    if (event.isPreChangeEvent()) {
      return; // silently
    }

    $("#editUndo").addClass("disabled");
    $("#editRedo").addClass("disabled");

    if (event.getStack().canUndo()) {
      $("#editUndo").removeClass("disabled");
    }

    if (event.getStack().canRedo()) {
      $("#editRedo").removeClass("disabled");
    }

    this.hardwareChanged();
  },

  hardwareChanged: function hardwareChanged() {
    // check if a new element is added which requires or provides special hardware
    // support. In this case we can update the UI with some status indicator
    //
    var elements = this.getFigures().clone().asArray();
    elements = elements.filter(function (element) {
      return element.getRequiredHardware;
    });
    var arduinoRequired = elements.reduce(function (sum, cur) {
      return sum || cur.getRequiredHardware().arduino;
    }, false);
    var raspiRequired = elements.reduce(function (sum, cur) {
      return sum || cur.getRequiredHardware().raspi;
    }, false);
    var raspiConnected = _hardware2.default.raspi.connected;
    var arduinoConnected = _hardware2.default.arduino.connected;

    // Det the status of top button for the pulldown menu.
    //
    if (arduinoRequired === false && raspiRequired === false) {
      $("#editConnections").attr("src", _status_index2.default);
    } else {
      var error = raspiRequired === true && raspiConnected === false || arduinoRequired === true && arduinoConnected === false;
      $("#editConnections").attr("src", error ? _status_index_false2.default : _status_index_true2.default);
    }

    // set the status indicator for the arduino webusb connections
    //
    if (arduinoConnected) {
      $("#statusWebUSB").removeClass("error");
    } else {
      $("#statusWebUSB").addClass("error");
    }

    // set the status indicator for the arduino webusb connections
    //
    if (raspiConnected) {
      $("#statusRaspi").removeClass("error");
    } else {
      $("#statusRaspi").addClass("error");
    }
  },

  getBoundingBox: function getBoundingBox() {
    var xCoords = [];
    var yCoords = [];
    this.getFigures().each(function (i, f) {
      var b = f.getBoundingBox();
      xCoords.push(b.x, b.x + b.w);
      yCoords.push(b.y, b.y + b.h);
    });
    var minX = Math.min.apply(Math, xCoords);
    var minY = Math.min.apply(Math, yCoords);
    var width = Math.max(100, Math.max.apply(Math, xCoords) - minX);
    var height = Math.max(100, Math.max.apply(Math, yCoords) - minY);

    return new draw2d.geo.Rectangle(minX, minY, width, height);
  },

  reloadFromCache: function reloadFromCache() {
    var _this3 = this;

    new draw2d.io.json.Writer().marshal(this, function (json) {
      draw2d.Canvas.prototype.clear.call(_this3);
      new draw2d.io.json.Reader().unmarshal(_this3, json);
    });
  },

  centerDocument: function centerDocument() {
    var c = $("#draw2dCanvasWrapper");
    if (this.getFigures().getSize() > 0) {
      // get the bounding box of the document and translate the complete document
      // into the center of the canvas. Scroll to the top left corner after them
      //
      var bb = this.getBoundingBox();
      this.scrollTo(bb.y - c.height() / 2 + bb.h / 2, bb.x - c.width() / 2 + bb.w / 2);
    } else {
      var _bb = {
        x: this.getWidth() / 2,
        y: this.getHeight() / 2
      };
      this.scrollTo(_bb.y - c.height() / 2, _bb.x - c.width() / 2);
    }
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
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/dialog/CodeDialog.js":
/*!******************************************************!*\
  !*** ./app/frontend/circuit/js/dialog/CodeDialog.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! google-code-prettify/bin/prettify.min.css */ "./node_modules/google-code-prettify/bin/prettify.min.css");

var _prettify = __webpack_require__(/*! google-code-prettify/bin/prettify.min */ "./node_modules/google-code-prettify/bin/prettify.min.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CodeDialog = function () {
  function CodeDialog() {
    _classCallCheck(this, CodeDialog);
  }

  _createClass(CodeDialog, [{
    key: "show",
    value: function show(js) {
      $('#codePreviewDialog .prettyprint').text(js);
      $('#codePreviewDialog .prettyprint').removeClass("prettyprinted");
      (0, _prettify.prettyPrint)();
      $('#codePreviewDialog').modal('show');
    }
  }]);

  return CodeDialog;
}();

exports.default = CodeDialog;
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/dialog/FigureConfigDialog.js":
/*!**************************************************************!*\
  !*** ./app/frontend/circuit/js/dialog/FigureConfigDialog.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //"private" variables


var _hogan = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");

var _hogan2 = _interopRequireDefault(_hogan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var currentFigure = null;

//"public" stuff
var dialog = null;

exports.default = dialog = new (function () {
  function FigureConfigDialog() {
    _classCallCheck(this, FigureConfigDialog);
  }

  _createClass(FigureConfigDialog, [{
    key: "show",
    value: function show(figure, pos) {
      var _this = this;

      Mousetrap.pause();
      currentFigure = figure;

      var settings = figure.getParameterSettings().slice(0);
      $.each(settings, function (i, el) {
        el.value = currentFigure.attr("userData." + el.name);
      });
      var compiled = _hogan2.default.compile('  <div class="header">Object Configuration</div>   ' + '  {{#settings}}               ' + '         <div class="form-group">' + '           <label for="figure_property_{{name}}">{{label}}</label>' + '           <input type="text" class="form-control" id="figure_property_{{name}}" data-name="{{name}}" value="{{value}}" placeholder="{{label}}">' + '         </div>                  ' + '  {{/settings}}                  ' + '<button class="submit">Ok</button> ');
      var output = compiled.render({
        settings: settings
      });

      $("#figureConfigDialog").html(output);
      $("#figureConfigDialog").show().css({ top: pos.y, left: pos.x, position: 'absolute' });
      $("#figureConfigDialog input, #figureConfigDialog select").focus();

      $("#figureConfigDialog input").keypress(function (e) {
        if (e.which == 13) {
          _this.hide();
        }
      });
      $("#figureConfigDialog .submit").on("click", function () {
        _this.hide();
      });

      $.each(settings, function (index, setting) {
        var figureValue = currentFigure.attr("userData." + setting.name);
        $('#figureConfigDialog select[data-name="' + setting.name + '"] option[value="' + figureValue + '"]').attr('selected', 'selected');
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      Mousetrap.unpause();
      if (currentFigure !== null) {
        $("#figureConfigDialog input, #figureConfigDialog select").each(function (i, element) {
          element = $(element);
          var value = element.val();
          var name = element.data("name");

          currentFigure.attr("userData." + name, value);
        });
      }
      $("#figureConfigDialog").hide();
      $("#figureConfigDialog").html("");

      currentFigure = null;
    }
  }]);

  return FigureConfigDialog;
}())();
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/dialog/FileNew.js":
/*!***************************************************!*\
  !*** ./app/frontend/circuit/js/dialog/FileNew.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileNew = function () {

  /**
   * @constructor
   *
   */
  function FileNew() {
    _classCallCheck(this, FileNew);
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


  _createClass(FileNew, [{
    key: "show",
    value: function show() {
      $("#fileNewDialog .githubFileName").val("NewDocument");
      $('#fileNewDialog').on('shown.bs.modal', function () {
        $(this).find('input:first').focus();
      });
      $("#fileNewDialog").modal("show");

      $("#fileNewDialog .okButton").on("click", function () {
        var name = $("#fileNewDialog .githubFileName").val();
        $('#fileNewDialog').modal('hide');
        app.fileNew(undefined, name);
      });
    }
  }]);

  return FileNew;
}();

exports.default = FileNew;
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/dialog/FileOpen.js":
/*!****************************************************!*\
  !*** ./app/frontend/circuit/js/dialog/FileOpen.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configuration = __webpack_require__(/*! ../Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _hogan = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");

var _hogan2 = _interopRequireDefault(_hogan);

var _BackendStorage = __webpack_require__(/*! ../io/BackendStorage */ "./app/frontend/circuit/js/io/BackendStorage.js");

var _BackendStorage2 = _interopRequireDefault(_BackendStorage);

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
    value: function show(view) {
      $('#fileOpenDialog').modal('show');
      this.fetchPathContent("", view);
    }
  }, {
    key: "fetchPathContent",
    value: function fetchPathContent(newPath, view) {
      var _this = this;

      _BackendStorage2.default.getFiles(newPath).then(function (files) {

        var compiled = _hogan2.default.compile("\n               {{^rootDir}}     \n               <a href=\"#\" class=\"list-group-item githubPath\" data-type=\"dir\" data-path=\"{{parentPath}}\" >\n                   <span class=\"glyphicon glyphicon-menu-left\"></span>\n                   ..\n               </a>\n               {{/rootDir}}\n               {{#files}}\n                 <a href=\"#\" data-draw2d=\"{{draw2d}}\" class=\"list-group-item githubPath text-nowrap\" data-type=\"{{type}}\" data-path=\"{{currentDir}}{{name}}\" data-id=\"{{id}}\">\n                    <span class=\"glyphicon {{icon}}\"></span>\n                    {{{name}}}\n                 </a>\n               {{/files}}\n          ");

        var parentPath = _BackendStorage2.default.dirname(newPath);
        var output = compiled.render({
          parentPath: parentPath,
          currentDir: _BackendStorage2.default.currentDir,
          files: files,
          rootDir: newPath === null,
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

        $(".githubPath[data-type='dir']").on("click", function (event) {
          _this.fetchPathContent($(event.currentTarget).data("path"), view);
        });

        $('.githubPath*[data-draw2d="true"][data-type="file"]').on("click", function (event) {
          var path = $(event.currentTarget).data("path");
          _BackendStorage2.default.loadFile(path).then(function (content) {
            $('#fileOpenDialog').modal('hide');
            _BackendStorage2.default.currentFile = path;
            view.clear();
            new draw2d.io.json.Reader().unmarshal(view, content);
            view.getCommandStack().markSaveLocation();
            view.centerDocument();
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

/***/ "./app/frontend/circuit/js/dialog/FileSave.js":
/*!****************************************************!*\
  !*** ./app/frontend/circuit/js/dialog/FileSave.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BackendStorage = __webpack_require__(/*! ../io/BackendStorage */ "./app/frontend/circuit/js/io/BackendStorage.js");

var _BackendStorage2 = _interopRequireDefault(_BackendStorage);

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
    value: function show(canvas) {
      Mousetrap.pause();
      $("#fileSaveDialog .githubFileName").val(_BackendStorage2.default.currentFile);

      $('#fileSaveDialog').off('shown.bs.modal').on('shown.bs.modal', function (event) {
        $(event.currentTarget).find('input:first').focus();
      });
      $("#fileSaveDialog").modal("show");

      // Button: Commit to GitHub
      //
      $("#fileSaveDialog .okButton").off("click").on("click", function () {
        canvas.setCurrentSelection(null);
        new draw2d.io.png.Writer().marshal(canvas, function (imageDataUrl) {
          var writer = new draw2d.io.json.Writer();
          writer.marshal(canvas, function (json) {
            var name = $("#fileSaveDialog .githubFileName").val();
            name = _BackendStorage2.default.sanitize(name);
            _BackendStorage2.default.saveFile(json, imageDataUrl, name).then(function () {
              Mousetrap.unpause();
              _BackendStorage2.default.currentFile = name;
              $('#fileSaveDialog').modal('hide');
            });
          });
        }, canvas.getBoundingBox().scale(10, 10));
      });
    }
  }]);

  return FileSave;
}();

exports.default = FileSave;
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/dialog/MarkdownDialog.js":
/*!**********************************************************!*\
  !*** ./app/frontend/circuit/js/dialog/MarkdownDialog.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _remarkable = __webpack_require__(/*! remarkable */ "./node_modules/remarkable/index.js");

var _remarkable2 = _interopRequireDefault(_remarkable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MarkdownDialog = function () {
  function MarkdownDialog() {
    _classCallCheck(this, MarkdownDialog);

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

  _createClass(MarkdownDialog, [{
    key: 'show',
    value: function show(markdown, version) {
      var markdownParser = new _remarkable2.default('full', this.defaults);
      $('#markdownDialog .html').html(markdownParser.render(markdown));
      $('#markdownDialog .version').html(version);
      $('#markdownDialog').modal('show');
    }
  }]);

  return MarkdownDialog;
}();

exports.default = MarkdownDialog;
module.exports = exports['default'];

/***/ }),

/***/ "./app/frontend/circuit/js/dialog/PopConfirm.js":
/*!******************************************************!*\
  !*** ./app/frontend/circuit/js/dialog/PopConfirm.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.extend({
  popConfirm: function popConfirm(options) {
    var defaults = {
      title: 'Confirmation',
      content: 'Are you really sure ?',
      placement: 'right',
      container: 'body',
      yesBtn: 'Yes',
      noBtn: 'No'
    },
        last = null;
    options = $.extend(defaults, options);
    return this.each(function () {
      var self = $(this),
          arrayActions = [],
          arrayDelegatedActions = [],
          eventToConfirm,
          optName,
          optValue,
          i,
          elmType,
          code,
          form;

      // Load data-* attriutes
      for (optName in options) {
        if (options.hasOwnProperty(optName)) {
          optValue = $(this).attr('data-confirm-' + optName);
          if (optValue) {
            options[optName] = optValue;
          }
        }
      }

      // If there are jquery click events
      if (jQuery._data(this, "events") && jQuery._data(this, "events").click) {

        // Save all click handlers
        for (i = 0; i < jQuery._data(this, "events").click.length; i = i + 1) {
          arrayActions.push(jQuery._data(this, "events").click[i].handler);
        }

        // unbind it to prevent it firing
        $(self).unbind("click");
      }

      // If there are jquery delegated click events
      if (self.data('remote') && jQuery._data(document, "events") && jQuery._data(document, "events").click) {

        // Save all delegated click handlers that apply
        for (i = 0; i < jQuery._data(document, "events").click.length; i = i + 1) {
          elmType = self[0].tagName.toLowerCase();
          if (jQuery._data(document, "events").click[i].selector && jQuery._data(document, "events").click[i].selector.indexOf(elmType + "[data-remote]") !== -1) {
            arrayDelegatedActions.push(jQuery._data(document, "events").click[i].handler);
          }
        }
      }

      // If there are hard onclick attribute
      if (self.attr('onclick')) {
        // Extracting the onclick code to evaluate and bring it into a closure
        code = self.attr('onclick');
        arrayActions.push(function () {
          eval(code);
        });
        $(self).prop("onclick", null);
      }

      // If there are href link defined
      if (!self.data('remote') && self.attr('href')) {
        // Assume there is a href attribute to redirect to
        arrayActions.push(function () {
          window.location.href = self.attr('href');
        });
      }

      // If the button is a submit one
      if (self.attr('type') && self.attr('type') === 'submit') {
        // Get the form related to this button then store submiting in closure
        form = $(this).parents('form:first');
        arrayActions.push(function () {
          // Add the button name / value if specified
          if (typeof self.attr('name') !== "undefined") {
            $('<input type="hidden">').attr('name', self.attr('name')).attr('value', self.attr('value')).appendTo(form);
          }
          form.submit();
        });
      }

      self.popover({
        trigger: 'manual',
        title: options.title,
        html: true,
        placement: options.placement,
        container: options.container,
        //Avoid using multiline strings, no support in older browsers.
        content: options.content + '<p class="button-group" style="margin-top: 10px; text-align: center;"><button type="button" class="btn btn-small confirm-dialog-btn-abort">' + options.noBtn + '</button> <button type="button" class="btn btn-small btn-danger confirm-dialog-btn-confirm">' + options.yesBtn + '</button></p>'
      }).click(function (e) {
        if (last && last !== self) {
          last.popover('hide').removeClass('popconfirm-active');
        }
        last = self;
      });

      $(document).on('click', function () {
        if (last) {
          last.popover('hide').removeClass('popconfirm-active');
        }
      });

      self.bind('click', function (e) {
        eventToConfirm = e;

        e.preventDefault();
        e.stopPropagation();

        $('.popconfirm-active').not(self).popover('hide').removeClass('popconfirm-active');
        self.popover('show').addClass('popconfirm-active');

        $(document).find('.popover .confirm-dialog-btn-confirm').one('click', function (e) {
          for (i = 0; i < arrayActions.length; i = i + 1) {
            arrayActions[i].apply(self, [eventToConfirm]);
          }

          for (i = 0; i < arrayDelegatedActions.length; i = i + 1) {
            arrayDelegatedActions[i].apply(self, [eventToConfirm.originalEvent]);
          }

          self.popover('hide').removeClass('popconfirm-active');
        });
        $(document).find('.popover .confirm-dialog-btn-abord').bind('click', function (e) {
          self.popover('hide').removeClass('popconfirm-active');
        });
      });
    });
  }
});

/***/ }),

/***/ "./app/frontend/circuit/js/dialog/UpdateSuccessDialog.js":
/*!***************************************************************!*\
  !*** ./app/frontend/circuit/js/dialog/UpdateSuccessDialog.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpdateSuccessDialog = function () {
  function UpdateSuccessDialog() {
    _classCallCheck(this, UpdateSuccessDialog);
  }

  _createClass(UpdateSuccessDialog, [{
    key: 'show',
    value: function show(version) {
      $('#updateSuccessDialog').modal('show');
      $("#updateSuccessDialog .reloadBtn").off("click").on("click", function () {
        $('#updateSuccessDialog').modal('hide');
        location.reload();
      });
    }
  }]);

  return UpdateSuccessDialog;
}();

exports.default = UpdateSuccessDialog;
module.exports = exports['default'];

/***/ }),

/***/ "./app/frontend/circuit/js/dialog/WebUSBHelpDialog.js":
/*!************************************************************!*\
  !*** ./app/frontend/circuit/js/dialog/WebUSBHelpDialog.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebUSBHelpDialog = function () {
  function WebUSBHelpDialog() {
    _classCallCheck(this, WebUSBHelpDialog);
  }

  _createClass(WebUSBHelpDialog, [{
    key: 'show',
    value: function show(js) {
      $('#webUSBHelpDialog').modal('show');
    }
  }]);

  return WebUSBHelpDialog;
}();

exports.default = WebUSBHelpDialog;
module.exports = exports['default'];

/***/ }),

/***/ "./app/frontend/circuit/js/figures/CircuitFigure.js":
/*!**********************************************************!*\
  !*** ./app/frontend/circuit/js/figures/CircuitFigure.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MarkdownDialog = __webpack_require__(/*! ../dialog/MarkdownDialog */ "./app/frontend/circuit/js/dialog/MarkdownDialog.js");

var _MarkdownDialog2 = _interopRequireDefault(_MarkdownDialog);

var _Configuration = __webpack_require__(/*! ../Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = draw2d.SetFigure.extend({

  NAME: "CircuitFigure",

  init: function init(attr, setter, getter) {
    var _this = this;

    this.tooltip = null;
    this.tooltipTimer = -1;

    this._super(attr, setter, getter);

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

    this.on("dblclick", function () {
      var pathToMD = _Configuration2.default.shapes.url + _this.NAME + ".md";
      $.get(pathToMD, function (content) {
        new _MarkdownDialog2.default().show(content);
      });
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
    // don't show any tooltips if the simulation is running
    if (this.canvas.simulate === true) {
      return;
    }

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
module.exports = exports['default'];

/***/ }),

/***/ "./app/frontend/circuit/js/figures/Connection.js":
/*!*******************************************************!*\
  !*** ./app/frontend/circuit/js/figures/Connection.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProbeFigure = __webpack_require__(/*! ./ProbeFigure */ "./app/frontend/circuit/js/figures/ProbeFigure.js");

var _ProbeFigure2 = _interopRequireDefault(_ProbeFigure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = draw2d.Connection.extend({

  NAME: "Connection",

  init: function init(attr, setter, getter) {
    var _this = this;

    this._super(attr, setter, getter);

    // since version 3.5.6
    //
    this.on("dragEnter", function (emitter, event) {
      _this.attr({
        outlineStroke: 2,
        outlineColor: "#30ff30"
      });
    });
    this.on("dragLeave", function (emitter, event) {
      _this.attr({
        outlineStroke: 0,
        outlineColor: "#303030"
      });
    });
  },

  getValue: function getValue() {
    return this.getSource().getValue();
  },

  /**
   * Return the ProbeFigure if the connection has any or NULL
   *
   * @return {ProbeFigure}
   */
  getProbeFigure: function getProbeFigure() {
    var entry = this.children.find(function (entry) {
      return entry.figure instanceof _ProbeFigure2.default;
    });
    return entry !== null ? entry.figure : null;
  },

  disconnect: function disconnect() {
    this._super();

    // remove some decorations of the router.
    // This is a design flaw. the router creates the decoration and the connection must remove them :-/
    // Unfortunately the Router didn't have a callback when a connection is removed from the canvas.
    //
    if (typeof this.vertexNodes !== "undefined" && this.vertexNodes !== null) {
      this.vertexNodes.remove();
      delete this.vertexNodes;
    }
  },

  add: function add(figure) {
    this._super.apply(this, arguments);

    if (figure instanceof _ProbeFigure2.default && this.canvas !== null) {
      this.canvas.fireEvent("probe:add", { figure: figure });
    }
  },

  remove: function remove(figure) {
    this._super.apply(this, arguments);

    if (figure instanceof _ProbeFigure2.default && this.canvas !== null) {
      this.canvas.fireEvent("probe:remove", { figure: figure });
    }
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
    // patch the router from some legacy data
    //
    memento.router = "ConnectionRouter";

    this._super(memento);

    // remove all decorations created in the constructor of this element
    //
    this.resetChildren();

    // and add all children of the JSON document.
    //
    if (memento.labels) {
      $.each(memento.labels, $.proxy(function (i, json) {
        // create the figure stored in the JSON
        var figure = eval("new " + json.type + "()");

        // apply all attributes
        figure.setPersistentAttributes(json);

        // instantiate the locator
        var locator = eval("new " + json.locator + "()");

        // add the new figure as child to this figure
        this.add(figure, locator);
      }, this));
    }
  }

}); /*jshint evil:true */

module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/figures/DecoratedInputPort.js":
/*!***************************************************************!*\
  !*** ./app/frontend/circuit/js/figures/DecoratedInputPort.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MarkerFigure = __webpack_require__(/*! ./MarkerFigure */ "./app/frontend/circuit/js/figures/MarkerFigure.js");

var _MarkerFigure2 = _interopRequireDefault(_MarkerFigure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = draw2d.InputPort.extend({

    NAME: "DecoratedInputPort",

    init: function init(attr, setter, getter) {
        this.hasChanged = false;

        this._super(attr, setter, getter);

        this.decoration = new _MarkerFigure2.default();

        this.add(this.decoration, new draw2d.layout.locator.LeftLocator({ margin: 8 }));

        this.on("disconnect", function (emitter, event) {
            this.decoration.setVisible(this.getConnections().getSize() === 0);

            // default value of a not connected port is always HIGH
            //
            if (this.getConnections().getSize() === 0) {
                this.setValue(true);
            }
        }.bind(this));

        this.on("connect", function (emitter, event) {
            this.decoration.setVisible(false);
        }.bind(this));

        this.on("dragend", function (emitter, event) {
            this.decoration.setVisible(this.getConnections().getSize() === 0);
        }.bind(this));

        this.on("drag", function (emitter, event) {
            this.decoration.setVisible(false);
        }.bind(this));

        // a port can have a value. Usefull for workflow engines or circuit diagrams
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

/***/ "./app/frontend/circuit/js/figures/MarkerFigure.js":
/*!*********************************************************!*\
  !*** ./app/frontend/circuit/js/figures/MarkerFigure.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MarkerStateAFigure = __webpack_require__(/*! ./MarkerStateAFigure */ "./app/frontend/circuit/js/figures/MarkerStateAFigure.js");

var _MarkerStateAFigure2 = _interopRequireDefault(_MarkerStateAFigure);

var _MarkerStateBFigure = __webpack_require__(/*! ./MarkerStateBFigure */ "./app/frontend/circuit/js/figures/MarkerStateBFigure.js");

var _MarkerStateBFigure2 = _interopRequireDefault(_MarkerStateBFigure);

var _Configuration = __webpack_require__(/*! ../Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = draw2d.shape.layout.VerticalLayout.extend({

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
        this.add(this.stateA = new _MarkerStateAFigure2.default({ text: "X" }));
        // figure if the decoration permanent visible
        this.add(this.stateB = new _MarkerStateBFigure2.default({ text: "X" }));

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
                                _this.setStick(true);
                                break;
                            case "low":
                                _this.setDefaultValue(false);
                                _this.setStick(true);
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

        this.setText(this.defaultValue === true ? "High" : "Low ");
        this.stateB.setTintColor(this.defaultValue === true ? _Configuration2.default.color.high : _Configuration2.default.color.low);

        // only propagate the value to the parent if the decoration permanent visible
        //
        if (this.stick === true) {
            this.parent.setValue(this.defaultValue);
        }
    }
}); /**
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

module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/figures/MarkerStateAFigure.js":
/*!***************************************************************!*\
  !*** ./app/frontend/circuit/js/figures/MarkerStateAFigure.js ***!
  \***************************************************************/
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
exports.default = draw2d.shape.basic.Label.extend({

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
            fontSize: 8
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

/***/ "./app/frontend/circuit/js/figures/MarkerStateBFigure.js":
/*!***************************************************************!*\
  !*** ./app/frontend/circuit/js/figures/MarkerStateBFigure.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Configuration = __webpack_require__(/*! ../Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = draw2d.shape.layout.HorizontalLayout.extend({

    NAME: "MarkerStateBFigure",

    /**
     * @param attr
     */
    init: function init(attr, setter, getter) {
        this.tintColor = _Configuration2.default.color.low;

        this._super($.extend({
            bgColor: "#FFFFFF",
            stroke: 1,
            color: _Configuration2.default.color.low,
            radius: 2,
            padding: { left: 3, top: 2, bottom: 0, right: 8 },
            gap: 5
        }, attr), setter, getter);

        this.stickTick = new draw2d.shape.basic.Circle({
            diameter: 8,
            bgColor: "#f0f0f0",
            stroke: 1,
            resizeable: false
        });
        this.add(this.stickTick);
        this.stickTick.hitTest = function () {
            return false;
        };
        this.stickTick.addCssClass("highlightOnHover");

        this.label = new draw2d.shape.basic.Label({
            text: attr.text,
            resizeable: false,
            stroke: 0,
            padding: 0,
            fontSize: 8,
            fontColor: "#303030"
        });
        this.add(this.label);
        this.label.hitTest = function () {
            return false;
        };
        this.label.addCssClass("highlightOnHover");

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

    setTintColor: function setTintColor(color) {
        this.tintColor = color;
        this.attr({ color: color });
        this.label.attr({ fontColor: color });
    },

    setTick: function setTick(flag) {
        this.stickTick.attr({ bgColor: flag ? this.tintColor : "#f0f0f0" });
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
            path.push("M", p.x, " ", p.y);
            for (i = 1; i < length; i++) {
                p = this.vertices.get(i);
                path.push("L", p.x, " ", p.y);
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
                path.push("M", begin.x, ",", begin.y);
                for (i = 0; i < length; i++) {
                    start = this.vertices.get(i);
                    end = this.vertices.get((i + 1) % length);
                    var modStart = draw2d.geo.Util.insetPoint(start, end, radius);
                    var modEnd = draw2d.geo.Util.insetPoint(end, start, radius);
                    path.push("Q", start.x, ",", start.y, " ", modStart.x, ", ", modStart.y);
                    path.push("L", modEnd.x, ",", modEnd.y);
                }
            }
        return path.join("");
    }

});
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/figures/ProbeFigure.js":
/*!********************************************************!*\
  !*** ./app/frontend/circuit/js/figures/ProbeFigure.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = draw2d.shape.basic.Label.extend({

    NAME: "ProbeFigure",

    /**
     * @param attr
     */
    init: function init(attr, setter, getter) {
        this._super($.extend({
            padding: { left: 5, top: 2, bottom: 2, right: 10 },
            bgColor: "#FFFFFF",
            stroke: 0,
            color: "#000000",
            fontSize: 8
        }, attr), setter, getter);

        // the sort index in the probe window
        //
        this.index = 0;
    },

    getValue: function getValue() {
        return this.getParent().getValue();
    },

    getIndex: function getIndex() {
        return this.index;
    },

    setIndex: function setIndex(index) {
        this.index = index;

        return this;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes: function getPersistentAttributes() {
        var memento = this._super();

        memento.index = this.index;

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

        if (typeof memento.index !== "undefined") {
            this.index = parseInt(memento.index);
        }
    }

});
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/figures/Raft.js":
/*!*************************************************!*\
  !*** ./app/frontend/circuit/js/figures/Raft.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = draw2d.shape.composite.Raft.extend({

    NAME: "Raft",

    init: function init(attr, setter, getter) {
        this._super(attr, setter, getter);
    },

    calculate: function calculate() {},

    onStart: function onStart() {},

    onStop: function onStop() {},

    toBack: function toBack(figure) {
        if (this.canvas.getFigures().getSize() === 1) {
            return; // silently
        }

        // unfortunately the shape goes behind the "canvas decoration" which could be the grid or dots.
        // this is sad and unwanted. In this case we select the first figure in th canvas and set the Raft behind of them
        // instead of "behind of ALL shapes"
        var first = this.canvas.getFigures().first();
        this._super(first);
    },

    getParameterSettings: function getParameterSettings() {
        return [];
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

/***/ "./app/frontend/circuit/js/global.js":
/*!*******************************************!*\
  !*** ./app/frontend/circuit/js/global.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConnectionSelectionFeedbackPolicy = __webpack_require__(/*! ./ConnectionSelectionFeedbackPolicy */ "./app/frontend/circuit/js/ConnectionSelectionFeedbackPolicy.js");

var _ConnectionSelectionFeedbackPolicy2 = _interopRequireDefault(_ConnectionSelectionFeedbackPolicy);

var _DecoratedInputPort = __webpack_require__(/*! ./figures/DecoratedInputPort */ "./app/frontend/circuit/js/figures/DecoratedInputPort.js");

var _DecoratedInputPort2 = _interopRequireDefault(_DecoratedInputPort);

var _Connection = __webpack_require__(/*! ./figures/Connection */ "./app/frontend/circuit/js/figures/Connection.js");

var _Connection2 = _interopRequireDefault(_Connection);

var _ProbeFigure = __webpack_require__(/*! ./figures/ProbeFigure */ "./app/frontend/circuit/js/figures/ProbeFigure.js");

var _ProbeFigure2 = _interopRequireDefault(_ProbeFigure);

var _CircuitFigure = __webpack_require__(/*! ./figures/CircuitFigure */ "./app/frontend/circuit/js/figures/CircuitFigure.js");

var _CircuitFigure2 = _interopRequireDefault(_CircuitFigure);

var _ConnectionRouter = __webpack_require__(/*! ./ConnectionRouter */ "./app/frontend/circuit/js/ConnectionRouter.js");

var _ConnectionRouter2 = _interopRequireDefault(_ConnectionRouter);

var _Raft = __webpack_require__(/*! ./figures/Raft */ "./app/frontend/circuit/js/figures/Raft.js");

var _Raft2 = _interopRequireDefault(_Raft);

var _mousetrap = __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");

var _mousetrap2 = _interopRequireDefault(_mousetrap);

var _LabelInplaceEditor = __webpack_require__(/*! ./LabelInplaceEditor */ "./app/frontend/circuit/js/LabelInplaceEditor.js");

var _LabelInplaceEditor2 = _interopRequireDefault(_LabelInplaceEditor);

__webpack_require__(/*! ./util/mousetrap-global */ "./app/frontend/circuit/js/util/mousetrap-global.js");

__webpack_require__(/*! ./util/mousetrap-pause */ "./app/frontend/circuit/js/util/mousetrap-pause.js");

var _inlineSVG = __webpack_require__(/*! ../lib/inlineSVG */ "./app/frontend/circuit/lib/inlineSVG.js");

var _inlineSVG2 = _interopRequireDefault(_inlineSVG);

var _hardware = __webpack_require__(/*! ./hardware */ "./app/frontend/circuit/js/hardware.js");

var _hardware2 = _interopRequireDefault(_hardware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  ConnectionSelectionFeedbackPolicy: _ConnectionSelectionFeedbackPolicy2.default,
  hardware: _hardware2.default,
  DecoratedInputPort: _DecoratedInputPort2.default,
  Connection: _Connection2.default,
  Raft: _Raft2.default,
  ProbeFigure: _ProbeFigure2.default,
  Mousetrap: _mousetrap2.default,
  inlineSVG: _inlineSVG2.default,
  LabelInplaceEditor: _LabelInplaceEditor2.default,
  ConnectionRouter: _ConnectionRouter2.default,
  CircuitFigure: _CircuitFigure2.default
};
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/hardware.js":
/*!*********************************************!*\
  !*** ./app/frontend/circuit/js/hardware.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _serial = __webpack_require__(/*! ./serial */ "./app/frontend/circuit/js/serial.js");

var _serial2 = _interopRequireDefault(_serial);

var _EventEmitter3 = __webpack_require__(/*! ./util/EventEmitter */ "./app/frontend/circuit/js/util/EventEmitter.js");

var _EventEmitter4 = _interopRequireDefault(_EventEmitter3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Registry of all available devices (connected via RF24 adapter) and of the hub GPIO pins.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The hub could be an RaspberryPi or and Arduino.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The "hub" is the receiver for the connected devices and expose its own
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GPIO pins as well.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var values = {};
var socket = null;
var usbPort = null;

exports.default = {
  /**
   * Init the listener for the socket.io events
   * Events could be
   *  - changes on the GPIO pins
   *
   * @param s
   */
  init: function init(s) {
    var _this = this;

    socket = s;
    // GPIO from RasperyPi
    //
    socket.on("gpo:change", function (msg) {
      values[msg.pin] = !!parseInt(msg.value);
    });

    socket.on('disconnect', function () {
      _this.raspi.emit("disconnect");
    });
    socket.on('connect', function () {
      _this.raspi.emit("connect");
    });

    // Init the WEBUSB stuff
    //
    _serial2.default.getPorts().then(function (ports) {
      if (ports.length !== 0) {
        _this.arduino.connectPort(ports[0]);
      }
    });
  },

  arduino: new (function (_EventEmitter) {
    _inherits(_class, _EventEmitter);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "set",
      value: function set(pin, value) {
        /*
         * 1 = Wright:
         *     1 = analog:
         *         "pin number"
         *         "frequency (0-255)"
         *     2 = digital:
         *         "pin number"
         *         "1 for LOW"
         *         "2 for HIGH"
         *  2 = Read:
         *     1 = analog:
         *         "pin number"
         *     2 = digital:
         *         "pin number"
         *
         *  '1/2/7/1/' will turn pin 7 on HIGH
         *  '1/2/7/0/' would turn pin 7 off
         *  '1/1/7/255/' would turn pin 7 on at a analog rate of 255 or full power
         *
         */
        var cmd = ["1/", // write
        "2/", // digital
        pin, "/", // pin number
        value ? "2/" : "1/" // on/off
        ].join("");

        // Either send the command via WebUSB to the connected Arduino
        //
        if (usbPort) {
          usbPort.send(new TextEncoder().encode(cmd)).catch(function (e) {
            console.log(e);
          });
        }
        // or post it to the server. Maybe the server has an connected Arduino via serial port
        //
        else {
            socket.emit('arduino:set', { cmd: cmd });
          }
      }
    }, {
      key: "get",
      value: function get(pin) {
        return values[pin];
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        if (usbPort) {
          usbPort.disconnect();
          usbPort = null;
          this.emit("disconnect");
        }
      }
    }, {
      key: "connect",
      value: function connect() {
        var _this3 = this;

        _serial2.default.requestPort().then(function (selectedPort) {
          _this3.connectPort(selectedPort);
        }).catch(function (error) {
          _this3.emit("disconnect");
        });
      }
    }, {
      key: "connectPort",
      value: function connectPort(port) {
        var _this4 = this;

        port.connect().then(function () {
          usbPort = port;
          _this4.emit("connect");
          usbPort.onReceive = function (data) {
            var textDecoder = new TextDecoder();
            var txt = textDecoder.decode(data);
            console.log('-', txt);
          };
          usbPort.onReceiveError = function (error) {
            usbPort = null;
            _this4.emit("disconnect");
          };
        }, function (error) {
          var msg = error.message;
          switch (error.message) {
            case "Unable to claim interface.":
              msg = "Unable to claim USB interface." + "<br>Maybe it is already paired by another browser window";
              break;
            default:
              break;
          }
          $.notify({ message: msg }, { type: 'danger' });
          _this4.emit("disconnect");
        });
      }
    }, {
      key: "connected",
      get: function get() {
        return usbPort !== null;
      }
    }]);

    return _class;
  }(_EventEmitter4.default))(),

  raspi: new (function (_EventEmitter2) {
    _inherits(_class2, _EventEmitter2);

    function _class2() {
      _classCallCheck(this, _class2);

      return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
    }

    _createClass(_class2, [{
      key: "set",
      value: function set(pin, value) {
        socket.emit('raspi:set', {
          pin: pin,
          value: value
        });
      }
    }, {
      key: "get",
      value: function get(pin) {
        return values[pin];
      }
    }, {
      key: "connected",
      get: function get() {
        return socket.connected;
      }
    }]);

    return _class2;
  }(_EventEmitter4.default))()

};
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/index.js":
/*!******************************************!*\
  !*** ./app/frontend/circuit/js/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../less/index.less */ "./app/frontend/circuit/less/index.less");

__webpack_require__(/*! font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");

__webpack_require__(/*! ./dialog/PopConfirm */ "./app/frontend/circuit/js/dialog/PopConfirm.js");

var _UpdateSuccessDialog = __webpack_require__(/*! ./dialog/UpdateSuccessDialog */ "./app/frontend/circuit/js/dialog/UpdateSuccessDialog.js");

var _UpdateSuccessDialog2 = _interopRequireDefault(_UpdateSuccessDialog);

var _split = __webpack_require__(/*! split.js */ "./node_modules/split.js/dist/split.es.js");

var _split2 = _interopRequireDefault(_split);

var _Configuration = __webpack_require__(/*! ./Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

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
  if (browser.chrome) {
    browser.webkit = true;
  } else if (browser.webkit) {
    browser.safari = true;
  }
  jQuery.browser = browser;
}

$(window).load(function () {
  socket = io({
    path: '/socket.io'
  });

  socket.on("shape:updated", function () {
    new _UpdateSuccessDialog2.default().show();
  });

  // remove the fileOpen/Save stuff if we run in a "serverless" mode. e.g. on gh-pages
  // (fake event from the socket.io mock )
  //
  socket.on("serverless", function () {
    $("#leftTabStrip .editor").click();
    $("#fileOpen, #editorFileOpen").remove();
    $("#fileSave, #editorFileSave").remove();
    $("#statusRaspi").addClass("disabled");

    // patch the URL for the backedn to deliver predefined files
    // for the static website with a nodeJS backend
    //
    _Configuration2.default.backend.file.list = function (path) {
      return "../brain/index.json";
    };
    _Configuration2.default.backend.file.get = function (file) {
      return "../brain/" + file;
    };
    _Configuration2.default.backend.file.image = function () {
      return "../brain/img";
    };
  });

  var global = __webpack_require__(/*! ./global */ "./app/frontend/circuit/js/global.js");
  for (var k in global) {
    window[k] = global[k];
  } // export all required classes for deserialize JSON with "eval"
  // "eval" code didn't sees imported class or code
  //
  var addonScreen = __webpack_require__(/*! ./view/AddonScreen */ "./app/frontend/circuit/js/view/AddonScreen.js");
  $("#leftTabStrip .addon").click(addonScreen.onShow);

  // we must load the "shape/index.js" in the global scope.
  $.getScript(_Configuration2.default.shapes.url + "index.js", function () {

    // export all required classes for deserialize JSON with "eval"
    // "eval" code didn't sees imported class or code
    //
    app = __webpack_require__(/*! ./Application */ "./app/frontend/circuit/js/Application.js");
    __webpack_require__(/*! ./hardware */ "./app/frontend/circuit/js/hardware.js").init(socket);
    inlineSVG.init();
  }).fail(function () {
    if (arguments[0].readyState == 0) {
      //script failed to load
    } else {
      //script loaded but failed to parse
      alert(arguments[2].toString());
    }
  });

  (0, _split2.default)(['#paletteElementsFilter', '#paletteElementsScroll'], {
    gutterSize: 10,
    sizes: [40, 60],
    minSize: 200,
    cursor: 'row-resize',
    direction: 'vertical'
  });
});

/***/ }),

/***/ "./app/frontend/circuit/js/io/BackendStorage.js":
/*!******************************************************!*\
  !*** ./app/frontend/circuit/js/io/BackendStorage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configuration = __webpack_require__(/*! ../Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _sanitize = __webpack_require__(/*! sanitize-filename */ "./node_modules/sanitize-filename/index.js");

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
    key: "getFiles",
    value: function getFiles(path) {
      return $.ajax({
        url: _Configuration2.default.backend.file.list(path),
        xhrFields: {
          withCredentials: true
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
    key: "saveFile",
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
    key: "loadFile",
    value: function loadFile(fileName) {
      return $.ajax({
        url: _Configuration2.default.backend.file.get(fileName),
        xhrFields: {
          withCredentials: true
        }
      }).then(function (content) {
        // happens in the serverless mode
        if (typeof content === "string") content = JSON.parse(content);

        if (content.draw2d) return content.draw2d;

        return content;
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(fileName) {
      return $.ajax({
        url: _Configuration2.default.backend.file.del,
        method: "POST",
        xhrFields: {
          withCredentials: true
        },
        data: {
          filePath: fileName
        }
      });
    }
  }, {
    key: "dirname",
    value: function dirname(path) {
      if (path === undefined || path === null || path.length === 0) return null;

      var segments = path.split("/");
      if (segments.length <= 1) return null;

      segments = segments.filter(function (n) {
        return n !== "";
      });
      path = segments.slice(0, -1).join("/");
      return path === "" ? null : path + "/";
    }
  }, {
    key: "sanitize",
    value: function sanitize(file) {
      file = _sanitize(file, "_");
      file = file.replace(_Configuration2.default.fileSuffix, "");
      // I don't like dots in the name to
      file = file.replace(RegExp("[.]", "g"), "_");
      file = file + _Configuration2.default.fileSuffix;
      return file;
    }
  }, {
    key: "basename",
    value: function basename(path) {
      if (path === null || path === "" || path === undefined) {
        return null;
      }
      return path.split(/[\\/]/).pop();
    }
  }, {
    key: "currentDir",
    get: function get() {
      return this.dirname(this.dirname());
    }
  }, {
    key: "currentFile",
    get: function get() {
      return this.basename(this.fileName);
    },
    set: function set(name) {
      this.fileName = name;
      history.pushState({
        id: 'editor',
        file: name
      }, 'Brainbox Simulator | ' + name, window.location.href.split('?')[0] + '?file=' + name);
    }
  }]);

  return BackendStorage;
}();

var storage = new BackendStorage();
exports.default = storage;
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/io/UpdateManager.js":
/*!*****************************************************!*\
  !*** ./app/frontend/circuit/js/io/UpdateManager.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configuration = __webpack_require__(/*! ../Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpdateManager = function () {

  /**
   * @constructor
   *
   */
  function UpdateManager() {
    _classCallCheck(this, UpdateManager);
  }

  _createClass(UpdateManager, [{
    key: "getUpdates",
    value: function getUpdates() {
      return $.ajax({
        url: _Configuration2.default.updates.shapes,
        xhrFields: {
          withCredentials: true
        }
      }).then(function (response) {
        // happens in "serverless" mode on the gh-pages/docs installation
        //
        if (typeof response === "string") response = JSON.parse(response);

        console.log(response);
        return response;
      });
    }
  }]);

  return UpdateManager;
}();

var update = new UpdateManager();
exports.default = update;
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/serial.js":
/*!*******************************************!*\
  !*** ./app/frontend/circuit/js/serial.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Port = function () {
  function Port(device) {
    _classCallCheck(this, Port);

    this.device_ = device;
  }

  _createClass(Port, [{
    key: 'connect',
    value: function connect() {
      var _this = this;

      var readLoop = function readLoop() {
        _this.device_.transferIn(5, 64).then(function (result) {
          _this.onReceive(result.data);
          readLoop();
        }, function (error) {
          _this.onReceiveError(error);
        });
      };

      return this.device_.open().then(function () {
        if (_this.device_.configuration === null) {
          return _this.device_.selectConfiguration(1);
        }
      }).then(function () {
        return _this.device_.claimInterface(2);
      }).then(function () {
        return _this.device_.controlTransferOut({
          'requestType': 'class',
          'recipient': 'interface',
          'request': 0x22,
          'value': 0x01,
          'index': 0x02
        });
      }).then(function () {
        readLoop();
      });
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      var _this2 = this;

      return this.device_.controlTransferOut({
        'requestType': 'class',
        'recipient': 'interface',
        'request': 0x22,
        'value': 0x00,
        'index': 0x02
      }).then(function () {
        return _this2.device_.close();
      });
    }
  }, {
    key: 'send',
    value: function send(data) {
      return this.device_.transferOut(4, data);
    }
  }]);

  return Port;
}();

var Serial = function () {
  function Serial() {
    _classCallCheck(this, Serial);
  }

  _createClass(Serial, null, [{
    key: 'getPorts',
    value: function getPorts() {
      if (!navigator || !navigator.usb) {
        return Promise.resolve([]);
      }

      return navigator.usb.getDevices().then(function (devices) {
        return devices.map(function (device) {
          return new Port(device);
        });
      });
    }
  }, {
    key: 'requestPort',
    value: function requestPort() {
      if (!navigator || !navigator.usb) {
        return Promise.reject("No USB device detected to pair or Browser didn't support WebUSB");
      }

      var filters = [{ 'vendorId': 0x2341, 'productId': 0x8036 }, { 'vendorId': 0x2341, 'productId': 0x8037 }];
      return navigator.usb.requestDevice({ 'filters': filters }).then(function (device) {
        return new Port(device);
      });
    }
  }]);

  return Serial;
}();

exports.default = Serial;
module.exports = exports['default'];

/***/ }),

/***/ "./app/frontend/circuit/js/util/EventEmitter.js":
/*!******************************************************!*\
  !*** ./app/frontend/circuit/js/util/EventEmitter.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isFunction = function isFunction(obj) {
  return typeof obj == 'function' || false;
};

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = new Map();
  }

  _createClass(EventEmitter, [{
    key: 'on',
    value: function on(label, callback) {
      this.listeners.has(label) || this.listeners.set(label, []);
      this.listeners.get(label).push(callback);
    }
  }, {
    key: 'off',
    value: function off(label, callback) {
      var listeners = this.listeners.get(label),
          index = void 0;

      if (listeners && listeners.length) {
        index = listeners.reduce(function (i, listener, index) {
          return isFunction(listener) && listener === callback ? i = index : i;
        }, -1);

        if (index > -1) {
          listeners.splice(index, 1);
          this.listeners.set(label, listeners);
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'emit',
    value: function emit(label) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this.listeners.get(label);

      if (listeners && listeners.length) {
        listeners.forEach(function (listener) {
          listener.apply(undefined, args);
        });
        return true;
      }
      return false;
    }
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;
module.exports = exports['default'];

/***/ }),

/***/ "./app/frontend/circuit/js/util/mousetrap-global.js":
/*!**********************************************************!*\
  !*** ./app/frontend/circuit/js/util/mousetrap-global.js ***!
  \**********************************************************/
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

/***/ "./app/frontend/circuit/js/util/mousetrap-pause.js":
/*!*********************************************************!*\
  !*** ./app/frontend/circuit/js/util/mousetrap-pause.js ***!
  \*********************************************************/
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

/***/ "./app/frontend/circuit/js/view/AddonScreen.js":
/*!*****************************************************!*\
  !*** ./app/frontend/circuit/js/view/AddonScreen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UpdateManager = __webpack_require__(/*! ../io/UpdateManager */ "./app/frontend/circuit/js/io/UpdateManager.js");

var _UpdateManager2 = _interopRequireDefault(_UpdateManager);

var _hogan = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");

var _hogan2 = _interopRequireDefault(_hogan);

var _Configuration = __webpack_require__(/*! ../Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _BackendStorage = __webpack_require__(/*! ../io/BackendStorage */ "./app/frontend/circuit/js/io/BackendStorage.js");

var _BackendStorage2 = _interopRequireDefault(_BackendStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddonScreen = function () {
  function AddonScreen() {
    _classCallCheck(this, AddonScreen);
  }

  _createClass(AddonScreen, [{
    key: "onShow",
    value: function onShow() {
      _UpdateManager2.default.getUpdates().then(function (content) {
        var tmpl = _hogan2.default.compile($("#updateTemplate").html());
        if (_Configuration2.default.shapes.version === content.tag_name) {
          tmpl = _hogan2.default.compile($("#uptodateTemplate").html());
        }

        var html = tmpl.render({
          current_version: _Configuration2.default.shapes.version,
          update: content
        });

        $("#addon .content").html(html);
        $("#addon .installButton").click(function (event) {
          var element = $(event.target);
          element.append("<i class=\"fa fa-spinner fa-spin\"></i>");
          screen.onSelect(element.data("url"));
        });
      });
    }
  }, {
    key: "onSelect",
    value: function onSelect(url) {
      return $.ajax({
        url: _Configuration2.default.updates.shapes,
        method: "POST",
        xhrFields: {
          withCredentials: true
        },
        data: {
          url: url
        }
      });
    }
  }]);

  return AddonScreen;
}();

var screen = new AddonScreen();
exports.default = screen;
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/js/view/FilesScreen.js":
/*!*****************************************************!*\
  !*** ./app/frontend/circuit/js/view/FilesScreen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Configuration = __webpack_require__(/*! ../Configuration */ "./app/frontend/circuit/js/Configuration.js");

var _Configuration2 = _interopRequireDefault(_Configuration);

var _FileNew = __webpack_require__(/*! ../dialog/FileNew */ "./app/frontend/circuit/js/dialog/FileNew.js");

var _FileNew2 = _interopRequireDefault(_FileNew);

var _hogan = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");

var _hogan2 = _interopRequireDefault(_hogan);

var _BackendStorage = __webpack_require__(/*! ../io/BackendStorage */ "./app/frontend/circuit/js/io/BackendStorage.js");

var _BackendStorage2 = _interopRequireDefault(_BackendStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 *
 * @author Andreas Herz
 */

var Files = function () {

  /**
   * @constructor
   *
   * @param {String} canvasId the id of the DOM element to use as paint container
   */
  function Files() {
    _classCallCheck(this, Files);

    this.render();
  }

  _createClass(Files, [{
    key: "render",
    value: function render() {
      var _this = this;

      _BackendStorage2.default.getFiles("").then(function (files) {
        files = files.map(function (file) {
          return _extends({}, file, {
            title: file.name.replace(_Configuration2.default.fileSuffix, ""),
            path: _Configuration2.default.backend.file.image()
          });
        });

        var compiled = _hogan2.default.compile($("#filesTemplate").html());
        var output = compiled.render({
          files: files
        });

        $("#files .fileList").html($(output));

        $("#files .fileList .deleteIcon").on("click", function (event) {
          var $el = $(event.currentTarget);
          var name = $el.data("name");
          _BackendStorage2.default.deleteFile(name).then(function () {
            var parent = $el.closest(".list-group-item");
            parent.hide('slow', function () {
              return parent.remove();
            });
          });
        });

        $("[data-toggle='confirmation']").popConfirm({
          title: "Delete File?",
          content: "",
          placement: "bottom" // (top, right, bottom, left)
        });

        $("#files .list-group-item h4").on("click", function (event) {
          Mousetrap.pause();
          var $el = $(event.currentTarget);
          var name = $el.closest(".list-group-item").data("name");
          var $replaceWith = $('<input type="input" class="filenameInplaceEdit" value="' + name.replace(_Configuration2.default.fileSuffix, "") + '" />');
          $el.hide();
          $el.after($replaceWith);
          $replaceWith.focus();

          var fire = function fire() {
            Mousetrap.unpause();
            var newName = $replaceWith.val();
            if (newName !== "") {
              // get the value and post them here
              newName = _BackendStorage2.default.sanitize(newName);
              $.ajax({
                url: _Configuration2.default.backend.file.rename,
                method: "POST",
                xhrFields: { withCredentials: true },
                data: {
                  from: name,
                  to: newName
                }
              }).then(function () {
                $replaceWith.remove();
                $el.html(newName.replace(_Configuration2.default.fileSuffix, ""));
                $el.show();
                $el.parent().parent().find("[data-name='" + name + "']").data("name", newName);
              });
            } else {
              // get the value and post them here
              $replaceWith.remove();
              $el.show();
            }
          };
          $replaceWith.blur(fire);
          $replaceWith.keypress(function (e) {
            if (e.which === 13) {
              fire();
            }
          });
        });

        $("#files .list-group-item .thumbnail").on("click", function (event) {
          var $el = $(event.currentTarget);
          var parent = $el.closest(".list-group-item");
          var name = parent.data("name");
          parent.addClass("spinner");
          _BackendStorage2.default.loadFile(name).then(function (content) {
            $("#leftTabStrip .editor").click();
            _BackendStorage2.default.currentFile = name;
            app.view.clear();
            new draw2d.io.json.Reader().unmarshal(app.view, content);
            app.view.getCommandStack().markSaveLocation();
            app.view.centerDocument();
            parent.removeClass("spinner");
          });
        });

        $("#files .thumbAdd").on("click", function () {
          new _FileNew2.default().show();
        });

        socket.on("brain:generated", function (msg) {
          var preview = $("a[data-name='" + msg.filePath + "'] img");
          if (preview.length === 0) {
            _this.render();
          } else {
            $("a[data-name='" + msg.filePath + "'] img").attr({ src: _Configuration2.default.backend.file.image() + msg.filePath + "&timestamp=" + new Date().getTime() });
          }
        });
      });
    }
  }]);

  return Files;
}();

exports.default = Files;
module.exports = exports["default"];

/***/ }),

/***/ "./app/frontend/circuit/less/index.less":
/*!**********************************************!*\
  !*** ./app/frontend/circuit/less/index.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./app/frontend/circuit/less/index.less");

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

/***/ "./app/frontend/circuit/lib/inlineSVG.js":
/*!***********************************************!*\
  !*** ./app/frontend/circuit/lib/inlineSVG.js ***!
  \***********************************************/
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader!./bootstrap-toggle.min.css */ "./node_modules/css-loader/index.js!./node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css");

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

/***/ "./node_modules/bootstrap-toggle/js/bootstrap-toggle.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-toggle/js/bootstrap-toggle.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/bootstrap-toggle/js/bootstrap-toggle.min.js'");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nError: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/font-awesome/css/font-awesome.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/font-awesome/css/font-awesome.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nError: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/font-awesome/css/font-awesome.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/google-code-prettify/bin/prettify.min.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/google-code-prettify/bin/prettify.min.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nError: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/google-code-prettify/bin/prettify.min.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./app/frontend/circuit/less/index.less":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./app/frontend/circuit/less/index.less ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar {\n  margin: 0;\n  padding-top: 0;\n  padding-right: 10px;\n  top: 0;\n  right: 0;\n  left: 250px;\n  height: 60px;\n  overflow: visible;\n  z-index: 1000 !important;\n  position: absolute;\n  background-color: #B2E2F2;\n  border: none !important;\n}\n.toolbar * {\n  outline: none;\n}\n.toolbar .group {\n  padding-right: 20px;\n  display: inline-block;\n  vertical-align: top;\n}\n.toolbar .group .image-button {\n  display: inline-block;\n}\n.toolbar .group .image-button img {\n  margin: 5px;\n  margin-bottom: 0;\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  color: #777;\n  font-size: 45px;\n  transition: all 0.5s;\n}\n.toolbar .group .image-button div {\n  color: rgba(0, 0, 0, 0.5);\n  text-align: center;\n  font-size: 10px;\n}\n.toolbar .group .image-button.disabled {\n  opacity: 0.2;\n}\n.toolbar .group .image-button:not(.disabled) img {\n  cursor: pointer;\n}\n.toolbar .group .image-button:not(.disabled) img:hover {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n.modal-backdrop.in {\n  opacity: 0.7;\n  background-color: black;\n  transition: opacity 0.4s linear;\n}\n.genericDialog .modal-content {\n  border-radius: 4px;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n  background-color: #ffffff;\n}\n.genericDialog .modal-content .modal-header {\n  border-bottom: 0;\n  font-weight: 400;\n  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);\n}\n.genericDialog .modal-content .modal-body {\n  padding: 1px;\n  min-height: 120px;\n}\n.genericDialog .modal-content .modal-body .form-control {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin: 0;\n  padding: 0;\n  color: #4D4D4D;\n  display: inline-block;\n  font: inherit;\n  border: 1px solid #DFDFDF;\n  box-shadow: none;\n  height: 24px;\n  padding: 0 3px;\n}\n.genericDialog .modal-content .modal-body .form-control:focus {\n  background-color: #f5f5f5;\n}\n.genericDialog .modal-content .modal-body .list-group {\n  overflow-y: auto;\n  overflow-x: auto;\n}\n.genericDialog .modal-content .modal-body .list-group *[data-draw2d=\"true\"] {\n  font-weight: bold;\n  color: #C21B7A;\n}\n.genericDialog .modal-content .modal-body .list-group .glyphicon,\n.genericDialog .modal-content .modal-body .list-group .fa {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #C21B7A;\n}\n.genericDialog .modal-content .modal-body .list-group .list-group-item {\n  background-color: transparent;\n  font-weight: 300;\n}\n.genericDialog .modal-content .modal-body .list-group .list-group-item:hover {\n  text-decoration: underline;\n}\n.genericDialog .modal-content .modal-body .list-group *[data-draw2d=\"false\"][data-type=\"file\"] {\n  color: gray;\n  cursor: default;\n  text-decoration: none !important;\n}\n.genericDialog .modal-content .modal-body .list-group *[data-draw2d=\"false\"][data-type=\"file\"] .fa {\n  color: gray;\n}\n.genericDialog .modal-content .modal-footer {\n  background-color: transparent;\n  border-top: 0;\n}\n.genericDialog .modal-content .modal-footer .btn {\n  border: 0;\n  text-transform: uppercase;\n  background-color: transparent;\n  color: #C21B7A;\n  transition: all 0.5s;\n}\n.genericDialog .modal-content .modal-footer .btn:hover {\n  background-color: rgba(194, 27, 122, 0.04);\n  transition: all 0.5s;\n}\n.genericDialog .modal-content .modal-footer .btn-primary {\n  font-weight: bold;\n}\n#githubNewFileDialog .filePreview {\n  font-size: 115px;\n  color: #C21B7A;\n}\n#fileOpenDialog .list-group {\n  height: 60%;\n}\n#fileSaveDialog .filePreview {\n  max-width: 200px;\n  max-height: 200px;\n}\n#fileSaveDialog .modal-body .media {\n  padding: 20px;\n}\n#githubFileSaveAsDialog .filePreview {\n  max-width: 200px;\n  max-height: 200px;\n}\n#githubFileSaveAsDialog .list-group {\n  height: 250px;\n}\n#canvas_zoom {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-color: rgba(178, 226, 242, 0.3);\n  border-radius: 5px;\n}\n#canvas_zoom button {\n  background-color: transparent;\n  font-weight: 300;\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 1px solid transparent;\n  outline: none;\n  transition: all 0.5s;\n}\n#canvas_zoom button:hover {\n  border: 1px solid #C21B7A;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\nbody #layout {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\nbody #layout .nav-tabs {\n  float: left;\n  border-bottom: 0;\n}\nbody #layout .nav-tabs li {\n  float: none;\n  margin: 0;\n}\nbody #layout .nav-tabs li a {\n  margin-right: 0;\n  border: 0;\n}\nbody #layout #leftTabStrip {\n  height: 100%;\n  position: absolute;\n  width: 60px;\n  padding-top: 60px;\n  overflow: hidden;\n}\nbody #layout #leftTabStrip .leftTab {\n  border-radius: 0 !important;\n  width: 60px;\n  height: 60px;\n}\nbody #layout .tab-content {\n  position: relative;\n  margin-left: 60px;\n  height: 100%;\n}\nbody #layout .tab-content .tab-pane {\n  display: none;\n  padding: 0;\n  height: 100%;\n  position: relative;\n}\nbody #layout .tab-content .tab-pane .workspace .palette {\n  position: absolute;\n  height: 100%;\n  width: 250px;\n  padding: 0;\n}\nbody #layout .tab-content .tab-pane .workspace .palette #paletteElementsFilter {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  bottom: 0;\n}\nbody #layout .tab-content .tab-pane .workspace .palette #paletteElementsScroll {\n  position: relative;\n  width: 248px;\n  margin: 0;\n  padding: 0;\n  top: 0;\n  bottom: 0;\n  overflow: auto;\n}\nbody #layout .tab-content .tab-pane .workspace .palette #paletteElementsScroll #paletteElements {\n  position: absolute;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\nbody #layout .tab-content .tab-pane .workspace .palette #paletteElementsScroll #paletteElements .mix {\n  height: 125px;\n  border: 1px solid #f0f0f0;\n  /* to avoid doubling the border of the grid */\n  margin: -1px 0 0 -1px;\n}\nbody #layout .tab-content .tab-pane .workspace .content {\n  position: absolute;\n  right: 0;\n  top: 60px;\n  bottom: 0;\n  left: 250px;\n  overflow: scroll;\n}\nbody #layout .tab-content .tab-pane .workspace .content .canvas {\n  width: 6000px;\n  height: 6000px;\n}\nbody #layout .tab-content .active {\n  display: block;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  border: 0;\n}\n/* CSS from the cool website: http://cssarrowplease.com/ */\n.draw2d_tooltip {\n  position: absolute;\n  background: #88b7d5;\n  padding: 10px;\n  border-radius: 6px;\n}\n.draw2d_tooltip:after,\n.draw2d_tooltip:before {\n  bottom: 100%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.draw2d_tooltip:after {\n  border-color: rgba(136, 183, 213, 0);\n  border-bottom-color: #88b7d5;\n  border-width: 4px;\n  left: 50%;\n  margin-left: -4px;\n}\n#codePreviewDialog .prettyprint {\n  max-height: 250px;\n  overflow: scroll;\n  border-radius: 0;\n}\n#markdownDialog .version {\n  opacity: 0.6;\n}\n#markdownDialog .html {\n  padding: 20px;\n}\n#markdownDialog .html table {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #666;\n  font-size: 12px;\n  text-shadow: 1px 1px 0px #fff;\n  background: #eaebec;\n  margin: 20px;\n  margin-left: 0;\n  border: #ccc 1px solid;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  -moz-box-shadow: 0 1px 2px #d1d1d1;\n  -webkit-box-shadow: 0 1px 2px #d1d1d1;\n  box-shadow: 0 1px 2px #d1d1d1;\n}\n#markdownDialog .html table th {\n  padding: 21px 25px 22px 25px;\n  border-top: 1px solid #fafafa;\n  border-bottom: 1px solid #e0e0e0;\n}\n#markdownDialog .html table th:first-child {\n  text-align: left;\n  padding-left: 20px;\n}\n#markdownDialog .html table tr:first-child th:first-child {\n  -moz-border-radius-topleft: 3px;\n  -webkit-border-top-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n#markdownDialog .html table tr:first-child th:last-child {\n  -moz-border-radius-topright: 3px;\n  -webkit-border-top-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n#markdownDialog .html table tr {\n  text-align: center;\n  padding-left: 20px;\n}\n#markdownDialog .html table tr td:first-child {\n  text-align: left;\n  padding-left: 20px;\n  border-left: 0;\n}\n#markdownDialog .html table tr td {\n  padding: 18px;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #e0e0e0;\n  border-left: 1px solid #e0e0e0;\n}\n#markdownDialog .html tbody tr:nth-child(odd) {\n  background: #fafafa;\n}\n#markdownDialog .html tbody tr:nth-child(even) {\n  background: #f3f3f3;\n}\n#markdownDialog .html table tr:last-child td {\n  border-bottom: 0;\n}\n#markdownDialog .html table tr:last-child td:first-child {\n  -moz-border-radius-bottomleft: 3px;\n  -webkit-border-bottom-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n#markdownDialog .html table tr:last-child td:last-child {\n  -moz-border-radius-bottomright: 3px;\n  -webkit-border-bottom-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n#webUSBHelpDialog .modal-body {\n  min-height: 310px;\n}\n#webUSBHelpDialog .modal-body .html {\n  padding: 20px;\n  max-height: 310px;\n  overflow: auto;\n  border-radius: 0;\n}\n.confirm-dialog-btn-confirm {\n  background-color: #C71D3D;\n}\n.context-menu-list {\n  margin: 0;\n  padding: 0;\n  min-width: 120px;\n  max-width: 250px;\n  display: inline-block;\n  position: absolute;\n  list-style-type: none;\n  border: 1px solid #DDD;\n  background: white;\n  border-left: 2px solid #C21B7A;\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\n  -ms-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\n  -o-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\n  font-size: 15px;\n  white-space: nowrap;\n}\n.context-menu-item {\n  padding: 5px 5px 5px 24px;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: -moz-none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.context-menu-separator {\n  padding-bottom: 0;\n  border-bottom: 1px solid #DDD;\n}\n.context-menu-item > label > input,\n.context-menu-item > label > textarea {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.context-menu-item.hover {\n  cursor: pointer;\n  background-color: #C21B7A;\n  color: white;\n}\n.context-menu-item.disabled {\n  color: #666;\n}\n.context-menu-input.hover,\n.context-menu-item.disabled.hover {\n  cursor: default;\n  background-color: #EEE;\n}\n.context-menu-submenu:after {\n  content: \">\";\n  color: #666;\n  position: absolute;\n  top: 0;\n  right: 3px;\n  z-index: 1;\n}\n/* icons\n    #protip:\n    In case you want to use sprites for icons (which I would suggest you do) have a look at\n    http://css-tricks.com/13224-pseudo-spriting/ to get an idea of how to implement\n    .context-menu-item.icon:before {}\n */\n.context-menu-item.icon {\n  min-height: 18px;\n}\n.context-menu-item.icon:before {\n  position: relative;\n  left: -15px;\n  font-size: 19px;\n}\n/* vertically align inside labels */\n.context-menu-input > label > * {\n  vertical-align: top;\n}\n/* position checkboxes and radios as icons */\n.context-menu-input > label > input[type=\"checkbox\"],\n.context-menu-input > label > input[type=\"radio\"] {\n  margin-left: -17px;\n}\n.context-menu-input > label > span {\n  margin-left: 5px;\n}\n.context-menu-input > label,\n.context-menu-input > label > input[type=\"text\"],\n.context-menu-input > label > textarea,\n.context-menu-input > label > select {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n}\n.context-menu-input > label > textarea {\n  height: 100px;\n}\n.context-menu-item > .context-menu-list {\n  display: none;\n  /* re-positioned by js */\n  right: -5px;\n  top: 5px;\n}\n.context-menu-item.hover > .context-menu-list {\n  display: block;\n}\n.context-menu-accesskey {\n  text-decoration: underline;\n}\n#probe_hint {\n  display: block;\n  padding: 30px;\n  color: white;\n  font-size: 20px;\n  font-weight: 100;\n}\n#probe_window {\n  background: #009DAC;\n  bottom: 0;\n  height: 0;\n  color: white;\n  position: absolute;\n  right: 0;\n  left: 250px;\n}\n#probe_window span {\n  font-size: 45px;\n  vertical-align: middle;\n  padding-right: 10px;\n}\n#probe_window_stick {\n  position: absolute;\n  top: -30px;\n  cursor: pointer;\n  color: black;\n  width: 100%;\n  border-bottom: 2px solid #009DAC;\n  text-align: center;\n}\n#probeSortable {\n  padding-left: 0;\n}\n#probeSortable li {\n  list-style-type: none;\n  padding-top: 10px;\n  padding-left: 0;\n}\n#probeSortable li path {\n  stroke: white;\n}\n#probeSortable li div {\n  cursor: pointer;\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  background: rgba(0, 157, 172, 0.8);\n}\n#probeSortable li:nth-child(even) {\n  background: #04A9B9;\n}\n#probeSortable li:nth-child(even) div {\n  background: rgba(4, 169, 185, 0.5);\n}\n#probeSortable .inplaceEdit {\n  background: rgba(255, 255, 255, 0.1);\n}\nellipse.draw2d_shape_basic_LineStartResizeHandle,\nellipse.draw2d_shape_basic_LineEndResizeHandle,\nrect.draw2d_policy_line_OrthogonalSelectionFeedbackPolicy_ResizeHandle {\n  fill: #C21B7A;\n}\nellipse.draw2d_InputPort,\nellipse.DecoratedInputPort,\nellipse.draw2d_OutputPort {\n  fill: #C71D3D;\n}\n.vertical-text {\n  transform: rotate(-90deg);\n  white-space: nowrap;\n  top: 200px;\n  left: 20px;\n  font-size: 50px;\n  color: white;\n}\n#layout #leftTabStrip {\n  background-color: #C71D3D;\n}\n#layout #leftTabStrip:after {\n  content: \"BrainBox\";\n  -webkit-transform: rotate(-90deg) translate(-90px, -60px);\n  -moz-transform: rotate(-90deg) translate(-90px, -60px);\n  -ms-transform: rotate(-90deg) translate(-90px, -60px);\n  transform: rotate(-90deg) translate(-90px, -60px);\n  font-size: 50px;\n  color: white;\n  white-space: nowrap;\n  opacity: 0.4;\n}\n#layout #leftTabStrip li.active a:hover {\n  background-color: white;\n}\n#layout #leftTabStrip li.active svg path[stroke] {\n  stroke: #C71D3D !important;\n}\n#layout #leftTabStrip li.active svg rect[stroke] {\n  stroke: #C71D3D !important;\n}\n#layout #leftTabStrip li.active svg g[stroke] {\n  stroke: #C71D3D !important;\n}\n#layout #leftTabStrip li.active svg line[stroke] {\n  stroke: #C71D3D !important;\n}\n#layout #leftTabStrip li.active svg circle[stroke] {\n  stroke: #C71D3D !important;\n}\n#layout #leftTabStrip li.active svg rect[stroke] {\n  stroke: #C71D3D !important;\n}\n#layout #leftTabStrip li.active svg rect[fill] {\n  fill: #C71D3D !important;\n}\n#layout #leftTabStrip li.active svg circle[fill] {\n  fill: #C71D3D !important;\n}\n#layout #leftTabStrip li a {\n  padding: 4px;\n}\n#layout #leftTabStrip li a:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n#layout #leftTabStrip li a svg path[stroke] {\n  stroke: white !important;\n}\n#layout #leftTabStrip li a svg path[stroke] {\n  stroke: white !important;\n}\n#layout #leftTabStrip li a svg line[stroke] {\n  stroke: white !important;\n}\n#layout #leftTabStrip li a svg circle[stroke] {\n  stroke: white !important;\n}\n#layout #leftTabStrip li a svg g[stroke] {\n  stroke: white !important;\n}\n#layout #leftTabStrip li a svg rect[stroke] {\n  stroke: white !important;\n}\n#layout #leftTabStrip li a svg rect[fill] {\n  fill: white !important;\n}\n#layout #leftTabStrip li a svg circle[fill] {\n  fill: white !important;\n}\n.shadow {\n  border: 1px solid #C21B7A;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n  background-color: white;\n}\n.ui-draggable-dragging {\n  z-index: 10000;\n}\ntext.highlightOnHover:hover {\n  cursor: pointer;\n  font-weight: bold;\n}\nellipse.highlightOnHover:hover {\n  cursor: pointer;\n}\nrect.Raft {\n  fill: rgba(28, 155, 171, 0.1);\n}\n#configMenuIcon {\n  font-size: 25px;\n  cursor: pointer;\n  opacity: 0.3;\n}\n#configMenuIcon:hover {\n  opacity: 1;\n  color: #C21B7A;\n}\n#paletteElementsOverlay {\n  bottom: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(255, 255, 255, 0.7);\n  display: none;\n}\n#figureConfigDialog {\n  display: none;\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin-left: 30px;\n  border-left: 3px solid #C21B7A;\n  border-radius: 4px;\n}\n#figureConfigDialog .header {\n  font-size: 16px;\n  font-weight: 600;\n  padding-bottom: 15px;\n}\n#figureConfigDialog .figureAddLabel {\n  font-size: 12px;\n  font-weight: 200;\n  cursor: pointer;\n}\n#figureConfigDialog .figureAddLabel:hover {\n  color: #C21B7A;\n}\n#figureConfigDialog:after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: -20px;\n  top: 10px;\n  width: 0;\n  height: 0;\n  border-right: 10px solid #C21B7A;\n  border-top: 10px solid transparent;\n  border-left: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n}\n.pallette_item {\n  text-align: center;\n}\n/*\n@keyframes spinner {\n  to {transform: rotate(360deg);}\n}\n\n.spinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  border-top-color: #07d;\n  border-bottom-color: #07d;\n  animation: spinner .8s ease infinite;\n}\n*/\n@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 35%;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  margin-top: -15px;\n  margin-left: -15px;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-top-color: #07d;\n  animation: spinner 0.6s linear infinite;\n}\n.workspace .palette {\n  box-shadow: 5px 0 20px -3px rgba(31, 73, 125, 0.3), -6px 0 20px -4px rgba(31, 73, 125, 0.3);\n  border-right: 1px solid rgba(74, 74, 74, 0.5);\n  border-left: 1px solid rgba(74, 74, 74, 0.5);\n}\n.workspace .palette #filter {\n  outline: none;\n}\n.workspace .palette .title img {\n  padding-right: 20px;\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  height: 40px;\n}\n.workspace .palette .title div {\n  position: absolute;\n  left: 60px;\n  top: 10px;\n}\n.workspace .palette .title div h1 {\n  font-size: 15px;\n  font-weight: 200;\n  line-height: 25px;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n}\n.workspace .palette .title div h2 {\n  font-size: 10px;\n  font-weight: 200;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  letter-spacing: 4px;\n}\n.workspace .palette .pallette_item {\n  padding: 0px;\n}\n.workspace .palette .pallette_item > div {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  border: 1px solid transparent;\n}\n.workspace .palette .pallette_item > div img {\n  position: absolute;\n  top: 0px;\n  bottom: 0;\n  margin: auto;\n  left: 50%;\n  transform: translate(-50%, -10px);\n}\n.workspace .palette .pallette_item > div div {\n  position: absolute;\n  padding-bottom: 2px;\n  width: 100%;\n  bottom: 0;\n  padding-top: 2px;\n  background-color: rgba(0, 0, 0, 0.05);\n  cursor: default;\n}\n.workspace .palette .pallette_item .glowBorder {\n  border: 1px solid #C21B7A;\n}\n.workspace .palette .draw2d_droppable {\n  cursor: move;\n  max-height: 80px;\n}\n.workspace .palette .request {\n  font-size: 10px;\n  color: #C21B7A;\n}\n.workspace .palette .request .icon {\n  cursor: pointer;\n  font-size: 75px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.workspace .content .canvas {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  border: 0;\n}\n#files {\n  overflow-y: scroll;\n  padding: 30px !important;\n  box-shadow: -6px 0 20px -4px rgba(31, 73, 125, 0.3);\n}\n#files .teaser {\n  margin-bottom: 30px;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.4) 70%, #fff 100%), radial-gradient(ellipse at center, rgba(247, 249, 250, 0.7) 0%, rgba(247, 249, 250, 0) 60%), linear-gradient(to bottom, rgba(247, 249, 250, 0) 0%, #f7f9fa 100%);\n}\n#files .teaser .title {\n  color: #C21B7A;\n  font-weight: 200;\n  font-size: 4vw;\n  white-space: nowrap;\n  margin-bottom: 10px;\n}\n#files .teaser .title img {\n  padding-right: 40px;\n  height: 100px;\n}\n#files .teaser .slogan {\n  font-size: 2vw;\n  font-weight: 200;\n  color: #34495e;\n}\n#files .deleteIcon {\n  position: absolute;\n  right: 24px;\n  width: 24px;\n  color: #C21B7A;\n  top: 8px;\n  cursor: pointer;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: rgba(255, 0, 0, 0.5);\n}\n#files .deleteIcon:hover {\n  background-color: rgba(255, 0, 0, 0.9);\n}\n#files .thumb .thumbnail {\n  cursor: pointer;\n}\n#files .thumb .media-body {\n  padding-top: 20px;\n  padding-left: 20px;\n}\n#files .thumb .filenameInplaceEdit {\n  font-size: 18px;\n  color: #C21B7A;\n  margin-top: 5px;\n}\n#files .thumb h4 {\n  font-size: 18px;\n  color: #C21B7A;\n}\n#files .thumbAdd {\n  color: #C21B7A;\n  color: #0078f2;\n  border: 1px solid rgba(0, 120, 242, 0.33);\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 1s;\n  -webkit-transition: all 1s;\n}\n#files .thumbAdd div {\n  font-size: 160px;\n  text-align: center;\n}\n#files .thumbAdd h4 {\n  text-align: center;\n}\n#files .thumbAdd:hover {\n  border: 1px solid #0078f2;\n  transition: all 1s;\n  -webkit-transition: all 1s;\n}\n#home {\n  box-shadow: -6px 0 20px -4px rgba(31, 73, 125, 0.3);\n  padding: 40px !important;\n  overflow: auto;\n  background-size: cover;\n}\n#home .branding {\n  color: #C21B7A;\n}\n#home .hacksterProjectCard {\n  border: 1px solid black;\n}\n#home .paragraph h3 {\n  color: #C21B7A;\n  padding-top: 45px;\n}\n#home .paragraph .block {\n  padding-bottom: 30px;\n}\n#home .teaser {\n  margin-bottom: 30px;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.4) 70%, #fff 100%), radial-gradient(ellipse at center, rgba(247, 249, 250, 0.7) 0%, rgba(247, 249, 250, 0) 60%), linear-gradient(to bottom, rgba(247, 249, 250, 0) 0%, #f7f9fa 100%);\n}\n#home .teaser .title {\n  color: #C21B7A;\n  font-weight: 200;\n  font-size: 4vw;\n  white-space: nowrap;\n  margin-bottom: 10px;\n}\n#home .teaser .title img {\n  padding-right: 40px;\n  height: 100px;\n}\n#home .teaser .slogan {\n  font-size: 2vw;\n  font-weight: 200;\n  color: #34495e;\n}\n#home .introText {\n  font-size: 20px;\n  font-weight: 200;\n  color: #34495e;\n}\n#home footer {\n  text-align: center;\n  margin-top: 100px;\n  color: #C21B7A;\n}\n#home footer a {\n  color: #C21B7A;\n  text-decoration: underline;\n}\n#addon {\n  box-shadow: -6px 0 20px -4px rgba(31, 73, 125, 0.3);\n  padding: 40px !important;\n  overflow: auto;\n  background-size: cover;\n}\n#addon .branding {\n  color: #C21B7A;\n}\n#addon .btn {\n  border: 0;\n  text-transform: uppercase;\n  background-color: transparent;\n  color: #C21B7A;\n  transition: all 0.5s;\n}\n#addon .btn:hover {\n  background-color: rgba(194, 27, 122, 0.04);\n  transition: all 0.5s;\n}\n#addon .paragraph h3 {\n  color: #C21B7A;\n  padding-top: 45px;\n}\n#addon .paragraph .block {\n  padding-bottom: 30px;\n}\n#addon .teaser {\n  margin-bottom: 30px;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.4) 70%, #fff 100%), radial-gradient(ellipse at center, rgba(247, 249, 250, 0.7) 0%, rgba(247, 249, 250, 0) 60%), linear-gradient(to bottom, rgba(247, 249, 250, 0) 0%, #f7f9fa 100%);\n}\n#addon .teaser .title {\n  color: #C21B7A;\n  font-weight: 200;\n  font-size: 4vw;\n  white-space: nowrap;\n  margin-bottom: 10px;\n}\n#addon .teaser .title img {\n  padding-right: 40px;\n  height: 100px;\n}\n#addon .teaser .slogan {\n  font-size: 2vw;\n  font-weight: 200;\n  color: #34495e;\n}\n#addon .introText {\n  font-size: 20px;\n  font-weight: 200;\n  color: #34495e;\n}\n#addon footer {\n  text-align: center;\n  margin-top: 100px;\n  color: #C21B7A;\n}\n#addon footer a {\n  color: #C21B7A;\n  text-decoration: underline;\n}\n.raspiConnection {\n  color: red !important;\n  border: 1px solid red;\n  padding: 10px;\n  border-radius: 5px;\n}\n.drop {\n  display: block;\n  position: absolute;\n  background: #CCC;\n  border-radius: 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n}\n.drop:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  background-color: #EEE;\n  border-radius: 100%;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.slider-handle {\n  border-radius: 50%;\n  background-color: #C71D3D;\n}\n#simulationBaseTimer {\n  width: 200px;\n}\n.simulationBase label {\n  display: block;\n  opacity: 0.5;\n  font-size: 10px;\n}\n.toolbar .group .form-horizontal {\n  text-align: center;\n  display: flex;\n}\n.toolbar .group .form-horizontal .statusIndicator {\n  margin: 20px;\n}\n.toolbar .group .form-horizontal .statusIndicator img {\n  display: block;\n  cursor: pointer;\n  margin: auto;\n}\n.toolbar .group .form-horizontal .statusIndicator img:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n}\n.toolbar .group .form-horizontal .statusIndicator span {\n  font-size: 0.8em;\n  text-align: center;\n  width: 100%;\n  display: inline-block;\n  white-space: nowrap;\n}\n.toolbar .group .form-horizontal .statusIndicator .notSupported {\n  display: none;\n  font-weight: bold;\n}\n.toolbar .group .form-horizontal .statusIndicator .connected {\n  display: block;\n}\n.toolbar .group .form-horizontal .statusIndicator .disconnected {\n  display: none;\n}\n.toolbar .group .form-horizontal .statusIndicator.disabled img {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.toolbar .group .form-horizontal .statusIndicator.disabled img:hover {\n  box-shadow: none;\n}\n.toolbar .group .form-horizontal .statusIndicator.disabled span {\n  opacity: 0.5;\n}\n.toolbar .group .form-horizontal .statusIndicator.disabled .notSupported {\n  display: block;\n}\n.toolbar .group .form-horizontal .statusIndicator.disabled .connected {\n  display: none;\n}\n.toolbar .group .form-horizontal .statusIndicator.disabled .disconnected {\n  display: none;\n}\n.toolbar .group .form-horizontal .statusIndicator.error:not(.disabled) span {\n  color: red;\n  font-weight: bold;\n}\n.toolbar .group .form-horizontal .statusIndicator.error:not(.disabled) .notSupported {\n  display: none;\n}\n.toolbar .group .form-horizontal .statusIndicator.error:not(.disabled) .connected {\n  display: none;\n}\n.toolbar .group .form-horizontal .statusIndicator.error:not(.disabled) .disconnected {\n  display: block;\n}\n#simulationStartStop {\n  position: absolute;\n  right: 30px;\n  top: 30px;\n  z-index: 1000;\n  display: inline-block;\n  width: 4em;\n  height: 4em;\n  background-color: #FFF;\n  color: #9e9e9e;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 2em;\n  overflow: hidden;\n  transform: translateZ(0);\n  transition: all 500ms ease;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n#simulationStartStop:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n}\n#simulationStartStop:active {\n  -webkit-transform: scale(1.1, 1.1);\n  transform: scale(1.1, 1.1);\n}\n#simulationStartStop:focus {\n  outline: 0;\n  border: none;\n  color: rgba(0, 0, 0, 0);\n}\n#simulationStartStop > span {\n  display: block;\n  position: relative;\n  width: 2em;\n  height: 2em;\n  transition: all 500ms ease;\n  overflow: hidden;\n  margin: 1em;\n}\n#simulationStartStop > span > span {\n  display: block;\n  background-color: #C71D3D;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 2em;\n  height: 2em;\n  transition: all 500ms ease;\n  border: 1px solid transparent;\n}\n#simulationStartStop.play > span {\n  -webkit-transform: translate(1em, 0) scale(1.6, 1);\n  transform: translate(1em, 0) scale(1.6, 1);\n}\n#simulationStartStop.play > span > span {\n  -webkit-transform: rotate(-45deg) translate(-1em, -1em) scale(1, 1);\n  transform: rotate(-45deg) translate(-1em, -1em) scale(1, 1);\n  background-color: #C71D3D;\n}\n#simulationStartStop.pause > span > span {\n  -webkit-transform: scale(0.4, 1) translate(-1.6em, 0);\n  transform: scale(0.4, 1) translate(-1.6em, 0);\n}\n#simulationStartStop.pause > span > span.s3 {\n  -webkit-transform: scale(0.4, 1) translate(1.6em, 0);\n  transform: scale(0.4, 1) translate(1.6em, 0);\n}\n.gutter {\n  background-color: #eee;\n  background-repeat: no-repeat;\n  background-position: 50%;\n}\n.gutter.gutter-vertical {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');\n}\n.gutter.gutter-horizontal {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');\n}\n.split {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.split,\n.gutter.gutter-horizontal {\n  float: left;\n}\n.split {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ "./node_modules/d3/index.js":
/*!**********************************!*\
  !*** ./node_modules/d3/index.js ***!
  \**********************************/
/*! exports provided: version, bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, range, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip, axisTop, axisRight, axisBottom, axisLeft, brush, brushX, brushY, brushSelection, chord, ribbon, nest, set, map, keys, values, entries, color, rgb, hsl, lab, hcl, lch, gray, cubehelix, contours, contourDensity, dispatch, drag, dragDisable, dragEnable, dsvFormat, csvParse, csvParseRows, csvFormat, csvFormatBody, csvFormatRows, csvFormatRow, csvFormatValue, tsvParse, tsvParseRows, tsvFormat, tsvFormatBody, tsvFormatRows, tsvFormatRow, tsvFormatValue, autoType, easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut, blob, buffer, dsv, csv, tsv, image, json, text, xml, html, svg, forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, forceX, forceY, formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, FormatSpecifier, precisionFixed, precisionPrefix, precisionRound, geoArea, geoBounds, geoCentroid, geoCircle, geoClipAntimeridian, geoClipCircle, geoClipExtent, geoClipRectangle, geoContains, geoDistance, geoGraticule, geoGraticule10, geoInterpolate, geoLength, geoPath, geoAlbers, geoAlbersUsa, geoAzimuthalEqualArea, geoAzimuthalEqualAreaRaw, geoAzimuthalEquidistant, geoAzimuthalEquidistantRaw, geoConicConformal, geoConicConformalRaw, geoConicEqualArea, geoConicEqualAreaRaw, geoConicEquidistant, geoConicEquidistantRaw, geoEqualEarth, geoEqualEarthRaw, geoEquirectangular, geoEquirectangularRaw, geoGnomonic, geoGnomonicRaw, geoIdentity, geoProjection, geoProjectionMutator, geoMercator, geoMercatorRaw, geoNaturalEarth1, geoNaturalEarth1Raw, geoOrthographic, geoOrthographicRaw, geoStereographic, geoStereographicRaw, geoTransverseMercator, geoTransverseMercatorRaw, geoRotation, geoStream, geoTransform, cluster, hierarchy, pack, packSiblings, packEnclose, partition, stratify, tree, treemap, treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify, interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateNumberArray, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize, path, polygonArea, polygonCentroid, polygonHull, polygonContains, polygonLength, quadtree, randomUniform, randomNormal, randomLogNormal, randomBates, randomIrwinHall, randomExponential, scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat, schemeCategory10, schemeAccent, schemeDark2, schemePaired, schemePastel1, schemePastel2, schemeSet1, schemeSet2, schemeSet3, schemeTableau10, interpolateBrBG, schemeBrBG, interpolatePRGn, schemePRGn, interpolatePiYG, schemePiYG, interpolatePuOr, schemePuOr, interpolateRdBu, schemeRdBu, interpolateRdGy, schemeRdGy, interpolateRdYlBu, schemeRdYlBu, interpolateRdYlGn, schemeRdYlGn, interpolateSpectral, schemeSpectral, interpolateBuGn, schemeBuGn, interpolateBuPu, schemeBuPu, interpolateGnBu, schemeGnBu, interpolateOrRd, schemeOrRd, interpolatePuBuGn, schemePuBuGn, interpolatePuBu, schemePuBu, interpolatePuRd, schemePuRd, interpolateRdPu, schemeRdPu, interpolateYlGnBu, schemeYlGnBu, interpolateYlGn, schemeYlGn, interpolateYlOrBr, schemeYlOrBr, interpolateYlOrRd, schemeYlOrRd, interpolateBlues, schemeBlues, interpolateGreens, schemeGreens, interpolateGreys, schemeGreys, interpolatePurples, schemePurples, interpolateReds, schemeReds, interpolateOranges, schemeOranges, interpolateCividis, interpolateCubehelixDefault, interpolateRainbow, interpolateWarm, interpolateCool, interpolateSinebow, interpolateTurbo, interpolateViridis, interpolateMagma, interpolateInferno, interpolatePlasma, create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent, arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse, timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears, timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse, now, timer, timerFlush, timeout, interval, transition, active, interrupt, voronoi, zoom, zoomTransform, zoomIdentity */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/d3/index.js'");

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.css":
/*!********************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader!./font-awesome.css */ "./node_modules/css-loader/index.js!./node_modules/font-awesome/css/font-awesome.css");

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

/***/ "./node_modules/google-code-prettify/bin/prettify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/google-code-prettify/bin/prettify.min.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader!./prettify.min.css */ "./node_modules/css-loader/index.js!./node_modules/google-code-prettify/bin/prettify.min.css");

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

/***/ "./node_modules/google-code-prettify/bin/prettify.min.js":
/*!***************************************************************!*\
  !*** ./node_modules/google-code-prettify/bin/prettify.min.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/google-code-prettify/bin/prettify.min.js'");

/***/ }),

/***/ "./node_modules/hogan.js/lib/hogan.js":
/*!********************************************!*\
  !*** ./node_modules/hogan.js/lib/hogan.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/hogan.js/lib/hogan.js'");

/***/ }),

/***/ "./node_modules/mousetrap/mousetrap.js":
/*!*********************************************!*\
  !*** ./node_modules/mousetrap/mousetrap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/mousetrap/mousetrap.js'");

/***/ }),

/***/ "./node_modules/remarkable/index.js":
/*!******************************************!*\
  !*** ./node_modules/remarkable/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/remarkable/index.js'");

/***/ }),

/***/ "./node_modules/sanitize-filename/index.js":
/*!*************************************************!*\
  !*** ./node_modules/sanitize-filename/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/sanitize-filename/index.js'");

/***/ }),

/***/ "./node_modules/split.js/dist/split.es.js":
/*!************************************************!*\
  !*** ./node_modules/split.js/dist/split.es.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// The programming goals of Split.js are to deliver readable, understandable and
// maintainable code, while at the same time manually optimizing for tiny minified file size,
// browser compatibility without additional requirements, graceful fallback (IE8 is supported)
// and very few assumptions about the user's page layout.
var global = window;
var document = global.document;

// Save a couple long function names that are used frequently.
// This optimization saves around 400 bytes.
var addEventListener = 'addEventListener';
var removeEventListener = 'removeEventListener';
var getBoundingClientRect = 'getBoundingClientRect';
var gutterStartDragging = '_a';
var aGutterSize = '_b';
var bGutterSize = '_c';
var HORIZONTAL = 'horizontal';
var NOOP = function () { return false; };

// Figure out if we're in IE8 or not. IE8 will still render correctly,
// but will be static instead of draggable.
var isIE8 = global.attachEvent && !global[addEventListener];

// Helper function determines which prefixes of CSS calc we need.
// We only need to do this once on startup, when this anonymous function is called.
//
// Tests -webkit, -moz and -o prefixes. Modified from StackOverflow:
// http://stackoverflow.com/questions/16625140/js-feature-detection-to-detect-the-usage-of-webkit-calc-over-calc/16625167#16625167
var calc = (['', '-webkit-', '-moz-', '-o-']
    .filter(function (prefix) {
        var el = document.createElement('div');
        el.style.cssText = "width:" + prefix + "calc(9px)";

        return !!el.style.length
    })
    .shift()) + "calc";

// Helper function checks if its argument is a string-like type
var isString = function (v) { return typeof v === 'string' || v instanceof String; };

// Helper function allows elements and string selectors to be used
// interchangeably. In either case an element is returned. This allows us to
// do `Split([elem1, elem2])` as well as `Split(['#id1', '#id2'])`.
var elementOrSelector = function (el) {
    if (isString(el)) {
        var ele = document.querySelector(el);
        if (!ele) {
            throw new Error(("Selector " + el + " did not match a DOM element"))
        }
        return ele
    }

    return el
};

// Helper function gets a property from the properties object, with a default fallback
var getOption = function (options, propName, def) {
    var value = options[propName];
    if (value !== undefined) {
        return value
    }
    return def
};

var getGutterSize = function (gutterSize, isFirst, isLast, gutterAlign) {
    if (isFirst) {
        if (gutterAlign === 'end') {
            return 0
        }
        if (gutterAlign === 'center') {
            return gutterSize / 2
        }
    } else if (isLast) {
        if (gutterAlign === 'start') {
            return 0
        }
        if (gutterAlign === 'center') {
            return gutterSize / 2
        }
    }

    return gutterSize
};

// Default options
var defaultGutterFn = function (i, gutterDirection) {
    var gut = document.createElement('div');
    gut.className = "gutter gutter-" + gutterDirection;
    return gut
};

var defaultElementStyleFn = function (dim, size, gutSize) {
    var style = {};

    if (!isString(size)) {
        if (!isIE8) {
            style[dim] = calc + "(" + size + "% - " + gutSize + "px)";
        } else {
            style[dim] = size + "%";
        }
    } else {
        style[dim] = size;
    }

    return style
};

var defaultGutterStyleFn = function (dim, gutSize) {
    var obj;

    return (( obj = {}, obj[dim] = (gutSize + "px"), obj ));
};

// The main function to initialize a split. Split.js thinks about each pair
// of elements as an independant pair. Dragging the gutter between two elements
// only changes the dimensions of elements in that pair. This is key to understanding
// how the following functions operate, since each function is bound to a pair.
//
// A pair object is shaped like this:
//
// {
//     a: DOM element,
//     b: DOM element,
//     aMin: Number,
//     bMin: Number,
//     dragging: Boolean,
//     parent: DOM element,
//     direction: 'horizontal' | 'vertical'
// }
//
// The basic sequence:
//
// 1. Set defaults to something sane. `options` doesn't have to be passed at all.
// 2. Initialize a bunch of strings based on the direction we're splitting.
//    A lot of the behavior in the rest of the library is paramatized down to
//    rely on CSS strings and classes.
// 3. Define the dragging helper functions, and a few helpers to go with them.
// 4. Loop through the elements while pairing them off. Every pair gets an
//    `pair` object and a gutter.
// 5. Actually size the pair elements, insert gutters and attach event listeners.
var Split = function (idsOption, options) {
    if ( options === void 0 ) options = {};

    var ids = idsOption;
    var dimension;
    var clientAxis;
    var position;
    var positionEnd;
    var clientSize;
    var elements;

    // Allow HTMLCollection to be used as an argument when supported
    if (Array.from) {
        ids = Array.from(ids);
    }

    // All DOM elements in the split should have a common parent. We can grab
    // the first elements parent and hope users read the docs because the
    // behavior will be whacky otherwise.
    var firstElement = elementOrSelector(ids[0]);
    var parent = firstElement.parentNode;
    var parentStyle = getComputedStyle ? getComputedStyle(parent) : null;
    var parentFlexDirection = parentStyle ? parentStyle.flexDirection : null;

    // Set default options.sizes to equal percentages of the parent element.
    var sizes = getOption(options, 'sizes') || ids.map(function () { return 100 / ids.length; });

    // Standardize minSize to an array if it isn't already. This allows minSize
    // to be passed as a number.
    var minSize = getOption(options, 'minSize', 100);
    var minSizes = Array.isArray(minSize) ? minSize : ids.map(function () { return minSize; });

    // Get other options
    var expandToMin = getOption(options, 'expandToMin', false);
    var gutterSize = getOption(options, 'gutterSize', 10);
    var gutterAlign = getOption(options, 'gutterAlign', 'center');
    var snapOffset = getOption(options, 'snapOffset', 30);
    var dragInterval = getOption(options, 'dragInterval', 1);
    var direction = getOption(options, 'direction', HORIZONTAL);
    var cursor = getOption(
        options,
        'cursor',
        direction === HORIZONTAL ? 'col-resize' : 'row-resize'
    );
    var gutter = getOption(options, 'gutter', defaultGutterFn);
    var elementStyle = getOption(
        options,
        'elementStyle',
        defaultElementStyleFn
    );
    var gutterStyle = getOption(options, 'gutterStyle', defaultGutterStyleFn);

    // 2. Initialize a bunch of strings based on the direction we're splitting.
    // A lot of the behavior in the rest of the library is paramatized down to
    // rely on CSS strings and classes.
    if (direction === HORIZONTAL) {
        dimension = 'width';
        clientAxis = 'clientX';
        position = 'left';
        positionEnd = 'right';
        clientSize = 'clientWidth';
    } else if (direction === 'vertical') {
        dimension = 'height';
        clientAxis = 'clientY';
        position = 'top';
        positionEnd = 'bottom';
        clientSize = 'clientHeight';
    }

    // 3. Define the dragging helper functions, and a few helpers to go with them.
    // Each helper is bound to a pair object that contains its metadata. This
    // also makes it easy to store references to listeners that that will be
    // added and removed.
    //
    // Even though there are no other functions contained in them, aliasing
    // this to self saves 50 bytes or so since it's used so frequently.
    //
    // The pair object saves metadata like dragging state, position and
    // event listener references.

    function setElementSize(el, size, gutSize, i) {
        // Split.js allows setting sizes via numbers (ideally), or if you must,
        // by string, like '300px'. This is less than ideal, because it breaks
        // the fluid layout that `calc(% - px)` provides. You're on your own if you do that,
        // make sure you calculate the gutter size by hand.
        var style = elementStyle(dimension, size, gutSize, i);

        Object.keys(style).forEach(function (prop) {
            // eslint-disable-next-line no-param-reassign
            el.style[prop] = style[prop];
        });
    }

    function setGutterSize(gutterElement, gutSize, i) {
        var style = gutterStyle(dimension, gutSize, i);

        Object.keys(style).forEach(function (prop) {
            // eslint-disable-next-line no-param-reassign
            gutterElement.style[prop] = style[prop];
        });
    }

    function getSizes() {
        return elements.map(function (element) { return element.size; })
    }

    // Supports touch events, but not multitouch, so only the first
    // finger `touches[0]` is counted.
    function getMousePosition(e) {
        if ('touches' in e) { return e.touches[0][clientAxis] }
        return e[clientAxis]
    }

    // Actually adjust the size of elements `a` and `b` to `offset` while dragging.
    // calc is used to allow calc(percentage + gutterpx) on the whole split instance,
    // which allows the viewport to be resized without additional logic.
    // Element a's size is the same as offset. b's size is total size - a size.
    // Both sizes are calculated from the initial parent percentage,
    // then the gutter size is subtracted.
    function adjust(offset) {
        var a = elements[this.a];
        var b = elements[this.b];
        var percentage = a.size + b.size;

        a.size = (offset / this.size) * percentage;
        b.size = percentage - (offset / this.size) * percentage;

        setElementSize(a.element, a.size, this[aGutterSize], a.i);
        setElementSize(b.element, b.size, this[bGutterSize], b.i);
    }

    // drag, where all the magic happens. The logic is really quite simple:
    //
    // 1. Ignore if the pair is not dragging.
    // 2. Get the offset of the event.
    // 3. Snap offset to min if within snappable range (within min + snapOffset).
    // 4. Actually adjust each element in the pair to offset.
    //
    // ---------------------------------------------------------------------
    // |    | <- a.minSize               ||              b.minSize -> |    |
    // |    |  | <- this.snapOffset      ||     this.snapOffset -> |  |    |
    // |    |  |                         ||                        |  |    |
    // |    |  |                         ||                        |  |    |
    // ---------------------------------------------------------------------
    // | <- this.start                                        this.size -> |
    function drag(e) {
        var offset;
        var a = elements[this.a];
        var b = elements[this.b];

        if (!this.dragging) { return }

        // Get the offset of the event from the first side of the
        // pair `this.start`. Then offset by the initial position of the
        // mouse compared to the gutter size.
        offset =
            getMousePosition(e) -
            this.start +
            (this[aGutterSize] - this.dragOffset);

        if (dragInterval > 1) {
            offset = Math.round(offset / dragInterval) * dragInterval;
        }

        // If within snapOffset of min or max, set offset to min or max.
        // snapOffset buffers a.minSize and b.minSize, so logic is opposite for both.
        // Include the appropriate gutter sizes to prevent overflows.
        if (offset <= a.minSize + snapOffset + this[aGutterSize]) {
            offset = a.minSize + this[aGutterSize];
        } else if (
            offset >=
            this.size - (b.minSize + snapOffset + this[bGutterSize])
        ) {
            offset = this.size - (b.minSize + this[bGutterSize]);
        }

        // Actually adjust the size.
        adjust.call(this, offset);

        // Call the drag callback continously. Don't do anything too intensive
        // in this callback.
        getOption(options, 'onDrag', NOOP)();
    }

    // Cache some important sizes when drag starts, so we don't have to do that
    // continously:
    //
    // `size`: The total size of the pair. First + second + first gutter + second gutter.
    // `start`: The leading side of the first element.
    //
    // ------------------------------------------------
    // |      aGutterSize -> |||                      |
    // |                     |||                      |
    // |                     |||                      |
    // |                     ||| <- bGutterSize       |
    // ------------------------------------------------
    // | <- start                             size -> |
    function calculateSizes() {
        // Figure out the parent size minus padding.
        var a = elements[this.a].element;
        var b = elements[this.b].element;

        var aBounds = a[getBoundingClientRect]();
        var bBounds = b[getBoundingClientRect]();

        this.size =
            aBounds[dimension] +
            bBounds[dimension] +
            this[aGutterSize] +
            this[bGutterSize];
        this.start = aBounds[position];
        this.end = aBounds[positionEnd];
    }

    function innerSize(element) {
        // Return nothing if getComputedStyle is not supported (< IE9)
        // Or if parent element has no layout yet
        if (!getComputedStyle) { return null }

        var computedStyle = getComputedStyle(element);

        if (!computedStyle) { return null }

        var size = element[clientSize];

        if (size === 0) { return null }

        if (direction === HORIZONTAL) {
            size -=
                parseFloat(computedStyle.paddingLeft) +
                parseFloat(computedStyle.paddingRight);
        } else {
            size -=
                parseFloat(computedStyle.paddingTop) +
                parseFloat(computedStyle.paddingBottom);
        }

        return size
    }

    // When specifying percentage sizes that are less than the computed
    // size of the element minus the gutter, the lesser percentages must be increased
    // (and decreased from the other elements) to make space for the pixels
    // subtracted by the gutters.
    function trimToMin(sizesToTrim) {
        // Try to get inner size of parent element.
        // If it's no supported, return original sizes.
        var parentSize = innerSize(parent);
        if (parentSize === null) {
            return sizesToTrim
        }

        if (minSizes.reduce(function (a, b) { return a + b; }, 0) > parentSize) {
            return sizesToTrim
        }

        // Keep track of the excess pixels, the amount of pixels over the desired percentage
        // Also keep track of the elements with pixels to spare, to decrease after if needed
        var excessPixels = 0;
        var toSpare = [];

        var pixelSizes = sizesToTrim.map(function (size, i) {
            // Convert requested percentages to pixel sizes
            var pixelSize = (parentSize * size) / 100;
            var elementGutterSize = getGutterSize(
                gutterSize,
                i === 0,
                i === sizesToTrim.length - 1,
                gutterAlign
            );
            var elementMinSize = minSizes[i] + elementGutterSize;

            // If element is too smal, increase excess pixels by the difference
            // and mark that it has no pixels to spare
            if (pixelSize < elementMinSize) {
                excessPixels += elementMinSize - pixelSize;
                toSpare.push(0);
                return elementMinSize
            }

            // Otherwise, mark the pixels it has to spare and return it's original size
            toSpare.push(pixelSize - elementMinSize);
            return pixelSize
        });

        // If nothing was adjusted, return the original sizes
        if (excessPixels === 0) {
            return sizesToTrim
        }

        return pixelSizes.map(function (pixelSize, i) {
            var newPixelSize = pixelSize;

            // While there's still pixels to take, and there's enough pixels to spare,
            // take as many as possible up to the total excess pixels
            if (excessPixels > 0 && toSpare[i] - excessPixels > 0) {
                var takenPixels = Math.min(
                    excessPixels,
                    toSpare[i] - excessPixels
                );

                // Subtract the amount taken for the next iteration
                excessPixels -= takenPixels;
                newPixelSize = pixelSize - takenPixels;
            }

            // Return the pixel size adjusted as a percentage
            return (newPixelSize / parentSize) * 100
        })
    }

    // stopDragging is very similar to startDragging in reverse.
    function stopDragging() {
        var self = this;
        var a = elements[self.a].element;
        var b = elements[self.b].element;

        if (self.dragging) {
            getOption(options, 'onDragEnd', NOOP)(getSizes());
        }

        self.dragging = false;

        // Remove the stored event listeners. This is why we store them.
        global[removeEventListener]('mouseup', self.stop);
        global[removeEventListener]('touchend', self.stop);
        global[removeEventListener]('touchcancel', self.stop);
        global[removeEventListener]('mousemove', self.move);
        global[removeEventListener]('touchmove', self.move);

        // Clear bound function references
        self.stop = null;
        self.move = null;

        a[removeEventListener]('selectstart', NOOP);
        a[removeEventListener]('dragstart', NOOP);
        b[removeEventListener]('selectstart', NOOP);
        b[removeEventListener]('dragstart', NOOP);

        a.style.userSelect = '';
        a.style.webkitUserSelect = '';
        a.style.MozUserSelect = '';
        a.style.pointerEvents = '';

        b.style.userSelect = '';
        b.style.webkitUserSelect = '';
        b.style.MozUserSelect = '';
        b.style.pointerEvents = '';

        self.gutter.style.cursor = '';
        self.parent.style.cursor = '';
        document.body.style.cursor = '';
    }

    // startDragging calls `calculateSizes` to store the inital size in the pair object.
    // It also adds event listeners for mouse/touch events,
    // and prevents selection while dragging so avoid the selecting text.
    function startDragging(e) {
        // Right-clicking can't start dragging.
        if ('button' in e && e.button !== 0) {
            return
        }

        // Alias frequently used variables to save space. 200 bytes.
        var self = this;
        var a = elements[self.a].element;
        var b = elements[self.b].element;

        // Call the onDragStart callback.
        if (!self.dragging) {
            getOption(options, 'onDragStart', NOOP)(getSizes());
        }

        // Don't actually drag the element. We emulate that in the drag function.
        e.preventDefault();

        // Set the dragging property of the pair object.
        self.dragging = true;

        // Create two event listeners bound to the same pair object and store
        // them in the pair object.
        self.move = drag.bind(self);
        self.stop = stopDragging.bind(self);

        // All the binding. `window` gets the stop events in case we drag out of the elements.
        global[addEventListener]('mouseup', self.stop);
        global[addEventListener]('touchend', self.stop);
        global[addEventListener]('touchcancel', self.stop);
        global[addEventListener]('mousemove', self.move);
        global[addEventListener]('touchmove', self.move);

        // Disable selection. Disable!
        a[addEventListener]('selectstart', NOOP);
        a[addEventListener]('dragstart', NOOP);
        b[addEventListener]('selectstart', NOOP);
        b[addEventListener]('dragstart', NOOP);

        a.style.userSelect = 'none';
        a.style.webkitUserSelect = 'none';
        a.style.MozUserSelect = 'none';
        a.style.pointerEvents = 'none';

        b.style.userSelect = 'none';
        b.style.webkitUserSelect = 'none';
        b.style.MozUserSelect = 'none';
        b.style.pointerEvents = 'none';

        // Set the cursor at multiple levels
        self.gutter.style.cursor = cursor;
        self.parent.style.cursor = cursor;
        document.body.style.cursor = cursor;

        // Cache the initial sizes of the pair.
        calculateSizes.call(self);

        // Determine the position of the mouse compared to the gutter
        self.dragOffset = getMousePosition(e) - self.end;
    }

    // adjust sizes to ensure percentage is within min size and gutter.
    sizes = trimToMin(sizes);

    // 5. Create pair and element objects. Each pair has an index reference to
    // elements `a` and `b` of the pair (first and second elements).
    // Loop through the elements while pairing them off. Every pair gets a
    // `pair` object and a gutter.
    //
    // Basic logic:
    //
    // - Starting with the second element `i > 0`, create `pair` objects with
    //   `a = i - 1` and `b = i`
    // - Set gutter sizes based on the _pair_ being first/last. The first and last
    //   pair have gutterSize / 2, since they only have one half gutter, and not two.
    // - Create gutter elements and add event listeners.
    // - Set the size of the elements, minus the gutter sizes.
    //
    // -----------------------------------------------------------------------
    // |     i=0     |         i=1         |        i=2       |      i=3     |
    // |             |                     |                  |              |
    // |           pair 0                pair 1             pair 2           |
    // |             |                     |                  |              |
    // -----------------------------------------------------------------------
    var pairs = [];
    elements = ids.map(function (id, i) {
        // Create the element object.
        var element = {
            element: elementOrSelector(id),
            size: sizes[i],
            minSize: minSizes[i],
            i: i,
        };

        var pair;

        if (i > 0) {
            // Create the pair object with its metadata.
            pair = {
                a: i - 1,
                b: i,
                dragging: false,
                direction: direction,
                parent: parent,
            };

            pair[aGutterSize] = getGutterSize(
                gutterSize,
                i - 1 === 0,
                false,
                gutterAlign
            );
            pair[bGutterSize] = getGutterSize(
                gutterSize,
                false,
                i === ids.length - 1,
                gutterAlign
            );

            // if the parent has a reverse flex-direction, switch the pair elements.
            if (
                parentFlexDirection === 'row-reverse' ||
                parentFlexDirection === 'column-reverse'
            ) {
                var temp = pair.a;
                pair.a = pair.b;
                pair.b = temp;
            }
        }

        // Determine the size of the current element. IE8 is supported by
        // staticly assigning sizes without draggable gutters. Assigns a string
        // to `size`.
        //
        // IE9 and above
        if (!isIE8) {
            // Create gutter elements for each pair.
            if (i > 0) {
                var gutterElement = gutter(i, direction, element.element);
                setGutterSize(gutterElement, gutterSize, i);

                // Save bound event listener for removal later
                pair[gutterStartDragging] = startDragging.bind(pair);

                // Attach bound event listener
                gutterElement[addEventListener](
                    'mousedown',
                    pair[gutterStartDragging]
                );
                gutterElement[addEventListener](
                    'touchstart',
                    pair[gutterStartDragging]
                );

                parent.insertBefore(gutterElement, element.element);

                pair.gutter = gutterElement;
            }
        }

        setElementSize(
            element.element,
            element.size,
            getGutterSize(
                gutterSize,
                i === 0,
                i === ids.length - 1,
                gutterAlign
            ),
            i
        );

        // After the first iteration, and we have a pair object, append it to the
        // list of pairs.
        if (i > 0) {
            pairs.push(pair);
        }

        return element
    });

    function adjustToMin(element) {
        var isLast = element.i === pairs.length;
        var pair = isLast ? pairs[element.i - 1] : pairs[element.i];

        calculateSizes.call(pair);

        var size = isLast
            ? pair.size - element.minSize - pair[bGutterSize]
            : element.minSize + pair[aGutterSize];

        adjust.call(pair, size);
    }

    elements.forEach(function (element) {
        var computedSize = element.element[getBoundingClientRect]()[dimension];

        if (computedSize < element.minSize) {
            if (expandToMin) {
                adjustToMin(element);
            } else {
                // eslint-disable-next-line no-param-reassign
                element.minSize = computedSize;
            }
        }
    });

    function setSizes(newSizes) {
        var trimmed = trimToMin(newSizes);
        trimmed.forEach(function (newSize, i) {
            if (i > 0) {
                var pair = pairs[i - 1];

                var a = elements[pair.a];
                var b = elements[pair.b];

                a.size = trimmed[i - 1];
                b.size = newSize;

                setElementSize(a.element, a.size, pair[aGutterSize], a.i);
                setElementSize(b.element, b.size, pair[bGutterSize], b.i);
            }
        });
    }

    function destroy(preserveStyles, preserveGutter) {
        pairs.forEach(function (pair) {
            if (preserveGutter !== true) {
                pair.parent.removeChild(pair.gutter);
            } else {
                pair.gutter[removeEventListener](
                    'mousedown',
                    pair[gutterStartDragging]
                );
                pair.gutter[removeEventListener](
                    'touchstart',
                    pair[gutterStartDragging]
                );
            }

            if (preserveStyles !== true) {
                var style = elementStyle(
                    dimension,
                    pair.a.size,
                    pair[aGutterSize]
                );

                Object.keys(style).forEach(function (prop) {
                    elements[pair.a].element.style[prop] = '';
                    elements[pair.b].element.style[prop] = '';
                });
            }
        });
    }

    if (isIE8) {
        return {
            setSizes: setSizes,
            destroy: destroy,
        }
    }

    return {
        setSizes: setSizes,
        getSizes: getSizes,
        collapse: function collapse(i) {
            adjustToMin(elements[i]);
        },
        destroy: destroy,
        parent: parent,
        pairs: pairs,
    }
};

/* harmony default export */ __webpack_exports__["default"] = (Split);


/***/ }),

/***/ "./node_modules/storage-helper/dist/storage-helper.common.js":
/*!*******************************************************************!*\
  !*** ./node_modules/storage-helper/dist/storage-helper.common.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/storage-helper/dist/storage-helper.common.js'");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/d023280/Documents/workspace/brainbox/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
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