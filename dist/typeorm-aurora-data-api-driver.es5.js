import { Buffer as Buffer$1 } from 'buffer';
import { homedir, platform, release } from 'os';
import { sep, join } from 'path';
import crypto, { createHash, createHmac } from 'crypto';
import { promises, lstatSync, fstatSync, readFileSync } from 'fs';
import { Readable, Writable } from 'stream';
import { Agent, request as request$1 } from 'http';
import { Agent as Agent$1, request } from 'https';
import 'http2';
import { promisify } from 'util';
import { parse as parse$1 } from 'url';
import { exec } from 'child_process';
import { versions, env } from 'process';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while (env.stack.length) {
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
            }
            catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}

var _tslib = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
};

var _tslib$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __addDisposableResource: __addDisposableResource,
    get __assign () { return __assign; },
    __asyncDelegator: __asyncDelegator,
    __asyncGenerator: __asyncGenerator,
    __asyncValues: __asyncValues,
    __await: __await,
    __awaiter: __awaiter,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __createBinding: __createBinding,
    __decorate: __decorate,
    __disposeResources: __disposeResources,
    __esDecorate: __esDecorate,
    __exportStar: __exportStar,
    __extends: __extends,
    __generator: __generator,
    __importDefault: __importDefault,
    __importStar: __importStar,
    __makeTemplateObject: __makeTemplateObject,
    __metadata: __metadata,
    __param: __param,
    __propKey: __propKey,
    __read: __read,
    __rest: __rest,
    __runInitializers: __runInitializers,
    __setFunctionName: __setFunctionName,
    __spread: __spread,
    __spreadArray: __spreadArray,
    __spreadArrays: __spreadArrays,
    __values: __values,
    default: _tslib
});

const getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
    let httpHandler = runtimeConfig.httpHandler;
    return {
        setHttpHandler(handler) {
            httpHandler = handler;
        },
        httpHandler() {
            return httpHandler;
        },
        updateHttpClientConfig(key, value) {
            httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
            return httpHandler.httpHandlerConfigs();
        },
    };
};
const resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
    return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler(),
    };
};

var HttpAuthLocation;
(function (HttpAuthLocation) {
    HttpAuthLocation["HEADER"] = "header";
    HttpAuthLocation["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

var HttpApiKeyAuthLocation;
(function (HttpApiKeyAuthLocation) {
    HttpApiKeyAuthLocation["HEADER"] = "header";
    HttpApiKeyAuthLocation["QUERY"] = "query";
})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));

var EndpointURLScheme;
(function (EndpointURLScheme) {
    EndpointURLScheme["HTTP"] = "http";
    EndpointURLScheme["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

var AlgorithmId;
(function (AlgorithmId) {
    AlgorithmId["MD5"] = "md5";
    AlgorithmId["CRC32"] = "crc32";
    AlgorithmId["CRC32C"] = "crc32c";
    AlgorithmId["SHA1"] = "sha1";
    AlgorithmId["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));

var FieldPosition;
(function (FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));

const SMITHY_CONTEXT_KEY = "__smithy_context";

var IniSectionType;
(function (IniSectionType) {
    IniSectionType["PROFILE"] = "profile";
    IniSectionType["SSO_SESSION"] = "sso-session";
    IniSectionType["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));

var RequestHandlerProtocol;
(function (RequestHandlerProtocol) {
    RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

class HttpRequest {
    constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
                ? `${options.protocol}:`
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
    }
    static isInstance(request) {
        if (!request)
            return false;
        const req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    }
    clone() {
        const cloned = new HttpRequest({
            ...this,
            headers: { ...this.headers },
        });
        if (cloned.query)
            cloned.query = cloneQuery$1(cloned.query);
        return cloned;
    }
}
function cloneQuery$1(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [...param] : param,
        };
    }, {});
}

class HttpResponse {
    constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response)
            return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}

function resolveHostHeaderConfig(input) {
    return input;
}
const hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!HttpRequest.isInstance(args.request))
        return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
    }
    else if (!request.headers["host"]) {
        let host = request.hostname;
        if (request.port != null)
            host += `:${request.port}`;
        request.headers["host"] = host;
    }
    return next(args);
};
const hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
const getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    },
});

const loggerMiddleware = () => (next, context) => async (args) => {
    try {
        const response = await next(args);
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger?.info?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata,
        });
        return response;
    }
    catch (error) {
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger?.error?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            error,
            metadata: error.$metadata,
        });
        throw error;
    }
};
const loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
});

const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
const recursionDetectionMiddleware = (options) => (next) => async (args) => {
    const { request } = args;
    if (!HttpRequest.isInstance(request) ||
        options.runtime !== "node" ||
        request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceId = process.env[ENV_TRACE_ID];
    const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
        ...args,
        request,
    });
};
const addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low",
};
const getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
    },
});

class ProviderError extends Error {
    constructor(message, tryNextLink = true) {
        super(message);
        this.tryNextLink = tryNextLink;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, ProviderError.prototype);
    }
    static from(error, tryNextLink = true) {
        return Object.assign(new this(error.message, tryNextLink), error);
    }
}

class CredentialsProviderError extends ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}

class TokenProviderError extends ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, TokenProviderError.prototype);
    }
}

const chain = (...providers) => async () => {
    if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
    }
    let lastProviderError;
    for (const provider of providers) {
        try {
            const credentials = await provider();
            return credentials;
        }
        catch (err) {
            lastProviderError = err;
            if (err?.tryNextLink) {
                continue;
            }
            throw err;
        }
    }
    throw lastProviderError;
};

const fromStatic$1 = (staticValue) => () => Promise.resolve(staticValue);

const memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
        if (!pending) {
            pending = provider();
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

const fromUtf8$3 = (input) => {
    const bytes = [];
    for (let i = 0, len = input.length; i < len; i++) {
        const value = input.charCodeAt(i);
        if (value < 0x80) {
            bytes.push(value);
        }
        else if (value < 0x800) {
            bytes.push((value >> 6) | 0b11000000, (value & 0b111111) | 0b10000000);
        }
        else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            const surrogatePair = 0x10000 + ((value & 0b1111111111) << 10) + (input.charCodeAt(++i) & 0b1111111111);
            bytes.push((surrogatePair >> 18) | 0b11110000, ((surrogatePair >> 12) & 0b111111) | 0b10000000, ((surrogatePair >> 6) & 0b111111) | 0b10000000, (surrogatePair & 0b111111) | 0b10000000);
        }
        else {
            bytes.push((value >> 12) | 0b11100000, ((value >> 6) & 0b111111) | 0b10000000, (value & 0b111111) | 0b10000000);
        }
    }
    return Uint8Array.from(bytes);
};
const toUtf8$3 = (input) => {
    let decoded = "";
    for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        if (byte < 0x80) {
            decoded += String.fromCharCode(byte);
        }
        else if (0b11000000 <= byte && byte < 0b11100000) {
            const nextByte = input[++i];
            decoded += String.fromCharCode(((byte & 0b11111) << 6) | (nextByte & 0b111111));
        }
        else if (0b11110000 <= byte && byte < 0b101101101) {
            const surrogatePair = [byte, input[++i], input[++i], input[++i]];
            const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
            decoded += decodeURIComponent(encoded);
        }
        else {
            decoded += String.fromCharCode(((byte & 0b1111) << 12) | ((input[++i] & 0b111111) << 6) | (input[++i] & 0b111111));
        }
    }
    return decoded;
};

function fromUtf8$2(input) {
    return new TextEncoder().encode(input);
}
function toUtf8$2(input) {
    return new TextDecoder("utf-8").decode(input);
}

const fromUtf8$1 = (input) => typeof TextEncoder === "function" ? fromUtf8$2(input) : fromUtf8$3(input);
const toUtf8$1 = (input) => typeof TextDecoder === "function" ? toUtf8$2(input) : toUtf8$3(input);

var distEs = /*#__PURE__*/Object.freeze({
    __proto__: null,
    fromUtf8: fromUtf8$1,
    toUtf8: toUtf8$1
});

var convertToBuffer_1 = createCommonjsModule(function (module, exports) {
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToBuffer = void 0;

// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from
    ? function (input) { return Buffer.from(input, "utf8"); }
    : distEs.fromUtf8;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array)
        return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
exports.convertToBuffer = convertToBuffer;

});

unwrapExports(convertToBuffer_1);
convertToBuffer_1.convertToBuffer;

var isEmptyData_1 = createCommonjsModule(function (module, exports) {
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyData = void 0;
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
exports.isEmptyData = isEmptyData;

});

unwrapExports(isEmptyData_1);
isEmptyData_1.isEmptyData;

var numToUint8_1 = createCommonjsModule(function (module, exports) {
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.numToUint8 = void 0;
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff,
    ]);
}
exports.numToUint8 = numToUint8;

});

unwrapExports(numToUint8_1);
numToUint8_1.numToUint8;

var uint32ArrayFrom_1 = createCommonjsModule(function (module, exports) {
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint32ArrayFrom = void 0;
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
exports.uint32ArrayFrom = uint32ArrayFrom;

});

unwrapExports(uint32ArrayFrom_1);
uint32ArrayFrom_1.uint32ArrayFrom;

var build$1 = createCommonjsModule(function (module, exports) {
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;

Object.defineProperty(exports, "convertToBuffer", { enumerable: true, get: function () { return convertToBuffer_1.convertToBuffer; } });

Object.defineProperty(exports, "isEmptyData", { enumerable: true, get: function () { return isEmptyData_1.isEmptyData; } });

Object.defineProperty(exports, "numToUint8", { enumerable: true, get: function () { return numToUint8_1.numToUint8; } });

Object.defineProperty(exports, "uint32ArrayFrom", { enumerable: true, get: function () { return uint32ArrayFrom_1.uint32ArrayFrom; } });

});

unwrapExports(build$1);
build$1.uint32ArrayFrom;
build$1.numToUint8;
build$1.isEmptyData;
build$1.convertToBuffer;

var tslib_1 = getCjsExportFromNamespace(_tslib$1);

var aws_crc32 = createCommonjsModule(function (module, exports) {
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCrc32 = void 0;



var AwsCrc32 = /** @class */ (function () {
    function AwsCrc32() {
        this.crc32 = new build.Crc32();
    }
    AwsCrc32.prototype.update = function (toHash) {
        if ((0, build$1.isEmptyData)(toHash))
            return;
        this.crc32.update((0, build$1.convertToBuffer)(toHash));
    };
    AwsCrc32.prototype.digest = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, (0, build$1.numToUint8)(this.crc32.digest())];
            });
        });
    };
    AwsCrc32.prototype.reset = function () {
        this.crc32 = new build.Crc32();
    };
    return AwsCrc32;
}());
exports.AwsCrc32 = AwsCrc32;

});

unwrapExports(aws_crc32);
aws_crc32.AwsCrc32;

var build = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;


function crc32(data) {
    return new Crc32().update(data).digest();
}
exports.crc32 = crc32;
var Crc32 = /** @class */ (function () {
    function Crc32() {
        this.checksum = 0xffffffff;
    }
    Crc32.prototype.update = function (data) {
        var e_1, _a;
        try {
            for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var byte = data_1_1.value;
                this.checksum =
                    (this.checksum >>> 8) ^ lookupTable[(this.checksum ^ byte) & 0xff];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    Crc32.prototype.digest = function () {
        return (this.checksum ^ 0xffffffff) >>> 0;
    };
    return Crc32;
}());
exports.Crc32 = Crc32;
// prettier-ignore
var a_lookUpTable = [
    0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,
    0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
    0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
    0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,
    0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
    0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
    0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,
    0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,
    0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
    0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
    0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,
    0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
    0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,
    0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
    0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
    0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
    0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,
    0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
    0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,
    0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
    0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
    0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,
    0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,
    0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
    0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
    0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,
    0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
    0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,
    0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,
    0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
    0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,
    0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,
    0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,
    0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,
    0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
    0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,
    0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,
    0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,
    0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
    0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
    0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,
    0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
    0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,
    0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,
    0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
    0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,
    0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,
    0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
    0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,
    0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
    0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,
    0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,
    0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,
    0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
    0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
    0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,
    0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
    0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,
    0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,
    0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
    0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,
    0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,
    0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
    0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D,
];
var lookupTable = (0, build$1.uint32ArrayFrom)(a_lookUpTable);

Object.defineProperty(exports, "AwsCrc32", { enumerable: true, get: function () { return aws_crc32.AwsCrc32; } });

});

unwrapExports(build);
build.AwsCrc32;
build.Crc32;
build.crc32;

const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}

class Int64 {
    constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9223372036854776000 || number < -9223372036854776000) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 0b10000000;
        if (negative) {
            negate(bytes);
        }
        return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function negate(bytes) {
    for (let i = 0; i < 8; i++) {
        bytes[i] ^= 0xff;
    }
    for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
            break;
    }
}

class HeaderMarshaller {
    constructor(toUtf8, fromUtf8) {
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
    }
    format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
            const bytes = this.fromUtf8(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch (header.type) {
            case "boolean":
                return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
                return Uint8Array.from([2, header.value]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = this.fromUtf8(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    }
    parse(headers) {
        const out = {};
        let position = 0;
        while (position < headers.byteLength) {
            const nameLength = headers.getUint8(position++);
            const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch (headers.getUint8(position++)) {
                case 0:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: true,
                    };
                    break;
                case 1:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: false,
                    };
                    break;
                case 2:
                    out[name] = {
                        type: BYTE_TAG,
                        value: headers.getInt8(position++),
                    };
                    break;
                case 3:
                    out[name] = {
                        type: SHORT_TAG,
                        value: headers.getInt16(position, false),
                    };
                    position += 2;
                    break;
                case 4:
                    out[name] = {
                        type: INT_TAG,
                        value: headers.getInt32(position, false),
                    };
                    position += 4;
                    break;
                case 5:
                    out[name] = {
                        type: LONG_TAG,
                        value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)),
                    };
                    position += 8;
                    break;
                case 6:
                    const binaryLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: BINARY_TAG,
                        value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength),
                    };
                    position += binaryLength;
                    break;
                case 7:
                    const stringLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: STRING_TAG,
                        value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength)),
                    };
                    position += stringLength;
                    break;
                case 8:
                    out[name] = {
                        type: TIMESTAMP_TAG,
                        value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf()),
                    };
                    position += 8;
                    break;
                case 9:
                    const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                    position += 16;
                    out[name] = {
                        type: UUID_TAG,
                        value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`,
                    };
                    break;
                default:
                    throw new Error(`Unrecognized header type tag`);
            }
        }
        return out;
    }
}
var HEADER_VALUE_TYPE;
(function (HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const BOOLEAN_TAG = "boolean";
const BYTE_TAG = "byte";
const SHORT_TAG = "short";
const INT_TAG = "integer";
const LONG_TAG = "long";
const BINARY_TAG = "binary";
const STRING_TAG = "string";
const TIMESTAMP_TAG = "timestamp";
const UUID_TAG = "uuid";
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

const getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});

const normalizeProvider$1 = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};

const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!isArrayBuffer(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return Buffer$1.from(input, offset, length);
};
const fromString = (input, encoding) => {
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? Buffer$1.from(input, encoding) : Buffer$1.from(input);
};

const fromUtf8 = (input) => {
    const buf = fromString(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};

const toUint8Array = (data) => {
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};

const toUtf8 = (input) => fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");

const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
const TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
const AUTH_HEADER = "authorization";
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const DATE_HEADER = "date";
const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
const SHA256_HEADER = "x-amz-content-sha256";
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
const ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
const PROXY_HEADER_PATTERN = /^proxy-/;
const SEC_HEADER_PATTERN = /^sec-/;
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
const EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const MAX_CACHE_SIZE = 50;
const KEY_TYPE_IDENTIFIER = "aws4_request";
const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
    }
    return (signingKeyCache[cacheKey] = key);
};
const hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update(toUint8Array(data));
    return hash.digest();
};

const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
            unsignableHeaders?.has(canonicalHeaderName) ||
            PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};

const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;

const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .reduce((encoded, value) => encoded.concat([`${escapeUri(key)}=${escapeUri(value)}`]), [])
                .sort()
                .join("&");
        }
    }
    return keys
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};

const getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(toUint8Array(body));
        return toHex(await hashCtor.digest());
    }
    return UNSIGNED_PAYLOAD;
};

const hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};

const cloneRequest = ({ headers, query, ...rest }) => ({
    ...rest,
    headers: { ...headers },
    query: query ? cloneQuery(query) : undefined,
});
const cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param,
    };
}, {});

const moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};

const prepareRequest = (request) => {
    request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
    for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};

const iso8601 = (time) => toDate(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};

class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.headerMarshaller = new HeaderMarshaller(toUtf8, fromUtf8);
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeProvider$1(region);
        this.credentialProvider = normalizeProvider$1(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
            request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else if (toSign.message) {
            return this.signMessage(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = toHex(await hash.digest());
        const stringToSign = [
            EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
            headers: this.headerMarshaller.format(signableMessage.message.headers),
            payload: signableMessage.message.body,
        }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature,
        });
        return promise.then((signature) => {
            return { message: signableMessage.message, signature };
        });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[AUTH_HEADER] =
            `${ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update(toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if (pathSegment?.length === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = encodeURIComponent(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" ||
            typeof credentials.accessKeyId !== "string" ||
            typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
}
const formatDate = (now) => {
    const longDate = iso8601(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");

const CREDENTIAL_EXPIRE_WINDOW = 300000;
const resolveAwsAuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = normalizeProvider$1(input.signer);
    }
    else if (input.regionInfoProvider) {
        signer = () => normalizeProvider$1(input.region)()
            .then(async (region) => [
            (await input.regionInfoProvider(region, {
                useFipsEndpoint: await input.useFipsEndpoint(),
                useDualstackEndpoint: await input.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            input.signingRegion = input.signingRegion || signingRegion || region;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = input.signerConstructor || SignatureV4;
            return new SignerCtor(params);
        });
    }
    else {
        signer = async (authScheme) => {
            authScheme = Object.assign({}, {
                name: "sigv4",
                signingName: input.signingName || input.defaultSigningName,
                signingRegion: await normalizeProvider$1(input.region)(),
                properties: {},
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            input.signingRegion = input.signingRegion || signingRegion;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = input.signerConstructor || SignatureV4;
            return new SignerCtor(params);
        };
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
const normalizeCredentialProvider = (credentials) => {
    if (typeof credentials === "function") {
        return memoize(credentials, (credentials) => credentials.expiration !== undefined &&
            credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials) => credentials.expiration !== undefined);
    }
    return normalizeProvider$1(credentials);
};

const getSkewCorrectedDate$1 = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

const isClockSkewed$1 = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate$1(systemClockOffset).getTime() - clockTime) >= 300000;

const getUpdatedSystemClockOffset$1 = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if (isClockSkewed$1(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};

const awsAuthMiddleware = (options) => (next, context) => async function (args) {
    if (!HttpRequest.isInstance(args.request))
        return next(args);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const multiRegionOverride = authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : undefined;
    const signer = await options.signer(authScheme);
    let signedRequest;
    const signingOptions = {
        signingDate: getSkewCorrectedDate$1(options.systemClockOffset),
        signingRegion: multiRegionOverride || context["signing_region"],
        signingService: context["signing_service"],
    };
    if (context.s3ExpressIdentity) {
        const sigV4MultiRegion = signer;
        signedRequest = await sigV4MultiRegion.signWithCredentials(args.request, context.s3ExpressIdentity, signingOptions);
        if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
            throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
        }
    }
    else {
        signedRequest = await signer.sign(args.request, signingOptions);
    }
    const output = await next({
        ...args,
        request: signedRequest,
    }).catch((error) => {
        const serverTime = error.ServerTime ?? getDateHeader$1(error.$response);
        if (serverTime) {
            options.systemClockOffset = getUpdatedSystemClockOffset$1(serverTime, options.systemClockOffset);
        }
        throw error;
    });
    const dateHeader = getDateHeader$1(output.response);
    if (dateHeader) {
        options.systemClockOffset = getUpdatedSystemClockOffset$1(dateHeader, options.systemClockOffset);
    }
    return output;
};
const getDateHeader$1 = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
const awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
const getAwsAuthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
    },
});

function resolveUserAgentConfig(input) {
    return {
        ...input,
        customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
    };
}

const IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
const isIpAddress = (value) => IP_V4_REGEX.test(value) || (value.startsWith("[") && value.endsWith("]"));

const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
const isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
        if (!isValidHostLabel(label)) {
            return false;
        }
    }
    return true;
};

const customEndpointFunctions = {};

const debugId = "endpoints";

function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
        return input;
    }
    if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
}

class EndpointError extends Error {
    constructor(message) {
        super(message);
        this.name = "EndpointError";
    }
}

const booleanEquals = (value1, value2) => value1 === value2;

const getAttrPathList = (path) => {
    const parts = path.split(".");
    const pathList = [];
    for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
            if (part.indexOf("]") !== part.length - 1) {
                throw new EndpointError(`Path: '${path}' does not end with ']'`);
            }
            const arrayIndex = part.slice(squareBracketIndex + 1, -1);
            if (Number.isNaN(parseInt(arrayIndex))) {
                throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
            }
            if (squareBracketIndex !== 0) {
                pathList.push(part.slice(0, squareBracketIndex));
            }
            pathList.push(arrayIndex);
        }
        else {
            pathList.push(part);
        }
    }
    return pathList;
};

const getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    }
    else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
    }
    return acc[index];
}, value);

const isSet = (value) => value != null;

const not = (value) => !value;

const DEFAULT_PORTS = {
    [EndpointURLScheme.HTTP]: 80,
    [EndpointURLScheme.HTTPS]: 443,
};
const parseURL = (value) => {
    const whatwgURL = (() => {
        try {
            if (value instanceof URL) {
                return value;
            }
            if (typeof value === "object" && "hostname" in value) {
                const { hostname, port, protocol = "", path = "", query = {} } = value;
                const url = new URL(`${protocol}//${hostname}${port ? `:${port}` : ""}${path}`);
                url.search = Object.entries(query)
                    .map(([k, v]) => `${k}=${v}`)
                    .join("&");
                return url;
            }
            return new URL(value);
        }
        catch (error) {
            return null;
        }
    })();
    if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
    }
    const urlString = whatwgURL.href;
    const { host, hostname, pathname, protocol, search } = whatwgURL;
    if (search) {
        return null;
    }
    const scheme = protocol.slice(0, -1);
    if (!Object.values(EndpointURLScheme).includes(scheme)) {
        return null;
    }
    const isIp = isIpAddress(hostname);
    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) ||
        (typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`));
    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
    return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp,
    };
};

const stringEquals = (value1, value2) => value1 === value2;

const substring = (input, start, stop, reverse) => {
    if (start >= stop || input.length < stop) {
        return null;
    }
    if (!reverse) {
        return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
};

const uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);

const endpointFunctions = {
    booleanEquals,
    getAttr,
    isSet,
    isValidHostLabel,
    not,
    parseURL,
    stringEquals,
    substring,
    uriEncode,
};

const evaluateTemplate = (template, options) => {
    const evaluatedTemplateArr = [];
    const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    let currentIndex = 0;
    while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(currentIndex));
            break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex));
            break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
            currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
            const [refName, attrName] = parameterName.split("#");
            evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        }
        else {
            evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
    }
    return evaluatedTemplateArr.join("");
};

const getReferenceValue = ({ ref }, options) => {
    const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    return referenceRecord[ref];
};

const evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
    }
    else if (obj["fn"]) {
        return callFunction(obj, options);
    }
    else if (obj["ref"]) {
        return getReferenceValue(obj, options);
    }
    throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};

const callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
    const fnSegments = fn.split(".");
    if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
    }
    return endpointFunctions[fn](...evaluatedArgs);
};

const evaluateCondition = ({ assign, ...fnArgs }, options) => {
    if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = callFunction(fnArgs, options);
    options.logger?.debug?.(debugId, `evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
    return {
        result: value === "" ? true : !!value,
        ...(assign != null && { toAssign: { name: assign, value } }),
    };
};

const evaluateConditions = (conditions = [], options) => {
    const conditionsReferenceRecord = {};
    for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
            ...options,
            referenceRecord: {
                ...options.referenceRecord,
                ...conditionsReferenceRecord,
            },
        });
        if (!result) {
            return { result };
        }
        if (toAssign) {
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            options.logger?.debug?.(debugId, `assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
    }
    return { result: true, referenceRecord: conditionsReferenceRecord };
};

const getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
    ...acc,
    [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
            throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
    }),
}), {});

const getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
    }
    switch (typeof property) {
        case "string":
            return evaluateTemplate(property, options);
        case "object":
            if (property === null) {
                throw new EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return getEndpointProperties(property, options);
        case "boolean":
            return property;
        default:
            throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
};

const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
    ...acc,
    [propertyKey]: getEndpointProperty(propertyVal, options),
}), {});

const getEndpointUrl = (endpointUrl, options) => {
    const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
        try {
            return new URL(expression);
        }
        catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
        }
    }
    throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};

const evaluateEndpointRule = (endpointRule, options) => {
    const { conditions, endpoint } = endpointRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    };
    const { url, properties, headers } = endpoint;
    options.logger?.debug?.(debugId, `Resolving endpoint from template: ${toDebugString(endpoint)}`);
    return {
        ...(headers != undefined && {
            headers: getEndpointHeaders(headers, endpointRuleOptions),
        }),
        ...(properties != undefined && {
            properties: getEndpointProperties(properties, endpointRuleOptions),
        }),
        url: getEndpointUrl(url, endpointRuleOptions),
    };
};

const evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    throw new EndpointError(evaluateExpression(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    }));
};

const evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    return evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    });
};

const evaluateRules = (rules, options) => {
    for (const rule of rules) {
        if (rule.type === "endpoint") {
            const endpointOrUndefined = evaluateEndpointRule(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else if (rule.type === "error") {
            evaluateErrorRule(rule, options);
        }
        else if (rule.type === "tree") {
            const endpointOrUndefined = evaluateTreeRule(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else {
            throw new EndpointError(`Unknown endpoint rule: ${rule}`);
        }
    }
    throw new EndpointError(`Rules evaluation failed`);
};

const resolveEndpoint = (ruleSetObject, options) => {
    const { endpointParams, logger } = options;
    const { parameters, rules } = ruleSetObject;
    options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
    const paramsWithDefault = Object.entries(parameters)
        .filter(([, v]) => v.default != null)
        .map(([k, v]) => [k, v.default]);
    if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
            endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
    }
    const requiredParams = Object.entries(parameters)
        .filter(([, v]) => v.required)
        .map(([k]) => k);
    for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
            throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
    }
    const endpoint = evaluateRules(rules, { endpointParams, logger, referenceRecord: {} });
    if (options.endpointParams?.Endpoint) {
        try {
            const givenEndpoint = new URL(options.endpointParams.Endpoint);
            const { protocol, port } = givenEndpoint;
            endpoint.url.protocol = protocol;
            endpoint.url.port = port;
        }
        catch (e) {
        }
    }
    options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
    return endpoint;
};

const isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
        for (const label of value.split(".")) {
            if (!isVirtualHostableS3Bucket(label)) {
                return false;
            }
        }
        return true;
    }
    if (!isValidHostLabel(value)) {
        return false;
    }
    if (value.length < 3 || value.length > 63) {
        return false;
    }
    if (value !== value.toLowerCase()) {
        return false;
    }
    if (isIpAddress(value)) {
        return false;
    }
    return true;
};

const parseArn = (value) => {
    const segments = value.split(":");
    if (segments.length < 6)
        return null;
    const [arn, partition, service, region, accountId, ...resourceId] = segments;
    if (arn !== "arn" || partition === "" || service === "" || resourceId[0] === "")
        return null;
    return {
        partition,
        service,
        region,
        accountId,
        resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId,
    };
};

var partitions = [
	{
		id: "aws",
		outputs: {
			dnsSuffix: "amazonaws.com",
			dualStackDnsSuffix: "api.aws",
			implicitGlobalRegion: "us-east-1",
			name: "aws",
			supportsDualStack: true,
			supportsFIPS: true
		},
		regionRegex: "^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",
		regions: {
			"af-south-1": {
				description: "Africa (Cape Town)"
			},
			"ap-east-1": {
				description: "Asia Pacific (Hong Kong)"
			},
			"ap-northeast-1": {
				description: "Asia Pacific (Tokyo)"
			},
			"ap-northeast-2": {
				description: "Asia Pacific (Seoul)"
			},
			"ap-northeast-3": {
				description: "Asia Pacific (Osaka)"
			},
			"ap-south-1": {
				description: "Asia Pacific (Mumbai)"
			},
			"ap-south-2": {
				description: "Asia Pacific (Hyderabad)"
			},
			"ap-southeast-1": {
				description: "Asia Pacific (Singapore)"
			},
			"ap-southeast-2": {
				description: "Asia Pacific (Sydney)"
			},
			"ap-southeast-3": {
				description: "Asia Pacific (Jakarta)"
			},
			"ap-southeast-4": {
				description: "Asia Pacific (Melbourne)"
			},
			"aws-global": {
				description: "AWS Standard global region"
			},
			"ca-central-1": {
				description: "Canada (Central)"
			},
			"ca-west-1": {
				description: "Canada West (Calgary)"
			},
			"eu-central-1": {
				description: "Europe (Frankfurt)"
			},
			"eu-central-2": {
				description: "Europe (Zurich)"
			},
			"eu-north-1": {
				description: "Europe (Stockholm)"
			},
			"eu-south-1": {
				description: "Europe (Milan)"
			},
			"eu-south-2": {
				description: "Europe (Spain)"
			},
			"eu-west-1": {
				description: "Europe (Ireland)"
			},
			"eu-west-2": {
				description: "Europe (London)"
			},
			"eu-west-3": {
				description: "Europe (Paris)"
			},
			"il-central-1": {
				description: "Israel (Tel Aviv)"
			},
			"me-central-1": {
				description: "Middle East (UAE)"
			},
			"me-south-1": {
				description: "Middle East (Bahrain)"
			},
			"sa-east-1": {
				description: "South America (Sao Paulo)"
			},
			"us-east-1": {
				description: "US East (N. Virginia)"
			},
			"us-east-2": {
				description: "US East (Ohio)"
			},
			"us-west-1": {
				description: "US West (N. California)"
			},
			"us-west-2": {
				description: "US West (Oregon)"
			}
		}
	},
	{
		id: "aws-cn",
		outputs: {
			dnsSuffix: "amazonaws.com.cn",
			dualStackDnsSuffix: "api.amazonwebservices.com.cn",
			implicitGlobalRegion: "cn-northwest-1",
			name: "aws-cn",
			supportsDualStack: true,
			supportsFIPS: true
		},
		regionRegex: "^cn\\-\\w+\\-\\d+$",
		regions: {
			"aws-cn-global": {
				description: "AWS China global region"
			},
			"cn-north-1": {
				description: "China (Beijing)"
			},
			"cn-northwest-1": {
				description: "China (Ningxia)"
			}
		}
	},
	{
		id: "aws-us-gov",
		outputs: {
			dnsSuffix: "amazonaws.com",
			dualStackDnsSuffix: "api.aws",
			implicitGlobalRegion: "us-gov-west-1",
			name: "aws-us-gov",
			supportsDualStack: true,
			supportsFIPS: true
		},
		regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
		regions: {
			"aws-us-gov-global": {
				description: "AWS GovCloud (US) global region"
			},
			"us-gov-east-1": {
				description: "AWS GovCloud (US-East)"
			},
			"us-gov-west-1": {
				description: "AWS GovCloud (US-West)"
			}
		}
	},
	{
		id: "aws-iso",
		outputs: {
			dnsSuffix: "c2s.ic.gov",
			dualStackDnsSuffix: "c2s.ic.gov",
			implicitGlobalRegion: "us-iso-east-1",
			name: "aws-iso",
			supportsDualStack: false,
			supportsFIPS: true
		},
		regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
		regions: {
			"aws-iso-global": {
				description: "AWS ISO (US) global region"
			},
			"us-iso-east-1": {
				description: "US ISO East"
			},
			"us-iso-west-1": {
				description: "US ISO WEST"
			}
		}
	},
	{
		id: "aws-iso-b",
		outputs: {
			dnsSuffix: "sc2s.sgov.gov",
			dualStackDnsSuffix: "sc2s.sgov.gov",
			implicitGlobalRegion: "us-isob-east-1",
			name: "aws-iso-b",
			supportsDualStack: false,
			supportsFIPS: true
		},
		regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
		regions: {
			"aws-iso-b-global": {
				description: "AWS ISOB (US) global region"
			},
			"us-isob-east-1": {
				description: "US ISOB East (Ohio)"
			}
		}
	},
	{
		id: "aws-iso-e",
		outputs: {
			dnsSuffix: "cloud.adc-e.uk",
			dualStackDnsSuffix: "cloud.adc-e.uk",
			implicitGlobalRegion: "eu-isoe-west-1",
			name: "aws-iso-e",
			supportsDualStack: false,
			supportsFIPS: true
		},
		regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
		regions: {
		}
	},
	{
		id: "aws-iso-f",
		outputs: {
			dnsSuffix: "csp.hci.ic.gov",
			dualStackDnsSuffix: "csp.hci.ic.gov",
			implicitGlobalRegion: "us-isof-south-1",
			name: "aws-iso-f",
			supportsDualStack: false,
			supportsFIPS: true
		},
		regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
		regions: {
		}
	}
];
var version$3 = "1.1";
var partitionsInfo = {
	partitions: partitions,
	version: version$3
};

let selectedPartitionsInfo = partitionsInfo;
const partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition of partitions) {
        const { regions, outputs } = partition;
        for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
                return {
                    ...outputs,
                    ...regionData,
                };
            }
        }
    }
    for (const partition of partitions) {
        const { regionRegex, outputs } = partition;
        if (new RegExp(regionRegex).test(value)) {
            return {
                ...outputs,
            };
        }
    }
    const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");
    if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex," +
            " and default partition with id 'aws' doesn't exist.");
    }
    return {
        ...DEFAULT_PARTITION.outputs,
    };
};

const awsEndpointFunctions = {
    isVirtualHostableS3Bucket: isVirtualHostableS3Bucket,
    parseArn: parseArn,
    partition: partition,
};
customEndpointFunctions.aws = awsEndpointFunctions;

const USER_AGENT = "user-agent";
const X_AMZ_USER_AGENT = "x-amz-user-agent";
const SPACE = " ";
const UA_NAME_SEPARATOR = "/";
const UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
const UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
const UA_ESCAPE_CHAR = "-";

const userAgentMiddleware = (options) => (next, context) => async (args) => {
    const { request } = args;
    if (!HttpRequest.isInstance(request))
        return next(args);
    const { headers } = request;
    const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
    const sdkUserAgentValue = ([])
        .concat([...defaultUserAgent, ...userAgent, ...customUserAgent])
        .join(SPACE);
    const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent,
    ].join(SPACE);
    if (options.runtime !== "browser") {
        if (normalUAValue) {
            headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT]
                ? `${headers[USER_AGENT]} ${normalUAValue}`
                : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
    }
    else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
        ...args,
        request,
    });
};
const escapeUserAgent = (userAgentPair) => {
    const name = userAgentPair[0]
        .split(UA_NAME_SEPARATOR)
        .map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR))
        .join(UA_NAME_SEPARATOR);
    const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
    const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter((item) => item && item.length > 0)
        .reduce((acc, item, index) => {
        switch (index) {
            case 0:
                return item;
            case 1:
                return `${acc}/${item}`;
            default:
                return `${acc}#${item}`;
        }
    }, "");
};
const getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
const getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    },
});

const booleanSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    if (obj[key] === "true")
        return true;
    if (obj[key] === "false")
        return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};

var SelectorType;
(function (SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));

const ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
const CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
const NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => booleanSelector(env, ENV_USE_DUALSTACK_ENDPOINT, SelectorType.ENV),
    configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_DUALSTACK_ENDPOINT, SelectorType.CONFIG),
    default: false,
};

const ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
const CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
const NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => booleanSelector(env, ENV_USE_FIPS_ENDPOINT, SelectorType.ENV),
    configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, SelectorType.CONFIG),
    default: false,
};

const REGION_ENV_NAME = "AWS_REGION";
const REGION_INI_NAME = "region";
const NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};

const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

const getRealRegion = (region) => isFipsRegion(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;

const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return getRealRegion(region);
            }
            const providedRegion = await region();
            return getRealRegion(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if (isFipsRegion(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
    };
};

const CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
        const request = args.request;
        if (HttpRequest.isInstance(request)) {
            const { body, headers } = request;
            if (body &&
                Object.keys(headers)
                    .map((str) => str.toLowerCase())
                    .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                try {
                    const length = bodyLengthChecker(body);
                    request.headers = {
                        ...request.headers,
                        [CONTENT_LENGTH_HEADER]: String(length),
                    };
                }
                catch (error) {
                }
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
const contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
const getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    },
});

const resolveParamsForS3 = async (endpointParams) => {
    const bucket = endpointParams?.Bucket || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    }
    else if (!isDnsCompatibleBucketName(bucket) ||
        (bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:")) ||
        bucket.toLowerCase() !== bucket ||
        bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
const isArnBucketName = (bucketName) => {
    const [arn, partition, service, region, account, typeOrId] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = [arn, partition, service, account, typeOrId].filter(Boolean).length === 5;
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return arn === "arn" && !!partition && !!service && !!account && !!typeOrId;
};

const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
    const configProvider = async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
            return configValue();
        }
        return configValue;
    };
    if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
            return configValue;
        };
    }
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
                if ("url" in endpoint) {
                    return endpoint.url.href;
                }
                if ("hostname" in endpoint) {
                    const { protocol, hostname, port, path } = endpoint;
                    return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
                }
            }
            return endpoint;
        };
    }
    return configProvider;
};

const fromEnv$1 = (envVarSelector) => async () => {
    try {
        const config = envVarSelector(process.env);
        if (config === undefined) {
            throw new Error();
        }
        return config;
    }
    catch (e) {
        throw new CredentialsProviderError(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
    }
};

const homeDirCache = {};
const getHomeDirCacheKey = () => {
    if (process && process.geteuid) {
        return `${process.geteuid()}`;
    }
    return "DEFAULT";
};
const getHomeDir = () => {
    const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${sep}` } = process.env;
    if (HOME)
        return HOME;
    if (USERPROFILE)
        return USERPROFILE;
    if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
    const homeDirCacheKey = getHomeDirCacheKey();
    if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = homedir();
    return homeDirCache[homeDirCacheKey];
};

const ENV_PROFILE = "AWS_PROFILE";
const DEFAULT_PROFILE = "default";
const getProfileName = (init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;

const getSSOTokenFilepath = (id) => {
    const hasher = createHash("sha1");
    const cacheName = hasher.update(id).digest("hex");
    return join(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
};

const { readFile: readFile$1 } = promises;
const getSSOTokenFromFile = async (id) => {
    const ssoTokenFilepath = getSSOTokenFilepath(id);
    const ssoTokenText = await readFile$1(ssoTokenFilepath, "utf8");
    return JSON.parse(ssoTokenText);
};

const getConfigData = (data) => Object.entries(data)
    .filter(([key]) => {
    const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
    if (indexOfSeparator === -1) {
        return false;
    }
    return Object.values(IniSectionType).includes(key.substring(0, indexOfSeparator));
})
    .reduce((acc, [key, value]) => {
    const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
    const updatedKey = key.substring(0, indexOfSeparator) === IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
    acc[updatedKey] = value;
    return acc;
}, {
    ...(data.default && { default: data.default }),
});

const ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
const getConfigFilepath = () => process.env[ENV_CONFIG_PATH] || join(getHomeDir(), ".aws", "config");

const ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
const getCredentialsFilepath = () => process.env[ENV_CREDENTIALS_PATH] || join(getHomeDir(), ".aws", "credentials");

const prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
const profileNameBlockList = ["__proto__", "profile __proto__"];
const parseIni = (iniData) => {
    const map = {};
    let currentSection;
    let currentSubSection;
    for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
            currentSection = undefined;
            currentSubSection = undefined;
            const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
            const matches = prefixKeyRegex.exec(sectionName);
            if (matches) {
                const [, prefix, , name] = matches;
                if (Object.values(IniSectionType).includes(prefix)) {
                    currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
                }
            }
            else {
                currentSection = sectionName;
            }
            if (profileNameBlockList.includes(sectionName)) {
                throw new Error(`Found invalid profile name "${sectionName}"`);
            }
        }
        else if (currentSection) {
            const indexOfEqualsSign = trimmedLine.indexOf("=");
            if (![0, -1].includes(indexOfEqualsSign)) {
                const [name, value] = [
                    trimmedLine.substring(0, indexOfEqualsSign).trim(),
                    trimmedLine.substring(indexOfEqualsSign + 1).trim(),
                ];
                if (value === "") {
                    currentSubSection = name;
                }
                else {
                    if (currentSubSection && iniLine.trimStart() === iniLine) {
                        currentSubSection = undefined;
                    }
                    map[currentSection] = map[currentSection] || {};
                    const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
                    map[currentSection][key] = value;
                }
            }
        }
    }
    return map;
};

const { readFile } = promises;
const filePromisesHash = {};
const slurpFile = (path, options) => {
    if (!filePromisesHash[path] || options?.ignoreCache) {
        filePromisesHash[path] = readFile(path, "utf8");
    }
    return filePromisesHash[path];
};

const swallowError$1 = () => ({});
const CONFIG_PREFIX_SEPARATOR = ".";
const loadSharedConfigFiles = async (init = {}) => {
    const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
    const parsedFiles = await Promise.all([
        slurpFile(configFilepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni)
            .then(getConfigData)
            .catch(swallowError$1),
        slurpFile(filepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni)
            .catch(swallowError$1),
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
    };
};

const getSsoSessionData = (data) => Object.entries(data)
    .filter(([key]) => key.startsWith(IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR))
    .reduce((acc, [key, value]) => ({ ...acc, [key.split(CONFIG_PREFIX_SEPARATOR)[1]]: value }), {});

const swallowError = () => ({});
const loadSsoSessionData = async (init = {}) => slurpFile(init.configFilepath ?? getConfigFilepath())
    .then(parseIni)
    .then(getSsoSessionData)
    .catch(swallowError);

const mergeConfigFiles = (...files) => {
    const merged = {};
    for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
            if (merged[key] !== undefined) {
                Object.assign(merged[key], values);
            }
            else {
                merged[key] = values;
            }
        }
    }
    return merged;
};

const parseKnownFiles = async (init) => {
    const parsedFiles = await loadSharedConfigFiles(init);
    return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
};

const fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
    const profile = getProfileName(init);
    const { configFile, credentialsFile } = await loadSharedConfigFiles(init);
    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile = preferredFile === "config"
        ? { ...profileFromCredentials, ...profileFromConfig }
        : { ...profileFromConfig, ...profileFromCredentials };
    try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === undefined) {
            throw new Error();
        }
        return configValue;
    }
    catch (e) {
        throw new CredentialsProviderError(e.message || `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
    }
};

const isFunction = (func) => typeof func === "function";
const fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : fromStatic$1(defaultValue);

const loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => memoize(chain(fromEnv$1(environmentVariableSelector), fromSharedConfigFiles(configFileSelector, configuration), fromStatic(defaultValue)));

const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";
const getEndpointUrlConfig = (serviceId) => ({
    environmentVariableSelector: (env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
            return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    configFileSelector: (profile, config) => {
        if (config && profile.services) {
            const servicesSection = config[["services", profile.services].join(CONFIG_PREFIX_SEPARATOR)];
            if (servicesSection) {
                const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
                const endpointUrl = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(CONFIG_PREFIX_SEPARATOR)];
                if (endpointUrl)
                    return endpointUrl;
            }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    default: undefined,
});

const getEndpointFromConfig = async (serviceId) => loadConfig(getEndpointUrlConfig(serviceId))();

function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")) {
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            }
            else if (Array.isArray(query[key])) {
                query[key].push(value);
            }
            else {
                query[key] = [query[key], value];
            }
        }
    }
    return query;
}

const parseUrl = (url) => {
    if (typeof url === "string") {
        return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = parseQueryString(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};

const toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            return parseUrl(endpoint.url);
        }
        return endpoint;
    }
    return parseUrl(endpoint);
};

const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
    if (!clientConfig.endpoint) {
        const endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId || "");
        if (endpointFromConfig) {
            clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
        }
    }
    const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    return endpoint;
};
const resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
    const endpointParams = {};
    const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
    for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
    }
    return endpointParams;
};

const endpointMiddleware = ({ config, instructions, }) => {
    return (next, context) => async (args) => {
        const endpoint = await getEndpointFromInstructions(args.input, {
            getEndpointParameterInstructions() {
                return instructions;
            },
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
            context["signing_region"] = authScheme.signingRegion;
            context["signing_service"] = authScheme.signingName;
            const smithyContext = getSmithyContext(context);
            const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
            if (httpAuthOption) {
                httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
                    signing_region: authScheme.signingRegion,
                    signingRegion: authScheme.signingRegion,
                    signing_service: authScheme.signingName,
                    signingName: authScheme.signingName,
                    signingRegionSet: authScheme.signingRegionSet,
                }, authScheme.properties);
            }
        }
        return next({
            ...args,
        });
    };
};

const deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
    const { response } = await next(args);
    try {
        const parsed = await deserializer(response, options);
        return {
            response,
            output: parsed,
        };
    }
    catch (error) {
        Object.defineProperty(error, "$response", {
            value: response,
        });
        if (!("$metadata" in error)) {
            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
            error.message += "\n  " + hint;
        }
        throw error;
    }
};

const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const endpoint = context.endpointV2?.url && options.urlParser
        ? async () => options.urlParser(context.endpointV2.url)
        : options.endpoint;
    if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
    }
    const request = await serializer(args.input, { ...options, endpoint });
    return next({
        ...args,
        request,
    });
};

const deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
            commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
        },
    };
}

const endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: serializerMiddlewareOption.name,
};
const getEndpointPlugin = (config, instructions) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware({
            config,
            instructions,
        }), endpointMiddlewareOptions);
    },
});

const resolveEndpointConfig = (input) => {
    const tls = input.tls ?? true;
    const { endpoint } = input;
    const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider$1(endpoint)()) : undefined;
    const isCustomEndpoint = !!endpoint;
    return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: normalizeProvider$1(input.useDualstackEndpoint ?? false),
        useFipsEndpoint: normalizeProvider$1(input.useFipsEndpoint ?? false),
    };
};

var RETRY_MODES;
(function (RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
const DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

const THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
];
const TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
const TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
const NODEJS_TIMEOUT_ERROR_CODES$1 = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];

const isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 ||
    THROTTLING_ERROR_CODES.includes(error.name) ||
    error.$retryable?.throttling == true;
const isTransientError = (error) => TRANSIENT_ERROR_CODES.includes(error.name) ||
    NODEJS_TIMEOUT_ERROR_CODES$1.includes(error?.code || "") ||
    TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
const isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== undefined) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
            return true;
        }
        return false;
    }
    return false;
};

class DefaultRateLimiter {
    constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1000;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(amount) {
        if (!this.enabled) {
            return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
    }
    refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
    }
    updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if (isThrottlingError(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    }
    getPrecise(num) {
        return parseFloat(num.toFixed(8));
    }
}

const DEFAULT_RETRY_DELAY_BASE = 100;
const MAXIMUM_RETRY_DELAY = 20 * 1000;
const THROTTLING_RETRY_DELAY_BASE = 500;
const INITIAL_RETRY_TOKENS = 500;
const RETRY_COST = 5;
const TIMEOUT_RETRY_COST = 10;
const NO_RETRY_INCREMENT = 1;
const INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
const REQUEST_HEADER = "amz-sdk-request";

const getDefaultRetryBackoffStrategy = () => {
    let delayBase = DEFAULT_RETRY_DELAY_BASE;
    const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
    };
    const setDelayBase = (delay) => {
        delayBase = delay;
    };
    return {
        computeNextBackoffDelay,
        setDelayBase,
    };
};

const createDefaultRetryToken = ({ retryDelay, retryCount, retryCost, }) => {
    const getRetryCount = () => retryCount;
    const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
    const getRetryCost = () => retryCost;
    return {
        getRetryCount,
        getRetryDelay,
        getRetryCost,
    };
};

class StandardRetryStrategy {
    constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = RETRY_MODES.STANDARD;
        this.capacity = INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
    }
    async acquireInitialRetryToken(retryTokenScope) {
        return createDefaultRetryToken({
            retryDelay: DEFAULT_RETRY_DELAY_BASE,
            retryCount: 0,
        });
    }
    async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
            const errorType = errorInfo.errorType;
            this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
            const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
            const retryDelay = errorInfo.retryAfterHint
                ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType)
                : delayFromErrorType;
            const capacityCost = this.getCapacityCost(errorType);
            this.capacity -= capacityCost;
            return createDefaultRetryToken({
                retryDelay,
                retryCount: token.getRetryCount() + 1,
                retryCost: capacityCost,
            });
        }
        throw new Error("No retry token available");
    }
    recordSuccess(token) {
        this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
    }
    getCapacity() {
        return this.capacity;
    }
    async getMaxAttempts() {
        try {
            return await this.maxAttemptsProvider();
        }
        catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
            return DEFAULT_MAX_ATTEMPTS;
        }
    }
    shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return (attempts < maxAttempts &&
            this.capacity >= this.getCapacityCost(errorInfo.errorType) &&
            this.isRetryableError(errorInfo.errorType));
    }
    getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
    }
    isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
}

class AdaptiveRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = RETRY_MODES.ADAPTIVE;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
    }
    async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    }
    recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
    }
}

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate$1(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate$1(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function parse(uuid) {
  if (!validate$1(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL$1 = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35 (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL$1;
  return generateUUID;
}

function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto.createHash('md5').update(bytes).digest();
}

v35('v3', 0x30, md5);

function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return crypto.createHash('sha1').update(bytes).digest();
}

v35('v5', 0x50, sha1);

const asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};

const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
const CONFIG_MAX_ATTEMPTS = "max_attempts";
const NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    default: DEFAULT_MAX_ATTEMPTS,
};
const resolveRetryConfig = (input) => {
    const { retryStrategy } = input;
    const maxAttempts = normalizeProvider$1(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
    return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
            if (retryStrategy) {
                return retryStrategy;
            }
            const retryMode = await normalizeProvider$1(input.retryMode)();
            if (retryMode === RETRY_MODES.ADAPTIVE) {
                return new AdaptiveRetryStrategy(maxAttempts);
            }
            return new StandardRetryStrategy(maxAttempts);
        },
    };
};
const ENV_RETRY_MODE = "AWS_RETRY_MODE";
const CONFIG_RETRY_MODE = "retry_mode";
const NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
    default: DEFAULT_RETRY_MODE,
};

class NoOpLogger {
    trace() { }
    debug() { }
    info() { }
    warn() { }
    error() { }
}

const getAllAliases = (name, aliases) => {
    const _aliases = [];
    if (name) {
        _aliases.push(name);
    }
    if (aliases) {
        for (const alias of aliases) {
            _aliases.push(alias);
        }
    }
    return _aliases;
};
const getMiddlewareNameWithAliases = (name, aliases) => {
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
};
const constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            const aliases = getAllAliases(entry.name, entry.aliases);
            if (aliases.includes(toRemove)) {
                isRemoved = true;
                for (const alias of aliases) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                for (const alias of getAllAliases(entry.name, entry.aliases)) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    if (debug) {
                        return;
                    }
                    throw new Error(`${entry.toMiddleware} is not found when adding ` +
                        `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` +
                        `middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce((wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain;
    };
    const stack = {
        add: (middleware, options = {}) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = absoluteEntries[toOverrideIndex];
                        if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ` +
                                `${toOverride.priority} priority in ${toOverride.step} step cannot ` +
                                `be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ` +
                                `${entry.priority} priority in ${entry.step} step.`);
                        }
                        absoluteEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = relativeEntries[toOverrideIndex];
                        if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ` +
                                `${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` +
                                `by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} ` +
                                `"${entry.toMiddleware}" middleware.`);
                        }
                        relativeEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
            plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
                const { tags, name, aliases: _aliases } = entry;
                if (tags && tags.includes(toRemove)) {
                    const aliases = getAllAliases(name, _aliases);
                    for (const alias of aliases) {
                        entriesNameSet.delete(alias);
                    }
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from) => {
            const cloned = cloneTo(constructStack());
            cloned.use(from);
            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
            return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
            return getMiddlewareList(true).map((mw) => {
                const step = mw.step ??
                    mw.relation +
                        " " +
                        mw.toMiddleware;
                return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
            });
        },
        identifyOnResolve(toggle) {
            if (typeof toggle === "boolean")
                identifyOnResolve = toggle;
            return identifyOnResolve;
        },
        resolve: (handler, context) => {
            for (const middleware of getMiddlewareList()
                .map((entry) => entry.middleware)
                .reverse()) {
                handler = middleware(handler, context);
            }
            if (identifyOnResolve) {
                console.log(stack.identify());
            }
            return handler;
        },
    };
    return stack;
};
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};

class Client {
    constructor(config) {
        this.middlewareStack = constructStack();
        this.config = config;
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command)
                .then((result) => callback(null, result.output), (err) => callback(err))
                .catch(() => { });
        }
        else {
            return handler(command).then((result) => result.output);
        }
    }
    destroy() {
        if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
    }
}

const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
const fromBase64 = (input) => {
    if ((input.length * 3) % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
    }
    if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
    }
    const buffer = fromString(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
};

const toBase64 = (input) => fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");

function transformToString(payload, encoding = "utf-8") {
    if (encoding === "base64") {
        return toBase64(payload);
    }
    return toUtf8(payload);
}
function transformFromString(str, encoding) {
    if (encoding === "base64") {
        return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
    }
    return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}

class Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
            case "string":
                return transformFromString(source, encoding);
            default:
                throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
    }
    static mutate(source) {
        Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
        return source;
    }
    transformToString(encoding = "utf-8") {
        return transformToString(this, encoding);
    }
}

function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = escapeUri(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${escapeUri(value[i])}`);
            }
        }
        else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${escapeUri(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}

const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];

const getTransformedHeaders = (headers) => {
    const transformedHeaders = {};
    for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
    }
    return transformedHeaders;
};

const setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
    if (!timeoutInMs) {
        return;
    }
    const timeoutId = setTimeout(() => {
        request.destroy();
        reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
            name: "TimeoutError",
        }));
    }, timeoutInMs);
    request.on("socket", (socket) => {
        if (socket.connecting) {
            socket.on("connect", () => {
                clearTimeout(timeoutId);
            });
        }
        else {
            clearTimeout(timeoutId);
        }
    });
};

const setSocketKeepAlive = (request, { keepAlive, keepAliveMsecs }) => {
    if (keepAlive !== true) {
        return;
    }
    request.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
    });
};

const setSocketTimeout = (request, reject, timeoutInMs = 0) => {
    request.setTimeout(timeoutInMs, () => {
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
    });
};

const MIN_WAIT_TIME = 1000;
async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
    const headers = request.headers ?? {};
    const expect = headers["Expect"] || headers["expect"];
    let timeoutId = -1;
    let hasError = false;
    if (expect === "100-continue") {
        await Promise.race([
            new Promise((resolve) => {
                timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
            }),
            new Promise((resolve) => {
                httpRequest.on("continue", () => {
                    clearTimeout(timeoutId);
                    resolve();
                });
                httpRequest.on("error", () => {
                    hasError = true;
                    clearTimeout(timeoutId);
                    resolve();
                });
            }),
        ]);
    }
    if (!hasError) {
        writeBody(httpRequest, request.body);
    }
}
function writeBody(httpRequest, body) {
    if (body instanceof Readable) {
        body.pipe(httpRequest);
    }
    else if (body) {
        httpRequest.end(Buffer.from(body));
    }
    else {
        httpRequest.end();
    }
}

class NodeHttpHandler {
    static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
        }
        return new NodeHttpHandler(instanceOrOptions);
    }
    constructor(options) {
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((_options) => {
                    resolve(this.resolveDefaultConfig(_options));
                })
                    .catch(reject);
            }
            else {
                resolve(this.resolveDefaultConfig(options));
            }
        });
    }
    resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
            connectionTimeout,
            requestTimeout: requestTimeout ?? socketTimeout,
            httpAgent: httpAgent || new Agent({ keepAlive, maxSockets }),
            httpsAgent: httpsAgent || new Agent$1({ keepAlive, maxSockets }),
        };
    }
    destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
    }
    async handle(request$2, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        return new Promise((_resolve, _reject) => {
            let writeRequestBodyPromise = undefined;
            const resolve = async (arg) => {
                await writeRequestBodyPromise;
                _resolve(arg);
            };
            const reject = async (arg) => {
                await writeRequestBodyPromise;
                _reject(arg);
            };
            if (!this.config) {
                throw new Error("Node HTTP request handler config is not resolved");
            }
            if (abortSignal?.aborted) {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const isSSL = request$2.protocol === "https:";
            const queryString = buildQueryString(request$2.query || {});
            let auth = undefined;
            if (request$2.username != null || request$2.password != null) {
                const username = request$2.username ?? "";
                const password = request$2.password ?? "";
                auth = `${username}:${password}`;
            }
            let path = request$2.path;
            if (queryString) {
                path += `?${queryString}`;
            }
            if (request$2.fragment) {
                path += `#${request$2.fragment}`;
            }
            const nodeHttpsOptions = {
                headers: request$2.headers,
                host: request$2.hostname,
                method: request$2.method,
                path,
                port: request$2.port,
                agent: isSSL ? this.config.httpsAgent : this.config.httpAgent,
                auth,
            };
            const requestFunc = isSSL ? request : request$1;
            const req = requestFunc(nodeHttpsOptions, (res) => {
                const httpResponse = new HttpResponse({
                    statusCode: res.statusCode || -1,
                    reason: res.statusMessage,
                    headers: getTransformedHeaders(res.headers),
                    body: res,
                });
                resolve({ response: httpResponse });
            });
            req.on("error", (err) => {
                if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
                    reject(Object.assign(err, { name: "TimeoutError" }));
                }
                else {
                    reject(err);
                }
            });
            setConnectionTimeout(req, reject, this.config.connectionTimeout);
            setSocketTimeout(req, reject, this.config.requestTimeout);
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.abort();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            const httpAgent = nodeHttpsOptions.agent;
            if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
                setSocketKeepAlive(req, {
                    keepAlive: httpAgent.keepAlive,
                    keepAliveMsecs: httpAgent.keepAliveMsecs,
                });
            }
            writeRequestBodyPromise = writeRequestBody(req, request$2, this.config.requestTimeout).catch(_reject);
        });
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config) => {
            return {
                ...config,
                [key]: value,
            };
        });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
}

class Collector extends Writable {
    constructor() {
        super(...arguments);
        this.bufferedBytes = [];
    }
    _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
    }
}

const streamCollector = (stream) => new Promise((resolve, reject) => {
    const collector = new Collector();
    stream.pipe(collector);
    stream.on("error", (err) => {
        collector.end();
        reject(err);
    });
    collector.on("error", reject);
    collector.on("finish", function () {
        const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
        resolve(bytes);
    });
});

const collectBody = async (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Uint8ArrayBlobAdapter.mutate(streamBody);
    }
    if (!streamBody) {
        return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return Uint8ArrayBlobAdapter.mutate(await fromContext);
};

class Command {
    constructor() {
        this.middlewareStack = constructStack();
    }
    static classBuilder() {
        return new ClassBuilder();
    }
    resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor, }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
            this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog,
            outputFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
                ...smithyContext,
            },
            ...additionalContext,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
}
class ClassBuilder {
    constructor() {
        this._init = () => { };
        this._ep = {};
        this._middlewareFn = () => [];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_) => _;
        this._outputFilterSensitiveLog = (_) => _;
        this._serializer = null;
        this._deserializer = null;
    }
    init(cb) {
        this._init = cb;
    }
    ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
    }
    m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
    }
    s(service, operation, smithyContext = {}) {
        this._smithyContext = {
            service,
            operation,
            ...smithyContext,
        };
        return this;
    }
    c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
    }
    n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
    }
    f(inputFilter = (_) => _, outputFilter = (_) => _) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
    }
    ser(serializer) {
        this._serializer = serializer;
        return this;
    }
    de(deserializer) {
        this._deserializer = deserializer;
        return this;
    }
    build() {
        const closure = this;
        let CommandRef;
        return (CommandRef = class extends Command {
            static getEndpointParameterInstructions() {
                return closure._ep;
            }
            constructor(input) {
                super();
                this.input = input;
                this.serialize = closure._serializer;
                this.deserialize = closure._deserializer;
                closure._init(this);
            }
            resolveMiddleware(stack, configuration, options) {
                return this.resolveMiddlewareWithContext(stack, configuration, options, {
                    CommandCtor: CommandRef,
                    middlewareFn: closure._middlewareFn,
                    clientName: closure._clientName,
                    commandName: closure._commandName,
                    inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
                    outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
                    smithyContext: closure._smithyContext,
                    additionalContext: closure._additionalContext,
                });
            }
        });
    }
}

const SENSITIVE_STRING = "***SensitiveInformation***";

const createAggregatedClient = (commands, Client) => {
    for (const command of Object.keys(commands)) {
        const CommandCtor = commands[command];
        const methodImpl = async function (args, optionsOrCb, cb) {
            const command = new CommandCtor(args);
            if (typeof optionsOrCb === "function") {
                this.send(command, optionsOrCb);
            }
            else if (typeof cb === "function") {
                if (typeof optionsOrCb !== "object")
                    throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
                this.send(command, optionsOrCb || {}, cb);
            }
            else {
                return this.send(command, optionsOrCb);
            }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client.prototype[methodName] = methodImpl;
    }
};

const expectBoolean = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        if (value === 0 || value === 1) {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
            return false;
        }
        if (value === 1) {
            return true;
        }
    }
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
            return false;
        }
        if (lower === "true") {
            return true;
        }
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
};
const expectNumber = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
                logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
        }
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
};
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value) => {
    const expected = expectNumber(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
    }
    return expected;
};
const expectLong = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
};
const expectInt32 = (value) => expectSizedInt(value, 32);
const expectShort = (value) => expectSizedInt(value, 16);
const expectByte = (value) => expectSizedInt(value, 8);
const expectSizedInt = (value, size) => {
    const expected = expectLong(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
};
const castInt = (value, size) => {
    switch (size) {
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location) => {
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
const expectObject = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    const receivedType = Array.isArray(value) ? "array" : typeof value;
    throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
};
const expectString = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
    }
    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
};
const expectUnion = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = expectObject(value);
    const setKeys = Object.entries(asObject)
        .filter(([, v]) => v != null)
        .map(([k]) => k);
    if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
    }
    if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
};
const strictParseFloat32 = (value) => {
    if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
    }
    return expectFloat32(value);
};
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
};
const limitedParseDouble = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectNumber(value);
};
const limitedParseFloat32 = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectFloat32(value);
};
const parseFloatString = (value) => {
    switch (value) {
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error(`Unable to parse float value: ${value}`);
    }
};
const strictParseInt32 = (value) => {
    if (typeof value === "string") {
        return expectInt32(parseNumber(value));
    }
    return expectInt32(value);
};
const strictParseShort = (value) => {
    if (typeof value === "string") {
        return expectShort(parseNumber(value));
    }
    return expectShort(value);
};
const strictParseByte = (value) => {
    if (typeof value === "string") {
        return expectByte(parseNumber(value));
    }
    return expectByte(value);
};
const stackTraceWarning = (message) => {
    return String(new TypeError(message).stack || message)
        .split("\n")
        .slice(0, 5)
        .filter((s) => !s.includes("stackTraceWarning"))
        .join("\n");
};
const logger = {
    warn: console.warn,
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const parseRfc3339DateTimeWithOffset = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339_WITH_OFFSET.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
    const year = strictParseShort(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
    }
    return date;
};
const buildDate = (year, month, day, time) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const validateDayOfMonth = (year, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
    }
};
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper) => {
    const dateVal = strictParseByte(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
};
const parseMilliseconds = (value) => {
    if (value === null || value === undefined) {
        return 0;
    }
    return strictParseFloat32("0." + value) * 1000;
};
const parseOffsetToMilliseconds = (value) => {
    const directionStr = value[0];
    let direction = 1;
    if (directionStr == "+") {
        direction = 1;
    }
    else if (directionStr == "-") {
        direction = -1;
    }
    else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
    }
    const hour = Number(value.substring(1, 3));
    const minute = Number(value.substring(4, 6));
    return direction * (hour * 60 + minute) * 60 * 1000;
};
const stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};

class ServiceException extends Error {
    constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
}
const decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions)
        .filter(([, v]) => v !== undefined)
        .forEach(([k, v]) => {
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};

const throwDefaultError$4 = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata$4(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata,
    });
    throw decorateServiceException(response, parsedBody);
};
const withBaseException = (ExceptionCtor) => {
    return ({ output, parsedBody, errorCode }) => {
        throwDefaultError$4({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
    };
};
const deserializeMetadata$4 = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});

const loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
        case "standard":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100,
            };
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 30000,
            };
        default:
            return {};
    }
};

let warningEmitted$1 = false;
const emitWarningIfUnsupportedVersion$1 = (version) => {
    if (version && !warningEmitted$1 && parseInt(version.substring(1, version.indexOf("."))) < 14) {
        warningEmitted$1 = true;
    }
};

const getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    for (const id in AlgorithmId) {
        const algorithmId = AlgorithmId[id];
        if (runtimeConfig[algorithmId] === undefined) {
            continue;
        }
        checksumAlgorithms.push({
            algorithmId: () => algorithmId,
            checksumConstructor: () => runtimeConfig[algorithmId],
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return this._checksumAlgorithms;
        },
    };
};
const resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};

const getRetryConfiguration = (runtimeConfig) => {
    let _retryStrategy = runtimeConfig.retryStrategy;
    return {
        setRetryStrategy(retryStrategy) {
            _retryStrategy = retryStrategy;
        },
        retryStrategy() {
            return _retryStrategy;
        },
    };
};
const resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
};

const getDefaultExtensionConfiguration = (runtimeConfig) => {
    return {
        ...getChecksumConfiguration(runtimeConfig),
        ...getRetryConfiguration(runtimeConfig),
    };
};
const resolveDefaultRuntimeConfig = (config) => {
    return {
        ...resolveChecksumRuntimeConfig(config),
        ...resolveRetryRuntimeConfig(config),
    };
};

function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}

const getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};

const StringWrapper = function () {
    const Class = Object.getPrototypeOf(this).constructor;
    const Constructor = Function.bind.apply(String, [null, ...arguments]);
    const instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Object.setPrototypeOf(StringWrapper, String);

function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
    }
    else {
        target = arg0;
        if (typeof arg1 === "function") {
            filter = arg1;
            instructions = arg2;
            return mapWithFilter(target, filter, instructions);
        }
        else {
            instructions = arg1;
        }
    }
    for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
            target[key] = instructions[key];
            continue;
        }
        applyInstruction(target, null, instructions, key);
    }
    return target;
}
const take = (source, instructions) => {
    const out = {};
    for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
    }
    return out;
};
const mapWithFilter = (target, filter, instructions) => {
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
            _instructions[key] = value;
        }
        else {
            if (typeof value === "function") {
                _instructions[key] = [filter, value()];
            }
            else {
                _instructions[key] = [filter, value];
            }
        }
        return _instructions;
    }, {}));
};
const applyInstruction = (target, source, instructions, targetKey) => {
    if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
            instruction = [, instruction];
        }
        const [filter = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if ((typeof filter === "function" && filter(source[sourceKey])) || (typeof filter !== "function" && !!filter)) {
            target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
    }
    let [filter, value] = instructions[targetKey];
    if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === undefined && (_value = value()) != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed) {
            target[targetKey] = _value;
        }
        else if (customFilterPassed) {
            target[targetKey] = value();
        }
    }
    else {
        const defaultFilterPassed = filter === undefined && value != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed || customFilterPassed) {
            target[targetKey] = value;
        }
    }
};
const nonNullish = (_) => _ != null;
const pass = (_) => _;

const resolvedPath = (resolvedPath, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
    if (input != null && input[memberName] !== undefined) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath = resolvedPath.replace(uriLabel, isGreedyLabel
            ? labelValue
                .split("/")
                .map((segment) => extendedEncodeURIComponent(segment))
                .join("/")
            : extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
    }
    return resolvedPath;
};

const serializeFloat = (value) => {
    if (value !== value) {
        return "NaN";
    }
    switch (value) {
        case Infinity:
            return "Infinity";
        case -Infinity:
            return "-Infinity";
        default:
            return value;
    }
};

const _json = (obj) => {
    if (obj == null) {
        return {};
    }
    if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(_json);
    }
    if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
            if (obj[key] == null) {
                continue;
            }
            target[key] = _json(obj[key]);
        }
        return target;
    }
    return obj;
};

const isStreamingPayload = (request) => request?.body instanceof Readable ||
    (typeof ReadableStream !== "undefined" && request?.body instanceof ReadableStream);

const retryMiddleware = (options) => (next, context) => async (args) => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        const isRequest = HttpRequest.isInstance(request);
        if (isRequest) {
            request.headers[INVOCATION_ID_HEADER] = v4();
        }
        while (true) {
            try {
                if (isRequest) {
                    request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                const { response, output } = await next(args);
                retryStrategy.recordSuccess(retryToken);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalRetryDelay;
                return { response, output };
            }
            catch (e) {
                const retryErrorInfo = getRetryErrorInfo(e);
                lastError = asSdkError(e);
                if (isRequest && isStreamingPayload(request)) {
                    (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
                    throw lastError;
                }
                try {
                    retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
                }
                catch (refreshError) {
                    if (!lastError.$metadata) {
                        lastError.$metadata = {};
                    }
                    lastError.$metadata.attempts = attempts + 1;
                    lastError.$metadata.totalRetryDelay = totalRetryDelay;
                    throw lastError;
                }
                attempts = retryToken.getRetryCount();
                const delay = retryToken.getRetryDelay();
                totalRetryDelay += delay;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }
    else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
            context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
    }
};
const isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" &&
    typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" &&
    typeof retryStrategy.recordSuccess !== "undefined";
const getRetryErrorInfo = (error) => {
    const errorInfo = {
        errorType: getRetryErrorType(error),
    };
    const retryAfterHint = getRetryAfterHint(error.$response);
    if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
    }
    return errorInfo;
};
const getRetryErrorType = (error) => {
    if (isThrottlingError(error))
        return "THROTTLING";
    if (isTransientError(error))
        return "TRANSIENT";
    if (isServerError(error))
        return "SERVER_ERROR";
    return "CLIENT_ERROR";
};
const retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
const getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    },
});
const getRetryAfterHint = (response) => {
    if (!HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1000);
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate;
};

const resolveClientEndpointParameters$3 = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "rds-data",
    };
};
const commonParams$2 = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

var name$2 = "@aws-sdk/client-rds-data";
var description$2 = "AWS SDK for JavaScript Rds Data Client for Node.js, Browser and React Native";
var version$2 = "3.490.0";
var scripts$2 = {
	build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
	"build:cjs": "tsc -p tsconfig.cjs.json",
	"build:es": "tsc -p tsconfig.es.json",
	"build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
	"build:types": "tsc -p tsconfig.types.json",
	"build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
	clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
	"extract:docs": "api-extractor run --local",
	"generate:client": "node ../../scripts/generate-clients/single-service --solo rds-data"
};
var main$2 = "./dist-cjs/index.js";
var types$2 = "./dist-types/index.d.ts";
var module$2 = "./dist-es/index.js";
var sideEffects$2 = false;
var dependencies$2 = {
	"@aws-crypto/sha256-browser": "3.0.0",
	"@aws-crypto/sha256-js": "3.0.0",
	"@aws-sdk/client-sts": "3.490.0",
	"@aws-sdk/core": "3.490.0",
	"@aws-sdk/credential-provider-node": "3.490.0",
	"@aws-sdk/middleware-host-header": "3.489.0",
	"@aws-sdk/middleware-logger": "3.489.0",
	"@aws-sdk/middleware-recursion-detection": "3.489.0",
	"@aws-sdk/middleware-signing": "3.489.0",
	"@aws-sdk/middleware-user-agent": "3.489.0",
	"@aws-sdk/region-config-resolver": "3.489.0",
	"@aws-sdk/types": "3.489.0",
	"@aws-sdk/util-endpoints": "3.489.0",
	"@aws-sdk/util-user-agent-browser": "3.489.0",
	"@aws-sdk/util-user-agent-node": "3.489.0",
	"@smithy/config-resolver": "^2.0.23",
	"@smithy/core": "^1.2.2",
	"@smithy/fetch-http-handler": "^2.3.2",
	"@smithy/hash-node": "^2.0.18",
	"@smithy/invalid-dependency": "^2.0.16",
	"@smithy/middleware-content-length": "^2.0.18",
	"@smithy/middleware-endpoint": "^2.3.0",
	"@smithy/middleware-retry": "^2.0.26",
	"@smithy/middleware-serde": "^2.0.16",
	"@smithy/middleware-stack": "^2.0.10",
	"@smithy/node-config-provider": "^2.1.9",
	"@smithy/node-http-handler": "^2.2.2",
	"@smithy/protocol-http": "^3.0.12",
	"@smithy/smithy-client": "^2.2.1",
	"@smithy/types": "^2.8.0",
	"@smithy/url-parser": "^2.0.16",
	"@smithy/util-base64": "^2.0.1",
	"@smithy/util-body-length-browser": "^2.0.1",
	"@smithy/util-body-length-node": "^2.1.0",
	"@smithy/util-defaults-mode-browser": "^2.0.24",
	"@smithy/util-defaults-mode-node": "^2.0.32",
	"@smithy/util-endpoints": "^1.0.8",
	"@smithy/util-retry": "^2.0.9",
	"@smithy/util-utf8": "^2.0.2",
	tslib: "^2.5.0"
};
var devDependencies$2 = {
	"@smithy/service-client-documentation-generator": "^2.0.0",
	"@tsconfig/node14": "1.0.3",
	"@types/node": "^14.14.31",
	concurrently: "7.0.0",
	"downlevel-dts": "0.10.1",
	rimraf: "3.0.2",
	typescript: "~4.9.5"
};
var engines$2 = {
	node: ">=14.0.0"
};
var typesVersions$2 = {
	"<4.0": {
		"dist-types/*": [
			"dist-types/ts3.4/*"
		]
	}
};
var files$2 = [
	"dist-*/**"
];
var author$2 = {
	name: "AWS SDK for JavaScript Team",
	url: "https://aws.amazon.com/javascript/"
};
var license$2 = "Apache-2.0";
var browser$2 = {
	"./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
};
var homepage$2 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-rds-data";
var repository$2 = {
	type: "git",
	url: "https://github.com/aws/aws-sdk-js-v3.git",
	directory: "clients/client-rds-data"
};
var packageInfo$2 = {
	name: name$2,
	description: description$2,
	version: version$2,
	scripts: scripts$2,
	main: main$2,
	types: types$2,
	module: module$2,
	sideEffects: sideEffects$2,
	dependencies: dependencies$2,
	devDependencies: devDependencies$2,
	engines: engines$2,
	typesVersions: typesVersions$2,
	files: files$2,
	author: author$2,
	license: license$2,
	browser: browser$2,
	"react-native": {
	"./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
},
	homepage: homepage$2,
	repository: repository$2
};

function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map = new Map();
    for (const scheme of httpAuthSchemes) {
        map.set(scheme.schemeId, scheme);
    }
    return map;
}
const httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
    const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
    const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
    const smithyContext = getSmithyContext(context);
    const failureReasons = [];
    for (const option of options) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
            continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
            continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
            httpAuthOption: option,
            identity: await identityProvider(option.identityProperties),
            signer: scheme.signer,
        };
        break;
    }
    if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
    }
    return next(args);
};

const httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: endpointMiddlewareOptions.name,
};
const getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
    },
});

({
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: serializerMiddlewareOption.name,
});

const defaultErrorHandler = (signingProperties) => (error) => {
    throw error;
};
const defaultSuccessHandler = (httpResponse, signingProperties) => { };
const httpSigningMiddleware = (config) => (next, context) => async (args) => {
    if (!HttpRequest.isInstance(args.request)) {
        return next(args);
    }
    const smithyContext = getSmithyContext(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer, } = scheme;
    const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties),
    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
};

const httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: true,
    relation: "after",
    toMiddleware: retryMiddlewareOptions.name,
};
const getHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(), httpSigningMiddlewareOptions);
    },
});

class DefaultIdentityProviderConfig {
    constructor(config) {
        this.authSchemes = new Map();
        for (const [key, value] of Object.entries(config)) {
            if (value !== undefined) {
                this.authSchemes.set(key, value);
            }
        }
    }
    getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
    }
}

class NoAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
    }
}

const createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
const EXPIRATION_MS = 300000;
const isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
const doesIdentityRequireRefresh = (identity) => identity.expiration !== undefined;
const memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
    if (provider === undefined) {
        return undefined;
    }
    const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async (options) => {
        if (!pending) {
            pending = normalizedProvider(options);
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider(options);
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
        }
        if (isConstant) {
            return resolved;
        }
        if (!requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider(options);
            return resolved;
        }
        return resolved;
    };
};

const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};

function requestBuilder(input, context) {
    return new RequestBuilder(input, context);
}
class RequestBuilder {
    constructor(input, context) {
        this.input = input;
        this.context = context;
        this.query = {};
        this.method = "";
        this.headers = {};
        this.path = "";
        this.body = null;
        this.hostname = "";
        this.resolvePathStack = [];
    }
    async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
            resolvePath(this.path);
        }
        return new HttpRequest({
            protocol,
            hostname: this.hostname || hostname,
            port,
            method: this.method,
            path: this.path,
            query: this.query,
            body: this.body,
            headers: this.headers,
        });
    }
    hn(hostname) {
        this.hostname = hostname;
        return this;
    }
    bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
            this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
    }
    p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
            this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
    }
    h(headers) {
        this.headers = headers;
        return this;
    }
    q(query) {
        this.query = query;
        return this;
    }
    b(body) {
        this.body = body;
        return this;
    }
    m(method) {
        this.method = method;
        return this;
    }
}

let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 14.x on May 1, 2024.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to an active Node.js LTS version.

More information can be found at: https://a.co/dzr2AJd`);
    }
};

const getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;

const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

const isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 300000;

const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};

const throwSigningPropertyError = (name, property) => {
    if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
    }
    return property;
};
const validateSigningProperties = async (signingProperties) => {
    const context = throwSigningPropertyError("context", signingProperties.context);
    const config = throwSigningPropertyError("config", signingProperties.config);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const signerFunction = throwSigningPropertyError("signer", config.signer);
    const signer = await signerFunction(authScheme);
    const signingRegion = signingProperties?.signingRegion;
    const signingName = signingProperties?.signingName;
    return {
        config,
        signer,
        signingRegion,
        signingName,
    };
};
class AwsSdkSigV4Signer {
    async sign(httpRequest, identity, signingProperties) {
        if (!HttpRequest.isInstance(httpRequest)) {
            throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);
        const signedRequest = await signer.sign(httpRequest, {
            signingDate: getSkewCorrectedDate(config.systemClockOffset),
            signingRegion: signingRegion,
            signingService: signingName,
        });
        return signedRequest;
    }
    errorHandler(signingProperties) {
        return (error) => {
            const serverTime = error.ServerTime ?? getDateHeader(error.$response);
            if (serverTime) {
                const config = throwSigningPropertyError("config", signingProperties.config);
                config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
            }
            throw error;
        };
    }
    successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader(httpResponse);
        if (dateHeader) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
        }
    }
}

const resolveAwsSdkSigV4Config = (config) => {
    let normalizedCreds;
    if (config.credentials) {
        normalizedCreds = memoizeIdentityProvider(config.credentials, isIdentityExpired, doesIdentityRequireRefresh);
    }
    if (!normalizedCreds) {
        if (config.credentialDefaultProvider) {
            normalizedCreds = normalizeProvider(config.credentialDefaultProvider(config));
        }
        else {
            normalizedCreds = async () => { throw new Error("`credentials` is missing"); };
        }
    }
    const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256, } = config;
    let signer;
    if (config.signer) {
        signer = normalizeProvider(config.signer);
    }
    else if (config.regionInfoProvider) {
        signer = () => normalizeProvider(config.region)()
            .then(async (region) => [
            (await config.regionInfoProvider(region, {
                useFipsEndpoint: await config.useFipsEndpoint(),
                useDualstackEndpoint: await config.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            config.signingRegion = config.signingRegion || signingRegion || region;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
                ...config,
                credentials: normalizedCreds,
                region: config.signingRegion,
                service: config.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = config.signerConstructor || SignatureV4;
            return new SignerCtor(params);
        });
    }
    else {
        signer = async (authScheme) => {
            authScheme = Object.assign({}, {
                name: "sigv4",
                signingName: config.signingName || config.defaultSigningName,
                signingRegion: await normalizeProvider(config.region)(),
                properties: {},
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            config.signingRegion = config.signingRegion || signingRegion;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
                ...config,
                credentials: normalizedCreds,
                region: config.signingRegion,
                service: config.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = config.signerConstructor || SignatureV4;
            return new SignerCtor(params);
        };
    }
    return {
        ...config,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};

const awsExpectUnion = (value) => {
    if (value == null) {
        return undefined;
    }
    if (typeof value === "object" && "__type" in value) {
        delete value.__type;
    }
    return expectUnion(value);
};

const defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: getSmithyContext(context).operation,
        region: (await normalizeProvider$1(config.region)()) ||
            (() => {
                throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
    };
};
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "sts",
            region: authParameters.region,
        },
        propertiesExtractor: (config, context) => ({
            signingProperties: {
                config,
                context,
            },
        }),
    };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#noAuth",
    };
}
const defaultSTSHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        case "AssumeRoleWithSAML": {
            options.push(createSmithyApiNoAuthHttpAuthOption());
            break;
        }
        case "AssumeRoleWithWebIdentity": {
            options.push(createSmithyApiNoAuthHttpAuthOption());
            break;
        }
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
const resolveStsAuthConfig = (input) => ({
    ...input,
    stsClientCtor: STSClient,
});
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = resolveStsAuthConfig(config);
    const config_1 = resolveAwsSdkSigV4Config(config_0);
    return {
        ...config_1,
    };
};

const resolveClientEndpointParameters$2 = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts",
    };
};
const commonParams$1 = {
    UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

var name$1 = "@aws-sdk/client-sts";
var description$1 = "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native";
var version$1 = "3.490.0";
var scripts$1 = {
	build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
	"build:cjs": "tsc -p tsconfig.cjs.json",
	"build:es": "tsc -p tsconfig.es.json",
	"build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
	"build:types": "tsc -p tsconfig.types.json",
	"build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
	clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
	"extract:docs": "api-extractor run --local",
	"generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
	test: "yarn test:unit",
	"test:unit": "jest"
};
var main$1 = "./dist-cjs/index.js";
var types$1 = "./dist-types/index.d.ts";
var module$1 = "./dist-es/index.js";
var sideEffects$1 = false;
var dependencies$1 = {
	"@aws-crypto/sha256-browser": "3.0.0",
	"@aws-crypto/sha256-js": "3.0.0",
	"@aws-sdk/core": "3.490.0",
	"@aws-sdk/credential-provider-node": "3.490.0",
	"@aws-sdk/middleware-host-header": "3.489.0",
	"@aws-sdk/middleware-logger": "3.489.0",
	"@aws-sdk/middleware-recursion-detection": "3.489.0",
	"@aws-sdk/middleware-user-agent": "3.489.0",
	"@aws-sdk/region-config-resolver": "3.489.0",
	"@aws-sdk/types": "3.489.0",
	"@aws-sdk/util-endpoints": "3.489.0",
	"@aws-sdk/util-user-agent-browser": "3.489.0",
	"@aws-sdk/util-user-agent-node": "3.489.0",
	"@smithy/config-resolver": "^2.0.23",
	"@smithy/core": "^1.2.2",
	"@smithy/fetch-http-handler": "^2.3.2",
	"@smithy/hash-node": "^2.0.18",
	"@smithy/invalid-dependency": "^2.0.16",
	"@smithy/middleware-content-length": "^2.0.18",
	"@smithy/middleware-endpoint": "^2.3.0",
	"@smithy/middleware-retry": "^2.0.26",
	"@smithy/middleware-serde": "^2.0.16",
	"@smithy/middleware-stack": "^2.0.10",
	"@smithy/node-config-provider": "^2.1.9",
	"@smithy/node-http-handler": "^2.2.2",
	"@smithy/protocol-http": "^3.0.12",
	"@smithy/smithy-client": "^2.2.1",
	"@smithy/types": "^2.8.0",
	"@smithy/url-parser": "^2.0.16",
	"@smithy/util-base64": "^2.0.1",
	"@smithy/util-body-length-browser": "^2.0.1",
	"@smithy/util-body-length-node": "^2.1.0",
	"@smithy/util-defaults-mode-browser": "^2.0.24",
	"@smithy/util-defaults-mode-node": "^2.0.32",
	"@smithy/util-endpoints": "^1.0.8",
	"@smithy/util-middleware": "^2.0.9",
	"@smithy/util-retry": "^2.0.9",
	"@smithy/util-utf8": "^2.0.2",
	"fast-xml-parser": "4.2.5",
	tslib: "^2.5.0"
};
var devDependencies$1 = {
	"@smithy/service-client-documentation-generator": "^2.0.0",
	"@tsconfig/node14": "1.0.3",
	"@types/node": "^14.14.31",
	concurrently: "7.0.0",
	"downlevel-dts": "0.10.1",
	rimraf: "3.0.2",
	typescript: "~4.9.5"
};
var engines$1 = {
	node: ">=14.0.0"
};
var typesVersions$1 = {
	"<4.0": {
		"dist-types/*": [
			"dist-types/ts3.4/*"
		]
	}
};
var files$1 = [
	"dist-*/**"
];
var author$1 = {
	name: "AWS SDK for JavaScript Team",
	url: "https://aws.amazon.com/javascript/"
};
var license$1 = "Apache-2.0";
var browser$1 = {
	"./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
};
var homepage$1 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts";
var repository$1 = {
	type: "git",
	url: "https://github.com/aws/aws-sdk-js-v3.git",
	directory: "clients/client-sts"
};
var packageInfo$1 = {
	name: name$1,
	description: description$1,
	version: version$1,
	scripts: scripts$1,
	main: main$1,
	types: types$1,
	module: module$1,
	sideEffects: sideEffects$1,
	dependencies: dependencies$1,
	devDependencies: devDependencies$1,
	engines: engines$1,
	typesVersions: typesVersions$1,
	files: files$1,
	author: author$1,
	license: license$1,
	browser: browser$1,
	"react-native": {
	"./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
},
	homepage: homepage$1,
	repository: repository$1
};

class STSServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, STSServiceException.prototype);
    }
}

let ExpiredTokenException$1 = class ExpiredTokenException extends STSServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    }
};
class MalformedPolicyDocumentException extends STSServiceException {
    constructor(opts) {
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
}
class PackedPolicyTooLargeException extends STSServiceException {
    constructor(opts) {
        super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...opts,
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
    }
}
class RegionDisabledException extends STSServiceException {
    constructor(opts) {
        super({
            name: "RegionDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RegionDisabledException.prototype);
    }
}
class IDPRejectedClaimException extends STSServiceException {
    constructor(opts) {
        super({
            name: "IDPRejectedClaimException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
    }
}
class InvalidIdentityTokenException extends STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
    }
}
class IDPCommunicationErrorException extends STSServiceException {
    constructor(opts) {
        super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
    }
}
class InvalidAuthorizationMessageException extends STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidAuthorizationMessageException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidAuthorizationMessageException.prototype);
    }
}
const CredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }),
});
const AssumeRoleResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const AssumeRoleWithSAMLRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SAMLAssertion && { SAMLAssertion: SENSITIVE_STRING }),
});
const AssumeRoleWithSAMLResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.WebIdentityToken && { WebIdentityToken: SENSITIVE_STRING }),
});
const AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const GetFederationTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const GetSessionTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});

var util = createCommonjsModule(function (module, exports) {

const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*';
const regexName = new RegExp('^' + nameRegexp + '$');

const getAllMatches = function(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
};

const isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === 'undefined');
};

exports.isExist = function(v) {
  return typeof v !== 'undefined';
};

exports.isEmptyObject = function(obj) {
  return Object.keys(obj).length === 0;
};

/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */
exports.merge = function(target, a, arrayMode) {
  if (a) {
    const keys = Object.keys(a); // will return an array of own properties
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      if (arrayMode === 'strict') {
        target[keys[i]] = [ a[keys[i]] ];
      } else {
        target[keys[i]] = a[keys[i]];
      }
    }
  }
};
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */

exports.getValue = function(v) {
  if (exports.isExist(v)) {
    return v;
  } else {
    return '';
  }
};

// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};

exports.isName = isName;
exports.getAllMatches = getAllMatches;
exports.nameRegexp = nameRegexp;
});
util.isExist;
util.isEmptyObject;
util.merge;
util.getValue;
util.isName;
util.getAllMatches;
util.nameRegexp;

const defaultOptions$2 = {
  allowBooleanAttributes: false, //A tag can have attributes without any value
  unpairedTags: []
};

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
var validate = function (xmlData, options) {
  options = Object.assign({}, defaultOptions$2, options);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  const tags = [];
  let tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  let reachedRoot = false;

  if (xmlData[0] === '\ufeff') {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }
  
  for (let i = 0; i < xmlData.length; i++) {

    if (xmlData[i] === '<' && xmlData[i+1] === '?') {
      i+=2;
      i = readPI(xmlData,i);
      if (i.err) return i;
    }else if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value
      let tagStartPos = i;
      i++;
      
      if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        let tagName = '';
        for (; i < xmlData.length &&
          xmlData[i] !== '>' &&
          xmlData[i] !== ' ' &&
          xmlData[i] !== '\t' &&
          xmlData[i] !== '\n' &&
          xmlData[i] !== '\r'; i++
        ) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '"+tagName+"' is an invalid name.";
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }

        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', "Attributes for '"+tagName+"' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;

        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject('InvalidTag',
                "Expected closing tag '"+otg.tagName+"' (opened in line "+openPos.line+", col "+openPos.col+") instead of closing tag '"+tagName+"'.",
                getLineNumberForPosition(xmlData, tagStartPos));
            }

            //when there are no more tags, we reached the root level.
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }

          //if the root level has been reached before ...
          if (reachedRoot === true) {
            return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else if(options.unpairedTags.indexOf(tagName) !== -1); else {
            tags.push({tagName, tagStartPos});
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i+1] === '?') {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else {
              break;
            }
          } else if (xmlData[i] === '&') {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          }else {
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject('InvalidXml', "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if ( isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject('InvalidChar', "char '"+xmlData[i]+"' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }

  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  }else if (tags.length == 1) {
      return getErrorObject('InvalidTag', "Unclosed tag '"+tags[0].tagName+"'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  }else if (tags.length > 0) {
      return getErrorObject('InvalidXml', "Invalid '"+
          JSON.stringify(tags.map(t => t.tagName), null, 4).replace(/\r?\n/g, '')+
          "' found.", {line: 1, col: 1});
  }

  return true;
};

function isWhiteSpace(char){
  return char === ' ' || char === '\t' || char === '\n'  || char === '\r';
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}

function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (
    xmlData.length > i + 8 &&
    xmlData[i + 1] === 'D' &&
    xmlData[i + 2] === 'O' &&
    xmlData[i + 3] === 'C' &&
    xmlData[i + 4] === 'T' &&
    xmlData[i + 5] === 'Y' &&
    xmlData[i + 6] === 'P' &&
    xmlData[i + 7] === 'E'
  ) {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (
    xmlData.length > i + 9 &&
    xmlData[i + 1] === '[' &&
    xmlData[i + 2] === 'C' &&
    xmlData[i + 3] === 'D' &&
    xmlData[i + 4] === 'A' &&
    xmlData[i + 5] === 'T' &&
    xmlData[i + 6] === 'A' &&
    xmlData[i + 7] === '['
  ) {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }

  return i;
}

const doubleQuote = '"';
const singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  let attrStr = '';
  let startChar = '';
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) ; else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }

  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}

/**
 * Select all the attributes whether valid or invalid.
 */
const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};

  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' has no space in starting.", getPositionFromMatch(matches[i]))
    } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', "boolean attribute '"+matches[i][2]+"' is not allowed.", getPositionFromMatch(matches[i]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is repeated.", getPositionFromMatch(matches[i]));
    }
  }

  return true;
}

function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === 'x') {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ';')
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}

function validateAmpersand(xmlData, i) {
  // https://www.w3.org/TR/xml/#dt-charref
  i++;
  if (xmlData[i] === ';')
    return -1;
  if (xmlData[i] === '#') {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ';')
      break;
    return -1;
  }
  return i;
}

function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col,
    },
  };
}

function validateAttrName(attrName) {
  return util.isName(attrName);
}

// const startsWithXML = /^xml/i;

function validateTagName(tagname) {
  return util.isName(tagname) /* && !tagname.match(startsWithXML) */;
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,

    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}

//this function returns the position of the first character of match within attrStr
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}

var validator = {
	validate: validate
};

const defaultOptions$1 = {
    preserveOrder: false,
    attributeNamePrefix: '@_',
    attributesGroupName: false,
    textNodeName: '#text',
    ignoreAttributes: true,
    removeNSPrefix: false, // remove NS from tag name or attribute name if true
    allowBooleanAttributes: false, //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true, //Trim string values of tag and attributes
    cdataPropName: false,
    numberParseOptions: {
      hex: true,
      leadingZeros: true,
      eNotation: true
    },
    tagValueProcessor: function(tagName, val) {
      return val;
    },
    attributeValueProcessor: function(attrName, val) {
      return val;
    },
    stopNodes: [], //nested tags will not be parsed even for errors
    alwaysCreateTextNode: false,
    isArray: () => false,
    commentPropName: false,
    unpairedTags: [],
    processEntities: true,
    htmlEntities: false,
    ignoreDeclaration: false,
    ignorePiTags: false,
    transformTagName: false,
    transformAttributeName: false,
    updateTag: function(tagName, jPath, attrs){
      return tagName
    },
    // skipEmptyListItem: false
};
   
const buildOptions$1 = function(options) {
    return Object.assign({}, defaultOptions$1, options);
};

var buildOptions_1 = buildOptions$1;
var defaultOptions_1 = defaultOptions$1;

var OptionsBuilder = {
	buildOptions: buildOptions_1,
	defaultOptions: defaultOptions_1
};

class XmlNode{
  constructor(tagname) {
    this.tagname = tagname;
    this.child = []; //nested tags, text, cdata, comments in order
    this[":@"] = {}; //attributes map
  }
  add(key,val){
    // this.child.push( {name : key, val: val, isCdata: isCdata });
    if(key === "__proto__") key = "#__proto__";
    this.child.push( {[key]: val });
  }
  addChild(node) {
    if(node.tagname === "__proto__") node.tagname = "#__proto__";
    if(node[":@"] && Object.keys(node[":@"]).length > 0){
      this.child.push( { [node.tagname]: node.child, [":@"]: node[":@"] });
    }else {
      this.child.push( { [node.tagname]: node.child });
    }
  };
}

var xmlNode = XmlNode;

//TODO: handle comments
function readDocType(xmlData, i){
    
    const entities = {};
    if( xmlData[i + 3] === 'O' &&
         xmlData[i + 4] === 'C' &&
         xmlData[i + 5] === 'T' &&
         xmlData[i + 6] === 'Y' &&
         xmlData[i + 7] === 'P' &&
         xmlData[i + 8] === 'E')
    {    
        i = i+9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for(;i<xmlData.length;i++){
            if (xmlData[i] === '<' && !comment) { //Determine the tag type
                if( hasBody && isEntity(xmlData, i)){
                    i += 7; 
                    [entityName, val,i] = readEntityExp(xmlData,i+1);
                    if(val.indexOf("&") === -1) //Parameter entities are not supported
                        entities[ validateEntityName(entityName) ] = {
                            regx : RegExp( `&${entityName};`,"g"),
                            val: val
                        };
                }
                else if( hasBody && isElement(xmlData, i))  i += 8;//Not supported
                else if( hasBody && isAttlist(xmlData, i))  i += 8;//Not supported
                else if( hasBody && isNotation(xmlData, i)) i += 9;//Not supported
                else if( isComment)                         comment = true;
                else                                        throw new Error("Invalid DOCTYPE");

                angleBracketsCount++;
                exp = "";
            } else if (xmlData[i] === '>') { //Read tag content
                if(comment){
                    if( xmlData[i - 1] === "-" && xmlData[i - 2] === "-"){
                        comment = false;
                        angleBracketsCount--;
                    }
                }else {
                    angleBracketsCount--;
                }
                if (angleBracketsCount === 0) {
                  break;
                }
            }else if( xmlData[i] === '['){
                hasBody = true;
            }else {
                exp += xmlData[i];
            }
        }
        if(angleBracketsCount !== 0){
            throw new Error(`Unclosed DOCTYPE`);
        }
    }else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
    }
    return {entities, i};
}

function readEntityExp(xmlData,i){
    //External entities are not supported
    //    <!ENTITY ext SYSTEM "http://normal-website.com" >

    //Parameter entities are not supported
    //    <!ENTITY entityname "&anotherElement;">

    //Internal entities are supported
    //    <!ENTITY entityname "replacement text">
    
    //read EntityName
    let entityName = "";
    for (; i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"' ); i++) {
        // if(xmlData[i] === " ") continue;
        // else 
        entityName += xmlData[i];
    }
    entityName = entityName.trim();
    if(entityName.indexOf(" ") !== -1) throw new Error("External entites are not supported");

    //read Entity Value
    const startChar = xmlData[i++];
    let val = "";
    for (; i < xmlData.length && xmlData[i] !== startChar ; i++) {
        val += xmlData[i];
    }
    return [entityName, val, i];
}

function isComment(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === '-' &&
    xmlData[i+3] === '-') return true
    return false
}
function isEntity(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'E' &&
    xmlData[i+3] === 'N' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'I' &&
    xmlData[i+6] === 'T' &&
    xmlData[i+7] === 'Y') return true
    return false
}
function isElement(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'E' &&
    xmlData[i+3] === 'L' &&
    xmlData[i+4] === 'E' &&
    xmlData[i+5] === 'M' &&
    xmlData[i+6] === 'E' &&
    xmlData[i+7] === 'N' &&
    xmlData[i+8] === 'T') return true
    return false
}

function isAttlist(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'A' &&
    xmlData[i+3] === 'T' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'L' &&
    xmlData[i+6] === 'I' &&
    xmlData[i+7] === 'S' &&
    xmlData[i+8] === 'T') return true
    return false
}
function isNotation(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'N' &&
    xmlData[i+3] === 'O' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'A' &&
    xmlData[i+6] === 'T' &&
    xmlData[i+7] === 'I' &&
    xmlData[i+8] === 'O' &&
    xmlData[i+9] === 'N') return true
    return false
}

function validateEntityName(name){
    if (util.isName(name))
	return name;
    else
        throw new Error(`Invalid entity name ${name}`);
}

var DocTypeReader = readDocType;

const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
// const octRegex = /0x[a-z0-9]+/;
// const binRegex = /0x[a-z0-9]+/;


//polyfill
if (!Number.parseInt && window.parseInt) {
    Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
    Number.parseFloat = window.parseFloat;
}

  
const consider = {
    hex :  true,
    leadingZeros: true,
    decimalPoint: "\.",
    eNotation: true
    //skipLike: /regex/
};

function toNumber(str, options = {}){
    // const options = Object.assign({}, consider);
    // if(opt.leadingZeros === false){
    //     options.leadingZeros = false;
    // }else if(opt.hex === false){
    //     options.hex = false;
    // }

    options = Object.assign({}, consider, options );
    if(!str || typeof str !== "string" ) return str;
    
    let trimmedStr  = str.trim();
    // if(trimmedStr === "0.0") return 0;
    // else if(trimmedStr === "+0.0") return 0;
    // else if(trimmedStr === "-0.0") return -0;

    if(options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
    else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
    // } else if (options.parseOct && octRegex.test(str)) {
    //     return Number.parseInt(val, 8);
    // }else if (options.parseBin && binRegex.test(str)) {
    //     return Number.parseInt(val, 2);
    }else {
        //separate negative sign, leading zeros, and rest number
        const match = numRegex.exec(trimmedStr);
        if(match){
            const sign = match[1];
            const leadingZeros = match[2];
            let numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
            //trim ending zeros for floating number
            
            const eNotation = match[4] || match[6];
            if(!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str; //-0123
            else if(!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str; //0123
            else {//no leading zeros or leading zeros are allowed
                const num = Number(trimmedStr);
                const numStr = "" + num;
                if(numStr.search(/[eE]/) !== -1){ //given number is long and parsed to eNotation
                    if(options.eNotation) return num;
                    else return str;
                }else if(eNotation){ //given number has enotation
                    if(options.eNotation) return num;
                    else return str;
                }else if(trimmedStr.indexOf(".") !== -1){ //floating number
                    // const decimalPart = match[5].substr(1);
                    // const intPart = trimmedStr.substr(0,trimmedStr.indexOf("."));

                    
                    // const p = numStr.indexOf(".");
                    // const givenIntPart = numStr.substr(0,p);
                    // const givenDecPart = numStr.substr(p+1);
                    if(numStr === "0" && (numTrimmedByZeros === "") ) return num; //0.0
                    else if(numStr === numTrimmedByZeros) return num; //0.456. 0.79000
                    else if( sign && numStr === "-"+numTrimmedByZeros) return num;
                    else return str;
                }
                
                if(leadingZeros){
                    // if(numTrimmedByZeros === numStr){
                    //     if(options.leadingZeros) return num;
                    //     else return str;
                    // }else return str;
                    if(numTrimmedByZeros === numStr) return num;
                    else if(sign+numTrimmedByZeros === numStr) return num;
                    else return str;
                }

                if(trimmedStr === numStr) return num;
                else if(trimmedStr === sign+numStr) return num;
                // else{
                //     //number with +/- sign
                //     trimmedStr.test(/[-+][0-9]);

                // }
                return str;
            }
            // else if(!eNotation && trimmedStr && trimmedStr !== Number(trimmedStr) ) return str;
            
        }else { //non-numeric string
            return str;
        }
    }
}

/**
 * 
 * @param {string} numStr without leading zeros
 * @returns 
 */
function trimZeros(numStr){
    if(numStr && numStr.indexOf(".") !== -1){//float
        numStr = numStr.replace(/0+$/, ""); //remove ending zeros
        if(numStr === ".")  numStr = "0";
        else if(numStr[0] === ".")  numStr = "0"+numStr;
        else if(numStr[numStr.length-1] === ".")  numStr = numStr.substr(0,numStr.length-1);
        return numStr;
    }
    return numStr;
}
var strnum = toNumber;

///@ts-check






'<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
  .replace(/NAME/g, util.nameRegexp);

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

class OrderedObjParser{
  constructor(options){
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.docTypeEntities = {};
    this.lastEntities = {
      "apos" : { regex: /&(apos|#39|#x27);/g, val : "'"},
      "gt" : { regex: /&(gt|#62|#x3E);/g, val : ">"},
      "lt" : { regex: /&(lt|#60|#x3C);/g, val : "<"},
      "quot" : { regex: /&(quot|#34|#x22);/g, val : "\""},
    };
    this.ampEntity = { regex: /&(amp|#38|#x26);/g, val : "&"};
    this.htmlEntities = {
      "space": { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      "cent" : { regex: /&(cent|#162);/g, val: "¢" },
      "pound" : { regex: /&(pound|#163);/g, val: "£" },
      "yen" : { regex: /&(yen|#165);/g, val: "¥" },
      "euro" : { regex: /&(euro|#8364);/g, val: "€" },
      "copyright" : { regex: /&(copy|#169);/g, val: "©" },
      "reg" : { regex: /&(reg|#174);/g, val: "®" },
      "inr" : { regex: /&(inr|#8377);/g, val: "₹" },
    };
    this.addExternalEntities = addExternalEntities;
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue$1;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
    this.addChild = addChild;
  }

}

function addExternalEntities(externalEntities){
  const entKeys = Object.keys(externalEntities);
  for (let i = 0; i < entKeys.length; i++) {
    const ent = entKeys[i];
    this.lastEntities[ent] = {
       regex: new RegExp("&"+ent+";","g"),
       val : externalEntities[ent]
    };
  }
}

/**
 * @param {string} val
 * @param {string} tagName
 * @param {string} jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== undefined) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if(val.length > 0){
      if(!escapeEntities) val = this.replaceEntitiesValue(val);
      
      const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
      if(newval === null || newval === undefined){
        //don't parse
        return val;
      }else if(typeof newval !== typeof val || newval !== val){
        //overwrite
        return newval;
      }else if(this.options.trimValues){
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      }else {
        const trimmedVal = val.trim();
        if(trimmedVal === val){
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        }else {
          return val;
        }
      }
    }
  }
}

function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');

function buildAttributesMap(attrStr, jPath, tagName) {
  if (!this.options.ignoreAttributes && typeof attrStr === 'string') {
    // attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    const matches = util.getAllMatches(attrStr, attrsRegx);
    const len = matches.length; //don't make it inline
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      let oldVal = matches[i][4];
      let aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (this.options.transformAttributeName) {
          aName = this.options.transformAttributeName(aName);
        }
        if(aName === "__proto__") aName  = "#__proto__";
        if (oldVal !== undefined) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal);
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
          if(newVal === null || newVal === undefined){
            //don't parse
            attrs[aName] = oldVal;
          }else if(typeof newVal !== typeof oldVal || newVal !== oldVal){
            //overwrite
            attrs[aName] = newVal;
          }else {
            //parse
            attrs[aName] = parseValue(
              oldVal,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs
  }
}

const parseXml = function(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
  const xmlObj = new xmlNode('!xml');
  let currentNode = xmlObj;
  let textData = "";
  let jPath = "";
  for(let i=0; i< xmlData.length; i++){//for each char in XML data
    const ch = xmlData[i];
    if(ch === '<'){
      // const nextIndex = i+1;
      // const _2ndChar = xmlData[nextIndex];
      if( xmlData[i+1] === '/') {//Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
        let tagName = xmlData.substring(i+2,closeIndex).trim();

        if(this.options.removeNSPrefix){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
          }
        }

        if(this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }

        if(currentNode){
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
        }

        //check if last tag of nested tag was unpaired tag
        const lastTagName = jPath.substring(jPath.lastIndexOf(".")+1);
        if(tagName && this.options.unpairedTags.indexOf(tagName) !== -1 ){
          throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
        }
        let propIndex = 0;
        if(lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1 ){
          propIndex = jPath.lastIndexOf('.', jPath.lastIndexOf('.')-1);
          this.tagsNodeStack.pop();
        }else {
          propIndex = jPath.lastIndexOf(".");
        }
        jPath = jPath.substring(0, propIndex);

        currentNode = this.tagsNodeStack.pop();//avoid recursion, set the parent tag scope
        textData = "";
        i = closeIndex;
      } else if( xmlData[i+1] === '?') {

        let tagData = readTagExp(xmlData,i, false, "?>");
        if(!tagData) throw new Error("Pi Tag is not closed.");

        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        if( (this.options.ignoreDeclaration && tagData.tagName === "?xml") || this.options.ignorePiTags);else {
  
          const childNode = new xmlNode(tagData.tagName);
          childNode.add(this.options.textNodeName, "");
          
          if(tagData.tagName !== tagData.tagExp && tagData.attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
          }
          this.addChild(currentNode, childNode, jPath);

        }


        i = tagData.closeIndex + 1;
      } else if(xmlData.substr(i + 1, 3) === '!--') {
        const endIndex = findClosingIndex(xmlData, "-->", i+4, "Comment is not closed.");
        if(this.options.commentPropName){
          const comment = xmlData.substring(i + 4, endIndex - 2);

          textData = this.saveTextToParentTag(textData, currentNode, jPath);

          currentNode.add(this.options.commentPropName, [ { [this.options.textNodeName] : comment } ]);
        }
        i = endIndex;
      } else if( xmlData.substr(i + 1, 2) === '!D') {
        const result = DocTypeReader(xmlData, i);
        this.docTypeEntities = result.entities;
        i = result.i;
      }else if(xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9,closeIndex);

        textData = this.saveTextToParentTag(textData, currentNode, jPath);

        //cdata should be set even if it is 0 length string
        if(this.options.cdataPropName){
          // let val = this.parseTextData(tagExp, this.options.cdataPropName, jPath + "." + this.options.cdataPropName, true, false, true);
          // if(!val) val = "";
          currentNode.add(this.options.cdataPropName, [ { [this.options.textNodeName] : tagExp } ]);
        }else {
          let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
          if(val == undefined) val = "";
          currentNode.add(this.options.textNodeName, val);
        }
        
        i = closeIndex + 2;
      }else {//Opening tag
        let result = readTagExp(xmlData,i, this.options.removeNSPrefix);
        let tagName= result.tagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;

        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }
        
        //save text as child node
        if (currentNode && textData) {
          if(currentNode.tagname !== '!xml'){
            //when nested tag is found
            textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
          }
        }

        //check if last tag was unpaired tag
        const lastTag = currentNode;
        if(lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1 ){
          currentNode = this.tagsNodeStack.pop();
          jPath = jPath.substring(0, jPath.lastIndexOf("."));
        }
        if(tagName !== xmlObj.tagname){
          jPath += jPath ? "." + tagName : tagName;
        }
        if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) { //TODO: namespace
          let tagContent = "";
          //self-closing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            i = result.closeIndex;
          }
          //unpaired tag
          else if(this.options.unpairedTags.indexOf(tagName) !== -1){
            i = result.closeIndex;
          }
          //normal tag
          else {
            //read until closing tag is found
            const result = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
            if(!result) throw new Error(`Unexpected end of ${tagName}`);
            i = result.i;
            tagContent = result.tagContent;
          }

          const childNode = new xmlNode(tagName);
          if(tagName !== tagExp && attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
          }
          if(tagContent) {
            tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
          }
          
          jPath = jPath.substr(0, jPath.lastIndexOf("."));
          childNode.add(this.options.textNodeName, tagContent);
          
          this.addChild(currentNode, childNode, jPath);
        }else {
  //selfClosing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            if(tagName[tagName.length - 1] === "/"){ //remove trailing '/'
              tagName = tagName.substr(0, tagName.length - 1);
              tagExp = tagName;
            }else {
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            
            if(this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }

            const childNode = new xmlNode(tagName);
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath);
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
          }
    //opening tag
          else {
            const childNode = new xmlNode( tagName);
            this.tagsNodeStack.push(currentNode);
            
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath);
            currentNode = childNode;
          }
          textData = "";
          i = closeIndex;
        }
      }
    }else {
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
};

function addChild(currentNode, childNode, jPath){
  const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
  if(result === false);else if(typeof result === "string"){
    childNode.tagname = result;
    currentNode.addChild(childNode);
  }else {
    currentNode.addChild(childNode);
  }
}

const replaceEntitiesValue$1 = function(val){

  if(this.options.processEntities){
    for(let entityName in this.docTypeEntities){
      const entity = this.docTypeEntities[entityName];
      val = val.replace( entity.regx, entity.val);
    }
    for(let entityName in this.lastEntities){
      const entity = this.lastEntities[entityName];
      val = val.replace( entity.regex, entity.val);
    }
    if(this.options.htmlEntities){
      for(let entityName in this.htmlEntities){
        const entity = this.htmlEntities[entityName];
        val = val.replace( entity.regex, entity.val);
      }
    }
    val = val.replace( this.ampEntity.regex, this.ampEntity.val);
  }
  return val;
};
function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
  if (textData) { //store previously collected data as textNode
    if(isLeafNode === undefined) isLeafNode = Object.keys(currentNode.child).length === 0;
    
    textData = this.parseTextData(textData,
      currentNode.tagname,
      jPath,
      false,
      currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
      isLeafNode);

    if (textData !== undefined && textData !== "")
      currentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}

//TODO: use jPath to simplify the logic
/**
 * 
 * @param {string[]} stopNodes 
 * @param {string} jPath
 * @param {string} currentTagName 
 */
function isItStopNode(stopNodes, jPath, currentTagName){
  const allNodesExp = "*." + currentTagName;
  for (const stopNodePath in stopNodes) {
    const stopNodeExp = stopNodes[stopNodePath];
    if( allNodesExp === stopNodeExp || jPath === stopNodeExp  ) return true;
  }
  return false;
}

/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */
function tagExpWithClosingIndex(xmlData, i, closingChar = ">"){
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < xmlData.length; index++) {
    let ch = xmlData[index];
    if (attrBoundary) {
        if (ch === attrBoundary) attrBoundary = "";//reset
    } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
    } else if (ch === closingChar[0]) {
      if(closingChar[1]){
        if(xmlData[index + 1] === closingChar[1]){
          return {
            data: tagExp,
            index: index
          }
        }
      }else {
        return {
          data: tagExp,
          index: index
        }
      }
    } else if (ch === '\t') {
      ch = " ";
    }
    tagExp += ch;
  }
}

function findClosingIndex(xmlData, str, i, errMsg){
  const closingIndex = xmlData.indexOf(str, i);
  if(closingIndex === -1){
    throw new Error(errMsg)
  }else {
    return closingIndex + str.length - 1;
  }
}

function readTagExp(xmlData,i, removeNSPrefix, closingChar = ">"){
  const result = tagExpWithClosingIndex(xmlData, i+1, closingChar);
  if(!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if(separatorIndex !== -1){//separate tag name and attributes expression
    tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
    tagExp = tagExp.substr(separatorIndex + 1);
  }

  if(removeNSPrefix){
    const colonIndex = tagName.indexOf(":");
    if(colonIndex !== -1){
      tagName = tagName.substr(colonIndex+1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }

  return {
    tagName: tagName,
    tagExp: tagExp,
    closeIndex: closeIndex,
    attrExpPresent: attrExpPresent,
  }
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */
function readStopNodeData(xmlData, tagName, i){
  const startIndex = i;
  // Starting at 1 since we already have an open tag
  let openTagCount = 1;

  for (; i < xmlData.length; i++) {
    if( xmlData[i] === "<"){ 
      if (xmlData[i+1] === "/") {//close tag
          const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
          let closeTagName = xmlData.substring(i+2,closeIndex).trim();
          if(closeTagName === tagName){
            openTagCount--;
            if (openTagCount === 0) {
              return {
                tagContent: xmlData.substring(startIndex, i),
                i : closeIndex
              }
            }
          }
          i=closeIndex;
        } else if(xmlData[i+1] === '?') { 
          const closeIndex = findClosingIndex(xmlData, "?>", i+1, "StopNode is not closed.");
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 3) === '!--') { 
          const closeIndex = findClosingIndex(xmlData, "-->", i+3, "StopNode is not closed.");
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 2) === '![') { 
          const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
          i=closeIndex;
        } else {
          const tagData = readTagExp(xmlData, i, '>');

          if (tagData) {
            const openTagName = tagData && tagData.tagName;
            if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length-1] !== "/") {
              openTagCount++;
            }
            i=tagData.closeIndex;
          }
        }
      }
  }//end for loop
}

function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === 'string') {
    //console.log(options)
    const newval = val.trim();
    if(newval === 'true' ) return true;
    else if(newval === 'false' ) return false;
    else return strnum(val, options);
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}


var OrderedObjParser_1 = OrderedObjParser;

/**
 * 
 * @param {array} node 
 * @param {any} options 
 * @returns 
 */
function prettify$1(node, options){
  return compress( node, options);
}

/**
 * 
 * @param {array} arr 
 * @param {object} options 
 * @param {string} jPath 
 * @returns object
 */
function compress(arr, options, jPath){
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName$1(tagObj);
    let newJpath = "";
    if(jPath === undefined) newJpath = property;
    else newJpath = jPath + "." + property;

    if(property === options.textNodeName){
      if(text === undefined) text = tagObj[property];
      else text += "" + tagObj[property];
    }else if(property === undefined){
      continue;
    }else if(tagObj[property]){
      
      let val = compress(tagObj[property], options, newJpath);
      const isLeaf = isLeafTag(val, options);

      if(tagObj[":@"]){
        assignAttributes( val, tagObj[":@"], newJpath, options);
      }else if(Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode){
        val = val[options.textNodeName];
      }else if(Object.keys(val).length === 0){
        if(options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }

      if(compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
        if(!Array.isArray(compressedObj[property])) {
            compressedObj[property] = [ compressedObj[property] ];
        }
        compressedObj[property].push(val);
      }else {
        //TODO: if a node is not an array, then check if it should be an array
        //also determine if it is a leaf node
        if (options.isArray(property, newJpath, isLeaf )) {
          compressedObj[property] = [val];
        }else {
          compressedObj[property] = val;
        }
      }
    }
    
  }
  // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
  if(typeof text === "string"){
    if(text.length > 0) compressedObj[options.textNodeName] = text;
  }else if(text !== undefined) compressedObj[options.textNodeName] = text;
  return compressedObj;
}

function propName$1(obj){
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if(key !== ":@") return key;
  }
}

function assignAttributes(obj, attrMap, jpath, options){
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
        obj[atrrName] = [ attrMap[atrrName] ];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}

function isLeafTag(obj, options){
  const { textNodeName } = options;
  const propCount = Object.keys(obj).length;
  
  if (propCount === 0) {
    return true;
  }

  if (
    propCount === 1 &&
    (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)
  ) {
    return true;
  }

  return false;
}
var prettify_1 = prettify$1;

var node2json = {
	prettify: prettify_1
};

const { buildOptions} = OptionsBuilder;

const { prettify} = node2json;


class XMLParser{
    
    constructor(options){
        this.externalEntities = {};
        this.options = buildOptions(options);
        
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(xmlData,validationOption){
        if(typeof xmlData === "string");else if( xmlData.toString){
            xmlData = xmlData.toString();
        }else {
            throw new Error("XML data is accepted in String or Bytes[] form.")
        }
        if( validationOption){
            if(validationOption === true) validationOption = {}; //validate with default options
            
            const result = validator.validate(xmlData, validationOption);
            if (result !== true) {
              throw Error( `${result.err.msg}:${result.err.line}:${result.err.col}` )
            }
          }
        const orderedObjParser = new OrderedObjParser_1(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if(this.options.preserveOrder || orderedResult === undefined) return orderedResult;
        else return prettify(orderedResult, this.options);
    }

    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(key, value){
        if(value.indexOf("&") !== -1){
            throw new Error("Entity value can't have '&'")
        }else if(key.indexOf("&") !== -1 || key.indexOf(";") !== -1){
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'")
        }else if(value === "&"){
            throw new Error("An entity with value '&' is not permitted");
        }else {
            this.externalEntities[key] = value;
        }
    }
}

var XMLParser_1 = XMLParser;

const EOL = "\n";

/**
 * 
 * @param {array} jArray 
 * @param {any} options 
 * @returns 
 */
function toXml(jArray, options) {
    let indentation = "";
    if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
    }
    return arrToStr(jArray, options, "", indentation);
}

function arrToStr(arr, options, jPath, indentation) {
    let xmlStr = "";
    let isPreviousElementTag = false;

    for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName;
        else newJPath = `${jPath}.${tagName}`;

        if (tagName === options.textNodeName) {
            let tagText = tagObj[tagName];
            if (!isStopNode(newJPath, options)) {
                tagText = options.tagValueProcessor(tagName, tagText);
                tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.commentPropName) {
            xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
            isPreviousElementTag = true;
            continue;
        } else if (tagName[0] === "?") {
            const attStr = attr_to_str(tagObj[":@"], options);
            const tempInd = tagName === "?xml" ? "" : indentation;
            let piTextNodeName = tagObj[tagName][0][options.textNodeName];
            piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : ""; //remove extra spacing
            xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr}?>`;
            isPreviousElementTag = true;
            continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
            newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
            else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
                xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
    }

    return xmlStr;
}

function propName(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key !== ":@") return key;
    }
}

function attr_to_str(attrMap, options) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
            let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
            attrVal = replaceEntitiesValue(attrVal, options);
            if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
            }
        }
    }
    return attrStr;
}

function isStopNode(jPath, options) {
    jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
    let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
    for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
    }
    return false;
}

function replaceEntitiesValue(textValue, options) {
    if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
            const entity = options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
        }
    }
    return textValue;
}
var orderedJs2Xml = toXml;

//parse Empty Node as self closing node


const defaultOptions = {
  attributeNamePrefix: '@_',
  attributesGroupName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataPropName: false,
  format: false,
  indentBy: '  ',
  suppressEmptyNode: false,
  suppressUnpairedNode: true,
  suppressBooleanAttributes: true,
  tagValueProcessor: function(key, a) {
    return a;
  },
  attributeValueProcessor: function(attrName, a) {
    return a;
  },
  preserveOrder: false,
  commentPropName: false,
  unpairedTags: [],
  entities: [
    { regex: new RegExp("&", "g"), val: "&amp;" },//it must be on top
    { regex: new RegExp(">", "g"), val: "&gt;" },
    { regex: new RegExp("<", "g"), val: "&lt;" },
    { regex: new RegExp("\'", "g"), val: "&apos;" },
    { regex: new RegExp("\"", "g"), val: "&quot;" }
  ],
  processEntities: true,
  stopNodes: [],
  // transformTagName: false,
  // transformAttributeName: false,
  oneListGroup: false
};

function Builder(options) {
  this.options = Object.assign({}, defaultOptions, options);
  if (this.options.ignoreAttributes || this.options.attributesGroupName) {
    this.isAttribute = function(/*a*/) {
      return false;
    };
  } else {
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }

  this.processTextOrObjNode = processTextOrObjNode;

  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function() {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }
}

Builder.prototype.build = function(jObj) {
  if(this.options.preserveOrder){
    return orderedJs2Xml(jObj, this.options);
  }else {
    if(Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1){
      jObj = {
        [this.options.arrayNodeName] : jObj
      };
    }
    return this.j2x(jObj, 0).val;
  }
};

Builder.prototype.j2x = function(jObj, level) {
  let attrStr = '';
  let val = '';
  for (let key in jObj) {
    if (typeof jObj[key] === 'undefined') ; else if (jObj[key] === null) {
      if(key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
      else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
      // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextValNode(jObj[key], key, '', level);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr) {
        attrStr += this.buildAttrPairStr(attr, '' + jObj[key]);
      }else {
        //tag value
        if (key === this.options.textNodeName) {
          let newval = this.options.tagValueProcessor(key, '' + jObj[key]);
          val += this.replaceEntitiesValue(newval);
        } else {
          val += this.buildTextValNode(jObj[key], key, '', level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      const arrLen = jObj[key].length;
      let listTagVal = "";
      for (let j = 0; j < arrLen; j++) {
        const item = jObj[key][j];
        if (typeof item === 'undefined') ; else if (item === null) {
          if(key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
          else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
          // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
        } else if (typeof item === 'object') {
          if(this.options.oneListGroup ){
            listTagVal += this.j2x(item, level + 1).val;
          }else {
            listTagVal += this.processTextOrObjNode(item, key, level);
          }
        } else {
          listTagVal += this.buildTextValNode(item, key, '', level);
        }
      }
      if(this.options.oneListGroup){
        listTagVal = this.buildObjectNode(listTagVal, key, '', level);
      }
      val += listTagVal;
    } else {
      //nested node
      if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += this.buildAttrPairStr(Ks[j], '' + jObj[key][Ks[j]]);
        }
      } else {
        val += this.processTextOrObjNode(jObj[key], key, level);
      }
    }
  }
  return {attrStr: attrStr, val: val};
};

Builder.prototype.buildAttrPairStr = function(attrName, val){
  val = this.options.attributeValueProcessor(attrName, '' + val);
  val = this.replaceEntitiesValue(val);
  if (this.options.suppressBooleanAttributes && val === "true") {
    return ' ' + attrName;
  } else return ' ' + attrName + '="' + val + '"';
};

function processTextOrObjNode (object, key, level) {
  const result = this.j2x(object, level + 1);
  if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
    return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
  } else {
    return this.buildObjectNode(result.val, key, result.attrStr, level);
  }
}

Builder.prototype.buildObjectNode = function(val, key, attrStr, level) {
  if(val === ""){
    if(key[0] === "?") return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar;
    else {
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }
  }else {

    let tagEndExp = '</' + key + this.tagEndChar;
    let piClosingChar = "";
    
    if(key[0] === "?") {
      piClosingChar = "?";
      tagEndExp = "";
    }
  
    if (attrStr && val.indexOf('<') === -1) {
      return ( this.indentate(level) + '<' +  key + attrStr + piClosingChar + '>' + val + tagEndExp );
    } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
      return this.indentate(level) + `<!--${val}-->` + this.newLine;
    }else {
      return (
        this.indentate(level) + '<' + key + attrStr + piClosingChar + this.tagEndChar +
        val +
        this.indentate(level) + tagEndExp    );
    }
  }
};

Builder.prototype.closeTag = function(key){
  let closeTag = "";
  if(this.options.unpairedTags.indexOf(key) !== -1){ //unpaired
    if(!this.options.suppressUnpairedNode) closeTag = "/";
  }else if(this.options.suppressEmptyNode){ //empty
    closeTag = "/";
  }else {
    closeTag = `></${key}`;
  }
  return closeTag;
};

Builder.prototype.buildTextValNode = function(val, key, attrStr, level) {
  if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
    return this.indentate(level) + `<![CDATA[${val}]]>` +  this.newLine;
  }else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
    return this.indentate(level) + `<!--${val}-->` +  this.newLine;
  }else if(key[0] === "?") {//PI tag
    return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar; 
  }else {
    let textValue = this.options.tagValueProcessor(key, val);
    textValue = this.replaceEntitiesValue(textValue);
  
    if( textValue === ''){
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }else {
      return this.indentate(level) + '<' + key + attrStr + '>' +
         textValue +
        '</' + key + this.tagEndChar;
    }
  }
};

Builder.prototype.replaceEntitiesValue = function(textValue){
  if(textValue && textValue.length > 0 && this.options.processEntities){
    for (let i=0; i<this.options.entities.length; i++) {
      const entity = this.options.entities[i];
      textValue = textValue.replace(entity.regex, entity.val);
    }
  }
  return textValue;
};

function indentate(level) {
  return this.options.indentBy.repeat(level);
}

function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix)) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}

var json2xml = Builder;

var fxp = {
  XMLParser: XMLParser_1,
  XMLValidator: validator,
  XMLBuilder: json2xml
};
var fxp_1 = fxp.XMLParser;

const se_AssumeRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleRequest(input),
        [_A]: _AR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AssumeRoleWithSAMLCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleWithSAMLRequest(input),
        [_A]: _ARWSAML,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AssumeRoleWithWebIdentityCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleWithWebIdentityRequest(input),
        [_A]: _ARWWI,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DecodeAuthorizationMessageCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DecodeAuthorizationMessageRequest(input),
        [_A]: _DAM,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetAccessKeyInfoCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetAccessKeyInfoRequest(input),
        [_A]: _GAKI,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetCallerIdentityCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetCallerIdentityRequest(),
        [_A]: _GCI,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetFederationTokenCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetFederationTokenRequest(input),
        [_A]: _GFT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetSessionTokenCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetSessionTokenRequest(input),
        [_A]: _GST,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const de_AssumeRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_AssumeRoleCommandError(output, context);
    }
    const data = await parseBody$3(output.body, context);
    let contents = {};
    contents = de_AssumeRoleResponse(data.AssumeRoleResult);
    const response = {
        $metadata: deserializeMetadata$3(output),
        ...contents,
    };
    return response;
};
const de_AssumeRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$3(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes$1(parsedOutput);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$3({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_AssumeRoleWithSAMLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_AssumeRoleWithSAMLCommandError(output, context);
    }
    const data = await parseBody$3(output.body, context);
    let contents = {};
    contents = de_AssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult);
    const response = {
        $metadata: deserializeMetadata$3(output),
        ...contents,
    };
    return response;
};
const de_AssumeRoleWithSAMLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$3(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes$1(parsedOutput);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await de_IDPRejectedClaimExceptionRes(parsedOutput);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await de_InvalidIdentityTokenExceptionRes(parsedOutput);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$3({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_AssumeRoleWithWebIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_AssumeRoleWithWebIdentityCommandError(output, context);
    }
    const data = await parseBody$3(output.body, context);
    let contents = {};
    contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult);
    const response = {
        $metadata: deserializeMetadata$3(output),
        ...contents,
    };
    return response;
};
const de_AssumeRoleWithWebIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$3(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes$1(parsedOutput);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
            throw await de_IDPCommunicationErrorExceptionRes(parsedOutput);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await de_IDPRejectedClaimExceptionRes(parsedOutput);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await de_InvalidIdentityTokenExceptionRes(parsedOutput);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$3({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DecodeAuthorizationMessageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DecodeAuthorizationMessageCommandError(output, context);
    }
    const data = await parseBody$3(output.body, context);
    let contents = {};
    contents = de_DecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult);
    const response = {
        $metadata: deserializeMetadata$3(output),
        ...contents,
    };
    return response;
};
const de_DecodeAuthorizationMessageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$3(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidAuthorizationMessageException":
        case "com.amazonaws.sts#InvalidAuthorizationMessageException":
            throw await de_InvalidAuthorizationMessageExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$3({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetAccessKeyInfoCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetAccessKeyInfoCommandError(output, context);
    }
    const data = await parseBody$3(output.body, context);
    let contents = {};
    contents = de_GetAccessKeyInfoResponse(data.GetAccessKeyInfoResult);
    const response = {
        $metadata: deserializeMetadata$3(output),
        ...contents,
    };
    return response;
};
const de_GetAccessKeyInfoCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$3(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError$3({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetCallerIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetCallerIdentityCommandError(output, context);
    }
    const data = await parseBody$3(output.body, context);
    let contents = {};
    contents = de_GetCallerIdentityResponse(data.GetCallerIdentityResult);
    const response = {
        $metadata: deserializeMetadata$3(output),
        ...contents,
    };
    return response;
};
const de_GetCallerIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$3(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError$3({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetFederationTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetFederationTokenCommandError(output, context);
    }
    const data = await parseBody$3(output.body, context);
    let contents = {};
    contents = de_GetFederationTokenResponse(data.GetFederationTokenResult);
    const response = {
        $metadata: deserializeMetadata$3(output),
        ...contents,
    };
    return response;
};
const de_GetFederationTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$3(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$3({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetSessionTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetSessionTokenCommandError(output, context);
    }
    const data = await parseBody$3(output.body, context);
    let contents = {};
    contents = de_GetSessionTokenResponse(data.GetSessionTokenResult);
    const response = {
        $metadata: deserializeMetadata$3(output),
        ...contents,
    };
    return response;
};
const de_GetSessionTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$3(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$3({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ExpiredTokenExceptionRes$1 = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ExpiredTokenException(body.Error);
    const exception = new ExpiredTokenException$1({
        $metadata: deserializeMetadata$3(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_IDPCommunicationErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_IDPCommunicationErrorException(body.Error);
    const exception = new IDPCommunicationErrorException({
        $metadata: deserializeMetadata$3(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_IDPRejectedClaimExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_IDPRejectedClaimException(body.Error);
    const exception = new IDPRejectedClaimException({
        $metadata: deserializeMetadata$3(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_InvalidAuthorizationMessageExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidAuthorizationMessageException(body.Error);
    const exception = new InvalidAuthorizationMessageException({
        $metadata: deserializeMetadata$3(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_InvalidIdentityTokenExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidIdentityTokenException(body.Error);
    const exception = new InvalidIdentityTokenException({
        $metadata: deserializeMetadata$3(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_MalformedPolicyDocumentExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_MalformedPolicyDocumentException(body.Error);
    const exception = new MalformedPolicyDocumentException({
        $metadata: deserializeMetadata$3(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_PackedPolicyTooLargeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_PackedPolicyTooLargeException(body.Error);
    const exception = new PackedPolicyTooLargeException({
        $metadata: deserializeMetadata$3(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const de_RegionDisabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_RegionDisabledException(body.Error);
    const exception = new RegionDisabledException({
        $metadata: deserializeMetadata$3(parsedOutput),
        ...deserialized,
    });
    return decorateServiceException(exception, body);
};
const se_AssumeRoleRequest = (input, context) => {
    const entries = {};
    if (input[_RA] != null) {
        entries[_RA] = input[_RA];
    }
    if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA]);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T]);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_TTK] != null) {
        const memberEntries = se_tagKeyListType(input[_TTK]);
        if (input[_TTK]?.length === 0) {
            entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TransitiveTagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_EI] != null) {
        entries[_EI] = input[_EI];
    }
    if (input[_SN] != null) {
        entries[_SN] = input[_SN];
    }
    if (input[_TC] != null) {
        entries[_TC] = input[_TC];
    }
    if (input[_SI] != null) {
        entries[_SI] = input[_SI];
    }
    if (input[_PC] != null) {
        const memberEntries = se_ProvidedContextsListType(input[_PC]);
        if (input[_PC]?.length === 0) {
            entries.ProvidedContexts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ProvidedContexts.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_AssumeRoleWithSAMLRequest = (input, context) => {
    const entries = {};
    if (input[_RA] != null) {
        entries[_RA] = input[_RA];
    }
    if (input[_PAr] != null) {
        entries[_PAr] = input[_PAr];
    }
    if (input[_SAMLA] != null) {
        entries[_SAMLA] = input[_SAMLA];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA]);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    return entries;
};
const se_AssumeRoleWithWebIdentityRequest = (input, context) => {
    const entries = {};
    if (input[_RA] != null) {
        entries[_RA] = input[_RA];
    }
    if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
    }
    if (input[_WIT] != null) {
        entries[_WIT] = input[_WIT];
    }
    if (input[_PI] != null) {
        entries[_PI] = input[_PI];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA]);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    return entries;
};
const se_DecodeAuthorizationMessageRequest = (input, context) => {
    const entries = {};
    if (input[_EM] != null) {
        entries[_EM] = input[_EM];
    }
    return entries;
};
const se_GetAccessKeyInfoRequest = (input, context) => {
    const entries = {};
    if (input[_AKI] != null) {
        entries[_AKI] = input[_AKI];
    }
    return entries;
};
const se_GetCallerIdentityRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_GetFederationTokenRequest = (input, context) => {
    const entries = {};
    if (input[_N] != null) {
        entries[_N] = input[_N];
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA]);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T]);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetSessionTokenRequest = (input, context) => {
    const entries = {};
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    if (input[_SN] != null) {
        entries[_SN] = input[_SN];
    }
    if (input[_TC] != null) {
        entries[_TC] = input[_TC];
    }
    return entries;
};
const se_policyDescriptorListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_PolicyDescriptorType(entry);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_PolicyDescriptorType = (input, context) => {
    const entries = {};
    if (input[_a] != null) {
        entries[_a] = input[_a];
    }
    return entries;
};
const se_ProvidedContext = (input, context) => {
    const entries = {};
    if (input[_PAro] != null) {
        entries[_PAro] = input[_PAro];
    }
    if (input[_CA] != null) {
        entries[_CA] = input[_CA];
    }
    return entries;
};
const se_ProvidedContextsListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_ProvidedContext(entry);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_Tag = (input, context) => {
    const entries = {};
    if (input[_K] != null) {
        entries[_K] = input[_K];
    }
    if (input[_Va] != null) {
        entries[_Va] = input[_Va];
    }
    return entries;
};
const se_tagKeyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_tagListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_Tag(entry);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const de_AssumedRoleUser = (output, context) => {
    const contents = {};
    if (output[_ARI] != null) {
        contents[_ARI] = expectString(output[_ARI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = expectString(output[_Ar]);
    }
    return contents;
};
const de_AssumeRoleResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C]);
    }
    if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU]);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
    }
    if (output[_SI] != null) {
        contents[_SI] = expectString(output[_SI]);
    }
    return contents;
};
const de_AssumeRoleWithSAMLResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C]);
    }
    if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU]);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
    }
    if (output[_S] != null) {
        contents[_S] = expectString(output[_S]);
    }
    if (output[_ST] != null) {
        contents[_ST] = expectString(output[_ST]);
    }
    if (output[_I] != null) {
        contents[_I] = expectString(output[_I]);
    }
    if (output[_Au] != null) {
        contents[_Au] = expectString(output[_Au]);
    }
    if (output[_NQ] != null) {
        contents[_NQ] = expectString(output[_NQ]);
    }
    if (output[_SI] != null) {
        contents[_SI] = expectString(output[_SI]);
    }
    return contents;
};
const de_AssumeRoleWithWebIdentityResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C]);
    }
    if (output[_SFWIT] != null) {
        contents[_SFWIT] = expectString(output[_SFWIT]);
    }
    if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU]);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
    }
    if (output[_Pr] != null) {
        contents[_Pr] = expectString(output[_Pr]);
    }
    if (output[_Au] != null) {
        contents[_Au] = expectString(output[_Au]);
    }
    if (output[_SI] != null) {
        contents[_SI] = expectString(output[_SI]);
    }
    return contents;
};
const de_Credentials = (output, context) => {
    const contents = {};
    if (output[_AKI] != null) {
        contents[_AKI] = expectString(output[_AKI]);
    }
    if (output[_SAK] != null) {
        contents[_SAK] = expectString(output[_SAK]);
    }
    if (output[_STe] != null) {
        contents[_STe] = expectString(output[_STe]);
    }
    if (output[_E] != null) {
        contents[_E] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_E]));
    }
    return contents;
};
const de_DecodeAuthorizationMessageResponse = (output, context) => {
    const contents = {};
    if (output[_DM] != null) {
        contents[_DM] = expectString(output[_DM]);
    }
    return contents;
};
const de_ExpiredTokenException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
    }
    return contents;
};
const de_FederatedUser = (output, context) => {
    const contents = {};
    if (output[_FUI] != null) {
        contents[_FUI] = expectString(output[_FUI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = expectString(output[_Ar]);
    }
    return contents;
};
const de_GetAccessKeyInfoResponse = (output, context) => {
    const contents = {};
    if (output[_Ac] != null) {
        contents[_Ac] = expectString(output[_Ac]);
    }
    return contents;
};
const de_GetCallerIdentityResponse = (output, context) => {
    const contents = {};
    if (output[_UI] != null) {
        contents[_UI] = expectString(output[_UI]);
    }
    if (output[_Ac] != null) {
        contents[_Ac] = expectString(output[_Ac]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = expectString(output[_Ar]);
    }
    return contents;
};
const de_GetFederationTokenResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C]);
    }
    if (output[_FU] != null) {
        contents[_FU] = de_FederatedUser(output[_FU]);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = strictParseInt32(output[_PPS]);
    }
    return contents;
};
const de_GetSessionTokenResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C]);
    }
    return contents;
};
const de_IDPCommunicationErrorException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
    }
    return contents;
};
const de_IDPRejectedClaimException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
    }
    return contents;
};
const de_InvalidAuthorizationMessageException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
    }
    return contents;
};
const de_InvalidIdentityTokenException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
    }
    return contents;
};
const de_MalformedPolicyDocumentException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
    }
    return contents;
};
const de_PackedPolicyTooLargeException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
    }
    return contents;
};
const de_RegionDisabledException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = expectString(output[_m]);
    }
    return contents;
};
const deserializeMetadata$3 = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString$3 = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError$3 = withBaseException(STSServiceException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new HttpRequest(contents);
};
const SHARED_HEADERS = {
    "content-type": "application/x-www-form-urlencoded",
};
const _ = "2011-06-15";
const _A = "Action";
const _AKI = "AccessKeyId";
const _AR = "AssumeRole";
const _ARI = "AssumedRoleId";
const _ARU = "AssumedRoleUser";
const _ARWSAML = "AssumeRoleWithSAML";
const _ARWWI = "AssumeRoleWithWebIdentity";
const _Ac = "Account";
const _Ar = "Arn";
const _Au = "Audience";
const _C = "Credentials";
const _CA = "ContextAssertion";
const _DAM = "DecodeAuthorizationMessage";
const _DM = "DecodedMessage";
const _DS = "DurationSeconds";
const _E = "Expiration";
const _EI = "ExternalId";
const _EM = "EncodedMessage";
const _FU = "FederatedUser";
const _FUI = "FederatedUserId";
const _GAKI = "GetAccessKeyInfo";
const _GCI = "GetCallerIdentity";
const _GFT = "GetFederationToken";
const _GST = "GetSessionToken";
const _I = "Issuer";
const _K = "Key";
const _N = "Name";
const _NQ = "NameQualifier";
const _P = "Policy";
const _PA = "PolicyArns";
const _PAr = "PrincipalArn";
const _PAro = "ProviderArn";
const _PC = "ProvidedContexts";
const _PI = "ProviderId";
const _PPS = "PackedPolicySize";
const _Pr = "Provider";
const _RA = "RoleArn";
const _RSN = "RoleSessionName";
const _S = "Subject";
const _SAK = "SecretAccessKey";
const _SAMLA = "SAMLAssertion";
const _SFWIT = "SubjectFromWebIdentityToken";
const _SI = "SourceIdentity";
const _SN = "SerialNumber";
const _ST = "SubjectType";
const _STe = "SessionToken";
const _T = "Tags";
const _TC = "TokenCode";
const _TTK = "TransitiveTagKeys";
const _UI = "UserId";
const _V = "Version";
const _Va = "Value";
const _WIT = "WebIdentityToken";
const _a = "arn";
const _m = "message";
const parseBody$3 = (streamBody, context) => collectBodyString$3(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parser = new fxp_1({
            attributeNamePrefix: "",
            htmlEntities: true,
            ignoreAttributes: false,
            ignoreDeclaration: true,
            parseTagValue: false,
            trimValues: false,
            tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        const parsedObj = parser.parse(encoded);
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const parseErrorBody$3 = async (errorBody, context) => {
    const value = await parseBody$3(errorBody, context);
    if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
    }
    return value;
};
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => extendedEncodeURIComponent(key) + "=" + extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};

class AssumeRoleCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$1,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSecurityTokenServiceV20110615", "AssumeRole", {})
    .n("STSClient", "AssumeRoleCommand")
    .f(void 0, AssumeRoleResponseFilterSensitiveLog)
    .ser(se_AssumeRoleCommand)
    .de(de_AssumeRoleCommand)
    .build() {
}

class AssumeRoleWithWebIdentityCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$1,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
    .n("STSClient", "AssumeRoleWithWebIdentityCommand")
    .f(AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog)
    .ser(se_AssumeRoleWithWebIdentityCommand)
    .de(de_AssumeRoleWithWebIdentityCommand)
    .build() {
}

const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
const decorateDefaultRegion = (region) => {
    if (typeof region !== "function") {
        return region === undefined ? ASSUME_ROLE_DEFAULT_REGION : region;
    }
    return async () => {
        try {
            return await region();
        }
        catch (e) {
            return ASSUME_ROLE_DEFAULT_REGION;
        }
    };
};
const getDefaultRoleAssumer$1 = (stsOptions, stsClientCtor) => {
    let stsClient;
    let closureSourceCreds;
    return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
            const { logger, region, requestHandler } = stsOptions;
            stsClient = new stsClientCtor({
                logger,
                credentialDefaultProvider: () => async () => closureSourceCreds,
                region: decorateDefaultRegion(region || stsOptions.region),
                ...(requestHandler ? { requestHandler } : {}),
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
            credentialScope: Credentials.CredentialScope,
        };
    };
};
const getDefaultRoleAssumerWithWebIdentity$1 = (stsOptions, stsClientCtor) => {
    let stsClient;
    return async (params) => {
        if (!stsClient) {
            const { logger, region, requestHandler } = stsOptions;
            stsClient = new stsClientCtor({
                logger,
                region: decorateDefaultRegion(region || stsOptions.region),
                ...(requestHandler ? { requestHandler } : {}),
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
            credentialScope: Credentials.CredentialScope,
        };
    };
};
const decorateDefaultCredentialProvider$1 = (provider) => (input) => provider({
    roleAssumer: getDefaultRoleAssumer$1(input, input.stsClientCtor),
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity$1(input, input.stsClientCtor),
    ...input,
});

const ENV_KEY = "AWS_ACCESS_KEY_ID";
const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
const ENV_SESSION = "AWS_SESSION_TOKEN";
const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
const ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
const fromEnv = () => async () => {
    const accessKeyId = process.env[ENV_KEY];
    const secretAccessKey = process.env[ENV_SECRET];
    const sessionToken = process.env[ENV_SESSION];
    const expiry = process.env[ENV_EXPIRATION];
    const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
    if (accessKeyId && secretAccessKey) {
        return {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken && { sessionToken }),
            ...(expiry && { expiration: new Date(expiry) }),
            ...(credentialScope && { credentialScope }),
        };
    }
    throw new CredentialsProviderError("Unable to find environment variable credentials.");
};

function httpRequest(options) {
    return new Promise((resolve, reject) => {
        const req = request$1({
            method: "GET",
            ...options,
            hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1"),
        });
        req.on("error", (err) => {
            reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
            req.destroy();
        });
        req.on("timeout", () => {
            reject(new ProviderError("TimeoutError from instance metadata service"));
            req.destroy();
        });
        req.on("response", (res) => {
            const { statusCode = 400 } = res;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode }));
                req.destroy();
            }
            const chunks = [];
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                resolve(Buffer$1.concat(chunks));
                req.destroy();
            });
        });
        req.end();
    });
}

const isImdsCredentials = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.AccessKeyId === "string" &&
    typeof arg.SecretAccessKey === "string" &&
    typeof arg.Token === "string" &&
    typeof arg.Expiration === "string";
const fromImdsCredentials = (creds) => ({
    accessKeyId: creds.AccessKeyId,
    secretAccessKey: creds.SecretAccessKey,
    sessionToken: creds.Token,
    expiration: new Date(creds.Expiration),
});

const DEFAULT_TIMEOUT = 1000;
const DEFAULT_MAX_RETRIES = 0;
const providerConfigFromInit = ({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT, }) => ({ maxRetries, timeout });

const retry = (toRetry, maxRetries) => {
    let promise = toRetry();
    for (let i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
    }
    return promise;
};

const ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
const ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
const fromContainerMetadata = (init = {}) => {
    const { timeout, maxRetries } = providerConfigFromInit(init);
    return () => retry(async () => {
        const requestOptions = await getCmdsUri();
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!isImdsCredentials(credsResponse)) {
            throw new CredentialsProviderError("Invalid response received from instance metadata service.");
        }
        return fromImdsCredentials(credsResponse);
    }, maxRetries);
};
const requestFromEcsImds = async (timeout, options) => {
    if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
            ...options.headers,
            Authorization: process.env[ENV_CMDS_AUTH_TOKEN],
        };
    }
    const buffer = await httpRequest({
        ...options,
        timeout,
    });
    return buffer.toString();
};
const CMDS_IP = "169.254.170.2";
const GREENGRASS_HOSTS = {
    localhost: true,
    "127.0.0.1": true,
};
const GREENGRASS_PROTOCOLS = {
    "http:": true,
    "https:": true,
};
const getCmdsUri = async () => {
    if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
            hostname: CMDS_IP,
            path: process.env[ENV_CMDS_RELATIVE_URI],
        };
    }
    if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = parse$1(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
            throw new CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, false);
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
            throw new CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, false);
        }
        return {
            ...parsed,
            port: parsed.port ? parseInt(parsed.port, 10) : undefined,
        };
    }
    throw new CredentialsProviderError("The container metadata credential provider cannot be used unless" +
        ` the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment` +
        " variable is set", false);
};

class InstanceMetadataV1FallbackError extends CredentialsProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "InstanceMetadataV1FallbackError";
        Object.setPrototypeOf(this, InstanceMetadataV1FallbackError.prototype);
    }
}

var Endpoint;
(function (Endpoint) {
    Endpoint["IPv4"] = "http://169.254.169.254";
    Endpoint["IPv6"] = "http://[fd00:ec2::254]";
})(Endpoint || (Endpoint = {}));

const ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
const CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
const ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_ENDPOINT_NAME],
    configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
    default: undefined,
};

var EndpointMode;
(function (EndpointMode) {
    EndpointMode["IPv4"] = "IPv4";
    EndpointMode["IPv6"] = "IPv6";
})(EndpointMode || (EndpointMode = {}));

const ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
const CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
const ENDPOINT_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_ENDPOINT_MODE_NAME],
    configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
    default: EndpointMode.IPv4,
};

const getInstanceMetadataEndpoint = async () => parseUrl((await getFromEndpointConfig()) || (await getFromEndpointModeConfig()));
const getFromEndpointConfig = async () => loadConfig(ENDPOINT_CONFIG_OPTIONS)();
const getFromEndpointModeConfig = async () => {
    const endpointMode = await loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
    switch (endpointMode) {
        case EndpointMode.IPv4:
            return Endpoint.IPv4;
        case EndpointMode.IPv6:
            return Endpoint.IPv6;
        default:
            throw new Error(`Unsupported endpoint mode: ${endpointMode}.` + ` Select from ${Object.values(EndpointMode)}`);
    }
};

const STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
const STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
const STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
const getExtendedInstanceMetadataCredentials = (credentials, logger) => {
    const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS +
        Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
    const newExpiration = new Date(Date.now() + refreshInterval * 1000);
    logger.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these " +
        "credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: " +
        STATIC_STABILITY_DOC_URL);
    const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
    return {
        ...credentials,
        ...(originalExpiration ? { originalExpiration } : {}),
        expiration: newExpiration,
    };
};

const staticStabilityProvider = (provider, options = {}) => {
    const logger = options?.logger || console;
    let pastCredentials;
    return async () => {
        let credentials;
        try {
            credentials = await provider();
            if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
                credentials = getExtendedInstanceMetadataCredentials(credentials, logger);
            }
        }
        catch (e) {
            if (pastCredentials) {
                logger.warn("Credential renew failed: ", e);
                credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger);
            }
            else {
                throw e;
            }
        }
        pastCredentials = credentials;
        return credentials;
    };
};

const IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
const IMDS_TOKEN_PATH = "/latest/api/token";
const AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
const PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
const X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
const fromInstanceMetadata = (init = {}) => staticStabilityProvider(getInstanceImdsProvider(init), { logger: init.logger });
const getInstanceImdsProvider = (init) => {
    let disableFetchToken = false;
    const { logger, profile } = init;
    const { timeout, maxRetries } = providerConfigFromInit(init);
    const getCredentials = async (maxRetries, options) => {
        const isImdsV1Fallback = disableFetchToken || options.headers?.[X_AWS_EC2_METADATA_TOKEN] == null;
        if (isImdsV1Fallback) {
            let fallbackBlockedFromProfile = false;
            let fallbackBlockedFromProcessEnv = false;
            const configValue = await loadConfig({
                environmentVariableSelector: (env) => {
                    const envValue = env[AWS_EC2_METADATA_V1_DISABLED];
                    fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
                    if (envValue === undefined) {
                        throw new CredentialsProviderError(`${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`);
                    }
                    return fallbackBlockedFromProcessEnv;
                },
                configFileSelector: (profile) => {
                    const profileValue = profile[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
                    fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
                    return fallbackBlockedFromProfile;
                },
                default: false,
            }, {
                profile,
            })();
            if (init.ec2MetadataV1Disabled || configValue) {
                const causes = [];
                if (init.ec2MetadataV1Disabled)
                    causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
                if (fallbackBlockedFromProfile)
                    causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
                if (fallbackBlockedFromProcessEnv)
                    causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
                throw new InstanceMetadataV1FallbackError(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(", ")}].`);
            }
        }
        const imdsProfile = (await retry(async () => {
            let profile;
            try {
                profile = await getProfile(options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return profile;
        }, maxRetries)).trim();
        return retry(async () => {
            let creds;
            try {
                creds = await getCredentialsFromProfile(imdsProfile, options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return creds;
        }, maxRetries);
    };
    return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
            logger?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
            return getCredentials(maxRetries, { ...endpoint, timeout });
        }
        else {
            let token;
            try {
                token = (await getMetadataToken({ ...endpoint, timeout })).toString();
            }
            catch (error) {
                if (error?.statusCode === 400) {
                    throw Object.assign(error, {
                        message: "EC2 Metadata token request returned error",
                    });
                }
                else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
                    disableFetchToken = true;
                }
                logger?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
                return getCredentials(maxRetries, { ...endpoint, timeout });
            }
            return getCredentials(maxRetries, {
                ...endpoint,
                headers: {
                    [X_AWS_EC2_METADATA_TOKEN]: token,
                },
                timeout,
            });
        }
    };
};
const getMetadataToken = async (options) => httpRequest({
    ...options,
    path: IMDS_TOKEN_PATH,
    method: "PUT",
    headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600",
    },
});
const getProfile = async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString();
const getCredentialsFromProfile = async (profile, options) => {
    const credsResponse = JSON.parse((await httpRequest({
        ...options,
        path: IMDS_PATH + profile,
    })).toString());
    if (!isImdsCredentials(credsResponse)) {
        throw new CredentialsProviderError("Invalid response received from instance metadata service.");
    }
    return fromImdsCredentials(credsResponse);
};

const resolveCredentialSource = (credentialSource, profileName) => {
    const sourceProvidersMap = {
        EcsContainer: fromContainerMetadata,
        Ec2InstanceMetadata: fromInstanceMetadata,
        Environment: fromEnv,
    };
    if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource]();
    }
    else {
        throw new CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
            `expected EcsContainer or Ec2InstanceMetadata or Environment.`);
    }
};

const isAssumeRoleProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 &&
    (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg));
const isAssumeRoleWithSourceProfile = (arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
const isAssumeRoleWithProviderProfile = (arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
const resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (!options.roleAssumer) {
        throw new CredentialsProviderError(`Profile ${profileName} requires a role to be assumed, but no role assumption callback was provided.`, false);
    }
    const { source_profile } = data;
    if (source_profile && source_profile in visitedProfiles) {
        throw new CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile` +
            ` ${getProfileName(options)}. Profiles visited: ` +
            Object.keys(visitedProfiles).join(", "), false);
    }
    const sourceCredsProvider = source_profile
        ? resolveProfileData(source_profile, profiles, options, {
            ...visitedProfiles,
            [source_profile]: true,
        })
        : resolveCredentialSource(data.credential_source, profileName)();
    const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
        DurationSeconds: parseInt(data.duration_seconds || "3600", 10),
    };
    const { mfa_serial } = data;
    if (mfa_serial) {
        if (!options.mfaCodeProvider) {
            throw new CredentialsProviderError(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
    }
    const sourceCreds = await sourceCredsProvider;
    return options.roleAssumer(sourceCreds, params);
};

const getValidatedProcessCredentials = (profileName, data) => {
    if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
    }
    if (data.AccessKeyId === undefined || data.SecretAccessKey === undefined) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
    }
    if (data.Expiration) {
        const currentTime = new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
            throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
    }
    return {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...(data.SessionToken && { sessionToken: data.SessionToken }),
        ...(data.Expiration && { expiration: new Date(data.Expiration) }),
        ...(data.CredentialScope && { credentialScope: data.CredentialScope }),
    };
};

const resolveProcessCredentials$1 = async (profileName, profiles) => {
    const profile = profiles[profileName];
    if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== undefined) {
            const execPromise = promisify(exec);
            try {
                const { stdout } = await execPromise(credentialProcess);
                let data;
                try {
                    data = JSON.parse(stdout.trim());
                }
                catch {
                    throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
                }
                return getValidatedProcessCredentials(profileName, data);
            }
            catch (error) {
                throw new CredentialsProviderError(error.message);
            }
        }
        else {
            throw new CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`);
        }
    }
    else {
        throw new CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
    }
};

const fromProcess = (init = {}) => async () => {
    const profiles = await parseKnownFiles(init);
    return resolveProcessCredentials$1(getProfileName(init), profiles);
};

const isProcessProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string";
const resolveProcessCredentials = async (options, profile) => fromProcess({
    ...options,
    profile,
})();

const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_session === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");

const resolveClientEndpointParameters$1 = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal",
    };
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

var name = "@aws-sdk/client-sso";
var description = "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native";
var version = "3.490.0";
var scripts = {
	build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
	"build:cjs": "tsc -p tsconfig.cjs.json",
	"build:es": "tsc -p tsconfig.es.json",
	"build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
	"build:types": "tsc -p tsconfig.types.json",
	"build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
	clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
	"extract:docs": "api-extractor run --local",
	"generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
};
var main = "./dist-cjs/index.js";
var types = "./dist-types/index.d.ts";
var module = "./dist-es/index.js";
var sideEffects = false;
var dependencies = {
	"@aws-crypto/sha256-browser": "3.0.0",
	"@aws-crypto/sha256-js": "3.0.0",
	"@aws-sdk/core": "3.490.0",
	"@aws-sdk/middleware-host-header": "3.489.0",
	"@aws-sdk/middleware-logger": "3.489.0",
	"@aws-sdk/middleware-recursion-detection": "3.489.0",
	"@aws-sdk/middleware-user-agent": "3.489.0",
	"@aws-sdk/region-config-resolver": "3.489.0",
	"@aws-sdk/types": "3.489.0",
	"@aws-sdk/util-endpoints": "3.489.0",
	"@aws-sdk/util-user-agent-browser": "3.489.0",
	"@aws-sdk/util-user-agent-node": "3.489.0",
	"@smithy/config-resolver": "^2.0.23",
	"@smithy/core": "^1.2.2",
	"@smithy/fetch-http-handler": "^2.3.2",
	"@smithy/hash-node": "^2.0.18",
	"@smithy/invalid-dependency": "^2.0.16",
	"@smithy/middleware-content-length": "^2.0.18",
	"@smithy/middleware-endpoint": "^2.3.0",
	"@smithy/middleware-retry": "^2.0.26",
	"@smithy/middleware-serde": "^2.0.16",
	"@smithy/middleware-stack": "^2.0.10",
	"@smithy/node-config-provider": "^2.1.9",
	"@smithy/node-http-handler": "^2.2.2",
	"@smithy/protocol-http": "^3.0.12",
	"@smithy/smithy-client": "^2.2.1",
	"@smithy/types": "^2.8.0",
	"@smithy/url-parser": "^2.0.16",
	"@smithy/util-base64": "^2.0.1",
	"@smithy/util-body-length-browser": "^2.0.1",
	"@smithy/util-body-length-node": "^2.1.0",
	"@smithy/util-defaults-mode-browser": "^2.0.24",
	"@smithy/util-defaults-mode-node": "^2.0.32",
	"@smithy/util-endpoints": "^1.0.8",
	"@smithy/util-retry": "^2.0.9",
	"@smithy/util-utf8": "^2.0.2",
	tslib: "^2.5.0"
};
var devDependencies = {
	"@smithy/service-client-documentation-generator": "^2.0.0",
	"@tsconfig/node14": "1.0.3",
	"@types/node": "^14.14.31",
	concurrently: "7.0.0",
	"downlevel-dts": "0.10.1",
	rimraf: "3.0.2",
	typescript: "~4.9.5"
};
var engines = {
	node: ">=14.0.0"
};
var typesVersions = {
	"<4.0": {
		"dist-types/*": [
			"dist-types/ts3.4/*"
		]
	}
};
var files = [
	"dist-*/**"
];
var author = {
	name: "AWS SDK for JavaScript Team",
	url: "https://aws.amazon.com/javascript/"
};
var license = "Apache-2.0";
var browser = {
	"./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
};
var homepage = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso";
var repository = {
	type: "git",
	url: "https://github.com/aws/aws-sdk-js-v3.git",
	directory: "clients/client-sso"
};
var packageInfo = {
	name: name,
	description: description,
	version: version,
	scripts: scripts,
	main: main,
	types: types,
	module: module,
	sideEffects: sideEffects,
	dependencies: dependencies,
	devDependencies: devDependencies,
	engines: engines,
	typesVersions: typesVersions,
	files: files,
	author: author,
	license: license,
	browser: browser,
	"react-native": {
	"./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
},
	homepage: homepage,
	repository: repository
};

const isCrtAvailable = () => {
    return null;
};

const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
const UA_APP_ID_INI_NAME = "sdk-ua-app-id";
const defaultUserAgent = ({ serviceId, clientVersion }) => {
    const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.0"],
        [`os/${platform()}`, release()],
        ["lang/js"],
        ["md/nodejs", `${versions.node}`],
    ];
    const crtAvailable = isCrtAvailable();
    if (crtAvailable) {
        sections.push(crtAvailable);
    }
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    if (env.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${env.AWS_EXECUTION_ENV}`]);
    }
    const appIdPromise = loadConfig({
        environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
        configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
        default: undefined,
    })();
    let resolvedUserAgent = undefined;
    return async () => {
        if (!resolvedUserAgent) {
            const appId = await appIdPromise;
            resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
    };
};

class Hash {
    constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
    }
    update(toHash, encoding) {
        this.hash.update(toUint8Array(castSourceData(toHash, encoding)));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
    reset() {
        this.hash = this.secret
            ? createHmac(this.algorithmIdentifier, castSourceData(this.secret))
            : createHash(this.algorithmIdentifier);
    }
}
function castSourceData(toCast, encoding) {
    if (Buffer$1.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return fromString(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return fromArrayBuffer(toCast);
}

const calculateBodyLength = (body) => {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        return Buffer.from(body).length;
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
    }
    else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return lstatSync(body.path).size;
    }
    else if (typeof body.fd === "number") {
        return fstatSync(body.fd).size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};

const u$3 = "required", v$3 = "fn", w$1 = "argv", x$1 = "ref";
const a$3 = true, b$3 = "isSet", c$3 = "booleanEquals", d$3 = "error", e$3 = "endpoint", f$3 = "tree", g$3 = "PartitionResult", h$3 = "getAttr", i$3 = { [u$3]: false, "type": "String" }, j$3 = { [u$3]: true, "default": false, "type": "Boolean" }, k$3 = { [x$1]: "Endpoint" }, l$3 = { [v$3]: c$3, [w$1]: [{ [x$1]: "UseFIPS" }, true] }, m$3 = { [v$3]: c$3, [w$1]: [{ [x$1]: "UseDualStack" }, true] }, n$3 = {}, o$3 = { [v$3]: h$3, [w$1]: [{ [x$1]: g$3 }, "supportsFIPS"] }, p$3 = { [x$1]: g$3 }, q$3 = { [v$3]: c$3, [w$1]: [true, { [v$3]: h$3, [w$1]: [p$3, "supportsDualStack"] }] }, r$3 = [l$3], s$3 = [m$3], t$3 = [{ [x$1]: "Region" }];
const _data$3 = { version: "1.0", parameters: { Region: i$3, UseDualStack: j$3, UseFIPS: j$3, Endpoint: i$3 }, rules: [{ conditions: [{ [v$3]: b$3, [w$1]: [k$3] }], rules: [{ conditions: r$3, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d$3 }, { conditions: s$3, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d$3 }, { endpoint: { url: k$3, properties: n$3, headers: n$3 }, type: e$3 }], type: f$3 }, { conditions: [{ [v$3]: b$3, [w$1]: t$3 }], rules: [{ conditions: [{ [v$3]: "aws.partition", [w$1]: t$3, assign: g$3 }], rules: [{ conditions: [l$3, m$3], rules: [{ conditions: [{ [v$3]: c$3, [w$1]: [a$3, o$3] }, q$3], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n$3, headers: n$3 }, type: e$3 }], type: f$3 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d$3 }], type: f$3 }, { conditions: r$3, rules: [{ conditions: [{ [v$3]: c$3, [w$1]: [o$3, a$3] }], rules: [{ conditions: [{ [v$3]: "stringEquals", [w$1]: [{ [v$3]: h$3, [w$1]: [p$3, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n$3, headers: n$3 }, type: e$3 }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n$3, headers: n$3 }, type: e$3 }], type: f$3 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d$3 }], type: f$3 }, { conditions: s$3, rules: [{ conditions: [q$3], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n$3, headers: n$3 }, type: e$3 }], type: f$3 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d$3 }], type: f$3 }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n$3, headers: n$3 }, type: e$3 }], type: f$3 }], type: f$3 }, { error: "Invalid Configuration: Missing Region", type: d$3 }] };
const ruleSet$3 = _data$3;

const defaultEndpointResolver$3 = (endpointParams, context = {}) => {
    return resolveEndpoint(ruleSet$3, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};

const getRuntimeConfig$6 = (config) => {
    return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver$3,
        extensions: config?.extensions ?? [],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8,
    };
};

const AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
const AWS_REGION_ENV = "AWS_REGION";
const AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
const ENV_IMDS_DISABLED$1 = "AWS_EC2_METADATA_DISABLED";
const DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
const IMDS_REGION_PATH = "/latest/meta-data/placement/region";

const AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
const AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
const NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
    },
    configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
    },
    default: "legacy",
};

const resolveDefaultsModeConfig = ({ region = loadConfig(NODE_REGION_CONFIG_OPTIONS), defaultsMode = loadConfig(NODE_DEFAULTS_MODE_CONFIG_OPTIONS), } = {}) => memoize(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
        case "auto":
            return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
            return Promise.resolve(mode?.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
const resolveNodeDefaultsModeAuto = async (clientRegion) => {
    if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
            return "standard";
        }
        if (resolvedRegion === inferredRegion) {
            return "in-region";
        }
        else {
            return "cross-region";
        }
    }
    return "standard";
};
const inferPhysicalRegion = async () => {
    if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
    }
    if (!process.env[ENV_IMDS_DISABLED$1]) {
        try {
            const endpoint = await getInstanceMetadataEndpoint();
            return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        }
        catch (e) {
        }
    }
};

const getRuntimeConfig$5 = (config) => {
    emitWarningIfUnsupportedVersion$1(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig$6(config);
    emitWarningIfUnsupportedVersion(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};

const getAwsRegionExtensionConfiguration = (runtimeConfig) => {
    let runtimeConfigRegion = async () => {
        if (runtimeConfig.region === undefined) {
            throw new Error("Region is missing from runtimeConfig");
        }
        const region = runtimeConfig.region;
        if (typeof region === "string") {
            return region;
        }
        return region();
    };
    return {
        setRegion(region) {
            runtimeConfigRegion = region;
        },
        region() {
            return runtimeConfigRegion;
        },
    };
};
const resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
    return {
        region: awsRegionExtensionConfiguration.region(),
    };
};

const asPartial$3 = (t) => t;
const resolveRuntimeExtensions$3 = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial$3(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...asPartial$3(getDefaultExtensionConfiguration(runtimeConfig)),
        ...asPartial$3(getHttpHandlerExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    };
};

class SSOClient extends Client {
    constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig$5(configuration || {});
        const _config_1 = resolveClientEndpointParameters$1(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        const _config_7 = resolveRuntimeExtensions$3(_config_6, configuration?.extensions || []);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

class SSOServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOServiceException.prototype);
    }
}

let InvalidRequestException$1 = class InvalidRequestException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
    }
};
class ResourceNotFoundException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
class TooManyRequestsException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
class UnauthorizedException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
const GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
const RoleCredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.secretAccessKey && { secretAccessKey: SENSITIVE_STRING }),
    ...(obj.sessionToken && { sessionToken: SENSITIVE_STRING }),
});
const GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }),
});
const ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
const ListAccountsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
const LogoutRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

const se_GetRoleCredentialsCommand = async (input, context) => {
    const b = requestBuilder(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/federation/credentials");
    const query = map({
        [_rn]: [, expectNonNull(input[_rN], `roleName`)],
        [_ai]: [, expectNonNull(input[_aI], `accountId`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListAccountRolesCommand = async (input, context) => {
    const b = requestBuilder(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/assignment/roles");
    const query = map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
        [_ai]: [, expectNonNull(input[_aI], `accountId`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListAccountsCommand = async (input, context) => {
    const b = requestBuilder(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/assignment/accounts");
    const query = map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_LogoutCommand = async (input, context) => {
    const b = requestBuilder(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/logout");
    let body;
    b.m("POST").h(headers).b(body);
    return b.build();
};
const de_GetRoleCredentialsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetRoleCredentialsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata$2(output),
    });
    const data = expectNonNull(expectObject(await parseBody$2(output.body, context)), "body");
    const doc = take(data, {
        roleCredentials: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetRoleCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$2(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode$2(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes$1(parsedOutput);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$2({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListAccountRolesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListAccountRolesCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata$2(output),
    });
    const data = expectNonNull(expectObject(await parseBody$2(output.body, context)), "body");
    const doc = take(data, {
        nextToken: expectString,
        roleList: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListAccountRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$2(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode$2(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes$1(parsedOutput);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$2({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListAccountsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListAccountsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata$2(output),
    });
    const data = expectNonNull(expectObject(await parseBody$2(output.body, context)), "body");
    const doc = take(data, {
        accountList: _json,
        nextToken: expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$2(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode$2(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes$1(parsedOutput);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$2({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_LogoutCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_LogoutCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata$2(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_LogoutCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$2(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode$2(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes$1(parsedOutput);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$2({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const throwDefaultError$2 = withBaseException(SSOServiceException);
const de_InvalidRequestExceptionRes$1 = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidRequestException$1({
        $metadata: deserializeMetadata$2(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata$2(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new TooManyRequestsException({
        $metadata: deserializeMetadata$2(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_UnauthorizedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new UnauthorizedException({
        $metadata: deserializeMetadata$2(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const deserializeMetadata$2 = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString$2 = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const _aI = "accountId";
const _aT = "accessToken";
const _ai = "account_id";
const _mR = "maxResults";
const _mr = "max_result";
const _nT = "nextToken";
const _nt = "next_token";
const _rN = "roleName";
const _rn = "role_name";
const _xasbt = "x-amz-sso_bearer_token";
const parseBody$2 = (streamBody, context) => collectBodyString$2(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody$2 = async (errorBody, context) => {
    const value = await parseBody$2(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode$2 = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};

class GetRoleCredentialsCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SWBPortalService", "GetRoleCredentials", {})
    .n("SSOClient", "GetRoleCredentialsCommand")
    .f(GetRoleCredentialsRequestFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog)
    .ser(se_GetRoleCredentialsCommand)
    .de(de_GetRoleCredentialsCommand)
    .build() {
}

class ListAccountRolesCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SWBPortalService", "ListAccountRoles", {})
    .n("SSOClient", "ListAccountRolesCommand")
    .f(ListAccountRolesRequestFilterSensitiveLog, void 0)
    .ser(se_ListAccountRolesCommand)
    .de(de_ListAccountRolesCommand)
    .build() {
}

class ListAccountsCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SWBPortalService", "ListAccounts", {})
    .n("SSOClient", "ListAccountsCommand")
    .f(ListAccountsRequestFilterSensitiveLog, void 0)
    .ser(se_ListAccountsCommand)
    .de(de_ListAccountsCommand)
    .build() {
}

class LogoutCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SWBPortalService", "Logout", {})
    .n("SSOClient", "LogoutCommand")
    .f(LogoutRequestFilterSensitiveLog, void 0)
    .ser(se_LogoutCommand)
    .de(de_LogoutCommand)
    .build() {
}

const commands$3 = {
    GetRoleCredentialsCommand,
    ListAccountRolesCommand,
    ListAccountsCommand,
    LogoutCommand,
};
class SSO extends SSOClient {
}
createAggregatedClient(commands$3, SSO);

var resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssooidc",
    };
};
var package_default = { version: "3.429.0" };
var s$2 = "required";
var t$2 = "fn";
var u$2 = "argv";
var v$2 = "ref";
var a$2 = "isSet";
var b$2 = "tree";
var c$2 = "error";
var d$2 = "endpoint";
var e$2 = "PartitionResult";
var f$2 = "getAttr";
var g$2 = { [s$2]: false, type: "String" };
var h$2 = { [s$2]: true, default: false, type: "Boolean" };
var i$2 = { [v$2]: "Endpoint" };
var j$2 = { [t$2]: "booleanEquals", [u$2]: [{ [v$2]: "UseFIPS" }, true] };
var k$2 = { [t$2]: "booleanEquals", [u$2]: [{ [v$2]: "UseDualStack" }, true] };
var l$2 = {};
var m$2 = { [t$2]: "booleanEquals", [u$2]: [true, { [t$2]: f$2, [u$2]: [{ [v$2]: e$2 }, "supportsFIPS"] }] };
var n$2 = { [v$2]: e$2 };
var o$2 = { [t$2]: "booleanEquals", [u$2]: [true, { [t$2]: f$2, [u$2]: [n$2, "supportsDualStack"] }] };
var p$2 = [j$2];
var q$2 = [k$2];
var r$2 = [{ [v$2]: "Region" }];
var _data$2 = {
    version: "1.0",
    parameters: { Region: g$2, UseDualStack: h$2, UseFIPS: h$2, Endpoint: g$2 },
    rules: [
        {
            conditions: [{ [t$2]: a$2, [u$2]: [i$2] }],
            type: b$2,
            rules: [
                { conditions: p$2, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c$2 },
                { conditions: q$2, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c$2 },
                { endpoint: { url: i$2, properties: l$2, headers: l$2 }, type: d$2 },
            ],
        },
        {
            conditions: [{ [t$2]: a$2, [u$2]: r$2 }],
            type: b$2,
            rules: [
                {
                    conditions: [{ [t$2]: "aws.partition", [u$2]: r$2, assign: e$2 }],
                    type: b$2,
                    rules: [
                        {
                            conditions: [j$2, k$2],
                            type: b$2,
                            rules: [
                                {
                                    conditions: [m$2, o$2],
                                    type: b$2,
                                    rules: [
                                        {
                                            endpoint: {
                                                url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                properties: l$2,
                                                headers: l$2,
                                            },
                                            type: d$2,
                                        },
                                    ],
                                },
                                { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c$2 },
                            ],
                        },
                        {
                            conditions: p$2,
                            type: b$2,
                            rules: [
                                {
                                    conditions: [m$2],
                                    type: b$2,
                                    rules: [
                                        {
                                            conditions: [{ [t$2]: "stringEquals", [u$2]: ["aws-us-gov", { [t$2]: f$2, [u$2]: [n$2, "name"] }] }],
                                            endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: l$2, headers: l$2 },
                                            type: d$2,
                                        },
                                        {
                                            endpoint: {
                                                url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                                                properties: l$2,
                                                headers: l$2,
                                            },
                                            type: d$2,
                                        },
                                    ],
                                },
                                { error: "FIPS is enabled but this partition does not support FIPS", type: c$2 },
                            ],
                        },
                        {
                            conditions: q$2,
                            type: b$2,
                            rules: [
                                {
                                    conditions: [o$2],
                                    type: b$2,
                                    rules: [
                                        {
                                            endpoint: {
                                                url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                                properties: l$2,
                                                headers: l$2,
                                            },
                                            type: d$2,
                                        },
                                    ],
                                },
                                { error: "DualStack is enabled but this partition does not support DualStack", type: c$2 },
                            ],
                        },
                        {
                            endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: l$2, headers: l$2 },
                            type: d$2,
                        },
                    ],
                },
            ],
        },
        { error: "Invalid Configuration: Missing Region", type: c$2 },
    ],
};
var ruleSet$2 = _data$2;
var defaultEndpointResolver$2 = (endpointParams, context = {}) => {
    return resolveEndpoint(ruleSet$2, {
        endpointParams,
        logger: context.logger,
    });
};
var getRuntimeConfig$4 = (config) => ({
    apiVersion: "2019-06-10",
    base64Decoder: config?.base64Decoder ?? fromBase64,
    base64Encoder: config?.base64Encoder ?? toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? defaultEndpointResolver$2,
    extensions: config?.extensions ?? [],
    logger: config?.logger ?? new NoOpLogger(),
    serviceId: config?.serviceId ?? "SSO OIDC",
    urlParser: config?.urlParser ?? parseUrl,
    utf8Decoder: config?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? toUtf8,
});
var getRuntimeConfig2 = (config) => {
    emitWarningIfUnsupportedVersion$1(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig$4(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};
var asPartial$2 = (t2) => t2;
var resolveRuntimeExtensions$2 = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial$2(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...asPartial$2(getDefaultExtensionConfiguration(runtimeConfig)),
        ...asPartial$2(getHttpHandlerExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    };
};
var SSOOIDCClient = class extends Client {
    constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig2(configuration || {});
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        const _config_7 = resolveRuntimeExtensions$2(_config_6, configuration?.extensions || []);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
};
var SSOOIDCServiceException = class _SSOOIDCServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOOIDCServiceException.prototype);
    }
};
var AccessDeniedException$1 = class _AccessDeniedException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var AuthorizationPendingException = class _AuthorizationPendingException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AuthorizationPendingException",
            $fault: "client",
            ...opts,
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var ExpiredTokenException = class _ExpiredTokenException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var InternalServerException = class _InternalServerException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, _InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var InvalidClientException = class _InvalidClientException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var InvalidGrantException = class _InvalidGrantException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidGrantException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var InvalidRequestException = class _InvalidRequestException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var InvalidScopeException = class _InvalidScopeException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidScopeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var SlowDownException = class _SlowDownException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "SlowDownException",
            $fault: "client",
            ...opts,
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var UnauthorizedClientException = class _UnauthorizedClientException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var UnsupportedGrantTypeException = class _UnsupportedGrantTypeException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedGrantTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var InvalidClientMetadataException = class _InvalidClientMetadataException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientMetadataException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, _InvalidClientMetadataException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
};
var se_CreateTokenCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/token`;
    let body;
    body = JSON.stringify(take(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (_) => _json(_),
    }));
    return new HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
var se_RegisterClientCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/client/register`;
    let body;
    body = JSON.stringify(take(input, {
        clientName: [],
        clientType: [],
        scopes: (_) => _json(_),
    }));
    return new HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
var se_StartDeviceAuthorizationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}/device_authorization`;
    let body;
    body = JSON.stringify(take(input, {
        clientId: [],
        clientSecret: [],
        startUrl: [],
    }));
    return new HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
var de_CreateTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CreateTokenCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata$1(output),
    });
    const data = expectNonNull(expectObject(await parseBody$1(output.body, context)), "body");
    const doc = take(data, {
        accessToken: expectString,
        expiresIn: expectInt32,
        idToken: expectString,
        refreshToken: expectString,
        tokenType: expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
var de_CreateTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$1(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode$1(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes$1(parsedOutput);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
            throw await de_AuthorizationPendingExceptionRes(parsedOutput);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes(parsedOutput);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await de_InternalServerExceptionRes(parsedOutput);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
            throw await de_InvalidClientExceptionRes(parsedOutput);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
            throw await de_InvalidGrantExceptionRes(parsedOutput);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await de_InvalidScopeExceptionRes(parsedOutput);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
            throw await de_SlowDownExceptionRes(parsedOutput);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await de_UnauthorizedClientExceptionRes(parsedOutput);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
            throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$1({
                output,
                parsedBody,
                errorCode,
            });
    }
};
var de_RegisterClientCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_RegisterClientCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata$1(output),
    });
    const data = expectNonNull(expectObject(await parseBody$1(output.body, context)), "body");
    const doc = take(data, {
        authorizationEndpoint: expectString,
        clientId: expectString,
        clientIdIssuedAt: expectLong,
        clientSecret: expectString,
        clientSecretExpiresAt: expectLong,
        tokenEndpoint: expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
var de_RegisterClientCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$1(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode$1(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await de_InternalServerExceptionRes(parsedOutput);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
            throw await de_InvalidClientMetadataExceptionRes(parsedOutput);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await de_InvalidScopeExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$1({
                output,
                parsedBody,
                errorCode,
            });
    }
};
var de_StartDeviceAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_StartDeviceAuthorizationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata$1(output),
    });
    const data = expectNonNull(expectObject(await parseBody$1(output.body, context)), "body");
    const doc = take(data, {
        deviceCode: expectString,
        expiresIn: expectInt32,
        interval: expectInt32,
        userCode: expectString,
        verificationUri: expectString,
        verificationUriComplete: expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
var de_StartDeviceAuthorizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody$1(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode$1(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await de_InternalServerExceptionRes(parsedOutput);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
            throw await de_InvalidClientExceptionRes(parsedOutput);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
            throw await de_SlowDownExceptionRes(parsedOutput);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await de_UnauthorizedClientExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError$1({
                output,
                parsedBody,
                errorCode,
            });
    }
};
var throwDefaultError$1 = withBaseException(SSOOIDCServiceException);
var de_AccessDeniedExceptionRes$1 = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new AccessDeniedException$1({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_AuthorizationPendingExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new AuthorizationPendingException({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_InternalServerExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InternalServerException({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidClientExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidClientException({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidClientMetadataExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidClientMetadataException({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidGrantExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidGrantException({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidRequestException({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_InvalidScopeExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidScopeException({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_SlowDownExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new SlowDownException({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_UnauthorizedClientExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new UnauthorizedClientException({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var de_UnsupportedGrantTypeExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        error: expectString,
        error_description: expectString,
    });
    Object.assign(contents, doc);
    const exception = new UnsupportedGrantTypeException({
        $metadata: deserializeMetadata$1(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
var deserializeMetadata$1 = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
var collectBodyString$1 = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
var parseBody$1 = (streamBody, context) => collectBodyString$1(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
var parseErrorBody$1 = async (errorBody, context) => {
    const value = await parseBody$1(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
var loadRestJsonErrorCode$1 = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k2) => k2.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== void 0) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== void 0) {
        return sanitizeErrorCode(data["__type"]);
    }
};
class CreateTokenCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, _CreateTokenCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOOIDCClient";
        const commandName = "CreateTokenCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSSSOOIDCService",
                operation: "CreateToken",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_CreateTokenCommand(input, context);
    }
    deserialize(output, context) {
        return de_CreateTokenCommand(output, context);
    }
}
class RegisterClientCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, _RegisterClientCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOOIDCClient";
        const commandName = "RegisterClientCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSSSOOIDCService",
                operation: "RegisterClient",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_RegisterClientCommand(input, context);
    }
    deserialize(output, context) {
        return de_RegisterClientCommand(output, context);
    }
}
class StartDeviceAuthorizationCommand extends Command {
    constructor(input) {
        super();
        this.input = input;
    }
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, _StartDeviceAuthorizationCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOOIDCClient";
        const commandName = "StartDeviceAuthorizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSSSOOIDCService",
                operation: "StartDeviceAuthorization",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_StartDeviceAuthorizationCommand(input, context);
    }
    deserialize(output, context) {
        return de_StartDeviceAuthorizationCommand(output, context);
    }
}
var commands$2 = {
    CreateTokenCommand,
    RegisterClientCommand,
    StartDeviceAuthorizationCommand,
};
var SSOOIDC = class extends SSOOIDCClient {
};
createAggregatedClient(commands$2, SSOOIDC);

const EXPIRE_WINDOW_MS = 5 * 60 * 1000;
const REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;

const ssoOidcClientsHash = {};
const getSsoOidcClient = (ssoRegion) => {
    if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
    }
    const ssoOidcClient = new SSOOIDCClient({ region: ssoRegion });
    ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
    return ssoOidcClient;
};

const getNewSsoOidcToken = (ssoToken, ssoRegion) => {
    const ssoOidcClient = getSsoOidcClient(ssoRegion);
    return ssoOidcClient.send(new CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token",
    }));
};

const validateTokenExpiry = (token) => {
    if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
    }
};

const validateTokenKey = (key, value, forRefresh = false) => {
    if (typeof value === "undefined") {
        throw new TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
    }
};

const { writeFile } = promises;
const writeSSOTokenToFile = (id, ssoToken) => {
    const tokenFilepath = getSSOTokenFilepath(id);
    const tokenString = JSON.stringify(ssoToken, null, 2);
    return writeFile(tokenFilepath, tokenString);
};

const lastRefreshAttemptTime = new Date(0);
const fromSso = (init = {}) => async () => {
    const profiles = await parseKnownFiles(init);
    const profileName = getProfileName(init);
    const profile = profiles[profileName];
    if (!profile) {
        throw new TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
    }
    else if (!profile["sso_session"]) {
        throw new TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
    }
    const ssoSessionName = profile["sso_session"];
    const ssoSessions = await loadSsoSessionData(init);
    const ssoSession = ssoSessions[ssoSessionName];
    if (!ssoSession) {
        throw new TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
    }
    for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
            throw new TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
    }
    ssoSession["sso_start_url"];
    const ssoRegion = ssoSession["sso_region"];
    let ssoToken;
    try {
        ssoToken = await getSSOTokenFromFile(ssoSessionName);
    }
    catch (e) {
        throw new TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
    }
    validateTokenKey("accessToken", ssoToken.accessToken);
    validateTokenKey("expiresAt", ssoToken.expiresAt);
    const { accessToken, expiresAt } = ssoToken;
    const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
    if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
    }
    if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1000) {
        validateTokenExpiry(existingToken);
        return existingToken;
    }
    validateTokenKey("clientId", ssoToken.clientId, true);
    validateTokenKey("clientSecret", ssoToken.clientSecret, true);
    validateTokenKey("refreshToken", ssoToken.refreshToken, true);
    try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1000);
        try {
            await writeSSOTokenToFile(ssoSessionName, {
                ...ssoToken,
                accessToken: newSsoOidcToken.accessToken,
                expiresAt: newTokenExpiration.toISOString(),
                refreshToken: newSsoOidcToken.refreshToken,
            });
        }
        catch (error) {
        }
        return {
            token: newSsoOidcToken.accessToken,
            expiration: newTokenExpiration,
        };
    }
    catch (error) {
        validateTokenExpiry(existingToken);
        return existingToken;
    }
};

const SHOULD_FAIL_CREDENTIAL_CHAIN = false;
const resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, profile, }) => {
    let token;
    const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
    if (ssoSession) {
        try {
            const _token = await fromSso({ profile })();
            token = {
                accessToken: _token.token,
                expiresAt: new Date(_token.expiration).toISOString(),
            };
        }
        catch (e) {
            throw new CredentialsProviderError(e.message, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    else {
        try {
            token = await getSSOTokenFromFile(ssoStartUrl);
        }
        catch (e) {
            throw new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { accessToken } = token;
    const sso = ssoClient || new SSOClient({ region: ssoRegion });
    let ssoResp;
    try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken,
        }));
    }
    catch (e) {
        throw CredentialsProviderError.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration } = {} } = ssoResp;
    const credentialScope = ssoResp?.roleCredentials?.credentialScope;
    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration), credentialScope };
};

const validateSsoProfile = (profile) => {
    const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
    if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", ` +
            `"sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, false);
    }
    return profile;
};

const fromSSO = (init = {}) => async () => {
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, ssoSession } = init;
    const profileName = getProfileName(init);
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await parseKnownFiles(init);
        const profile = profiles[profileName];
        if (!profile) {
            throw new CredentialsProviderError(`Profile ${profileName} was not found.`);
        }
        if (!isSsoProfile(profile)) {
            throw new CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`);
        }
        if (profile?.sso_session) {
            const ssoSessions = await loadSsoSessionData(init);
            const session = ssoSessions[profile.sso_session];
            const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
            if (ssoRegion && ssoRegion !== session.sso_region) {
                throw new CredentialsProviderError(`Conflicting SSO region` + conflictMsg, false);
            }
            if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
                throw new CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, false);
            }
            profile.sso_region = session.sso_region;
            profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile);
        return resolveSSOCredentials({
            ssoStartUrl: sso_start_url,
            ssoSession: sso_session,
            ssoAccountId: sso_account_id,
            ssoRegion: sso_region,
            ssoRoleName: sso_role_name,
            ssoClient: ssoClient,
            profile: profileName,
        });
    }
    else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new CredentialsProviderError("Incomplete configuration. The fromSSO() argument hash must include " +
            '"ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
    }
    else {
        return resolveSSOCredentials({
            ssoStartUrl,
            ssoSession,
            ssoAccountId,
            ssoRegion,
            ssoRoleName,
            ssoClient,
            profile: profileName,
        });
    }
};

const resolveSsoCredentials = (data) => {
    const { sso_start_url, sso_account_id, sso_session, sso_region, sso_role_name } = validateSsoProfile(data);
    return fromSSO({
        ssoStartUrl: sso_start_url,
        ssoAccountId: sso_account_id,
        ssoSession: sso_session,
        ssoRegion: sso_region,
        ssoRoleName: sso_role_name,
    })();
};

const isStaticCredsProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.aws_access_key_id === "string" &&
    typeof arg.aws_secret_access_key === "string" &&
    ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
const resolveStaticCredentials = (profile) => Promise.resolve({
    accessKeyId: profile.aws_access_key_id,
    secretAccessKey: profile.aws_secret_access_key,
    sessionToken: profile.aws_session_token,
    credentialScope: profile.aws_credential_scope,
});

const fromWebToken = (init) => () => {
    const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds, roleAssumerWithWebIdentity, } = init;
    if (!roleAssumerWithWebIdentity) {
        throw new CredentialsProviderError(`Role Arn '${roleArn}' needs to be assumed with web identity,` +
            ` but no role assumption callback was provided.`, false);
    }
    return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds,
    });
};

const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
const fromTokenFile = (init = {}) => async () => {
    const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
    const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
    const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new CredentialsProviderError("Web identity configuration not specified");
    }
    return fromWebToken({
        ...init,
        webIdentityToken: readFileSync(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName,
    })();
};

const isWebIdentityProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.web_identity_token_file === "string" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
const resolveWebIdentityCredentials = async (profile, options) => fromTokenFile({
    webIdentityTokenFile: profile.web_identity_token_file,
    roleArn: profile.role_arn,
    roleSessionName: profile.role_session_name,
    roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
})();

const resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data);
    }
    if (isAssumeRoleProfile(data)) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
    }
    if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data);
    }
    if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options);
    }
    if (isProcessProfile(data)) {
        return resolveProcessCredentials(options, profileName);
    }
    if (isSsoProfile(data)) {
        return resolveSsoCredentials(data);
    }
    throw new CredentialsProviderError(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
};

const fromIni = (init = {}) => async () => {
    const profiles = await parseKnownFiles(init);
    return resolveProfileData(getProfileName(init), profiles, init);
};

const ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const remoteProvider = (init) => {
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        return fromContainerMetadata(init);
    }
    if (process.env[ENV_IMDS_DISABLED]) {
        return async () => {
            throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled");
        };
    }
    return fromInstanceMetadata(init);
};

const defaultProvider = (init = {}) => memoize(chain(...(init.profile || process.env[ENV_PROFILE] ? [] : [fromEnv()]), fromSSO(init), fromIni(init), fromProcess(init), fromTokenFile(init), remoteProvider(init), async () => {
    throw new CredentialsProviderError("Could not load credentials from any providers", false);
}), (credentials) => credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000, (credentials) => credentials.expiration !== undefined);

const F = "required", G = "type", H = "fn", I = "argv", J = "ref";
const a$1 = false, b$1 = true, c$1 = "booleanEquals", d$1 = "stringEquals", e$1 = "sigv4", f$1 = "sts", g$1 = "us-east-1", h$1 = "endpoint", i$1 = "https://sts.{Region}.{PartitionResult#dnsSuffix}", j$1 = "tree", k$1 = "error", l$1 = "getAttr", m$1 = { [F]: false, [G]: "String" }, n$1 = { [F]: true, "default": false, [G]: "Boolean" }, o$1 = { [J]: "Endpoint" }, p$1 = { [H]: "isSet", [I]: [{ [J]: "Region" }] }, q$1 = { [J]: "Region" }, r$1 = { [H]: "aws.partition", [I]: [q$1], "assign": "PartitionResult" }, s$1 = { [J]: "UseFIPS" }, t$1 = { [J]: "UseDualStack" }, u$1 = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": e$1, "signingName": f$1, "signingRegion": g$1 }] }, "headers": {} }, v$1 = {}, w = { "conditions": [{ [H]: d$1, [I]: [q$1, "aws-global"] }], [h$1]: u$1, [G]: h$1 }, x = { [H]: c$1, [I]: [s$1, true] }, y = { [H]: c$1, [I]: [t$1, true] }, z = { [H]: l$1, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] }, A = { [J]: "PartitionResult" }, B = { [H]: c$1, [I]: [true, { [H]: l$1, [I]: [A, "supportsDualStack"] }] }, C = [{ [H]: "isSet", [I]: [o$1] }], D = [x], E = [y];
const _data$1 = { version: "1.0", parameters: { Region: m$1, UseDualStack: n$1, UseFIPS: n$1, Endpoint: m$1, UseGlobalEndpoint: n$1 }, rules: [{ conditions: [{ [H]: c$1, [I]: [{ [J]: "UseGlobalEndpoint" }, b$1] }, { [H]: "not", [I]: C }, p$1, r$1, { [H]: c$1, [I]: [s$1, a$1] }, { [H]: c$1, [I]: [t$1, a$1] }], rules: [{ conditions: [{ [H]: d$1, [I]: [q$1, "ap-northeast-1"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "ap-south-1"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "ap-southeast-1"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "ap-southeast-2"] }], endpoint: u$1, [G]: h$1 }, w, { conditions: [{ [H]: d$1, [I]: [q$1, "ca-central-1"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "eu-central-1"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "eu-north-1"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "eu-west-1"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "eu-west-2"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "eu-west-3"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "sa-east-1"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, g$1] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "us-east-2"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "us-west-1"] }], endpoint: u$1, [G]: h$1 }, { conditions: [{ [H]: d$1, [I]: [q$1, "us-west-2"] }], endpoint: u$1, [G]: h$1 }, { endpoint: { url: i$1, properties: { authSchemes: [{ name: e$1, signingName: f$1, signingRegion: "{Region}" }] }, headers: v$1 }, [G]: h$1 }], [G]: j$1 }, { conditions: C, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k$1 }, { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k$1 }, { endpoint: { url: o$1, properties: v$1, headers: v$1 }, [G]: h$1 }], [G]: j$1 }, { conditions: [p$1], rules: [{ conditions: [r$1], rules: [{ conditions: [x, y], rules: [{ conditions: [{ [H]: c$1, [I]: [b$1, z] }, B], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v$1, headers: v$1 }, [G]: h$1 }], [G]: j$1 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k$1 }], [G]: j$1 }, { conditions: D, rules: [{ conditions: [{ [H]: c$1, [I]: [z, b$1] }], rules: [{ conditions: [{ [H]: d$1, [I]: [{ [H]: l$1, [I]: [A, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v$1, headers: v$1 }, [G]: h$1 }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v$1, headers: v$1 }, [G]: h$1 }], [G]: j$1 }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k$1 }], [G]: j$1 }, { conditions: E, rules: [{ conditions: [B], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v$1, headers: v$1 }, [G]: h$1 }], [G]: j$1 }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k$1 }], [G]: j$1 }, w, { endpoint: { url: i$1, properties: v$1, headers: v$1 }, [G]: h$1 }], [G]: j$1 }], [G]: j$1 }, { error: "Invalid Configuration: Missing Region", [G]: k$1 }] };
const ruleSet$1 = _data$1;

const defaultEndpointResolver$1 = (endpointParams, context = {}) => {
    return resolveEndpoint(ruleSet$1, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};

const getRuntimeConfig$3 = (config) => {
    return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver$1,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new AwsSdkSigV4Signer(),
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                signer: new NoAuthSigner(),
            },
        ],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8,
    };
};

const getRuntimeConfig$2 = (config) => {
    emitWarningIfUnsupportedVersion$1(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig$3(config);
    emitWarningIfUnsupportedVersion(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? decorateDefaultCredentialProvider$1(defaultProvider),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo$1.version }),
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4") ||
                    (async (idProps) => await decorateDefaultCredentialProvider$1(defaultProvider)(idProps?.__config || {})()),
                signer: new AwsSdkSigV4Signer(),
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                signer: new NoAuthSigner(),
            },
        ],
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};

const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};

const asPartial$1 = (t) => t;
const resolveRuntimeExtensions$1 = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial$1(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...asPartial$1(getDefaultExtensionConfiguration(runtimeConfig)),
        ...asPartial$1(getHttpHandlerExtensionConfiguration(runtimeConfig)),
        ...asPartial$1(getHttpAuthExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig(extensionConfiguration),
    };
};

class STSClient extends Client {
    constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig$2(configuration || {});
        const _config_1 = resolveClientEndpointParameters$2(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions$1(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
    getDefaultHttpAuthSchemeParametersProvider() {
        return defaultSTSHttpAuthSchemeParametersProvider;
    }
    getIdentityProviderConfigProvider() {
        return async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
        });
    }
}

class AssumeRoleWithSAMLCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$1,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {})
    .n("STSClient", "AssumeRoleWithSAMLCommand")
    .f(AssumeRoleWithSAMLRequestFilterSensitiveLog, AssumeRoleWithSAMLResponseFilterSensitiveLog)
    .ser(se_AssumeRoleWithSAMLCommand)
    .de(de_AssumeRoleWithSAMLCommand)
    .build() {
}

class DecodeAuthorizationMessageCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$1,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {})
    .n("STSClient", "DecodeAuthorizationMessageCommand")
    .f(void 0, void 0)
    .ser(se_DecodeAuthorizationMessageCommand)
    .de(de_DecodeAuthorizationMessageCommand)
    .build() {
}

class GetAccessKeyInfoCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$1,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {})
    .n("STSClient", "GetAccessKeyInfoCommand")
    .f(void 0, void 0)
    .ser(se_GetAccessKeyInfoCommand)
    .de(de_GetAccessKeyInfoCommand)
    .build() {
}

class GetCallerIdentityCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$1,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {})
    .n("STSClient", "GetCallerIdentityCommand")
    .f(void 0, void 0)
    .ser(se_GetCallerIdentityCommand)
    .de(de_GetCallerIdentityCommand)
    .build() {
}

class GetFederationTokenCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$1,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {})
    .n("STSClient", "GetFederationTokenCommand")
    .f(void 0, GetFederationTokenResponseFilterSensitiveLog)
    .ser(se_GetFederationTokenCommand)
    .de(de_GetFederationTokenCommand)
    .build() {
}

class GetSessionTokenCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$1,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {})
    .n("STSClient", "GetSessionTokenCommand")
    .f(void 0, GetSessionTokenResponseFilterSensitiveLog)
    .ser(se_GetSessionTokenCommand)
    .de(de_GetSessionTokenCommand)
    .build() {
}

const commands$1 = {
    AssumeRoleCommand,
    AssumeRoleWithSAMLCommand,
    AssumeRoleWithWebIdentityCommand,
    DecodeAuthorizationMessageCommand,
    GetAccessKeyInfoCommand,
    GetCallerIdentityCommand,
    GetFederationTokenCommand,
    GetSessionTokenCommand,
};
class STS extends STSClient {
}
createAggregatedClient(commands$1, STS);

const getCustomizableStsClientCtor = (baseCtor, customizations) => {
    if (!customizations)
        return baseCtor;
    else
        return class CustomizableSTSClient extends baseCtor {
            constructor(config) {
                super(config);
                for (const customization of customizations) {
                    this.middlewareStack.use(customization);
                }
            }
        };
};
const getDefaultRoleAssumer = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumer$1(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
const getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity$1(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: getDefaultRoleAssumer(input),
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input),
    ...input,
});

const s = "required", t = "fn", u = "argv", v = "ref";
const a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = { [s]: false, "type": "String" }, i = { [s]: true, "default": false, "type": "Boolean" }, j = { [v]: "Endpoint" }, k = { [t]: c, [u]: [{ [v]: "UseFIPS" }, true] }, l = { [t]: c, [u]: [{ [v]: "UseDualStack" }, true] }, m = {}, n = { [t]: "getAttr", [u]: [{ [v]: g }, "supportsFIPS"] }, o = { [t]: c, [u]: [true, { [t]: "getAttr", [u]: [{ [v]: g }, "supportsDualStack"] }] }, p = [k], q = [l], r = [{ [v]: "Region" }];
const _data = { version: "1.0", parameters: { Region: h, UseDualStack: i, UseFIPS: i, Endpoint: h }, rules: [{ conditions: [{ [t]: b, [u]: [j] }], rules: [{ conditions: p, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: q, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: j, properties: m, headers: m }, type: e }], type: f }, { conditions: [{ [t]: b, [u]: r }], rules: [{ conditions: [{ [t]: "aws.partition", [u]: r, assign: g }], rules: [{ conditions: [k, l], rules: [{ conditions: [{ [t]: c, [u]: [a, n] }, o], rules: [{ endpoint: { url: "https://rds-data-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: p, rules: [{ conditions: [{ [t]: c, [u]: [n, a] }], rules: [{ endpoint: { url: "https://rds-data-fips.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: q, rules: [{ conditions: [o], rules: [{ endpoint: { url: "https://rds-data.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m, headers: m }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://rds-data.{Region}.{PartitionResult#dnsSuffix}", properties: m, headers: m }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
const ruleSet = _data;

const defaultEndpointResolver = (endpointParams, context = {}) => {
    return resolveEndpoint(ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};

const getRuntimeConfig$1 = (config) => {
    return {
        apiVersion: "2018-08-01",
        base64Decoder: config?.base64Decoder ?? fromBase64,
        base64Encoder: config?.base64Encoder ?? toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        logger: config?.logger ?? new NoOpLogger(),
        serviceId: config?.serviceId ?? "RDS Data",
        urlParser: config?.urlParser ?? parseUrl,
        utf8Decoder: config?.utf8Decoder ?? fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? toUtf8,
    };
};

const getRuntimeConfig = (config) => {
    emitWarningIfUnsupportedVersion$1(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getRuntimeConfig$1(config);
    emitWarningIfUnsupportedVersion(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? decorateDefaultCredentialProvider(defaultProvider),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo$2.version }),
        maxAttempts: config?.maxAttempts ?? loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: config?.requestHandler ?? new NodeHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};

const asPartial = (t) => t;
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
        ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
        ...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
        ...resolveDefaultRuntimeConfig(extensionConfiguration),
        ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    };
};

class RDSDataClient extends Client {
    constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig(configuration || {});
        const _config_1 = resolveClientEndpointParameters$3(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveAwsAuthConfig(_config_5);
        const _config_7 = resolveUserAgentConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getAwsAuthPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
}

class RDSDataServiceException extends ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, RDSDataServiceException.prototype);
    }
}

class AccessDeniedException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
}
class BadRequestException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "BadRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "BadRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, BadRequestException.prototype);
    }
}
class DatabaseErrorException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "DatabaseErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "DatabaseErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DatabaseErrorException.prototype);
    }
}
class DatabaseNotFoundException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "DatabaseNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "DatabaseNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DatabaseNotFoundException.prototype);
    }
}
class DatabaseUnavailableException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "DatabaseUnavailableException",
            $fault: "server",
            ...opts,
        });
        this.name = "DatabaseUnavailableException";
        this.$fault = "server";
        Object.setPrototypeOf(this, DatabaseUnavailableException.prototype);
    }
}
class ForbiddenException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "ForbiddenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ForbiddenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ForbiddenException.prototype);
    }
}
class HttpEndpointNotEnabledException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "HttpEndpointNotEnabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "HttpEndpointNotEnabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, HttpEndpointNotEnabledException.prototype);
    }
}
class InternalServerErrorException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "InternalServerErrorException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerErrorException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    }
}
class InvalidSecretException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "InvalidSecretException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidSecretException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidSecretException.prototype);
    }
}
class SecretsErrorException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "SecretsErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "SecretsErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SecretsErrorException.prototype);
    }
}
class ServiceUnavailableError extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "ServiceUnavailableError",
            $fault: "server",
            ...opts,
        });
        this.name = "ServiceUnavailableError";
        this.$fault = "server";
        Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
}
class StatementTimeoutException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "StatementTimeoutException",
            $fault: "client",
            ...opts,
        });
        this.name = "StatementTimeoutException";
        this.$fault = "client";
        Object.setPrototypeOf(this, StatementTimeoutException.prototype);
        this.dbConnectionId = opts.dbConnectionId;
    }
}
class TransactionNotFoundException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "TransactionNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "TransactionNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TransactionNotFoundException.prototype);
    }
}
class NotFoundException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "NotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "NotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }
}
class UnsupportedResultException extends RDSDataServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedResultException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedResultException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedResultException.prototype);
    }
}
var ArrayValue;
(function (ArrayValue) {
    ArrayValue.visit = (value, visitor) => {
        if (value.booleanValues !== undefined)
            return visitor.booleanValues(value.booleanValues);
        if (value.longValues !== undefined)
            return visitor.longValues(value.longValues);
        if (value.doubleValues !== undefined)
            return visitor.doubleValues(value.doubleValues);
        if (value.stringValues !== undefined)
            return visitor.stringValues(value.stringValues);
        if (value.arrayValues !== undefined)
            return visitor.arrayValues(value.arrayValues);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ArrayValue || (ArrayValue = {}));
var Field;
(function (Field) {
    Field.visit = (value, visitor) => {
        if (value.isNull !== undefined)
            return visitor.isNull(value.isNull);
        if (value.booleanValue !== undefined)
            return visitor.booleanValue(value.booleanValue);
        if (value.longValue !== undefined)
            return visitor.longValue(value.longValue);
        if (value.doubleValue !== undefined)
            return visitor.doubleValue(value.doubleValue);
        if (value.stringValue !== undefined)
            return visitor.stringValue(value.stringValue);
        if (value.blobValue !== undefined)
            return visitor.blobValue(value.blobValue);
        if (value.arrayValue !== undefined)
            return visitor.arrayValue(value.arrayValue);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(Field || (Field = {}));
var Value;
(function (Value) {
    Value.visit = (value, visitor) => {
        if (value.isNull !== undefined)
            return visitor.isNull(value.isNull);
        if (value.bitValue !== undefined)
            return visitor.bitValue(value.bitValue);
        if (value.bigIntValue !== undefined)
            return visitor.bigIntValue(value.bigIntValue);
        if (value.intValue !== undefined)
            return visitor.intValue(value.intValue);
        if (value.doubleValue !== undefined)
            return visitor.doubleValue(value.doubleValue);
        if (value.realValue !== undefined)
            return visitor.realValue(value.realValue);
        if (value.stringValue !== undefined)
            return visitor.stringValue(value.stringValue);
        if (value.blobValue !== undefined)
            return visitor.blobValue(value.blobValue);
        if (value.arrayValues !== undefined)
            return visitor.arrayValues(value.arrayValues);
        if (value.structValue !== undefined)
            return visitor.structValue(value.structValue);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(Value || (Value = {}));

const se_BatchExecuteStatementCommand = async (input, context) => {
    const b = requestBuilder(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/BatchExecute");
    let body;
    body = JSON.stringify(take(input, {
        database: [],
        parameterSets: (_) => se_SqlParameterSets(_, context),
        resourceArn: [],
        schema: [],
        secretArn: [],
        sql: [],
        transactionId: [],
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const se_BeginTransactionCommand = async (input, context) => {
    const b = requestBuilder(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/BeginTransaction");
    let body;
    body = JSON.stringify(take(input, {
        database: [],
        resourceArn: [],
        schema: [],
        secretArn: [],
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const se_CommitTransactionCommand = async (input, context) => {
    const b = requestBuilder(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/CommitTransaction");
    let body;
    body = JSON.stringify(take(input, {
        resourceArn: [],
        secretArn: [],
        transactionId: [],
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const se_ExecuteSqlCommand = async (input, context) => {
    const b = requestBuilder(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/ExecuteSql");
    let body;
    body = JSON.stringify(take(input, {
        awsSecretStoreArn: [],
        database: [],
        dbClusterOrInstanceArn: [],
        schema: [],
        sqlStatements: [],
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const se_ExecuteStatementCommand = async (input, context) => {
    const b = requestBuilder(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/Execute");
    let body;
    body = JSON.stringify(take(input, {
        continueAfterTimeout: [],
        database: [],
        formatRecordsAs: [],
        includeResultMetadata: [],
        parameters: (_) => se_SqlParametersList(_, context),
        resourceArn: [],
        resultSetOptions: (_) => _json(_),
        schema: [],
        secretArn: [],
        sql: [],
        transactionId: [],
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const se_RollbackTransactionCommand = async (input, context) => {
    const b = requestBuilder(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/RollbackTransaction");
    let body;
    body = JSON.stringify(take(input, {
        resourceArn: [],
        secretArn: [],
        transactionId: [],
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const de_BatchExecuteStatementCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_BatchExecuteStatementCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        updateResults: (_) => de_UpdateResults(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
const de_BatchExecuteStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rdsdata#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput);
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            throw await de_BadRequestExceptionRes(parsedOutput);
        case "DatabaseErrorException":
        case "com.amazonaws.rdsdata#DatabaseErrorException":
            throw await de_DatabaseErrorExceptionRes(parsedOutput);
        case "DatabaseNotFoundException":
        case "com.amazonaws.rdsdata#DatabaseNotFoundException":
            throw await de_DatabaseNotFoundExceptionRes(parsedOutput);
        case "DatabaseUnavailableException":
        case "com.amazonaws.rdsdata#DatabaseUnavailableException":
            throw await de_DatabaseUnavailableExceptionRes(parsedOutput);
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            throw await de_ForbiddenExceptionRes(parsedOutput);
        case "HttpEndpointNotEnabledException":
        case "com.amazonaws.rdsdata#HttpEndpointNotEnabledException":
            throw await de_HttpEndpointNotEnabledExceptionRes(parsedOutput);
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            throw await de_InternalServerErrorExceptionRes(parsedOutput);
        case "InvalidSecretException":
        case "com.amazonaws.rdsdata#InvalidSecretException":
            throw await de_InvalidSecretExceptionRes(parsedOutput);
        case "SecretsErrorException":
        case "com.amazonaws.rdsdata#SecretsErrorException":
            throw await de_SecretsErrorExceptionRes(parsedOutput);
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            throw await de_ServiceUnavailableErrorRes(parsedOutput);
        case "StatementTimeoutException":
        case "com.amazonaws.rdsdata#StatementTimeoutException":
            throw await de_StatementTimeoutExceptionRes(parsedOutput);
        case "TransactionNotFoundException":
        case "com.amazonaws.rdsdata#TransactionNotFoundException":
            throw await de_TransactionNotFoundExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_BeginTransactionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_BeginTransactionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        transactionId: expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_BeginTransactionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rdsdata#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput);
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            throw await de_BadRequestExceptionRes(parsedOutput);
        case "DatabaseErrorException":
        case "com.amazonaws.rdsdata#DatabaseErrorException":
            throw await de_DatabaseErrorExceptionRes(parsedOutput);
        case "DatabaseNotFoundException":
        case "com.amazonaws.rdsdata#DatabaseNotFoundException":
            throw await de_DatabaseNotFoundExceptionRes(parsedOutput);
        case "DatabaseUnavailableException":
        case "com.amazonaws.rdsdata#DatabaseUnavailableException":
            throw await de_DatabaseUnavailableExceptionRes(parsedOutput);
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            throw await de_ForbiddenExceptionRes(parsedOutput);
        case "HttpEndpointNotEnabledException":
        case "com.amazonaws.rdsdata#HttpEndpointNotEnabledException":
            throw await de_HttpEndpointNotEnabledExceptionRes(parsedOutput);
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            throw await de_InternalServerErrorExceptionRes(parsedOutput);
        case "InvalidSecretException":
        case "com.amazonaws.rdsdata#InvalidSecretException":
            throw await de_InvalidSecretExceptionRes(parsedOutput);
        case "SecretsErrorException":
        case "com.amazonaws.rdsdata#SecretsErrorException":
            throw await de_SecretsErrorExceptionRes(parsedOutput);
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            throw await de_ServiceUnavailableErrorRes(parsedOutput);
        case "StatementTimeoutException":
        case "com.amazonaws.rdsdata#StatementTimeoutException":
            throw await de_StatementTimeoutExceptionRes(parsedOutput);
        case "TransactionNotFoundException":
        case "com.amazonaws.rdsdata#TransactionNotFoundException":
            throw await de_TransactionNotFoundExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CommitTransactionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommitTransactionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        transactionStatus: expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CommitTransactionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rdsdata#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput);
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            throw await de_BadRequestExceptionRes(parsedOutput);
        case "DatabaseErrorException":
        case "com.amazonaws.rdsdata#DatabaseErrorException":
            throw await de_DatabaseErrorExceptionRes(parsedOutput);
        case "DatabaseNotFoundException":
        case "com.amazonaws.rdsdata#DatabaseNotFoundException":
            throw await de_DatabaseNotFoundExceptionRes(parsedOutput);
        case "DatabaseUnavailableException":
        case "com.amazonaws.rdsdata#DatabaseUnavailableException":
            throw await de_DatabaseUnavailableExceptionRes(parsedOutput);
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            throw await de_ForbiddenExceptionRes(parsedOutput);
        case "HttpEndpointNotEnabledException":
        case "com.amazonaws.rdsdata#HttpEndpointNotEnabledException":
            throw await de_HttpEndpointNotEnabledExceptionRes(parsedOutput);
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            throw await de_InternalServerErrorExceptionRes(parsedOutput);
        case "InvalidSecretException":
        case "com.amazonaws.rdsdata#InvalidSecretException":
            throw await de_InvalidSecretExceptionRes(parsedOutput);
        case "NotFoundException":
        case "com.amazonaws.rdsdata#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput);
        case "SecretsErrorException":
        case "com.amazonaws.rdsdata#SecretsErrorException":
            throw await de_SecretsErrorExceptionRes(parsedOutput);
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            throw await de_ServiceUnavailableErrorRes(parsedOutput);
        case "StatementTimeoutException":
        case "com.amazonaws.rdsdata#StatementTimeoutException":
            throw await de_StatementTimeoutExceptionRes(parsedOutput);
        case "TransactionNotFoundException":
        case "com.amazonaws.rdsdata#TransactionNotFoundException":
            throw await de_TransactionNotFoundExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ExecuteSqlCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ExecuteSqlCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        sqlStatementResults: (_) => de_SqlStatementResults(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ExecuteSqlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rdsdata#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput);
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            throw await de_BadRequestExceptionRes(parsedOutput);
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            throw await de_ForbiddenExceptionRes(parsedOutput);
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            throw await de_InternalServerErrorExceptionRes(parsedOutput);
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            throw await de_ServiceUnavailableErrorRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ExecuteStatementCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ExecuteStatementCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        columnMetadata: _json,
        formattedRecords: expectString,
        generatedFields: (_) => de_FieldList(_, context),
        numberOfRecordsUpdated: expectLong,
        records: (_) => de_SqlRecords(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ExecuteStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rdsdata#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput);
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            throw await de_BadRequestExceptionRes(parsedOutput);
        case "DatabaseErrorException":
        case "com.amazonaws.rdsdata#DatabaseErrorException":
            throw await de_DatabaseErrorExceptionRes(parsedOutput);
        case "DatabaseNotFoundException":
        case "com.amazonaws.rdsdata#DatabaseNotFoundException":
            throw await de_DatabaseNotFoundExceptionRes(parsedOutput);
        case "DatabaseUnavailableException":
        case "com.amazonaws.rdsdata#DatabaseUnavailableException":
            throw await de_DatabaseUnavailableExceptionRes(parsedOutput);
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            throw await de_ForbiddenExceptionRes(parsedOutput);
        case "HttpEndpointNotEnabledException":
        case "com.amazonaws.rdsdata#HttpEndpointNotEnabledException":
            throw await de_HttpEndpointNotEnabledExceptionRes(parsedOutput);
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            throw await de_InternalServerErrorExceptionRes(parsedOutput);
        case "InvalidSecretException":
        case "com.amazonaws.rdsdata#InvalidSecretException":
            throw await de_InvalidSecretExceptionRes(parsedOutput);
        case "SecretsErrorException":
        case "com.amazonaws.rdsdata#SecretsErrorException":
            throw await de_SecretsErrorExceptionRes(parsedOutput);
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            throw await de_ServiceUnavailableErrorRes(parsedOutput);
        case "StatementTimeoutException":
        case "com.amazonaws.rdsdata#StatementTimeoutException":
            throw await de_StatementTimeoutExceptionRes(parsedOutput);
        case "TransactionNotFoundException":
        case "com.amazonaws.rdsdata#TransactionNotFoundException":
            throw await de_TransactionNotFoundExceptionRes(parsedOutput);
        case "UnsupportedResultException":
        case "com.amazonaws.rdsdata#UnsupportedResultException":
            throw await de_UnsupportedResultExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_RollbackTransactionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_RollbackTransactionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = expectNonNull(expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        transactionStatus: expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_RollbackTransactionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rdsdata#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput);
        case "BadRequestException":
        case "com.amazonaws.rdsdata#BadRequestException":
            throw await de_BadRequestExceptionRes(parsedOutput);
        case "DatabaseErrorException":
        case "com.amazonaws.rdsdata#DatabaseErrorException":
            throw await de_DatabaseErrorExceptionRes(parsedOutput);
        case "DatabaseNotFoundException":
        case "com.amazonaws.rdsdata#DatabaseNotFoundException":
            throw await de_DatabaseNotFoundExceptionRes(parsedOutput);
        case "DatabaseUnavailableException":
        case "com.amazonaws.rdsdata#DatabaseUnavailableException":
            throw await de_DatabaseUnavailableExceptionRes(parsedOutput);
        case "ForbiddenException":
        case "com.amazonaws.rdsdata#ForbiddenException":
            throw await de_ForbiddenExceptionRes(parsedOutput);
        case "HttpEndpointNotEnabledException":
        case "com.amazonaws.rdsdata#HttpEndpointNotEnabledException":
            throw await de_HttpEndpointNotEnabledExceptionRes(parsedOutput);
        case "InternalServerErrorException":
        case "com.amazonaws.rdsdata#InternalServerErrorException":
            throw await de_InternalServerErrorExceptionRes(parsedOutput);
        case "InvalidSecretException":
        case "com.amazonaws.rdsdata#InvalidSecretException":
            throw await de_InvalidSecretExceptionRes(parsedOutput);
        case "NotFoundException":
        case "com.amazonaws.rdsdata#NotFoundException":
            throw await de_NotFoundExceptionRes(parsedOutput);
        case "SecretsErrorException":
        case "com.amazonaws.rdsdata#SecretsErrorException":
            throw await de_SecretsErrorExceptionRes(parsedOutput);
        case "ServiceUnavailableError":
        case "com.amazonaws.rdsdata#ServiceUnavailableError":
            throw await de_ServiceUnavailableErrorRes(parsedOutput);
        case "StatementTimeoutException":
        case "com.amazonaws.rdsdata#StatementTimeoutException":
            throw await de_StatementTimeoutExceptionRes(parsedOutput);
        case "TransactionNotFoundException":
        case "com.amazonaws.rdsdata#TransactionNotFoundException":
            throw await de_TransactionNotFoundExceptionRes(parsedOutput);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const throwDefaultError = withBaseException(RDSDataServiceException);
const de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_BadRequestExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new BadRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_DatabaseErrorExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new DatabaseErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_DatabaseNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new DatabaseNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_DatabaseUnavailableExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {});
    Object.assign(contents, doc);
    const exception = new DatabaseUnavailableException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_ForbiddenExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new ForbiddenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_HttpEndpointNotEnabledExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new HttpEndpointNotEnabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_InternalServerErrorExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {});
    Object.assign(contents, doc);
    const exception = new InternalServerErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidSecretExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidSecretException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_NotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new NotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_SecretsErrorExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new SecretsErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_ServiceUnavailableErrorRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {});
    Object.assign(contents, doc);
    const exception = new ServiceUnavailableError({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_StatementTimeoutExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        dbConnectionId: expectLong,
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new StatementTimeoutException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_TransactionNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new TransactionNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const de_UnsupportedResultExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        message: expectString,
    });
    Object.assign(contents, doc);
    const exception = new UnsupportedResultException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return decorateServiceException(exception, parsedOutput.body);
};
const se_ArrayOfArray = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_ArrayValue(entry);
    });
};
const se_ArrayValue = (input, context) => {
    return ArrayValue.visit(input, {
        arrayValues: (value) => ({ arrayValues: se_ArrayOfArray(value) }),
        booleanValues: (value) => ({ booleanValues: _json(value) }),
        doubleValues: (value) => ({ doubleValues: se_DoubleArray(value) }),
        longValues: (value) => ({ longValues: _json(value) }),
        stringValues: (value) => ({ stringValues: _json(value) }),
        _: (name, value) => ({ name: value }),
    });
};
const se_DoubleArray = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return serializeFloat(entry);
    });
};
const se_Field = (input, context) => {
    return Field.visit(input, {
        arrayValue: (value) => ({ arrayValue: se_ArrayValue(value) }),
        blobValue: (value) => ({ blobValue: context.base64Encoder(value) }),
        booleanValue: (value) => ({ booleanValue: value }),
        doubleValue: (value) => ({ doubleValue: serializeFloat(value) }),
        isNull: (value) => ({ isNull: value }),
        longValue: (value) => ({ longValue: value }),
        stringValue: (value) => ({ stringValue: value }),
        _: (name, value) => ({ name: value }),
    });
};
const se_SqlParameter = (input, context) => {
    return take(input, {
        name: [],
        typeHint: [],
        value: (_) => se_Field(_, context),
    });
};
const se_SqlParameterSets = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_SqlParametersList(entry, context);
    });
};
const se_SqlParametersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_SqlParameter(entry, context);
    });
};
const de_ArrayOfArray = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ArrayValue(awsExpectUnion(entry));
    });
    return retVal;
};
const de_ArrayValue = (output, context) => {
    if (output.arrayValues != null) {
        return {
            arrayValues: de_ArrayOfArray(output.arrayValues),
        };
    }
    if (output.booleanValues != null) {
        return {
            booleanValues: _json(output.booleanValues),
        };
    }
    if (output.doubleValues != null) {
        return {
            doubleValues: de_DoubleArray(output.doubleValues),
        };
    }
    if (output.longValues != null) {
        return {
            longValues: _json(output.longValues),
        };
    }
    if (output.stringValues != null) {
        return {
            stringValues: _json(output.stringValues),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const de_ArrayValueList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Value(awsExpectUnion(entry), context);
    });
    return retVal;
};
const de_DoubleArray = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return limitedParseDouble(entry);
    });
    return retVal;
};
const de_Field = (output, context) => {
    if (output.arrayValue != null) {
        return {
            arrayValue: de_ArrayValue(awsExpectUnion(output.arrayValue)),
        };
    }
    if (output.blobValue != null) {
        return {
            blobValue: context.base64Decoder(output.blobValue),
        };
    }
    if (expectBoolean(output.booleanValue) !== undefined) {
        return { booleanValue: expectBoolean(output.booleanValue) };
    }
    if (limitedParseDouble(output.doubleValue) !== undefined) {
        return { doubleValue: limitedParseDouble(output.doubleValue) };
    }
    if (expectBoolean(output.isNull) !== undefined) {
        return { isNull: expectBoolean(output.isNull) };
    }
    if (expectLong(output.longValue) !== undefined) {
        return { longValue: expectLong(output.longValue) };
    }
    if (expectString(output.stringValue) !== undefined) {
        return { stringValue: expectString(output.stringValue) };
    }
    return { $unknown: Object.entries(output)[0] };
};
const de_FieldList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Field(awsExpectUnion(entry), context);
    });
    return retVal;
};
const de__Record = (output, context) => {
    return take(output, {
        values: (_) => de_Row(_, context),
    });
};
const de_Records = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de__Record(entry, context);
    });
    return retVal;
};
const de_ResultFrame = (output, context) => {
    return take(output, {
        records: (_) => de_Records(_, context),
        resultSetMetadata: _json,
    });
};
const de_Row = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Value(awsExpectUnion(entry), context);
    });
    return retVal;
};
const de_SqlRecords = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_FieldList(entry, context);
    });
    return retVal;
};
const de_SqlStatementResult = (output, context) => {
    return take(output, {
        numberOfRecordsUpdated: expectLong,
        resultFrame: (_) => de_ResultFrame(_, context),
    });
};
const de_SqlStatementResults = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_SqlStatementResult(entry, context);
    });
    return retVal;
};
const de_StructValue = (output, context) => {
    return take(output, {
        attributes: (_) => de_ArrayValueList(_, context),
    });
};
const de_UpdateResult = (output, context) => {
    return take(output, {
        generatedFields: (_) => de_FieldList(_, context),
    });
};
const de_UpdateResults = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_UpdateResult(entry, context);
    });
    return retVal;
};
const de_Value = (output, context) => {
    if (output.arrayValues != null) {
        return {
            arrayValues: de_ArrayValueList(output.arrayValues, context),
        };
    }
    if (expectLong(output.bigIntValue) !== undefined) {
        return { bigIntValue: expectLong(output.bigIntValue) };
    }
    if (expectBoolean(output.bitValue) !== undefined) {
        return { bitValue: expectBoolean(output.bitValue) };
    }
    if (output.blobValue != null) {
        return {
            blobValue: context.base64Decoder(output.blobValue),
        };
    }
    if (limitedParseDouble(output.doubleValue) !== undefined) {
        return { doubleValue: limitedParseDouble(output.doubleValue) };
    }
    if (expectInt32(output.intValue) !== undefined) {
        return { intValue: expectInt32(output.intValue) };
    }
    if (expectBoolean(output.isNull) !== undefined) {
        return { isNull: expectBoolean(output.isNull) };
    }
    if (limitedParseFloat32(output.realValue) !== undefined) {
        return { realValue: limitedParseFloat32(output.realValue) };
    }
    if (expectString(output.stringValue) !== undefined) {
        return { stringValue: expectString(output.stringValue) };
    }
    if (output.structValue != null) {
        return {
            structValue: de_StructValue(output.structValue, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};

class BatchExecuteStatementCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$2,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("RdsDataService", "BatchExecuteStatement", {})
    .n("RDSDataClient", "BatchExecuteStatementCommand")
    .f(void 0, void 0)
    .ser(se_BatchExecuteStatementCommand)
    .de(de_BatchExecuteStatementCommand)
    .build() {
}

class BeginTransactionCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$2,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("RdsDataService", "BeginTransaction", {})
    .n("RDSDataClient", "BeginTransactionCommand")
    .f(void 0, void 0)
    .ser(se_BeginTransactionCommand)
    .de(de_BeginTransactionCommand)
    .build() {
}

class CommitTransactionCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$2,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("RdsDataService", "CommitTransaction", {})
    .n("RDSDataClient", "CommitTransactionCommand")
    .f(void 0, void 0)
    .ser(se_CommitTransactionCommand)
    .de(de_CommitTransactionCommand)
    .build() {
}

class ExecuteSqlCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$2,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("RdsDataService", "ExecuteSql", {})
    .n("RDSDataClient", "ExecuteSqlCommand")
    .f(void 0, void 0)
    .ser(se_ExecuteSqlCommand)
    .de(de_ExecuteSqlCommand)
    .build() {
}

class ExecuteStatementCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$2,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("RdsDataService", "ExecuteStatement", {})
    .n("RDSDataClient", "ExecuteStatementCommand")
    .f(void 0, void 0)
    .ser(se_ExecuteStatementCommand)
    .de(de_ExecuteStatementCommand)
    .build() {
}

class RollbackTransactionCommand extends Command
    .classBuilder()
    .ep({
    ...commonParams$2,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("RdsDataService", "RollbackTransaction", {})
    .n("RDSDataClient", "RollbackTransactionCommand")
    .f(void 0, void 0)
    .ser(se_RollbackTransactionCommand)
    .de(de_RollbackTransactionCommand)
    .build() {
}

const commands = {
    BatchExecuteStatementCommand,
    BeginTransactionCommand,
    CommitTransactionCommand,
    ExecuteSqlCommand,
    ExecuteStatementCommand,
    RollbackTransactionCommand,
};
class RDSData extends RDSDataClient {
}
createAggregatedClient(commands, RDSData);

var SqlString_1 = createCommonjsModule(function (module, exports) {
var SqlString  = exports;

var ID_GLOBAL_REGEXP    = /`/g;
var QUAL_GLOBAL_REGEXP  = /\./g;
var CHARS_GLOBAL_REGEXP = /[\0\b\t\n\r\x1a\"\'\\]/g; // eslint-disable-line no-control-regex
var CHARS_ESCAPE_MAP    = {
  '\0'   : '\\0',
  '\b'   : '\\b',
  '\t'   : '\\t',
  '\n'   : '\\n',
  '\r'   : '\\r',
  '\x1a' : '\\Z',
  '"'    : '\\"',
  '\''   : '\\\'',
  '\\'   : '\\\\'
};

SqlString.escapeId = function escapeId(val, forbidQualified) {
  if (Array.isArray(val)) {
    var sql = '';

    for (var i = 0; i < val.length; i++) {
      sql += (i === 0 ? '' : ', ') + SqlString.escapeId(val[i], forbidQualified);
    }

    return sql;
  } else if (forbidQualified) {
    return '`' + String(val).replace(ID_GLOBAL_REGEXP, '``') + '`';
  } else {
    return '`' + String(val).replace(ID_GLOBAL_REGEXP, '``').replace(QUAL_GLOBAL_REGEXP, '`.`') + '`';
  }
};

SqlString.escape = function escape(val, stringifyObjects, timeZone) {
  if (val === undefined || val === null) {
    return 'NULL';
  }

  switch (typeof val) {
    case 'boolean': return (val) ? 'true' : 'false';
    case 'number': return val + '';
    case 'object':
      if (Object.prototype.toString.call(val) === '[object Date]') {
        return SqlString.dateToString(val, timeZone || 'local');
      } else if (Array.isArray(val)) {
        return SqlString.arrayToList(val, timeZone);
      } else if (Buffer.isBuffer(val)) {
        return SqlString.bufferToString(val);
      } else if (typeof val.toSqlString === 'function') {
        return String(val.toSqlString());
      } else if (stringifyObjects) {
        return escapeString(val.toString());
      } else {
        return SqlString.objectToValues(val, timeZone);
      }
    default: return escapeString(val);
  }
};

SqlString.arrayToList = function arrayToList(array, timeZone) {
  var sql = '';

  for (var i = 0; i < array.length; i++) {
    var val = array[i];

    if (Array.isArray(val)) {
      sql += (i === 0 ? '' : ', ') + '(' + SqlString.arrayToList(val, timeZone) + ')';
    } else {
      sql += (i === 0 ? '' : ', ') + SqlString.escape(val, true, timeZone);
    }
  }

  return sql;
};

SqlString.format = function format(sql, values, stringifyObjects, timeZone) {
  if (values == null) {
    return sql;
  }

  if (!Array.isArray(values)) {
    values = [values];
  }

  var chunkIndex        = 0;
  var placeholdersRegex = /\?+/g;
  var result            = '';
  var valuesIndex       = 0;
  var match;

  while (valuesIndex < values.length && (match = placeholdersRegex.exec(sql))) {
    var len = match[0].length;

    if (len > 2) {
      continue;
    }

    var value = len === 2
      ? SqlString.escapeId(values[valuesIndex])
      : SqlString.escape(values[valuesIndex], stringifyObjects, timeZone);

    result += sql.slice(chunkIndex, match.index) + value;
    chunkIndex = placeholdersRegex.lastIndex;
    valuesIndex++;
  }

  if (chunkIndex === 0) {
    // Nothing was replaced
    return sql;
  }

  if (chunkIndex < sql.length) {
    return result + sql.slice(chunkIndex);
  }

  return result;
};

SqlString.dateToString = function dateToString(date, timeZone) {
  var dt = new Date(date);

  if (isNaN(dt.getTime())) {
    return 'NULL';
  }

  var year;
  var month;
  var day;
  var hour;
  var minute;
  var second;
  var millisecond;

  if (timeZone === 'local') {
    year        = dt.getFullYear();
    month       = dt.getMonth() + 1;
    day         = dt.getDate();
    hour        = dt.getHours();
    minute      = dt.getMinutes();
    second      = dt.getSeconds();
    millisecond = dt.getMilliseconds();
  } else {
    var tz = convertTimezone(timeZone);

    if (tz !== false && tz !== 0) {
      dt.setTime(dt.getTime() + (tz * 60000));
    }

    year       = dt.getUTCFullYear();
    month       = dt.getUTCMonth() + 1;
    day         = dt.getUTCDate();
    hour        = dt.getUTCHours();
    minute      = dt.getUTCMinutes();
    second      = dt.getUTCSeconds();
    millisecond = dt.getUTCMilliseconds();
  }

  // YYYY-MM-DD HH:mm:ss.mmm
  var str = zeroPad(year, 4) + '-' + zeroPad(month, 2) + '-' + zeroPad(day, 2) + ' ' +
    zeroPad(hour, 2) + ':' + zeroPad(minute, 2) + ':' + zeroPad(second, 2) + '.' +
    zeroPad(millisecond, 3);

  return escapeString(str);
};

SqlString.bufferToString = function bufferToString(buffer) {
  return 'X' + escapeString(buffer.toString('hex'));
};

SqlString.objectToValues = function objectToValues(object, timeZone) {
  var sql = '';

  for (var key in object) {
    var val = object[key];

    if (typeof val === 'function') {
      continue;
    }

    sql += (sql.length === 0 ? '' : ', ') + SqlString.escapeId(key) + ' = ' + SqlString.escape(val, true, timeZone);
  }

  return sql;
};

SqlString.raw = function raw(sql) {
  if (typeof sql !== 'string') {
    throw new TypeError('argument sql must be a string');
  }

  return {
    toSqlString: function toSqlString() { return sql; }
  };
};

function escapeString(val) {
  var chunkIndex = CHARS_GLOBAL_REGEXP.lastIndex = 0;
  var escapedVal = '';
  var match;

  while ((match = CHARS_GLOBAL_REGEXP.exec(val))) {
    escapedVal += val.slice(chunkIndex, match.index) + CHARS_ESCAPE_MAP[match[0]];
    chunkIndex = CHARS_GLOBAL_REGEXP.lastIndex;
  }

  if (chunkIndex === 0) {
    // Nothing was escaped
    return "'" + val + "'";
  }

  if (chunkIndex < val.length) {
    return "'" + escapedVal + val.slice(chunkIndex) + "'";
  }

  return "'" + escapedVal + "'";
}

function zeroPad(number, length) {
  number = number.toString();
  while (number.length < length) {
    number = '0' + number;
  }

  return number;
}

function convertTimezone(tz) {
  if (tz === 'Z') {
    return 0;
  }

  var m = tz.match(/([\+\-\s])(\d\d):?(\d\d)?/);
  if (m) {
    return (m[1] === '-' ? -1 : 1) * (parseInt(m[2], 10) + ((m[3] ? parseInt(m[3], 10) : 0) / 60)) * 60;
  }
  return false;
}
});

var sqlstring = SqlString_1;

// Supported value types in the Data API
var supportedTypes = [
    'arrayValue',
    'blobValue',
    'booleanValue',
    'doubleValue',
    'isNull',
    'longValue',
    'stringValue',
    'structValue',
];
/** ***************************************************************** */
/**  PRIVATE METHODS                                               * */
/** ***************************************************************** */
// Simple error function
var error = function () {
    var err = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        err[_i] = arguments[_i];
    }
    throw Error.apply(void 0, err);
};
// Parse SQL statement from provided arguments
var parseSQL = function (args) { return (typeof args[0] === 'string'
    ? args[0]
    : typeof args[0] === 'object' && typeof args[0].sql === 'string'
        ? args[0].sql
        : error('No \'sql\' statement provided.')); };
// Parse the parameters from provided arguments
var parseParams = function (args) {
    if (Array.isArray(args[0].parameters)) {
        return args[0].parameters;
    }
    if (typeof args[0].parameters === 'object') {
        return [args[0].parameters];
    }
    if (Array.isArray(args[1])) {
        return args[1];
    }
    if (typeof args[1] === 'object') {
        return [args[1]];
    }
    if (args[0].parameters) {
        return error('\'parameters\' must be an object or array');
    }
    if (args[1]) {
        return error('Parameters must be an object or array');
    }
    return [];
};
// Parse the supplied database, or default to config
var parseDatabase = function (config, args) { return (config.transactionId
    ? config.database
    : typeof args[0].database === 'string'
        ? args[0].database
        : args[0].database
            ? error('\'database\' must be a string.')
            : config.database
                ? config.database
                : undefined); }; // removed for #47 - error('No \'database\' provided.')
// Parse the supplied hydrateColumnNames command, or default to config
var parseHydrate = function (config, args) { return (typeof args[0].hydrateColumnNames === 'boolean'
    ? args[0].hydrateColumnNames
    : args[0].hydrateColumnNames
        ? error('\'hydrateColumnNames\' must be a boolean.')
        : config.hydrateColumnNames); };
// Parse the supplied format options, or default to config
var parseFormatOptions = function (config, args) { return (typeof args[0].formatOptions === 'object'
    ? {
        deserializeDate: typeof args[0].formatOptions.deserializeDate === 'boolean'
            ? args[0].formatOptions.deserializeDate
            : args[0].formatOptions.deserializeDate
                ? error('\'formatOptions.deserializeDate\' must be a boolean.')
                : config.formatOptions.deserializeDate,
        treatAsLocalDate: typeof args[0].formatOptions.treatAsLocalDate === 'boolean'
            ? args[0].formatOptions.treatAsLocalDate
            : args[0].formatOptions.treatAsLocalDate
                ? error('\'formatOptions.treatAsLocalDate\' must be a boolean.')
                : config.formatOptions.treatAsLocalDate,
    }
    : args[0].formatOptions
        ? error('\'formatOptions\' must be an object.')
        : config.formatOptions); };
// Prepare method params w/ supplied inputs if an object is passed
var prepareParams = function (_a, args) {
    var secretArn = _a.secretArn, resourceArn = _a.resourceArn;
    return (__assign({ secretArn: secretArn, resourceArn: resourceArn }, (typeof args[0] === 'object' ? omit(args[0], ['hydrateColumnNames', 'parameters']) : {})));
};
// Utility function for removing certain keys from an object
var omit = function (obj, values) { return Object.keys(obj).reduce(function (acc, x) {
    var _a;
    return (values.includes(x) ? acc : Object.assign(acc, (_a = {}, _a[x] = obj[x], _a)));
}, {}); };
// Utility function for picking certain keys from an object
var pick = function (obj, values) { return Object.keys(obj).reduce(function (acc, x) {
    var _a;
    return (values.includes(x) ? Object.assign(acc, (_a = {}, _a[x] = obj[x], _a)) : acc);
}, {}); };
// Utility function for flattening arrays
var flatten = function (arr) { return arr.reduce(function (acc, x) { return acc.concat(x); }, []); };
// Normize parameters so that they are all in standard format
var normalizeParams = function (params) { return params.reduce(function (acc, p) { return (Array.isArray(p)
    ? acc.concat([normalizeParams(p)])
    : (Object.keys(p).length === 2 && p.name && typeof p.value !== 'undefined')
        || (Object.keys(p).length === 3 && p.name && typeof p.value !== 'undefined' && p.cast)
        ? acc.concat(p)
        : acc.concat(splitParams(p))); }, []); }; // end reduce
// Prepare parameters
var processParams = function (engine, sql, sqlParams, params, formatOptions, row) {
    if (row === void 0) { row = 0; }
    return ({
        processedParams: params.reduce(function (acc, p) {
            if (Array.isArray(p)) {
                var result = processParams(engine, sql, sqlParams, p, formatOptions, row);
                if (row === 0) {
                    sql = result.escapedSql;
                    row++;
                }
                return acc.concat([result.processedParams]);
            }
            if (sqlParams[p.name]) {
                if (sqlParams[p.name].type === 'n_ph') {
                    if (p.cast) {
                        var regex = new RegExp(':' + p.name + '\\b', 'g');
                        sql = sql.replace(regex, engine === 'pg' ? ":".concat(p.name, "::").concat(p.cast) : "CAST(:".concat(p.name, " AS ").concat(p.cast, ")"));
                    }
                    acc.push(formatParam(p.name, p.value, formatOptions));
                }
                else if (row === 0) {
                    var regex = new RegExp('::' + p.name + '\\b', 'g');
                    sql = sql.replace(regex, sqlstring.escapeId(p.value));
                }
                return acc;
            }
            return acc;
        }, []),
        escapedSql: sql,
    });
};
// Converts parameter to the name/value format
var formatParam = function (n, v, formatOptions) { return formatType(n, v, getType(v), getTypeHint(v), formatOptions); };
// Converts object params into name/value format
var splitParams = function (p) { return Object.keys(p).reduce(function (arr, x) { return arr.concat({ name: x, value: p[x] }); }, []); };
// Get all the sql parameters and assign them types
var getSqlParams = function (sql) {
    // TODO: probably need to remove comments from the sql
    // TODO: placeholders?
    // sql.match(/\:{1,2}\w+|\?+/g).map((p,i) => {
    return (sql.match(/:{1,2}\w+/g) || [])
        .map(function (p) {
        // TODO: future support for placeholder parsing?
        // return p === '??' ? { type: 'id' } // identifier
        //   : p === '?' ? { type: 'ph', label: '__d'+i  } // placeholder
        return (p.startsWith('::')
            ? { type: 'n_id', label: p.substr(2) } // named id
            : { type: 'n_ph', label: p.substr(1) });
    })
        .reduce(function (acc, x) {
        var _a;
        return Object.assign(acc, (_a = {},
            _a[x.label] = {
                type: x.type,
            },
            _a));
    }, {});
}; // end reduce
// Gets the value type and returns the correct value field name
// TODO: Support more types as the are released
var getType = function (val) { return (typeof val === 'string'
    ? 'stringValue'
    : typeof val === 'boolean'
        ? 'booleanValue'
        : typeof val === 'number' && parseInt(val) === val
            ? 'longValue'
            : typeof val === 'number' && parseFloat(val) === val
                ? 'doubleValue'
                : val === null
                    ? 'isNull'
                    : isDate(val)
                        ? 'stringValue'
                        : Buffer.isBuffer(val)
                            ? 'blobValue'
                            : // : Array.isArray(val) ? 'arrayValue' This doesn't work yet
                                // TODO: there is a 'structValue' now for postgres
                                typeof val === 'object' && Object.keys(val).length === 1 && supportedTypes.includes(Object.keys(val)[0])
                                    ? null
                                    : undefined); };
// Hint to specify the underlying object type for data type mapping
var getTypeHint = function (val) { return (isDate(val) ? 'TIMESTAMP' : undefined); };
var isDate = function (val) { return val instanceof Date; };
// Creates a standard Data API parameter using the supplied inputs
var formatType = function (name, value, type, typeHint, formatOptions) {
    var _a;
    return Object.assign(typeHint != null ? { name: name, typeHint: typeHint } : { name: name }, type === null
        ? { value: value }
        : {
            value: (_a = {},
                _a[type || error("'".concat(name, "' is an invalid type"))] = type === 'isNull'
                    ? true
                    : isDate(value)
                        ? formatToTimeStamp(value, formatOptions && formatOptions.treatAsLocalDate)
                        : value,
                _a),
        });
}; // end formatType
// Formats the (UTC) date to the AWS accepted YYYY-MM-DD HH:MM:SS[.FFF] format
// See https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_SqlParameter.html
var formatToTimeStamp = function (date, treatAsLocalDate) {
    var pad = function (val, num) {
        if (num === void 0) { num = 2; }
        return '0'.repeat(num - (val + '').length) + val;
    };
    var year = treatAsLocalDate ? date.getFullYear() : date.getUTCFullYear();
    var month = (treatAsLocalDate ? date.getMonth() : date.getUTCMonth()) + 1; // Convert to human month
    var day = treatAsLocalDate ? date.getDate() : date.getUTCDate();
    var hours = treatAsLocalDate ? date.getHours() : date.getUTCHours();
    var minutes = treatAsLocalDate ? date.getMinutes() : date.getUTCMinutes();
    var seconds = treatAsLocalDate ? date.getSeconds() : date.getUTCSeconds();
    var ms = treatAsLocalDate ? date.getMilliseconds() : date.getUTCMilliseconds();
    var fraction = ms <= 0 ? '' : ".".concat(pad(ms, 3));
    return "".concat(year, "-").concat(pad(month), "-").concat(pad(day), " ").concat(pad(hours), ":").concat(pad(minutes), ":").concat(pad(seconds)).concat(fraction);
};
// Converts the string value to a Date object.
// If standard TIMESTAMP format (YYYY-MM-DD[ HH:MM:SS[.FFF]]) without TZ + treatAsLocalDate=false then assume UTC Date
// In all other cases convert value to datetime as-is (also values with TZ info)
var formatFromTimeStamp = function (value, treatAsLocalDate) { return (!treatAsLocalDate && /^\d{4}-\d{2}-\d{2}(\s\d{2}:\d{2}:\d{2}(\.\d+)?)?$/.test(value)
    ? new Date(value + 'Z')
    : new Date(value)); };
// Formats the results of a query response
var formatResults = function (_a, hydrate, includeMeta, formatOptions) {
    var 
    // destructure results
    columnMetadata = _a.columnMetadata, // ONLY when hydrate or includeResultMetadata is true
    numberOfRecordsUpdated = _a.numberOfRecordsUpdated, // ONLY for executeStatement method
    records = _a.records, // ONLY for executeStatement method
    generatedFields = _a.generatedFields, // ONLY for INSERTS
    updateResults = _a.updateResults;
    return Object.assign(includeMeta ? { columnMetadata: columnMetadata } : {}, numberOfRecordsUpdated !== undefined && !records ? { numberOfRecordsUpdated: numberOfRecordsUpdated } : {}, records
        ? {
            records: formatRecords(records, columnMetadata, hydrate, formatOptions),
        }
        : {}, updateResults ? { updateResults: formatUpdateResults(updateResults) } : {}, generatedFields && generatedFields.length > 0 ? { insertId: generatedFields[0].longValue } : {});
};
// Processes records and either extracts Typed Values into an array, or
// object with named column labels
var formatRecords = function (recs, columns, hydrate, formatOptions) {
    // Create map for efficient value parsing
    var fmap = recs && recs[0]
        ? recs[0].map(function (x, i) { return (__assign({}, (columns ? { label: columns[i].label, typeName: columns[i].typeName } : {}))); })
        : {};
    // Map over all the records (rows)
    return recs
        ? recs.map(function (rec) {
            // Reduce each field in the record (row)
            return rec.reduce(function (acc, field, i) {
                var _a, _b, _c;
                // If the field is null, always return null
                if (field.isNull === true) {
                    return hydrate // object if hydrate, else array
                        ? Object.assign(acc, (_a = {}, _a[fmap[i].label] = null, _a))
                        : acc.concat(null);
                    // If the field is mapped, return the mapped field
                }
                if (fmap[i] && fmap[i].field) {
                    var value_1 = formatRecordValue(field[fmap[i].field], fmap[i].typeName, formatOptions);
                    return hydrate // object if hydrate, else array
                        ? Object.assign(acc, (_b = {}, _b[fmap[i].label] = value_1, _b))
                        : acc.concat(value_1);
                    // Else discover the field type
                }
                // Look for non-null fields
                Object.keys(field).map(function (type) {
                    if (type !== 'isNull' && field[type] !== null) {
                        fmap[i].field = type;
                    }
                });
                // Return the mapped field (this should NEVER be null)
                var value = formatRecordValue(field[fmap[i].field], fmap[i].typeName, formatOptions);
                return hydrate // object if hydrate, else array
                    ? Object.assign(acc, (_c = {}, _c[fmap[i].label] = value, _c))
                    : acc.concat(value);
            }, hydrate ? {} : []);
        })
        : []; // empty record set returns an array
}; // end formatRecords
// Format record value based on its value, the database column's typeName and the formatting options
var formatRecordValue = function (value, typeName, formatOptions) {
    if (formatOptions
        && formatOptions.deserializeDate
        && ['DATE', 'DATETIME', 'TIMESTAMP', 'TIMESTAMPTZ', 'TIMESTAMP WITH TIME ZONE'].includes(typeName.toUpperCase())) {
        return formatFromTimeStamp(value, (formatOptions && formatOptions.treatAsLocalDate) || typeName === 'TIMESTAMP WITH TIME ZONE');
    }
    if (typeName === 'JSON') {
        return JSON.parse(value);
    }
    return value;
};
// Format updateResults and extract insertIds
var formatUpdateResults = function (res) { return res.map(function (x) { return (x.generatedFields && x.generatedFields.length > 0 ? { insertId: x.generatedFields[0].longValue } : {}); }); };
// Merge configuration data with supplied arguments
var mergeConfig = function (initialConfig, args) { return (__assign(__assign({}, initialConfig), args)); };
/** ***************************************************************** */
/**  QUERY MANAGEMENT                                              * */
/** ***************************************************************** */
// Query function (use standard form for `this` context)
var query = function (config) {
    var _args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        _args[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var args, sql, sqlParams, hydrateColumnNames, formatOptions, parameters, _a, processedParams, escapedSql, isBatch, params, result, e_1, rollback;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    args = Array.isArray(_args[0]) ? flatten(_args) : _args;
                    sql = parseSQL(args);
                    sqlParams = getSqlParams(sql);
                    hydrateColumnNames = parseHydrate(config, args);
                    formatOptions = parseFormatOptions(config, args);
                    parameters = normalizeParams(parseParams(args));
                    _a = processParams(config.engine, sql, sqlParams, parameters, formatOptions), processedParams = _a.processedParams, escapedSql = _a.escapedSql;
                    isBatch = processedParams.length > 0 && Array.isArray(processedParams[0]);
                    params = Object.assign(prepareParams(config, args), {
                        database: parseDatabase(config, args),
                        sql: escapedSql, // add escaped sql statement
                    }, 
                    // Only include parameters if they exist
                    processedParams.length > 0
                        ? // Batch statements require parameterSets instead of parameters
                         (_b = {}, _b[isBatch ? 'parameterSets' : 'parameters'] = processedParams, _b) : {}, 
                    // Force meta data if set and not a batch
                    hydrateColumnNames && !isBatch ? { includeResultMetadata: true } : {}, 
                    // If a transactionId is passed, overwrite any manual input
                    config.transactionId ? { transactionId: config.transactionId } : {}) // end params
                    ;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, (isBatch
                            ? config.RDS.send(new BatchExecuteStatementCommand(params))
                            : config.RDS.send(new ExecuteStatementCommand(params)))
                        // Format and return the results
                    ];
                case 2:
                    result = _c.sent();
                    // Format and return the results
                    return [2 /*return*/, formatResults(result, hydrateColumnNames, args[0].includeResultMetadata === true, formatOptions)];
                case 3:
                    e_1 = _c.sent();
                    if (!(this && this.rollback)) return [3 /*break*/, 5];
                    return [4 /*yield*/, config.RDS.send(new RollbackTransactionCommand(pick(params, ['resourceArn', 'secretArn', 'transactionId'])))];
                case 4:
                    rollback = _c.sent();
                    this.rollback(e_1, rollback);
                    _c.label = 5;
                case 5: 
                // Throw the error
                throw e_1;
                case 6: return [2 /*return*/];
            }
        });
    });
}; // end query
/** ***************************************************************** */
/**  TRANSACTION MANAGEMENT                                        * */
/** ***************************************************************** */
// Init a transaction object and return methods
var transaction = function (config, _args) {
    var args = typeof _args === 'object' ? [_args] : [{}];
    var queries = []; // keep track of queries
    var rollback = function () { }; // default rollback event
    var txConfig = Object.assign(prepareParams(config, args), {
        database: parseDatabase(config, args),
        hydrateColumnNames: parseHydrate(config, args),
        formatOptions: parseFormatOptions(config, args),
        RDS: config.RDS, // reference the RDSDataService instance
    });
    return {
        query: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (typeof args[0] === 'function') {
                queries.push(args[0]);
            }
            else {
                queries.push(function () { return __spreadArray([], args, true); });
            }
            return this;
        },
        rollback: function (fn) {
            if (typeof fn === 'function') {
                rollback = fn;
            }
            return this;
        },
        commit: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, commit(txConfig, queries, rollback)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        },
    };
};
// Commit transaction by running queries
var commit = function (config, queries, rollback) { return __awaiter(void 0, void 0, void 0, function () {
    var results, transactionId, txConfig, i, result, transactionStatus;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                results = [] // keep track of results
                ;
                return [4 /*yield*/, config.RDS.beginTransaction(pick(config, ['resourceArn', 'secretArn', 'database'])).promise()
                    // Add transactionId to the config
                ];
            case 1:
                transactionId = (_a.sent()).transactionId;
                txConfig = Object.assign(config, { transactionId: transactionId });
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < queries.length)) return [3 /*break*/, 5];
                return [4 /*yield*/, query.apply({ rollback: rollback }, [config, queries[i](results[results.length - 1], results)])
                    // Add the result to the main results accumulator
                ];
            case 3:
                result = _a.sent();
                // Add the result to the main results accumulator
                results.push(result);
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5: return [4 /*yield*/, txConfig.RDS.commitTransaction(pick(config, ['resourceArn', 'secretArn', 'transactionId'])).promise()
                // Add the transaction status to the results
            ];
            case 6:
                transactionStatus = (_a.sent()).transactionStatus;
                // Add the transaction status to the results
                results.push({ transactionStatus: transactionStatus });
                // Return the results
                return [2 /*return*/, results];
        }
    });
}); };
/** ***************************************************************** */
/**  INSTANTIATION                                                 * */
/** ***************************************************************** */
// Export main function
/**
 * Create a Data API client instance
 * @param {object} params
 * @param {'mysql'|'pg'} [params.engine=mysql] The type of database (MySQL or Postgres)
 * @param {string} params.resourceArn The ARN of your Aurora Serverless Cluster
 * @param {string} params.secretArn The ARN of the secret associated with your
 *   database credentials
 * @param {string} [params.database] The name of the database
 * @param {boolean} [params.hydrateColumnNames=true] Return objects with column
 *   names as keys
 * @param {object} [params.options={}] Configuration object passed directly
 *   into RDSDataService
 * @param {object} [params.formatOptions] Date-related formatting options
 * @param {boolean} [params.formatOptions.deserializeDate=false]
 * @param {boolean} [params.formatOptions.treatAsLocalDate=false]
 * @param {boolean} [params.keepAlive] DEPRECATED
 * @param {boolean} [params.sslEnabled=true] DEPRECATED
 * @param {string} [params.region] DEPRECATED
 *
 */
var createDataApiClient = function (params) {
    // Set the options for the RDSDataService
    var options;
    if (typeof params.options === 'object') {
        options = params.options;
    }
    else if (params.options !== undefined) {
        options = error('\'options\' must be an object');
    }
    else {
        options = {};
    }
    // Update the AWS http agent with the region
    if (typeof params.region === 'string') {
        options.region = params.region;
    }
    // Disable ssl if wanted for local development
    if (params.sslEnabled === false) {
        options.sslEnabled = false;
    }
    // Set the configuration for this instance
    var config = {
        // Require engine
        engine: typeof params.engine === 'string' ? params.engine : 'mysql',
        // Require secretArn
        secretArn: typeof params.secretArn === 'string' ? params.secretArn : error('\'secretArn\' string value required'),
        // Require resourceArn
        resourceArn: typeof params.resourceArn === 'string' ? params.resourceArn : error('\'resourceArn\' string value required'),
        // Load optional database
        database: typeof params.database === 'string'
            ? params.database
            : params.database !== undefined
                ? error('\'database\' must be a string')
                : undefined,
        // Load optional schema DISABLED for now since this isn't used with MySQL
        // schema: typeof params.schema === 'string' ? params.schema
        //   : params.schema !== undefined ? error(`'schema' must be a string`)
        //   : undefined,
        // Set hydrateColumnNames (default to true)
        hydrateColumnNames: typeof params.hydrateColumnNames === 'boolean' ? params.hydrateColumnNames : true,
        // Value formatting options. For date the deserialization is enabled and (re)stored as UTC
        formatOptions: {
            deserializeDate: !(typeof params.formatOptions === 'object' && params.formatOptions.deserializeDate === false),
            treatAsLocalDate: typeof params.formatOptions === 'object' && params.formatOptions.treatAsLocalDate,
        },
        // TODO: Put this in a separate module for testing?
        // Create an instance of RDSDataService
        RDS: params.RDSDataClient ? new params.AWS.RDSDataClient(options) : new RDSDataClient(options),
    }; // end config
    // Return public methods
    return {
        // Query method, pass config and parameters
        query: function () {
            var x = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                x[_i] = arguments[_i];
            }
            return query.apply(void 0, __spreadArray([config], x, false));
        },
        // Transaction method, pass config and parameters
        transaction: function (x) { return transaction(config, x); },
        // Export promisified versions of the RDSDataService methods
        batchExecuteStatement: function (args) { return (config.RDS.send(new BatchExecuteStatementCommand(mergeConfig(pick(config, ['resourceArn', 'secretArn', 'database']), args)))); },
        beginTransaction: function (args) { return (config.RDS.send(new BeginTransactionCommand(mergeConfig(pick(config, ['resourceArn', 'secretArn', 'database']), args)))); },
        commitTransaction: function (args) { return (config.RDS.send(new CommitTransactionCommand(mergeConfig(pick(config, ['resourceArn', 'secretArn']), args)))); },
        executeStatement: function (args) { return (config.RDS.send(new ExecuteStatementCommand(mergeConfig(pick(config, ['resourceArn', 'secretArn', 'database']), args)))); },
        rollbackTransaction: function (args) { return (config.RDS.send(new RollbackTransactionCommand(mergeConfig(pick(config, ['resourceArn', 'secretArn']), args)))); },
    };
}; // end exports

var pad = function (val, num) {
    if (num === void 0) { num = 2; }
    return '0'.repeat(num - (val.toString()).length) + val;
};
var dateToDateTimeString = function (date) {
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1; // Convert to human month
    var day = date.getUTCDate();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var ms = date.getUTCMilliseconds();
    var fraction = ms <= 0 ? '' : ".".concat(pad(ms, 3));
    return "".concat(year, "-").concat(pad(month), "-").concat(pad(day), " ").concat(pad(hours), ":").concat(pad(minutes), ":").concat(pad(seconds)).concat(fraction);
};
var dateToDateString = function (date) {
    if (typeof date === 'string') {
        return date;
    }
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1; // Convert to human month
    var day = date.getUTCDate();
    return "".concat(year, "-").concat(pad(month), "-").concat(pad(day));
};
var dateToTimeString = function (date) {
    if (typeof date === 'string') {
        return date;
    }
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var ms = date.getUTCMilliseconds();
    var fraction = ms <= 0 ? '' : ".".concat(pad(ms, 3));
    return "".concat(pad(hours), ":").concat(pad(minutes), ":").concat(pad(seconds)).concat(fraction);
};
var simpleArrayToString = function (value) {
    if (Array.isArray(value)) {
        return value
            .map(function (i) { return String(i); })
            .join(',');
    }
    return value;
};
var stringToSimpleArray = function (value) {
    if (value instanceof String || typeof value === 'string') {
        if (value.length > 0) {
            return value.split(',');
        }
        return [];
    }
    return value;
};
var getDecimalCast = function (_a) {
    var precision = _a.precision, scale = _a.scale;
    if (!precision)
        return 'DECIMAL';
    if (!scale)
        return "DECIMAL(".concat(precision, ")");
    return "DECIMAL(".concat(precision, ",").concat(scale, ")");
};

var QueryTransformer = /** @class */ (function () {
    function QueryTransformer(transformOptions) {
        this.transformOptions = transformOptions;
    }
    QueryTransformer.prototype.transformQueryAndParameters = function (query, srcParameters) {
        if (srcParameters === void 0) { srcParameters = []; }
        if (!srcParameters.length) {
            return { queryString: query, parameters: [] };
        }
        var queryString = this.transformQuery(query, srcParameters);
        var parameters = this.transformParameters(srcParameters);
        return { queryString: queryString, parameters: parameters };
    };
    return QueryTransformer;
}());

var MysqlQueryTransformer = /** @class */ (function (_super) {
    __extends(MysqlQueryTransformer, _super);
    function MysqlQueryTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MysqlQueryTransformer.prototype.preparePersistentValue = function (value, metadata) {
        if (!value) {
            return value;
        }
        switch (metadata.type) {
            case 'date':
                return {
                    value: dateToDateString(value),
                    cast: 'DATE',
                };
            case 'time':
                return {
                    value: dateToTimeString(value),
                    cast: 'TIME',
                };
            case 'timestamp':
            case 'datetime':
            case Date:
                return {
                    value: dateToDateTimeString(value),
                    cast: 'DATETIME',
                };
            case 'decimal':
            case 'numeric':
                return {
                    value: '' + value,
                    cast: getDecimalCast(metadata),
                };
            case 'set':
            case 'simple-array':
                return {
                    value: simpleArrayToString(value),
                };
            case 'json':
            case 'simple-json':
                return {
                    value: JSON.stringify(value),
                };
            case 'enum':
            case 'simple-enum':
                return {
                    value: '' + value,
                };
            default:
                return {
                    value: value,
                };
        }
    };
    MysqlQueryTransformer.prototype.prepareHydratedValue = function (value, metadata) {
        if (value === null || value === undefined) {
            return value;
        }
        switch (metadata.type) {
            case Boolean:
                return !!value;
            case 'datetime':
            case Date:
            case 'timestamp':
            case 'timestamp with time zone':
            case 'timestamp without time zone':
                return typeof value === 'string' ? new Date(value + ' GMT+0') : value;
            case 'date':
                return dateToDateString(value);
            case 'year':
                return typeof value === 'string' ? new Date(value).getUTCFullYear() : value.getUTCFullYear();
            case 'time':
                return value;
            case 'set':
            case 'simple-array':
                return typeof value === 'string' ? stringToSimpleArray(value) : value;
            case 'json':
            case 'simple-json':
                return typeof value === 'string' ? JSON.parse(value) : value;
            case 'enum':
            case 'simple-enum':
                if (metadata.enum && !Number.isNaN(value) && metadata.enum.indexOf(parseInt(value, 10)) >= 0) {
                    return parseInt(value, 10);
                }
                return value;
            default:
                return value;
        }
    };
    MysqlQueryTransformer.prototype.transformQuery = function (query, parameters) {
        var quoteCharacters = ["'", '"'];
        var newQueryString = '';
        var currentQuote = null;
        var srcIndex = 0;
        var destIndex = 0;
        for (var i = 0; i < query.length; i += 1) {
            var currentCharacter = query[i];
            var currentCharacterEscaped = i !== 0 && query[i - 1] === '\\';
            if (currentCharacter === '?' && !currentQuote) {
                var parameter = parameters[srcIndex];
                if (Array.isArray(parameter)) {
                    // eslint-disable-next-line no-loop-func
                    var additionalParameters = parameter.map(function (_, index) { return ":param_".concat(destIndex + index); });
                    newQueryString += additionalParameters.join(', ');
                    destIndex += additionalParameters.length;
                }
                else {
                    newQueryString += ":param_".concat(destIndex);
                    destIndex += 1;
                }
                srcIndex += 1;
            }
            else {
                newQueryString += currentCharacter;
                if (quoteCharacters.includes(currentCharacter) && !currentCharacterEscaped) {
                    if (!currentQuote) {
                        currentQuote = currentCharacter;
                    }
                    else if (currentQuote === currentCharacter) {
                        currentQuote = null;
                    }
                }
            }
        }
        return newQueryString;
    };
    MysqlQueryTransformer.prototype.transformParameters = function (parameters) {
        if (!parameters) {
            return parameters;
        }
        var expandedParameters = this.expandArrayParameters(parameters);
        return expandedParameters.map(function (parameter, index) {
            if (parameter === undefined) {
                return parameter;
            }
            if (typeof parameter === 'object' && typeof (parameter === null || parameter === void 0 ? void 0 : parameter.value) !== 'undefined') {
                return (__assign({ name: "param_".concat(index) }, parameter));
            }
            return {
                name: "param_".concat(index),
                value: parameter,
            };
        });
    };
    MysqlQueryTransformer.prototype.expandArrayParameters = function (parameters) {
        return parameters.reduce(function (expandedParameters, parameter) {
            if (Array.isArray(parameter)) {
                expandedParameters.push.apply(expandedParameters, parameter);
            }
            else {
                expandedParameters.push(parameter);
            }
            return expandedParameters;
        }, []);
    };
    return MysqlQueryTransformer;
}(QueryTransformer));

var PostgresQueryTransformer = /** @class */ (function (_super) {
    __extends(PostgresQueryTransformer, _super);
    function PostgresQueryTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostgresQueryTransformer.prototype.preparePersistentValue = function (value, metadata) {
        if (!value) {
            return value;
        }
        switch (metadata.type) {
            case 'date':
                return {
                    value: dateToDateString(value),
                    cast: 'DATE',
                };
            case 'time':
                return {
                    value: dateToTimeString(value),
                    cast: 'TIME',
                };
            case 'time with time zone':
                return {
                    value: dateToTimeString(value),
                    cast: 'time with time zone',
                };
            case 'timetz':
                return {
                    value: dateToTimeString(value),
                    cast: 'timetz',
                };
            case 'interval':
                return {
                    value: value,
                    cast: 'interval',
                };
            case 'timestamp':
            case 'datetime':
            case 'timestamp with time zone':
            case 'timestamptz':
                return {
                    value: dateToDateTimeString(value),
                    cast: 'TIMESTAMP',
                };
            case 'decimal':
            case 'numeric':
                return {
                    value: '' + value,
                    cast: getDecimalCast(metadata),
                };
            case 'simple-array':
                return {
                    value: simpleArrayToString(value),
                };
            case 'simple-json':
            case 'json':
            case 'jsonb':
                return {
                    value: JSON.stringify(value),
                    cast: 'JSON',
                };
            case 'uuid':
                return {
                    value: '' + value,
                    cast: 'UUID',
                };
            case 'simple-enum':
            case 'enum':
                return {
                    value: '' + value,
                    cast: metadata.enumName || "".concat(metadata.entityMetadata.schema ? "".concat(metadata.entityMetadata.schema, ".") : '').concat(metadata.entityMetadata.tableName, "_").concat(metadata.databaseName.toLowerCase(), "_enum"),
                };
            default:
                return {
                    value: value,
                };
        }
    };
    PostgresQueryTransformer.prototype.prepareHydratedValue = function (value, metadata) {
        if (value === null || value === undefined) {
            return value;
        }
        switch (metadata.type) {
            case Boolean:
                return !!value;
            case 'datetime':
            case Date:
            case 'timestamp':
            case 'timestamp with time zone':
            case 'timestamp without time zone':
            case 'timestamptz':
                return typeof value === 'string' ? new Date(value + ' GMT+0') : value;
            case 'date':
                return dateToDateString(value);
            case 'time':
                return value;
            case 'hstore':
                if (metadata.hstoreType === 'object') {
                    var unescapeString_1 = function (str) { return str.replace(/\\./g, function (m) { return m[1]; }); };
                    var regexp = /"([^"\\]*(?:\\.[^"\\]*)*)"=>(?:(NULL)|"([^"\\]*(?:\\.[^"\\]*)*)")(?:,|$)/g;
                    var object_1 = {};
                    "".concat(value).replace(regexp, function (_, key, nullValue, stringValue) {
                        object_1[unescapeString_1(key)] = nullValue ? null : unescapeString_1(stringValue);
                        return '';
                    });
                    return object_1;
                }
                return value;
            case 'simple-array':
                return typeof value === 'string' ? stringToSimpleArray(value) : value;
            case 'json':
            case 'simple-json':
            case 'jsonb':
                return typeof value === 'string' ? JSON.parse(value) : value;
            case 'enum':
            case 'simple-enum':
                if (metadata.isArray) {
                    // manually convert enum array to array of values (pg does not support, see https://github.com/brianc/node-pg-types/issues/56)
                    value = value !== '{}' ? value.substr(1, value.length - 2)
                        .split(',') : [];
                    // convert to number if that exists in possible enum options
                    return value.map(function (val) { return (!Number.isNaN(+val) && metadata.enum.indexOf(parseInt(val, 10)) >= 0 ? parseInt(val, 10) : val); });
                }
                // convert to number if that exists in poosible enum options
                return !Number.isNaN(+value) && metadata.enum.indexOf(parseInt(value, 10)) >= 0 ? parseInt(value, 10) : value;
            default:
                return value;
        }
    };
    PostgresQueryTransformer.prototype.transformQuery = function (query) {
        var quoteCharacters = ["'", '"'];
        var newQueryString = '';
        var currentQuote = null;
        for (var i = 0; i < query.length; i += 1) {
            var currentCharacter = query[i];
            var currentCharacterEscaped = i !== 0 && query[i - 1] === '\\';
            if (currentCharacter === '$' && !currentQuote) {
                newQueryString += ':param_';
            }
            else {
                newQueryString += currentCharacter;
                if (quoteCharacters.includes(currentCharacter) && !currentCharacterEscaped) {
                    if (!currentQuote) {
                        currentQuote = currentCharacter;
                    }
                    else if (currentQuote === currentCharacter) {
                        currentQuote = null;
                    }
                }
            }
        }
        return newQueryString;
    };
    PostgresQueryTransformer.prototype.transformParameters = function (parameters) {
        var _this = this;
        if (!parameters) {
            return parameters;
        }
        return parameters.map(function (parameter, index) {
            var _a;
            if (parameter === undefined) {
                return parameter;
            }
            if (typeof parameter === 'object' && typeof (parameter === null || parameter === void 0 ? void 0 : parameter.value) !== 'undefined') {
                return (__assign({ name: "param_".concat(index + 1) }, parameter));
            }
            // Hack for UUID
            if (((_a = _this.transformOptions) === null || _a === void 0 ? void 0 : _a.enableUuidHack) && /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test('' + parameter)) {
                return {
                    name: "param_".concat(index + 1),
                    value: '' + parameter,
                    cast: 'uuid',
                };
            }
            return {
                name: "param_".concat(index + 1),
                value: parameter,
            };
        });
    };
    return PostgresQueryTransformer;
}(QueryTransformer));

var DataApiDriver = /** @class */ (function () {
    function DataApiDriver(region, secretArn, resourceArn, database, loggerFn, queryTransformer, serviceConfigOptions, formatOptions, queryConfigOptions) {
        if (loggerFn === void 0) { loggerFn = function () { return undefined; }; }
        this.region = region;
        this.secretArn = secretArn;
        this.resourceArn = resourceArn;
        this.database = database;
        this.loggerFn = loggerFn;
        this.queryTransformer = queryTransformer;
        this.serviceConfigOptions = serviceConfigOptions;
        this.formatOptions = formatOptions;
        this.queryConfigOptions = queryConfigOptions;
        this.region = region;
        this.secretArn = secretArn;
        this.resourceArn = resourceArn;
        this.database = database;
        this.loggerFn = loggerFn;
        this.serviceConfigOptions = serviceConfigOptions || {};
        this.serviceConfigOptions.region = region;
        this.client = createDataApiClient({
            secretArn: secretArn,
            resourceArn: resourceArn,
            database: database,
            options: this.serviceConfigOptions,
            formatOptions: formatOptions,
        });
        this.queryTransformer = queryTransformer;
        this.queryConfigOptions = serviceConfigOptions === null || serviceConfigOptions === void 0 ? void 0 : serviceConfigOptions.queryConfigOptions;
        this.transactionQueryChain = Promise.resolve();
    }
    DataApiDriver.prototype.query = function (query, parameters) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var transformedQueryData, config, notifyDone, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        transformedQueryData = this.queryTransformer.transformQueryAndParameters(query, parameters);
                        this.loggerFn(transformedQueryData.queryString, transformedQueryData.parameters);
                        config = {
                            sql: transformedQueryData.queryString,
                            parameters: transformedQueryData.parameters,
                            transactionId: this.transactionId,
                            continueAfterTimeout: (_b = (_a = this.queryConfigOptions) === null || _a === void 0 ? void 0 : _a.continueAfterTimeout) !== null && _b !== void 0 ? _b : false,
                        };
                        notifyDone = function () { };
                        if (!config.transactionId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.waitForTransaction()];
                    case 1:
                        notifyDone = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, this.client.query(config)];
                    case 3:
                        result = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        notifyDone();
                        return [7 /*endfinally*/];
                    case 5:
                        // TODO: Remove this hack when all Postgres calls in TypeORM use structured result
                        if (result.records) {
                            result = result.records;
                            result.records = result;
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    DataApiDriver.prototype.preparePersistentValue = function (value, columnMetadata) {
        return this.queryTransformer.preparePersistentValue(value, columnMetadata);
    };
    DataApiDriver.prototype.prepareHydratedValue = function (value, columnMetadata) {
        return this.queryTransformer.prepareHydratedValue(value, columnMetadata);
    };
    DataApiDriver.prototype.startTransaction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var transactionId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.beginTransaction()];
                    case 1:
                        transactionId = (_a.sent()).transactionId;
                        this.transactionId = transactionId;
                        return [2 /*return*/];
                }
            });
        });
    };
    DataApiDriver.prototype.commitTransaction = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.commitTransaction({ transactionId: this.transactionId })];
                    case 1:
                        _a.sent();
                        this.transactionId = undefined;
                        return [2 /*return*/];
                }
            });
        });
    };
    DataApiDriver.prototype.rollbackTransaction = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.rollbackTransaction({ transactionId: this.transactionId })];
                    case 1:
                        _a.sent();
                        this.transactionId = undefined;
                        return [2 /*return*/];
                }
            });
        });
    };
    DataApiDriver.prototype.waitForTransaction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var notifyDone, thisQueryExecuting, previousQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        notifyDone = function () { };
                        thisQueryExecuting = new Promise(function (resolve) {
                            notifyDone = function () {
                                resolve(undefined);
                            };
                        });
                        previousQuery = this.transactionQueryChain;
                        this.transactionQueryChain = previousQuery.then(function () { return thisQueryExecuting; });
                        return [4 /*yield*/, previousQuery];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, notifyDone];
                }
            });
        });
    };
    return DataApiDriver;
}());
var createMysqlDriver = function (region, secretArn, resourceArn, database, loggerFn, serviceConfigOptions, formatOptions) {
    if (loggerFn === void 0) { loggerFn = function () { return undefined; }; }
    return new DataApiDriver(region, secretArn, resourceArn, database, loggerFn, new MysqlQueryTransformer({ enableUuidHack: formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.enableUuidHack }), serviceConfigOptions, formatOptions);
};
var createPostgresDriver = function (region, secretArn, resourceArn, database, loggerFn, serviceConfigOptions, formatOptions) {
    if (loggerFn === void 0) { loggerFn = function () { return undefined; }; }
    return new DataApiDriver(region, secretArn, resourceArn, database, loggerFn, new PostgresQueryTransformer({ enableUuidHack: formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.enableUuidHack }), serviceConfigOptions, formatOptions);
};
var pg = createPostgresDriver;

export { MysqlQueryTransformer, PostgresQueryTransformer, createMysqlDriver as default, pg };
//# sourceMappingURL=typeorm-aurora-data-api-driver.es5.js.map
