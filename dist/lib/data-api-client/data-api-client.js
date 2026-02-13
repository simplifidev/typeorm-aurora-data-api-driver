"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDataApiClient = void 0;
// TODO: Add proper types and fix eslint errors
/* eslint-disable */
// @ts-nocheck
var client_rds_data_1 = require("@aws-sdk/client-rds-data");
var sqlstring_1 = require("sqlstring");
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
                    sql = sql.replace(regex, sqlstring_1.default.escapeId(p.value));
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
                            ? config.RDS.send(new client_rds_data_1.BatchExecuteStatementCommand(params))
                            : config.RDS.send(new client_rds_data_1.ExecuteStatementCommand(params)))
                        // Format and return the results
                    ];
                case 2:
                    result = _c.sent();
                    // Format and return the results
                    return [2 /*return*/, formatResults(result, hydrateColumnNames, args[0].includeResultMetadata === true, formatOptions)];
                case 3:
                    e_1 = _c.sent();
                    if (!(this && this.rollback)) return [3 /*break*/, 5];
                    return [4 /*yield*/, config.RDS.send(new client_rds_data_1.RollbackTransactionCommand(pick(params, ['resourceArn', 'secretArn', 'transactionId'])))];
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
        RDS: params.RDSDataClient ? new params.AWS.RDSDataClient(options) : new client_rds_data_1.RDSDataClient(options),
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
        batchExecuteStatement: function (args) { return (config.RDS.send(new client_rds_data_1.BatchExecuteStatementCommand(mergeConfig(pick(config, ['resourceArn', 'secretArn', 'database']), args)))); },
        beginTransaction: function (args) { return (config.RDS.send(new client_rds_data_1.BeginTransactionCommand(mergeConfig(pick(config, ['resourceArn', 'secretArn', 'database']), args)))); },
        commitTransaction: function (args) { return (config.RDS.send(new client_rds_data_1.CommitTransactionCommand(mergeConfig(pick(config, ['resourceArn', 'secretArn']), args)))); },
        executeStatement: function (args) { return (config.RDS.send(new client_rds_data_1.ExecuteStatementCommand(mergeConfig(pick(config, ['resourceArn', 'secretArn', 'database']), args)))); },
        rollbackTransaction: function (args) { return (config.RDS.send(new client_rds_data_1.RollbackTransactionCommand(mergeConfig(pick(config, ['resourceArn', 'secretArn']), args)))); },
    };
}; // end exports
exports.createDataApiClient = createDataApiClient;
//# sourceMappingURL=data-api-client.js.map