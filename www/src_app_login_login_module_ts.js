(self["webpackChunkOberonVIP"] = self["webpackChunkOberonVIP"] || []).push([["src_app_login_login_module_ts"],{

/***/ 7377:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/definitions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 2138:
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7377);

const App = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('App', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_app_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 6141)).then(m => new m.AppWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8384:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const initPlatforms = (win) => (win.CapacitorPlatforms = createCapacitorPlatforms(win));
const CapacitorPlatforms = /*#__PURE__*/ initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {}));
const addPlatform = CapacitorPlatforms.addPlatform;
const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
    if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
        // Add the web plugin into the plugins registry if there already isn't
        // an existing one. If it doesn't already exist, that means
        // there's no existing native implementation for it.
        // - OR -
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        Plugins[config.name] = webPlugin;
    }
};

var ExceptionCode;
(function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
const getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => getPlatformId(win);
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatformId(win) !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
        }
        if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
        }
        return false;
    };
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const initCapacitorGlobal = (win) => (win.Capacitor = createCapacitor(win));

const Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = (plugin) => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        Object.defineProperty(p, 'remove', {
            value: async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            },
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
}

const WebView = /*#__PURE__*/ registerPlugin('WebView');


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4068:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 2810:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Device": () => (/* binding */ Device)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4068);

const Device = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Device', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_device_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7811)).then(m => new m.DeviceWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1114:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 1091:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1114);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 3384)).then(m => new m.GeolocationWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 332:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 3848:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/network/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Network": () => (/* binding */ Network)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 332);

const Network = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Network', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_network_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 5182)).then(m => new m.NetworkWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2412:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 6628:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 2412);

const Storage = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Storage', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_storage_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 968)).then(m => new m.StorageWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 6628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading.service */ 5637);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 4687);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/network */ 3848);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/geolocation */ 1091);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/device */ 2810);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/app */ 2138);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 9315);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 6030);
/* harmony import */ var _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/background-geolocation/ngx */ 4549);





//import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
//import { Uid } from '@ionic-native/uid/ngx';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
//import { Sim } from '@ionic-native/sim/ngx';














let LoginPage = class LoginPage {
    constructor(formBuilder, Http, toastCtrl, nav, loading, router, navCtrl, androidPermissions, locationAccuracy, callNumber, backgroundGeolocation, alertController) {
        //Genera APK
        /*
        Storage.getItem('obUUID')
        .then(
          data => this.SrConsultaIMEI( data),
          //error => this.stLACCESO="1"
        );
        */
        this.formBuilder = formBuilder;
        this.Http = Http;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.loading = loading;
        this.router = router;
        this.navCtrl = navCtrl;
        this.androidPermissions = androidPermissions;
        this.locationAccuracy = locationAccuracy;
        this.callNumber = callNumber;
        this.backgroundGeolocation = backgroundGeolocation;
        this.alertController = alertController;
        this.stLIMEI = "";
        this.UniqueDeviceID = "";
        this.stLACCESO = "0";
        this.stLIdentifica = "";
        this.stLNombres = "";
        this.stLApellidos = "";
        this.stLCelular = "";
        this.stLUIDD = "";
        this.stLCargo = "";
        this.stLEmail = "";
        this.stLContrasena = "";
        this.stLUrl = "";
        this.stLClrFondoPan = "red";
        this.stLClrFondo = "";
        this.stLColorAsistencia = "secondary";
        this.inLLinterna = 0;
        this.stLEstado = "INACTIVO";
        this.inLCount = 0;
        this.inLActivo = 0;
        /*const checkName = async () => {
          alert('preuba');
          const value = await Storage.get({ key: 'obUUID' });
          this.stLUIDDAux=value;
          //alert('variable: ' + value);
  
  
        }/*
  
  
  
  
  
       //para probar
        //this.SrConsultaIMEI("3159856231");
        //this.stLACCESO="0";
        /*
        this.getPermission();
        this.sim.requestReadPermission().then(
          () => alert('Permission granted'),
          () => alert('Permission denied')
        );
  
  
        this.sim.getSimInfo().then(
          (info) => alert('Sim info: '+ info),
          (err) => alert('Unable to get sim info: '+ err)
        );
        */
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const infoAux = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_7__.Device.getId();
            this.stLUIDD = infoAux.uuid;
            () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                    key: 'obUUID',
                    value: this.stLUIDD,
                });
            });
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Autorización de USO',
                message: 'Esta aplicación utiliza sus datos de ubicación, para que nuestros usuarios VIP, puedan tener asistencia lo más pronto posible, Ejemplo: Si usted esta siendo víctima de robo, al presionar este botón de pánico nuestro personal lo asistirá en su ubicación en tiempo real en el menor tiempo posible. Presione en "Autoriza" Para Continuar',
                buttons: [
                    {
                        text: 'NO Autorizo',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            _capacitor_app__WEBPACK_IMPORTED_MODULE_8__.App.exitApp();
                        }
                    }, {
                        text: 'Autoriza',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.ValidaPermisos();
                            this.SrConsultaIMEI(this.stLUIDD);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ValidaPermisos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_7__.Device.getInfo();
            const infoAux = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_7__.Device.getId();
            this.stLUIDD = infoAux.uuid;
            //alert("permisos");
            //alert(this.stLUIDD);
            () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                    key: 'obUUID',
                    value: this.stLUIDD,
                });
            });
            if (info.platform == "android") {
                try {
                    const data = yield this.androidPermissions.requestPermissions([
                        "android.permission.ACCESS_BACKGROUND_LOCATION",
                        "android.permission.ACCESS_COARSE_LOCATION",
                        this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
                    ]);
                    if (!data.hasPermission) {
                        throw new Error('Permiso NO Otorgado');
                    }
                    else {
                        this.locationAccuracy.canRequest().then((canRequest) => {
                            canRequest = true;
                            if (canRequest) {
                                // the accuracy option will be ignored by iOS
                                this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => console.log('Request successful'), error => alert('Error: ' + error));
                            }
                        });
                    }
                }
                catch (error) {
                    console.log('Error: Por Favor Reinicie la Aplicación ');
                }
            }
            const infoRequest = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__.Geolocation.requestPermissions();
            if (infoRequest.location == "granted") {
                //alert("Ejecuta")
                this.SrValidacionAPP();
            }
            else {
                alert("Dispositivo SIN GPS, Por Favor Activelo");
                //App.exitApp();
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.onRegistro = this.formBuilder.group({
                'stLIdentifica': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                    ])
                ],
                'stLNombres': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                    ])
                ],
                'stLApellidos': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                    ])
                ],
                'stLCelular': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                    ])
                ],
                'stLCargo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                    ])
                ],
                'stLEmail': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                    ])
                ],
            });
            this.onContrasena = this.formBuilder.group({
                'stLContrasena': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required
                    ])
                ],
            });
            const infoInternet = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_5__.Network.getStatus();
            //console.log(infoInternet.connected);
            if (infoInternet.connected == true) {
                this.SrValidacionAPP();
            }
            else {
                alert("Dispositivo SIN INTERNET, Por Favor Activelo");
                _capacitor_app__WEBPACK_IMPORTED_MODULE_8__.App.exitApp();
            }
            _capacitor_network__WEBPACK_IMPORTED_MODULE_5__.Network.addListener('networkStatusChange', function (val) {
                if (val.connected) {
                    this.SrValidacionAPP();
                }
                else {
                    alert("SIN Internet");
                    _capacitor_app__WEBPACK_IMPORTED_MODULE_8__.App.exitApp();
                }
            });
        });
    }
    SrValidacionAPP() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const CPermisoGPS = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__.Geolocation.checkPermissions();
            //alert("permiso: " +CPermisoGPS.location);
            if (CPermisoGPS.location == "granted") {
                //const value = await Storage.get({ key: 'obUUID' });
                //this.stLUIDDAux=value;
                //console.log(Device.getInfo());
                //console.log(infoAux.uuid);
                //alert("uid: " +infoAux.uuid);
                this.locationAccuracy.canRequest().then((canRequest) => {
                    canRequest = true;
                    if (canRequest) {
                        // the accuracy option will be ignored by iOS
                        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => console.log('Request successful'), error => alert('Error: ' + error));
                    }
                });
                //const CPermisoGPS = await Geolocation.requestPermissions();
                //alert(CPermisoGPS)
                const infoAux2 = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__.Geolocation.getCurrentPosition();
                //alert("coord: " + infoAux2.coords.latitude +", "  + infoAux2.coords.longitude );
                //const info33 = await Device.getInfo();
                //console.log(info.platform);
                //alert("Platform: " + info33.platform);
                //alert("Virtual: " + info33.isVirtual);
                const infoAux = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_7__.Device.getId();
                this.stLUIDD = infoAux.uuid;
                //alert(this.stLUIDD);
                this.SrConsultaIMEI(this.stLUIDD);
                //this.SrConsultaIMEI("7fdabb817db61b16");
            }
            else {
                const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_7__.Device.getInfo();
                const value = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'obUUID' });
                const infoAux = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_7__.Device.getId();
                //console.log(Device.getInfo());
                this.presentAlertConfirm();
            }
        });
    }
    SrConsultaIMEI(data) {
        //alert("Entra");
        this.stLUIDD = data;
        //alert(this.stLUIDD);
        //this.loading.presentTxt('Oberón Consultando Registro VIP ...');
        this.SrConsultaPersona().then(data => {
            if (data["Table"] != null) {
                this.dataPerson = data["Table"];
                this.loading.dismiss();
                console.log(data["Table"]);
                //alert("estado imei");
                //alert(data["Table"][0].CLIMEI_ESTADO);
                if (data["Table"][0].Error_Code == '0') {
                    if (data["Table"][0].CLIMEI_ESTADO == '0' || data["Table"][0].CLIMEI_ESTADO == '1') {
                        this.stLACCESO = "1";
                        alert('Por Favor Ingrese su Contraseña Enviada al Correo Registrado en la Solicitud');
                    }
                    if (data["Table"][0].CLIMEI_ESTADO == '2') {
                        //alert("entra a estado 2");
                        this.stLACCESO = "3";
                        this.presentToast('Bienvenido Señor(a): ' + data["Table"][0].PERSO_NOMBRES + " " + data["Table"][0].PERSO_APELLIDOS);
                        this.loading.m_Nombres = data["Table"][0].PERSO_NOMBRES;
                        //alert(data["Table"][0].PERSO_NOMBRES);
                        this.loading.m_Cargo = data["Table"][0].PERSO_CARGOID;
                        //alert(data["Table"][0].PERSO_CARGOID);
                        this.loading.m_IMEI = this.stLUIDD;
                        //alert(this.stLUIDD);
                        this.SrSegundoPlano();
                        this.GetEstadoSOS();
                        //this.navCtrl.navigateRoot('/home')
                    }
                }
                else {
                    alert('Error al Consultar Registro ');
                }
            }
            else {
                this.stLACCESO = "0";
                //this.loading.dismiss();
            }
        });
    }
    SrConsultaPersona() {
        this.stLUrl = this.loading.m_UrlWS + '/Get_IMEIvip';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
        let options = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        //alert('imei');
        //alert(this.stLUIDD);
        let params = 'stRIMEI=' + this.stLUIDD + '&stRUsuarioAPP=' + this.loading.m_UsuarioApp + '&stRPasswordAPP=' + this.loading.m_PasswordApp + '&stRCodigoWSAPP=' + this.loading.m_CodigoWSApp;
        //console.log(this.stLUrl+'?'+params);
        return new Promise(resolve => {
            //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
            this.Http.post(this.stLUrl, params, options).subscribe(data => {
                if (data != null) {
                    resolve(data);
                }
                else
                    resolve(false);
            });
        });
    }
    presentToast(stRMensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: stRMensaje,
                duration: 4000
            });
            toast.present();
        });
    }
    SrProcesaIngreso() {
        this.loading.presentTxt('Oberón Guardando Registro VIP ...');
        this.SrIngresaPersona().then(data => {
            if (data["Table"] != null) {
                this.dataPerson = data["Table"];
                this.loading.dismiss();
                console.log(data["Table"]);
                if (data["Table"][0].Error_Code == '0') {
                    this.presentToast('Registro Guardado Satisfactoriamente');
                    () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                            key: 'obUUID',
                            value: this.stLUIDD,
                        });
                    });
                    () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                            key: 'obNombres',
                            value: this.stLNombres,
                        });
                    });
                    () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                            key: 'obApellidos',
                            value: this.stLApellidos,
                        });
                    });
                    () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                            key: 'obCargo',
                            value: this.stLCargo,
                        });
                    });
                    () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                            key: 'obCelular',
                            value: this.stLCelular,
                        });
                    });
                    /*
                    this.nativeStorage.setItem('obIMEI',this.stLCelular);
                    this.nativeStorage.setItem('obNombres',this.stLNombres);
                    this.nativeStorage.setItem('obApellidos',this.stLApellidos);
                    this.nativeStorage.setItem('obCargo',this.stLCargo);
                    */
                    this.SrConsultaIMEI(this.stLUIDD);
                    //this.closeModal();
                }
                else {
                    alert('Error al Solicitar Registro ');
                }
            }
            else {
                this.loading.dismiss();
            }
        });
    }
    SrIngresaPersona() {
        this.stLUrl = this.loading.m_UrlWS + '/Put_PersonasVIP_V2';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
        let options = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        //alert(this.stLUIDD);
        let params = 'stRPersona=' + this.stLIdentifica + '&stRIMEIAux=' + this.stLUIDD + '&stRApellidos=' + this.stLApellidos + '&stRNombres=' + this.stLNombres + '&stRCargo=' + this.stLCargo + '&stRTelefono=' + this.stLCelular + '&stREmail=' + this.stLEmail + '&stREstado=0&stRUsuarioAPP=' + this.loading.m_UsuarioApp + '&stRPasswordAPP=' + this.loading.m_PasswordApp + '&stRCodigoWSAPP=' + this.loading.m_CodigoWSApp;
        //console.log(this.stLUrl+'?'+params);
        return new Promise(resolve => {
            //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
            this.Http.post(this.stLUrl, params, options).subscribe(data => {
                if (data != null) {
                    resolve(data);
                }
                else
                    resolve(false);
            });
        });
    }
    SrProcesaContrasena() {
        this.loading.presentTxt('Oberón Guardando Contraseña VIP ...');
        this.SrIngresaContrasena().then(data => {
            if (data["Table"] != null) {
                this.dataPerson = data["Table"];
                this.loading.dismiss();
                console.log(data["Table"]);
                if (data["Table"][0].Error_Code == '0' && data["Table"][0].CLIMEI_ESTADO == '2') {
                    this.presentToast('Contrasena Aplicada Satisfactoriamente');
                    //this.nativeStorage.setItem('obContrasena',this.stLContrasena);
                    () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                            key: 'obContrasena',
                            value: this.stLContrasena,
                        });
                    });
                    //this.navCtrl.navigateRoot('/home');
                    this.SrConsultaIMEI(this.stLUIDD);
                    //this.closeModal();
                }
                else {
                    alert('Error al Registrar Contraseña ');
                }
            }
            else {
                this.loading.dismiss();
            }
        });
    }
    SrIngresaContrasena() {
        this.stLUrl = this.loading.m_UrlWS + '/Put_MEI_VIP_ACCESS';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
        let options = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        //alert("CONTRASENA");
        //alert(this.stLUIDD);
        //alert(this.stLContrasena);
        let params = 'stRIMEI=' + this.stLUIDD + '&stRPassword=' + this.stLContrasena + '&stRUsuarioAPP=' + this.loading.m_UsuarioApp + '&stRPasswordAPP=' + this.loading.m_PasswordApp + '&stRCodigoWSAPP=' + this.loading.m_CodigoWSApp;
        console.log(this.stLUrl + '?' + params);
        return new Promise(resolve => {
            //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
            this.Http.post(this.stLUrl, params, options).subscribe(data => {
                if (data != null) {
                    resolve(data);
                }
                else
                    resolve(false);
            });
        });
    }
    onLlamar() {
        this.GetTelCentral();
    }
    GetTelCentral() {
        this.loading.presentTxt('Oberón Obteniendo Telefóno del Centro de Control ...');
        this.SrBuscaTelCentral().then(data => {
            if (data["Table"] != null) {
                this.dataAux = data["Table"];
                this.loading.dismiss();
                console.log(data["Table"]);
                if (data["Table"][0].Error_Code == '0') {
                    let stLTelefono = data["Table"][0].CODIR_TELEFONO;
                    if (stLTelefono != "") {
                        this.loading.dismiss();
                        this.callNumber.callNumber(stLTelefono, true);
                    }
                    else {
                        this.loading.dismiss();
                        alert("NO Tiene Asignado el Número del Centro de Control. Contacte al Administrador");
                    }
                }
                else {
                    alert('Error al Consultar Teléfono ');
                }
            }
            else {
                this.loading.dismiss();
            }
        });
    }
    SrBuscaTelCentral() {
        this.loading.presentTxt('Oberón Obteniendo Telefóno de la Central de Operaciones...');
        let options = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        this.stLUrl = this.loading.m_UrlWS + '/GetTelCentral';
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let params = 'stRStatus=1&stRUsuarioAPP=' + this.loading.m_UsuarioApp + '&stRPasswordAPP=' + this.loading.m_PasswordApp + '&stRCodigoWSAPP=' + this.loading.m_CodigoWSApp;
        return new Promise(resolve => {
            //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
            this.Http.post(this.stLUrl, params, options).subscribe(data => {
                if (data != null) {
                    resolve(data);
                }
                else
                    resolve(false);
            });
        });
    }
    SrPanico() {
        this.SrProcesaSOS();
        this.onActivar();
    }
    SrProcesaSOS() {
        //this.loading.presentTxt('Oberón Enviando SOS ...');
        //alert("ingreso sos");
        this.SrIngresaSOS().then(data => {
            if (data["Table"] != null) {
                this.dataPerson = data["Table"];
                //this.loading.dismiss();
                console.log(data["Table"]);
                if (data["Table"][0].Error_Code == '0') {
                    this.presentToast('S.O.S');
                    //if(this.inLActivo==0)
                    //{
                    //}
                    //this.closeModal();
                }
                else {
                    alert('Error al Reportar S.O.S');
                }
            }
            else {
                //this.loading.dismiss();
            }
        });
    }
    SrIngresaSOS() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.stLUrl = this.loading.m_UrlWS + '/Put_Alertas';
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
            let options = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            //alert("SOS 0");
            //alert(this.stLUIDD);
            const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__.Geolocation.getCurrentPosition();
            //alert("SOS");
            //alert(this.stLUIDD);
            //alert(coordinates.coords.latitude);
            //alert(coordinates.coords.longitude);
            let params = 'stRReferencia=' + this.stLUIDD + '&stRTipo=1&stRLatitud=' + coordinates.coords.latitude + '&stRLongitud=' + coordinates.coords.longitude + '&stRUbicacion=0&stRStatus=1&stRUsuarioAPP=' + this.loading.m_UsuarioApp + '&stRPasswordAPP=' + this.loading.m_PasswordApp + '&stRCodigoWSAPP=' + this.loading.m_CodigoWSApp;
            console.log(this.stLUrl + '?' + params);
            return new Promise(resolve => {
                //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
                this.Http.post(this.stLUrl, params, options).subscribe(data => {
                    if (data != null) {
                        resolve(data);
                    }
                    else
                        resolve(false);
                });
            });
        });
    }
    getCurrentPosition() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            //alert("posicion");
            const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__.Geolocation.getCurrentPosition();
            return coordinates;
        });
    }
    SrSegundoPlano() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const config = {
                desiredAccuracy: 10,
                stationaryRadius: 20,
                distanceFilter: 30,
                //interval: 60000,
                debug: false,
                stopOnTerminate: false,
                notificationTitle: 'Oberón',
                notificationText: 'Servicio Activo',
            };
            this.backgroundGeolocation.configure(config)
                .then(() => {
                this.backgroundGeolocation.on(_ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__.BackgroundGeolocationEvents.location).subscribe((location) => {
                    //alert(location.latitude);
                    this.SrProcesaTracking();
                    //this.SrProcesaTracking();
                    // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
                    // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
                    // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
                    this.backgroundGeolocation.finish(); // FOR IOS ONLY
                });
            });
            this.backgroundGeolocation.start();
        });
    }
    SrProcesaTracking() {
        //this.loading.presentTxt('Oberón Enviando SOS ...');
        this.SrIngresaTracking().then(data => {
            if (data["Table"] != null) {
                this.dataPerson = data["Table"];
                //this.loading.dismiss();
                console.log(data["Table"]);
                if (data["Table"][0].Error_Code == '0') {
                    //this.presentToast('Tracking');
                    //this.closeModal();
                }
                else {
                    //alert('Error al Reportar S.O.S');
                }
            }
            else {
                //this.loading.dismiss();
            }
        });
    }
    SrIngresaTracking() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.stLUrl = this.loading.m_UrlWS + '/Put_Tracking';
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpHeaders();
            let options = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_6__.Geolocation.getCurrentPosition();
            let params = 'stRDispositivo=' + this.stLUIDD + '&stRLatitud=' + coordinates.coords.latitude + '&stRLongitud=' + coordinates.coords.longitude + '&stRUsuarioAPP=' + this.loading.m_UsuarioApp + '&stRPasswordAPP=' + this.loading.m_PasswordApp + '&stRCodigoWSAPP=' + this.loading.m_CodigoWSApp;
            console.log(this.stLUrl + '?' + params);
            return new Promise(resolve => {
                //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
                this.Http.post(this.stLUrl, params, options).subscribe(data => {
                    if (data != null) {
                        resolve(data);
                    }
                    else
                        resolve(false);
                });
            });
        });
    }
    onActivar() {
        this.inLActivo = 1;
        this.stLColorAsistencia = "danger";
        this.stLEstado = "ACTIVO";
        const options = {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 7200
        };
        //this.SrProcesaSOS();
        let timeInMs = 39000;
        this.timeoutHandlerAux = setInterval(() => {
            this.GetEstadoSOS();
            //this.GetEstadoSOS();
        }, timeInMs);
        let timeInMsAux = 40000;
        this.timeoutHandlerAux = setInterval(() => {
            //alert(this.inLActivo);
            if (this.inLActivo == 1) {
                this.SrProcesaSOS();
            }
        }, timeInMsAux);
    }
    GetEstadoSOS() {
        //this.loading.presentTxt('Oberón Obteniendo Estado SOS ...');
        this.SrBuscaEstadoSOS().then(data => {
            if (data["Table"] != null) {
                this.dataAux1 = data["Table"][0];
                //this.loading.dismiss();
                if (this.dataAux1.Error_Code == '0') {
                    this.inLActivo = this.dataAux1.ALERTA_ACTIVA;
                    //alert(this.inLActivo);
                    if (this.inLActivo == 1) {
                        this.onActivar();
                    }
                    if (this.inLActivo == 0) {
                        this.stLColorAsistencia = "secondary";
                        this.stLEstado = "INACTIVO";
                        //alert(this.inLCount);
                        clearTimeout(this.timeoutHandler);
                        this.timeoutHandler = null;
                        clearTimeout(this.timeoutHandlerAux);
                        this.timeoutHandlerAux = null;
                        this.inLCount = 0;
                        this.inLActivo = 0;
                    }
                    //this.inLActivo=1;
                    //this.backgroundMode.enable();
                }
                else {
                    this.stLColorAsistencia = "secondary";
                    this.stLEstado = "INACTIVO";
                    //alert(this.inLCount);
                    clearTimeout(this.timeoutHandler);
                    this.timeoutHandler = null;
                    clearTimeout(this.timeoutHandlerAux);
                    this.timeoutHandlerAux = null;
                    this.inLCount = 0;
                    this.inLActivo = 0;
                }
            }
            else {
                //this.loading.dismiss();
            }
        });
    }
    SrBuscaEstadoSOS() {
        //this.loading.presentTxt('Oberón Obteniendo Telefóno de la Central de Operaciones...');
        let options = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        this.stLUrl = this.loading.m_UrlWS + '/Get_Alerta_Activa';
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let params = 'stRImei=' + this.stLUIDD + '&stRUsuarioAPP=' + this.loading.m_UsuarioApp + '&stRPasswordAPP=' + this.loading.m_PasswordApp + '&stRCodigoWSAPP=' + this.loading.m_CodigoWSApp;
        console.log(this.stLUrl + '?' + params);
        return new Promise(resolve => {
            //this.Http.get(this.stLUrl+'?'+params,{headers: headers}).subscribe(data => {
            this.Http.post(this.stLUrl, params, options).subscribe(data => {
                if (data != null) {
                    resolve(data);
                }
                else
                    resolve(false);
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__.AndroidPermissions },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_10__.LocationAccuracy },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__.CallNumber },
    { type: _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__.BackgroundGeolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".theme-bg {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  right: 0;\n  z-index: 0;\n  background-image: url(\"/assets/img/Principal.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.aux {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  right: 0;\n  z-index: 0;\n  background-image: url(\"/assets/img/Principbtn.png\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.lblinicio-cs {\n  position: relative;\n  font-size: 14px;\n  font-size: max(16px, 1em);\n  font-family: inherit;\n  padding: 0.1em 0.2em;\n  background-color: rgba(20, 136, 78, 0);\n  border: 2px solid 1px;\n  border-radius: 4px;\n  top: 0%;\n  line-height: 1;\n  height: 1.5rem;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: Center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n}\n\n.lbolvido-cs {\n  position: relative;\n  font-size: 12px;\n  font-size: max(16px, 1em);\n  font-family: inherit;\n  padding: 0.1em 0.2em;\n  background-color: rgba(20, 136, 78, 0);\n  border: 2px solid 1px;\n  border-radius: 4px;\n  top: 17%;\n  line-height: 1;\n  height: 1.5rem;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: Center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n}\n\n.ident-cs {\n  font-size: 14px;\n  font-size: max(14px, 1em);\n  font-family: inherit;\n  padding-left: 0%;\n  background-color: #fff;\n  border: 2px solid 1px;\n  border-radius: 4px;\n  top: 5%;\n  line-height: 0.5;\n  height: 2rem;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.user-cs {\n  font-size: 14px;\n  font-size: max(14px, 1em);\n  font-family: inherit;\n  padding-left: 0%;\n  background-color: #fff;\n  border: 2px solid 1px;\n  border-radius: 4px;\n  top: 12%;\n  line-height: 0.5;\n  height: 2rem;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.apellido-cs {\n  font-size: 14px;\n  font-size: max(14px, 1em);\n  font-family: inherit;\n  padding-left: 0%;\n  background-color: #fff;\n  border: 2px solid 1px;\n  border-radius: 4px;\n  top: 19%;\n  line-height: 0.5;\n  height: 2rem;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.telefo-cs {\n  font-size: 14px;\n  font-size: max(14px, 1em);\n  font-family: inherit;\n  padding-left: 0%;\n  background-color: #fff;\n  border: 2px solid 1px;\n  border-radius: 4px;\n  top: 26%;\n  line-height: 0.5;\n  height: 2rem;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.cargo-cs {\n  font-size: 14px;\n  font-size: max(14px, 1em);\n  font-family: inherit;\n  padding: 0.1em 0.2em;\n  background-color: #fff;\n  border: 2px solid 1px;\n  border-radius: 4px;\n  top: 33%;\n  line-height: 0.5;\n  height: 2rem;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n  font-weight: 100;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.pwd-cs {\n  font-size: 14px;\n  font-size: max(14px, 1em);\n  font-family: inherit;\n  padding: 0.1em 0.2em;\n  background-color: #fff;\n  border: 2px solid 1px;\n  border-radius: 4px;\n  top: 39%;\n  line-height: 0.5;\n  height: 2rem;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n  font-weight: 100;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.frm-cs {\n  position: absolute;\n  top: 16%;\n  width: 100%;\n  height: 45%;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn-cs {\n  font-size: 14px;\n  font-size: max(14px, 1em);\n  font-family: inherit;\n  padding: 0.1em 0.2em;\n  background-color: rgba(255, 255, 255, 0);\n  border: 2px solid 1px;\n  border-radius: 4px;\n  top: 45%;\n  line-height: 0.5;\n  height: 2rem;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n  font-weight: 100;\n  position: relative;\n}\n\n.contrasena-cs {\n  font-size: 14px;\n  font-size: max(14px, 1em);\n  font-family: inherit;\n  padding-left: 0%;\n  background-color: #fff;\n  border: 2px solid 1px;\n  border-radius: 4px;\n  top: 8%;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.btnAux-cs {\n  font-size: 14px;\n  font-size: max(14px, 1em);\n  font-family: inherit;\n  padding: 0.1em 0.2em;\n  background-color: rgba(255, 255, 255, 0);\n  border: 2px solid 1px;\n  border-radius: 4px;\n  top: 15%;\n  line-height: 0.5;\n  height: 2rem;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: normal;\n  font-weight: 100;\n  position: relative;\n}\n\n.bg-btn {\n  background: url(\"/assets/img/pn-btn.png\");\n}\n\n.principal {\n  width: 100vw;\n  height: 64.5vh;\n  background-color: green;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.btnpanic {\n  width: 98%;\n  top: 53%;\n  left: 50%;\n}\n\n.center {\n  margin: 0;\n  position: absolute;\n  top: 53%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 95%;\n}\n\n.hover01 figure img {\n  transform: scale(1.2);\n  transition: 0.3s ease-in-out;\n}\n\n.hover01 figure:active img {\n  transform: scale(0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUVBLGtEQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUVBLG1EQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUVBLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBV0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUdBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVpKOztBQWlCRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBRUEsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RUFBQTtBQW5CSjs7QUFzQkU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUVBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEVBQUE7QUF4Qko7O0FBMkJFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxVQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUdBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRFQUFBO0FBN0JKOztBQWlDRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBRUEsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RUFBQTtBQW5DSjs7QUF1Q0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFJQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0RUFBQTtBQXZDSjs7QUEwQ0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFJQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0RUFBQTtBQTFDSjs7QUE2Q0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUdBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTVDSjs7QUErQ0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFJQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtBQWhESjs7QUFtREU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUVBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUlBLFVBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEVBQUE7QUF2REo7O0FBMERFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBSUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7QUEzREo7O0FBZ0VFO0VBQ0UseUNBQUE7QUE3REo7O0FBZ0VFO0VBRUUsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBOURKOztBQWdFRTtFQUVFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQTlESjs7QUFtRUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0VBQ0EsVUFBQTtBQWhFSjs7QUFvRUU7RUFFQSxxQkFBQTtFQUVBLDRCQUFBO0FBakVGOztBQW1FRTtFQUVBLHFCQUFBO0FBaEVGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGVtZS1iZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICAvL29wYWNpdHk6IC40OyAvLy4xMlxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvUHJpbmNpcGFsLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAuYXV4IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIC8vb3BhY2l0eTogLjQ7IC8vLjEyXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9QcmluY2lwYnRuLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYmxpbmljaW8tY3N7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IG1heCgxNnB4LCAxZW0pO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwLjFlbSAwLjJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDEzNiwgNzgsIDApO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdG9wOiAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAvL3dpZHRoOiAxOTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy9sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC8vYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOkNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICBcclxuICAgIC8vYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmxib2x2aWRvLWNze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiBtYXgoMTZweCwgMWVtKTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMC4xZW0gMC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAxMzYsIDc4LCAwKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRvcDogMTclO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIC8vd2lkdGg6IDE5MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvL2xlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLy9ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHRleHQtYWxpZ246Q2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgXHJcbiAgICAvL2JveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgfVxyXG5cclxuICAuaWRlbnQtY3N7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IG1heCgxNHB4LCAxZW0pO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAvL3BhZGRpbmc6IC0xMDtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdG9wOiA1JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAvL3dpZHRoOiAxOTBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICAvL2xlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLy9ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItY3N7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IG1heCgxNHB4LCAxZW0pO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAvL3BhZGRpbmc6IC0xMDtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdG9wOiAxMiU7XHJcbiAgICBsaW5lLWhlaWdodDogMC41O1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgLy93aWR0aDogMTkwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgLy9sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC8vYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcGVsbGlkby1jc3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogbWF4KDE0cHgsIDFlbSk7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIC8vcGFkZGluZzogLTEwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0b3A6IDE5JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAvL3dpZHRoOiAxOTBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICAvL2xlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLy9ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB9XHJcbiBcclxuXHJcbiAgLnRlbGVmby1jc3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogbWF4KDE0cHgsIDFlbSk7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIC8vcGFkZGluZzogLTEwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0b3A6IDI2JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAvL3dpZHRoOiAxOTBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICAvL2xlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLy9ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB9XHJcbiBcclxuXHJcbiAgLmNhcmdvLWNze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiBtYXgoMTRweCwgMWVtKTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMC4xZW0gMC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdG9wOiAzMyU7XHJcbiAgICBsaW5lLWhlaWdodDogMC41O1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIC8vbGVmdDogMjAlO1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLy9ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB9XHJcblxyXG4gIC5wd2QtY3N7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IG1heCgxNHB4LCAxZW0pO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwLjFlbSAwLjJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0b3A6IDM5JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgLy9sZWZ0OiAyMCU7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAvL2JvcmRlci13aWR0aDogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIH1cclxuICBcclxuICAuZnJtLWNze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDUlO1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLy9ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWNze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiBtYXgoMTRweCwgMWVtKTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMC4xZW0gMC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBsaW5lLWhlaWdodDogMC41O1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIC8vbGVmdDogMjAlO1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLy9ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgLy9ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRyYXNlbmEtY3N7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IG1heCgxNHB4LCAxZW0pO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAvL3BhZGRpbmc6IC0xMDtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdG9wOiA4JTtcclxuICAgIC8vbGluZS1oZWlnaHQ6IDAuNTtcclxuICAgIC8vaGVpZ2h0OiAycmVtO1xyXG4gICAgLy93aWR0aDogMTkwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgLy9sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC8vYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgfVxyXG5cclxuICAuYnRuQXV4LWNze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiBtYXgoMTRweCwgMWVtKTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMC4xZW0gMC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBsaW5lLWhlaWdodDogMC41O1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIC8vbGVmdDogMjAlO1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLy9ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgLy9ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAuYmctYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3BuLWJ0bi5wbmdcIik7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmluY2lwYWx7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogNjQuNXZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYnRucGFuaWN7XHJcbiAgICBcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICB0b3A6IDUzJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC8vaGVpZ2h0OiBhdXRvO1xyXG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MyU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICAvL2hlaWdodDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcjAxIGZpZ3VyZSBpbWcge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5ob3ZlcjAxIGZpZ3VyZTphY3RpdmUgaW1nIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n</ion-header>\n<ion-content>\n  \n  <div class=\"theme-bg\" *ngIf=\"stLACCESO === '0' || stLACCESO === '1'\">\n    <div  *ngIf=\"stLACCESO === '0'\">\n      <form [formGroup]=\"onRegistro\">\n        <div class=\"frm-cs\">\n          <ion-label color=\"dark\" class=\"lblinicio-cs\">REGISTRESE</ion-label>\n          <ion-item class=\"ident-cs\">\n            <ion-icon name=\"person-outline\" slot=\"end\"></ion-icon>\n            <ion-input type=\"number\" formControlName=\"stLIdentifica\" [(ngModel)]=\"stLIdentifica\" placeholder=\"Identificación\" ></ion-input>\n            \n          </ion-item>\n\n          <ion-item class=\"user-cs\">\n            <ion-icon name=\"person-outline\" slot=\"end\"></ion-icon>\n            <ion-input type=\"text\" placeholder=\"Nombres\" formControlName=\"stLNombres\" [(ngModel)]=\"stLNombres\" ></ion-input>\n            \n          </ion-item>\n\n          <ion-item class=\"apellido-cs\">\n            <ion-icon name=\"person-outline\" slot=\"end\"></ion-icon>\n            <ion-input type=\"text\" placeholder=\"Apellidos\" formControlName=\"stLApellidos\" [(ngModel)]=\"stLApellidos\"></ion-input>\n            \n          </ion-item>\n\n          <ion-item class=\"telefo-cs\">\n            <ion-icon name=\"call-outline\" slot=\"end\"></ion-icon>\n            <ion-input type=\"number\" placeholder=\"Celular\" formControlName=\"stLCelular\" [(ngModel)]=\"stLCelular\"></ion-input>\n            \n          </ion-item>\n\n          <ion-item class=\"cargo-cs\">\n            <ion-icon name=\"id-card-outline\" slot=\"end\"></ion-icon>\n            <ion-input type=\"text\" placeholder=\"Cargo\" formControlName=\"stLCargo\" [(ngModel)]=\"stLCargo\"></ion-input>\n            \n          </ion-item>\n\n          <ion-item class=\"pwd-cs\">\n            <ion-icon name=\"mail-outline\" slot=\"end\"></ion-icon>\n            <ion-input type=\"email\" placeholder=\"E-mail\" formControlName=\"stLEmail\" [(ngModel)]=\"stLEmail\"></ion-input>\n          </ion-item>\n          <!--<ion-label color=\"dark\" class=\"lbolvido-cs\">¿Olvido su Contraseña?</ion-label>-->\n          \n            <!--<ion-button class=\"btn-cs\"  icon-left size=\"small\"  expand=\"block\" color=\"dark\" routerLink=\"/home\" routerDirection=\"forward\" [disabled]=\"!onRegistro.valid\">-->\n              <ion-button class=\"btn-cs\"  icon-left size=\"small\"  expand=\"block\" color=\"dark\" (click)=\"SrProcesaIngreso()\" [disabled]=\"!onRegistro.valid\">\n              Solicitar Acceso\n              <ion-icon name=\"log-in\"></ion-icon>\n            </ion-button>\n    \n                \n        </div>\n      </form>\n    </div>\n    <!--Contasena-->\n    <div  *ngIf=\"stLACCESO === '1'\">\n      <form [formGroup]=\"onContrasena\">\n        <div class=\"frm-cs\">\n          <ion-label color=\"dark\" class=\"lblinicio-cs\">CONTRASEÑA</ion-label>\n          <ion-item class=\"contrasena-cs\">\n            <ion-icon name=\"lock-closed-outline\" slot=\"end\"></ion-icon>\n            <ion-textarea rows=\"4\" cols=\"20\" formControlName=\"stLContrasena\" [(ngModel)]=\"stLContrasena\" placeholder=\"Contraseña\"></ion-textarea>\n          </ion-item>\n\n          \n          \n            <!--<ion-button class=\"btn-cs\"  icon-left size=\"small\"  expand=\"block\" color=\"dark\" routerLink=\"/home\" routerDirection=\"forward\" [disabled]=\"!onRegistro.valid\">-->\n              <ion-button class=\"btnAux-cs\"  icon-left size=\"small\"  expand=\"block\" color=\"dark\" (click)=\"SrProcesaContrasena()\" [disabled]=\"!onContrasena.valid\">\n              Registrar\n              <ion-icon name=\"log-in\"></ion-icon>\n            </ion-button>\n    \n                \n        </div>\n      </form>\n    </div>\n    <!--Fin-->\n  </div>\n\n  <!--Inicion Boton-->\n  <div class=\"aux\" *ngIf=\"stLACCESO === '3'\">\n    <div  *ngIf=\"stLACCESO === '3'\">\n      <ion-grid class=\"ion-no-padding\" fixed>\n        \n  \n        <div class=\"ion-no-margin\">\n          <button ion-button clear (click)=\"SrPanico()\"  >\n          <div class=\"center hover01 column\"  >\n          \n            \n            \n              <figure >  <img  \n              \n               src=\"/assets/img/pn-btn.png\"  /></figure>\n           \n        \n          </div>\n        </button>\n        </div>\n  \n      </ion-grid>\n      \n    </div>\n    <!--Fin-->\n  </div>\n  <!--Fin-->\n</ion-content>\n\n\n<ion-footer class=\"animated fadeIn\" *ngIf=\"stLACCESO === '3'\">\n  <ion-button class=\"ion-no-margin\" class=\"LblTitulo\" expand=\"full\" size=\"large\" [color]=\"stLColorAsistencia\"  >\n    <ion-label class=\"ion-text-center\" style=\"font-weight: bold; font-size: 20px;\">{{stLEstado}}</ion-label>\n  </ion-button>\n  <ion-toolbar color=\"dark\">\n    <ion-grid class=\"ion-no-padding\">\n     \n        <ion-row>\n           <!--\n          <ion-col size=\"4\" class=\"ion-no-padding\">\n            <ion-button size=\"small\" [ngStyle]=\"{'background-color': stLClrFondo}\" expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"SrOnLinterna()\">\n              <ion-icon slot=\"start\" [ios]=\"'sunny-outline'\" [md]=\"'sunny-sharp'\"></ion-icon>\n              Linterna\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-no-padding\"   >\n              <ion-button  size=\"small\" [ngStyle]=\"{'background-color': stLClrFondoPan}\" expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"onPanico()\">\n                <ion-icon slot=\"start\" [ios]=\"'warning-outline'\" [md]=\"'warning-sharp'\" ></ion-icon>\n                Panico\n              </ion-button>\n            </ion-col>\n      -->\n          <ion-col [ngStyle]=\"{'background-color': stLClrFondoPan}\" size=\"12\" class=\"ion-no-padding\"   >\n            <ion-button  size=\"small\" [ngStyle]=\"{'background-color': stLClrFondoPan}\"  expand=\"full\" fill=\"clear\" color=\"light\" (click)=\"onLlamar()\">\n              <ion-icon slot=\"start\" [ios]=\"'call-outline'\" [md]=\"'call-sharp'\"  ></ion-icon>\n              \n            </ion-button>\n          </ion-col>\n\n\n\n        </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map