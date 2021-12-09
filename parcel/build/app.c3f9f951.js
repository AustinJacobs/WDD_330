// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var config = {
  api_key: 'fd940caa3dfcfc92860ced4170dcd511',
  api_base_url: 'https://api.themoviedb.org/3/',
  image_base_url: 'https://image.tmdb.org/t/p/w200'
};
exports.config = config;
},{}],"js/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTrendingMovies = getTrendingMovies;
exports.getTopMovies = getTopMovies;
exports.getTrendingTv = getTrendingTv;

var _config = require("./config.js");

var BASE_URL = _config.config.api_base_url;
var API_KEY = _config.config.api_key;

function getTrendingMovies() {
  var data, response, responseData;
  return regeneratorRuntime.async(function getTrendingMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = [];
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("".concat(BASE_URL, "trending/movie/week?api_key=").concat(API_KEY)));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          responseData = _context.sent;
          data = responseData.results;
          _context.next = 13;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);

        case 13:
          return _context.abrupt("return", data);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
}

function getTopMovies() {
  var data, response, responseData;
  return regeneratorRuntime.async(function getTopMovies$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = [];
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch("".concat(BASE_URL, "movie/top_rated?api_key=").concat(API_KEY)));

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          responseData = _context2.sent;
          data = responseData.results;
          _context2.next = 13;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);

        case 13:
          return _context2.abrupt("return", data);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 11]]);
}

function getTrendingTv() {
  var data, response, responseData;
  return regeneratorRuntime.async(function getTrendingTv$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          data = [];
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(fetch("".concat(BASE_URL, "trending/tv/week?api_key=").concat(API_KEY)));

        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          responseData = _context3.sent;
          data = responseData.results;
          _context3.next = 13;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);

        case 13:
          return _context3.abrupt("return", data);

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 11]]);
}
},{"./config.js":"js/config.js"}],"js/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTrendingMovies = renderTrendingMovies;
exports.renderTopMovies = renderTopMovies;
exports.renderTrendingTv = renderTrendingTv;

var _api = require("./api.js");

var _config = require("./config.js");

var trendingMovieDiv = document.getElementById("trending-movies");
var topMovieDiv = document.getElementById("top-movies");
var trendingTvDiv = document.getElementById("trending-tv");

function renderTrendingMovies() {
  var movies;
  return regeneratorRuntime.async(function renderTrendingMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _api.getTrendingMovies)());

        case 2:
          movies = _context.sent;
          console.log(movies);
          trendingMovieDiv.innerHTML = movies.map(function (movie) {
            return renderSingleMovie(movie);
          }).join("");
          document.querySelectorAll('.media-div').forEach(function (item) {
            item.addEventListener('click', function (e) {
              var x = e.currentTarget.getAttribute("id");
              console.log(x);
            });
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function renderTopMovies() {
  var movies;
  return regeneratorRuntime.async(function renderTopMovies$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _api.getTopMovies)());

        case 2:
          movies = _context2.sent;
          console.log(movies);
          topMovieDiv.innerHTML = movies.map(function (movie) {
            return renderSingleMovie(movie);
          }).join("");
          document.querySelectorAll('.media-div').forEach(function (item) {
            item.addEventListener('click', function (e) {
              var x = e.currentTarget.getAttribute("id");
              console.log(x);
            });
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function renderTrendingTv() {
  var shows;
  return regeneratorRuntime.async(function renderTrendingTv$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _api.getTrendingTv)());

        case 2:
          shows = _context3.sent;
          console.log(shows);
          trendingTvDiv.innerHTML = shows.map(function (tv) {
            return renderSingleShow(tv);
          }).join("");
          document.querySelectorAll('.media-div').forEach(function (item) {
            item.addEventListener('click', function (e) {
              var x = e.currentTarget.getAttribute("id");
              console.log(x);
            });
          });

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function renderSingleMovie(movie) {
  if (movie.poster_path != null) {
    return "\n            <div id=\"".concat(movie.id, "\" class=\"media-div\">\n                <img src=\"").concat(_config.config.image_base_url + movie.poster_path, "\" class=\"featured\" alt=").concat(movie.title, ">\n            </div>\n            ");
  }
}

function renderSingleShow(tv) {
  if (tv.poster_path != null) {
    return "\n            <div id=\"".concat(tv.id, "\" class=\"media-div\">\n                <img src=\"").concat(_config.config.image_base_url + tv.poster_path, "\" class=\"featured\" alt=").concat(tv.name, ">\n            </div>\n            ");
  }
}
},{"./api.js":"js/api.js","./config.js":"js/config.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _home = require("./home.js");

function App() {
  (0, _home.renderTrendingMovies)();
  (0, _home.renderTopMovies)();
  (0, _home.renderTrendingTv)();
}

App();
},{"./home.js":"js/home.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65123" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map