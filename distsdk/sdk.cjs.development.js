'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var graphqlRequest = require('graphql-request');
var ethers = require('ethers');
var BigNumber = require('bignumber.js');
var BigNumber__default = _interopDefault(BigNumber);
var logger$2 = require('@ethersproject/logger');
var BN = _interopDefault(require('bn.js'));
var bytes = require('@ethersproject/bytes');
var lodash = require('lodash');
var gql = _interopDefault(require('graphql-tag'));
var utils = require('ethers/lib/utils');

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// FIXME: add tests to ensure the proper DataSource is used. Setting a value to 0 causes issues rn
(function (DataSource) {
  DataSource[DataSource["LEDGER"] = 1] = "LEDGER";
  DataSource[DataSource["SUBGRAPH"] = 2] = "SUBGRAPH";
})(exports.DataSource || (exports.DataSource = {}));
// export function excludeHead<T extends any[]>(arr: readonly [any, ...T]) {
//   const [_, ...rest] = arr;
//   return rest;
// }

// import {Token} from '../classes/Token';
// import { ZERO_BN } from '../constants';
// import { bigNumberResult } from './Ledger';
// // import { STALK } from '~/constants/tokens';
// // -------------------------
// // BigNumber Comparators
// // -------------------------
// export function MinBNs(arr: BigNumber[]): BigNumber {
//   return arr.reduce((prev, curr) => {
//     if (prev.isLessThanOrEqualTo(curr)) {
//       return prev;
//     }
//     return curr;
//   });
// }
// export function MaxBNs(arr: BigNumber[]): BigNumber {
//   return arr.reduce((prev, curr) => (prev.isGreaterThan(curr) ? prev : curr));
// }
// export function MinBN(bn1: BigNumber, bn2: BigNumber): BigNumber {
//   if (bn1.isLessThanOrEqualTo(bn2)) return bn1;
//   return bn2;
// }
// export function MaxBN(bn1: BigNumber, bn2: BigNumber): BigNumber {
//   if (bn1.isGreaterThan(bn2)) return bn1;
//   return bn2;
// }
// // -------------------------
// // BigNumber Display Helpers
// // -------------------------
// /**
//  * Trim a BigNumber to a set number of decimals.
//  *
//  * @FIXME legacy code, seems very inefficient.
//  */
// export function TrimBN(bn: BigNumber, decimals: number, allowNegative: boolean = false): BigNumber {
//   if (typeof bn !== 'object') return new BigNumber(bn);
//   const numberString = bn.toString();
//   const decimalComponents = numberString.split('.');
//   if ((bn.isLessThan(0) && !allowNegative) || decimalComponents.length < 2) return bn;
//   // If too many decimals are provided, trim them.
//   // If there aren't enough decimals, do nothing.
//   // 1.123456 => [1, 123456]
//   const decimalsFound = decimalComponents[1].length;
//   const decimalsToTrim = decimalsFound < decimals ? 0 : decimalsFound - decimals;
//   return new BigNumber(numberString.substr(0, numberString.length - decimalsToTrim));
// }
/**
 * Display a BigNumber with the specified range of decimals.
 */
function displayFullBN(bn, maxDecimals, minDecimals) {
  if (maxDecimals === void 0) {
    maxDecimals = 18;
  }
  if (minDecimals === void 0) {
    minDecimals = 0;
  }
  return bn.toNumber().toLocaleString('en-US', {
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: maxDecimals
  });
}
// /**
//  * Display an amount of a Token. Uses the Token's preferred
//  * displayDecimals for display. Includes the Token name.
//  */
// export function displayTokenAmount(
//   amount: BigNumber,
//   token: Token,
//   config: {
//     allowNegative?: boolean;
//     showName?: boolean;
//     modifier?: string;
//   } = {
//     allowNegative: false,
//     showName: true,
//   }
// ) {
//   return `${(config.allowNegative ? amount : amount.abs()).toNumber().toLocaleString('en-US', {
//     maximumFractionDigits: token.displayDecimals,
//   })} ${config.modifier ? `${config.modifier} ` : ''}${config.showName ? token.name : ''}`;
// }
// /**
//  * Display a BigNumber with abbreviations for large numbers.
//  */
// export function displayBN(bn: BigNumber, allowNegative: boolean = false): string {
//   if (bn === undefined || !(bn instanceof BigNumber)) return '0';
//   if (bn.isLessThan(new BigNumber(0))) {
//     return allowNegative ? `-${displayBN(bn.multipliedBy(-1))}` : '0';
//   }
//   if (bn.isEqualTo(0)) {
//     return '0';
//   }
//   if (bn.isLessThanOrEqualTo(1e-8)) {
//     return '<.00000001';
//   }
//   if (bn.isLessThanOrEqualTo(1e-3)) {
//     return TrimBN(bn, 8).toFixed();
//   }
//   if (bn.isGreaterThanOrEqualTo(1e12)) {
//     return `${TrimBN(bn.dividedBy(1e12), 4)}T`; /* Trillions */
//   }
//   if (bn.isGreaterThanOrEqualTo(1e9)) {
//     return `${TrimBN(bn.dividedBy(1e9), 3)}B`; /* Billions */
//   }
//   if (bn.isGreaterThanOrEqualTo(1e8)) {
//     return `${TrimBN(bn.dividedBy(1e6), 2)}M`; /* Millions */
//   }
//   if (bn.isGreaterThanOrEqualTo(1e6)) {
//     return `${TrimBN(bn.dividedBy(1e6), 2)}M`; /* Millions */
//   }
//   if (bn.isGreaterThanOrEqualTo(1e3)) {
//     return `${displayFullBN(bn, 0)}`; /* Small Thousands */
//   }
//   const decimals = bn.isGreaterThan(10) ? 2 : bn.isGreaterThan(1) ? 3 : 4;
//   return TrimBN(bn, decimals).toFixed();
// }
// /**
//  *
//  */
// export function smallDecimalPercent(bn: BigNumber) {
//   if (bn.isLessThanOrEqualTo(1e-4)) return '<.0001';
//   // if (bn.isLessThanOrEqualTo(1e-4)) return bn.toFixed(5);
//   if (bn.isLessThanOrEqualTo(1e-3)) return bn.toFixed(4);
//   return TrimBN(bn, 3).toFixed();
// }
// /**
//  *
//  */
// export function displayUSD(bn: BigNumber, allowNegative: boolean = false) {
//   const v = allowNegative === false ? MaxBN(ZERO_BN, bn).abs() : bn;
//   return `$${displayFullBN(v, 2, 2)}`;
// }
// /**
//  * Standard Bean price display: truncate with ROUND_FLOOR.
//  *
//  * 0.99995 => "0.9999"
//  * 1.00006 => "1.0000"
//  *
//  * @param price Bean price
//  * @param decimals number of decimals to display
//  * @returns string; truncated Bean price
//  */
// export function displayBeanPrice(price: BigNumber, decimals: number = 4) {
//   return price.dp(decimals, BigNumber.ROUND_FLOOR).toFixed(decimals);
// }
// // export function displayStalk(
// //   stalk: BigNumber,
// //   decimals : number = STALK.displayDecimals,
// // ) {
// //   return stalk.lt(0.0001) ? '0' : displayFullBN(stalk, decimals);
// // }
// export function displayPercentage(pct: BigNumber, decimals: number = 4) {
//   return pct.lt(10 ** -decimals) ? '0%' : `${pct.toFixed(4)}%`;
// }
// // -------------------------
// // Token Unit Conversions
// // -------------------------
/**
 * Convert a "decimal amount" (decimal form) to "token amount" (integer form).
 * This is what's stored on chain.
 *
 * @param decimalAmt
 * @param decimals
 * @returns int
 */
function toBaseUnitBN(decimalAmt, decimals) {
  var amt = new BigNumber__default(decimalAmt);
  var base = new BigNumber__default(10);
  var decimalsBN = new BigNumber__default(decimals);
  var digits = base.pow(decimalsBN);
  return amt.multipliedBy(digits).integerValue();
}
/**
 * Convert a "token amount" (integer form) to "decimal amount" (decimal form).
 * This is typically what's displayed to users within the application.
 *
 * @param tokenAmt BigNumber.Value
 * @param decimals BigNumber.Value
 * @returns BigNumber
 */
function toTokenUnitsBN(tokenAmt, decimals) {
  var amt = new BigNumber__default(tokenAmt.toString());
  var base = new BigNumber__default(10);
  var decimalsBN = new BigNumber__default(decimals);
  var digits = base.pow(decimalsBN);
  return amt.dividedBy(digits);
}
/**
 * Convert a "raw amount" (decimal form) to "token amount" (integer form).
 * This is what's stored on chain.
 *
 * @param decimalAmt
 * @param decimals
 * @returns string
 */
function toStringBaseUnitBN(decimalAmt, decimals) {
  return toBaseUnitBN(decimalAmt, decimals).toFixed();
}

var Tokens = {
  __proto__: null,
  displayFullBN: displayFullBN,
  toBaseUnitBN: toBaseUnitBN,
  toTokenUnitsBN: toTokenUnitsBN,
  toStringBaseUnitBN: toStringBaseUnitBN
};

var enumFromValue = function enumFromValue(val, _enum) {
  // @ts-ignore
  var enumName = Object.keys(_enum).find(function (k) {
    return _enum[k] === val;
  });
  if (!enumName) throw Error("The network id " + val + " is not valid");
  return _enum[enumName];
};
function assert(condition, message) {
  if (!condition) throw Error(message || 'Assertion failed');
}
var zeros = function zeros(numZeros) {
  return ''.padEnd(numZeros, '0');
};

var index = {
  __proto__: null,
  tokens: Tokens,
  enumFromValue: enumFromValue,
  assert: assert,
  zeros: zeros
};

var logger = /*#__PURE__*/new logger$2.Logger('beannumber');
var _constructorGuard = {};
var MAX_SAFE = 0x1fffffffffffff;
// Only warn about passing 10 into radix once
var _warnedToStringRadix = false;
var BeanNumber = /*#__PURE__*/function () {
  function BeanNumber(constructorGuard, hex) {
    this._hex = void 0;
    this._isBigNumber = void 0;
    this._decimals = void 0;
    if (constructorGuard !== _constructorGuard) {
      logger.throwError('cannot call constructor directly; use BigNumber.from', logger$2.Logger.errors.UNSUPPORTED_OPERATION, {
        operation: 'new (BigNumber)'
      });
    }
    this._hex = hex;
    this._isBigNumber = true;
    // don't freeze everything
    // Object.freeze(this);
    Object.defineProperty(this, '_hex', {
      configurable: false,
      writable: false
    });
    Object.defineProperty(this, 'isBigNumber', {
      configurable: false,
      writable: false
    });
  }
  ////// Custom methods
  var _proto = BeanNumber.prototype;
  //////
  _proto.fromTwos = function fromTwos(value) {
    return toBeanNumbe(toBN(this).fromTwos(value));
  };
  _proto.toTwos = function toTwos(value) {
    return toBeanNumbe(toBN(this).toTwos(value));
  };
  _proto.abs = function abs() {
    if (this._hex[0] === '-') {
      return BeanNumber.from(this._hex.substring(1));
    }
    return this;
  };
  _proto.add = function add(other) {
    return toBeanNumbe(toBN(this).add(toBN(other)));
  };
  _proto.sub = function sub(other) {
    return toBeanNumbe(toBN(this).sub(toBN(other)));
  };
  _proto.div = function div(other) {
    var o = BeanNumber.from(other);
    if (o.isZero()) {
      throwFault('division-by-zero', 'div');
    }
    return toBeanNumbe(toBN(this).div(toBN(other)));
  };
  _proto.mul = function mul(other) {
    return toBeanNumbe(toBN(this).mul(toBN(other)));
  };
  _proto.mod = function mod(other) {
    var value = toBN(other);
    if (value.isNeg()) {
      throwFault('division-by-zero', 'mod');
    }
    return toBeanNumbe(toBN(this).umod(value));
  };
  _proto.pow = function pow(other) {
    var value = toBN(other);
    if (value.isNeg()) {
      throwFault('negative-power', 'pow');
    }
    return toBeanNumbe(toBN(this).pow(value));
  };
  _proto.and = function and(other) {
    var value = toBN(other);
    if (this.isNegative() || value.isNeg()) {
      throwFault('unbound-bitwise-result', 'and');
    }
    return toBeanNumbe(toBN(this).and(value));
  };
  _proto.or = function or(other) {
    var value = toBN(other);
    if (this.isNegative() || value.isNeg()) {
      throwFault('unbound-bitwise-result', 'or');
    }
    return toBeanNumbe(toBN(this).or(value));
  };
  _proto.xor = function xor(other) {
    var value = toBN(other);
    if (this.isNegative() || value.isNeg()) {
      throwFault('unbound-bitwise-result', 'xor');
    }
    return toBeanNumbe(toBN(this).xor(value));
  };
  _proto.mask = function mask(value) {
    if (this.isNegative() || value < 0) {
      throwFault('negative-width', 'mask');
    }
    return toBeanNumbe(toBN(this).maskn(value));
  };
  _proto.shl = function shl(value) {
    if (this.isNegative() || value < 0) {
      throwFault('negative-width', 'shl');
    }
    return toBeanNumbe(toBN(this).shln(value));
  };
  _proto.shr = function shr(value) {
    if (this.isNegative() || value < 0) {
      throwFault('negative-width', 'shr');
    }
    return toBeanNumbe(toBN(this).shrn(value));
  };
  _proto.eq = function eq(other) {
    return toBN(this).eq(toBN(other));
  };
  _proto.lt = function lt(other) {
    return toBN(this).lt(toBN(other));
  };
  _proto.lte = function lte(other) {
    return toBN(this).lte(toBN(other));
  };
  _proto.gt = function gt(other) {
    return toBN(this).gt(toBN(other));
  };
  _proto.gte = function gte(other) {
    return toBN(this).gte(toBN(other));
  };
  _proto.isNegative = function isNegative() {
    return this._hex[0] === '-';
  };
  _proto.isZero = function isZero() {
    return toBN(this).isZero();
  };
  _proto.toNumber = function toNumber() {
    try {
      return toBN(this).toNumber();
    } catch (error) {
      throwFault('overflow', 'toNumber', this.toString());
    }
  };
  _proto.toBigInt = function toBigInt() {
    try {
      return BigInt(this.toString());
    } catch (e) {}
    return logger.throwError('this platform does not support BigInt', logger$2.Logger.errors.UNSUPPORTED_OPERATION, {
      value: this.toString()
    });
  };
  _proto.toString = function toString() {
    // Lots of people expect this, which we do not support, so check (See: #889)
    if (arguments.length > 0) {
      if (arguments[0] === 10) {
        if (!_warnedToStringRadix) {
          _warnedToStringRadix = true;
          logger.warn('BigNumber.toString does not accept any parameters; base-10 is assumed');
        }
      } else if (arguments[0] === 16) {
        logger.throwError('BigNumber.toString does not accept any parameters; use bigNumber.toHexString()', logger$2.Logger.errors.UNEXPECTED_ARGUMENT, {});
      } else {
        logger.throwError('BigNumber.toString does not accept parameters', logger$2.Logger.errors.UNEXPECTED_ARGUMENT, {});
      }
    }
    return toBN(this).toString(10);
  };
  _proto.toHexString = function toHexString() {
    return this._hex;
  };
  _proto.toJSON = function toJSON(key) {
    return {
      type: 'BigNumber',
      hex: this.toHexString()
    };
  };
  BeanNumber.from = function from(value) {
    // TODO verify BigNumber pass here too
    if (value instanceof BeanNumber) {
      return value;
    }
    if (typeof value === 'string') {
      if (value.match(/^-?0x[0-9a-f]+$/i)) {
        return new BeanNumber(_constructorGuard, toHex(value));
      }
      if (value.match(/^-?[0-9]+$/)) {
        return new BeanNumber(_constructorGuard, toHex(new BN(value)));
      }
      return logger.throwArgumentError('invalid BigNumber string', 'value', value);
    }
    if (typeof value === 'number') {
      if (value % 1) {
        throwFault('underflow', 'BigNumber.from', value);
      }
      if (value >= MAX_SAFE || value <= -MAX_SAFE) {
        throwFault('overflow', 'BigNumber.from', value);
      }
      return BeanNumber.from(String(value));
    }
    var anyValue = value;
    if (typeof anyValue === 'bigint') {
      return BeanNumber.from(anyValue.toString());
    }
    if (bytes.isBytes(anyValue)) {
      return BeanNumber.from(bytes.hexlify(anyValue));
    }
    if (anyValue) {
      // Hexable interface (takes priority)
      if (anyValue.toHexString) {
        var hex = anyValue.toHexString();
        if (typeof hex === 'string') {
          return BeanNumber.from(hex);
        }
      } else {
        // For now, handle legacy JSON-ified values (goes away in v6)
        var _hex = anyValue._hex;
        // New-form JSON
        if (_hex == null && anyValue.type === 'BigNumber') {
          _hex = anyValue.hex;
        }
        if (typeof _hex === 'string') {
          if (bytes.isHexString(_hex) || _hex[0] === '-' && bytes.isHexString(_hex.substring(1))) {
            return BeanNumber.from(_hex);
          }
        }
      }
    }
    return logger.throwArgumentError('invalid BigNumber value', 'value', value);
  };
  BeanNumber.isBigNumber = function isBigNumber(value) {
    return !!(value && value._isBigNumber);
  };
  _createClass(BeanNumber, [{
    key: "decimals",
    get: function get() {
      return this._decimals;
    },
    set: function set(decimals) {
      this._decimals = decimals;
      Object.defineProperty(this, "_decimals", {
        configurable: false,
        writable: false
      });
    }
  }]);
  return BeanNumber;
}();
// Normalize the hex string
function toHex(value) {
  // For BN, call on the hex string
  if (typeof value !== 'string') {
    return toHex(value.toString(16));
  }
  // If negative, prepend the negative sign to the normalized positive value
  if (value[0] === '-') {
    // Strip off the negative sign
    value = value.substring(1);
    // Cannot have multiple negative signs (e.g. "--0x04")
    if (value[0] === '-') {
      logger.throwArgumentError('invalid hex', 'value', value);
    }
    // Call toHex on the positive component
    value = toHex(value);
    // Do not allow "-0x00"
    if (value === '0x00') {
      return value;
    }
    // Negate the value
    return '-' + value;
  }
  // Add a "0x" prefix if missing
  if (value.substring(0, 2) !== '0x') {
    value = '0x' + value;
  }
  // Normalize zero
  if (value === '0x') {
    return '0x00';
  }
  // Make the string even length
  if (value.length % 2) {
    value = '0x0' + value.substring(2);
  }
  // Trim to smallest even-length string
  while (value.length > 4 && value.substring(0, 4) === '0x00') {
    value = '0x' + value.substring(4);
  }
  return value;
}
function toBeanNumbe(value) {
  return BeanNumber.from(toHex(value));
}
function toBN(value) {
  var hex = BeanNumber.from(value).toHexString();
  if (hex[0] === '-') {
    return new BN('-' + hex.substring(3), 16);
  }
  return new BN(hex.substring(2), 16);
}
function throwFault(fault, operation, value) {
  var params = {
    fault: fault,
    operation: operation
  };
  if (value != null) {
    params.value = value;
  }
  return logger.throwError(fault, logger$2.Logger.errors.NUMERIC_FAULT, params);
}

var logger$1 = /*#__PURE__*/new logger$2.Logger('BeanNumber');
var names = ['wei', 'kwei', 'mwei', 'gwei', 'szabo', 'finney', 'ether'];
var zeros$1 = '0';
while (zeros$1.length < 256) {
  zeros$1 += zeros$1;
}
var NegativeOne = /*#__PURE__*/ethers.BigNumber.from(-1);
var parseUnits = function parseUnits(value, unitName) {
  if (typeof value !== 'string') {
    logger$1.throwArgumentError('value must be a string', 'value', value);
  }
  if (typeof unitName === 'string') {
    var index = names.indexOf(unitName);
    if (index !== -1) {
      unitName = 3 * index;
    }
  }
  return parseFixed(value, unitName != null ? unitName : 18);
};
function throwFault$1(message, fault, operation, value) {
  var params = {
    fault: fault,
    operation: operation
  };
  if (value !== undefined) {
    params.value = value;
  }
  return logger$1.throwError(message, logger$2.Logger.errors.NUMERIC_FAULT, params);
}
function getMultiplier(decimals) {
  if (typeof decimals !== 'number') {
    try {
      decimals = BeanNumber.from(decimals).toNumber();
    } catch (e) {}
  }
  if (typeof decimals === 'number' && decimals >= 0 && decimals <= 256 && !(decimals % 1)) {
    return '1' + zeros$1.substring(0, decimals);
  }
  return logger$1.throwArgumentError('invalid decimal size', 'decimals', decimals);
}
function parseFixed(value, decimals) {
  if (decimals == null) {
    decimals = 0;
  }
  var multiplier = getMultiplier(decimals);
  if (typeof value !== 'string' || !value.match(/^-?[0-9.]+$/)) {
    logger$1.throwArgumentError('invalid decimal value', 'value', value);
  }
  // Is it negative?
  var negative = value.substring(0, 1) === '-';
  if (negative) {
    value = value.substring(1);
  }
  if (value === '.') {
    logger$1.throwArgumentError('missing value', 'value', value);
  }
  // Split it into a whole and fractional part
  var comps = value.split('.');
  if (comps.length > 2) {
    logger$1.throwArgumentError('too many decimal points', 'value', value);
  }
  var whole = comps[0],
    fraction = comps[1];
  if (!whole) {
    whole = '0';
  }
  if (!fraction) {
    fraction = '0';
  }
  // Trim trailing zeros
  while (fraction[fraction.length - 1] === '0') {
    fraction = fraction.substring(0, fraction.length - 1);
  }
  // Check the fraction doesn't exceed our decimals size
  if (fraction.length > multiplier.length - 1) {
    throwFault$1('fractional component exceeds decimals', 'underflow', 'parseFixed');
  }
  // If decimals is 0, we have an empty string for fraction
  if (fraction === '') {
    fraction = '0';
  }
  // Fully pad the string with zeros to get to wei
  while (fraction.length < multiplier.length - 1) {
    fraction += '0';
  }
  var wholeValue = BeanNumber.from(whole);
  var fractionValue = BeanNumber.from(fraction);
  var wei = wholeValue.mul(multiplier).add(fractionValue);
  if (negative) {
    wei = wei.mul(NegativeOne);
  }
  return wei;
}
function trim(numberString, decimals) {
  var decimalComponents = numberString.split('.');
  var decimalsFound = decimalComponents[1].length;
  var decimalsToTrim = decimalsFound < decimals ? 0 : decimalsFound - decimals;
  return BeanNumber.from(numberString.substr(0, numberString.length - decimalsToTrim));
}

BeanNumber.fromBigNumber = function (bn, decimals) {
  console.log(decimals);
  var n = BeanNumber.from(bn);
  if (decimals) n.decimals = decimals;
  return n;
};
BeanNumber.fromHuman = function (value, decimals) {
  if (!value) {
    throw new Error('Must provide value to BigNumber.fromHuman(value,decimals)');
  }
  if (!decimals) {
    throw new Error('Must provide decimals to BigNumber.fromHuman(value,decimals)');
  }
  var _value$split = value.split('.'),
    _int = _value$split[0],
    safeDecimals = _value$split[1];
  if (safeDecimals && safeDecimals.length > decimals) {
    safeDecimals = safeDecimals.substring(0, decimals);
  }
  var safeValue = safeDecimals ? _int + "." + safeDecimals : _int;
  var result = parseUnits(safeValue, decimals);
  return result;
};
BeanNumber.prototype.toHuman = function (decimals) {
  return ethers.utils.formatUnits(this, decimals);
};
BeanNumber.prototype.display = function display(decimals, allowNegative) {
  var _this = this;
  if (allowNegative === void 0) {
    allowNegative = false;
  }
  var fakeDiv = function fakeDiv(_decimals, _divisor) {
    var divisor = _divisor * Math.pow(10, _decimals);
    var quotient = _this.div(divisor);
    var remainder = _this.mod(divisor);
    var result = quotient.toString() + "." + remainder.toString();
    return result;
  };
  if (this.lt(BeanNumber.from(0))) {
    return allowNegative ? "-" + this.mul('-1').display(decimals) : '0';
  }
  if (this.eq(0)) {
    return '0';
  }
  if (this.lte(1e-8)) {
    return '<.00000001';
  }
  if (this.lte(1e-3)) {
    // FIXME add .toFixed()
    // return trim(this.toString(), 8).toFixed();
    return trim(this.toString(), 8).toString();
  }
  if (this.gte(1e12)) {
    return trim(fakeDiv(decimals, 1e12), 4) + "T"; /* Trillions */
  }

  if (this.gte(1e9)) {
    return trim(fakeDiv(decimals, 1e9), 3) + "B"; /* Billions */
  }

  if (this.gte(1e8)) {
    return trim(fakeDiv(decimals, 1e6), 2) + "M"; /* Millions */
  }

  if (this.gte(1e6)) {
    return trim(fakeDiv(decimals, 1e6), 2) + "M"; /* Millions */
  }

  if (this.gte(1e3)) {
    return "" + this.displayFull(0); /* Small Thousands */
  }

  var decimals2 = this.gt(10) ? 2 : this.gt(1) ? 3 : 4;
  // FIX ME, add .toFixed()
  // return trim(this.toString(), decimals2).toFixed();
  return trim(this.toString(), decimals2).toString();
};
BeanNumber.prototype.displayFull = function displayFull(maxDecimals, minDecimals) {
  if (maxDecimals === void 0) {
    maxDecimals = 18;
  }
  if (minDecimals === void 0) {
    minDecimals = 0;
  }
  return this.toNumber().toLocaleString('en-US', {
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: maxDecimals
  });
};

/**
 * List of supported chains
 */
(function (ChainId) {
  ChainId[ChainId["MAINNET"] = 1] = "MAINNET";
  ChainId[ChainId["CUJO"] = 31337] = "CUJO";
  ChainId[ChainId["LOCALHOST"] = 1337] = "LOCALHOST";
})(exports.ChainId || (exports.ChainId = {}));
/**
 * These chains are forks of mainnet,
 * therefore they use the same token addresses as mainnet.
 */
var TESTNET_CHAINS = /*#__PURE__*/new Set([exports.ChainId.LOCALHOST, exports.ChainId.CUJO]);

var Address = /*#__PURE__*/function () {
  Address.make = function make(input) {
    var addresses = {};
    if (typeof input == 'string') {
      addresses[exports.ChainId.MAINNET] = input;
    } else {
      Object.assign(addresses, input);
    }
    // Make address values lowercase
    var lowerCaseAddresses = {};
    for (var key in addresses) {
      lowerCaseAddresses[key] = addresses[key].toLowerCase();
    }
    return new Address(lowerCaseAddresses);
  };
  function Address(addresses) {
    this.addresses = void 0;
    this.MAINNET = void 0;
    this.CUJO = void 0;
    this.LOCALHOST = void 0;
    this.addresses = addresses;
    this.MAINNET = this.addresses[exports.ChainId.MAINNET];
    this.CUJO = this.addresses[exports.ChainId.CUJO];
    this.LOCALHOST = this.addresses[exports.ChainId.LOCALHOST];
  }
  var _proto = Address.prototype;
  _proto.get = function get(chainId) {
    // Default to MAINNET if no chain is specified
    if (!chainId) {
      return this.addresses[exports.ChainId.MAINNET];
    }
    // Throw if user wants a specific chain which we don't support
    if (!exports.ChainId[chainId]) {
      throw new Error("Chain ID " + chainId + " is not supported");
    }
    // If user wants an address on a TESTNET chain
    // return mainnet one if it's not found
    if (TESTNET_CHAINS.has(chainId)) {
      return this.addresses[chainId] || this.addresses[exports.ChainId.MAINNET];
    }
    return this.addresses[chainId];
  };
  _proto.set = function set(input) {
    var newAddress = Address.make(input);
    Object.assign(this, newAddress);
  };
  return Address;
}();

var addresses = {
  // ----------------------------------------
  // Beanstalk Contracts
  // ----------------------------------------
  BEANSTALK: /*#__PURE__*/Address.make('0xC1E088fC1323b20BCBee9bd1B9fC9546db5624C5'),
  BEANSTALK_PRICE: /*#__PURE__*/Address.make('0xA57289161FF18D67A68841922264B317170b0b81'),
  BEANSTALK_FERTILIZER: /*#__PURE__*/Address.make('0x402c84De2Ce49aF88f5e2eF3710ff89bFED36cB6'),
  BARNRAISE_CUSTODIAN: /*#__PURE__*/Address.make('0xa9bA2C40b263843C04d344727b954A545c81D043'),
  // ----------------------------------------
  // BeaNFT Contracts
  // ----------------------------------------
  BEANFT_GENESIS: /*#__PURE__*/Address.make('0xa755A670Aaf1FeCeF2bea56115E65e03F7722A79'),
  BEANFT_WINTER_ADDRESSES: /*#__PURE__*/Address.make('0x459895483556daD32526eFa461F75E33E458d9E9'),
  // ----------------------------------------
  // Bean & Unripe Bean Tokens
  // ----------------------------------------
  BEAN: /*#__PURE__*/Address.make('0xBEA0000029AD1c77D3d5D23Ba2D8893dB9d1Efab'),
  ROOT: /*#__PURE__*/Address.make('0x3d5965EB520E53CC1A6AEe3A44E5c1De406E028F'),
  // --------------------------------------------------
  UNRIPE_BEAN:
  /*#__PURE__*/
  // "Unripe Bean": Unripe vesting asset for the Bean token, Localhost
  Address.make('0x1BEA0050E63e05FBb5D8BA2f10cf5800B6224449'),
  // --------------------------------------------------
  UNRIPE_BEAN_CRV3:
  /*#__PURE__*/
  // "Unripe BEAN:C,V3 LP": Unripe vesting asset for the BEAN:CRV3 LP token, Localhost
  Address.make('0x1BEA3CcD22F4EBd3d37d731BA31Eeca95713716D'),
  // ----------------------------------------
  // Common ERC-20 Tokens
  // ----------------------------------------
  WETH: /*#__PURE__*/Address.make('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'),
  DAI: /*#__PURE__*/Address.make('0x6B175474E89094C44Da98b954EedeAC495271d0F'),
  USDC: /*#__PURE__*/Address.make('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'),
  USDT: /*#__PURE__*/Address.make('0xdAC17F958D2ee523a2206206994597C13D831ec7'),
  CRV3: /*#__PURE__*/Address.make('0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490'),
  LUSD: /*#__PURE__*/Address.make('0x5f98805A4E8be255a32880FDeC7F6728C6568bA0'),
  // ----------------------------------------
  // Curve Pools: BEAN
  // ----------------------------------------
  BEAN_CRV3:
  /*#__PURE__*/
  // "Curve.fi Factory USD Metapool: Bean (BEAN3CRV-f)"
  // [Implements: ERC20 & Metapool]
  // --------------------------------------------------
  // coins[0] = 0xBEA0003eA948Db32082Fc6F4EC0729D258a0444c (BEAN)
  // coins[1] = 0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490 (3CRV)
  //
  // 1. Creates a BEAN:3CRV Metapool contract.
  // 2. Issues BEAN3CRV-f, the pool's LP token. The pool address and
  //    the LP token address are identical. Note that this is NOT the
  //    case for 3pool itself on Mainnet:
  //    - 3CRV (the 3pool LP Token) = 0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490
  //    - 3pool Contract            = 0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7
  Address.make('0xc9C32cd16Bf7eFB85Ff14e0c8603cc90F6F2eE49'),
  // ----------------------------------------
  // Curve Pools: Other
  // ----------------------------------------
  // --------------------------------------------------
  POOL3:
  /*#__PURE__*/
  // "Curve.fi: DAI/USDC/USDT Pool" (aka 3pool)
  // --------------------------------------------------
  // coins[0] = 0x6B175474E89094C44Da98b954EedeAC495271d0F (DAI)
  // coins[1] = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 (USDC)
  // coins[2] = 0xdAC17F958D2ee523a2206206994597C13D831ec7 (USDT)
  Address.make('0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7'),
  // --------------------------------------------------
  TRICRYPTO2:
  /*#__PURE__*/
  // tricrypto2
  // --------------------------------------------------
  // coins[0] = 0xdAC17F958D2ee523a2206206994597C13D831ec7 (USDT)
  // coins[1] = 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599 (WBTC)
  // coins[2] = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 (WETH)
  Address.make('0xD51a44d3FaE010294C616388b506AcdA1bfAAE46'),
  // ----------------------------------------
  // Curve: Registries / Factories / Utils
  // ----------------------------------------
  // "metapool" and "cryptoswap" are simultaneously
  // - "registries" (they track a list of pools)
  // - "factories"  (they allow creation of new pools)
  // 3pool, etc.
  POOL_REGISTRY: /*#__PURE__*/Address.make('0x90e00ace148ca3b23ac1bc8c240c2a7dd9c2d7f5'),
  // X:3CRV, etc. aka StableFactory
  META_FACTORY: /*#__PURE__*/Address.make('0xB9fC157394Af804a3578134A6585C0dc9cc990d4'),
  // tricrypto2, etc.
  CRYPTO_FACTORY: /*#__PURE__*/Address.make('0x8F942C20D02bEfc377D41445793068908E2250D0'),
  // zap
  CURVE_ZAP: /*#__PURE__*/Address.make('0xA79828DF1850E8a3A3064576f380D90aECDD3359'),
  // BEAN_ETH_UNIV2_LP !! Deprecated
  BEAN_ETH_UNIV2_LP: /*#__PURE__*/Address.make('0x87898263B6C5BABe34b4ec53F22d98430b91e371'),
  // BEAN_LUSD_LP !! Deprecated
  BEAN_LUSD_LP: /*#__PURE__*/Address.make('0xD652c40fBb3f06d6B58Cb9aa9CFF063eE63d465D')
};

/* Diamonds */
var NEW_BeanNumber = /*#__PURE__*/BeanNumber.from('-1');
var ZERO_BN = /*#__PURE__*/new BigNumber__default(0);
var MAX_UINT256 = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

// import type Token from '~/classes/Token';
// import { ChainConstant, SupportedChainId } from '~/constants';
// import { toTokenUnitsBN } from './Tokens';
// -------------------------
// Chain Result Helpers
// -------------------------
// export enum Source {
//   SUBGRAPH,
//   LOCAL
// }
// -------------------------
// Chain Result Helpers
// -------------------------
// export const identityResult = (result: any) => result;
// FIXME: `instanceof BNJS` call; is this faster than always calling `.toString()`?
// export const bigNumberResult = (result: any) => new BigNumber(result instanceof BNJS ? result.toString() : result);
// TODO: Discuss this
var bigNumberResult = function bigNumberResult(result) {
  return new BigNumber__default(result.hasOwnProperty('_hex') ? result.toString() : result);
};
// /**
//  * Return a formatted error string from a transaction error thrown by ethers.
//  * @FIXME improve parsing
//  */
// export const parseError = (error: any) => {
//   switch (error.code) {
//     /// ethers
//     case 'UNSUPPORTED_OPERATION':
//     case 'CALL_EXCEPTION':
//     case 'UNPREDICTABLE_GAS_LIMIT':
//       return `Error: ${error.reason}`;
//     ///
//     case -32603:
//       if (error.data && error.data.message) {
//         const matches = (error.data.message as string).match(/(["'])(?:(?=(\\?))\2.)*?\1/);
//         return matches?.[0]?.replace(/^'(.+(?='$))'$/, '$1') || error.data.message;
//       }
//       return error.message.replace('execution reverted: ', '');
//     /// MetaMask - RPC Error: MetaMask Tx Signature: User denied transaction signature.
//     case 4001:
//       return 'You rejected the signature request.';
//     /// Unknown
//     default:
//       if (error?.message) return `${error?.message || error?.toString()}.${error?.code ? ` (code=${error?.code})` : ''}`;
//       return `An unknown error occurred.${error?.code ? ` (code=${error?.code})` : ''}`;
//   }
// };
// /**
//  * Recursively parse all instances of BNJS as BigNumber
//  * @unused
//  */
//  export const bn = (v: any) => (v instanceof BNJS ? new BigNumber(v.toString()) : false);
//  export const parseBNJS = (_o: { [key: string]: any }) => {
//    const o: { [key: string]: any } = {};
//    Object.keys(_o).forEach((k: string) => {
//      o[k] =
//        bn(_o[k]) ||
//        (Array.isArray(_o[k]) ? _o[k].map((v: any) => bn(v) || v) : _o[k]);
//    });
//    return o;
//  };

// import { BeanstalkToken } from './BeanstalkToken';
// import { NativeToken } from './NativeToken';
/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */
var Token = /*#__PURE__*/function () {
  /** Reference to the SDK */

  /** The contract address on the chain on which this token lives */

  /** The decimals used in representing currency amounts */

  /** The chain id of the chain this token lives on */

  /** The name of the currency, i.e. a descriptive textual non-unique identifier */

  /** The display name of the currency, i.e. a descriptive textual non-unique identifier */

  /** The symbol of the currency, i.e. a short textual non-unique identifier */

  /** The square logo of the token. */

  /** The color to use when displaying the token in charts, etc. */

  /** The number of decimals this token is recommended to be truncated to. */

  /** Whether or not this is a LP token representing a position in a Pool. */

  /** Whether or not this is an Unripe token. */

  /** The Beanstalk STALK/SEED rewards per BDV of this token. */

  /**
   * @param chainId the chain ID on which this currency resides
   * @param address blockchain address where token contract resides
   * @param decimals decimals of the currency
   * @param metadata.symbol symbol of the currency
   * @param metadata.name name of the currency, matches `.name()`
   * @param metadata.displayName
   */
  function Token(sdk, address, decimals, metadata, rewards) {
    this.address = void 0;
    this.decimals = void 0;
    this.chainId = void 0;
    this.name = void 0;
    this.displayName = void 0;
    this.symbol = void 0;
    this.logo = void 0;
    this.color = void 0;
    this.displayDecimals = void 0;
    this.isLP = void 0;
    this.isUnripe = void 0;
    this.rewards = void 0;
    Token.sdk = sdk;
    /// Basic
    this.address = address != null ? address : '';
    this.decimals = decimals;
    this.chainId = sdk.chainId;
    /// Metadata
    this.name = metadata.name || metadata.symbol;
    this.displayName = metadata.displayName || metadata.name || metadata.symbol;
    this.symbol = metadata.symbol;
    this.displayDecimals = metadata.displayDecimals || 2;
    this.logo = metadata.logo;
    this.color = metadata.color;
    /// Beanstalk-specific
    this.isLP = metadata.isLP || false;
    this.isUnripe = metadata.isUnripe || false;
    this.rewards = rewards;
  }
  /** Get the amount of Stalk rewarded per deposited BDV of this Token. */
  var _proto = Token.prototype;
  _proto.getStalk = function getStalk(bdv) {
    var _this$rewards;
    if (!((_this$rewards = this.rewards) != null && _this$rewards.stalk)) return ZERO_BN;
    if (!bdv) return new BigNumber__default(this.rewards.stalk);
    return bdv.times(this.rewards.stalk);
  }
  /** Get the amount of Seeds rewarded per deposited BDV of this Token. */;
  _proto.getSeeds = function getSeeds(bdv) {
    var _this$rewards2;
    if (!((_this$rewards2 = this.rewards) != null && _this$rewards2.seeds)) return ZERO_BN;
    if (!bdv) return new BigNumber__default(this.rewards.seeds);
    return bdv.times(this.rewards.seeds);
  }
  /**
   * Returns whether this currency is functionally equivalent to the other currency
   * @param other the other currency
   */;
  _proto.equals = function equals(other) {
    return this.address === other.address;
  };
  _proto.toString = function toString() {
    return this.name;
  };
  _proto.setMetadata = function setMetadata(metadata) {
    if (metadata.logo) this.logo = metadata.logo;
    if (metadata.color) this.color = metadata.color;
  }
  /**
   * Convert an `amount` of this Token into a string value
   * based on the configured number of decimals.
   *
   * FIXME: better name
   * FIXME: provide other side (toTokenUnitsBN)
   *
   * @param amount amount to convert
   * @returns string
   */;
  _proto.stringify = function stringify(amount) {
    return toStringBaseUnitBN(amount, this.decimals);
  };
  _proto.stringifyToDecimal = function stringifyToDecimal(amount) {
    return toTokenUnitsBN(amount, this.decimals);
  };
  _proto.tokenResult = function tokenResult() {
    var _this = this;
    return function (result) {
      return toTokenUnitsBN(bigNumberResult(result), _this.decimals);
    };
  };
  return Token;
}();
Token.sdk = void 0;

var BeanstalkToken = /*#__PURE__*/function (_Token) {
  _inheritsLoose(BeanstalkToken, _Token);
  function BeanstalkToken() {
    return _Token.apply(this, arguments) || this;
  }
  var _proto = BeanstalkToken.prototype;
  // eslint-disable-next-line class-methods-use-this
  _proto.getContract = function getContract() {
    return null;
  }
  // eslint-disable-next-line class-methods-use-this
  ;
  _proto.getBalance = function getBalance() {
    return Promise.resolve(NEW_BeanNumber);
  }
  // eslint-disable-next-line class-methods-use-this
  ;
  _proto.getAllowance = function getAllowance() {
    return Promise.resolve(new BigNumber__default(parseInt(MAX_UINT256, 16)));
  }
  // eslint-disable-next-line class-methods-use-this
  ;
  _proto.getTotalSupply = function getTotalSupply() {
    return undefined;
  };
  return BeanstalkToken;
}(Token);

/* Autogenerated file. Do not edit manually. */
var _abi = [{
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "bdv",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "beanToBDV",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "pure",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "curveToBDV",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "unripeBeanToBDV",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "unripeLPToBDV",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "address",
    name: "fromToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "address",
    name: "toToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "fromAmount",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "toAmount",
    type: "uint256"
  }],
  name: "Convert",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint32[]",
    name: "seasons",
    type: "uint32[]"
  }, {
    indexed: false,
    internalType: "uint256[]",
    name: "amounts",
    type: "uint256[]"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "RemoveDeposits",
  type: "event"
}, {
  inputs: [{
    internalType: "bytes",
    name: "convertData",
    type: "bytes"
  }, {
    internalType: "uint32[]",
    name: "crates",
    type: "uint32[]"
  }, {
    internalType: "uint256[]",
    name: "amounts",
    type: "uint256[]"
  }],
  name: "convert",
  outputs: [{
    internalType: "uint32",
    name: "toSeason",
    type: "uint32"
  }, {
    internalType: "uint256",
    name: "fromAmount",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "toAmount",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "fromBdv",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "toBdv",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "tokenIn",
    type: "address"
  }, {
    internalType: "address",
    name: "tokenOut",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amountIn",
    type: "uint256"
  }],
  name: "getAmountOut",
  outputs: [{
    internalType: "uint256",
    name: "amountOut",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "tokenIn",
    type: "address"
  }, {
    internalType: "address",
    name: "tokenOut",
    type: "address"
  }],
  name: "getMaxAmountIn",
  outputs: [{
    internalType: "uint256",
    name: "amountIn",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "pool",
    type: "address"
  }, {
    internalType: "address",
    name: "registry",
    type: "address"
  }, {
    internalType: "uint256[]",
    name: "amounts",
    type: "uint256[]"
  }, {
    internalType: "uint256",
    name: "minAmountOut",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "fromMode",
    type: "uint8"
  }, {
    internalType: "enum LibTransfer.To",
    name: "toMode",
    type: "uint8"
  }],
  name: "addLiquidity",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "pool",
    type: "address"
  }, {
    internalType: "address",
    name: "registry",
    type: "address"
  }, {
    internalType: "address",
    name: "fromToken",
    type: "address"
  }, {
    internalType: "address",
    name: "toToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amountIn",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "minAmountOut",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "fromMode",
    type: "uint8"
  }, {
    internalType: "enum LibTransfer.To",
    name: "toMode",
    type: "uint8"
  }],
  name: "exchange",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "pool",
    type: "address"
  }, {
    internalType: "address",
    name: "fromToken",
    type: "address"
  }, {
    internalType: "address",
    name: "toToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amountIn",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "minAmountOut",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "fromMode",
    type: "uint8"
  }, {
    internalType: "enum LibTransfer.To",
    name: "toMode",
    type: "uint8"
  }],
  name: "exchangeUnderlying",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "pool",
    type: "address"
  }, {
    internalType: "address",
    name: "registry",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amountIn",
    type: "uint256"
  }, {
    internalType: "uint256[]",
    name: "minAmountsOut",
    type: "uint256[]"
  }, {
    internalType: "enum LibTransfer.From",
    name: "fromMode",
    type: "uint8"
  }, {
    internalType: "enum LibTransfer.To",
    name: "toMode",
    type: "uint8"
  }],
  name: "removeLiquidity",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "pool",
    type: "address"
  }, {
    internalType: "address",
    name: "registry",
    type: "address"
  }, {
    internalType: "uint256[]",
    name: "amountsOut",
    type: "uint256[]"
  }, {
    internalType: "uint256",
    name: "maxAmountIn",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "fromMode",
    type: "uint8"
  }, {
    internalType: "enum LibTransfer.To",
    name: "toMode",
    type: "uint8"
  }],
  name: "removeLiquidityImbalance",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "pool",
    type: "address"
  }, {
    internalType: "address",
    name: "registry",
    type: "address"
  }, {
    internalType: "address",
    name: "toToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amountIn",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "minAmountOut",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "fromMode",
    type: "uint8"
  }, {
    internalType: "enum LibTransfer.To",
    name: "toMode",
    type: "uint8"
  }],
  name: "removeLiquidityOneToken",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "target",
      type: "address"
    }, {
      internalType: "bytes",
      name: "callData",
      type: "bytes"
    }, {
      internalType: "bytes",
      name: "advancedData",
      type: "bytes"
    }],
    internalType: "struct AdvancedPipe[]",
    name: "pipes",
    type: "tuple[]"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "advancedPipe",
  outputs: [{
    internalType: "bytes[]",
    name: "results",
    type: "bytes[]"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "target",
      type: "address"
    }, {
      internalType: "bytes",
      name: "data",
      type: "bytes"
    }],
    internalType: "struct Pipe",
    name: "p",
    type: "tuple"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "etherPipe",
  outputs: [{
    internalType: "bytes",
    name: "result",
    type: "bytes"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "target",
      type: "address"
    }, {
      internalType: "bytes",
      name: "data",
      type: "bytes"
    }],
    internalType: "struct Pipe[]",
    name: "pipes",
    type: "tuple[]"
  }],
  name: "multiPipe",
  outputs: [{
    internalType: "bytes[]",
    name: "results",
    type: "bytes[]"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "target",
      type: "address"
    }, {
      internalType: "bytes",
      name: "data",
      type: "bytes"
    }],
    internalType: "struct Pipe",
    name: "p",
    type: "tuple"
  }],
  name: "pipe",
  outputs: [{
    internalType: "bytes",
    name: "result",
    type: "bytes"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "target",
      type: "address"
    }, {
      internalType: "bytes",
      name: "data",
      type: "bytes"
    }],
    internalType: "struct Pipe",
    name: "p",
    type: "tuple"
  }],
  name: "readPipe",
  outputs: [{
    internalType: "bytes",
    name: "result",
    type: "bytes"
  }],
  stateMutability: "view",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    components: [{
      internalType: "address",
      name: "facetAddress",
      type: "address"
    }, {
      internalType: "enum IDiamondCut.FacetCutAction",
      name: "action",
      type: "uint8"
    }, {
      internalType: "bytes4[]",
      name: "functionSelectors",
      type: "bytes4[]"
    }],
    indexed: false,
    internalType: "struct IDiamondCut.FacetCut[]",
    name: "_diamondCut",
    type: "tuple[]"
  }, {
    indexed: false,
    internalType: "address",
    name: "_init",
    type: "address"
  }, {
    indexed: false,
    internalType: "bytes",
    name: "_calldata",
    type: "bytes"
  }],
  name: "DiamondCut",
  type: "event"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "facetAddress",
      type: "address"
    }, {
      internalType: "enum IDiamondCut.FacetCutAction",
      name: "action",
      type: "uint8"
    }, {
      internalType: "bytes4[]",
      name: "functionSelectors",
      type: "bytes4[]"
    }],
    internalType: "struct IDiamondCut.FacetCut[]",
    name: "_diamondCut",
    type: "tuple[]"
  }, {
    internalType: "address",
    name: "_init",
    type: "address"
  }, {
    internalType: "bytes",
    name: "_calldata",
    type: "bytes"
  }],
  name: "diamondCut",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes4",
    name: "_functionSelector",
    type: "bytes4"
  }],
  name: "facetAddress",
  outputs: [{
    internalType: "address",
    name: "facetAddress_",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "facetAddresses",
  outputs: [{
    internalType: "address[]",
    name: "facetAddresses_",
    type: "address[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_facet",
    type: "address"
  }],
  name: "facetFunctionSelectors",
  outputs: [{
    internalType: "bytes4[]",
    name: "facetFunctionSelectors_",
    type: "bytes4[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "facets",
  outputs: [{
    components: [{
      internalType: "address",
      name: "facetAddress",
      type: "address"
    }, {
      internalType: "bytes4[]",
      name: "functionSelectors",
      type: "bytes4[]"
    }],
    internalType: "struct IDiamondLoupe.Facet[]",
    name: "facets_",
    type: "tuple[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes4",
    name: "_interfaceId",
    type: "bytes4"
  }],
  name: "supportsInterface",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "bytes",
      name: "callData",
      type: "bytes"
    }, {
      internalType: "bytes",
      name: "advancedData",
      type: "bytes"
    }],
    internalType: "struct AdvancedData[]",
    name: "data",
    type: "tuple[]"
  }],
  name: "advancedFarm",
  outputs: [{
    internalType: "bytes[]",
    name: "results",
    type: "bytes[]"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes[]",
    name: "data",
    type: "bytes[]"
  }],
  name: "farm",
  outputs: [{
    internalType: "bytes[]",
    name: "results",
    type: "bytes[]"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "uint128",
    name: "id",
    type: "uint128"
  }, {
    indexed: false,
    internalType: "uint128",
    name: "bpf",
    type: "uint128"
  }],
  name: "SetFertilizer",
  type: "event"
}, {
  inputs: [{
    internalType: "uint128",
    name: "id",
    type: "uint128"
  }, {
    internalType: "uint128",
    name: "amount",
    type: "uint128"
  }, {
    internalType: "uint256",
    name: "minLP",
    type: "uint256"
  }],
  name: "addFertilizerOwner",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address[]",
    name: "accounts",
    type: "address[]"
  }, {
    internalType: "uint256[]",
    name: "ids",
    type: "uint256[]"
  }],
  name: "balanceOfBatchFertilizer",
  outputs: [{
    components: [{
      internalType: "uint128",
      name: "amount",
      type: "uint128"
    }, {
      internalType: "uint128",
      name: "lastBpf",
      type: "uint128"
    }],
    internalType: "struct IFertilizer.Balance[]",
    name: "",
    type: "tuple[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "uint256[]",
    name: "ids",
    type: "uint256[]"
  }],
  name: "balanceOfFertilized",
  outputs: [{
    internalType: "uint256",
    name: "beans",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "uint256",
    name: "id",
    type: "uint256"
  }],
  name: "balanceOfFertilizer",
  outputs: [{
    components: [{
      internalType: "uint128",
      name: "amount",
      type: "uint128"
    }, {
      internalType: "uint128",
      name: "lastBpf",
      type: "uint128"
    }],
    internalType: "struct IFertilizer.Balance",
    name: "",
    type: "tuple"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "uint256[]",
    name: "ids",
    type: "uint256[]"
  }],
  name: "balanceOfUnfertilized",
  outputs: [{
    internalType: "uint256",
    name: "beans",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "beansPerFertilizer",
  outputs: [{
    internalType: "uint128",
    name: "bpf",
    type: "uint128"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256[]",
    name: "ids",
    type: "uint256[]"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "claimFertilized",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "getActiveFertilizer",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "getCurrentHumidity",
  outputs: [{
    internalType: "uint128",
    name: "humidity",
    type: "uint128"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "getEndBpf",
  outputs: [{
    internalType: "uint128",
    name: "endBpf",
    type: "uint128"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint128",
    name: "id",
    type: "uint128"
  }],
  name: "getFertilizer",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "getFertilizers",
  outputs: [{
    components: [{
      internalType: "uint128",
      name: "endBpf",
      type: "uint128"
    }, {
      internalType: "uint256",
      name: "supply",
      type: "uint256"
    }],
    internalType: "struct FertilizerFacet.Supply[]",
    name: "fertilizers",
    type: "tuple[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "getFirst",
  outputs: [{
    internalType: "uint128",
    name: "",
    type: "uint128"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint128",
    name: "_s",
    type: "uint128"
  }],
  name: "getHumidity",
  outputs: [{
    internalType: "uint128",
    name: "humidity",
    type: "uint128"
  }],
  stateMutability: "pure",
  type: "function"
}, {
  inputs: [],
  name: "getLast",
  outputs: [{
    internalType: "uint128",
    name: "",
    type: "uint128"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint128",
    name: "id",
    type: "uint128"
  }],
  name: "getNext",
  outputs: [{
    internalType: "uint128",
    name: "",
    type: "uint128"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "isFertilizing",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint128",
    name: "amount",
    type: "uint128"
  }, {
    internalType: "uint256",
    name: "minLP",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "mode",
    type: "uint8"
  }],
  name: "mintFertilizer",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "payFertilizer",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "remainingRecapitalization",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalFertilizedBeans",
  outputs: [{
    internalType: "uint256",
    name: "beans",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalFertilizerBeans",
  outputs: [{
    internalType: "uint256",
    name: "beans",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalUnfertilizedBeans",
  outputs: [{
    internalType: "uint256",
    name: "beans",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256[]",
    name: "plots",
    type: "uint256[]"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "beans",
    type: "uint256"
  }],
  name: "Harvest",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }],
  name: "PodListingCancelled",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "beans",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "pods",
    type: "uint256"
  }],
  name: "Sow",
  type: "event"
}, {
  inputs: [{
    internalType: "uint256[]",
    name: "plots",
    type: "uint256[]"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "harvest",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "harvestableIndex",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "uint256",
    name: "plotId",
    type: "uint256"
  }],
  name: "plot",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "podIndex",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "mode",
    type: "uint8"
  }],
  name: "sow",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "minAmount",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "mode",
    type: "uint8"
  }],
  name: "sowWithMin",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "totalHarvestable",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalHarvested",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalPods",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalSoil",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalUnharvestable",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "uint32",
    name: "id",
    type: "uint32"
  }],
  name: "CompleteFundraiser",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "uint32",
    name: "id",
    type: "uint32"
  }, {
    indexed: false,
    internalType: "address",
    name: "fundraiser",
    type: "address"
  }, {
    indexed: false,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "CreateFundraiser",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "uint32",
    name: "id",
    type: "uint32"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "FundFundraiser",
  type: "event"
}, {
  inputs: [{
    internalType: "address",
    name: "payee",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "createFundraiser",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint32",
    name: "id",
    type: "uint32"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "mode",
    type: "uint8"
  }],
  name: "fund",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint32",
    name: "id",
    type: "uint32"
  }],
  name: "fundingToken",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint32",
    name: "id",
    type: "uint32"
  }],
  name: "fundraiser",
  outputs: [{
    components: [{
      internalType: "address",
      name: "payee",
      type: "address"
    }, {
      internalType: "address",
      name: "token",
      type: "address"
    }, {
      internalType: "uint256",
      name: "total",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "remaining",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "start",
      type: "uint256"
    }],
    internalType: "struct Storage.Fundraiser",
    name: "",
    type: "tuple"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "numberOfFundraisers",
  outputs: [{
    internalType: "uint32",
    name: "",
    type: "uint32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint32",
    name: "id",
    type: "uint32"
  }],
  name: "remainingFunding",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint32",
    name: "id",
    type: "uint32"
  }],
  name: "totalFunding",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    indexed: true,
    internalType: "uint256",
    name: "id",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "pods",
    type: "uint256"
  }],
  name: "PlotTransfer",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "pods",
    type: "uint256"
  }],
  name: "PodApproval",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "start",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint24",
    name: "pricePerPod",
    type: "uint24"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "maxHarvestableIndex",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "bytes",
    name: "pricingFunction",
    type: "bytes"
  }, {
    indexed: false,
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }, {
    indexed: false,
    internalType: "enum LibPolynomial.PriceType",
    name: "pricingType",
    type: "uint8"
  }],
  name: "PodListingCreated",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "start",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "costInBeans",
    type: "uint256"
  }],
  name: "PodListingFilled",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "bytes32",
    name: "id",
    type: "bytes32"
  }],
  name: "PodOrderCancelled",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "bytes32",
    name: "id",
    type: "bytes32"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint24",
    name: "pricePerPod",
    type: "uint24"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "maxPlaceInLine",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "bytes",
    name: "pricingFunction",
    type: "bytes"
  }, {
    indexed: false,
    internalType: "enum LibPolynomial.PriceType",
    name: "priceType",
    type: "uint8"
  }],
  name: "PodOrderCreated",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    indexed: false,
    internalType: "bytes32",
    name: "id",
    type: "bytes32"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "start",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "costInBeans",
    type: "uint256"
  }],
  name: "PodOrderFilled",
  type: "event"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }],
  name: "allowancePods",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "approvePods",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }],
  name: "cancelPodListing",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint24",
    name: "pricePerPod",
    type: "uint24"
  }, {
    internalType: "uint256",
    name: "maxPlaceInLine",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "cancelPodOrder",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "maxPlaceInLine",
    type: "uint256"
  }, {
    internalType: "bytes",
    name: "pricingFunction",
    type: "bytes"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "cancelPodOrderV2",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "start",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "uint24",
    name: "pricePerPod",
    type: "uint24"
  }, {
    internalType: "uint256",
    name: "maxHarvestableIndex",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "createPodListing",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "start",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "maxHarvestableIndex",
    type: "uint256"
  }, {
    internalType: "bytes",
    name: "pricingFunction",
    type: "bytes"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "createPodListingV2",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "beanAmount",
    type: "uint256"
  }, {
    internalType: "uint24",
    name: "pricePerPod",
    type: "uint24"
  }, {
    internalType: "uint256",
    name: "maxPlaceInLine",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "mode",
    type: "uint8"
  }],
  name: "createPodOrder",
  outputs: [{
    internalType: "bytes32",
    name: "id",
    type: "bytes32"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "beanAmount",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "maxPlaceInLine",
    type: "uint256"
  }, {
    internalType: "bytes",
    name: "pricingFunction",
    type: "bytes"
  }, {
    internalType: "enum LibTransfer.From",
    name: "mode",
    type: "uint8"
  }],
  name: "createPodOrderV2",
  outputs: [{
    internalType: "bytes32",
    name: "id",
    type: "bytes32"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "account",
      type: "address"
    }, {
      internalType: "uint256",
      name: "index",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "start",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }, {
      internalType: "uint24",
      name: "pricePerPod",
      type: "uint24"
    }, {
      internalType: "uint256",
      name: "maxHarvestableIndex",
      type: "uint256"
    }, {
      internalType: "enum LibTransfer.To",
      name: "mode",
      type: "uint8"
    }],
    internalType: "struct Listing.PodListing",
    name: "l",
    type: "tuple"
  }, {
    internalType: "uint256",
    name: "beanAmount",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "mode",
    type: "uint8"
  }],
  name: "fillPodListing",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "account",
      type: "address"
    }, {
      internalType: "uint256",
      name: "index",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "start",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "amount",
      type: "uint256"
    }, {
      internalType: "uint24",
      name: "pricePerPod",
      type: "uint24"
    }, {
      internalType: "uint256",
      name: "maxHarvestableIndex",
      type: "uint256"
    }, {
      internalType: "enum LibTransfer.To",
      name: "mode",
      type: "uint8"
    }],
    internalType: "struct Listing.PodListing",
    name: "l",
    type: "tuple"
  }, {
    internalType: "uint256",
    name: "beanAmount",
    type: "uint256"
  }, {
    internalType: "bytes",
    name: "pricingFunction",
    type: "bytes"
  }, {
    internalType: "enum LibTransfer.From",
    name: "mode",
    type: "uint8"
  }],
  name: "fillPodListingV2",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "account",
      type: "address"
    }, {
      internalType: "uint24",
      name: "pricePerPod",
      type: "uint24"
    }, {
      internalType: "uint256",
      name: "maxPlaceInLine",
      type: "uint256"
    }],
    internalType: "struct Order.PodOrder",
    name: "o",
    type: "tuple"
  }, {
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "start",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "fillPodOrder",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "account",
      type: "address"
    }, {
      internalType: "uint24",
      name: "pricePerPod",
      type: "uint24"
    }, {
      internalType: "uint256",
      name: "maxPlaceInLine",
      type: "uint256"
    }],
    internalType: "struct Order.PodOrder",
    name: "o",
    type: "tuple"
  }, {
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "start",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "bytes",
    name: "pricingFunction",
    type: "bytes"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "fillPodOrderV2",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "placeInLine",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "amountPodsFromOrder",
    type: "uint256"
  }, {
    internalType: "bytes",
    name: "pricingFunction",
    type: "bytes"
  }],
  name: "getAmountBeansToFillOrderV2",
  outputs: [{
    internalType: "uint256",
    name: "beanAmount",
    type: "uint256"
  }],
  stateMutability: "pure",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "placeInLine",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "podListingAmount",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "fillBeanAmount",
    type: "uint256"
  }, {
    internalType: "bytes",
    name: "pricingFunction",
    type: "bytes"
  }],
  name: "getAmountPodsFromFillListingV2",
  outputs: [{
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  stateMutability: "pure",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }],
  name: "podListing",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "uint24",
    name: "pricePerPod",
    type: "uint24"
  }, {
    internalType: "uint256",
    name: "maxPlaceInLine",
    type: "uint256"
  }],
  name: "podOrder",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes32",
    name: "id",
    type: "bytes32"
  }],
  name: "podOrderById",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "uint256",
    name: "maxPlaceInLine",
    type: "uint256"
  }, {
    internalType: "bytes",
    name: "pricingFunction",
    type: "bytes"
  }],
  name: "podOrderV2",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "sender",
    type: "address"
  }, {
    internalType: "address",
    name: "recipient",
    type: "address"
  }, {
    internalType: "uint256",
    name: "id",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "start",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "end",
    type: "uint256"
  }],
  name: "transferPlot",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "previousOwner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "OwnershipTransferred",
  type: "event"
}, {
  inputs: [],
  name: "claimOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "owner_",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "ownerCandidate",
  outputs: [{
    internalType: "address",
    name: "ownerCandidate_",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_newOwner",
    type: "address"
  }],
  name: "transferOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "uint256",
    name: "timestamp",
    type: "uint256"
  }],
  name: "Pause",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "uint256",
    name: "timestamp",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "timePassed",
    type: "uint256"
  }],
  name: "Unpause",
  type: "event"
}, {
  inputs: [],
  name: "pause",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "unpause",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "beans",
    type: "uint256"
  }],
  name: "Incentivization",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }, {
    indexed: false,
    internalType: "int256",
    name: "deltaB",
    type: "int256"
  }, {
    indexed: false,
    internalType: "uint256[2]",
    name: "balances",
    type: "uint256[2]"
  }],
  name: "MetapoolOracle",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "toField",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "toSilo",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "toFertilizer",
    type: "uint256"
  }],
  name: "Reward",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "uint256",
    name: "season",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "toField",
    type: "uint256"
  }],
  name: "SeasonOfPlenty",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "soil",
    type: "uint256"
  }],
  name: "Soil",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "uint256",
    name: "season",
    type: "uint256"
  }],
  name: "Sunrise",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "uint256",
    name: "season",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "caseId",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "int8",
    name: "change",
    type: "int8"
  }],
  name: "WeatherChange",
  type: "event"
}, {
  inputs: [],
  name: "paused",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }],
  name: "plentyPerRoot",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "pool",
    type: "address"
  }],
  name: "poolDeltaB",
  outputs: [{
    internalType: "int256",
    name: "deltaB",
    type: "int256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "rain",
  outputs: [{
    components: [{
      internalType: "uint256",
      name: "depreciated",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "pods",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "roots",
      type: "uint256"
    }],
    internalType: "struct Storage.Rain",
    name: "",
    type: "tuple"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "season",
  outputs: [{
    internalType: "uint32",
    name: "",
    type: "uint32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "seasonTime",
  outputs: [{
    internalType: "uint32",
    name: "",
    type: "uint32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "sunrise",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "time",
  outputs: [{
    components: [{
      internalType: "uint32",
      name: "current",
      type: "uint32"
    }, {
      internalType: "uint32",
      name: "lastSop",
      type: "uint32"
    }, {
      internalType: "uint8",
      name: "withdrawSeasons",
      type: "uint8"
    }, {
      internalType: "uint32",
      name: "lastSopSeason",
      type: "uint32"
    }, {
      internalType: "uint32",
      name: "rainStart",
      type: "uint32"
    }, {
      internalType: "bool",
      name: "raining",
      type: "bool"
    }, {
      internalType: "bool",
      name: "fertilizing",
      type: "bool"
    }, {
      internalType: "uint256",
      name: "start",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "period",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "timestamp",
      type: "uint256"
    }],
    internalType: "struct Storage.Season",
    name: "",
    type: "tuple"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalDeltaB",
  outputs: [{
    internalType: "int256",
    name: "deltaB",
    type: "int256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "weather",
  outputs: [{
    components: [{
      internalType: "uint256",
      name: "startSoil",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "lastDSoil",
      type: "uint256"
    }, {
      internalType: "uint96",
      name: "lastSoilPercent",
      type: "uint96"
    }, {
      internalType: "uint32",
      name: "lastSowTime",
      type: "uint32"
    }, {
      internalType: "uint32",
      name: "nextSowTime",
      type: "uint32"
    }, {
      internalType: "uint32",
      name: "yield",
      type: "uint32"
    }, {
      internalType: "bool",
      name: "didSowBelowMin",
      type: "bool"
    }, {
      internalType: "bool",
      name: "didSowFaster",
      type: "bool"
    }],
    internalType: "struct Storage.Weather",
    name: "",
    type: "tuple"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "yield",
  outputs: [{
    internalType: "uint32",
    name: "",
    type: "uint32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "bdv",
    type: "uint256"
  }],
  name: "AddDeposit",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "AddWithdrawal",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "plenty",
    type: "uint256"
  }],
  name: "ClaimPlenty",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    indexed: false,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "DepositApproval",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "beans",
    type: "uint256"
  }],
  name: "Plant",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "RemoveDeposit",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "RemoveWithdrawal",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint32[]",
    name: "seasons",
    type: "uint32[]"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "RemoveWithdrawals",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "int256",
    name: "delta",
    type: "int256"
  }],
  name: "SeedsBalanceChanged",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: false,
    internalType: "int256",
    name: "delta",
    type: "int256"
  }, {
    indexed: false,
    internalType: "int256",
    name: "deltaRoots",
    type: "int256"
  }],
  name: "StalkBalanceChanged",
  type: "event"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "approveDeposit",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfEarnedBeans",
  outputs: [{
    internalType: "uint256",
    name: "beans",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfEarnedSeeds",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfEarnedStalk",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfGrownStalk",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfPlenty",
  outputs: [{
    internalType: "uint256",
    name: "plenty",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfRainRoots",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfRoots",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfSeeds",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfSop",
  outputs: [{
    components: [{
      internalType: "uint32",
      name: "lastRain",
      type: "uint32"
    }, {
      internalType: "uint32",
      name: "lastSop",
      type: "uint32"
    }, {
      internalType: "uint256",
      name: "roots",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "plentyPerRoot",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "plenty",
      type: "uint256"
    }],
    internalType: "struct SiloExit.AccountSeasonOfPlenty",
    name: "sop",
    type: "tuple"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfStalk",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "claimPlenty",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "claimWithdrawal",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint32[]",
    name: "seasons",
    type: "uint32[]"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "claimWithdrawals",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "subtractedValue",
    type: "uint256"
  }],
  name: "decreaseDepositAllowance",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "mode",
    type: "uint8"
  }],
  name: "deposit",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }],
  name: "depositAllowance",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "depositPermitDomainSeparator",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }],
  name: "depositPermitNonces",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint32",
    name: "_season",
    type: "uint32"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "enrootDeposit",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint32[]",
    name: "seasons",
    type: "uint32[]"
  }, {
    internalType: "uint256[]",
    name: "amounts",
    type: "uint256[]"
  }],
  name: "enrootDeposits",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }],
  name: "getDeposit",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }],
  name: "getTotalDeposited",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }],
  name: "getTotalWithdrawn",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }],
  name: "getWithdrawal",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "addedValue",
    type: "uint256"
  }],
  name: "increaseDepositAllowance",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "lastSeasonOfPlenty",
  outputs: [{
    internalType: "uint32",
    name: "",
    type: "uint32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "lastUpdate",
  outputs: [{
    internalType: "uint32",
    name: "",
    type: "uint32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "deadline",
    type: "uint256"
  }, {
    internalType: "uint8",
    name: "v",
    type: "uint8"
  }, {
    internalType: "bytes32",
    name: "r",
    type: "bytes32"
  }, {
    internalType: "bytes32",
    name: "s",
    type: "bytes32"
  }],
  name: "permitDeposit",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "address[]",
    name: "tokens",
    type: "address[]"
  }, {
    internalType: "uint256[]",
    name: "values",
    type: "uint256[]"
  }, {
    internalType: "uint256",
    name: "deadline",
    type: "uint256"
  }, {
    internalType: "uint8",
    name: "v",
    type: "uint8"
  }, {
    internalType: "bytes32",
    name: "r",
    type: "bytes32"
  }, {
    internalType: "bytes32",
    name: "s",
    type: "bytes32"
  }],
  name: "permitDeposits",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "plant",
  outputs: [{
    internalType: "uint256",
    name: "beans",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }],
  name: "tokenSettings",
  outputs: [{
    components: [{
      internalType: "bytes4",
      name: "selector",
      type: "bytes4"
    }, {
      internalType: "uint32",
      name: "seeds",
      type: "uint32"
    }, {
      internalType: "uint32",
      name: "stalk",
      type: "uint32"
    }],
    internalType: "struct Storage.SiloSettings",
    name: "",
    type: "tuple"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalEarnedBeans",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalRoots",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalSeeds",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalStalk",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "sender",
    type: "address"
  }, {
    internalType: "address",
    name: "recipient",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "transferDeposit",
  outputs: [{
    internalType: "uint256",
    name: "bdv",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "sender",
    type: "address"
  }, {
    internalType: "address",
    name: "recipient",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint32[]",
    name: "seasons",
    type: "uint32[]"
  }, {
    internalType: "uint256[]",
    name: "amounts",
    type: "uint256[]"
  }],
  name: "transferDeposits",
  outputs: [{
    internalType: "uint256[]",
    name: "bdvs",
    type: "uint256[]"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "update",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "withdrawDeposit",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint32[]",
    name: "seasons",
    type: "uint32[]"
  }, {
    internalType: "uint256[]",
    name: "amounts",
    type: "uint256[]"
  }],
  name: "withdrawDeposits",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "withdrawFreeze",
  outputs: [{
    internalType: "uint8",
    name: "",
    type: "uint8"
  }],
  stateMutability: "view",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "user",
    type: "address"
  }, {
    indexed: true,
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "int256",
    name: "delta",
    type: "int256"
  }],
  name: "InternalBalanceChanged",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    indexed: false,
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "TokenApproval",
  type: "event"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "approveToken",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "subtractedValue",
    type: "uint256"
  }],
  name: "decreaseTokenAllowance",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }],
  name: "getAllBalance",
  outputs: [{
    components: [{
      internalType: "uint256",
      name: "internalBalance",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "externalBalance",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "totalBalance",
      type: "uint256"
    }],
    internalType: "struct TokenFacet.Balance",
    name: "b",
    type: "tuple"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "contract IERC20[]",
    name: "tokens",
    type: "address[]"
  }],
  name: "getAllBalances",
  outputs: [{
    components: [{
      internalType: "uint256",
      name: "internalBalance",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "externalBalance",
      type: "uint256"
    }, {
      internalType: "uint256",
      name: "totalBalance",
      type: "uint256"
    }],
    internalType: "struct TokenFacet.Balance[]",
    name: "balances",
    type: "tuple[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }],
  name: "getBalance",
  outputs: [{
    internalType: "uint256",
    name: "balance",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "contract IERC20[]",
    name: "tokens",
    type: "address[]"
  }],
  name: "getBalances",
  outputs: [{
    internalType: "uint256[]",
    name: "balances",
    type: "uint256[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }],
  name: "getExternalBalance",
  outputs: [{
    internalType: "uint256",
    name: "balance",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "contract IERC20[]",
    name: "tokens",
    type: "address[]"
  }],
  name: "getExternalBalances",
  outputs: [{
    internalType: "uint256[]",
    name: "balances",
    type: "uint256[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }],
  name: "getInternalBalance",
  outputs: [{
    internalType: "uint256",
    name: "balance",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "contract IERC20[]",
    name: "tokens",
    type: "address[]"
  }],
  name: "getInternalBalances",
  outputs: [{
    internalType: "uint256[]",
    name: "balances",
    type: "uint256[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "addedValue",
    type: "uint256"
  }],
  name: "increaseTokenAllowance",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20Permit",
    name: "token",
    type: "address"
  }, {
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "deadline",
    type: "uint256"
  }, {
    internalType: "uint8",
    name: "v",
    type: "uint8"
  }, {
    internalType: "bytes32",
    name: "r",
    type: "bytes32"
  }, {
    internalType: "bytes32",
    name: "s",
    type: "bytes32"
  }],
  name: "permitERC20",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "deadline",
    type: "uint256"
  }, {
    internalType: "uint8",
    name: "v",
    type: "uint8"
  }, {
    internalType: "bytes32",
    name: "r",
    type: "bytes32"
  }, {
    internalType: "bytes32",
    name: "s",
    type: "bytes32"
  }],
  name: "permitToken",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }],
  name: "tokenAllowance",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "tokenPermitDomainSeparator",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }],
  name: "tokenPermitNonces",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }, {
    internalType: "address",
    name: "recipient",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "fromMode",
    type: "uint8"
  }, {
    internalType: "enum LibTransfer.To",
    name: "toMode",
    type: "uint8"
  }],
  name: "transferToken",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "contract IERC20",
    name: "token",
    type: "address"
  }, {
    internalType: "address",
    name: "sender",
    type: "address"
  }, {
    internalType: "address",
    name: "recipient",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "fromMode",
    type: "uint8"
  }, {
    internalType: "enum LibTransfer.To",
    name: "toMode",
    type: "uint8"
  }],
  name: "transferTokenFrom",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "mode",
    type: "uint8"
  }],
  name: "unwrapEth",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "wrapEth",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "underlyingToken",
    type: "address"
  }, {
    indexed: false,
    internalType: "bytes32",
    name: "merkleRoot",
    type: "bytes32"
  }],
  name: "AddUnripeToken",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "int256",
    name: "underlying",
    type: "int256"
  }],
  name: "ChangeUnderlying",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "underlying",
    type: "uint256"
  }],
  name: "Chop",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "Pick",
  type: "event"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "supply",
    type: "uint256"
  }],
  name: "_getPenalizedUnderlying",
  outputs: [{
    internalType: "uint256",
    name: "redeem",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }, {
    internalType: "address",
    name: "underlyingToken",
    type: "address"
  }, {
    internalType: "bytes32",
    name: "root",
    type: "bytes32"
  }],
  name: "addUnripeToken",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }, {
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfPenalizedUnderlying",
  outputs: [{
    internalType: "uint256",
    name: "underlying",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }, {
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOfUnderlying",
  outputs: [{
    internalType: "uint256",
    name: "underlying",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "enum LibTransfer.From",
    name: "fromMode",
    type: "uint8"
  }, {
    internalType: "enum LibTransfer.To",
    name: "toMode",
    type: "uint8"
  }],
  name: "chop",
  outputs: [{
    internalType: "uint256",
    name: "underlyingAmount",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "getPenalizedUnderlying",
  outputs: [{
    internalType: "uint256",
    name: "redeem",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }],
  name: "getPenalty",
  outputs: [{
    internalType: "uint256",
    name: "penalty",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }],
  name: "getPercentPenalty",
  outputs: [{
    internalType: "uint256",
    name: "penalty",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }],
  name: "getRecapFundedPercent",
  outputs: [{
    internalType: "uint256",
    name: "percent",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "getRecapPaidPercent",
  outputs: [{
    internalType: "uint256",
    name: "penalty",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }],
  name: "getTotalUnderlying",
  outputs: [{
    internalType: "uint256",
    name: "underlying",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "getUnderlying",
  outputs: [{
    internalType: "uint256",
    name: "redeem",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }],
  name: "getUnderlyingPerUnripeToken",
  outputs: [{
    internalType: "uint256",
    name: "underlyingPerToken",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }],
  name: "getUnderlyingToken",
  outputs: [{
    internalType: "address",
    name: "underlyingToken",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "unripeToken",
    type: "address"
  }],
  name: "isUnripe",
  outputs: [{
    internalType: "bool",
    name: "unripe",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "bytes32[]",
    name: "proof",
    type: "bytes32[]"
  }, {
    internalType: "enum LibTransfer.To",
    name: "mode",
    type: "uint8"
  }],
  name: "pick",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }],
  name: "picked",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }],
  name: "DewhitelistToken",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    indexed: false,
    internalType: "bytes4",
    name: "selector",
    type: "bytes4"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "seeds",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "stalk",
    type: "uint256"
  }],
  name: "WhitelistToken",
  type: "event"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }],
  name: "dewhitelistToken",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "bytes4",
    name: "selector",
    type: "bytes4"
  }, {
    internalType: "uint32",
    name: "stalk",
    type: "uint32"
  }, {
    internalType: "uint32",
    name: "seeds",
    type: "uint32"
  }],
  name: "whitelistToken",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}];
var Beanstalk__factory = /*#__PURE__*/function () {
  function Beanstalk__factory() {}
  Beanstalk__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi);
  };
  Beanstalk__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi, signerOrProvider);
  };
  return Beanstalk__factory;
}();
Beanstalk__factory.abi = _abi;

/* Autogenerated file. Do not edit manually. */
var _abi$1 = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "operator",
    type: "address"
  }, {
    indexed: false,
    internalType: "bool",
    name: "approved",
    type: "bool"
  }],
  name: "ApprovalForAll",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "uint8",
    name: "version",
    type: "uint8"
  }],
  name: "Initialized",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "previousOwner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "OwnershipTransferred",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "operator",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256[]",
    name: "ids",
    type: "uint256[]"
  }, {
    indexed: false,
    internalType: "uint256[]",
    name: "values",
    type: "uint256[]"
  }],
  name: "TransferBatch",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "operator",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "id",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "TransferSingle",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "string",
    name: "value",
    type: "string"
  }, {
    indexed: true,
    internalType: "uint256",
    name: "id",
    type: "uint256"
  }],
  name: "URI",
  type: "event"
}, {
  inputs: [],
  name: "USDC",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "WETH",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "uint256",
    name: "id",
    type: "uint256"
  }],
  name: "balanceOf",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address[]",
    name: "accounts",
    type: "address[]"
  }, {
    internalType: "uint256[]",
    name: "ids",
    type: "uint256[]"
  }],
  name: "balanceOfBatch",
  outputs: [{
    internalType: "uint256[]",
    name: "",
    type: "uint256[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "buyAmount",
    type: "uint256"
  }],
  name: "buyAndMint",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "getMintId",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "ethAmount",
    type: "uint256"
  }],
  name: "getUsdcOut",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "ethAmount",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "slippage",
    type: "uint256"
  }],
  name: "getUsdcOutWithSlippage",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "initialize",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "address",
    name: "operator",
    type: "address"
  }],
  name: "isApprovedForAll",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    internalType: "uint256",
    name: "id",
    type: "uint256"
  }],
  name: "lastBalanceOf",
  outputs: [{
    components: [{
      internalType: "uint128",
      name: "amount",
      type: "uint128"
    }, {
      internalType: "uint128",
      name: "lastBpf",
      type: "uint128"
    }],
    internalType: "struct PreFertilizer.Balance",
    name: "",
    type: "tuple"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "mint",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [],
  name: "name",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "pure",
  type: "function"
}, {
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "remaining",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "renounceOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    internalType: "uint256[]",
    name: "ids",
    type: "uint256[]"
  }, {
    internalType: "uint256[]",
    name: "amounts",
    type: "uint256[]"
  }, {
    internalType: "bytes",
    name: "data",
    type: "bytes"
  }],
  name: "safeBatchTransferFrom",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    internalType: "uint256",
    name: "id",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }, {
    internalType: "bytes",
    name: "data",
    type: "bytes"
  }],
  name: "safeTransferFrom",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "operator",
    type: "address"
  }, {
    internalType: "bool",
    name: "approved",
    type: "bool"
  }],
  name: "setApprovalForAll",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "string",
    name: "newuri",
    type: "string"
  }],
  name: "setURI",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes4",
    name: "interfaceId",
    type: "bytes4"
  }],
  name: "supportsInterface",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "symbol",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "pure",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "transferOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  name: "uri",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}];
var BeanstalkFertilizer__factory = /*#__PURE__*/function () {
  function BeanstalkFertilizer__factory() {}
  BeanstalkFertilizer__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$1);
  };
  BeanstalkFertilizer__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$1, signerOrProvider);
  };
  return BeanstalkFertilizer__factory;
}();
BeanstalkFertilizer__factory.abi = _abi$1;

var _abi$2 = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }],
  name: "AddWhitelistToken",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "address",
    name: "previousAdmin",
    type: "address"
  }, {
    indexed: false,
    internalType: "address",
    name: "newAdmin",
    type: "address"
  }],
  name: "AdminChanged",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "Approval",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "beacon",
    type: "address"
  }],
  name: "BeaconUpgraded",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "uint8",
    name: "version",
    type: "uint8"
  }],
  name: "Initialized",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    components: [{
      internalType: "address",
      name: "token",
      type: "address"
    }, {
      internalType: "uint32[]",
      name: "seasons",
      type: "uint32[]"
    }, {
      internalType: "uint256[]",
      name: "amounts",
      type: "uint256[]"
    }],
    indexed: false,
    internalType: "struct DepositTransfer[]",
    name: "deposits",
    type: "tuple[]"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "bdv",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "stalk",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "seeds",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "shares",
    type: "uint256"
  }],
  name: "Mint",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "previousOwner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "OwnershipTransferred",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    components: [{
      internalType: "address",
      name: "token",
      type: "address"
    }, {
      internalType: "uint32[]",
      name: "seasons",
      type: "uint32[]"
    }, {
      internalType: "uint256[]",
      name: "amounts",
      type: "uint256[]"
    }],
    indexed: false,
    internalType: "struct DepositTransfer[]",
    name: "deposits",
    type: "tuple[]"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "bdv",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "stalk",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "seeds",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "shares",
    type: "uint256"
  }],
  name: "Redeem",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "token",
    type: "address"
  }],
  name: "RemoveWhitelistToken",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "Transfer",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "implementation",
    type: "address"
  }],
  name: "Upgraded",
  type: "event"
}, {
  inputs: [],
  name: "BEANSTALK_ADDRESS",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "DOMAIN_SEPARATOR",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }],
  name: "addWhitelistToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }],
  name: "allowance",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "approve",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOf",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "bdvPerRoot",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint32",
    name: "season",
    type: "uint32"
  }],
  name: "convertLambdaToLambda",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address[]",
    name: "tokens",
    type: "address[]"
  }, {
    internalType: "uint32[]",
    name: "seasons",
    type: "uint32[]"
  }],
  name: "convertLambdasToLambdas",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "decimals",
  outputs: [{
    internalType: "uint8",
    name: "",
    type: "uint8"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "subtractedValue",
    type: "uint256"
  }],
  name: "decreaseAllowance",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "earn",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "addedValue",
    type: "uint256"
  }],
  name: "increaseAllowance",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "string",
    name: "name",
    type: "string"
  }, {
    internalType: "string",
    name: "symbol",
    type: "string"
  }],
  name: "initialize",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "token",
      type: "address"
    }, {
      internalType: "uint32[]",
      name: "seasons",
      type: "uint32[]"
    }, {
      internalType: "uint256[]",
      name: "amounts",
      type: "uint256[]"
    }],
    internalType: "struct DepositTransfer[]",
    name: "depositTransfers",
    type: "tuple[]"
  }, {
    internalType: "enum To",
    name: "mode",
    type: "uint8"
  }],
  name: "mint",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "token",
      type: "address"
    }, {
      internalType: "uint32[]",
      name: "seasons",
      type: "uint32[]"
    }, {
      internalType: "uint256[]",
      name: "amounts",
      type: "uint256[]"
    }],
    internalType: "struct DepositTransfer[]",
    name: "depositTransfers",
    type: "tuple[]"
  }, {
    internalType: "enum To",
    name: "mode",
    type: "uint8"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "deadline",
    type: "uint256"
  }, {
    internalType: "uint8",
    name: "v",
    type: "uint8"
  }, {
    internalType: "bytes32",
    name: "r",
    type: "bytes32"
  }, {
    internalType: "bytes32",
    name: "s",
    type: "bytes32"
  }],
  name: "mintWithTokenPermit",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "token",
      type: "address"
    }, {
      internalType: "uint32[]",
      name: "seasons",
      type: "uint32[]"
    }, {
      internalType: "uint256[]",
      name: "amounts",
      type: "uint256[]"
    }],
    internalType: "struct DepositTransfer[]",
    name: "depositTransfers",
    type: "tuple[]"
  }, {
    internalType: "enum To",
    name: "mode",
    type: "uint8"
  }, {
    internalType: "address[]",
    name: "tokens",
    type: "address[]"
  }, {
    internalType: "uint256[]",
    name: "values",
    type: "uint256[]"
  }, {
    internalType: "uint256",
    name: "deadline",
    type: "uint256"
  }, {
    internalType: "uint8",
    name: "v",
    type: "uint8"
  }, {
    internalType: "bytes32",
    name: "r",
    type: "bytes32"
  }, {
    internalType: "bytes32",
    name: "s",
    type: "bytes32"
  }],
  name: "mintWithTokensPermit",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "name",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }],
  name: "nonces",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "owner",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "deadline",
    type: "uint256"
  }, {
    internalType: "uint8",
    name: "v",
    type: "uint8"
  }, {
    internalType: "bytes32",
    name: "r",
    type: "bytes32"
  }, {
    internalType: "bytes32",
    name: "s",
    type: "bytes32"
  }],
  name: "permit",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "proxiableUUID",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "token",
      type: "address"
    }, {
      internalType: "uint32[]",
      name: "seasons",
      type: "uint32[]"
    }, {
      internalType: "uint256[]",
      name: "amounts",
      type: "uint256[]"
    }],
    internalType: "struct DepositTransfer[]",
    name: "depositTransfers",
    type: "tuple[]"
  }, {
    internalType: "enum From",
    name: "mode",
    type: "uint8"
  }],
  name: "redeem",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    components: [{
      internalType: "address",
      name: "token",
      type: "address"
    }, {
      internalType: "uint32[]",
      name: "seasons",
      type: "uint32[]"
    }, {
      internalType: "uint256[]",
      name: "amounts",
      type: "uint256[]"
    }],
    internalType: "struct DepositTransfer[]",
    name: "depositTransfers",
    type: "tuple[]"
  }, {
    internalType: "enum From",
    name: "mode",
    type: "uint8"
  }, {
    internalType: "address",
    name: "token",
    type: "address"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "deadline",
    type: "uint256"
  }, {
    internalType: "uint8",
    name: "v",
    type: "uint8"
  }, {
    internalType: "bytes32",
    name: "r",
    type: "bytes32"
  }, {
    internalType: "bytes32",
    name: "s",
    type: "bytes32"
  }],
  name: "redeemWithFarmBalancePermit",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "token",
    type: "address"
  }],
  name: "removeWhitelistToken",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "renounceOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_delegateContract",
    type: "address"
  }, {
    internalType: "address",
    name: "_delegate",
    type: "address"
  }, {
    internalType: "bytes32",
    name: "_snapshotId",
    type: "bytes32"
  }],
  name: "setDelegate",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "symbol",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalSupply",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "transfer",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "transferFrom",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "newOwner",
    type: "address"
  }],
  name: "transferOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "underlyingBdv",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "newImplementation",
    type: "address"
  }],
  name: "upgradeTo",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "newImplementation",
    type: "address"
  }, {
    internalType: "bytes",
    name: "data",
    type: "bytes"
  }],
  name: "upgradeToAndCall",
  outputs: [],
  stateMutability: "payable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  name: "whitelisted",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}];
var _bytecode = "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c6143e6610052600039600081816107e60152818161087001528181610be701528181610c6c0152610d5201526143e66000f3fe60806040526004361061024f5760003560e01c80637ecebe0011610138578063bb9e09c8116100b0578063d5812a4b1161007f578063dd62ed3e11610064578063dd62ed3e14610676578063e9ee9107146106bc578063f2fde38b146106dc57600080fd5b8063d5812a4b14610625578063d936547e1461064557600080fd5b8063bb9e09c8146105bb578063d389800f146105d0578063d3b3f9b4146105e5578063d505accf1461060557600080fd5b806395d89b4111610107578063a457c2d7116100ec578063a457c2d714610553578063a9059cbb14610573578063aa1968271461059357600080fd5b806395d89b4114610527578063964772311461053c57600080fd5b80637ecebe0014610494578063863b1f6a146104b45780638da5cb5b146104d45780639168083c1461050757600080fd5b80633e060391116101cb57806352d1902d1161019a578063715018a61161017f578063715018a61461043f578063746c1519146104545780637b529a4f1461047457600080fd5b806352d1902d146103f457806370a082311461040957600080fd5b80633e060391146103815780634cd88b76146103a15780634f1dd0a7146103c15780634f1ef286146103e157600080fd5b8063313ce567116102225780633659cfe6116102075780633659cfe61461031f57806339509351146103415780633b788da91461036157600080fd5b8063313ce567146102ee5780633644e5151461030a57600080fd5b806306fdde0314610254578063095ea7b31461027f57806318160ddd146102af57806323b872dd146102ce575b600080fd5b34801561026057600080fd5b506102696106fc565b6040516102769190614082565b60405180910390f35b34801561028b57600080fd5b5061029f61029a36600461388c565b61078e565b6040519015158152602001610276565b3480156102bb57600080fd5b506099545b604051908152602001610276565b3480156102da57600080fd5b5061029f6102e9366004613789565b6107a6565b3480156102fa57600080fd5b5060405160128152602001610276565b34801561031657600080fd5b506102c06107cc565b34801561032b57600080fd5b5061033f61033a36600461373d565b6107db565b005b34801561034d57600080fd5b5061029f61035c36600461388c565b61095c565b34801561036d57600080fd5b5061033f61037c366004613789565b61099b565b34801561038d57600080fd5b5061033f61039c3660046138b5565b610a7d565b3480156103ad57600080fd5b5061033f6103bc366004613c35565b610a8b565b3480156103cd57600080fd5b506102c06103dc366004613954565b610bbf565b61033f6103ef36600461382d565b610bdc565b34801561040057600080fd5b506102c0610d45565b34801561041557600080fd5b506102c061042436600461373d565b6001600160a01b031660009081526097602052604090205490565b34801561044b57600080fd5b5061033f610e0a565b34801561046057600080fd5b506102c061046f366004613a40565b610e1e565b34801561048057600080fd5b5061033f61048f3660046138eb565b610e33565b3480156104a057600080fd5b506102c06104af36600461373d565b610ec7565b3480156104c057600080fd5b506102c06104cf366004613a89565b610ee7565b3480156104e057600080fd5b50610130546001600160a01b03165b6040516001600160a01b039091168152602001610276565b34801561051357600080fd5b5061033f61052236600461373d565b610fc7565b34801561053357600080fd5b5061026961101c565b34801561054857600080fd5b506102c06101635481565b34801561055f57600080fd5b5061029f61056e36600461388c565b61102b565b34801561057f57600080fd5b5061029f61058e36600461388c565b6110e0565b34801561059f57600080fd5b506104ef73c1e088fc1323b20bcbee9bd1b9fc9546db5624c581565b3480156105c757600080fd5b506102c06110ee565b3480156105dc57600080fd5b5061033f61111a565b3480156105f157600080fd5b506102c06106003660046139a6565b6111c0565b34801561061157600080fd5b5061033f6106203660046137c4565b611291565b34801561063157600080fd5b506102c0610640366004613adc565b6113f5565b34801561065157600080fd5b5061029f61066036600461373d565b6101626020526000908152604090205460ff1681565b34801561068257600080fd5b506102c0610691366004613757565b6001600160a01b03918216600090815260986020908152604080832093909416825291909152205490565b3480156106c857600080fd5b5061033f6106d736600461373d565b611456565b3480156106e857600080fd5b5061033f6106f736600461373d565b6114a8565b6060609a805461070b906142e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610737906142e5565b80156107845780601f1061075957610100808354040283529160200191610784565b820191906000526020600020905b81548152906001019060200180831161076757829003601f168201915b5050505050905090565b60003361079c818585611535565b5060019392505050565b6000336107b485828561168d565b6107bf85858561171f565b60019150505b9392505050565b60006107d6611936565b905090565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561086e5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108c97f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146109345760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610865565b61093d816119b1565b60408051600080825260208201909252610959918391906119b9565b50565b3360008181526098602090815260408083206001600160a01b038716845290915281205490919061079c9082908690610996908790614113565b611535565b6109a3611b68565b6001600160a01b038216610a2a576040517ff0bedbe2000000000000000000000000000000000000000000000000000000008152600481018290526001600160a01b0384169063f0bedbe2906024015b600060405180830381600087803b158015610a0d57600080fd5b505af1158015610a21573d6000803e3d6000fd5b50505050505050565b6040517fbd86e508000000000000000000000000000000000000000000000000000000008152600481018290526001600160a01b03838116602483015284169063bd86e508906044016109f3565b505050565b610a878282611bc3565b5050565b600054610100900460ff1615808015610aab5750600054600160ff909116105b80610ac55750303b158015610ac5575060005460ff166001145b610b375760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610865565b6000805460ff191660011790558015610b5a576000805461ff0019166101001790555b610b648383611e1c565b610b6d83611e91565b610b75611f3b565b8015610a78576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b6000610bd4610bce8486614181565b83611fae565b949350505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610c6a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610865565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610cc57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614610d305760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610865565b610d39826119b1565b610a87828260016119b9565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610de55760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610865565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610e12611b68565b610e1c60006120e3565b565b6000610bd4610e2d8486614181565b83612143565b60005b83811015610ec057610eb0858583818110610e6157634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610e76919061373d565b848484818110610e9657634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610eab9190613caf565b611bc3565b610eb98161431a565b9050610e36565b5050505050565b6001600160a01b038116600090815260fd60205260408120545b92915050565b6040517f120b57020000000000000000000000000000000000000000000000000000000081523360048201523060248201526001600160a01b0387166044820152606481018690526084810185905260ff841660a482015260c4810183905260e4810182905260009073c1e088fc1323b20bcbee9bd1b9fc9546db5624c59063120b570290610104015b600060405180830381600087803b158015610f8b57600080fd5b505af1158015610f9f573d6000803e3d6000fd5b50505050610fb98a8a90610fb39190614181565b89612143565b9a9950505050505050505050565b610fcf611b68565b6001600160a01b03811660008181526101626020526040808220805460ff19166001179055517fa54e443f26cc5ad727d621c65ab316267d303b027773376113f00c53ed7b372b9190a250565b6060609b805461070b906142e5565b3360008181526098602090815260408083206001600160a01b0387168452909152812054909190838110156110c85760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610865565b6110d58286868403611535565b506001949350505050565b60003361079c81858561171f565b60006110f960995490565b670de0b6b3a764000061016354611110919061414b565b6107d6919061412b565b600073c1e088fc1323b20bcbee9bd1b9fc9546db5624c56001600160a01b031663779b3c5c6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561116b57600080fd5b505af115801561117f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a39190613c1d565b90508061016360008282546111b89190614113565b909155505050565b6040517f7c516e940000000000000000000000000000000000000000000000000000000081523360048201523060248201526001600160a01b0387166044820152606481018690526084810185905260ff841660a482015260c4810183905260e4810182905260009073c1e088fc1323b20bcbee9bd1b9fc9546db5624c590637c516e949061010401600060405180830381600087803b15801561126357600080fd5b505af1158015611277573d6000803e3d6000fd5b50505050610fb98a8a9061128b9190614181565b89611fae565b834211156112e15760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610865565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886113108c6122c8565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061136b826122f0565b9050600061137b82878787612359565b9050896001600160a01b0316816001600160a01b0316146113de5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610865565b6113e98a8a8a611535565b50505050505050505050565b6040517fd5770dc700000000000000000000000000000000000000000000000000000000815260009073c1e088fc1323b20bcbee9bd1b9fc9546db5624c59063d5770dc790610f7190339030908c908c908c908c908c908c90600401613e40565b61145e611b68565b6001600160a01b03811660008181526101626020526040808220805460ff19169055517ff9e330625cb712f3af7340fb3b6454be2ea9e7035659cfb1b477705786ca5d429190a250565b6114b0611b68565b6001600160a01b03811661152c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610865565b610959816120e3565b6001600160a01b0383166115b05760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610865565b6001600160a01b03821661162c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610865565b6001600160a01b0383811660008181526098602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152609860209081526040808320938616835292905220546000198114611719578181101561170c5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610865565b6117198484848403611535565b50505050565b6001600160a01b03831661179b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610865565b6001600160a01b0382166118175760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610865565b6001600160a01b038316600090815260976020526040902054818110156118a65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610865565b6001600160a01b038085166000908152609760205260408082208585039055918516815290812080548492906118dd908490614113565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161192991815260200190565b60405180910390a3611719565b60006107d67f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61196560c95490565b60ca546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b610959611b68565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156119ec57610a7883612381565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b158015611a2557600080fd5b505afa925050508015611a55575060408051601f3d908101601f19168201909252611a5291810190613c1d565b60015b611ac75760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610865565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611b5c5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610865565b50610a7883838361244c565b610130546001600160a01b03163314610e1c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610865565b6040517f8a6a7eb40000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038316602482015263ffffffff8216604482015260009073c1e088fc1323b20bcbee9bd1b9fc9546db5624c590638a6a7eb490606401604080518083038186803b158015611c4357600080fd5b505afa158015611c57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7b9190613c8c565b5060408051600180825281830190925291925060009190602080830190803683370190505090508281600081518110611cc457634e487b7160e01b600052603260045260246000fd5b63ffffffff92909216602092830291909101909101526040805160018082528183019092526000918160200160208202803683370190505090508281600081518110611d2057634e487b7160e01b600052603260045260246000fd5b60200260200101818152505060008073c1e088fc1323b20bcbee9bd1b9fc9546db5624c56001600160a01b0316633b2a1b286004878a604051602001611d6893929190614051565b60405160208183030381529060405286866040518463ffffffff1660e01b8152600401611d9793929190613f93565b60a060405180830381600087803b158015611db157600080fd5b505af1158015611dc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611de99190613ccb565b945094505050508181611dfc919061416a565b6101636000828254611e0e9190614113565b909155505050505050505050565b600054610100900460ff16611e875760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610865565b610a878282612471565b600054610100900460ff16611efc5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610865565b610959816040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250612503565b600054610100900460ff16611fa65760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610865565b610e1c612588565b6000806000806000611fc18760006125fc565b92965090945092509050336000876003811115611fee57634e487b7160e01b600052602160045260246000fd5b1461208457506040517f7006e387000000000000000000000000000000000000000000000000000000008152309073c1e088fc1323b20bcbee9bd1b9fc9546db5624c590637006e38790612051908490339082908b908e90600090600401613fcc565b600060405180830381600087803b15801561206b57600080fd5b505af115801561207f573d6000803e3d6000fd5b505050505b61208e8186612c64565b336001600160a01b03167f859a659762340cd07a1ca857ddc4f9485f55dd427e3fca351c9a52b253f5cc15898686868a6040516120cf959493929190613edd565b60405180910390a250929695505050505050565b61013080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008060008060006121568760016125fc565b92965090945092509050600186600181111561218257634e487b7160e01b600052602160045260246000fd5b1415612242576121923085612de9565b6121b13073c1e088fc1323b20bcbee9bd1b9fc9546db5624c586611535565b6040517f6204aa4300000000000000000000000000000000000000000000000000000000815273c1e088fc1323b20bcbee9bd1b9fc9546db5624c590636204aa439061220b90309033908990600090600190600401614018565b600060405180830381600087803b15801561222557600080fd5b505af1158015612239573d6000803e3d6000fd5b50505050612274565b600086600181111561226457634e487b7160e01b600052602160045260246000fd5b1415612274576122743385612de9565b336001600160a01b03167f6ac93e168d031c08e2c22e09c4811299bce823b5980cad4b51805bf8405ec4bf88858585896040516122b5959493929190613edd565b60405180910390a2509195945050505050565b6001600160a01b038116600090815260fd602052604090208054600181018255905b50919050565b6000610ee16122fd611936565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061236a87878787612ec8565b9150915061237781612fb5565b5095945050505050565b6001600160a01b0381163b6123fe5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610865565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b612455836131b6565b6000825111806124625750805b15610a785761171983836131f6565b600054610100900460ff166124dc5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610865565b81516124ef90609a9060208501906134c5565b508051610a7890609b9060208401906134c5565b600054610100900460ff1661256e5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610865565b81516020928301208151919092012060c99190915560ca55565b600054610100900460ff166125f35760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610865565b610e1c336120e3565b6040517f1c1b877200000000000000000000000000000000000000000000000000000000815230600482015260009081908190819073c1e088fc1323b20bcbee9bd1b9fc9546db5624c590631c1b877290602401600060405180830381600087803b15801561266a57600080fd5b505af115801561267e573d6000803e3d6000fd5b505060405163248b5e3960e11b81523060048201526000925073c1e088fc1323b20bcbee9bd1b9fc9546db5624c59150634916bc729060240160206040518083038186803b1580156126cf57600080fd5b505afa1580156126e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127079190613c1d565b6040516308eeae3160e41b815230600482015290915060009073c1e088fc1323b20bcbee9bd1b9fc9546db5624c590638eeae3109060240160206040518083038186803b15801561275757600080fd5b505afa15801561276b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061278f9190613c1d565b905060005b88518110156129cc5761016260008a83815181106127c257634e487b7160e01b600052603260045260246000fd5b602090810291909101810151516001600160a01b031682528101919091526040016000205460ff166128365760405162461bcd60e51b815260206004820152601860248201527f546f6b656e206973206e6f742077686974656c697374656400000000000000006044820152606401610865565b600073c1e088fc1323b20bcbee9bd1b9fc9546db5624c5630d2615b18a61285d573061285f565b335b8b61286a573361286c565b305b8d868151811061288c57634e487b7160e01b600052603260045260246000fd5b6020026020010151600001518e87815181106128b857634e487b7160e01b600052603260045260246000fd5b6020026020010151602001518f88815181106128e457634e487b7160e01b600052603260045260246000fd5b6020026020010151604001516040518663ffffffff1660e01b8152600401612910959493929190613dee565b600060405180830381600087803b15801561292a57600080fd5b505af115801561293e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526129669190810190613b8a565b905060005b81518110156129b95781818151811061299457634e487b7160e01b600052603260045260246000fd5b6020026020010151886129a79190614113565b97506129b28161431a565b905061296b565b5050806129c59061431a565b9050612794565b5060405163248b5e3960e11b815230600482015260009073c1e088fc1323b20bcbee9bd1b9fc9546db5624c590634916bc729060240160206040518083038186803b158015612a1a57600080fd5b505afa158015612a2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a529190613c1d565b6040516308eeae3160e41b815230600482015290915060009073c1e088fc1323b20bcbee9bd1b9fc9546db5624c590638eeae3109060240160206040518083038186803b158015612aa257600080fd5b505afa158015612ab6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ada9190613c1d565b905060008915612b12578761016354612af39190614113565b9050612aff848361416a565b9650612b0b858461416a565b9550612b3c565b8761016354612b21919061416a565b9050612b2d828561416a565b9650612b39838661416a565b95505b6000612b4760995490565b905080612b5657879950612c4f565b8a15612bd85780612bc7612bb5612b86670de0b6b3a764000061016354600088613301909392919063ffffffff16565b612b9b87670de0b6b3a76400008b6000613301565b612bb089670de0b6b3a76400008d6000613301565b613378565b8390670de0b6b3a76400006000613301565b612bd1919061416a565b9950612c4f565b612c42612c30612c01670de0b6b3a764000061016354600187613301909392919063ffffffff16565b612c1686670de0b6b3a76400008a6001613301565b612c2b88670de0b6b3a76400008c6001613301565b613390565b8290670de0b6b3a76400006001613301565b612c4c908261416a565b99505b50610163555095989497509295509093505050565b6001600160a01b038216612ce05760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610865565b6001600160a01b03821660009081526097602052604090205481811015612d6f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610865565b6001600160a01b0383166000908152609760205260408120838303905560998054849290612d9e90849061416a565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6001600160a01b038216612e3f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610865565b8060996000828254612e519190614113565b90915550506001600160a01b03821660009081526097602052604081208054839290612e7e908490614113565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115612eff5750600090506003612fac565b8460ff16601b14158015612f1757508460ff16601c14155b15612f285750600090506004612fac565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612f7c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116612fa557600060019250925050612fac565b9150600090505b94509492505050565b6000816004811115612fd757634e487b7160e01b600052602160045260246000fd5b1415612fe05750565b600181600481111561300257634e487b7160e01b600052602160045260246000fd5b14156130505760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610865565b600281600481111561307257634e487b7160e01b600052602160045260246000fd5b14156130c05760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610865565b60038160048111156130e257634e487b7160e01b600052602160045260246000fd5b141561313b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610865565b600481600481111561315d57634e487b7160e01b600052602160045260246000fd5b14156109595760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610865565b6131bf81612381565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6132755760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610865565b600080846001600160a01b0316846040516132909190613dd2565b600060405180830381855af49150503d80600081146132cb576040519150601f19603f3d011682016040523d82523d6000602084013e6132d0565b606091505b50915091506132f8828260405180606001604052806027815260200161438a602791396133a8565b95945050505050565b60008061330f8686866133e1565b9050600183600281111561333357634e487b7160e01b600052602160045260246000fd5b14801561335e57506000848061335957634e487b7160e01b600052601260045260246000fd5b868809115b156132f85761336e600182614113565b9695505050505050565b6000613384848461349f565b9350610bd4848361349f565b600061339c84846134b5565b9350610bd484836134b5565b606083156133b75750816107c5565b8251156133c75782518084602001fd5b8160405162461bcd60e51b81526004016108659190614082565b60008080600019858709858702925082811083820303915050806000141561342a5783828161342057634e487b7160e01b600052601260045260246000fd5b04925050506107c5565b80841161343657600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b60008183106134ae57816107c5565b5090919050565b6000818310156134ae57816107c5565b8280546134d1906142e5565b90600052602060002090601f0160209004810192826134f35760008555613539565b82601f1061350c57805160ff1916838001178555613539565b82800160010185558215613539579182015b8281111561353957825182559160200191906001019061351e565b50613545929150613549565b5090565b5b80821115613545576000815560010161354a565b600067ffffffffffffffff83111561357857613578614361565b61358b601f8401601f19166020016140be565b905082815283838301111561359f57600080fd5b828260208301376000602084830101529392505050565b80356001600160a01b03811681146135cd57600080fd5b919050565b60008083601f8401126135e3578182fd5b50813567ffffffffffffffff8111156135fa578182fd5b6020830191508360208260051b850101111561361557600080fd5b9250929050565b600082601f83011261362c578081fd5b8135602061364161363c836140ef565b6140be565b80838252828201915082860187848660051b8901011115613660578586fd5b855b8581101561368557613673826135b6565b84529284019290840190600101613662565b5090979650505050505050565b600082601f8301126136a2578081fd5b813560206136b261363c836140ef565b80838252828201915082860187848660051b89010111156136d1578586fd5b855b85811015613685578135845292840192908401906001016136d3565b8035600481106135cd57600080fd5b8035600281106135cd57600080fd5b600082601f83011261371d578081fd5b6107c58383356020850161355e565b803560ff811681146135cd57600080fd5b60006020828403121561374e578081fd5b6107c5826135b6565b60008060408385031215613769578081fd5b613772836135b6565b9150613780602084016135b6565b90509250929050565b60008060006060848603121561379d578081fd5b6137a6846135b6565b92506137b4602085016135b6565b9150604084013590509250925092565b600080600080600080600060e0888a0312156137de578485fd5b6137e7886135b6565b96506137f5602089016135b6565b955060408801359450606088013593506138116080890161372c565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561383f578182fd5b613848836135b6565b9150602083013567ffffffffffffffff811115613863578182fd5b8301601f81018513613873578182fd5b6138828582356020840161355e565b9150509250929050565b6000806040838503121561389e578182fd5b6138a7836135b6565b946020939093013593505050565b600080604083850312156138c7578182fd5b6138d0836135b6565b915060208301356138e081614377565b809150509250929050565b60008060008060408587031215613900578182fd5b843567ffffffffffffffff80821115613917578384fd5b613923888389016135d2565b9096509450602087013591508082111561393b578384fd5b50613948878288016135d2565b95989497509550505050565b600080600060408486031215613968578081fd5b833567ffffffffffffffff81111561397e578182fd5b61398a868287016135d2565b909450925061399d9050602085016136ef565b90509250925092565b60008060008060008060008060006101008a8c0312156139c4578283fd5b893567ffffffffffffffff8111156139da578384fd5b6139e68c828d016135d2565b909a5098506139f9905060208b016136ef565b9650613a0760408b016135b6565b955060608a0135945060808a01359350613a2360a08b0161372c565b925060c08a0135915060e08a013590509295985092959850929598565b600080600060408486031215613a54578081fd5b833567ffffffffffffffff811115613a6a578182fd5b613a76868287016135d2565b909450925061399d9050602085016136fe565b60008060008060008060008060006101008a8c031215613aa7578283fd5b893567ffffffffffffffff811115613abd578384fd5b613ac98c828d016135d2565b909a5098506139f9905060208b016136fe565b60008060008060008060008060006101008a8c031215613afa578283fd5b893567ffffffffffffffff80821115613b11578485fd5b613b1d8d838e016135d2565b909b509950899150613b3160208d016136fe565b985060408c0135915080821115613b46578485fd5b613b528d838e0161361c565b975060608c0135915080821115613b67578485fd5b50613b748c828d01613692565b95505060808a01359350613a2360a08b0161372c565b60006020808385031215613b9c578182fd5b825167ffffffffffffffff811115613bb2578283fd5b8301601f81018513613bc2578283fd5b8051613bd061363c826140ef565b80828252848201915084840188868560051b8701011115613bef578687fd5b8694505b83851015613c11578051835260019490940193918501918501613bf3565b50979650505050505050565b600060208284031215613c2e578081fd5b5051919050565b60008060408385031215613c47578182fd5b823567ffffffffffffffff80821115613c5e578384fd5b613c6a8683870161370d565b93506020850135915080821115613c7f578283fd5b506138828582860161370d565b60008060408385031215613c9e578182fd5b505080516020909101519092909150565b600060208284031215613cc0578081fd5b81356107c581614377565b600080600080600060a08688031215613ce2578283fd5b8551613ced81614377565b602087015160408801516060890151608090990151929a91995097965090945092505050565b6000815180845260208085019450808401835b83811015613d4257815187529582019590820190600101613d26565b509495945050505050565b6000815180845260208085019450808401835b83811015613d4257815163ffffffff1687529582019590820190600101613d60565b60008151808452613d9a8160208601602086016142b9565b601f01601f19169290920160200192915050565b60048110613dbe57613dbe61434b565b9052565b60028110613dbe57613dbe61434b565b60008251613de48184602087016142b9565b9190910192915050565b60006001600160a01b038088168352808716602084015280861660408401525060a06060830152613e2260a0830185613d4d565b8281036080840152613e348185613d13565b98975050505050505050565b60006101008083016001600160a01b03808d1685526020818d16818701528360408701528293508b5180845261012087019450818d019350855b81811015613e98578451841686529482019493820193600101613e7a565b50505050508281036060840152613eaf8189613d13565b915050856080830152613ec760a083018660ff169052565b60c082019390935260e001529695505050505050565b600060a0820160a0835280885180835260c08501915060c08160051b86010192506020808b01855b83811015613f6d5760bf19888703018552815160606001600160a01b0382511688528482015181868a0152613f3c828a0182613d4d565b9150506040808301519250888203818a015250613f598183613d13565b975050509382019390820190600101613f05565b505085019890985250604083019590955250606081019290925260809091015292915050565b606081526000613fa66060830186613d82565b8281036020840152613fb88186613d4d565b9050828103604084015261336e8185613d13565b6001600160a01b0387811682528681166020830152851660408201526060810184905260c081016140006080830185613dae565b61400d60a0830184613dc2565b979650505050505050565b6001600160a01b038681168252851660208201526040810184905260a081016140446060830185613dae565b61336e6080830184613dc2565b60608101600585106140655761406561434b565b93815260208101929092526001600160a01b031660409091015290565b6020815260006107c56020830184613d82565b6040516060810167ffffffffffffffff811182821017156140b8576140b8614361565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156140e7576140e7614361565b604052919050565b600067ffffffffffffffff82111561410957614109614361565b5060051b60200190565b6000821982111561412657614126614335565b500190565b60008261414657634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561416557614165614335565b500290565b60008282101561417c5761417c614335565b500390565b600061418f61363c846140ef565b838152602080820191908460053688821b830111156141ac578586fd5b855b888110156142ac57823567ffffffffffffffff808211156141cd578889fd5b818a019150606082360312156141e1578889fd5b6141e9614095565b6141f2836135b6565b81528683013582811115614204578a8bfd5b830136601f820112614214578a8bfd5b803561422261363c826140ef565b81815289810190838b0136848b1b86018d01111561423e578e8ffd5b8e94505b8385101561426957803561425581614377565b835260019490940193918b01918b01614242565b50848b01525060409150508381013583811115614284578b8cfd5b61429036828701613692565b91830191909152508852505094830194918301916001016141ae565b5092979650505050505050565b60005b838110156142d45781810151838201526020016142bc565b838111156117195750506000910152565b600181811c908216806142f957607f821691505b602082108114156122ea57634e487b7160e01b600052602260045260246000fd5b600060001982141561432e5761432e614335565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b63ffffffff8116811461095957600080fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201b1bd7959f7da3446fe2062d3e2cbb1334b9be44811b35312dc04b9b1b60848964736f6c63430008040033";
var isSuperArgs = function isSuperArgs(xs) {
  return xs.length > 1;
};
var Root__factory = /*#__PURE__*/function (_ContractFactory) {
  _inheritsLoose(Root__factory, _ContractFactory);
  function Root__factory() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (isSuperArgs(args)) {
      _this = _ContractFactory.call.apply(_ContractFactory, [this].concat(args)) || this;
    } else {
      _this = _ContractFactory.call(this, _abi$2, _bytecode, args[0]) || this;
    }
    return _assertThisInitialized(_this);
  }
  var _proto = Root__factory.prototype;
  _proto.deploy = function deploy(overrides) {
    return _ContractFactory.prototype.deploy.call(this, overrides || {});
  };
  _proto.getDeployTransaction = function getDeployTransaction(overrides) {
    return _ContractFactory.prototype.getDeployTransaction.call(this, overrides || {});
  };
  _proto.attach = function attach(address) {
    return _ContractFactory.prototype.attach.call(this, address);
  };
  _proto.connect = function connect(signer) {
    return _ContractFactory.prototype.connect.call(this, signer);
  };
  Root__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$2);
  };
  Root__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$2, signerOrProvider);
  };
  return Root__factory;
}(ethers.ContractFactory);
Root__factory.bytecode = _bytecode;
Root__factory.abi = _abi$2;

/* Autogenerated file. Do not edit manually. */
var _abi$3 = [{
  name: "TokenExchange",
  inputs: [{
    type: "address",
    name: "buyer",
    indexed: true
  }, {
    type: "int128",
    name: "sold_id",
    indexed: false
  }, {
    type: "uint256",
    name: "tokens_sold",
    indexed: false
  }, {
    type: "int128",
    name: "bought_id",
    indexed: false
  }, {
    type: "uint256",
    name: "tokens_bought",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "AddLiquidity",
  inputs: [{
    type: "address",
    name: "provider",
    indexed: true
  }, {
    type: "uint256[3]",
    name: "token_amounts",
    indexed: false
  }, {
    type: "uint256[3]",
    name: "fees",
    indexed: false
  }, {
    type: "uint256",
    name: "invariant",
    indexed: false
  }, {
    type: "uint256",
    name: "token_supply",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RemoveLiquidity",
  inputs: [{
    type: "address",
    name: "provider",
    indexed: true
  }, {
    type: "uint256[3]",
    name: "token_amounts",
    indexed: false
  }, {
    type: "uint256[3]",
    name: "fees",
    indexed: false
  }, {
    type: "uint256",
    name: "token_supply",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RemoveLiquidityOne",
  inputs: [{
    type: "address",
    name: "provider",
    indexed: true
  }, {
    type: "uint256",
    name: "token_amount",
    indexed: false
  }, {
    type: "uint256",
    name: "coin_amount",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RemoveLiquidityImbalance",
  inputs: [{
    type: "address",
    name: "provider",
    indexed: true
  }, {
    type: "uint256[3]",
    name: "token_amounts",
    indexed: false
  }, {
    type: "uint256[3]",
    name: "fees",
    indexed: false
  }, {
    type: "uint256",
    name: "invariant",
    indexed: false
  }, {
    type: "uint256",
    name: "token_supply",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "CommitNewAdmin",
  inputs: [{
    type: "uint256",
    name: "deadline",
    indexed: true
  }, {
    type: "address",
    name: "admin",
    indexed: true
  }],
  anonymous: false,
  type: "event"
}, {
  name: "NewAdmin",
  inputs: [{
    type: "address",
    name: "admin",
    indexed: true
  }],
  anonymous: false,
  type: "event"
}, {
  name: "CommitNewFee",
  inputs: [{
    type: "uint256",
    name: "deadline",
    indexed: true
  }, {
    type: "uint256",
    name: "fee",
    indexed: false
  }, {
    type: "uint256",
    name: "admin_fee",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "NewFee",
  inputs: [{
    type: "uint256",
    name: "fee",
    indexed: false
  }, {
    type: "uint256",
    name: "admin_fee",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RampA",
  inputs: [{
    type: "uint256",
    name: "old_A",
    indexed: false
  }, {
    type: "uint256",
    name: "new_A",
    indexed: false
  }, {
    type: "uint256",
    name: "initial_time",
    indexed: false
  }, {
    type: "uint256",
    name: "future_time",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "StopRampA",
  inputs: [{
    type: "uint256",
    name: "A",
    indexed: false
  }, {
    type: "uint256",
    name: "t",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  outputs: [],
  inputs: [{
    type: "address",
    name: "_owner"
  }, {
    type: "address[3]",
    name: "_coins"
  }, {
    type: "address",
    name: "_pool_token"
  }, {
    type: "uint256",
    name: "_A"
  }, {
    type: "uint256",
    name: "_fee"
  }, {
    type: "uint256",
    name: "_admin_fee"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  name: "A",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 5227
}, {
  name: "get_virtual_price",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 1133537
}, {
  name: "calc_token_amount",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256[3]",
    name: "amounts"
  }, {
    type: "bool",
    name: "deposit"
  }],
  stateMutability: "view",
  type: "function",
  gas: 4508776
}, {
  name: "add_liquidity",
  outputs: [],
  inputs: [{
    type: "uint256[3]",
    name: "amounts"
  }, {
    type: "uint256",
    name: "min_mint_amount"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 6954858
}, {
  name: "get_dy",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "int128",
    name: "i"
  }, {
    type: "int128",
    name: "j"
  }, {
    type: "uint256",
    name: "dx"
  }],
  stateMutability: "view",
  type: "function",
  gas: 2673791
}, {
  name: "get_dy_underlying",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "int128",
    name: "i"
  }, {
    type: "int128",
    name: "j"
  }, {
    type: "uint256",
    name: "dx"
  }],
  stateMutability: "view",
  type: "function",
  gas: 2673474
}, {
  name: "exchange",
  outputs: [],
  inputs: [{
    type: "int128",
    name: "i"
  }, {
    type: "int128",
    name: "j"
  }, {
    type: "uint256",
    name: "dx"
  }, {
    type: "uint256",
    name: "min_dy"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 2818066
}, {
  name: "remove_liquidity",
  outputs: [],
  inputs: [{
    type: "uint256",
    name: "_amount"
  }, {
    type: "uint256[3]",
    name: "min_amounts"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 192846
}, {
  name: "remove_liquidity_imbalance",
  outputs: [],
  inputs: [{
    type: "uint256[3]",
    name: "amounts"
  }, {
    type: "uint256",
    name: "max_burn_amount"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 6951851
}, {
  name: "calc_withdraw_one_coin",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "_token_amount"
  }, {
    type: "int128",
    name: "i"
  }],
  stateMutability: "view",
  type: "function",
  gas: 1102
}, {
  name: "remove_liquidity_one_coin",
  outputs: [],
  inputs: [{
    type: "uint256",
    name: "_token_amount"
  }, {
    type: "int128",
    name: "i"
  }, {
    type: "uint256",
    name: "min_amount"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 4025523
}, {
  name: "ramp_A",
  outputs: [],
  inputs: [{
    type: "uint256",
    name: "_future_A"
  }, {
    type: "uint256",
    name: "_future_time"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 151919
}, {
  name: "stop_ramp_A",
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "function",
  gas: 148637
}, {
  name: "commit_new_fee",
  outputs: [],
  inputs: [{
    type: "uint256",
    name: "new_fee"
  }, {
    type: "uint256",
    name: "new_admin_fee"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 110461
}, {
  name: "apply_new_fee",
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "function",
  gas: 97242
}, {
  name: "revert_new_parameters",
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "function",
  gas: 21895
}, {
  name: "commit_transfer_ownership",
  outputs: [],
  inputs: [{
    type: "address",
    name: "_owner"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 74572
}, {
  name: "apply_transfer_ownership",
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "function",
  gas: 60710
}, {
  name: "revert_transfer_ownership",
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "function",
  gas: 21985
}, {
  name: "admin_balances",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "i"
  }],
  stateMutability: "view",
  type: "function",
  gas: 3481
}, {
  name: "withdraw_admin_fees",
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "function",
  gas: 21502
}, {
  name: "donate_admin_fees",
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "function",
  gas: 111389
}, {
  name: "kill_me",
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "function",
  gas: 37998
}, {
  name: "unkill_me",
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "function",
  gas: 22135
}, {
  name: "coins",
  outputs: [{
    type: "address",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "arg0"
  }],
  stateMutability: "view",
  type: "function",
  gas: 2220
}, {
  name: "balances",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "arg0"
  }],
  stateMutability: "view",
  type: "function",
  gas: 2250
}, {
  name: "fee",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2171
}, {
  name: "admin_fee",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2201
}, {
  name: "owner",
  outputs: [{
    type: "address",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2231
}, {
  name: "initial_A",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2261
}, {
  name: "future_A",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2291
}, {
  name: "initial_A_time",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2321
}, {
  name: "future_A_time",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2351
}, {
  name: "admin_actions_deadline",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2381
}, {
  name: "transfer_ownership_deadline",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2411
}, {
  name: "future_fee",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2441
}, {
  name: "future_admin_fee",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2471
}, {
  name: "future_owner",
  outputs: [{
    type: "address",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2501
}];
var Curve3Pool__factory = /*#__PURE__*/function () {
  function Curve3Pool__factory() {}
  Curve3Pool__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$3);
  };
  Curve3Pool__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$3, signerOrProvider);
  };
  return Curve3Pool__factory;
}();
Curve3Pool__factory.abi = _abi$3;

/* Autogenerated file. Do not edit manually. */
var _abi$4 = [{
  name: "TokenExchange",
  inputs: [{
    name: "buyer",
    type: "address",
    indexed: true
  }, {
    name: "sold_id",
    type: "uint256",
    indexed: false
  }, {
    name: "tokens_sold",
    type: "uint256",
    indexed: false
  }, {
    name: "bought_id",
    type: "uint256",
    indexed: false
  }, {
    name: "tokens_bought",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "AddLiquidity",
  inputs: [{
    name: "provider",
    type: "address",
    indexed: true
  }, {
    name: "token_amounts",
    type: "uint256[3]",
    indexed: false
  }, {
    name: "fee",
    type: "uint256",
    indexed: false
  }, {
    name: "token_supply",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RemoveLiquidity",
  inputs: [{
    name: "provider",
    type: "address",
    indexed: true
  }, {
    name: "token_amounts",
    type: "uint256[3]",
    indexed: false
  }, {
    name: "token_supply",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RemoveLiquidityOne",
  inputs: [{
    name: "provider",
    type: "address",
    indexed: true
  }, {
    name: "token_amount",
    type: "uint256",
    indexed: false
  }, {
    name: "coin_index",
    type: "uint256",
    indexed: false
  }, {
    name: "coin_amount",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "CommitNewAdmin",
  inputs: [{
    name: "deadline",
    type: "uint256",
    indexed: true
  }, {
    name: "admin",
    type: "address",
    indexed: true
  }],
  anonymous: false,
  type: "event"
}, {
  name: "NewAdmin",
  inputs: [{
    name: "admin",
    type: "address",
    indexed: true
  }],
  anonymous: false,
  type: "event"
}, {
  name: "CommitNewParameters",
  inputs: [{
    name: "deadline",
    type: "uint256",
    indexed: true
  }, {
    name: "admin_fee",
    type: "uint256",
    indexed: false
  }, {
    name: "mid_fee",
    type: "uint256",
    indexed: false
  }, {
    name: "out_fee",
    type: "uint256",
    indexed: false
  }, {
    name: "fee_gamma",
    type: "uint256",
    indexed: false
  }, {
    name: "allowed_extra_profit",
    type: "uint256",
    indexed: false
  }, {
    name: "adjustment_step",
    type: "uint256",
    indexed: false
  }, {
    name: "ma_half_time",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "NewParameters",
  inputs: [{
    name: "admin_fee",
    type: "uint256",
    indexed: false
  }, {
    name: "mid_fee",
    type: "uint256",
    indexed: false
  }, {
    name: "out_fee",
    type: "uint256",
    indexed: false
  }, {
    name: "fee_gamma",
    type: "uint256",
    indexed: false
  }, {
    name: "allowed_extra_profit",
    type: "uint256",
    indexed: false
  }, {
    name: "adjustment_step",
    type: "uint256",
    indexed: false
  }, {
    name: "ma_half_time",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RampAgamma",
  inputs: [{
    name: "initial_A",
    type: "uint256",
    indexed: false
  }, {
    name: "future_A",
    type: "uint256",
    indexed: false
  }, {
    name: "initial_gamma",
    type: "uint256",
    indexed: false
  }, {
    name: "future_gamma",
    type: "uint256",
    indexed: false
  }, {
    name: "initial_time",
    type: "uint256",
    indexed: false
  }, {
    name: "future_time",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "StopRampA",
  inputs: [{
    name: "current_A",
    type: "uint256",
    indexed: false
  }, {
    name: "current_gamma",
    type: "uint256",
    indexed: false
  }, {
    name: "time",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "ClaimAdminFee",
  inputs: [{
    name: "admin",
    type: "address",
    indexed: true
  }, {
    name: "tokens",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  stateMutability: "nonpayable",
  type: "constructor",
  inputs: [{
    name: "owner",
    type: "address"
  }, {
    name: "admin_fee_receiver",
    type: "address"
  }, {
    name: "A",
    type: "uint256"
  }, {
    name: "gamma",
    type: "uint256"
  }, {
    name: "mid_fee",
    type: "uint256"
  }, {
    name: "out_fee",
    type: "uint256"
  }, {
    name: "allowed_extra_profit",
    type: "uint256"
  }, {
    name: "fee_gamma",
    type: "uint256"
  }, {
    name: "adjustment_step",
    type: "uint256"
  }, {
    name: "admin_fee",
    type: "uint256"
  }, {
    name: "ma_half_time",
    type: "uint256"
  }, {
    name: "initial_prices",
    type: "uint256[2]"
  }],
  outputs: []
}, {
  stateMutability: "payable",
  type: "fallback"
}, {
  stateMutability: "view",
  type: "function",
  name: "price_oracle",
  inputs: [{
    name: "k",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3361
}, {
  stateMutability: "view",
  type: "function",
  name: "price_scale",
  inputs: [{
    name: "k",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3391
}, {
  stateMutability: "view",
  type: "function",
  name: "last_prices",
  inputs: [{
    name: "k",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3421
}, {
  stateMutability: "view",
  type: "function",
  name: "token",
  inputs: [],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 468
}, {
  stateMutability: "view",
  type: "function",
  name: "coins",
  inputs: [{
    name: "i",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 582
}, {
  stateMutability: "view",
  type: "function",
  name: "A",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 597
}, {
  stateMutability: "view",
  type: "function",
  name: "gamma",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 11991
}, {
  stateMutability: "view",
  type: "function",
  name: "fee",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 21673
}, {
  stateMutability: "view",
  type: "function",
  name: "fee_calc",
  inputs: [{
    name: "xp",
    type: "uint256[3]"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 11096
}, {
  stateMutability: "view",
  type: "function",
  name: "get_virtual_price",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 11582
}, {
  stateMutability: "payable",
  type: "function",
  name: "exchange",
  inputs: [{
    name: "i",
    type: "uint256"
  }, {
    name: "j",
    type: "uint256"
  }, {
    name: "dx",
    type: "uint256"
  }, {
    name: "min_dy",
    type: "uint256"
  }],
  outputs: []
}, {
  stateMutability: "payable",
  type: "function",
  name: "exchange",
  inputs: [{
    name: "i",
    type: "uint256"
  }, {
    name: "j",
    type: "uint256"
  }, {
    name: "dx",
    type: "uint256"
  }, {
    name: "min_dy",
    type: "uint256"
  }, {
    name: "use_eth",
    type: "bool"
  }],
  outputs: []
}, {
  stateMutability: "view",
  type: "function",
  name: "get_dy",
  inputs: [{
    name: "i",
    type: "uint256"
  }, {
    name: "j",
    type: "uint256"
  }, {
    name: "dx",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3122
}, {
  stateMutability: "view",
  type: "function",
  name: "calc_token_fee",
  inputs: [{
    name: "amounts",
    type: "uint256[3]"
  }, {
    name: "xp",
    type: "uint256[3]"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 26582
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "add_liquidity",
  inputs: [{
    name: "amounts",
    type: "uint256[3]"
  }, {
    name: "min_mint_amount",
    type: "uint256"
  }],
  outputs: [],
  gas: 738687
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "remove_liquidity",
  inputs: [{
    name: "_amount",
    type: "uint256"
  }, {
    name: "min_amounts",
    type: "uint256[3]"
  }],
  outputs: [],
  gas: 233981
}, {
  stateMutability: "view",
  type: "function",
  name: "calc_token_amount",
  inputs: [{
    name: "amounts",
    type: "uint256[3]"
  }, {
    name: "deposit",
    type: "bool"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3429
}, {
  stateMutability: "view",
  type: "function",
  name: "calc_withdraw_one_coin",
  inputs: [{
    name: "token_amount",
    type: "uint256"
  }, {
    name: "i",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 13432
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "remove_liquidity_one_coin",
  inputs: [{
    name: "token_amount",
    type: "uint256"
  }, {
    name: "i",
    type: "uint256"
  }, {
    name: "min_amount",
    type: "uint256"
  }],
  outputs: [],
  gas: 648579
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "claim_admin_fees",
  inputs: [],
  outputs: [],
  gas: 389808
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "ramp_A_gamma",
  inputs: [{
    name: "future_A",
    type: "uint256"
  }, {
    name: "future_gamma",
    type: "uint256"
  }, {
    name: "future_time",
    type: "uint256"
  }],
  outputs: [],
  gas: 163102
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "stop_ramp_A_gamma",
  inputs: [],
  outputs: [],
  gas: 157247
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "commit_new_parameters",
  inputs: [{
    name: "_new_mid_fee",
    type: "uint256"
  }, {
    name: "_new_out_fee",
    type: "uint256"
  }, {
    name: "_new_admin_fee",
    type: "uint256"
  }, {
    name: "_new_fee_gamma",
    type: "uint256"
  }, {
    name: "_new_allowed_extra_profit",
    type: "uint256"
  }, {
    name: "_new_adjustment_step",
    type: "uint256"
  }, {
    name: "_new_ma_half_time",
    type: "uint256"
  }],
  outputs: [],
  gas: 306190
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "apply_new_parameters",
  inputs: [],
  outputs: [],
  gas: 683438
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "revert_new_parameters",
  inputs: [],
  outputs: [],
  gas: 23222
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "commit_transfer_ownership",
  inputs: [{
    name: "_owner",
    type: "address"
  }],
  outputs: [],
  gas: 77260
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "apply_transfer_ownership",
  inputs: [],
  outputs: [],
  gas: 65937
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "revert_transfer_ownership",
  inputs: [],
  outputs: [],
  gas: 23312
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "kill_me",
  inputs: [],
  outputs: [],
  gas: 40535
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "unkill_me",
  inputs: [],
  outputs: [],
  gas: 23372
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_admin_fee_receiver",
  inputs: [{
    name: "_admin_fee_receiver",
    type: "address"
  }],
  outputs: [],
  gas: 38505
}, {
  stateMutability: "view",
  type: "function",
  name: "last_prices_timestamp",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3378
}, {
  stateMutability: "view",
  type: "function",
  name: "initial_A_gamma",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3408
}, {
  stateMutability: "view",
  type: "function",
  name: "future_A_gamma",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3438
}, {
  stateMutability: "view",
  type: "function",
  name: "initial_A_gamma_time",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3468
}, {
  stateMutability: "view",
  type: "function",
  name: "future_A_gamma_time",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3498
}, {
  stateMutability: "view",
  type: "function",
  name: "allowed_extra_profit",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3528
}, {
  stateMutability: "view",
  type: "function",
  name: "future_allowed_extra_profit",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3558
}, {
  stateMutability: "view",
  type: "function",
  name: "fee_gamma",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3588
}, {
  stateMutability: "view",
  type: "function",
  name: "future_fee_gamma",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3618
}, {
  stateMutability: "view",
  type: "function",
  name: "adjustment_step",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3648
}, {
  stateMutability: "view",
  type: "function",
  name: "future_adjustment_step",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3678
}, {
  stateMutability: "view",
  type: "function",
  name: "ma_half_time",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3708
}, {
  stateMutability: "view",
  type: "function",
  name: "future_ma_half_time",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3738
}, {
  stateMutability: "view",
  type: "function",
  name: "mid_fee",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3768
}, {
  stateMutability: "view",
  type: "function",
  name: "out_fee",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3798
}, {
  stateMutability: "view",
  type: "function",
  name: "admin_fee",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3828
}, {
  stateMutability: "view",
  type: "function",
  name: "future_mid_fee",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3858
}, {
  stateMutability: "view",
  type: "function",
  name: "future_out_fee",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3888
}, {
  stateMutability: "view",
  type: "function",
  name: "future_admin_fee",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3918
}, {
  stateMutability: "view",
  type: "function",
  name: "balances",
  inputs: [{
    name: "arg0",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 4057
}, {
  stateMutability: "view",
  type: "function",
  name: "D",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3978
}, {
  stateMutability: "view",
  type: "function",
  name: "owner",
  inputs: [],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 4008
}, {
  stateMutability: "view",
  type: "function",
  name: "future_owner",
  inputs: [],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 4038
}, {
  stateMutability: "view",
  type: "function",
  name: "xcp_profit",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 4068
}, {
  stateMutability: "view",
  type: "function",
  name: "xcp_profit_a",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 4098
}, {
  stateMutability: "view",
  type: "function",
  name: "virtual_price",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 4128
}, {
  stateMutability: "view",
  type: "function",
  name: "is_killed",
  inputs: [],
  outputs: [{
    name: "",
    type: "bool"
  }],
  gas: 4158
}, {
  stateMutability: "view",
  type: "function",
  name: "kill_deadline",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 4188
}, {
  stateMutability: "view",
  type: "function",
  name: "transfer_ownership_deadline",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 4218
}, {
  stateMutability: "view",
  type: "function",
  name: "admin_actions_deadline",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 4248
}, {
  stateMutability: "view",
  type: "function",
  name: "admin_fee_receiver",
  inputs: [],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 4278
}];
var CurveTriCrypto2Pool__factory = /*#__PURE__*/function () {
  function CurveTriCrypto2Pool__factory() {}
  CurveTriCrypto2Pool__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$4);
  };
  CurveTriCrypto2Pool__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$4, signerOrProvider);
  };
  return CurveTriCrypto2Pool__factory;
}();
CurveTriCrypto2Pool__factory.abi = _abi$4;

/* Autogenerated file. Do not edit manually. */
var _abi$5 = [{
  name: "PoolAdded",
  inputs: [{
    name: "pool",
    type: "address",
    indexed: true
  }],
  anonymous: false,
  type: "event"
}, {
  name: "PoolRemoved",
  inputs: [{
    name: "pool",
    type: "address",
    indexed: true
  }],
  anonymous: false,
  type: "event"
}, {
  stateMutability: "nonpayable",
  type: "constructor",
  inputs: [{
    name: "_address_provider",
    type: "address"
  }],
  outputs: []
}, {
  stateMutability: "view",
  type: "function",
  name: "find_pool_for_coins",
  inputs: [{
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3111
}, {
  stateMutability: "view",
  type: "function",
  name: "find_pool_for_coins",
  inputs: [{
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }, {
    name: "i",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3111
}, {
  stateMutability: "view",
  type: "function",
  name: "get_n_coins",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 2834
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coins",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address[8]"
  }],
  gas: 22975
}, {
  stateMutability: "view",
  type: "function",
  name: "get_decimals",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[8]"
  }],
  gas: 9818
}, {
  stateMutability: "view",
  type: "function",
  name: "get_gauges",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address[10]"
  }, {
    name: "",
    type: "int128[10]"
  }],
  gas: 26055
}, {
  stateMutability: "view",
  type: "function",
  name: "get_balances",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[8]"
  }],
  gas: 41626
}, {
  stateMutability: "view",
  type: "function",
  name: "get_virtual_price_from_lp_token",
  inputs: [{
    name: "_token",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 5321
}, {
  stateMutability: "view",
  type: "function",
  name: "get_A",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3139
}, {
  stateMutability: "view",
  type: "function",
  name: "get_D",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3169
}, {
  stateMutability: "view",
  type: "function",
  name: "get_gamma",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3199
}, {
  stateMutability: "view",
  type: "function",
  name: "get_fees",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[4]"
  }],
  gas: 10333
}, {
  stateMutability: "view",
  type: "function",
  name: "get_admin_balances",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[8]"
  }],
  gas: 85771
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coin_indices",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }, {
    name: "",
    type: "uint256"
  }],
  gas: 23608
}, {
  stateMutability: "view",
  type: "function",
  name: "get_pool_name",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "string"
  }],
  gas: 13576
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coin_swap_count",
  inputs: [{
    name: "_coin",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3224
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coin_swap_complement",
  inputs: [{
    name: "_coin",
    type: "address"
  }, {
    name: "_index",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3299
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "add_pool",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_n_coins",
    type: "uint256"
  }, {
    name: "_lp_token",
    type: "address"
  }, {
    name: "_gauge",
    type: "address"
  }, {
    name: "_zap",
    type: "address"
  }, {
    name: "_decimals",
    type: "uint256"
  }, {
    name: "_name",
    type: "string"
  }],
  outputs: [],
  gas: 18586944
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "remove_pool",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [],
  gas: 399675363514
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_liquidity_gauges",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_liquidity_gauges",
    type: "address[10]"
  }],
  outputs: [],
  gas: 422284
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "batch_set_liquidity_gauges",
  inputs: [{
    name: "_pools",
    type: "address[10]"
  }, {
    name: "_liquidity_gauges",
    type: "address[10]"
  }],
  outputs: [],
  gas: 444084
}, {
  stateMutability: "view",
  type: "function",
  name: "address_provider",
  inputs: [],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3126
}, {
  stateMutability: "view",
  type: "function",
  name: "pool_list",
  inputs: [{
    name: "arg0",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3201
}, {
  stateMutability: "view",
  type: "function",
  name: "pool_count",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3186
}, {
  stateMutability: "view",
  type: "function",
  name: "coin_count",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3216
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coin",
  inputs: [{
    name: "arg0",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3291
}, {
  stateMutability: "view",
  type: "function",
  name: "get_pool_from_lp_token",
  inputs: [{
    name: "arg0",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3548
}, {
  stateMutability: "view",
  type: "function",
  name: "get_lp_token",
  inputs: [{
    name: "arg0",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3578
}, {
  stateMutability: "view",
  type: "function",
  name: "get_zap",
  inputs: [{
    name: "arg0",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3608
}, {
  stateMutability: "view",
  type: "function",
  name: "last_updated",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3366
}];
var CurveCryptoFactory__factory = /*#__PURE__*/function () {
  function CurveCryptoFactory__factory() {}
  CurveCryptoFactory__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$5);
  };
  CurveCryptoFactory__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$5, signerOrProvider);
  };
  return CurveCryptoFactory__factory;
}();
CurveCryptoFactory__factory.abi = _abi$5;

/* Autogenerated file. Do not edit manually. */
var _abi$6 = [{
  name: "BasePoolAdded",
  inputs: [{
    name: "base_pool",
    type: "address",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "PlainPoolDeployed",
  inputs: [{
    name: "coins",
    type: "address[4]",
    indexed: false
  }, {
    name: "A",
    type: "uint256",
    indexed: false
  }, {
    name: "fee",
    type: "uint256",
    indexed: false
  }, {
    name: "deployer",
    type: "address",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "MetaPoolDeployed",
  inputs: [{
    name: "coin",
    type: "address",
    indexed: false
  }, {
    name: "base_pool",
    type: "address",
    indexed: false
  }, {
    name: "A",
    type: "uint256",
    indexed: false
  }, {
    name: "fee",
    type: "uint256",
    indexed: false
  }, {
    name: "deployer",
    type: "address",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "LiquidityGaugeDeployed",
  inputs: [{
    name: "pool",
    type: "address",
    indexed: false
  }, {
    name: "gauge",
    type: "address",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  stateMutability: "nonpayable",
  type: "constructor",
  inputs: [{
    name: "_fee_receiver",
    type: "address"
  }],
  outputs: []
}, {
  stateMutability: "view",
  type: "function",
  name: "metapool_implementations",
  inputs: [{
    name: "_base_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address[10]"
  }],
  gas: 21716
}, {
  stateMutability: "view",
  type: "function",
  name: "find_pool_for_coins",
  inputs: [{
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }]
}, {
  stateMutability: "view",
  type: "function",
  name: "find_pool_for_coins",
  inputs: [{
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }, {
    name: "i",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }]
}, {
  stateMutability: "view",
  type: "function",
  name: "get_base_pool",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 2663
}, {
  stateMutability: "view",
  type: "function",
  name: "get_n_coins",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 2699
}, {
  stateMutability: "view",
  type: "function",
  name: "get_meta_n_coins",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }, {
    name: "",
    type: "uint256"
  }],
  gas: 5201
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coins",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address[4]"
  }],
  gas: 9164
}, {
  stateMutability: "view",
  type: "function",
  name: "get_underlying_coins",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address[8]"
  }],
  gas: 21345
}, {
  stateMutability: "view",
  type: "function",
  name: "get_decimals",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[4]"
  }],
  gas: 20185
}, {
  stateMutability: "view",
  type: "function",
  name: "get_underlying_decimals",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[8]"
  }],
  gas: 19730
}, {
  stateMutability: "view",
  type: "function",
  name: "get_metapool_rates",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[2]"
  }],
  gas: 5281
}, {
  stateMutability: "view",
  type: "function",
  name: "get_balances",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[4]"
  }],
  gas: 20435
}, {
  stateMutability: "view",
  type: "function",
  name: "get_underlying_balances",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[8]"
  }],
  gas: 39733
}, {
  stateMutability: "view",
  type: "function",
  name: "get_A",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3135
}, {
  stateMutability: "view",
  type: "function",
  name: "get_fees",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }, {
    name: "",
    type: "uint256"
  }],
  gas: 5821
}, {
  stateMutability: "view",
  type: "function",
  name: "get_admin_balances",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[4]"
  }],
  gas: 13535
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coin_indices",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "int128"
  }, {
    name: "",
    type: "int128"
  }, {
    name: "",
    type: "bool"
  }],
  gas: 33407
}, {
  stateMutability: "view",
  type: "function",
  name: "get_gauge",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3089
}, {
  stateMutability: "view",
  type: "function",
  name: "get_implementation_address",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3119
}, {
  stateMutability: "view",
  type: "function",
  name: "is_meta",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "bool"
  }],
  gas: 3152
}, {
  stateMutability: "view",
  type: "function",
  name: "get_pool_asset_type",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 5450
}, {
  stateMutability: "view",
  type: "function",
  name: "get_fee_receiver",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 5480
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "deploy_plain_pool",
  inputs: [{
    name: "_name",
    type: "string"
  }, {
    name: "_symbol",
    type: "string"
  }, {
    name: "_coins",
    type: "address[4]"
  }, {
    name: "_A",
    type: "uint256"
  }, {
    name: "_fee",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "deploy_plain_pool",
  inputs: [{
    name: "_name",
    type: "string"
  }, {
    name: "_symbol",
    type: "string"
  }, {
    name: "_coins",
    type: "address[4]"
  }, {
    name: "_A",
    type: "uint256"
  }, {
    name: "_fee",
    type: "uint256"
  }, {
    name: "_asset_type",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "deploy_plain_pool",
  inputs: [{
    name: "_name",
    type: "string"
  }, {
    name: "_symbol",
    type: "string"
  }, {
    name: "_coins",
    type: "address[4]"
  }, {
    name: "_A",
    type: "uint256"
  }, {
    name: "_fee",
    type: "uint256"
  }, {
    name: "_asset_type",
    type: "uint256"
  }, {
    name: "_implementation_idx",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "deploy_metapool",
  inputs: [{
    name: "_base_pool",
    type: "address"
  }, {
    name: "_name",
    type: "string"
  }, {
    name: "_symbol",
    type: "string"
  }, {
    name: "_coin",
    type: "address"
  }, {
    name: "_A",
    type: "uint256"
  }, {
    name: "_fee",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "deploy_metapool",
  inputs: [{
    name: "_base_pool",
    type: "address"
  }, {
    name: "_name",
    type: "string"
  }, {
    name: "_symbol",
    type: "string"
  }, {
    name: "_coin",
    type: "address"
  }, {
    name: "_A",
    type: "uint256"
  }, {
    name: "_fee",
    type: "uint256"
  }, {
    name: "_implementation_idx",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "deploy_gauge",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 93079
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "add_base_pool",
  inputs: [{
    name: "_base_pool",
    type: "address"
  }, {
    name: "_fee_receiver",
    type: "address"
  }, {
    name: "_asset_type",
    type: "uint256"
  }, {
    name: "_implementations",
    type: "address[10]"
  }],
  outputs: [],
  gas: 1206132
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_metapool_implementations",
  inputs: [{
    name: "_base_pool",
    type: "address"
  }, {
    name: "_implementations",
    type: "address[10]"
  }],
  outputs: [],
  gas: 382072
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_plain_implementations",
  inputs: [{
    name: "_n_coins",
    type: "uint256"
  }, {
    name: "_implementations",
    type: "address[10]"
  }],
  outputs: [],
  gas: 379687
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_gauge_implementation",
  inputs: [{
    name: "_gauge_implementation",
    type: "address"
  }],
  outputs: [],
  gas: 38355
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "batch_set_pool_asset_type",
  inputs: [{
    name: "_pools",
    type: "address[32]"
  }, {
    name: "_asset_types",
    type: "uint256[32]"
  }],
  outputs: [],
  gas: 1139545
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "commit_transfer_ownership",
  inputs: [{
    name: "_addr",
    type: "address"
  }],
  outputs: [],
  gas: 38415
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "accept_transfer_ownership",
  inputs: [],
  outputs: [],
  gas: 58366
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_manager",
  inputs: [{
    name: "_manager",
    type: "address"
  }],
  outputs: [],
  gas: 40996
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_fee_receiver",
  inputs: [{
    name: "_base_pool",
    type: "address"
  }, {
    name: "_fee_receiver",
    type: "address"
  }],
  outputs: [],
  gas: 38770
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "convert_metapool_fees",
  inputs: [],
  outputs: [{
    name: "",
    type: "bool"
  }],
  gas: 12880
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "add_existing_metapools",
  inputs: [{
    name: "_pools",
    type: "address[10]"
  }],
  outputs: [{
    name: "",
    type: "bool"
  }],
  gas: 8610792
}, {
  stateMutability: "view",
  type: "function",
  name: "admin",
  inputs: [],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3438
}, {
  stateMutability: "view",
  type: "function",
  name: "future_admin",
  inputs: [],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3468
}, {
  stateMutability: "view",
  type: "function",
  name: "manager",
  inputs: [],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3498
}, {
  stateMutability: "view",
  type: "function",
  name: "pool_list",
  inputs: [{
    name: "arg0",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3573
}, {
  stateMutability: "view",
  type: "function",
  name: "pool_count",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3558
}, {
  stateMutability: "view",
  type: "function",
  name: "base_pool_list",
  inputs: [{
    name: "arg0",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3633
}, {
  stateMutability: "view",
  type: "function",
  name: "base_pool_count",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3618
}, {
  stateMutability: "view",
  type: "function",
  name: "base_pool_assets",
  inputs: [{
    name: "arg0",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "bool"
  }],
  gas: 3863
}, {
  stateMutability: "view",
  type: "function",
  name: "plain_implementations",
  inputs: [{
    name: "arg0",
    type: "uint256"
  }, {
    name: "arg1",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3838
}, {
  stateMutability: "view",
  type: "function",
  name: "gauge_implementation",
  inputs: [],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3708
}];
var CurveMetaFactory__factory = /*#__PURE__*/function () {
  function CurveMetaFactory__factory() {}
  CurveMetaFactory__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$6);
  };
  CurveMetaFactory__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$6, signerOrProvider);
  };
  return CurveMetaFactory__factory;
}();
CurveMetaFactory__factory.abi = _abi$6;

/* Autogenerated file. Do not edit manually. */
var _abi$7 = [{
  name: "PoolAdded",
  inputs: [{
    name: "pool",
    type: "address",
    indexed: true
  }, {
    name: "rate_method_id",
    type: "bytes",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "PoolRemoved",
  inputs: [{
    name: "pool",
    type: "address",
    indexed: true
  }],
  anonymous: false,
  type: "event"
}, {
  stateMutability: "nonpayable",
  type: "constructor",
  inputs: [{
    name: "_address_provider",
    type: "address"
  }, {
    name: "_gauge_controller",
    type: "address"
  }],
  outputs: []
}, {
  stateMutability: "view",
  type: "function",
  name: "find_pool_for_coins",
  inputs: [{
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }]
}, {
  stateMutability: "view",
  type: "function",
  name: "find_pool_for_coins",
  inputs: [{
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }, {
    name: "i",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }]
}, {
  stateMutability: "view",
  type: "function",
  name: "get_n_coins",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[2]"
  }],
  gas: 1521
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coins",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address[8]"
  }],
  gas: 12102
}, {
  stateMutability: "view",
  type: "function",
  name: "get_underlying_coins",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address[8]"
  }],
  gas: 12194
}, {
  stateMutability: "view",
  type: "function",
  name: "get_decimals",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[8]"
  }],
  gas: 7874
}, {
  stateMutability: "view",
  type: "function",
  name: "get_underlying_decimals",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[8]"
  }],
  gas: 7966
}, {
  stateMutability: "view",
  type: "function",
  name: "get_rates",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[8]"
  }],
  gas: 36992
}, {
  stateMutability: "view",
  type: "function",
  name: "get_gauges",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address[10]"
  }, {
    name: "",
    type: "int128[10]"
  }],
  gas: 20157
}, {
  stateMutability: "view",
  type: "function",
  name: "get_balances",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[8]"
  }],
  gas: 16583
}, {
  stateMutability: "view",
  type: "function",
  name: "get_underlying_balances",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[8]"
  }],
  gas: 162842
}, {
  stateMutability: "view",
  type: "function",
  name: "get_virtual_price_from_lp_token",
  inputs: [{
    name: "_token",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 1927
}, {
  stateMutability: "view",
  type: "function",
  name: "get_A",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 1045
}, {
  stateMutability: "view",
  type: "function",
  name: "get_parameters",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "A",
    type: "uint256"
  }, {
    name: "future_A",
    type: "uint256"
  }, {
    name: "fee",
    type: "uint256"
  }, {
    name: "admin_fee",
    type: "uint256"
  }, {
    name: "future_fee",
    type: "uint256"
  }, {
    name: "future_admin_fee",
    type: "uint256"
  }, {
    name: "future_owner",
    type: "address"
  }, {
    name: "initial_A",
    type: "uint256"
  }, {
    name: "initial_A_time",
    type: "uint256"
  }, {
    name: "future_A_time",
    type: "uint256"
  }],
  gas: 6305
}, {
  stateMutability: "view",
  type: "function",
  name: "get_fees",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[2]"
  }],
  gas: 1450
}, {
  stateMutability: "view",
  type: "function",
  name: "get_admin_balances",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[8]"
  }],
  gas: 36454
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coin_indices",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "int128"
  }, {
    name: "",
    type: "int128"
  }, {
    name: "",
    type: "bool"
  }],
  gas: 27131
}, {
  stateMutability: "view",
  type: "function",
  name: "estimate_gas_used",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 32004
}, {
  stateMutability: "view",
  type: "function",
  name: "is_meta",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "bool"
  }],
  gas: 1900
}, {
  stateMutability: "view",
  type: "function",
  name: "get_pool_name",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "string"
  }],
  gas: 8323
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coin_swap_count",
  inputs: [{
    name: "_coin",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 1951
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coin_swap_complement",
  inputs: [{
    name: "_coin",
    type: "address"
  }, {
    name: "_index",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 2090
}, {
  stateMutability: "view",
  type: "function",
  name: "get_pool_asset_type",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 2011
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "add_pool",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_n_coins",
    type: "uint256"
  }, {
    name: "_lp_token",
    type: "address"
  }, {
    name: "_rate_info",
    type: "bytes32"
  }, {
    name: "_decimals",
    type: "uint256"
  }, {
    name: "_underlying_decimals",
    type: "uint256"
  }, {
    name: "_has_initial_A",
    type: "bool"
  }, {
    name: "_is_v1",
    type: "bool"
  }, {
    name: "_name",
    type: "string"
  }],
  outputs: [],
  gas: 61485845
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "add_pool_without_underlying",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_n_coins",
    type: "uint256"
  }, {
    name: "_lp_token",
    type: "address"
  }, {
    name: "_rate_info",
    type: "bytes32"
  }, {
    name: "_decimals",
    type: "uint256"
  }, {
    name: "_use_rates",
    type: "uint256"
  }, {
    name: "_has_initial_A",
    type: "bool"
  }, {
    name: "_is_v1",
    type: "bool"
  }, {
    name: "_name",
    type: "string"
  }],
  outputs: [],
  gas: 31306062
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "add_metapool",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_n_coins",
    type: "uint256"
  }, {
    name: "_lp_token",
    type: "address"
  }, {
    name: "_decimals",
    type: "uint256"
  }, {
    name: "_name",
    type: "string"
  }],
  outputs: []
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "add_metapool",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_n_coins",
    type: "uint256"
  }, {
    name: "_lp_token",
    type: "address"
  }, {
    name: "_decimals",
    type: "uint256"
  }, {
    name: "_name",
    type: "string"
  }, {
    name: "_base_pool",
    type: "address"
  }],
  outputs: []
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "remove_pool",
  inputs: [{
    name: "_pool",
    type: "address"
  }],
  outputs: [],
  gas: 779731418758
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_pool_gas_estimates",
  inputs: [{
    name: "_addr",
    type: "address[5]"
  }, {
    name: "_amount",
    type: "uint256[2][5]"
  }],
  outputs: [],
  gas: 390460
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_coin_gas_estimates",
  inputs: [{
    name: "_addr",
    type: "address[10]"
  }, {
    name: "_amount",
    type: "uint256[10]"
  }],
  outputs: [],
  gas: 392047
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_gas_estimate_contract",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_estimator",
    type: "address"
  }],
  outputs: [],
  gas: 72629
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_liquidity_gauges",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_liquidity_gauges",
    type: "address[10]"
  }],
  outputs: [],
  gas: 400675
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "set_pool_asset_type",
  inputs: [{
    name: "_pool",
    type: "address"
  }, {
    name: "_asset_type",
    type: "uint256"
  }],
  outputs: [],
  gas: 72667
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "batch_set_pool_asset_type",
  inputs: [{
    name: "_pools",
    type: "address[32]"
  }, {
    name: "_asset_types",
    type: "uint256[32]"
  }],
  outputs: [],
  gas: 1173447
}, {
  stateMutability: "view",
  type: "function",
  name: "address_provider",
  inputs: [],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 2048
}, {
  stateMutability: "view",
  type: "function",
  name: "gauge_controller",
  inputs: [],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 2078
}, {
  stateMutability: "view",
  type: "function",
  name: "pool_list",
  inputs: [{
    name: "arg0",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 2217
}, {
  stateMutability: "view",
  type: "function",
  name: "pool_count",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 2138
}, {
  stateMutability: "view",
  type: "function",
  name: "coin_count",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 2168
}, {
  stateMutability: "view",
  type: "function",
  name: "get_coin",
  inputs: [{
    name: "arg0",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 2307
}, {
  stateMutability: "view",
  type: "function",
  name: "get_pool_from_lp_token",
  inputs: [{
    name: "arg0",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 2443
}, {
  stateMutability: "view",
  type: "function",
  name: "get_lp_token",
  inputs: [{
    name: "arg0",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 2473
}, {
  stateMutability: "view",
  type: "function",
  name: "last_updated",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 2288
}];
var CurveRegistry__factory = /*#__PURE__*/function () {
  function CurveRegistry__factory() {}
  CurveRegistry__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$7);
  };
  CurveRegistry__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$7, signerOrProvider);
  };
  return CurveRegistry__factory;
}();
CurveRegistry__factory.abi = _abi$7;

/* Autogenerated file. Do not edit manually. */
var _abi$8 = [{
  name: "Transfer",
  inputs: [{
    type: "address",
    name: "sender",
    indexed: true
  }, {
    type: "address",
    name: "receiver",
    indexed: true
  }, {
    type: "uint256",
    name: "value",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "Approval",
  inputs: [{
    type: "address",
    name: "owner",
    indexed: true
  }, {
    type: "address",
    name: "spender",
    indexed: true
  }, {
    type: "uint256",
    name: "value",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "TokenExchange",
  inputs: [{
    type: "address",
    name: "buyer",
    indexed: true
  }, {
    type: "int128",
    name: "sold_id",
    indexed: false
  }, {
    type: "uint256",
    name: "tokens_sold",
    indexed: false
  }, {
    type: "int128",
    name: "bought_id",
    indexed: false
  }, {
    type: "uint256",
    name: "tokens_bought",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "TokenExchangeUnderlying",
  inputs: [{
    type: "address",
    name: "buyer",
    indexed: true
  }, {
    type: "int128",
    name: "sold_id",
    indexed: false
  }, {
    type: "uint256",
    name: "tokens_sold",
    indexed: false
  }, {
    type: "int128",
    name: "bought_id",
    indexed: false
  }, {
    type: "uint256",
    name: "tokens_bought",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "AddLiquidity",
  inputs: [{
    type: "address",
    name: "provider",
    indexed: true
  }, {
    type: "uint256[2]",
    name: "token_amounts",
    indexed: false
  }, {
    type: "uint256[2]",
    name: "fees",
    indexed: false
  }, {
    type: "uint256",
    name: "invariant",
    indexed: false
  }, {
    type: "uint256",
    name: "token_supply",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RemoveLiquidity",
  inputs: [{
    type: "address",
    name: "provider",
    indexed: true
  }, {
    type: "uint256[2]",
    name: "token_amounts",
    indexed: false
  }, {
    type: "uint256[2]",
    name: "fees",
    indexed: false
  }, {
    type: "uint256",
    name: "token_supply",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RemoveLiquidityOne",
  inputs: [{
    type: "address",
    name: "provider",
    indexed: true
  }, {
    type: "uint256",
    name: "token_amount",
    indexed: false
  }, {
    type: "uint256",
    name: "coin_amount",
    indexed: false
  }, {
    type: "uint256",
    name: "token_supply",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RemoveLiquidityImbalance",
  inputs: [{
    type: "address",
    name: "provider",
    indexed: true
  }, {
    type: "uint256[2]",
    name: "token_amounts",
    indexed: false
  }, {
    type: "uint256[2]",
    name: "fees",
    indexed: false
  }, {
    type: "uint256",
    name: "invariant",
    indexed: false
  }, {
    type: "uint256",
    name: "token_supply",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "CommitNewAdmin",
  inputs: [{
    type: "uint256",
    name: "deadline",
    indexed: true
  }, {
    type: "address",
    name: "admin",
    indexed: true
  }],
  anonymous: false,
  type: "event"
}, {
  name: "NewAdmin",
  inputs: [{
    type: "address",
    name: "admin",
    indexed: true
  }],
  anonymous: false,
  type: "event"
}, {
  name: "CommitNewFee",
  inputs: [{
    type: "uint256",
    name: "deadline",
    indexed: true
  }, {
    type: "uint256",
    name: "fee",
    indexed: false
  }, {
    type: "uint256",
    name: "admin_fee",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "NewFee",
  inputs: [{
    type: "uint256",
    name: "fee",
    indexed: false
  }, {
    type: "uint256",
    name: "admin_fee",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RampA",
  inputs: [{
    type: "uint256",
    name: "old_A",
    indexed: false
  }, {
    type: "uint256",
    name: "new_A",
    indexed: false
  }, {
    type: "uint256",
    name: "initial_time",
    indexed: false
  }, {
    type: "uint256",
    name: "future_time",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "StopRampA",
  inputs: [{
    type: "uint256",
    name: "A",
    indexed: false
  }, {
    type: "uint256",
    name: "t",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  name: "initialize",
  outputs: [],
  inputs: [{
    type: "string",
    name: "_name"
  }, {
    type: "string",
    name: "_symbol"
  }, {
    type: "address",
    name: "_coin"
  }, {
    type: "uint256",
    name: "_decimals"
  }, {
    type: "uint256",
    name: "_A"
  }, {
    type: "uint256",
    name: "_fee"
  }, {
    type: "address",
    name: "_admin"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 470049
}, {
  name: "decimals",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 291
}, {
  name: "transfer",
  outputs: [{
    type: "bool",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_to"
  }, {
    type: "uint256",
    name: "_value"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 75402
}, {
  name: "transferFrom",
  outputs: [{
    type: "bool",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_from"
  }, {
    type: "address",
    name: "_to"
  }, {
    type: "uint256",
    name: "_value"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 112037
}, {
  name: "approve",
  outputs: [{
    type: "bool",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_spender"
  }, {
    type: "uint256",
    name: "_value"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 37854
}, {
  name: "get_previous_balances",
  outputs: [{
    type: "uint256[2]",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2254
}, {
  name: "get_balances",
  outputs: [{
    type: "uint256[2]",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2284
}, {
  name: "get_twap_balances",
  outputs: [{
    type: "uint256[2]",
    name: ""
  }],
  inputs: [{
    type: "uint256[2]",
    name: "_first_balances"
  }, {
    type: "uint256[2]",
    name: "_last_balances"
  }, {
    type: "uint256",
    name: "_time_elapsed"
  }],
  stateMutability: "view",
  type: "function",
  gas: 1522
}, {
  name: "get_price_cumulative_last",
  outputs: [{
    type: "uint256[2]",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2344
}, {
  name: "admin_fee",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 621
}, {
  name: "A",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 5859
}, {
  name: "A_precise",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 5821
}, {
  name: "get_virtual_price",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 1011891
}, {
  name: "calc_token_amount",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256[2]",
    name: "_amounts"
  }, {
    type: "bool",
    name: "_is_deposit"
  }],
  stateMutability: "view",
  type: "function"
}, {
  name: "calc_token_amount",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256[2]",
    name: "_amounts"
  }, {
    type: "bool",
    name: "_is_deposit"
  }, {
    type: "bool",
    name: "_previous"
  }],
  stateMutability: "view",
  type: "function"
}, {
  name: "add_liquidity",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256[2]",
    name: "_amounts"
  }, {
    type: "uint256",
    name: "_min_mint_amount"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "add_liquidity",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256[2]",
    name: "_amounts"
  }, {
    type: "uint256",
    name: "_min_mint_amount"
  }, {
    type: "address",
    name: "_receiver"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "get_dy",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "int128",
    name: "i"
  }, {
    type: "int128",
    name: "j"
  }, {
    type: "uint256",
    name: "dx"
  }],
  stateMutability: "view",
  type: "function"
}, {
  name: "get_dy",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "int128",
    name: "i"
  }, {
    type: "int128",
    name: "j"
  }, {
    type: "uint256",
    name: "dx"
  }, {
    type: "uint256[2]",
    name: "_balances"
  }],
  stateMutability: "view",
  type: "function"
}, {
  name: "get_dy_underlying",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "int128",
    name: "i"
  }, {
    type: "int128",
    name: "j"
  }, {
    type: "uint256",
    name: "dx"
  }],
  stateMutability: "view",
  type: "function"
}, {
  name: "get_dy_underlying",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "int128",
    name: "i"
  }, {
    type: "int128",
    name: "j"
  }, {
    type: "uint256",
    name: "dx"
  }, {
    type: "uint256[2]",
    name: "_balances"
  }],
  stateMutability: "view",
  type: "function"
}, {
  name: "exchange",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "int128",
    name: "i"
  }, {
    type: "int128",
    name: "j"
  }, {
    type: "uint256",
    name: "dx"
  }, {
    type: "uint256",
    name: "min_dy"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "exchange",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "int128",
    name: "i"
  }, {
    type: "int128",
    name: "j"
  }, {
    type: "uint256",
    name: "dx"
  }, {
    type: "uint256",
    name: "min_dy"
  }, {
    type: "address",
    name: "_receiver"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "exchange_underlying",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "int128",
    name: "i"
  }, {
    type: "int128",
    name: "j"
  }, {
    type: "uint256",
    name: "dx"
  }, {
    type: "uint256",
    name: "min_dy"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "exchange_underlying",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "int128",
    name: "i"
  }, {
    type: "int128",
    name: "j"
  }, {
    type: "uint256",
    name: "dx"
  }, {
    type: "uint256",
    name: "min_dy"
  }, {
    type: "address",
    name: "_receiver"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "remove_liquidity",
  outputs: [{
    type: "uint256[2]",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "_burn_amount"
  }, {
    type: "uint256[2]",
    name: "_min_amounts"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "remove_liquidity",
  outputs: [{
    type: "uint256[2]",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "_burn_amount"
  }, {
    type: "uint256[2]",
    name: "_min_amounts"
  }, {
    type: "address",
    name: "_receiver"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "remove_liquidity_imbalance",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256[2]",
    name: "_amounts"
  }, {
    type: "uint256",
    name: "_max_burn_amount"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "remove_liquidity_imbalance",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256[2]",
    name: "_amounts"
  }, {
    type: "uint256",
    name: "_max_burn_amount"
  }, {
    type: "address",
    name: "_receiver"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "calc_withdraw_one_coin",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "_burn_amount"
  }, {
    type: "int128",
    name: "i"
  }],
  stateMutability: "view",
  type: "function"
}, {
  name: "calc_withdraw_one_coin",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "_burn_amount"
  }, {
    type: "int128",
    name: "i"
  }, {
    type: "bool",
    name: "_previous"
  }],
  stateMutability: "view",
  type: "function"
}, {
  name: "remove_liquidity_one_coin",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "_burn_amount"
  }, {
    type: "int128",
    name: "i"
  }, {
    type: "uint256",
    name: "_min_received"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "remove_liquidity_one_coin",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "_burn_amount"
  }, {
    type: "int128",
    name: "i"
  }, {
    type: "uint256",
    name: "_min_received"
  }, {
    type: "address",
    name: "_receiver"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "ramp_A",
  outputs: [],
  inputs: [{
    type: "uint256",
    name: "_future_A"
  }, {
    type: "uint256",
    name: "_future_time"
  }],
  stateMutability: "nonpayable",
  type: "function",
  gas: 152464
}, {
  name: "stop_ramp_A",
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "function",
  gas: 149225
}, {
  name: "admin_balances",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "i"
  }],
  stateMutability: "view",
  type: "function",
  gas: 3601
}, {
  name: "withdraw_admin_fees",
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "function",
  gas: 11347
}, {
  name: "admin",
  outputs: [{
    type: "address",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2141
}, {
  name: "coins",
  outputs: [{
    type: "address",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "arg0"
  }],
  stateMutability: "view",
  type: "function",
  gas: 2280
}, {
  name: "balances",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "uint256",
    name: "arg0"
  }],
  stateMutability: "view",
  type: "function",
  gas: 2310
}, {
  name: "fee",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2231
}, {
  name: "block_timestamp_last",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2261
}, {
  name: "initial_A",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2291
}, {
  name: "future_A",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2321
}, {
  name: "initial_A_time",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2351
}, {
  name: "future_A_time",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2381
}, {
  name: "name",
  outputs: [{
    type: "string",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 8813
}, {
  name: "symbol",
  outputs: [{
    type: "string",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 7866
}, {
  name: "balanceOf",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "arg0"
  }],
  stateMutability: "view",
  type: "function",
  gas: 2686
}, {
  name: "allowance",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "arg0"
  }, {
    type: "address",
    name: "arg1"
  }],
  stateMutability: "view",
  type: "function",
  gas: 2931
}, {
  name: "totalSupply",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [],
  stateMutability: "view",
  type: "function",
  gas: 2531
}];
var CurveMetaPool__factory = /*#__PURE__*/function () {
  function CurveMetaPool__factory() {}
  CurveMetaPool__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$8);
  };
  CurveMetaPool__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$8, signerOrProvider);
  };
  return CurveMetaPool__factory;
}();
CurveMetaPool__factory.abi = _abi$8;

/* Autogenerated file. Do not edit manually. */
var _abi$9 = [{
  name: "Transfer",
  inputs: [{
    name: "sender",
    type: "address",
    indexed: true
  }, {
    name: "receiver",
    type: "address",
    indexed: true
  }, {
    name: "value",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "Approval",
  inputs: [{
    name: "owner",
    type: "address",
    indexed: true
  }, {
    name: "spender",
    type: "address",
    indexed: true
  }, {
    name: "value",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "TokenExchange",
  inputs: [{
    name: "buyer",
    type: "address",
    indexed: true
  }, {
    name: "sold_id",
    type: "int128",
    indexed: false
  }, {
    name: "tokens_sold",
    type: "uint256",
    indexed: false
  }, {
    name: "bought_id",
    type: "int128",
    indexed: false
  }, {
    name: "tokens_bought",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "AddLiquidity",
  inputs: [{
    name: "provider",
    type: "address",
    indexed: true
  }, {
    name: "token_amounts",
    type: "uint256[2]",
    indexed: false
  }, {
    name: "fees",
    type: "uint256[2]",
    indexed: false
  }, {
    name: "invariant",
    type: "uint256",
    indexed: false
  }, {
    name: "token_supply",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RemoveLiquidity",
  inputs: [{
    name: "provider",
    type: "address",
    indexed: true
  }, {
    name: "token_amounts",
    type: "uint256[2]",
    indexed: false
  }, {
    name: "fees",
    type: "uint256[2]",
    indexed: false
  }, {
    name: "token_supply",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RemoveLiquidityOne",
  inputs: [{
    name: "provider",
    type: "address",
    indexed: true
  }, {
    name: "token_amount",
    type: "uint256",
    indexed: false
  }, {
    name: "coin_amount",
    type: "uint256",
    indexed: false
  }, {
    name: "token_supply",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RemoveLiquidityImbalance",
  inputs: [{
    name: "provider",
    type: "address",
    indexed: true
  }, {
    name: "token_amounts",
    type: "uint256[2]",
    indexed: false
  }, {
    name: "fees",
    type: "uint256[2]",
    indexed: false
  }, {
    name: "invariant",
    type: "uint256",
    indexed: false
  }, {
    name: "token_supply",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "RampA",
  inputs: [{
    name: "old_A",
    type: "uint256",
    indexed: false
  }, {
    name: "new_A",
    type: "uint256",
    indexed: false
  }, {
    name: "initial_time",
    type: "uint256",
    indexed: false
  }, {
    name: "future_time",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  name: "StopRampA",
  inputs: [{
    name: "A",
    type: "uint256",
    indexed: false
  }, {
    name: "t",
    type: "uint256",
    indexed: false
  }],
  anonymous: false,
  type: "event"
}, {
  stateMutability: "nonpayable",
  type: "constructor",
  inputs: [],
  outputs: []
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "initialize",
  inputs: [{
    name: "_name",
    type: "string"
  }, {
    name: "_symbol",
    type: "string"
  }, {
    name: "_coins",
    type: "address[4]"
  }, {
    name: "_rate_multipliers",
    type: "uint256[4]"
  }, {
    name: "_A",
    type: "uint256"
  }, {
    name: "_fee",
    type: "uint256"
  }],
  outputs: [],
  gas: 471502
}, {
  stateMutability: "view",
  type: "function",
  name: "decimals",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 318
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "transfer",
  inputs: [{
    name: "_to",
    type: "address"
  }, {
    name: "_value",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "bool"
  }],
  gas: 77977
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "transferFrom",
  inputs: [{
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }, {
    name: "_value",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "bool"
  }],
  gas: 115912
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "approve",
  inputs: [{
    name: "_spender",
    type: "address"
  }, {
    name: "_value",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "bool"
  }],
  gas: 37851
}, {
  stateMutability: "view",
  type: "function",
  name: "get_balances",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256[2]"
  }],
  gas: 4707
}, {
  stateMutability: "view",
  type: "function",
  name: "admin_fee",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 468
}, {
  stateMutability: "view",
  type: "function",
  name: "A",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 10764
}, {
  stateMutability: "view",
  type: "function",
  name: "A_precise",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 10726
}, {
  stateMutability: "view",
  type: "function",
  name: "get_virtual_price",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 848656
}, {
  stateMutability: "view",
  type: "function",
  name: "calc_token_amount",
  inputs: [{
    name: "_amounts",
    type: "uint256[2]"
  }, {
    name: "_is_deposit",
    type: "bool"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3336308
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "add_liquidity",
  inputs: [{
    name: "_amounts",
    type: "uint256[2]"
  }, {
    name: "_min_mint_amount",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "add_liquidity",
  inputs: [{
    name: "_amounts",
    type: "uint256[2]"
  }, {
    name: "_min_mint_amount",
    type: "uint256"
  }, {
    name: "_receiver",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }]
}, {
  stateMutability: "view",
  type: "function",
  name: "get_dy",
  inputs: [{
    name: "i",
    type: "int128"
  }, {
    name: "j",
    type: "int128"
  }, {
    name: "dx",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 2117591
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "exchange",
  inputs: [{
    name: "i",
    type: "int128"
  }, {
    name: "j",
    type: "int128"
  }, {
    name: "_dx",
    type: "uint256"
  }, {
    name: "_min_dy",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "exchange",
  inputs: [{
    name: "i",
    type: "int128"
  }, {
    name: "j",
    type: "int128"
  }, {
    name: "_dx",
    type: "uint256"
  }, {
    name: "_min_dy",
    type: "uint256"
  }, {
    name: "_receiver",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "remove_liquidity",
  inputs: [{
    name: "_burn_amount",
    type: "uint256"
  }, {
    name: "_min_amounts",
    type: "uint256[2]"
  }],
  outputs: [{
    name: "",
    type: "uint256[2]"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "remove_liquidity",
  inputs: [{
    name: "_burn_amount",
    type: "uint256"
  }, {
    name: "_min_amounts",
    type: "uint256[2]"
  }, {
    name: "_receiver",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256[2]"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "remove_liquidity_imbalance",
  inputs: [{
    name: "_amounts",
    type: "uint256[2]"
  }, {
    name: "_max_burn_amount",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "remove_liquidity_imbalance",
  inputs: [{
    name: "_amounts",
    type: "uint256[2]"
  }, {
    name: "_max_burn_amount",
    type: "uint256"
  }, {
    name: "_receiver",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }]
}, {
  stateMutability: "view",
  type: "function",
  name: "calc_withdraw_one_coin",
  inputs: [{
    name: "_burn_amount",
    type: "uint256"
  }, {
    name: "i",
    type: "int128"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 1100
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "remove_liquidity_one_coin",
  inputs: [{
    name: "_burn_amount",
    type: "uint256"
  }, {
    name: "i",
    type: "int128"
  }, {
    name: "_min_received",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "remove_liquidity_one_coin",
  inputs: [{
    name: "_burn_amount",
    type: "uint256"
  }, {
    name: "i",
    type: "int128"
  }, {
    name: "_min_received",
    type: "uint256"
  }, {
    name: "_receiver",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }]
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "ramp_A",
  inputs: [{
    name: "_future_A",
    type: "uint256"
  }, {
    name: "_future_time",
    type: "uint256"
  }],
  outputs: [],
  gas: 162101
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "stop_ramp_A",
  inputs: [],
  outputs: [],
  gas: 157565
}, {
  stateMutability: "view",
  type: "function",
  name: "admin_balances",
  inputs: [{
    name: "i",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 7740
}, {
  stateMutability: "nonpayable",
  type: "function",
  name: "withdraw_admin_fees",
  inputs: [],
  outputs: [],
  gas: 33182
}, {
  stateMutability: "view",
  type: "function",
  name: "coins",
  inputs: [{
    name: "arg0",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "address"
  }],
  gas: 3093
}, {
  stateMutability: "view",
  type: "function",
  name: "balances",
  inputs: [{
    name: "arg0",
    type: "uint256"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3123
}, {
  stateMutability: "view",
  type: "function",
  name: "fee",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3108
}, {
  stateMutability: "view",
  type: "function",
  name: "initial_A",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3138
}, {
  stateMutability: "view",
  type: "function",
  name: "future_A",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3168
}, {
  stateMutability: "view",
  type: "function",
  name: "initial_A_time",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3198
}, {
  stateMutability: "view",
  type: "function",
  name: "future_A_time",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3228
}, {
  stateMutability: "view",
  type: "function",
  name: "name",
  inputs: [],
  outputs: [{
    name: "",
    type: "string"
  }],
  gas: 13488
}, {
  stateMutability: "view",
  type: "function",
  name: "symbol",
  inputs: [],
  outputs: [{
    name: "",
    type: "string"
  }],
  gas: 11241
}, {
  stateMutability: "view",
  type: "function",
  name: "balanceOf",
  inputs: [{
    name: "arg0",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3533
}, {
  stateMutability: "view",
  type: "function",
  name: "allowance",
  inputs: [{
    name: "arg0",
    type: "address"
  }, {
    name: "arg1",
    type: "address"
  }],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3778
}, {
  stateMutability: "view",
  type: "function",
  name: "totalSupply",
  inputs: [],
  outputs: [{
    name: "",
    type: "uint256"
  }],
  gas: 3378
}];
var CurvePlainPool__factory = /*#__PURE__*/function () {
  function CurvePlainPool__factory() {}
  CurvePlainPool__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$9);
  };
  CurvePlainPool__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$9, signerOrProvider);
  };
  return CurvePlainPool__factory;
}();
CurvePlainPool__factory.abi = _abi$9;

/* Autogenerated file. Do not edit manually. */
var _abi$a = [{
  outputs: [],
  inputs: [],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  name: "add_liquidity",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_pool"
  }, {
    type: "uint256[4]",
    name: "_deposit_amounts"
  }, {
    type: "uint256",
    name: "_min_mint_amount"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "add_liquidity",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_pool"
  }, {
    type: "uint256[4]",
    name: "_deposit_amounts"
  }, {
    type: "uint256",
    name: "_min_mint_amount"
  }, {
    type: "address",
    name: "_receiver"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "remove_liquidity",
  outputs: [{
    type: "uint256[4]",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_pool"
  }, {
    type: "uint256",
    name: "_burn_amount"
  }, {
    type: "uint256[4]",
    name: "_min_amounts"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "remove_liquidity",
  outputs: [{
    type: "uint256[4]",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_pool"
  }, {
    type: "uint256",
    name: "_burn_amount"
  }, {
    type: "uint256[4]",
    name: "_min_amounts"
  }, {
    type: "address",
    name: "_receiver"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "remove_liquidity_one_coin",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_pool"
  }, {
    type: "uint256",
    name: "_burn_amount"
  }, {
    type: "int128",
    name: "i"
  }, {
    type: "uint256",
    name: "_min_amount"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "remove_liquidity_one_coin",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_pool"
  }, {
    type: "uint256",
    name: "_burn_amount"
  }, {
    type: "int128",
    name: "i"
  }, {
    type: "uint256",
    name: "_min_amount"
  }, {
    type: "address",
    name: "_receiver"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "remove_liquidity_imbalance",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_pool"
  }, {
    type: "uint256[4]",
    name: "_amounts"
  }, {
    type: "uint256",
    name: "_max_burn_amount"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "remove_liquidity_imbalance",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_pool"
  }, {
    type: "uint256[4]",
    name: "_amounts"
  }, {
    type: "uint256",
    name: "_max_burn_amount"
  }, {
    type: "address",
    name: "_receiver"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  name: "calc_withdraw_one_coin",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_pool"
  }, {
    type: "uint256",
    name: "_token_amount"
  }, {
    type: "int128",
    name: "i"
  }],
  stateMutability: "view",
  type: "function",
  gas: 1650
}, {
  name: "calc_token_amount",
  outputs: [{
    type: "uint256",
    name: ""
  }],
  inputs: [{
    type: "address",
    name: "_pool"
  }, {
    type: "uint256[4]",
    name: "_amounts"
  }, {
    type: "bool",
    name: "_is_deposit"
  }],
  stateMutability: "view",
  type: "function",
  gas: 2717
}];
var CurveZap__factory = /*#__PURE__*/function () {
  function CurveZap__factory() {}
  CurveZap__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$a);
  };
  CurveZap__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$a, signerOrProvider);
  };
  return CurveZap__factory;
}();
CurveZap__factory.abi = _abi$a;

/* Autogenerated file. Do not edit manually. */
var _abi$b = [{
  constant: true,
  inputs: [],
  name: "name",
  outputs: [{
    name: "",
    type: "string"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    name: "_spender",
    type: "address"
  }, {
    name: "_value",
    type: "uint256"
  }],
  name: "approve",
  outputs: [{
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "totalSupply",
  outputs: [{
    name: "",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }, {
    name: "_value",
    type: "uint256"
  }],
  name: "transferFrom",
  outputs: [{
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "decimals",
  outputs: [{
    name: "",
    type: "uint8"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [{
    name: "_owner",
    type: "address"
  }],
  name: "balanceOf",
  outputs: [{
    name: "balance",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "symbol",
  outputs: [{
    name: "",
    type: "string"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    name: "_to",
    type: "address"
  }, {
    name: "_value",
    type: "uint256"
  }],
  name: "transfer",
  outputs: [{
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [{
    name: "_owner",
    type: "address"
  }, {
    name: "_spender",
    type: "address"
  }],
  name: "allowance",
  outputs: [{
    name: "",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  payable: true,
  stateMutability: "payable",
  type: "fallback"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: "owner",
    type: "address"
  }, {
    indexed: true,
    name: "spender",
    type: "address"
  }, {
    indexed: false,
    name: "value",
    type: "uint256"
  }],
  name: "Approval",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: "from",
    type: "address"
  }, {
    indexed: true,
    name: "to",
    type: "address"
  }, {
    indexed: false,
    name: "value",
    type: "uint256"
  }],
  name: "Transfer",
  type: "event"
}];
var ERC20__factory = /*#__PURE__*/function () {
  function ERC20__factory() {}
  ERC20__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$b);
  };
  ERC20__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$b, signerOrProvider);
  };
  return ERC20__factory;
}();
ERC20__factory.abi = _abi$b;

/* Autogenerated file. Do not edit manually. */
var _abi$c = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "Approval",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "Transfer",
  type: "event"
}, {
  inputs: [],
  name: "DOMAIN_SEPARATOR",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }],
  name: "allowance",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "approve",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOf",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "decimals",
  outputs: [{
    internalType: "uint8",
    name: "",
    type: "uint8"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "subtractedValue",
    type: "uint256"
  }],
  name: "decreaseAllowance",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "addedValue",
    type: "uint256"
  }],
  name: "increaseAllowance",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "name",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }],
  name: "nonces",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "deadline",
    type: "uint256"
  }, {
    internalType: "uint8",
    name: "v",
    type: "uint8"
  }, {
    internalType: "bytes32",
    name: "r",
    type: "bytes32"
  }, {
    internalType: "bytes32",
    name: "s",
    type: "bytes32"
  }],
  name: "permit",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "symbol",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalSupply",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "recipient",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "transfer",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "sender",
    type: "address"
  }, {
    internalType: "address",
    name: "recipient",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "transferFrom",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}];
var ERC20Permit__factory = /*#__PURE__*/function () {
  function ERC20Permit__factory() {}
  ERC20Permit__factory.createInterface = function createInterface() {
    return new ethers.utils.Interface(_abi$c);
  };
  ERC20Permit__factory.connect = function connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi$c, signerOrProvider);
  };
  return ERC20Permit__factory;
}();
ERC20Permit__factory.abi = _abi$c;

var ERC20Token = /*#__PURE__*/function (_Token) {
  _inheritsLoose(ERC20Token, _Token);
  function ERC20Token() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Token.call.apply(_Token, [this].concat(args)) || this;
    _this.contract = void 0;
    return _this;
  }
  var _proto = ERC20Token.prototype;
  //////////////////////// Setup ////////////////////////
  // @fixme this throws the following error:
  // src/lib/tokens.ts(57,32): semantic error TS2345: Argument of type 'BeanstalkSDK' is not assignable to parameter of type 'never'.
  //
  // constructor(...args: ConstructorParameters<typeof Token>) {
  //   super(...args);
  //   if (!this.address) throw new Error('Address is required for ERC20 token instancess');
  // } 
  //////////////////////// Contract Instance ////////////////////////
  _proto.getContract = function getContract() {
    if (!this.contract) {
      this.contract = ERC20Permit__factory.connect(this.address, Token.sdk.providerOrSigner);
    }
    return this.contract;
  }
  //////////////////////// On-chain Configuration ////////////////////////
  /** @fixme */;
  _proto.getName =
  /*#__PURE__*/
  function () {
    var _getName = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.name) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", this.name);
            case 2:
              _context.next = 4;
              return this.getContract().name();
            case 4:
              this.name = _context.sent;
              return _context.abrupt("return", this.name);
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function getName() {
      return _getName.apply(this, arguments);
    }
    return getName;
  }() /** @fixme */;
  ERC20Token.getName = function getName(tokenAddress) {
    var tok = ERC20__factory.connect(tokenAddress, this.sdk.provider);
    return tok.name();
  }
  /**
   * Get the on-chain `.decimals()` for an ERC-20 token.
   * @todo make this work with ERC-1155 (does it already?)
   * @note stored onchain in hex format, need to decode.
   */;
  ERC20Token.getDecimals = function getDecimals(tokenAddress) {
    var tok = ERC20__factory.connect(tokenAddress, this.sdk.provider);
    return tok.decimals();
  }
  //////////////////////// Contract Method Extensions ////////////////////////
  ;
  _proto.getBalance = function getBalance(account) {
    var _this2 = this;
    return this.getContract().balanceOf(account).then(function (result) {
      return BeanNumber.fromBigNumber(result, _this2.decimals);
    })["catch"](function (err) {
      console.error("[ERC20Token] " + _this2.symbol + " failed to call balanceOf(" + account + ")", err);
      throw err;
    });
  }
  // eslint-disable-next-line class-methods-use-this
  ;
  _proto.getAllowance = function getAllowance(account, spender) {
    return this.getContract().allowance(account, spender).then(bigNumberResult);
  };
  _proto.getTotalSupply = function getTotalSupply() {
    return this.getContract().totalSupply().then(bigNumberResult);
  };
  _proto.approve = function approve(spender, value) {
    return this.getContract().approve(spender, value.toString());
  };
  return ERC20Token;
}(Token);

var NativeToken = /*#__PURE__*/function (_Token) {
  _inheritsLoose(NativeToken, _Token);
  function NativeToken() {
    return _Token.apply(this, arguments) || this;
  }
  var _proto = NativeToken.prototype;
  // eslint-disable-next-line class-methods-use-this
  _proto.getContract = function getContract() {
    return null;
  };
  _proto.getBalance = function getBalance(account) {
    var _this = this;
    // console.debug(`[NativeToken] ${this.symbol} (${this.chainId} / ${this.address}) -> getBalance(${account})`);
    return Token.sdk.provider.getBalance(account).then(
    // No need to convert decimals because ethers does this already
    function (result) {
      return BeanNumber.fromBigNumber(result, _this.decimals);
    });
  }
  // eslint-disable-next-line class-methods-use-this
  ;
  _proto.getAllowance = function getAllowance() {
    return Promise.resolve(new BigNumber__default(parseInt(MAX_UINT256, 16)));
  }
  // eslint-disable-next-line class-methods-use-this
  ;
  _proto.getTotalSupply = function getTotalSupply() {
    return undefined;
  };
  _proto.equals = function equals(other) {
    return this.chainId === other.chainId;
  };
  return NativeToken;
}(Token);

var _excluded = ["EIP712Domain"];
/**
 * @ref https://github.com/dmihal/eth-permit/blob/master/src/eth-permit.ts
 */
var Permit = /*#__PURE__*/function () {
  /// 
  function Permit(sdk) {
    Permit.sdk = sdk;
  }
  //////////////////////// Utilities ////////////////////////
  /**
   * https://github.com/dmihal/eth-permit/blob/34f3fb59f0e32d8c19933184f5a7121ee125d0a5/src/rpc.ts#L52
   */
  Permit.signatureToRSV = function signatureToRSV(signature) {
    var r = "0x" + signature.substring(2).substring(0, 64);
    var s = "0x" + signature.substring(2).substring(64, 128);
    var v = parseInt(signature.substring(2).substring(128, 130), 16);
    return {
      r: r,
      s: s,
      v: v
    };
  }
  //////////////////////// Sign Typed Data ////////////////////////
  /**
   * Request a signature for arbitrary typed data.
   * @ref https://github.com/dmihal/eth-permit/blob/34f3fb59f0e32d8c19933184f5a7121ee125d0a5/src/rpc.ts#L73
   */;
  var _proto = Permit.prototype;
  _proto.sign =
  /*#__PURE__*/
  function () {
    var _sign = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(owner, typedData) {
      var signerAddress, signer, _typedData$types, types, rawSignature;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Permit.sdk.getAccount();
            case 2:
              signerAddress = _context.sent;
              if (!(signerAddress.toLowerCase() !== owner.toLowerCase())) {
                _context.next = 5;
                break;
              }
              throw new Error("Signer address does not match requested signing address");
            case 5:
              // FIXME: signer currently doesn't expose signTypedData
              // https://docs.ethers.io/v5/api/signer/#Signer-signTypedData
              signer = Permit.sdk.signer;
              _typedData$types = typedData.types, types = _objectWithoutPropertiesLoose(_typedData$types, _excluded); // Shim in case of method renaming.
              // src/lib/permit.ts(129,48): semantic error TS2352: Conversion of type '{ Permit: { name: string; type: string; }[]; }' to type 'Record<string, TypedDataField[]>' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first. Index signature is missing in type '{ Permit: { name: string; type: string; }[]; }'.
              _context.next = 9;
              return signer.signTypedData ? signer.signTypedData(typedData.domain, types, typedData.message) : signer._signTypedData(typedData.domain, types, typedData.message);
            case 9:
              rawSignature = _context.sent;
              return _context.abrupt("return", {
                owner: owner,
                typedData: typedData,
                rawSignature: rawSignature,
                split: Permit.signatureToRSV(rawSignature)
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    function sign(_x, _x2) {
      return _sign.apply(this, arguments);
    }
    return sign;
  }();
  return Permit;
}();
Permit.sdk = void 0;
Permit.MAX_UINT256 = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
Permit.NONCES_FN = '0x7ecebe00';
Permit.EIP712_DOMAIN = [{
  name: "name",
  type: "string"
}, {
  name: "version",
  type: "string"
}, {
  name: "chainId",
  type: "uint256"
}, {
  name: "verifyingContract",
  type: "address"
}];

var Tokens$1 = /*#__PURE__*/function () {
  function Tokens(sdk) {
    this.sdk = void 0;
    this.ETH = void 0;
    this.WETH = void 0;
    this.BEAN = void 0;
    this.ROOT = void 0;
    this.CRV3 = void 0;
    this.DAI = void 0;
    this.USDC = void 0;
    this.USDT = void 0;
    this.LUSD = void 0;
    this.BEAN_ETH_UNIV2_LP = void 0;
    this.BEAN_CRV3_LP = void 0;
    this.UNRIPE_BEAN = void 0;
    this.UNRIPE_BEAN_CRV3 = void 0;
    this.STALK = void 0;
    this.SEEDS = void 0;
    this.PODS = void 0;
    this.SPROUTS = void 0;
    this.RINSABLE_SPROUTS = void 0;
    this.unripeTokens = void 0;
    this.unripeUnderlyingTokens = void 0;
    this.siloWhitelist = void 0;
    this.erc20Tokens = void 0;
    this.balanceTokens = void 0;
    this.crv3Underlying = void 0;
    this.map = void 0;
    this._createTypedERC2612Data = function (domain, message) {
      return {
        types: {
          EIP712Domain: Permit.EIP712_DOMAIN,
          Permit: [{
            name: "owner",
            type: "address"
          }, {
            name: "spender",
            type: "address"
          }, {
            name: "value",
            type: "uint256"
          }, {
            name: "nonce",
            type: "uint256"
          }, {
            name: "deadline",
            type: "uint256"
          }]
        },
        primaryType: "Permit",
        domain: domain,
        message: message
      };
    };
    this.sdk = sdk;
    this.map = new Map();
    /// Ethereum
    this.ETH = new NativeToken(this.sdk, null, 18, {
      name: 'Ether',
      symbol: 'ETH',
      displayDecimals: 4
    });
    this.WETH = new ERC20Token(this.sdk, addresses.WETH.get(this.sdk.chainId), 18, {
      name: 'Wrapped Ether',
      symbol: 'WETH'
    });
    /// Beanstalk
    this.BEAN = new ERC20Token(this.sdk, addresses.BEAN.get(this.sdk.chainId), 6, {
      name: 'Bean',
      displayName: 'Bean',
      symbol: 'BEAN'
    }, {
      stalk: 1,
      seeds: 2
    });
    this.BEAN_CRV3_LP = new ERC20Token(this.sdk, addresses.BEAN_CRV3.get(this.sdk.chainId), 18, {
      name: 'Curve.fi Factory USD Metapool: Bean',
      displayName: 'BEAN:3CRV LP',
      symbol: 'BEAN3CRV',
      isLP: true,
      color: '#DFB385'
    }, {
      stalk: 1,
      seeds: 4
    });
    this.UNRIPE_BEAN = new ERC20Token(this.sdk, addresses.UNRIPE_BEAN.get(this.sdk.chainId), 6, {
      name: 'Unripe Bean',
      displayName: 'Unripe Bean',
      symbol: 'urBEAN',
      displayDecimals: 2,
      isUnripe: true
    }, {
      stalk: 1,
      seeds: 2
    });
    this.UNRIPE_BEAN_CRV3 = new ERC20Token(this.sdk, addresses.UNRIPE_BEAN_CRV3.get(this.sdk.chainId), 6, {
      name: 'Unripe BEAN3CRV',
      displayName: 'Unripe BEAN:3CRV LP',
      symbol: 'urBEAN3CRV',
      displayDecimals: 2,
      isUnripe: true
    }, {
      stalk: 1,
      seeds: 4
    });
    this.ROOT = new ERC20Token(this.sdk, addresses.ROOT.get(this.sdk.chainId), 6, {
      name: 'Root',
      symbol: 'ROOT'
    });
    /// Beanstalk "Tokens" (non ERC-20)
    this.STALK = new BeanstalkToken(this.sdk, null, 10, {
      name: 'Stalk',
      symbol: 'STALK'
    });
    this.SEEDS = new BeanstalkToken(this.sdk, null, 6, {
      name: 'Seeds',
      symbol: 'SEED'
    });
    this.PODS = new BeanstalkToken(this.sdk, null, 6, {
      name: 'Pods',
      symbol: 'PODS'
    });
    this.SPROUTS = new BeanstalkToken(this.sdk, null, 6, {
      name: 'Sprouts',
      symbol: 'SPROUT'
    });
    this.RINSABLE_SPROUTS = new BeanstalkToken(this.sdk, null, 6, {
      name: 'Rinsable Sprouts',
      symbol: 'rSPROUT'
    });
    /// Common ERC-20 Tokens
    this.CRV3 = new ERC20Token(this.sdk, addresses.CRV3.get(this.sdk.chainId), 18, {
      name: '3CRV',
      symbol: '3CRV',
      isLP: true
    });
    this.DAI = new ERC20Token(this.sdk, addresses.DAI.get(this.sdk.chainId), 18, {
      name: 'Dai',
      symbol: 'DAI'
    });
    this.USDC = new ERC20Token(this.sdk, addresses.USDC.get(this.sdk.chainId), 6, {
      name: 'USD Coin',
      symbol: 'USDC'
    });
    this.USDT = new ERC20Token(this.sdk, addresses.USDT.get(this.sdk.chainId), 6, {
      name: 'Tether',
      symbol: 'USDT'
    });
    this.LUSD = new ERC20Token(this.sdk, addresses.LUSD.get(this.sdk.chainId), 6, {
      name: 'LUSD',
      symbol: 'LUSD'
    });
    /// Legacy
    // Keep the old BEAN_ETH and BEAN_LUSD tokens to let
    // the Pick dialog properly display pickable assets.
    this.BEAN_ETH_UNIV2_LP = new ERC20Token(this.sdk, addresses.BEAN_ETH_UNIV2_LP.get(this.sdk.chainId), 18, {
      name: 'BEAN:ETH LP',
      symbol: 'BEAN:ETH',
      displayDecimals: 9,
      isLP: true
    }, {
      stalk: 1,
      seeds: 4
    });
    // create a map of address -> Token
    // this will help in the UI migration to SDK use
    this.map.set('eth', this.ETH);
    this.map.set(addresses.WETH.get(this.sdk.chainId), this.WETH);
    this.map.set(addresses.ROOT.get(this.sdk.chainId), this.ROOT);
    this.map.set(addresses.BEAN.get(this.sdk.chainId), this.BEAN);
    this.map.set(addresses.CRV3.get(this.sdk.chainId), this.CRV3);
    this.map.set(addresses.DAI.get(this.sdk.chainId), this.DAI);
    this.map.set(addresses.USDC.get(this.sdk.chainId), this.USDC);
    this.map.set(addresses.USDT.get(this.sdk.chainId), this.USDT);
    this.map.set(addresses.LUSD.get(this.sdk.chainId), this.LUSD);
    this.map.set(addresses.BEAN_CRV3.get(this.sdk.chainId), this.BEAN_CRV3_LP);
    this.map.set(addresses.UNRIPE_BEAN.get(this.sdk.chainId), this.UNRIPE_BEAN);
    this.map.set(addresses.UNRIPE_BEAN_CRV3.get(this.sdk.chainId), this.UNRIPE_BEAN_CRV3);
    this.map.set('STALK', this.STALK);
    this.map.set('SEED', this.SEEDS);
    this.map.set('PODS', this.PODS);
    this.map.set('SPROUT', this.SPROUTS);
    this.map.set('rSPROUT', this.RINSABLE_SPROUTS);
    this.map.set(addresses.BEAN_ETH_UNIV2_LP.get(this.sdk.chainId), this.BEAN_ETH_UNIV2_LP);
    this.unripeTokens = new Set([this.UNRIPE_BEAN, this.UNRIPE_BEAN_CRV3]);
    this.unripeUnderlyingTokens = new Set([this.BEAN, this.BEAN_CRV3_LP]);
    this.siloWhitelist = new Set([this.BEAN, this.BEAN_CRV3_LP, this.UNRIPE_BEAN, this.UNRIPE_BEAN_CRV3]);
    this.erc20Tokens = new Set([].concat(this.siloWhitelist, [this.WETH, this.CRV3, this.DAI, this.USDC, this.USDT]));
    this.balanceTokens = new Set([this.ETH].concat(this.erc20Tokens));
    this.crv3Underlying = new Set([this.DAI, this.USDC, this.USDT]);
  }
  /**
   * Find a Token by address
   */
  var _proto = Tokens.prototype;
  _proto.findByAddress = function findByAddress(address) {
    return this.map.get(address.toLowerCase());
  };
  _proto._deriveAddress = function _deriveAddress(value) {
    return typeof value === 'string' ? value : value.address;
  };
  _proto._deriveToken = function _deriveToken(value) {
    if (typeof value === 'string') {
      var _token = this.findByAddress(value);
      if (!_token) throw new Error("Unknown token: " + value);
      return [_token, value];
    }
    return [value, value.address];
  };
  _proto._balanceStructToTokenBalance = function _balanceStructToTokenBalance(token, result) {
    return {
      internal: token.stringifyToDecimal(result.internalBalance.toString()),
      external: token.stringifyToDecimal(result.externalBalance.toString()),
      total: token.stringifyToDecimal(result.totalBalance.toString())
    };
  }
  /**
   * Return a TokenBalance struct for a requested token.
   * Includes the Farmer's INTERNAL and EXTERNAL balance in one item.
   * This is the typical representation of balances within Beanstalk.
   */;
  _proto.getBalance =
  /*#__PURE__*/
  function () {
    var _getBalance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_token, _account) {
      var account, _balance, _this$_deriveToken, token, tokenAddress, balance;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.sdk.getAccount(_account);
            case 2:
              account = _context.sent;
              if (!(_token === this.ETH)) {
                _context.next = 8;
                break;
              }
              _context.next = 6;
              return this.sdk.provider.getBalance(account);
            case 6:
              _balance = _context.sent;
              return _context.abrupt("return", this._balanceStructToTokenBalance(_token, {
                internalBalance: '0',
                externalBalance: _balance,
                totalBalance: _balance
              }));
            case 8:
              // FIXME: use the ERC20 token contract directly to load decimals for parsing?
              _this$_deriveToken = this._deriveToken(_token), token = _this$_deriveToken[0], tokenAddress = _this$_deriveToken[1];
              _context.next = 11;
              return this.sdk.contracts.beanstalk.getAllBalance(account, tokenAddress);
            case 11:
              balance = _context.sent;
              return _context.abrupt("return", this._balanceStructToTokenBalance(token, balance));
            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function getBalance(_x, _x2) {
      return _getBalance.apply(this, arguments);
    }
    return getBalance;
  }()
  /**
   * Return a TokenBalance struct for each requested token.
   * Includes the Farmer's INTERNAL and EXTERNAL balance in one item.
   * This is the typical representation of balances within Beanstalk.
   *
   * @todo discuss parameter inversion between getBalance() and getBalances().
   */
  ;
  _proto.getBalances =
  /*#__PURE__*/
  function () {
    var _getBalances = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_account, _tokens) {
      var _this = this;
      var account, tokens, tokenAddresses, balances, results;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.sdk.getAccount(_account);
            case 2:
              account = _context2.sent;
              tokens = _tokens || Array.from(this.erc20Tokens);
              tokenAddresses = tokens.map(this._deriveAddress); // FIXME: only allow ERC20 tokens with getBalance() method, or
              // override if token is NativeToken
              balances = new Map();
              _context2.next = 8;
              return this.sdk.contracts.beanstalk.getAllBalances(account, tokenAddresses);
            case 8:
              results = _context2.sent;
              results.forEach(function (result, index) {
                var token = _this.findByAddress(tokenAddresses[index]);
                // FIXME: use the ERC20 token contract directly to load decimals for parsing?
                if (!token) throw new Error("Unknown token: " + tokenAddresses);
                balances.set(token, _this._balanceStructToTokenBalance(token, result));
              });
              return _context2.abrupt("return", balances);
            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    function getBalances(_x3, _x4) {
      return _getBalances.apply(this, arguments);
    }
    return getBalances;
  }() //////////////////////// Permit Data ////////////////////////
  /**
   * Create the domain for an particular ERC-2636 signature.
   * Look up the name of an ERC-20 token for signing.
   *
   * @ref https://github.com/dmihal/eth-permit/blob/34f3fb59f0e32d8c19933184f5a7121ee125d0a5/src/eth-permit.ts#L85
   */
  ;
  _proto._getEIP712DomainForToken =
  /*#__PURE__*/
  function () {
    var _getEIP712DomainForToken2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(token) {
      var _yield$Promise$all, name, chainId;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Promise.all([token.getName(), this.sdk.provider.getNetwork().then(function (network) {
                return network.chainId;
              })]);
            case 2:
              _yield$Promise$all = _context3.sent;
              name = _yield$Promise$all[0];
              chainId = _yield$Promise$all[1];
              return _context3.abrupt("return", {
                name: name,
                version: '1',
                chainId: chainId,
                verifyingContract: token.address
              });
            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    function _getEIP712DomainForToken(_x5) {
      return _getEIP712DomainForToken2.apply(this, arguments);
    }
    return _getEIP712DomainForToken;
  }();
  //////////////////////// PERMIT: ERC-2612 (for other ERC-20 tokens) ////////////////////////
  /**
   * Sign a permit for an arbitrary ERC-20 token. This allows `spender` to use `value`
   * of `owner`'s `token`.
   *
   * @fixme should this be in `tokens.ts`?
   * @fixme does the order of keys in `message` matter? if not we could make an abstraction here
   * @fixme `permitERC2612` -> `getERC20Permit`
   *
   * @ref https://github.com/dmihal/eth-permit/blob/34f3fb59f0e32d8c19933184f5a7121ee125d0a5/src/eth-permit.ts#L126
   * @param token a Token instance representing an ERC20 token to permit
   * @param owner
   * @param spender authorize this account to spend `token` on behalf of `owner`
   * @param value the amount of `token` to authorize
   * @param _nonce
   * @param _deadline
   */
  _proto.permitERC2612 =
  /*#__PURE__*/
  function () {
    var _permitERC = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(token, owner,
    // 
    spender, value,
    // FIXME: included default on eth-permit, see @ref
    _nonce,
    //
    _deadline) {
      var deadline, _yield$Promise$all2, domain, nonce;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              deadline = _deadline || Permit.MAX_UINT256;
              _context4.next = 3;
              return Promise.all([this._getEIP712DomainForToken(token),
              // @ts-ignore FIXME
              token.getContract().nonces(owner).then(function (r) {
                return r.toString();
              })]);
            case 3:
              _yield$Promise$all2 = _context4.sent;
              domain = _yield$Promise$all2[0];
              nonce = _yield$Promise$all2[1];
              return _context4.abrupt("return", this._createTypedERC2612Data(domain, {
                owner: owner,
                spender: spender,
                value: value,
                nonce: nonce,
                deadline: deadline
              }));
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
    function permitERC2612(_x6, _x7, _x8, _x9, _x10, _x11) {
      return _permitERC.apply(this, arguments);
    }
    return permitERC2612;
  }();
  return Tokens;
}();

// import { addresses, ChainID } from '../constants';
var Contracts =
// private chain: string;
function Contracts(sdk) {
  var _pools, _registries;
  this.beanstalk = void 0;
  this.root = void 0;
  this.fertilizer = void 0;
  this.curve = void 0;
  Contracts.sdk = sdk;
  // Addressses
  var beanstalkAddress = sdk.addresses.BEANSTALK.get(sdk.chainId);
  var rootAddress = sdk.addresses.ROOT.get(sdk.chainId);
  var beanstalkFertilizerAddress = sdk.addresses.BEANSTALK_FERTILIZER.get(sdk.chainId);
  var pool3Address = sdk.addresses.POOL3.get(sdk.chainId);
  var tricrypto2Address = sdk.addresses.TRICRYPTO2.get(sdk.chainId);
  var beancrv3Address = sdk.addresses.BEAN_CRV3.get(sdk.chainId);
  var poolRegistryAddress = sdk.addresses.POOL_REGISTRY.get(sdk.chainId);
  var metaFactoryAddress = sdk.addresses.META_FACTORY.get(sdk.chainId);
  var cryptoFactoryAddress = sdk.addresses.CRYPTO_FACTORY.get(sdk.chainId);
  var zapAddress = sdk.addresses.CURVE_ZAP.get(sdk.chainId);
  // Instances
  this.beanstalk = Beanstalk__factory.connect(beanstalkAddress, sdk.providerOrSigner);
  this.root = Root__factory.connect(rootAddress, sdk.providerOrSigner);
  this.fertilizer = BeanstalkFertilizer__factory.connect(beanstalkFertilizerAddress, sdk.providerOrSigner);
  var pool3 = Curve3Pool__factory.connect(pool3Address, sdk.providerOrSigner);
  var tricrypto2 = CurveTriCrypto2Pool__factory.connect(tricrypto2Address, sdk.providerOrSigner);
  var beanCrv3 = CurveMetaPool__factory.connect(beancrv3Address, sdk.providerOrSigner);
  var poolRegistry = CurveRegistry__factory.connect(poolRegistryAddress, sdk.providerOrSigner);
  var metaFactory = CurveMetaFactory__factory.connect(metaFactoryAddress, sdk.providerOrSigner);
  var cryptoFactory = CurveCryptoFactory__factory.connect(cryptoFactoryAddress, sdk.providerOrSigner);
  var zap = CurveZap__factory.connect(zapAddress, sdk.providerOrSigner);
  this.curve = {
    pools: (_pools = {
      pool3: pool3
    }, _pools[pool3Address] = pool3, _pools.tricrypto2 = tricrypto2, _pools[tricrypto2Address] = tricrypto2, _pools.beanCrv3 = beanCrv3, _pools[beancrv3Address] = beanCrv3, _pools),
    registries: (_registries = {
      poolRegistry: poolRegistry
    }, _registries[poolRegistryAddress] = poolRegistry, _registries.metaFactory = metaFactory, _registries[metaFactoryAddress] = metaFactory, _registries.cryptoFactory = cryptoFactory, _registries[cryptoFactoryAddress] = cryptoFactory, _registries),
    zap: zap
  };
};
Contracts.sdk = void 0;

var EventType;
(function (EventType) {
  EventType["SILO"] = "silo";
  EventType["FIELD"] = "filed";
  EventType["FERTILIER"] = "fertilizer";
  EventType["MARKET"] = "market";
})(EventType || (EventType = {}));
var sortEvents = function sortEvents(a, b) {
  var diff = a.blockNumber - b.blockNumber;
  if (diff !== 0) return diff;
  return a.logIndex - b.logIndex;
};
var reduceEvent = function reduceEvent(prev, e) {
  try {
    prev.push({
      event: e.event,
      args: e.args,
      blockNumber: e.blockNumber,
      logIndex: e.logIndex,
      transactionHash: e.transactionHash,
      transactionIndex: e.transactionIndex
    });
  } catch (err) {
    console.error("Failed to parse event " + e.event + " " + e.transactionHash, err, e);
  }
  return prev;
};

var _Blocks;
var Blocks = (_Blocks = {}, _Blocks[exports.ChainId.MAINNET] = {
  BEANSTALK_GENESIS_BLOCK: 12974075,
  BIP10_COMMITTED_BLOCK: 14148509,
  EXPLOIT_BLOCK: 14602789,
  FERTILIZER_LAUNCH_BLOCK: 14915800 // first FERT purchase
}, _Blocks);

var EventManager = /*#__PURE__*/function () {
  function EventManager(sdk) {
    this.sdk = void 0;
    this.filters = void 0;
    this.sdk = sdk;
  }
  var _proto = EventManager.prototype;
  _proto.getSiloEvents = /*#__PURE__*/function () {
    var _getSiloEvents = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_account, _token, _fromBlock, _toBlock) {
      var fromBlockOrGenesis, toBlock;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fromBlockOrGenesis = _fromBlock || Blocks[exports.ChainId.MAINNET].BEANSTALK_GENESIS_BLOCK;
              toBlock = _toBlock || 'latest';
              return _context.abrupt("return", Promise.all([this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.AddDeposit(_account, _token), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.AddWithdrawal(_account, _token), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.RemoveWithdrawal(_account, _token), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.RemoveWithdrawals(_account, _token), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.RemoveDeposit(_account, _token), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.RemoveDeposits(_account, _token), fromBlockOrGenesis, toBlock)]).then(this.reduceAndSort));
            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function getSiloEvents(_x, _x2, _x3, _x4) {
      return _getSiloEvents.apply(this, arguments);
    }
    return getSiloEvents;
  }();
  _proto.getFieldEvents = /*#__PURE__*/function () {
    var _getFieldEvents = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_account, _fromBlock, _toBlock) {
      var rawEvents;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (_account) {
                _context2.next = 2;
                break;
              }
              throw new Error('account missing');
            case 2:
              _context2.next = 4;
              return this.getRawEventsByType(EventType.FIELD, _account, _fromBlock, _toBlock);
            case 4:
              rawEvents = _context2.sent;
              return _context2.abrupt("return", this.reduceAndSort(rawEvents));
            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    function getFieldEvents(_x5, _x6, _x7) {
      return _getFieldEvents.apply(this, arguments);
    }
    return getFieldEvents;
  }();
  _proto.getMarketEvents = /*#__PURE__*/function () {
    var _getMarketEvents = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_account, _fromBlock, _toBlock) {
      var rawEvents;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (_account) {
                _context3.next = 2;
                break;
              }
              throw new Error('account missing');
            case 2:
              _context3.next = 4;
              return this.getRawEventsByType(EventType.MARKET, _account, _fromBlock, _toBlock);
            case 4:
              rawEvents = _context3.sent;
              return _context3.abrupt("return", this.reduceAndSort(rawEvents));
            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    function getMarketEvents(_x8, _x9, _x10) {
      return _getMarketEvents.apply(this, arguments);
    }
    return getMarketEvents;
  }();
  _proto.getFertilizerEvents = /*#__PURE__*/function () {
    var _getFertilizerEvents = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_account, _fromBlock, _toBlock) {
      var rawEvents;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (_account) {
                _context4.next = 2;
                break;
              }
              throw new Error('account missing');
            case 2:
              _context4.next = 4;
              return this.getRawEventsByType(EventType.FERTILIER, _account, _fromBlock, _toBlock);
            case 4:
              rawEvents = _context4.sent;
              return _context4.abrupt("return", this.reduceAndSort(rawEvents));
            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
    function getFertilizerEvents(_x11, _x12, _x13) {
      return _getFertilizerEvents.apply(this, arguments);
    }
    return getFertilizerEvents;
  }();
  _proto.getRawEventsByType = /*#__PURE__*/function () {
    var _getRawEventsByType = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(eventType, _account, _fromBlock, _toBlock) {
      var fromBlockOrGenesis, fromBlockOrBIP10, fromBlockOrFertLaunch, toBlock;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              fromBlockOrGenesis = _fromBlock || Blocks[exports.ChainId.MAINNET].BEANSTALK_GENESIS_BLOCK;
              fromBlockOrBIP10 = _fromBlock || Blocks[exports.ChainId.MAINNET].BIP10_COMMITTED_BLOCK;
              fromBlockOrFertLaunch = _fromBlock || Blocks[exports.ChainId.MAINNET].FERTILIZER_LAUNCH_BLOCK;
              toBlock = _toBlock || 'latest';
              _context5.t0 = eventType;
              _context5.next = _context5.t0 === EventType.SILO ? 7 : _context5.t0 === EventType.FIELD ? 8 : _context5.t0 === EventType.MARKET ? 9 : _context5.t0 === EventType.FERTILIER ? 10 : 11;
              break;
            case 7:
              return _context5.abrupt("return", Promise.all([this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.AddDeposit(_account), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.AddWithdrawal(_account), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.RemoveWithdrawal(_account), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.RemoveWithdrawals(_account), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.RemoveDeposit(_account), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.RemoveDeposits(_account), fromBlockOrGenesis, toBlock)]));
            case 8:
              return _context5.abrupt("return", Promise.all([this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters['Sow(address,uint256,uint256,uint256)'](_account), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.Harvest(_account), fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.PlotTransfer(_account, null),
              // from
              fromBlockOrGenesis, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.PlotTransfer(null, _account),
              // to
              fromBlockOrGenesis, toBlock)]));
            case 9:
              return _context5.abrupt("return", Promise.all([this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.PodListingCreated(_account), fromBlockOrBIP10, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters['PodListingCancelled(address,uint256)'](_account), fromBlockOrBIP10, toBlock),
              // this account had a listing filled
              this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.PodListingFilled(null, _account),
              // to
              fromBlockOrBIP10, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.PodOrderCreated(_account), fromBlockOrBIP10, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.PodOrderCancelled(_account), fromBlockOrBIP10, toBlock), this.sdk.contracts.beanstalk.queryFilter(this.sdk.contracts.beanstalk.filters.PodOrderFilled(null, _account),
              // to
              fromBlockOrBIP10, toBlock)]));
            case 10:
              return _context5.abrupt("return", Promise.all([
              /// Send FERT
              this.sdk.contracts.fertilizer.queryFilter(this.sdk.contracts.fertilizer.filters.TransferSingle(null,
              // operator
              _account,
              // from
              null,
              // to
              null,
              // id
              null // value
              ), fromBlockOrFertLaunch, toBlock), this.sdk.contracts.fertilizer.queryFilter(this.sdk.contracts.fertilizer.filters.TransferBatch(null,
              // operator
              _account,
              // from
              null,
              // to
              null,
              // ids
              null // values
              ), fromBlockOrFertLaunch, toBlock),
              /// Receive FERT
              this.sdk.contracts.fertilizer.queryFilter(this.sdk.contracts.fertilizer.filters.TransferSingle(null,
              // operator
              null,
              // from
              _account,
              // to
              null,
              // id
              null // value
              ), fromBlockOrFertLaunch, toBlock), this.sdk.contracts.fertilizer.queryFilter(this.sdk.contracts.fertilizer.filters.TransferBatch(null,
              // operator
              null,
              // from
              _account,
              // to
              null,
              // ids
              null // values
              ), fromBlockOrFertLaunch, toBlock)]));
            case 11:
              throw new Error("Cannot build event EventQuery for unknown type: " + eventType);
            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
    function getRawEventsByType(_x14, _x15, _x16, _x17) {
      return _getRawEventsByType.apply(this, arguments);
    }
    return getRawEventsByType;
  }() // : TypedEvent[]
  ;
  _proto.reduceAndSort = function reduceAndSort(events) {
    return lodash.flattenDeep(events).reduce(reduceEvent, []).sort(sortEvents);
  };
  return EventManager;
}();

// ----------------------------------------
var SupportedEvents = [
// Field
'Sow', 'Harvest', 'PlotTransfer',
// Silo
'AddDeposit', 'RemoveDeposit', 'RemoveDeposits', 'AddWithdrawal', 'RemoveWithdrawal', 'RemoveWithdrawals',
// Market
'PodListingCreated', 'PodListingCancelled', 'PodListingFilled', 'PodOrderCreated', 'PodOrderCancelled', 'PodOrderFilled'];
var SupportedEventsSet = /*#__PURE__*/new Set(SupportedEvents);
var setToMap = function setToMap(tokens) {
  var map = new Map();
  for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
    var token = _step.value;
    map.set(token, {});
  }
  return map;
};
//
var EventProcessor = /*#__PURE__*/function () {
  // ----------------------------
  // |       PROCESSING         |
  // ----------------------------

  // ----------------------------
  // |      DATA STORAGE        |
  // ----------------------------

  // token => season => amount
  // token => season => amount

  /// /////////////////////// SETUP //////////////////////////
  function EventProcessor(sdk, account, epp, initialState) {
    this.sdk = void 0;
    this.account = void 0;
    this.epp = void 0;
    this.plots = void 0;
    this.deposits = void 0;
    this.withdrawals = void 0;
    this.listings = void 0;
    this.orders = void 0;
    if (!epp.whitelist || typeof epp !== 'object') throw new Error('EventProcessor: Missing whitelist.');
    this.sdk = sdk;
    // Setup
    this.account = account.toLowerCase();
    this.epp = epp;
    // Silo
    this.deposits = (initialState == null ? void 0 : initialState.deposits) || setToMap(this.epp.whitelist);
    this.withdrawals = (initialState == null ? void 0 : initialState.withdrawals) || setToMap(this.epp.whitelist);
    // Field
    this.plots = (initialState == null ? void 0 : initialState.plots) || {};
    this.listings = (initialState == null ? void 0 : initialState.listings) || {};
    this.orders = (initialState == null ? void 0 : initialState.orders) || {};
  }
  var _proto = EventProcessor.prototype;
  _proto.ingest = function ingest(event) {
    var _this$event$event;
    if (!event.event) {
      return;
    }
    if (!SupportedEventsSet.has(event.event)) {
      return;
    }
    // @ts-ignore
    return (_this$event$event = this[event.event]) == null ? void 0 : _this$event$event.call(this, event);
  };
  _proto.ingestAll = function ingestAll(events) {
    var _this = this;
    events.forEach(function (event) {
      _this.ingest(event);
    });
    return this.data();
  };
  _proto.data = function data() {
    return {
      plots: this.plots,
      deposits: this.deposits,
      withdrawals: this.withdrawals,
      listings: this.listings,
      orders: this.orders
    };
  }
  // Utils
  ;
  _proto.getToken = function getToken(event) {
    var _event$args;
    var token = this.sdk.tokens.findByAddress(event == null ? void 0 : (_event$args = event.args) == null ? void 0 : _event$args.token);
    if (!token) {
      var _event$args2;
      this.sdk.debug('token not found for this event', {
        event: event
      });
      throw new Error("token not found for address " + (event == null ? void 0 : (_event$args2 = event.args) == null ? void 0 : _event$args2.token));
    }
    return token;
  }
  // /// /////////////////////// FIELD //////////////////////////
  // Sow(event: Simplify<SowEvent>) {
  //   const index       = tokenBN(event.args.index, PODS).toString();
  //   this.plots[index] = tokenBN(event.args.pods,  PODS);
  // }
  // Harvest(event: Simplify<HarvestEvent>) {
  //   let beansClaimed = tokenBN(event.args.beans, Bean);
  //   const plots = (
  //     event.args.plots
  //       .map((_index) => tokenBN(_index, Bean))
  //       .sort((a, b) => a.minus(b).toNumber())
  //   );
  //   plots.forEach((indexBN) => {
  //     const index = indexBN.toString();
  //     if (beansClaimed.isLessThan(this.plots[index])) {
  //       // ----------------------------------------
  //       // A Plot was partially Harvested. Example:
  //       // Event: Sow
  //       //  index  = 10
  //       //  amount = 10
  //       //
  //       // I call harvest when harvestableIndex = 14 (I harvest 10,11,12,13)
  //       //
  //       // Event: Harvest
  //       //  args.beans = 4
  //       //  args.plots = [10]
  //       //  beansClaimed  = 4
  //       //  partialIndex  = 4 + 10 = 14
  //       //  partialAmount = 10 - 4 = 6
  //       //
  //       // Add Plot with 6 Pods at index 14
  //       // Remove Plot at index 10.
  //       // ----------------------------------------
  //       const partialIndex  = beansClaimed.plus(indexBN);
  //       const partialAmount = this.plots[index].minus(beansClaimed);
  //       this.plots = {
  //         ...this.plots,
  //         [partialIndex.toString()]: partialAmount,
  //       };
  //     } else {
  //       beansClaimed = beansClaimed.minus(this.plots[index]);
  //     }
  //     delete this.plots[index];
  //   });
  // }
  // PlotTransfer(event: Simplify<PlotTransferEvent>) {
  //   // Numerical "index" of the Plot. Absolute, with respect to Pod 0.
  //   const transferIndex   = tokenBN(event.args.id, Bean);
  //   const podsTransferred = tokenBN(event.args.pods, Bean);
  //   if (event.args.to.toLowerCase() === this.account) {
  //     // This account received a Plot
  //     this.plots[transferIndex.toString()] = podsTransferred;
  //   }
  //   else {
  //     // This account sent a Plot
  //     const indexStr = transferIndex.toString();
  //     // ----------------------------------------
  //     // The PlotTransfer event doesn't contain info
  //     // about the `start` position of a Transfer.
  //     // Say for example I have the following plot:
  //     //
  //     //  0       9 10         20              END
  //     // [---------[0123456789)-----------------]
  //     //                 ^
  //     // PlotTransfer   [56789)
  //     //                 15    20
  //     //
  //     // PlotTransfer(from=0x, to=0x, id=15, pods=5)
  //     // This means we send Pods: 15, 16, 17, 18, 19
  //     //
  //     // However this Plot doesn't exist yet in our
  //     // cache. To find it we search for the Plot
  //     // beginning at 10 and ending at 20, then
  //     // split it depending on params provided in
  //     // the PlotTransfer event.
  //     // ----------------------------------------
  //     if (this.plots[indexStr] !== undefined) {
  //       // A known Plot was sent.
  //       if (!podsTransferred.isEqualTo(this.plots[indexStr])) {
  //         const newStartIndex = transferIndex.plus(podsTransferred);
  //         this.plots[newStartIndex.toString()] = this.plots[indexStr].minus(podsTransferred);
  //       }
  //       delete this.plots[indexStr];
  //     }
  //     else {
  //       // A Plot was partially sent from a non-zero
  //       // starting index. Find the containing Plot
  //       // in our cache.
  //       let i = 0;
  //       let found = false;
  //       const plotIndices = Object.keys(this.plots);
  //       while (found === false && i < plotIndices.length) {
  //         // Setup the boundaries of this Plot
  //         const startIndex = BN(plotIndices[i]);
  //         const endIndex   = startIndex.plus(this.plots[startIndex.toString()]);
  //         // Check if the Transfer happened within this Plot
  //         if (startIndex.isLessThanOrEqualTo(transferIndex)
  //            && endIndex.isGreaterThan(transferIndex)) {
  //           // ----------------------------------------
  //           // Slice #1. This is the part that
  //           // the user keeps (they sent the other part).
  //           //
  //           // Following the above example:
  //           //  transferIndex   = 15
  //           //  podsTransferred = 5
  //           //  startIndex      = 10
  //           //  endIndex        = 20
  //           //
  //           // This would update the existing Plot such that:
  //           //  this.plots[10] = (15 - 10) = 5
  //           // containing Pods 10, 11, 12, 13, 14
  //           // ----------------------------------------
  //           if (transferIndex.eq(startIndex)) {
  //             delete this.plots[startIndex.toString()];
  //           } else {
  //             this.plots[startIndex.toString()] = transferIndex.minus(startIndex);
  //           }
  //           // ----------------------------------------
  //           // Slice #2. Handles the below case where
  //           // the amount sent doesn't reach the end
  //           // of the Plot (i.e. I sent Pods in the middle.
  //           //
  //           //  0       9 10         20              END
  //           // [---------[0123456789)-----------------]
  //           //                 ^
  //           // PlotTransfer   [567)
  //           //                 15  18
  //           //
  //           //  transferIndex   = 15
  //           //  podsTransferred = 3
  //           //  startIndex      = 10
  //           //  endIndex        = 20
  //           //
  //           // PlotTransfer(from=0x, to=0x, id=15, pods=3)
  //           // This means we send Pods: 15, 16, 17.
  //           // ----------------------------------------
  //           if (!transferIndex.isEqualTo(endIndex)) {
  //             // s2 = 15 + 3 = 18
  //             // Requires another split since 18 != 20
  //             const s2 = transferIndex.plus(podsTransferred);
  //             const requiresAnotherSplit = !s2.isEqualTo(endIndex);
  //             if (requiresAnotherSplit) {
  //               // Create a new plot at s2=18 with 20-18 Pods.
  //               const s2Str = s2.toString();
  //               this.plots[s2Str] = endIndex.minus(s2);
  //               if (this.plots[s2Str].isEqualTo(0)) {
  //                 delete this.plots[s2Str];
  //               }
  //             }
  //           }
  //           found = true;
  //         }
  //         i += 1;
  //       }
  //     }
  //   }
  // }
  // parsePlots(_harvestableIndex: BigNumber) {
  //   return EventProcessor._parsePlots(
  //     this.plots,
  //     _harvestableIndex
  //   );
  // }
  // static _parsePlots(
  //   plots: EventProcessorData['plots'],
  //   index: BigNumber
  // ) {
  //   console.debug(`[EventProcessor] Parsing plots with index ${index.toString()}`);
  //   let pods = new BigNumber(0);
  //   let harvestablePods = new BigNumber(0);
  //   const unharvestablePlots  : PlotMap<BigNumber> = {};
  //   const harvestablePlots    : PlotMap<BigNumber> = {};
  //   Object.keys(plots).forEach((p) => {
  //     if (plots[p].plus(p).isLessThanOrEqualTo(index)) {
  //       harvestablePods = harvestablePods.plus(plots[p]);
  //       harvestablePlots[p] = plots[p];
  //     } else if (new BigNumber(p).isLessThan(index)) {
  //       harvestablePods = harvestablePods.plus(index.minus(p));
  //       pods = pods.plus(
  //         plots[p].minus(index.minus(p))
  //       );
  //       harvestablePlots[p] = index.minus(p);
  //       unharvestablePlots[index.minus(p).plus(p).toString()] = plots[p].minus(
  //         index.minus(p)
  //       );
  //     } else {
  //       pods = pods.plus(plots[p]);
  //       unharvestablePlots[p] = plots[p];
  //     }
  //   });
  //   // FIXME: "unharvestable pods" are just Pods,
  //   // but we can't reuse "plots" in the same way.
  //   return {
  //     pods,
  //     harvestablePods,
  //     plots: unharvestablePlots,
  //     harvestablePlots
  //   };
  // }
  // /// /////////////////////// SILO: UTILS  //////////////////////////
  // parseWithdrawals(_token: Token, _season: EBN) {
  //   return EventProcessor._parseWithdrawals(
  //     this.withdrawals.get(_token)!,
  //     _season || this.epp.season
  //   );
  // }
  // static _parseWithdrawals(
  //   // withdrawals: EventProcessorData['withdrawals'] extends {[season:string]: infer I} ? I : undefined,
  //   withdrawals: MapValueType<EventProcessorData['withdrawals']>,
  //   currentSeason: EBN
  // ): {
  //   withdrawn: TokenSiloBalance['withdrawn'];
  //   claimable: TokenSiloBalance['claimable'];
  // } {
  //   let transitBalance = EBN.from(0);
  //   let receivableBalance = EBN.from(0);
  //   const transitWithdrawals: WithdrawalCrate[] = [];
  //   const receivableWithdrawals: WithdrawalCrate[] = [];
  //   // Split each withdrawal between `receivable` and `transit`.
  //   Object.keys(withdrawals).forEach((season: string) => {
  //     const v = withdrawals[season].amount;
  //     const s = EBN.from(season);
  //     if (s.lte(currentSeason)) {
  //       receivableBalance = receivableBalance.add(v);
  //       receivableWithdrawals.push({
  //         amount: v,
  //         season: s,
  //       });
  //     } else {
  //       transitBalance = transitBalance.plus(v);
  //       transitWithdrawals.push({
  //         amount: v,
  //         season: s,
  //       });
  //     }
  //   });
  //   return {
  //     withdrawn: {
  //       amount: transitBalance,
  //       crates: transitWithdrawals,
  //     },
  //     claimable: {
  //       amount: receivableBalance,
  //       crates: receivableWithdrawals,
  //     },
  //   };
  // }
  // /// /////////////////////// SILO: DEPOSIT  //////////////////////////
  // eslint-disable-next-line class-methods-use-this
  ;
  _proto._upsertDeposit = function _upsertDeposit(existing, amount, bdv) {
    return existing ? {
      amount: existing.amount.add(amount),
      bdv: existing.bdv.add(bdv)
    } : {
      amount: amount,
      bdv: bdv
    };
  };
  _proto._removeDeposit = function _removeDeposit(season, token, amount) {
    var _this$deposits$get, _extends2, _this$deposits$get2, _this$deposits$get2$s, _this$deposits$get2$s2;
    if (!this.epp.whitelist.has(token)) throw new Error("Attempted to process an event with an unknown token: " + token);
    var existingDeposit = (_this$deposits$get = this.deposits.get(token)) == null ? void 0 : _this$deposits$get[season];
    if (!existingDeposit) throw new Error("Received a 'RemoveDeposit' event for an unknown deposit: " + token.address + " " + season);
    // BDV scales linearly with the amount of the underlying token.
    // Ex. if we remove 60% of the `amount`, we also remove 60% of the BDV.
    // Because of this, the `RemoveDeposit` event doesn't contain the BDV to save gas.
    //
    // @note order of mul/div matters here to prevent underflow
    var bdv = amount.mul(existingDeposit.bdv).div(existingDeposit.amount);
    this.deposits.set(token, _extends({}, this.deposits.get(token), (_extends2 = {}, _extends2[season] = this._upsertDeposit(existingDeposit, amount.mul(-1), bdv.mul(-1)), _extends2)));
    if ((_this$deposits$get2 = this.deposits.get(token)) != null && (_this$deposits$get2$s = _this$deposits$get2[season]) != null && (_this$deposits$get2$s2 = _this$deposits$get2$s.amount) != null && _this$deposits$get2$s2.eq(0)) {
      var _this$deposits$get3;
      (_this$deposits$get3 = this.deposits.get(token)) == null ? true : delete _this$deposits$get3[season];
    }
  };
  _proto.AddDeposit = function AddDeposit(event) {
    var _extends3;
    var token = this.getToken(event);
    if (!this.epp.whitelist.has(token)) throw new Error("Attempted to process an event with an unknown token: " + token);
    var tokDeposits = this.deposits.get(token);
    this.deposits.set(token, _extends({}, tokDeposits, (_extends3 = {}, _extends3[event.args.season] = this._upsertDeposit(tokDeposits == null ? void 0 : tokDeposits[event.args.season], event.args.amount, event.args.bdv), _extends3)));
  };
  _proto.RemoveDeposit = function RemoveDeposit(event) {
    var token = this.getToken(event);
    this._removeDeposit(event.args.season.toString(), token, event.args.amount);
  };
  _proto.RemoveDeposits = function RemoveDeposits(event) {
    var _this2 = this;
    var token = this.getToken(event);
    event.args.seasons.forEach(function (season, index) {
      _this2._removeDeposit(season.toString(), token, event.args.amounts[index]);
    });
  }
  /// /////////////////////// SILO: WITHDRAW  //////////////////////////
  // eslint-disable-next-line class-methods-use-this
  ;
  _proto._upsertWithdrawal = function _upsertWithdrawal(existing, amount) {
    return existing ? {
      amount: existing.amount.add(amount)
    } : {
      amount: amount
    };
  };
  _proto._removeWithdrawal = function _removeWithdrawal(season, token, _amount) {
    var _this$withdrawals$get, _this$withdrawals$get2;
    // For gas optimization reasons, `RemoveWithdrawal` is emitted
    // with a zero amount when the removeWithdrawal method is called with:
    //  (a) a token that doesn't exist;
    //  (b) a season that doesn't exist;
    //  (c) a combo of (a) and (b) where there is no existing Withdrawal.
    // In these cases we just ignore the event.
    if (_amount.eq(0) || !this.epp.whitelist.has(token)) return;
    var existingWithdrawal = (_this$withdrawals$get = this.withdrawals.get(token)) == null ? void 0 : _this$withdrawals$get[season];
    if (!existingWithdrawal) throw new Error("Received a RemoveWithdrawal(s) event for an unknown Withdrawal: " + token + " " + season);
    // Removing a Withdrawal always removes the entire season.
    (_this$withdrawals$get2 = this.withdrawals.get(token)) == null ? true : delete _this$withdrawals$get2[season];
  };
  _proto.AddWithdrawal = function AddWithdrawal(event) {
    var _extends4;
    var token = this.getToken(event);
    if (!this.epp.whitelist.has(token)) throw new Error("Attempted to process an event with an unknown token: " + token);
    var tokWithdrawals = this.withdrawals.get(token);
    this.withdrawals.set(token, _extends({}, tokWithdrawals, (_extends4 = {}, _extends4[event.args.season] = this._upsertWithdrawal(tokWithdrawals == null ? void 0 : tokWithdrawals[event.args.season], event.args.amount), _extends4)));
  };
  _proto.RemoveWithdrawal = function RemoveWithdrawal(event) {
    var token = this.getToken(event);
    this._removeWithdrawal(event.args.season.toString(), token, event.args.amount);
  };
  _proto.RemoveWithdrawals = function RemoveWithdrawals(event) {
    var _this3 = this;
    var token = this.getToken(event);
    event.args.seasons.forEach(function (season) {
      _this3._removeWithdrawal(season.toString(), token, event.args.amount);
    });
  };
  return EventProcessor;
}();

/**
 * Beanstalk doesn't automatically re-categorize withdrawals as "claimable".
 * "Claimable" just means that the `season` parameter stored in the withdrawal
 * event is less than or equal to the current `season()`.
 *
 * This function serves two purposes:
 * 1. Break generic withdrawals into
 *    "withdrawn" (aka transit), which cannot yet be claimed
 *    "claimable" (aka receivable), which are eligible to be claimed
 * 2. Convert each crate amount to the appropriate number of decimals.
 */
var _parseWithdrawalCrates = function _parseWithdrawalCrates(token, withdrawals, currentSeason) {
  var withdrawnBalance = ZERO_BN; // aka "transit"
  var claimableBalance = ZERO_BN; // aka "receivable"
  var withdrawn = []; // aka "transit"
  var claimable = []; // aka "receivable"
  // Split each withdrawal between `receivable` and `transit`.
  Object.keys(withdrawals).forEach(function (season) {
    var amt = toTokenUnitsBN(withdrawals[season].amount.toString(), token.decimals);
    var szn = new BigNumber__default(season);
    if (szn.lte(currentSeason)) {
      claimableBalance = claimableBalance.plus(amt);
      claimable.push({
        amount: amt,
        season: szn
      });
    } else {
      withdrawnBalance = withdrawnBalance.plus(amt);
      withdrawn.push({
        amount: amt,
        season: szn
      });
    }
  });
  return {
    withdrawn: {
      amount: withdrawnBalance,
      crates: withdrawn
    },
    claimable: {
      amount: claimableBalance,
      crates: claimable
    }
  };
};
/**
 * Order crates by Season.
 */
function sortCratesBySeason(crates, direction) {
  if (direction === void 0) {
    direction = 'desc';
  }
  var m = direction === 'asc' ? -1 : 1;
  return [].concat(crates).sort(function (a, b) {
    return m * b.season.minus(a.season).toNumber();
  });
}

var Silo = /*#__PURE__*/function () {
  // public balances: Map<Token, TokenSiloBalance>;
  function Silo(sdk) {
    this._parseWithdrawalCrates = _parseWithdrawalCrates;
    this._createTypedDepositTokenPermitData = function (domain, message) {
      return {
        types: {
          EIP712Domain: Permit.EIP712_DOMAIN,
          Permit: [{
            name: "owner",
            type: "address"
          }, {
            name: "spender",
            type: "address"
          }, {
            name: "token",
            type: "address"
          }, {
            name: "value",
            type: "uint256"
          }, {
            name: "nonce",
            type: "uint256"
          }, {
            name: "deadline",
            type: "uint256"
          }]
        },
        primaryType: "Permit",
        domain: domain,
        message: message
      };
    };
    this._createTypedDepositTokensPermitData = function (domain, message) {
      return {
        types: {
          EIP712Domain: Permit.EIP712_DOMAIN,
          Permit: [{
            name: "owner",
            type: "address"
          }, {
            name: "spender",
            type: "address"
          }, {
            name: "tokens",
            type: "address[]"
          }, {
            name: "values",
            type: "uint256[]"
          }, {
            name: "nonce",
            type: "uint256"
          }, {
            name: "deadline",
            type: "uint256"
          }]
        },
        primaryType: "Permit",
        domain: domain,
        message: message
      };
    };
    Silo.sdk = sdk;
  }
  /**
   *
   * @param _tokenIn The input token, any that we can swap for the whitelisted token
   * @param _amountIn Amount of _tokenIn to convert to _tokenOut and deposit
   * @param _tokenOut The whitelisted Token (BEAN, BEAN3CRV, urBEAN, urBEAN3CRV)
   */
  // public async depositQuote(
  //   _tokenIn: NativeToken | ERC20Token,
  //   _amountIn: BigNumber,
  //   _tokenOut: ERC20Token,
  // ): Promise<{ amountOut: any; steps: any }> {
  //   if (Silo.sdk.tokens.siloWhitelist.has(_tokenOut)) {
  //     throw new Error(`${_tokenOut.symbol} is not a whitelisted token`)
  //   }
  //   const tokenIn: ERC20Token = _tokenIn instanceof NativeToken ? Silo.sdk.tokens.WETH : _tokenIn;
  //   const tokenOut = _tokenOut;
  //   const amountIn = ethers.BigNumber.from(toStringBaseUnitBN(_amountIn, tokenIn.decimals));
  //   let estimate;
  //   // Depositing BEAN
  //   if (tokenOut.equals(Silo.sdk.tokens.BEAN)) {
  //     if (tokenIn.equals(Silo.sdk.tokens.WETH)) {
  //       estimate = await Silo.sdk.farm.estimate(
  //         Silo.sdk.farm.buyBeans(), // this assumes we're coming from WETH
  //         [amountIn]
  //       );
  //     }
  //   }
  //   // Depositing LP Tokens
  //   else {
  //     const pool = Silo.sdk.tokens
  //     if (!pool) throw new Error(`Depositing to ${tokenOut.symbol} but no corresponding pool data found.`);
  //     // This is a Curve MetaPool...
  //     const isMetapool = true;
  //     if (isMetapool) {
  //       // ...and we're depositing one of the underlying pool tokens.
  //       // Ex. for BEAN:3CRV this could be [BEAN, (DAI, USDC, USDT)].
  //       // pool.tokens      = [BEAN, CRV3]
  //       // pool.underlying  = [BEAN, DAI, USDC, USDT]
  //       const tokenIndex = pool.tokens.indexOf(tokenIn);
  //       console.log('TokenIndex: ', tokenIndex);
  //       const underlyingTokenIndex = pool.underlying.indexOf(tokenIn);
  //       console.debug('[Deposit] LP Deposit', {
  //         pool,
  //         tokenIn,
  //         tokenIndex,
  //         underlyingTokenIndex,
  //       });
  //       // This is X or CRV3
  //       if (tokenIndex > -1) {
  //         const indices = [0, 0];
  //         indices[tokenIndex] = 1; // becomes [0, 1] or [1, 0]
  //         console.debug('[Deposit] LP Deposit: indices=', indices);
  //         estimate = await Farm.estimate(
  //           [
  //             farm.addLiquidity(
  //               pool.address,
  //               // FIXME: bean:lusd was a plain pool, bean:eth on curve would be a crypto pool
  //               // perhaps the Curve pool instance needs to track a registry
  //               farm.contracts.curve.registries.metaFactory.address,
  //               // FIXME: find a better way to define this above
  //               indices as [number, number],
  //               optimizeFromMode(_amountIn, balanceIn) // use the BN version here
  //             ),
  //           ],
  //           [amountIn]
  //         );
  //       }
  //       // This is a CRV3-underlying stable (DAI/USDC/USDT etc)
  //       else if (underlyingTokenIndex > -1) {
  //         if (underlyingTokenIndex === 0) throw new Error('Malformatted pool.tokens / pool.underlying');
  //         const indices = [0, 0, 0];
  //         indices[underlyingTokenIndex - 1] = 1;
  //         console.debug('[Deposit] LP Deposit: indices=', indices);
  //         estimate = await Farm.estimate(
  //           [
  //             // Deposit token into 3pool for 3CRV
  //             farm.addLiquidity(
  //               farm.contracts.curve.pools.pool3.address,
  //               farm.contracts.curve.registries.poolRegistry.address,
  //               indices as [number, number, number], // [DAI, USDC, USDT] use Tether from previous call
  //               optimizeFromMode(_amountIn, balanceIn) // use the BN version here
  //             ),
  //             farm.addLiquidity(
  //               pool.address,
  //               farm.contracts.curve.registries.metaFactory.address,
  //               // adding the 3CRV side of liquidity
  //               // FIXME: assuming that 3CRV is the second index (X:3CRV)
  //               // not sure if this is always the case
  //               [0, 1]
  //             ),
  //           ],
  //           [amountIn]
  //         );
  //       }
  //       // This is ETH or WETH
  //       else if (tokenIn === Weth) {
  //         estimate = await Farm.estimate(
  //           [
  //             // FIXME: this assumes the best route from
  //             // WETH to [DAI, USDC, USDT] is via tricrypto2
  //             // swapping to USDT. we should use routing logic here to
  //             // find the best pool and output token.
  //             // --------------------------------------------------
  //             // WETH -> USDT
  //             farm.exchange(
  //               farm.contracts.curve.pools.tricrypto2.address,
  //               farm.contracts.curve.registries.cryptoFactory.address,
  //               Weth.address,
  //               getChainToken(USDT).address,
  //               // The prior step is a ETH->WETH "swap", from which
  //               // we should expect to get an exact amount of WETH.
  //               FarmFromMode.INTERNAL
  //             ),
  //             // USDT -> deposit into pool3 for CRV3
  //             // FIXME: assumes USDT is the third index
  //             farm.addLiquidity(
  //               farm.contracts.curve.pools.pool3.address,
  //               farm.contracts.curve.registries.poolRegistry.address,
  //               [0, 0, 1] // [DAI, USDC, USDT]; use Tether from previous call
  //             ),
  //             // CRV3 -> deposit into right side of X:CRV3
  //             // FIXME: assumes CRV3 is the second index
  //             farm.addLiquidity(
  //               pool.address,
  //               farm.contracts.curve.registries.metaFactory.address,
  //               [0, 1] // [BEAN, CRV3] use CRV3 from previous call
  //             ),
  //           ],
  //           [amountIn]
  //         );
  //       }
  //     }
  //   }
  //   if (!estimate) {
  //     throw new Error(`Depositing ${tokenOut.symbol} to the Silo via ${tokenIn.symbol} is currently unsupported.`);
  //   }
  //   console.debug('[chain] estimate = ', estimate);
  //   return {
  //     amountOut: toTokenUnitsBN(estimate.amountOut.toString(), tokenOut.decimals),
  //     steps: estimate.steps,
  //   };
  // }
  //////////////////////// UTILITIES ////////////////////////
  /**
   * Sort the incoming map so that tokens are ordered in the same order
   * they appear on the Silo Whitelist.
   *
   * @note the Silo Whitelist is sorted by the order in which tokens were
   * whitelisted in Beanstalk. Unclear if the ordering shown on the
   * Beanstalk UI will change at some point in the future.
   */
  var _proto = Silo.prototype;
  _proto._sortTokenMapByWhitelist = function _sortTokenMapByWhitelist(map) {
    var whitelist = Silo.sdk.tokens.siloWhitelist;
    var copy = new Map(map);
    var ordered = new Map();
    // by default, order by whitelist
    whitelist.forEach(function (token) {
      var v = copy.get(token);
      if (v) {
        ordered.set(token, v);
        copy["delete"](token);
      }
    });
    // add remaining tokens
    copy.forEach(function (_, token) {
      ordered.set(token, copy.get(token));
    });
    return ordered;
  }
  //////////////////////// WHITELIST ////////////////////////
  /**
   * Return a list of tokens that are currently whitelisted in the Silo.
   *
   * @todo Check if the subgraph removes `WhitelistToken` entities if a
   *       token is de-whitelisted.
   * @todo Get name, decimals since these are ERC20 tokens.
   */;
  _proto.getWhitelist =
  /*#__PURE__*/
  function () {
    var _getWhitelist = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(options) {
      var source, query;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              source = Silo.sdk.deriveConfig("source", options);
              if (!(source === exports.DataSource.SUBGRAPH)) {
                _context.next = 6;
                break;
              }
              _context.next = 4;
              return Silo.sdk.queries.getSiloWhitelist();
            case 4:
              query = _context.sent;
              return _context.abrupt("return", query.whitelistTokens.map(function (e) {
                return {
                  token: e.token,
                  stalk: parseInt(e.stalk),
                  seeds: parseInt(e.seeds) / 1E4
                };
              }));
            case 6:
              throw new Error("Unsupported source: " + source);
            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    function getWhitelist(_x) {
      return _getWhitelist.apply(this, arguments);
    }
    return getWhitelist;
  }() //////////////////////// BALANCES ////////////////////////
  ;
  _proto._makeTokenSiloBalance = function _makeTokenSiloBalance() {
    return {
      deposited: {
        amount: ZERO_BN,
        bdv: ZERO_BN,
        crates: []
      },
      withdrawn: {
        amount: ZERO_BN,
        crates: []
      },
      claimable: {
        amount: ZERO_BN,
        crates: []
      }
    };
  }
  /**
   * Apply a Deposit to a TokenSiloBalance.
   *
   * @note expects inputs to be stringified (no decimals).
   */;
  _proto._applyDeposit = function _applyDeposit(state, token, rawCrate) {
    var season = new BigNumber.BigNumber(rawCrate.season);
    var amount = toTokenUnitsBN(rawCrate.amount, token.decimals);
    var bdv = toTokenUnitsBN(rawCrate.bdv, Silo.sdk.tokens.BEAN.decimals);
    var crate = {
      season: season,
      amount: amount,
      bdv: bdv,
      stalk: token.getStalk(bdv),
      seeds: token.getSeeds(bdv)
    };
    state.amount = state.amount.plus(amount);
    state.bdv = state.bdv.plus(bdv);
    state.crates.push(crate);
    return crate;
  }
  /**
   * Apply a Deposit to a TokenSiloBalance.
   *
   * @note expects inputs to be stringified (no decimals).
   */;
  _proto._applyWithdrawal = function _applyWithdrawal(state, token, rawCrate) {
    var season = new BigNumber.BigNumber(rawCrate.season);
    var amount = toTokenUnitsBN(rawCrate.amount, token.decimals);
    var crate = {
      season: season,
      amount: amount
    };
    state.amount = state.amount.plus(amount);
    state.crates.push(crate);
    return crate;
  };
  _proto._sortCrates = function _sortCrates(state) {
    state.crates = state.crates.sort(function (a, b) {
      return a.season.minus(b.season).toNumber();
    } // sort by season asc
    );
  }
  /**
   * Return the Farmer's balance of a single whitelisted token.
   */;
  _proto.getBalance =
  /*#__PURE__*/
  function () {
    var _getBalance = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_token, _account, options) {
      var _this = this;
      var source, _yield$Promise$all, account, season, whitelist, balance, seasonBN, events, processor, _processor$ingestAll, deposits, withdrawals, _crates, s, rawCrate, _crates2, _this$_parseWithdrawa, withdrawn, claimable, query, _query$farmer, deposited, _withdrawn, _claimable;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              source = Silo.sdk.deriveConfig("source", options);
              _context2.next = 3;
              return Promise.all([Silo.sdk.getAccount(_account), Silo.sdk.sun.getSeason()]);
            case 3:
              _yield$Promise$all = _context2.sent;
              account = _yield$Promise$all[0];
              season = _yield$Promise$all[1];
              if (Silo.sdk.tokens.siloWhitelist.has(_token)) {
                _context2.next = 8;
                break;
              }
              throw new Error(_token.address + " is not whitelisted in the Silo");
            case 8:
              ///  SETUP
              whitelist = Silo.sdk.tokens.siloWhitelist;
              balance = this._makeTokenSiloBalance();
              if (!(source === exports.DataSource.LEDGER)) {
                _context2.next = 25;
                break;
              }
              // Fetch and process events.
              seasonBN = new BigNumber.BigNumber(season);
              _context2.next = 14;
              return Silo.sdk.events.getSiloEvents(account, _token.address);
            case 14:
              events = _context2.sent;
              processor = new EventProcessor(Silo.sdk, account, {
                season: ethers.ethers.BigNumber.from(season.toString()),
                whitelist: whitelist
              });
              _processor$ingestAll = processor.ingestAll(events), deposits = _processor$ingestAll.deposits, withdrawals = _processor$ingestAll.withdrawals; // Handle deposits
              _crates = deposits.get(_token);
              for (s in _crates) {
                rawCrate = {
                  season: s.toString(),
                  amount: _crates[s].amount.toString(),
                  bdv: _crates[s].bdv.toString()
                }; // Update the total deposited of this token
                // and return a parsed crate object
                this._applyDeposit(balance.deposited, _token, rawCrate);
              }
              this._sortCrates(balance.deposited);
              _crates2 = withdrawals.get(_token);
              if (_crates2) {
                _this$_parseWithdrawa = this._parseWithdrawalCrates(_token, _crates2, seasonBN), withdrawn = _this$_parseWithdrawa.withdrawn, claimable = _this$_parseWithdrawa.claimable;
                balance.withdrawn = withdrawn;
                balance.claimable = claimable;
                this._sortCrates(balance.withdrawn);
                this._sortCrates(balance.claimable);
              }
              return _context2.abrupt("return", balance);
            case 25:
              if (!(source === exports.DataSource.SUBGRAPH)) {
                _context2.next = 36;
                break;
              }
              _context2.next = 28;
              return Silo.sdk.queries.getSiloBalance({
                token: _token.address.toLowerCase(),
                account: account,
                season: season
              });
            case 28:
              query = _context2.sent;
              if (query.farmer) {
                _context2.next = 31;
                break;
              }
              return _context2.abrupt("return", balance);
            case 31:
              _query$farmer = query.farmer, deposited = _query$farmer.deposited, _withdrawn = _query$farmer.withdrawn, _claimable = _query$farmer.claimable;
              deposited.forEach(function (crate) {
                return _this._applyDeposit(balance.deposited, _token, crate);
              });
              _withdrawn.forEach(function (crate) {
                return _this._applyWithdrawal(balance.withdrawn, _token, crate);
              });
              _claimable.forEach(function (crate) {
                return _this._applyWithdrawal(balance.claimable, _token, crate);
              });
              return _context2.abrupt("return", balance);
            case 36:
              throw new Error("Unsupported source: " + source);
            case 37:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    function getBalance(_x2, _x3, _x4) {
      return _getBalance.apply(this, arguments);
    }
    return getBalance;
  }()
  /**
   * Return a Farmer's Silo balances.
   *
   * ```
   * [Token] => {
   *   deposited => { amount, bdv, crates },
   *   withdrawn => { amount, crates },
   *   claimable => { amount, crates }
   * }
   * ```
   *
   * @note EventProcessor requires a known whitelist and returns
   *       an object (possibly empty) for every whitelisted token.
   * @note To process a Deposit, we must know how many Stalk & Seeds
   *       are given to it. If a token is dewhitelisted and removed from
   *       `tokens` (or from the on-chain whitelist)
   * @fixme "deposits" vs "deposited"
   */
  ;
  _proto.getBalances =
  /*#__PURE__*/
  function () {
    var _getBalances = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_account, options) {
      var _this2 = this;
      var source, _yield$Promise$all2, account, season, whitelist, balances, seasonBN, events, processor, _processor$ingestAll2, deposits, withdrawals, query, _query$farmer2, deposited, withdrawn, claimable, prep, handleDeposit, handleWithdrawal;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              source = Silo.sdk.deriveConfig("source", options);
              _context3.next = 3;
              return Promise.all([Silo.sdk.getAccount(_account), Silo.sdk.sun.getSeason()]);
            case 3:
              _yield$Promise$all2 = _context3.sent;
              account = _yield$Promise$all2[0];
              season = _yield$Promise$all2[1];
              /// SETUP
              whitelist = Silo.sdk.tokens.siloWhitelist;
              balances = new Map();
              whitelist.forEach(function (token) {
                return balances.set(token, _this2._makeTokenSiloBalance());
              });
              /// LEDGER
              if (!(source === exports.DataSource.LEDGER)) {
                _context3.next = 19;
                break;
              }
              // Fetch and process events.
              seasonBN = new BigNumber.BigNumber(season);
              _context3.next = 13;
              return Silo.sdk.events.getSiloEvents(account);
            case 13:
              events = _context3.sent;
              processor = new EventProcessor(Silo.sdk, account, {
                season: ethers.ethers.BigNumber.from(season.toString()),
                whitelist: whitelist
              });
              _processor$ingestAll2 = processor.ingestAll(events), deposits = _processor$ingestAll2.deposits, withdrawals = _processor$ingestAll2.withdrawals; // Handle deposits.
              // Attach stalk & seed counts for each crate.
              deposits.forEach(function (_crates, token) {
                if (!balances.has(token)) {
                  balances.set(token, _this2._makeTokenSiloBalance());
                }
                var state = balances.get(token).deposited;
                for (var s in _crates) {
                  var rawCrate = {
                    season: s.toString(),
                    amount: _crates[s].amount.toString(),
                    bdv: _crates[s].bdv.toString()
                  };
                  // Update the total deposited of this token
                  // and return a parsed crate object
                  _this2._applyDeposit(state, token, rawCrate);
                }
                _this2._sortCrates(state);
              });
              // Handle withdrawals.
              // Split crates into withdrawn and claimable.
              withdrawals.forEach(function (_crates, token) {
                if (!balances.has(token)) {
                  balances.set(token, _this2._makeTokenSiloBalance());
                }
                //
                var _this2$_parseWithdraw = _this2._parseWithdrawalCrates(token, _crates, seasonBN),
                  withdrawn = _this2$_parseWithdraw.withdrawn,
                  claimable = _this2$_parseWithdraw.claimable;
                var tokenBalance = balances.get(token);
                tokenBalance.withdrawn = withdrawn;
                tokenBalance.claimable = claimable;
                _this2._sortCrates(tokenBalance.withdrawn);
                _this2._sortCrates(tokenBalance.claimable);
              });
              return _context3.abrupt("return", this._sortTokenMapByWhitelist(balances));
            case 19:
              if (!(source === exports.DataSource.SUBGRAPH)) {
                _context3.next = 33;
                break;
              }
              _context3.next = 22;
              return Silo.sdk.queries.getSiloBalances({
                account: account,
                season: season
              });
            case 22:
              query = _context3.sent;
              if (query.farmer) {
                _context3.next = 25;
                break;
              }
              return _context3.abrupt("return", balances);
            case 25:
              _query$farmer2 = query.farmer, deposited = _query$farmer2.deposited, withdrawn = _query$farmer2.withdrawn, claimable = _query$farmer2.claimable; // Lookup token by address and create a TokenSiloBalance entity.
              prep = function prep(address) {
                var token = Silo.sdk.tokens.findByAddress(address);
                if (!token) return; // FIXME: unknown token handling
                if (!balances.has(token)) balances.set(token, _this2._makeTokenSiloBalance());
                return token;
              };
              handleDeposit = function handleDeposit(crate) {
                var token = prep(crate.token);
                if (!token) return;
                var state = balances.get(token).deposited;
                _this2._applyDeposit(state, token, crate);
              };
              handleWithdrawal = function handleWithdrawal(key) {
                return function (crate) {
                  var token = prep(crate.token);
                  if (!token) return;
                  var state = balances.get(token)[key];
                  _this2._applyWithdrawal(state, token, crate);
                };
              };
              deposited.forEach(handleDeposit);
              withdrawn.forEach(handleWithdrawal('withdrawn'));
              claimable.forEach(handleWithdrawal('claimable'));
              return _context3.abrupt("return", this._sortTokenMapByWhitelist(balances));
            case 33:
              throw new Error("Unsupported source: " + source);
            case 34:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    function getBalances(_x5, _x6) {
      return _getBalances.apply(this, arguments);
    }
    return getBalances;
  }() //////////////////////// Crates ////////////////////////
  ;
  _proto.pickCrates = function pickCrates(crates, token, amount, sort) {
    if (sort === void 0) {
      sort = function sort(crates) {
        return sortCratesBySeason(crates, 'desc');
      };
    }
    var sortedCrates = sort(crates);
    var seasons = [];
    var amounts = [];
    var remaining = new BigNumber.BigNumber(amount);
    sortedCrates.some(function (crate) {
      var thisAmount = crate.amount.gt(remaining) ? crate.amount.minus(remaining) : crate.amount;
      seasons.push(crate.season.toString());
      amounts.push(token.stringify(thisAmount));
      remaining = remaining.minus(thisAmount);
      return remaining.eq(0); // done
    });

    if (!remaining.eq(0)) throw new Error('Not enough amount in crates');
    return {
      seasons: seasons,
      amounts: amounts
    };
  }
  //////////////////////// ACTION: Deposit ////////////////////////
  // public deposit = wrapped(Silo.sdk.contracts.beanstalk, 'deposit')
  // $deposit = Silo.sdk.contracts.beanstalk.deposit;
  // $plant = Silo.sdk.contracts.beanstalk.plant;
  // $update = Silo.sdk.contracts.beanstalk.update;
  // $lastUpdate = Silo.sdk.contracts.beanstalk.lastUpdate;
  //////////////////////// Permits ////////////////////////
  /**
   * Created typed permit data to authorize `spender` to transfer
   * the `owner`'s deposit balance of `token`.
   *
   * @fixme `permitDepositToken` -> `getPermitForToken`
   *
   * @param owner the Farmer whose Silo deposit can be transferred
   * @param spender the account authorized to make a transfer
   * @param token the whitelisted token that can be transferred
   * @param value the amount of the token that can be transferred
   * @param _nonce a nonce to include when signing permit.
   * Defaults to `beanstalk.depositPermitNonces(owner)`.
   * @param _deadline the permit deadline.
   * Defaults to `MAX_UINT256` (effectively no deadline).
   * @returns typed permit data. This can be signed with `sdk.permit.sign()`.
   */;
  _proto.permitDepositToken =
  /*#__PURE__*/
  function () {
    var _permitDepositToken = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(owner, spender, token, value, _nonce, _deadline) {
      var deadline, _yield$Promise$all3, domain, nonce;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              deadline = _deadline || MAX_UINT256;
              _context4.next = 3;
              return Promise.all([this._getEIP712Domain(), _nonce || Silo.sdk.contracts.beanstalk.depositPermitNonces(owner).then(function (nonce) {
                return nonce.toString();
              })]);
            case 3:
              _yield$Promise$all3 = _context4.sent;
              domain = _yield$Promise$all3[0];
              nonce = _yield$Promise$all3[1];
              return _context4.abrupt("return", this._createTypedDepositTokenPermitData(domain, {
                owner: owner,
                spender: spender,
                token: token,
                value: value,
                nonce: nonce,
                deadline: deadline
              }));
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
    function permitDepositToken(_x7, _x8, _x9, _x10, _x11, _x12) {
      return _permitDepositToken.apply(this, arguments);
    }
    return permitDepositToken;
  }()
  /**
   * Created typed permit data to authorize `spender` to transfer
   * the `owner`'s deposit balance of `tokens`.
   *
   * @fixme `permitDepositTokens` -> `getPermitForTokens`
   *
   * @param owner the Farmer whose Silo deposit can be transferred
   * @param spender the account authorized to make a transfer
   * @param tokens the whitelisted tokens that can be transferred.
   * @param values the amount of each token in `tokens` that can be transferred.
   * `values[0]` = how much of `tokens[0]` can be transferred, etc.
   * @param _nonce a nonce to include when signing permit.
   * Defaults to `beanstalk.depositPermitNonces(owner)`.
   * @param _deadline the permit deadline.
   * Defaults to `MAX_UINT256` (effectively no deadline).
   * @returns typed permit data. This can be signed with `sdk.permit.sign()`.
   */
  ;
  _proto.permitDepositTokens =
  /*#__PURE__*/
  function () {
    var _permitDepositTokens = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(owner, spender, tokens, values, _nonce, _deadline) {
      var deadline, _yield$Promise$all4, domain, nonce;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(tokens.length !== values.length)) {
                _context5.next = 2;
                break;
              }
              throw new Error('Input mismatch: number of tokens does not equal number of values');
            case 2:
              if (tokens.length === 1) console.warn('Optimization: use permitDepositToken when permitting one Silo Token.');
              deadline = _deadline || MAX_UINT256;
              _context5.next = 6;
              return Promise.all([this._getEIP712Domain(), _nonce || Silo.sdk.contracts.beanstalk.depositPermitNonces(owner).then(function (nonce) {
                return nonce.toString();
              })]);
            case 6:
              _yield$Promise$all4 = _context5.sent;
              domain = _yield$Promise$all4[0];
              nonce = _yield$Promise$all4[1];
              return _context5.abrupt("return", this._createTypedDepositTokensPermitData(domain, {
                owner: owner,
                spender: spender,
                tokens: tokens,
                values: values,
                nonce: nonce,
                deadline: deadline
              }));
            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
    function permitDepositTokens(_x13, _x14, _x15, _x16, _x17, _x18) {
      return _permitDepositTokens.apply(this, arguments);
    }
    return permitDepositTokens;
  }()
  /**
   * Get the EIP-712 domain for the Silo.
   * @note applies to both `depositToken` and `depositTokens` permits.
   */
  ;
  _proto._getEIP712Domain =
  /*#__PURE__*/
  function () {
    var _getEIP712Domain2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", {
                name: "SiloDeposit",
                version: "1",
                // FIXME: switch to below after protocol patch
                // chainId: (await Silo.sdk.provider.getNetwork()).chainId,
                chainId: 1,
                verifyingContract: "0xc1e088fc1323b20bcbee9bd1b9fc9546db5624c5"
              });
            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    function _getEIP712Domain() {
      return _getEIP712Domain2.apply(this, arguments);
    }
    return _getEIP712Domain;
  }();
  return Silo;
}();
Silo.sdk = void 0;

var Sun = /*#__PURE__*/function () {
  function Sun(sdk) {
    Sun.sdk = sdk;
  }
  var _proto = Sun.prototype;
  _proto.getSeason = /*#__PURE__*/function () {
    var _getSeason = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", Sun.sdk.contracts.beanstalk.season());
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    function getSeason() {
      return _getSeason.apply(this, arguments);
    }
    return getSeason;
  }();
  return Sun;
}();
Sun.sdk = void 0;

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var AddDeposit_OrderBy;
(function (AddDeposit_OrderBy) {
  AddDeposit_OrderBy["Account"] = "account";
  AddDeposit_OrderBy["Amount"] = "amount";
  AddDeposit_OrderBy["Bdv"] = "bdv";
  AddDeposit_OrderBy["BlockNumber"] = "blockNumber";
  AddDeposit_OrderBy["Hash"] = "hash";
  AddDeposit_OrderBy["Id"] = "id";
  AddDeposit_OrderBy["LogIndex"] = "logIndex";
  AddDeposit_OrderBy["Protocol"] = "protocol";
  AddDeposit_OrderBy["Season"] = "season";
  AddDeposit_OrderBy["Timestamp"] = "timestamp";
  AddDeposit_OrderBy["Token"] = "token";
})(AddDeposit_OrderBy || (AddDeposit_OrderBy = {}));
var Beanstalk_OrderBy;
(function (Beanstalk_OrderBy) {
  Beanstalk_OrderBy["ActiveFarmers"] = "activeFarmers";
  Beanstalk_OrderBy["FarmersToUpdate"] = "farmersToUpdate";
  Beanstalk_OrderBy["Field"] = "field";
  Beanstalk_OrderBy["Id"] = "id";
  Beanstalk_OrderBy["LastSeason"] = "lastSeason";
  Beanstalk_OrderBy["LastUpgrade"] = "lastUpgrade";
  Beanstalk_OrderBy["MethodologyVersion"] = "methodologyVersion";
  Beanstalk_OrderBy["Name"] = "name";
  Beanstalk_OrderBy["Network"] = "network";
  Beanstalk_OrderBy["SchemaVersion"] = "schemaVersion";
  Beanstalk_OrderBy["Seasons"] = "seasons";
  Beanstalk_OrderBy["Silo"] = "silo";
  Beanstalk_OrderBy["Slug"] = "slug";
  Beanstalk_OrderBy["SubgraphVersion"] = "subgraphVersion";
})(Beanstalk_OrderBy || (Beanstalk_OrderBy = {}));
var Chop_OrderBy;
(function (Chop_OrderBy) {
  Chop_OrderBy["Amount"] = "amount";
  Chop_OrderBy["BlockNumber"] = "blockNumber";
  Chop_OrderBy["Farmer"] = "farmer";
  Chop_OrderBy["Hash"] = "hash";
  Chop_OrderBy["Id"] = "id";
  Chop_OrderBy["LogIndex"] = "logIndex";
  Chop_OrderBy["Protocol"] = "protocol";
  Chop_OrderBy["Timestamp"] = "timestamp";
  Chop_OrderBy["Underlying"] = "underlying";
  Chop_OrderBy["Unripe"] = "unripe";
})(Chop_OrderBy || (Chop_OrderBy = {}));
var DewhitelistToken_OrderBy;
(function (DewhitelistToken_OrderBy) {
  DewhitelistToken_OrderBy["BlockNumber"] = "blockNumber";
  DewhitelistToken_OrderBy["Hash"] = "hash";
  DewhitelistToken_OrderBy["Id"] = "id";
  DewhitelistToken_OrderBy["LogIndex"] = "logIndex";
  DewhitelistToken_OrderBy["Protocol"] = "protocol";
  DewhitelistToken_OrderBy["Timestamp"] = "timestamp";
  DewhitelistToken_OrderBy["Token"] = "token";
})(DewhitelistToken_OrderBy || (DewhitelistToken_OrderBy = {}));
var Event_OrderBy;
(function (Event_OrderBy) {
  Event_OrderBy["BlockNumber"] = "blockNumber";
  Event_OrderBy["Hash"] = "hash";
  Event_OrderBy["Id"] = "id";
  Event_OrderBy["LogIndex"] = "logIndex";
  Event_OrderBy["Protocol"] = "protocol";
  Event_OrderBy["Timestamp"] = "timestamp";
})(Event_OrderBy || (Event_OrderBy = {}));
var Farmer_OrderBy;
(function (Farmer_OrderBy) {
  Farmer_OrderBy["Deposits"] = "deposits";
  Farmer_OrderBy["Fertilizers"] = "fertilizers";
  Farmer_OrderBy["Field"] = "field";
  Farmer_OrderBy["Id"] = "id";
  Farmer_OrderBy["Listings"] = "listings";
  Farmer_OrderBy["Orders"] = "orders";
  Farmer_OrderBy["Plots"] = "plots";
  Farmer_OrderBy["Silo"] = "silo";
  Farmer_OrderBy["Sown"] = "sown";
  Farmer_OrderBy["Withdraws"] = "withdraws";
})(Farmer_OrderBy || (Farmer_OrderBy = {}));
var FertilizerBalance_OrderBy;
(function (FertilizerBalance_OrderBy) {
  FertilizerBalance_OrderBy["Amount"] = "amount";
  FertilizerBalance_OrderBy["Farmer"] = "farmer";
  FertilizerBalance_OrderBy["FertilizerToken"] = "fertilizerToken";
  FertilizerBalance_OrderBy["Id"] = "id";
})(FertilizerBalance_OrderBy || (FertilizerBalance_OrderBy = {}));
var FertilizerToken_OrderBy;
(function (FertilizerToken_OrderBy) {
  FertilizerToken_OrderBy["Balances"] = "balances";
  FertilizerToken_OrderBy["EndBpf"] = "endBpf";
  FertilizerToken_OrderBy["Fertilizer"] = "fertilizer";
  FertilizerToken_OrderBy["Humidity"] = "humidity";
  FertilizerToken_OrderBy["Id"] = "id";
  FertilizerToken_OrderBy["Season"] = "season";
  FertilizerToken_OrderBy["StartBpf"] = "startBpf";
  FertilizerToken_OrderBy["Supply"] = "supply";
})(FertilizerToken_OrderBy || (FertilizerToken_OrderBy = {}));
var Fertilizer_OrderBy;
(function (Fertilizer_OrderBy) {
  Fertilizer_OrderBy["Id"] = "id";
  Fertilizer_OrderBy["Tokens"] = "tokens";
  Fertilizer_OrderBy["TotalSupply"] = "totalSupply";
})(Fertilizer_OrderBy || (Fertilizer_OrderBy = {}));
var FieldDailySnapshot_OrderBy;
(function (FieldDailySnapshot_OrderBy) {
  FieldDailySnapshot_OrderBy["BlockNumber"] = "blockNumber";
  FieldDailySnapshot_OrderBy["Field"] = "field";
  FieldDailySnapshot_OrderBy["Id"] = "id";
  FieldDailySnapshot_OrderBy["LastUpdated"] = "lastUpdated";
  FieldDailySnapshot_OrderBy["NewHarvestablePods"] = "newHarvestablePods";
  FieldDailySnapshot_OrderBy["NewHarvestedPods"] = "newHarvestedPods";
  FieldDailySnapshot_OrderBy["NewPods"] = "newPods";
  FieldDailySnapshot_OrderBy["NewSoil"] = "newSoil";
  FieldDailySnapshot_OrderBy["NumberOfSowers"] = "numberOfSowers";
  FieldDailySnapshot_OrderBy["NumberOfSows"] = "numberOfSows";
  FieldDailySnapshot_OrderBy["PodIndex"] = "podIndex";
  FieldDailySnapshot_OrderBy["PodRate"] = "podRate";
  FieldDailySnapshot_OrderBy["RealRateOfReturn"] = "realRateOfReturn";
  FieldDailySnapshot_OrderBy["Season"] = "season";
  FieldDailySnapshot_OrderBy["SownBeans"] = "sownBeans";
  FieldDailySnapshot_OrderBy["Timestamp"] = "timestamp";
  FieldDailySnapshot_OrderBy["TotalHarvestablePods"] = "totalHarvestablePods";
  FieldDailySnapshot_OrderBy["TotalHarvestedPods"] = "totalHarvestedPods";
  FieldDailySnapshot_OrderBy["TotalNumberOfSowers"] = "totalNumberOfSowers";
  FieldDailySnapshot_OrderBy["TotalNumberOfSows"] = "totalNumberOfSows";
  FieldDailySnapshot_OrderBy["TotalPods"] = "totalPods";
  FieldDailySnapshot_OrderBy["TotalSoil"] = "totalSoil";
  FieldDailySnapshot_OrderBy["TotalSownBeans"] = "totalSownBeans";
  FieldDailySnapshot_OrderBy["Weather"] = "weather";
})(FieldDailySnapshot_OrderBy || (FieldDailySnapshot_OrderBy = {}));
var FieldEvent_OrderBy;
(function (FieldEvent_OrderBy) {
  FieldEvent_OrderBy["BlockNumber"] = "blockNumber";
  FieldEvent_OrderBy["Hash"] = "hash";
  FieldEvent_OrderBy["Id"] = "id";
  FieldEvent_OrderBy["LogIndex"] = "logIndex";
  FieldEvent_OrderBy["Protocol"] = "protocol";
  FieldEvent_OrderBy["Timestamp"] = "timestamp";
})(FieldEvent_OrderBy || (FieldEvent_OrderBy = {}));
var FieldHourlySnapshot_OrderBy;
(function (FieldHourlySnapshot_OrderBy) {
  FieldHourlySnapshot_OrderBy["BlockNumber"] = "blockNumber";
  FieldHourlySnapshot_OrderBy["BlocksToSoldOutSoil"] = "blocksToSoldOutSoil";
  FieldHourlySnapshot_OrderBy["Field"] = "field";
  FieldHourlySnapshot_OrderBy["Id"] = "id";
  FieldHourlySnapshot_OrderBy["LastUpdated"] = "lastUpdated";
  FieldHourlySnapshot_OrderBy["NewHarvestablePods"] = "newHarvestablePods";
  FieldHourlySnapshot_OrderBy["NewHarvestedPods"] = "newHarvestedPods";
  FieldHourlySnapshot_OrderBy["NewPods"] = "newPods";
  FieldHourlySnapshot_OrderBy["NewSoil"] = "newSoil";
  FieldHourlySnapshot_OrderBy["NumberOfSowers"] = "numberOfSowers";
  FieldHourlySnapshot_OrderBy["NumberOfSows"] = "numberOfSows";
  FieldHourlySnapshot_OrderBy["PodIndex"] = "podIndex";
  FieldHourlySnapshot_OrderBy["PodRate"] = "podRate";
  FieldHourlySnapshot_OrderBy["RealRateOfReturn"] = "realRateOfReturn";
  FieldHourlySnapshot_OrderBy["Season"] = "season";
  FieldHourlySnapshot_OrderBy["SoilSoldOut"] = "soilSoldOut";
  FieldHourlySnapshot_OrderBy["SownBeans"] = "sownBeans";
  FieldHourlySnapshot_OrderBy["Timestamp"] = "timestamp";
  FieldHourlySnapshot_OrderBy["TotalHarvestablePods"] = "totalHarvestablePods";
  FieldHourlySnapshot_OrderBy["TotalHarvestedPods"] = "totalHarvestedPods";
  FieldHourlySnapshot_OrderBy["TotalNumberOfSowers"] = "totalNumberOfSowers";
  FieldHourlySnapshot_OrderBy["TotalNumberOfSows"] = "totalNumberOfSows";
  FieldHourlySnapshot_OrderBy["TotalPods"] = "totalPods";
  FieldHourlySnapshot_OrderBy["TotalSoil"] = "totalSoil";
  FieldHourlySnapshot_OrderBy["TotalSownBeans"] = "totalSownBeans";
  FieldHourlySnapshot_OrderBy["Weather"] = "weather";
})(FieldHourlySnapshot_OrderBy || (FieldHourlySnapshot_OrderBy = {}));
var Field_OrderBy;
(function (Field_OrderBy) {
  Field_OrderBy["Beanstalk"] = "beanstalk";
  Field_OrderBy["DailySnapshots"] = "dailySnapshots";
  Field_OrderBy["Farmer"] = "farmer";
  Field_OrderBy["HourlySnapshots"] = "hourlySnapshots";
  Field_OrderBy["Id"] = "id";
  Field_OrderBy["PlotIndexes"] = "plotIndexes";
  Field_OrderBy["PodIndex"] = "podIndex";
  Field_OrderBy["PodRate"] = "podRate";
  Field_OrderBy["RealRateOfReturn"] = "realRateOfReturn";
  Field_OrderBy["Season"] = "season";
  Field_OrderBy["TotalHarvestablePods"] = "totalHarvestablePods";
  Field_OrderBy["TotalHarvestedPods"] = "totalHarvestedPods";
  Field_OrderBy["TotalNumberOfSowers"] = "totalNumberOfSowers";
  Field_OrderBy["TotalNumberOfSows"] = "totalNumberOfSows";
  Field_OrderBy["TotalPods"] = "totalPods";
  Field_OrderBy["TotalSoil"] = "totalSoil";
  Field_OrderBy["TotalSownBeans"] = "totalSownBeans";
  Field_OrderBy["Weather"] = "weather";
})(Field_OrderBy || (Field_OrderBy = {}));
var Harvest_OrderBy;
(function (Harvest_OrderBy) {
  Harvest_OrderBy["Beans"] = "beans";
  Harvest_OrderBy["BlockNumber"] = "blockNumber";
  Harvest_OrderBy["Farmer"] = "farmer";
  Harvest_OrderBy["Hash"] = "hash";
  Harvest_OrderBy["Id"] = "id";
  Harvest_OrderBy["LogIndex"] = "logIndex";
  Harvest_OrderBy["Plots"] = "plots";
  Harvest_OrderBy["Protocol"] = "protocol";
  Harvest_OrderBy["Timestamp"] = "timestamp";
})(Harvest_OrderBy || (Harvest_OrderBy = {}));
var Incentive_OrderBy;
(function (Incentive_OrderBy) {
  Incentive_OrderBy["Amount"] = "amount";
  Incentive_OrderBy["BlockNumber"] = "blockNumber";
  Incentive_OrderBy["Caller"] = "caller";
  Incentive_OrderBy["Hash"] = "hash";
  Incentive_OrderBy["Id"] = "id";
  Incentive_OrderBy["LogIndex"] = "logIndex";
  Incentive_OrderBy["Protocol"] = "protocol";
  Incentive_OrderBy["Timestamp"] = "timestamp";
})(Incentive_OrderBy || (Incentive_OrderBy = {}));
var MarketStatus;
(function (MarketStatus) {
  MarketStatus["Active"] = "ACTIVE";
  MarketStatus["Cancelled"] = "CANCELLED";
  MarketStatus["CancelledPartial"] = "CANCELLED_PARTIAL";
  MarketStatus["Expired"] = "EXPIRED";
  MarketStatus["Filled"] = "FILLED";
  MarketStatus["FilledPartial"] = "FILLED_PARTIAL";
})(MarketStatus || (MarketStatus = {}));
var MarketplaceEvent_OrderBy;
(function (MarketplaceEvent_OrderBy) {
  MarketplaceEvent_OrderBy["BlockNumber"] = "blockNumber";
  MarketplaceEvent_OrderBy["Hash"] = "hash";
  MarketplaceEvent_OrderBy["Id"] = "id";
  MarketplaceEvent_OrderBy["LogIndex"] = "logIndex";
  MarketplaceEvent_OrderBy["Protocol"] = "protocol";
  MarketplaceEvent_OrderBy["Timestamp"] = "timestamp";
})(MarketplaceEvent_OrderBy || (MarketplaceEvent_OrderBy = {}));
var MetapoolOracle_OrderBy;
(function (MetapoolOracle_OrderBy) {
  MetapoolOracle_OrderBy["BalanceA"] = "balanceA";
  MetapoolOracle_OrderBy["BalanceB"] = "balanceB";
  MetapoolOracle_OrderBy["BlockNumber"] = "blockNumber";
  MetapoolOracle_OrderBy["DeltaB"] = "deltaB";
  MetapoolOracle_OrderBy["Hash"] = "hash";
  MetapoolOracle_OrderBy["Id"] = "id";
  MetapoolOracle_OrderBy["LogIndex"] = "logIndex";
  MetapoolOracle_OrderBy["Protocol"] = "protocol";
  MetapoolOracle_OrderBy["Season"] = "season";
  MetapoolOracle_OrderBy["Timestamp"] = "timestamp";
})(MetapoolOracle_OrderBy || (MetapoolOracle_OrderBy = {}));
var Network;
(function (Network) {
  Network["ArbitrumOne"] = "ARBITRUM_ONE";
  Network["ArweaveMainnet"] = "ARWEAVE_MAINNET";
  Network["Aurora"] = "AURORA";
  Network["Avalanche"] = "AVALANCHE";
  Network["Boba"] = "BOBA";
  Network["Bsc"] = "BSC";
  Network["Celo"] = "CELO";
  Network["Cosmos"] = "COSMOS";
  Network["Cronos"] = "CRONOS";
  Network["Fantom"] = "FANTOM";
  Network["Fuse"] = "FUSE";
  Network["Harmony"] = "HARMONY";
  Network["Juno"] = "JUNO";
  Network["Mainnet"] = "MAINNET";
  Network["Matic"] = "MATIC";
  Network["Moonbeam"] = "MOONBEAM";
  Network["Moonriver"] = "MOONRIVER";
  Network["NearMainnet"] = "NEAR_MAINNET";
  Network["Optimism"] = "OPTIMISM";
  Network["Osmosis"] = "OSMOSIS";
  Network["Xdai"] = "XDAI";
})(Network || (Network = {}));
/** Defines the order direction, either ascending or descending */
var OrderDirection;
(function (OrderDirection) {
  OrderDirection["Asc"] = "asc";
  OrderDirection["Desc"] = "desc";
})(OrderDirection || (OrderDirection = {}));
var Plot_OrderBy;
(function (Plot_OrderBy) {
  Plot_OrderBy["Beans"] = "beans";
  Plot_OrderBy["CreatedAt"] = "createdAt";
  Plot_OrderBy["CreationHash"] = "creationHash";
  Plot_OrderBy["Farmer"] = "farmer";
  Plot_OrderBy["Field"] = "field";
  Plot_OrderBy["FullyHarvested"] = "fullyHarvested";
  Plot_OrderBy["HarvestablePods"] = "harvestablePods";
  Plot_OrderBy["HarvestedPods"] = "harvestedPods";
  Plot_OrderBy["Id"] = "id";
  Plot_OrderBy["Index"] = "index";
  Plot_OrderBy["Listing"] = "listing";
  Plot_OrderBy["Pods"] = "pods";
  Plot_OrderBy["Season"] = "season";
  Plot_OrderBy["Source"] = "source";
  Plot_OrderBy["SownPods"] = "sownPods";
  Plot_OrderBy["UpdatedAt"] = "updatedAt";
  Plot_OrderBy["Weather"] = "weather";
})(Plot_OrderBy || (Plot_OrderBy = {}));
var PodFill_OrderBy;
(function (PodFill_OrderBy) {
  PodFill_OrderBy["Amount"] = "amount";
  PodFill_OrderBy["CreatedAt"] = "createdAt";
  PodFill_OrderBy["From"] = "from";
  PodFill_OrderBy["Id"] = "id";
  PodFill_OrderBy["Index"] = "index";
  PodFill_OrderBy["Listing"] = "listing";
  PodFill_OrderBy["Order"] = "order";
  PodFill_OrderBy["PodMarketplace"] = "podMarketplace";
  PodFill_OrderBy["Start"] = "start";
  PodFill_OrderBy["To"] = "to";
})(PodFill_OrderBy || (PodFill_OrderBy = {}));
var PodListingCancelled_OrderBy;
(function (PodListingCancelled_OrderBy) {
  PodListingCancelled_OrderBy["Account"] = "account";
  PodListingCancelled_OrderBy["BlockNumber"] = "blockNumber";
  PodListingCancelled_OrderBy["Hash"] = "hash";
  PodListingCancelled_OrderBy["HistoryId"] = "historyID";
  PodListingCancelled_OrderBy["Id"] = "id";
  PodListingCancelled_OrderBy["Index"] = "index";
  PodListingCancelled_OrderBy["LogIndex"] = "logIndex";
  PodListingCancelled_OrderBy["Protocol"] = "protocol";
  PodListingCancelled_OrderBy["Timestamp"] = "timestamp";
})(PodListingCancelled_OrderBy || (PodListingCancelled_OrderBy = {}));
var PodListingCreated_OrderBy;
(function (PodListingCreated_OrderBy) {
  PodListingCreated_OrderBy["Account"] = "account";
  PodListingCreated_OrderBy["Amount"] = "amount";
  PodListingCreated_OrderBy["BlockNumber"] = "blockNumber";
  PodListingCreated_OrderBy["Hash"] = "hash";
  PodListingCreated_OrderBy["HistoryId"] = "historyID";
  PodListingCreated_OrderBy["Id"] = "id";
  PodListingCreated_OrderBy["Index"] = "index";
  PodListingCreated_OrderBy["LogIndex"] = "logIndex";
  PodListingCreated_OrderBy["MaxHarvestableIndex"] = "maxHarvestableIndex";
  PodListingCreated_OrderBy["Mode"] = "mode";
  PodListingCreated_OrderBy["PricePerPod"] = "pricePerPod";
  PodListingCreated_OrderBy["Protocol"] = "protocol";
  PodListingCreated_OrderBy["Start"] = "start";
  PodListingCreated_OrderBy["Timestamp"] = "timestamp";
})(PodListingCreated_OrderBy || (PodListingCreated_OrderBy = {}));
var PodListingFilled_OrderBy;
(function (PodListingFilled_OrderBy) {
  PodListingFilled_OrderBy["Amount"] = "amount";
  PodListingFilled_OrderBy["BlockNumber"] = "blockNumber";
  PodListingFilled_OrderBy["From"] = "from";
  PodListingFilled_OrderBy["Hash"] = "hash";
  PodListingFilled_OrderBy["HistoryId"] = "historyID";
  PodListingFilled_OrderBy["Id"] = "id";
  PodListingFilled_OrderBy["Index"] = "index";
  PodListingFilled_OrderBy["LogIndex"] = "logIndex";
  PodListingFilled_OrderBy["Protocol"] = "protocol";
  PodListingFilled_OrderBy["Start"] = "start";
  PodListingFilled_OrderBy["Timestamp"] = "timestamp";
  PodListingFilled_OrderBy["To"] = "to";
})(PodListingFilled_OrderBy || (PodListingFilled_OrderBy = {}));
var PodListing_OrderBy;
(function (PodListing_OrderBy) {
  PodListing_OrderBy["Amount"] = "amount";
  PodListing_OrderBy["CancelledAmount"] = "cancelledAmount";
  PodListing_OrderBy["CreatedAt"] = "createdAt";
  PodListing_OrderBy["Farmer"] = "farmer";
  PodListing_OrderBy["Fill"] = "fill";
  PodListing_OrderBy["FilledAmount"] = "filledAmount";
  PodListing_OrderBy["HistoryId"] = "historyID";
  PodListing_OrderBy["Id"] = "id";
  PodListing_OrderBy["Index"] = "index";
  PodListing_OrderBy["MaxHarvestableIndex"] = "maxHarvestableIndex";
  PodListing_OrderBy["Mode"] = "mode";
  PodListing_OrderBy["OriginalIndex"] = "originalIndex";
  PodListing_OrderBy["Plot"] = "plot";
  PodListing_OrderBy["PricePerPod"] = "pricePerPod";
  PodListing_OrderBy["RemainingAmount"] = "remainingAmount";
  PodListing_OrderBy["Start"] = "start";
  PodListing_OrderBy["Status"] = "status";
  PodListing_OrderBy["TotalAmount"] = "totalAmount";
  PodListing_OrderBy["TotalFilled"] = "totalFilled";
  PodListing_OrderBy["UpdatedAt"] = "updatedAt";
})(PodListing_OrderBy || (PodListing_OrderBy = {}));
var PodMarketplaceDailySnapshot_OrderBy;
(function (PodMarketplaceDailySnapshot_OrderBy) {
  PodMarketplaceDailySnapshot_OrderBy["BlockNumber"] = "blockNumber";
  PodMarketplaceDailySnapshot_OrderBy["Id"] = "id";
  PodMarketplaceDailySnapshot_OrderBy["NewBeanVolume"] = "newBeanVolume";
  PodMarketplaceDailySnapshot_OrderBy["NewOrdersCancelled"] = "newOrdersCancelled";
  PodMarketplaceDailySnapshot_OrderBy["NewOrdersCreated"] = "newOrdersCreated";
  PodMarketplaceDailySnapshot_OrderBy["NewOrdersFilled"] = "newOrdersFilled";
  PodMarketplaceDailySnapshot_OrderBy["NewPodVolume"] = "newPodVolume";
  PodMarketplaceDailySnapshot_OrderBy["NewPodsAvailable"] = "newPodsAvailable";
  PodMarketplaceDailySnapshot_OrderBy["NewPodsCancelled"] = "newPodsCancelled";
  PodMarketplaceDailySnapshot_OrderBy["NewPodsExpired"] = "newPodsExpired";
  PodMarketplaceDailySnapshot_OrderBy["NewPodsFilled"] = "newPodsFilled";
  PodMarketplaceDailySnapshot_OrderBy["NewPodsListed"] = "newPodsListed";
  PodMarketplaceDailySnapshot_OrderBy["PodMarketplace"] = "podMarketplace";
  PodMarketplaceDailySnapshot_OrderBy["Season"] = "season";
  PodMarketplaceDailySnapshot_OrderBy["Timestamp"] = "timestamp";
  PodMarketplaceDailySnapshot_OrderBy["TotalBeanVolume"] = "totalBeanVolume";
  PodMarketplaceDailySnapshot_OrderBy["TotalOrdersCancelled"] = "totalOrdersCancelled";
  PodMarketplaceDailySnapshot_OrderBy["TotalOrdersCreated"] = "totalOrdersCreated";
  PodMarketplaceDailySnapshot_OrderBy["TotalOrdersFilled"] = "totalOrdersFilled";
  PodMarketplaceDailySnapshot_OrderBy["TotalPodVolume"] = "totalPodVolume";
  PodMarketplaceDailySnapshot_OrderBy["TotalPodsAvailable"] = "totalPodsAvailable";
  PodMarketplaceDailySnapshot_OrderBy["TotalPodsCancelled"] = "totalPodsCancelled";
  PodMarketplaceDailySnapshot_OrderBy["TotalPodsExpired"] = "totalPodsExpired";
  PodMarketplaceDailySnapshot_OrderBy["TotalPodsFilled"] = "totalPodsFilled";
  PodMarketplaceDailySnapshot_OrderBy["TotalPodsListed"] = "totalPodsListed";
})(PodMarketplaceDailySnapshot_OrderBy || (PodMarketplaceDailySnapshot_OrderBy = {}));
var PodMarketplaceHourlySnapshot_OrderBy;
(function (PodMarketplaceHourlySnapshot_OrderBy) {
  PodMarketplaceHourlySnapshot_OrderBy["BlockNumber"] = "blockNumber";
  PodMarketplaceHourlySnapshot_OrderBy["Id"] = "id";
  PodMarketplaceHourlySnapshot_OrderBy["NewBeanVolume"] = "newBeanVolume";
  PodMarketplaceHourlySnapshot_OrderBy["NewOrdersCancelled"] = "newOrdersCancelled";
  PodMarketplaceHourlySnapshot_OrderBy["NewOrdersCreated"] = "newOrdersCreated";
  PodMarketplaceHourlySnapshot_OrderBy["NewOrdersFilled"] = "newOrdersFilled";
  PodMarketplaceHourlySnapshot_OrderBy["NewPodVolume"] = "newPodVolume";
  PodMarketplaceHourlySnapshot_OrderBy["NewPodsAvailable"] = "newPodsAvailable";
  PodMarketplaceHourlySnapshot_OrderBy["NewPodsCancelled"] = "newPodsCancelled";
  PodMarketplaceHourlySnapshot_OrderBy["NewPodsExpired"] = "newPodsExpired";
  PodMarketplaceHourlySnapshot_OrderBy["NewPodsFilled"] = "newPodsFilled";
  PodMarketplaceHourlySnapshot_OrderBy["NewPodsListed"] = "newPodsListed";
  PodMarketplaceHourlySnapshot_OrderBy["PodMarketplace"] = "podMarketplace";
  PodMarketplaceHourlySnapshot_OrderBy["Season"] = "season";
  PodMarketplaceHourlySnapshot_OrderBy["Timestamp"] = "timestamp";
  PodMarketplaceHourlySnapshot_OrderBy["TotalBeanVolume"] = "totalBeanVolume";
  PodMarketplaceHourlySnapshot_OrderBy["TotalOrdersCancelled"] = "totalOrdersCancelled";
  PodMarketplaceHourlySnapshot_OrderBy["TotalOrdersCreated"] = "totalOrdersCreated";
  PodMarketplaceHourlySnapshot_OrderBy["TotalOrdersFilled"] = "totalOrdersFilled";
  PodMarketplaceHourlySnapshot_OrderBy["TotalPodVolume"] = "totalPodVolume";
  PodMarketplaceHourlySnapshot_OrderBy["TotalPodsAvailable"] = "totalPodsAvailable";
  PodMarketplaceHourlySnapshot_OrderBy["TotalPodsCancelled"] = "totalPodsCancelled";
  PodMarketplaceHourlySnapshot_OrderBy["TotalPodsExpired"] = "totalPodsExpired";
  PodMarketplaceHourlySnapshot_OrderBy["TotalPodsFilled"] = "totalPodsFilled";
  PodMarketplaceHourlySnapshot_OrderBy["TotalPodsListed"] = "totalPodsListed";
})(PodMarketplaceHourlySnapshot_OrderBy || (PodMarketplaceHourlySnapshot_OrderBy = {}));
var PodMarketplace_OrderBy;
(function (PodMarketplace_OrderBy) {
  PodMarketplace_OrderBy["DailySnapshots"] = "dailySnapshots";
  PodMarketplace_OrderBy["Fills"] = "fills";
  PodMarketplace_OrderBy["HourlySnapshots"] = "hourlySnapshots";
  PodMarketplace_OrderBy["Id"] = "id";
  PodMarketplace_OrderBy["ListingIndexes"] = "listingIndexes";
  PodMarketplace_OrderBy["Orders"] = "orders";
  PodMarketplace_OrderBy["Season"] = "season";
  PodMarketplace_OrderBy["TotalBeanVolume"] = "totalBeanVolume";
  PodMarketplace_OrderBy["TotalOrdersCancelled"] = "totalOrdersCancelled";
  PodMarketplace_OrderBy["TotalOrdersCreated"] = "totalOrdersCreated";
  PodMarketplace_OrderBy["TotalOrdersFilled"] = "totalOrdersFilled";
  PodMarketplace_OrderBy["TotalPodVolume"] = "totalPodVolume";
  PodMarketplace_OrderBy["TotalPodsAvailable"] = "totalPodsAvailable";
  PodMarketplace_OrderBy["TotalPodsCancelled"] = "totalPodsCancelled";
  PodMarketplace_OrderBy["TotalPodsExpired"] = "totalPodsExpired";
  PodMarketplace_OrderBy["TotalPodsFilled"] = "totalPodsFilled";
  PodMarketplace_OrderBy["TotalPodsListed"] = "totalPodsListed";
})(PodMarketplace_OrderBy || (PodMarketplace_OrderBy = {}));
var PodOrderCancelled_OrderBy;
(function (PodOrderCancelled_OrderBy) {
  PodOrderCancelled_OrderBy["Account"] = "account";
  PodOrderCancelled_OrderBy["BlockNumber"] = "blockNumber";
  PodOrderCancelled_OrderBy["Hash"] = "hash";
  PodOrderCancelled_OrderBy["HistoryId"] = "historyID";
  PodOrderCancelled_OrderBy["Id"] = "id";
  PodOrderCancelled_OrderBy["LogIndex"] = "logIndex";
  PodOrderCancelled_OrderBy["OrderId"] = "orderId";
  PodOrderCancelled_OrderBy["Protocol"] = "protocol";
  PodOrderCancelled_OrderBy["Timestamp"] = "timestamp";
})(PodOrderCancelled_OrderBy || (PodOrderCancelled_OrderBy = {}));
var PodOrderCreated_OrderBy;
(function (PodOrderCreated_OrderBy) {
  PodOrderCreated_OrderBy["Account"] = "account";
  PodOrderCreated_OrderBy["Amount"] = "amount";
  PodOrderCreated_OrderBy["BlockNumber"] = "blockNumber";
  PodOrderCreated_OrderBy["Hash"] = "hash";
  PodOrderCreated_OrderBy["HistoryId"] = "historyID";
  PodOrderCreated_OrderBy["Id"] = "id";
  PodOrderCreated_OrderBy["LogIndex"] = "logIndex";
  PodOrderCreated_OrderBy["MaxPlaceInLine"] = "maxPlaceInLine";
  PodOrderCreated_OrderBy["OrderId"] = "orderId";
  PodOrderCreated_OrderBy["PricePerPod"] = "pricePerPod";
  PodOrderCreated_OrderBy["Protocol"] = "protocol";
  PodOrderCreated_OrderBy["Timestamp"] = "timestamp";
})(PodOrderCreated_OrderBy || (PodOrderCreated_OrderBy = {}));
var PodOrderFilled_OrderBy;
(function (PodOrderFilled_OrderBy) {
  PodOrderFilled_OrderBy["Amount"] = "amount";
  PodOrderFilled_OrderBy["BlockNumber"] = "blockNumber";
  PodOrderFilled_OrderBy["From"] = "from";
  PodOrderFilled_OrderBy["Hash"] = "hash";
  PodOrderFilled_OrderBy["HistoryId"] = "historyID";
  PodOrderFilled_OrderBy["Id"] = "id";
  PodOrderFilled_OrderBy["Index"] = "index";
  PodOrderFilled_OrderBy["LogIndex"] = "logIndex";
  PodOrderFilled_OrderBy["Protocol"] = "protocol";
  PodOrderFilled_OrderBy["Start"] = "start";
  PodOrderFilled_OrderBy["Timestamp"] = "timestamp";
  PodOrderFilled_OrderBy["To"] = "to";
})(PodOrderFilled_OrderBy || (PodOrderFilled_OrderBy = {}));
var PodOrder_OrderBy;
(function (PodOrder_OrderBy) {
  PodOrder_OrderBy["Amount"] = "amount";
  PodOrder_OrderBy["CreatedAt"] = "createdAt";
  PodOrder_OrderBy["Farmer"] = "farmer";
  PodOrder_OrderBy["Fill"] = "fill";
  PodOrder_OrderBy["FilledAmount"] = "filledAmount";
  PodOrder_OrderBy["HistoryId"] = "historyID";
  PodOrder_OrderBy["Id"] = "id";
  PodOrder_OrderBy["MaxPlaceInLine"] = "maxPlaceInLine";
  PodOrder_OrderBy["PricePerPod"] = "pricePerPod";
  PodOrder_OrderBy["Status"] = "status";
  PodOrder_OrderBy["UpdatedAt"] = "updatedAt";
})(PodOrder_OrderBy || (PodOrder_OrderBy = {}));
var PodTransfer_OrderBy;
(function (PodTransfer_OrderBy) {
  PodTransfer_OrderBy["BlockNumber"] = "blockNumber";
  PodTransfer_OrderBy["From"] = "from";
  PodTransfer_OrderBy["Hash"] = "hash";
  PodTransfer_OrderBy["Id"] = "id";
  PodTransfer_OrderBy["Index"] = "index";
  PodTransfer_OrderBy["LogIndex"] = "logIndex";
  PodTransfer_OrderBy["Pods"] = "pods";
  PodTransfer_OrderBy["Protocol"] = "protocol";
  PodTransfer_OrderBy["Timestamp"] = "timestamp";
  PodTransfer_OrderBy["To"] = "to";
})(PodTransfer_OrderBy || (PodTransfer_OrderBy = {}));
var ProtocolType;
(function (ProtocolType) {
  ProtocolType["Bridge"] = "BRIDGE";
  ProtocolType["Exchange"] = "EXCHANGE";
  ProtocolType["Generic"] = "GENERIC";
  ProtocolType["Lending"] = "LENDING";
  ProtocolType["Yield"] = "YIELD";
})(ProtocolType || (ProtocolType = {}));
var RemoveDeposit_OrderBy;
(function (RemoveDeposit_OrderBy) {
  RemoveDeposit_OrderBy["Account"] = "account";
  RemoveDeposit_OrderBy["Amount"] = "amount";
  RemoveDeposit_OrderBy["BlockNumber"] = "blockNumber";
  RemoveDeposit_OrderBy["Hash"] = "hash";
  RemoveDeposit_OrderBy["Id"] = "id";
  RemoveDeposit_OrderBy["LogIndex"] = "logIndex";
  RemoveDeposit_OrderBy["Protocol"] = "protocol";
  RemoveDeposit_OrderBy["Season"] = "season";
  RemoveDeposit_OrderBy["Timestamp"] = "timestamp";
  RemoveDeposit_OrderBy["Token"] = "token";
})(RemoveDeposit_OrderBy || (RemoveDeposit_OrderBy = {}));
var RewardTokenType;
(function (RewardTokenType) {
  /**  For reward tokens awarded to borrowers  */
  RewardTokenType["Borrow"] = "BORROW";
  /**  For reward tokens awarded to LPs/lenders  */
  RewardTokenType["Deposit"] = "DEPOSIT";
})(RewardTokenType || (RewardTokenType = {}));
var RewardToken_OrderBy;
(function (RewardToken_OrderBy) {
  RewardToken_OrderBy["Id"] = "id";
  RewardToken_OrderBy["Token"] = "token";
  RewardToken_OrderBy["Type"] = "type";
})(RewardToken_OrderBy || (RewardToken_OrderBy = {}));
var Reward_OrderBy;
(function (Reward_OrderBy) {
  Reward_OrderBy["BlockNumber"] = "blockNumber";
  Reward_OrderBy["Hash"] = "hash";
  Reward_OrderBy["Id"] = "id";
  Reward_OrderBy["LogIndex"] = "logIndex";
  Reward_OrderBy["Protocol"] = "protocol";
  Reward_OrderBy["Season"] = "season";
  Reward_OrderBy["Timestamp"] = "timestamp";
  Reward_OrderBy["ToFertilizer"] = "toFertilizer";
  Reward_OrderBy["ToField"] = "toField";
  Reward_OrderBy["ToSilo"] = "toSilo";
})(Reward_OrderBy || (Reward_OrderBy = {}));
var Season_OrderBy;
(function (Season_OrderBy) {
  Season_OrderBy["Beans"] = "beans";
  Season_OrderBy["Beanstalk"] = "beanstalk";
  Season_OrderBy["DeltaB"] = "deltaB";
  Season_OrderBy["DeltaBeans"] = "deltaBeans";
  Season_OrderBy["HarvestableIndex"] = "harvestableIndex";
  Season_OrderBy["Id"] = "id";
  Season_OrderBy["IncentiveBeans"] = "incentiveBeans";
  Season_OrderBy["MarketCap"] = "marketCap";
  Season_OrderBy["Price"] = "price";
  Season_OrderBy["RewardBeans"] = "rewardBeans";
  Season_OrderBy["Season"] = "season";
  Season_OrderBy["Timestamp"] = "timestamp";
})(Season_OrderBy || (Season_OrderBy = {}));
var SeedChange_OrderBy;
(function (SeedChange_OrderBy) {
  SeedChange_OrderBy["Account"] = "account";
  SeedChange_OrderBy["BlockNumber"] = "blockNumber";
  SeedChange_OrderBy["Delta"] = "delta";
  SeedChange_OrderBy["Hash"] = "hash";
  SeedChange_OrderBy["Id"] = "id";
  SeedChange_OrderBy["LogIndex"] = "logIndex";
  SeedChange_OrderBy["Protocol"] = "protocol";
  SeedChange_OrderBy["Season"] = "season";
  SeedChange_OrderBy["Timestamp"] = "timestamp";
})(SeedChange_OrderBy || (SeedChange_OrderBy = {}));
var SiloAssetDailySnapshot_OrderBy;
(function (SiloAssetDailySnapshot_OrderBy) {
  SiloAssetDailySnapshot_OrderBy["BlockNumber"] = "blockNumber";
  SiloAssetDailySnapshot_OrderBy["CumulativeDepositedUsd"] = "cumulativeDepositedUSD";
  SiloAssetDailySnapshot_OrderBy["DailyDepositedAmount"] = "dailyDepositedAmount";
  SiloAssetDailySnapshot_OrderBy["DailyDepositedBdv"] = "dailyDepositedBDV";
  SiloAssetDailySnapshot_OrderBy["DailyDepositedUsd"] = "dailyDepositedUSD";
  SiloAssetDailySnapshot_OrderBy["DailyFarmAmountDelta"] = "dailyFarmAmountDelta";
  SiloAssetDailySnapshot_OrderBy["DailySeedsDelta"] = "dailySeedsDelta";
  SiloAssetDailySnapshot_OrderBy["DailyStalkDelta"] = "dailyStalkDelta";
  SiloAssetDailySnapshot_OrderBy["DailyWithdrawnAmount"] = "dailyWithdrawnAmount";
  SiloAssetDailySnapshot_OrderBy["Id"] = "id";
  SiloAssetDailySnapshot_OrderBy["LastUpdated"] = "lastUpdated";
  SiloAssetDailySnapshot_OrderBy["Season"] = "season";
  SiloAssetDailySnapshot_OrderBy["SiloAsset"] = "siloAsset";
  SiloAssetDailySnapshot_OrderBy["Timestamp"] = "timestamp";
  SiloAssetDailySnapshot_OrderBy["TotalDepositedAmount"] = "totalDepositedAmount";
  SiloAssetDailySnapshot_OrderBy["TotalDepositedBdv"] = "totalDepositedBDV";
  SiloAssetDailySnapshot_OrderBy["TotalFarmAmount"] = "totalFarmAmount";
  SiloAssetDailySnapshot_OrderBy["TotalSeeds"] = "totalSeeds";
  SiloAssetDailySnapshot_OrderBy["TotalStalk"] = "totalStalk";
  SiloAssetDailySnapshot_OrderBy["TotalValueLockedUsd"] = "totalValueLockedUSD";
})(SiloAssetDailySnapshot_OrderBy || (SiloAssetDailySnapshot_OrderBy = {}));
var SiloAssetHourlySnapshot_OrderBy;
(function (SiloAssetHourlySnapshot_OrderBy) {
  SiloAssetHourlySnapshot_OrderBy["BlockNumber"] = "blockNumber";
  SiloAssetHourlySnapshot_OrderBy["CumulativeDepositedUsd"] = "cumulativeDepositedUSD";
  SiloAssetHourlySnapshot_OrderBy["HourlyDepositedAmount"] = "hourlyDepositedAmount";
  SiloAssetHourlySnapshot_OrderBy["HourlyDepositedBdv"] = "hourlyDepositedBDV";
  SiloAssetHourlySnapshot_OrderBy["HourlyDepositedUsd"] = "hourlyDepositedUSD";
  SiloAssetHourlySnapshot_OrderBy["HourlyFarmAmountDelta"] = "hourlyFarmAmountDelta";
  SiloAssetHourlySnapshot_OrderBy["HourlySeedsDelta"] = "hourlySeedsDelta";
  SiloAssetHourlySnapshot_OrderBy["HourlyStalkDelta"] = "hourlyStalkDelta";
  SiloAssetHourlySnapshot_OrderBy["HourlyWithdrawnAmount"] = "hourlyWithdrawnAmount";
  SiloAssetHourlySnapshot_OrderBy["Id"] = "id";
  SiloAssetHourlySnapshot_OrderBy["LastUpdated"] = "lastUpdated";
  SiloAssetHourlySnapshot_OrderBy["Season"] = "season";
  SiloAssetHourlySnapshot_OrderBy["SiloAsset"] = "siloAsset";
  SiloAssetHourlySnapshot_OrderBy["Timestamp"] = "timestamp";
  SiloAssetHourlySnapshot_OrderBy["TotalDepositedAmount"] = "totalDepositedAmount";
  SiloAssetHourlySnapshot_OrderBy["TotalDepositedBdv"] = "totalDepositedBDV";
  SiloAssetHourlySnapshot_OrderBy["TotalFarmAmount"] = "totalFarmAmount";
  SiloAssetHourlySnapshot_OrderBy["TotalSeeds"] = "totalSeeds";
  SiloAssetHourlySnapshot_OrderBy["TotalStalk"] = "totalStalk";
  SiloAssetHourlySnapshot_OrderBy["TotalValueLockedUsd"] = "totalValueLockedUSD";
})(SiloAssetHourlySnapshot_OrderBy || (SiloAssetHourlySnapshot_OrderBy = {}));
var SiloAsset_OrderBy;
(function (SiloAsset_OrderBy) {
  SiloAsset_OrderBy["CumulativeDepositedUsd"] = "cumulativeDepositedUSD";
  SiloAsset_OrderBy["DailySnapshots"] = "dailySnapshots";
  SiloAsset_OrderBy["HourlySnapshots"] = "hourlySnapshots";
  SiloAsset_OrderBy["Id"] = "id";
  SiloAsset_OrderBy["Silo"] = "silo";
  SiloAsset_OrderBy["Token"] = "token";
  SiloAsset_OrderBy["TotalDepositedAmount"] = "totalDepositedAmount";
  SiloAsset_OrderBy["TotalDepositedBdv"] = "totalDepositedBDV";
  SiloAsset_OrderBy["TotalFarmAmount"] = "totalFarmAmount";
  SiloAsset_OrderBy["TotalSeeds"] = "totalSeeds";
  SiloAsset_OrderBy["TotalStalk"] = "totalStalk";
  SiloAsset_OrderBy["TotalValueLockedUsd"] = "totalValueLockedUSD";
})(SiloAsset_OrderBy || (SiloAsset_OrderBy = {}));
var SiloDailySnapshot_OrderBy;
(function (SiloDailySnapshot_OrderBy) {
  SiloDailySnapshot_OrderBy["BeansPerStalk"] = "beansPerStalk";
  SiloDailySnapshot_OrderBy["BlockNumber"] = "blockNumber";
  SiloDailySnapshot_OrderBy["CumulativeDepositedUsd"] = "cumulativeDepositedUSD";
  SiloDailySnapshot_OrderBy["DailyBeanMints"] = "dailyBeanMints";
  SiloDailySnapshot_OrderBy["DailyClaimableBdv"] = "dailyClaimableBDV";
  SiloDailySnapshot_OrderBy["DailyDepositedBdv"] = "dailyDepositedBDV";
  SiloDailySnapshot_OrderBy["DailyDepositedUsd"] = "dailyDepositedUSD";
  SiloDailySnapshot_OrderBy["DailyFarmers"] = "dailyFarmers";
  SiloDailySnapshot_OrderBy["DailyPlantableStalkDelta"] = "dailyPlantableStalkDelta";
  SiloDailySnapshot_OrderBy["DailyRootsDelta"] = "dailyRootsDelta";
  SiloDailySnapshot_OrderBy["DailySeedsDelta"] = "dailySeedsDelta";
  SiloDailySnapshot_OrderBy["DailyStalkDelta"] = "dailyStalkDelta";
  SiloDailySnapshot_OrderBy["DailyWithdrawnBdv"] = "dailyWithdrawnBDV";
  SiloDailySnapshot_OrderBy["Id"] = "id";
  SiloDailySnapshot_OrderBy["LastUpdated"] = "lastUpdated";
  SiloDailySnapshot_OrderBy["Season"] = "season";
  SiloDailySnapshot_OrderBy["Silo"] = "silo";
  SiloDailySnapshot_OrderBy["Timestamp"] = "timestamp";
  SiloDailySnapshot_OrderBy["TotalBeanMints"] = "totalBeanMints";
  SiloDailySnapshot_OrderBy["TotalDepositedBdv"] = "totalDepositedBDV";
  SiloDailySnapshot_OrderBy["TotalFarmers"] = "totalFarmers";
  SiloDailySnapshot_OrderBy["TotalPlantableStalk"] = "totalPlantableStalk";
  SiloDailySnapshot_OrderBy["TotalRoots"] = "totalRoots";
  SiloDailySnapshot_OrderBy["TotalSeeds"] = "totalSeeds";
  SiloDailySnapshot_OrderBy["TotalStalk"] = "totalStalk";
  SiloDailySnapshot_OrderBy["TotalValueLockedUsd"] = "totalValueLockedUSD";
})(SiloDailySnapshot_OrderBy || (SiloDailySnapshot_OrderBy = {}));
var SiloDeposit_OrderBy;
(function (SiloDeposit_OrderBy) {
  SiloDeposit_OrderBy["Amount"] = "amount";
  SiloDeposit_OrderBy["AmountAdded"] = "amountAdded";
  SiloDeposit_OrderBy["AmountRemoved"] = "amountRemoved";
  SiloDeposit_OrderBy["Bdv"] = "bdv";
  SiloDeposit_OrderBy["BdvAdded"] = "bdvAdded";
  SiloDeposit_OrderBy["BdvRemoved"] = "bdvRemoved";
  SiloDeposit_OrderBy["CreatedAt"] = "createdAt";
  SiloDeposit_OrderBy["Farmer"] = "farmer";
  SiloDeposit_OrderBy["Hashes"] = "hashes";
  SiloDeposit_OrderBy["Id"] = "id";
  SiloDeposit_OrderBy["Season"] = "season";
  SiloDeposit_OrderBy["Seeds"] = "seeds";
  SiloDeposit_OrderBy["Stalk"] = "stalk";
  SiloDeposit_OrderBy["Token"] = "token";
  SiloDeposit_OrderBy["UpdatedAt"] = "updatedAt";
})(SiloDeposit_OrderBy || (SiloDeposit_OrderBy = {}));
var SiloEvent_OrderBy;
(function (SiloEvent_OrderBy) {
  SiloEvent_OrderBy["BlockNumber"] = "blockNumber";
  SiloEvent_OrderBy["Hash"] = "hash";
  SiloEvent_OrderBy["Id"] = "id";
  SiloEvent_OrderBy["LogIndex"] = "logIndex";
  SiloEvent_OrderBy["Protocol"] = "protocol";
  SiloEvent_OrderBy["Timestamp"] = "timestamp";
})(SiloEvent_OrderBy || (SiloEvent_OrderBy = {}));
var SiloHourlySnapshot_OrderBy;
(function (SiloHourlySnapshot_OrderBy) {
  SiloHourlySnapshot_OrderBy["BeansPerStalk"] = "beansPerStalk";
  SiloHourlySnapshot_OrderBy["BlockNumber"] = "blockNumber";
  SiloHourlySnapshot_OrderBy["CumulativeDepositedUsd"] = "cumulativeDepositedUSD";
  SiloHourlySnapshot_OrderBy["HourlyBeanMints"] = "hourlyBeanMints";
  SiloHourlySnapshot_OrderBy["HourlyClaimableBdv"] = "hourlyClaimableBDV";
  SiloHourlySnapshot_OrderBy["HourlyDepositedBdv"] = "hourlyDepositedBDV";
  SiloHourlySnapshot_OrderBy["HourlyDepositedUsd"] = "hourlyDepositedUSD";
  SiloHourlySnapshot_OrderBy["HourlyFarmers"] = "hourlyFarmers";
  SiloHourlySnapshot_OrderBy["HourlyPlantableStalkDelta"] = "hourlyPlantableStalkDelta";
  SiloHourlySnapshot_OrderBy["HourlyRootsDelta"] = "hourlyRootsDelta";
  SiloHourlySnapshot_OrderBy["HourlySeedsDelta"] = "hourlySeedsDelta";
  SiloHourlySnapshot_OrderBy["HourlyStalkDelta"] = "hourlyStalkDelta";
  SiloHourlySnapshot_OrderBy["HourlyWithdrawnBdv"] = "hourlyWithdrawnBDV";
  SiloHourlySnapshot_OrderBy["Id"] = "id";
  SiloHourlySnapshot_OrderBy["LastUpdated"] = "lastUpdated";
  SiloHourlySnapshot_OrderBy["Season"] = "season";
  SiloHourlySnapshot_OrderBy["Silo"] = "silo";
  SiloHourlySnapshot_OrderBy["Timestamp"] = "timestamp";
  SiloHourlySnapshot_OrderBy["TotalBeanMints"] = "totalBeanMints";
  SiloHourlySnapshot_OrderBy["TotalDepositedBdv"] = "totalDepositedBDV";
  SiloHourlySnapshot_OrderBy["TotalFarmers"] = "totalFarmers";
  SiloHourlySnapshot_OrderBy["TotalPlantableStalk"] = "totalPlantableStalk";
  SiloHourlySnapshot_OrderBy["TotalRoots"] = "totalRoots";
  SiloHourlySnapshot_OrderBy["TotalSeeds"] = "totalSeeds";
  SiloHourlySnapshot_OrderBy["TotalStalk"] = "totalStalk";
  SiloHourlySnapshot_OrderBy["TotalValueLockedUsd"] = "totalValueLockedUSD";
})(SiloHourlySnapshot_OrderBy || (SiloHourlySnapshot_OrderBy = {}));
var SiloWithdraw_OrderBy;
(function (SiloWithdraw_OrderBy) {
  SiloWithdraw_OrderBy["Amount"] = "amount";
  SiloWithdraw_OrderBy["ClaimableSeason"] = "claimableSeason";
  SiloWithdraw_OrderBy["Claimed"] = "claimed";
  SiloWithdraw_OrderBy["CreatedAt"] = "createdAt";
  SiloWithdraw_OrderBy["Farmer"] = "farmer";
  SiloWithdraw_OrderBy["Hash"] = "hash";
  SiloWithdraw_OrderBy["Id"] = "id";
  SiloWithdraw_OrderBy["Token"] = "token";
  SiloWithdraw_OrderBy["WithdrawSeason"] = "withdrawSeason";
})(SiloWithdraw_OrderBy || (SiloWithdraw_OrderBy = {}));
var SiloYield_OrderBy;
(function (SiloYield_OrderBy) {
  SiloYield_OrderBy["BeansPerSeasonEma"] = "beansPerSeasonEMA";
  SiloYield_OrderBy["Beta"] = "beta";
  SiloYield_OrderBy["FourSeedBeanApy"] = "fourSeedBeanAPY";
  SiloYield_OrderBy["FourSeedStalkApy"] = "fourSeedStalkAPY";
  SiloYield_OrderBy["Id"] = "id";
  SiloYield_OrderBy["Season"] = "season";
  SiloYield_OrderBy["Timestamp"] = "timestamp";
  SiloYield_OrderBy["TwoSeedBeanApy"] = "twoSeedBeanAPY";
  SiloYield_OrderBy["TwoSeedStalkApy"] = "twoSeedStalkAPY";
  SiloYield_OrderBy["U"] = "u";
})(SiloYield_OrderBy || (SiloYield_OrderBy = {}));
var Silo_OrderBy;
(function (Silo_OrderBy) {
  Silo_OrderBy["Assets"] = "assets";
  Silo_OrderBy["Beanstalk"] = "beanstalk";
  Silo_OrderBy["DailySnapshots"] = "dailySnapshots";
  Silo_OrderBy["Farmer"] = "farmer";
  Silo_OrderBy["HourlySnapshots"] = "hourlySnapshots";
  Silo_OrderBy["Id"] = "id";
  Silo_OrderBy["TotalBeanMints"] = "totalBeanMints";
  Silo_OrderBy["TotalDepositedBdv"] = "totalDepositedBDV";
  Silo_OrderBy["TotalFarmers"] = "totalFarmers";
  Silo_OrderBy["TotalPlantableStalk"] = "totalPlantableStalk";
  Silo_OrderBy["TotalRoots"] = "totalRoots";
  Silo_OrderBy["TotalSeeds"] = "totalSeeds";
  Silo_OrderBy["TotalStalk"] = "totalStalk";
  Silo_OrderBy["TotalValueLockedUsd"] = "totalValueLockedUSD";
  Silo_OrderBy["WhitelistedTokens"] = "whitelistedTokens";
})(Silo_OrderBy || (Silo_OrderBy = {}));
var StalkChange_OrderBy;
(function (StalkChange_OrderBy) {
  StalkChange_OrderBy["Account"] = "account";
  StalkChange_OrderBy["BlockNumber"] = "blockNumber";
  StalkChange_OrderBy["Delta"] = "delta";
  StalkChange_OrderBy["Hash"] = "hash";
  StalkChange_OrderBy["Id"] = "id";
  StalkChange_OrderBy["LogIndex"] = "logIndex";
  StalkChange_OrderBy["Protocol"] = "protocol";
  StalkChange_OrderBy["Season"] = "season";
  StalkChange_OrderBy["Timestamp"] = "timestamp";
})(StalkChange_OrderBy || (StalkChange_OrderBy = {}));
var Token_OrderBy;
(function (Token_OrderBy) {
  Token_OrderBy["Decimals"] = "decimals";
  Token_OrderBy["Id"] = "id";
  Token_OrderBy["LastPriceBlockNumber"] = "lastPriceBlockNumber";
  Token_OrderBy["LastPriceUsd"] = "lastPriceUSD";
  Token_OrderBy["Name"] = "name";
  Token_OrderBy["Symbol"] = "symbol";
})(Token_OrderBy || (Token_OrderBy = {}));
var Transaction_OrderBy;
(function (Transaction_OrderBy) {
  Transaction_OrderBy["BlockNumber"] = "blockNumber";
  Transaction_OrderBy["From"] = "from";
  Transaction_OrderBy["Id"] = "id";
  Transaction_OrderBy["Timestamp"] = "timestamp";
  Transaction_OrderBy["To"] = "to";
})(Transaction_OrderBy || (Transaction_OrderBy = {}));
var WhitelistToken_OrderBy;
(function (WhitelistToken_OrderBy) {
  WhitelistToken_OrderBy["BlockNumber"] = "blockNumber";
  WhitelistToken_OrderBy["Hash"] = "hash";
  WhitelistToken_OrderBy["Id"] = "id";
  WhitelistToken_OrderBy["LogIndex"] = "logIndex";
  WhitelistToken_OrderBy["Protocol"] = "protocol";
  WhitelistToken_OrderBy["Seeds"] = "seeds";
  WhitelistToken_OrderBy["Selector"] = "selector";
  WhitelistToken_OrderBy["Stalk"] = "stalk";
  WhitelistToken_OrderBy["Timestamp"] = "timestamp";
  WhitelistToken_OrderBy["Token"] = "token";
})(WhitelistToken_OrderBy || (WhitelistToken_OrderBy = {}));
var _SubgraphErrorPolicy_;
(function (_SubgraphErrorPolicy_) {
  /** Data will be returned even if the subgraph has indexing errors */
  _SubgraphErrorPolicy_["Allow"] = "allow";
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  _SubgraphErrorPolicy_["Deny"] = "deny";
})(_SubgraphErrorPolicy_ || (_SubgraphErrorPolicy_ = {}));
var PodListingFragmentDoc = /*#__PURE__*/gql(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    fragment PodListing on PodListing {\n  id\n  index\n  createdAt\n  updatedAt\n  status\n  originalIndex\n  amount\n  totalAmount\n  remainingAmount\n  start\n  pricePerPod\n  maxHarvestableIndex\n  mode\n}\n    "])));
var GetListingByIndexDocument = /*#__PURE__*/gql(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    query getListingByIndex($index: BigInt) {\n  podListings(\n    where: {index: $index}\n    first: 1\n    orderBy: createdAt\n    orderDirection: desc\n  ) {\n    ...PodListing\n  }\n}\n    ", ""])), PodListingFragmentDoc);
var GetSiloBalanceDocument = /*#__PURE__*/gql(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    query getSiloBalance($token: String, $account: ID!, $season: Int!) {\n  farmer(id: $account) {\n    deposited: deposits(\n      orderBy: season\n      orderDirection: asc\n      where: {token: $token, amount_gt: 0}\n    ) {\n      season\n      token\n      amount\n      bdv\n    }\n    withdrawn: withdraws(\n      orderBy: withdrawSeason\n      orderDirection: asc\n      where: {token: $token, claimableSeason_gt: $season, claimed: false}\n    ) {\n      season: withdrawSeason\n      token\n      amount\n    }\n    claimable: withdraws(\n      orderBy: withdrawSeason\n      orderDirection: asc\n      where: {token: $token, claimableSeason_lte: $season, claimed: false}\n    ) {\n      season: withdrawSeason\n      token\n      amount\n    }\n  }\n}\n    "])));
var GetSiloBalancesDocument = /*#__PURE__*/gql(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    query getSiloBalances($account: ID!, $season: Int!) {\n  farmer(id: $account) {\n    deposited: deposits(orderBy: season, orderDirection: asc, where: {amount_gt: 0}) {\n      season\n      token\n      amount\n      bdv\n    }\n    withdrawn: withdraws(\n      orderBy: withdrawSeason\n      orderDirection: asc\n      where: {claimableSeason_gt: $season, claimed: false}\n    ) {\n      season: withdrawSeason\n      token\n      amount\n    }\n    claimable: withdraws(\n      orderBy: withdrawSeason\n      orderDirection: asc\n      where: {claimableSeason_lte: $season, claimed: false}\n    ) {\n      season: withdrawSeason\n      token\n      amount\n    }\n  }\n}\n    "])));
var GetSiloWhitelistDocument = /*#__PURE__*/gql(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    query getSiloWhitelist {\n  whitelistTokens {\n    token\n    stalk\n    seeds\n  }\n}\n    "])));
var defaultWrapper = function defaultWrapper(action, _operationName, _operationType) {
  return action();
};
function getSdk(client, withWrapper) {
  if (withWrapper === void 0) {
    withWrapper = defaultWrapper;
  }
  return {
    getListingByIndex: function getListingByIndex(variables, requestHeaders) {
      return withWrapper(function (wrappedRequestHeaders) {
        return client.request(GetListingByIndexDocument, variables, _extends({}, requestHeaders, wrappedRequestHeaders));
      }, 'getListingByIndex', 'query');
    },
    getSiloBalance: function getSiloBalance(variables, requestHeaders) {
      return withWrapper(function (wrappedRequestHeaders) {
        return client.request(GetSiloBalanceDocument, variables, _extends({}, requestHeaders, wrappedRequestHeaders));
      }, 'getSiloBalance', 'query');
    },
    getSiloBalances: function getSiloBalances(variables, requestHeaders) {
      return withWrapper(function (wrappedRequestHeaders) {
        return client.request(GetSiloBalancesDocument, variables, _extends({}, requestHeaders, wrappedRequestHeaders));
      }, 'getSiloBalances', 'query');
    },
    getSiloWhitelist: function getSiloWhitelist(variables, requestHeaders) {
      return withWrapper(function (wrappedRequestHeaders) {
        return client.request(GetSiloWhitelistDocument, variables, _extends({}, requestHeaders, wrappedRequestHeaders));
      }, 'getSiloWhitelist', 'query');
    }
  };
}

(function (FarmFromMode) {
  FarmFromMode["EXTERNAL"] = "0";
  FarmFromMode["INTERNAL"] = "1";
  FarmFromMode["INTERNAL_EXTERNAL"] = "2";
  FarmFromMode["INTERNAL_TOLERANT"] = "3";
})(exports.FarmFromMode || (exports.FarmFromMode = {}));
(function (FarmToMode) {
  FarmToMode["EXTERNAL"] = "0";
  FarmToMode["INTERNAL"] = "1";
})(exports.FarmToMode || (exports.FarmToMode = {}));
var BaseAction = /*#__PURE__*/function () {
  function BaseAction() {}
  var _proto = BaseAction.prototype;
  _proto.setSDK = function setSDK(sdk) {
    BaseAction.sdk = sdk;
  };
  _proto.direction = function direction(_x1, _x2, _forward) {
    return _forward ? [_x1, _x2] : [_x2, _x1];
  };
  return BaseAction;
}();
BaseAction.sdk = void 0;

var Work = /*#__PURE__*/function () {
  function Work(sdk) {
    this.steps = [];
    this.stepResults = [];
    this.value = ethers.ethers.BigNumber.from(0);
    Work.sdk = sdk;
  }
  //////////////////////// Utilities ////////////////////////
  /**
   * Apply slippage to an amount.
   * @param _amount ethers.BigNumber
   * @param _slippage slippage as a decimal; i.e. _slippage = 0.001 means 0.1%
   */
  Work.slip = function slip(_amount, _slippage) {
    return _amount.mul(Math.floor(Work.SLIPPAGE_PRECISION * (1 - _slippage))).div(Work.SLIPPAGE_PRECISION);
  }
  //////////////////////// Steps ////////////////////////
  ;
  var _proto = Work.prototype;
  _proto.addStep = function addStep(action) {
    if (action instanceof BaseAction) {
      console.log("action");
      action.setSDK(Work.sdk);
      this.steps.push(action);
    } else if (action instanceof Function) {
      this.steps.push(action);
      console.log('A Function');
    } else {
      throw new Error('Received action that is of unknown type');
    }
  };
  _proto.addSteps = function addSteps(actions) {
    for (var _iterator = _createForOfIteratorHelperLoose(actions), _step; !(_step = _iterator()).done;) {
      var action = _step.value;
      Array.isArray(action) ? this.addSteps(action) : this.addStep(action);
    }
  };
  _proto.copy = function copy() {
    var copy = new Work(Work.sdk);
    copy.addSteps([].concat(this.steps));
    return copy;
  }
  //////////////////////// Run Actions ////////////////////////
  /**
   *
   */;
  _proto.runAction =
  /*#__PURE__*/
  function () {
    var _runAction = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(action, input, forward) {
      var result, _result, actionResult;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (!(action instanceof BaseAction)) {
                _context.next = 10;
                break;
              }
              _context.next = 4;
              return action.run(input, forward);
            case 4:
              result = _context.sent;
              if (result.value) this.value = this.value.add(result.value);
              this.stepResults.push(result);
              return _context.abrupt("return", result.amountOut);
            case 10:
              if (!(action instanceof Function)) {
                _context.next = 25;
                break;
              }
              _context.next = 13;
              return action.call(this, input, forward);
            case 13:
              _result = _context.sent;
              if (!(typeof _result === 'string')) {
                _context.next = 20;
                break;
              }
              actionResult = {
                name: 'ActionFunction',
                amountOut: ethers.BigNumber.from('0'),
                encode: function encode() {
                  return _result;
                },
                decode: function decode(data) {
                  return {};
                }
              };
              this.stepResults.push(actionResult);
              return _context.abrupt("return", actionResult.amountOut);
            case 20:
              if (_result.value) this.value = this.value.add(_result.value);
              this.stepResults.push(_result);
              return _context.abrupt("return", _result.amountOut);
            case 23:
              _context.next = 26;
              break;
            case 25:
              throw new Error('Received action that is of unknown type');
            case 26:
              _context.next = 33;
              break;
            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](0);
              console.log("[farm/estimate] Failed to estimate step " + action.name, input.toString(), forward);
              console.error(_context.t0);
              throw _context.t0;
            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 28]]);
    }));
    function runAction(_x, _x2, _x3) {
      return _runAction.apply(this, arguments);
    }
    return runAction;
  }() //////////////////////// Estimate ////////////////////////
  /**
   * Estimate what the workflow would output given this amountIn is the input.
   * For ex, if we are trading ETH -> BEAN, and you want to spend exactly 5 ETH, estimate()
   * would tell how much BEAN you'd receive for 5 ETH
   * @param amountIn Amount to send to workflow as input for estimation
   * @returns Promise of BigNumber
   */
  ;
  _proto.estimate =
  /*#__PURE__*/
  function () {
    var _estimate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(amountIn) {
      var nextAmount, i;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              nextAmount = amountIn; // clear any previous results
              this.stepResults = [];
              i = 0;
            case 3:
              if (!(i < this.steps.length)) {
                _context2.next = 10;
                break;
              }
              _context2.next = 6;
              return this.runAction(this.steps[i], nextAmount, true);
            case 6:
              nextAmount = _context2.sent;
            case 7:
              i += 1;
              _context2.next = 3;
              break;
            case 10:
              return _context2.abrupt("return", nextAmount);
            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    function estimate(_x4) {
      return _estimate.apply(this, arguments);
    }
    return estimate;
  }()
  /**
   * Estimate the min amount to input to the workflow to receive the desiredAmountOut output
   * For ex, if we are trading ETH -> Bean, and I want exactly 500 BEAN, estimateReversed()
   * tell me how much ETH will result in 500 BEAN
   * @param desiredAmountOut The end amount you want the workflow to output
   * @returns Promise of BigNumber
   */
  ;
  _proto.estimateReversed =
  /*#__PURE__*/
  function () {
    var _estimateReversed = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(desiredAmountOut) {
      var nextAmount, i;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              nextAmount = desiredAmountOut; // clear any previous results
              this.stepResults = [];
              i = this.steps.length - 1;
            case 3:
              if (!(i >= 0)) {
                _context3.next = 10;
                break;
              }
              _context3.next = 6;
              return this.runAction(this.steps[i], nextAmount, false);
            case 6:
              nextAmount = _context3.sent;
            case 7:
              i -= 1;
              _context3.next = 3;
              break;
            case 10:
              return _context3.abrupt("return", nextAmount);
            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    function estimateReversed(_x5) {
      return _estimateReversed.apply(this, arguments);
    }
    return estimateReversed;
  }() //////////////////////// Encode ////////////////////////
  /**
   * Loop over a sequence of pre-estimated steps and encode their
   * calldata with a slippage value applied to amountOut.
   *
   * @fixme throw if this.stepResults is currently empty
   * @fixme statelessness of individual workflows
   */
  ;
  _proto.encodeStepsWithSlippage = function encodeStepsWithSlippage(_slippage) {
    var fnData = [];
    for (var i = 0; i < this.stepResults.length; i += 1) {
      var amountOut = this.stepResults[i].amountOut;
      var minAmountOut = Work.slip(amountOut, _slippage);
      /// If the step doesn't have slippage (for ex, wrapping ETH),
      /// then `encode` should ignore minAmountOut
      var encoded = this.stepResults[i].encode(minAmountOut);
      fnData.push(encoded);
      Work.sdk.debug("[chain] encoding step " + i + ": expected amountOut = " + amountOut + ", minAmountOut = " + minAmountOut);
    }
    return fnData;
  }
  //////////////////////// Execute ////////////////////////
  /**
   *
   * @param amountIn Amount to use as first input to Work
   * @param slippage A human readable percent value. Ex: 0.1 would mean 0.1% slippage
   * @returns Promise of a Transaction
   */;
  _proto.execute =
  /*#__PURE__*/
  function () {
    var _execute = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(amountIn, slippage) {
      var data, txn;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.estimate(amountIn);
            case 2:
              data = this.encodeStepsWithSlippage(slippage / 100);
              _context4.next = 5;
              return Work.sdk.contracts.beanstalk.farm(data, {
                value: this.value
              });
            case 5:
              txn = _context4.sent;
              return _context4.abrupt("return", txn);
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
    function execute(_x6, _x7) {
      return _execute.apply(this, arguments);
    }
    return execute;
  }()
  /**
   * CallStatic version of the execute method. Allows testing the execution of the workflow.
   * @param amountIn Amount to use as first input to workflow
   * @param slippage A human readable percent value. Ex: 0.1 would mean 0.1% slippage
   * @returns Promise of a Transaction
   */
  ;
  _proto.callStatic =
  /*#__PURE__*/
  function () {
    var _callStatic = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(amountIn, slippage) {
      var data, txn;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.estimate(amountIn);
            case 2:
              data = this.encodeStepsWithSlippage(slippage / 100);
              _context5.next = 5;
              return Work.sdk.contracts.beanstalk.callStatic.farm(data, {
                value: this.value
              });
            case 5:
              txn = _context5.sent;
              return _context5.abrupt("return", txn);
            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
    function callStatic(_x8, _x9) {
      return _callStatic.apply(this, arguments);
    }
    return callStatic;
  }();
  return Work;
}();
Work.SLIPPAGE_PRECISION = /*#__PURE__*/Math.pow(10, 6);
Work.sdk = void 0;

var Exchange = /*#__PURE__*/function (_BaseAction) {
  _inheritsLoose(Exchange, _BaseAction);
  function Exchange(pool, registry, tokenIn, tokenOut, fromMode, toMode) {
    var _this;
    if (fromMode === void 0) {
      fromMode = exports.FarmFromMode.INTERNAL_TOLERANT;
    }
    if (toMode === void 0) {
      toMode = exports.FarmToMode.INTERNAL;
    }
    _this = _BaseAction.call(this) || this;
    _this.pool = void 0;
    _this.registry = void 0;
    _this.tokenIn = void 0;
    _this.tokenOut = void 0;
    _this.fromMode = void 0;
    _this.toMode = void 0;
    _this.name = 'exchange';
    _this.pool = pool;
    _this.registry = registry;
    _this.tokenIn = tokenIn;
    _this.tokenOut = tokenOut;
    _this.fromMode = fromMode;
    _this.toMode = toMode;
    return _this;
  }
  var _proto = Exchange.prototype;
  _proto.run = /*#__PURE__*/function () {
    var _run = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_amountInStep, _forward) {
      var _this2 = this;
      var _this$direction, tokenIn, tokenOut, registry, _yield$registry$callS, i, j, poolAddr, pools, amountOut;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_forward === void 0) {
                _forward = true;
              }
              Exchange.sdk.debug("[workflow:exchange] " + _amountInStep.toString() + " " + this.tokenIn.symbol + " -> " + this.tokenOut.symbol + " " + _forward);
              _this$direction = this.direction(this.tokenIn, this.tokenOut, _forward), tokenIn = _this$direction[0], tokenOut = _this$direction[1];
              registry = Exchange.sdk.contracts.curve.registries[this.registry];
              if (registry) {
                _context.next = 6;
                break;
              }
              throw new Error("Unknown registry: " + this.registry);
            case 6:
              _context.next = 8;
              return registry.callStatic.get_coin_indices(this.pool, tokenIn.address, tokenOut.address, {
                gasLimit: 10000000
              });
            case 8:
              _yield$registry$callS = _context.sent;
              i = _yield$registry$callS[0];
              j = _yield$registry$callS[1];
              /// Get amount out based on the selected pool
              poolAddr = this.pool.toLowerCase();
              pools = Exchange.sdk.contracts.curve.pools;
              if (!(poolAddr === pools.tricrypto2.address.toLowerCase())) {
                _context.next = 19;
                break;
              }
              _context.next = 16;
              return pools.tricrypto2.callStatic.get_dy(i, j, _amountInStep, {
                gasLimit: 10000000
              });
            case 16:
              amountOut = _context.sent;
              _context.next = 35;
              break;
            case 19:
              if (!(poolAddr === pools.pool3.address.toLowerCase())) {
                _context.next = 25;
                break;
              }
              _context.next = 22;
              return pools.pool3.callStatic.get_dy(i, j, _amountInStep, {
                gasLimit: 10000000
              });
            case 22:
              amountOut = _context.sent;
              _context.next = 35;
              break;
            case 25:
              if (!(this.registry === Exchange.sdk.contracts.curve.registries.metaFactory.address)) {
                _context.next = 31;
                break;
              }
              _context.next = 28;
              return CurveMetaPool__factory.connect(this.pool, Exchange.sdk.provider).callStatic['get_dy(int128,int128,uint256)'](i, j, _amountInStep, {
                gasLimit: 10000000
              });
            case 28:
              amountOut = _context.sent;
              _context.next = 35;
              break;
            case 31:
              if (!(this.registry === Exchange.sdk.contracts.curve.registries.cryptoFactory.address)) {
                _context.next = 35;
                break;
              }
              _context.next = 34;
              return CurvePlainPool__factory.connect(this.pool, Exchange.sdk.provider).callStatic.get_dy(i, j, _amountInStep, {
                gasLimit: 10000000
              });
            case 34:
              amountOut = _context.sent;
            case 35:
              if (amountOut) {
                _context.next = 37;
                break;
              }
              throw new Error('No supported pool found');
            case 37:
              return _context.abrupt("return", {
                name: this.name,
                amountOut: amountOut,
                encode: function encode(minAmountOut) {
                  return Exchange.sdk.contracts.beanstalk["interface"].encodeFunctionData('exchange', [_this2.pool, _this2.registry, tokenIn.address, tokenOut.address, _amountInStep, minAmountOut, _this2.fromMode, _this2.toMode]);
                },
                decode: function decode(data) {
                  return Exchange.sdk.contracts.beanstalk["interface"].decodeFunctionData('exchange', data);
                },
                data: {
                  pool: this.pool,
                  registry: this.registry,
                  tokenIn: tokenIn.address,
                  tokenOut: tokenOut.address,
                  fromMode: this.fromMode,
                  toMode: this.toMode
                }
              });
            case 38:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function run(_x, _x2) {
      return _run.apply(this, arguments);
    }
    return run;
  }();
  return Exchange;
}(BaseAction);

var ExchangeUnderlying = /*#__PURE__*/function (_BaseAction) {
  _inheritsLoose(ExchangeUnderlying, _BaseAction);
  function ExchangeUnderlying(pool, tokenIn, tokenOut, fromMode, toMode) {
    var _this;
    if (fromMode === void 0) {
      fromMode = exports.FarmFromMode.INTERNAL_TOLERANT;
    }
    if (toMode === void 0) {
      toMode = exports.FarmToMode.INTERNAL;
    }
    _this = _BaseAction.call(this) || this;
    _this.pool = void 0;
    _this.tokenIn = void 0;
    _this.tokenOut = void 0;
    _this.fromMode = void 0;
    _this.toMode = void 0;
    _this.name = 'exchangeUnderlying';
    _this.pool = pool;
    _this.tokenIn = tokenIn;
    _this.tokenOut = tokenOut;
    _this.fromMode = fromMode;
    _this.toMode = toMode;
    return _this;
  }
  var _proto = ExchangeUnderlying.prototype;
  _proto.run = /*#__PURE__*/function () {
    var _run = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_amountInStep, forward) {
      var _this2 = this;
      var _this$direction, tokenIn, tokenOut, registry, _yield$registry$get_c, i, j, amountOut;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (forward === void 0) {
                forward = true;
              }
              _this$direction = this.direction(this.tokenIn, this.tokenOut, forward), tokenIn = _this$direction[0], tokenOut = _this$direction[1];
              ExchangeUnderlying.sdk.debug("[step@exchangeUnderlying] run [" + (forward ? 'forward' : 'backward') + "]", {
                pool: this.pool,
                tokenIn: tokenIn,
                tokenOut: tokenOut,
                forward: forward,
                fromMode: this.fromMode,
                toMode: this.toMode,
                _amountInStep: _amountInStep
              });
              registry = ExchangeUnderlying.sdk.contracts.curve.registries.metaFactory;
              _context.next = 6;
              return registry.get_coin_indices(this.pool, tokenIn.address, tokenOut.address, {
                gasLimit: 1000000
              });
            case 6:
              _yield$registry$get_c = _context.sent;
              i = _yield$registry$get_c[0];
              j = _yield$registry$get_c[1];
              _context.next = 11;
              return CurveMetaPool__factory.connect(this.pool, ExchangeUnderlying.sdk.provider).callStatic['get_dy_underlying(int128,int128,uint256)'](i,
              // i = USDT = coins[3] ([0=BEAN, 1=CRV3] => [0=BEAN, 1=DAI, 2=USDC, 3=USDT])
              j,
              // j = BEAN = coins[0]
              _amountInStep, {
                gasLimit: 10000000
              });
            case 11:
              amountOut = _context.sent;
              if (amountOut) {
                _context.next = 14;
                break;
              }
              throw new Error('Unexpected missing amountOut');
            case 14:
              return _context.abrupt("return", {
                name: this.name,
                amountOut: amountOut,
                encode: function encode(minAmountOut) {
                  return ExchangeUnderlying.sdk.contracts.beanstalk["interface"].encodeFunctionData('exchangeUnderlying', [_this2.pool, tokenIn.address, tokenOut.address, _amountInStep, minAmountOut, _this2.fromMode, _this2.toMode]);
                },
                decode: function decode(data) {
                  return ExchangeUnderlying.sdk.contracts.beanstalk["interface"].decodeFunctionData('exchangeUnderlying', data);
                },
                data: {
                  pool: this.pool,
                  tokenIn: this.tokenIn.address,
                  tokenOut: this.tokenOut.address,
                  fromMode: this.fromMode,
                  toMode: this.toMode
                }
              });
            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function run(_x, _x2) {
      return _run.apply(this, arguments);
    }
    return run;
  }();
  return ExchangeUnderlying;
}(BaseAction);

var WrapEth = /*#__PURE__*/function (_BaseAction) {
  _inheritsLoose(WrapEth, _BaseAction);
  function WrapEth(toMode) {
    var _this;
    if (toMode === void 0) {
      toMode = exports.FarmToMode.INTERNAL;
    }
    _this = _BaseAction.call(this) || this;
    _this.toMode = void 0;
    _this.name = 'wrapEth';
    _this.toMode = toMode;
    return _this;
  }
  var _proto = WrapEth.prototype;
  _proto.run = /*#__PURE__*/function () {
    var _run = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_amountInStep, _forward) {
      var _this2 = this;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {
                name: this.name,
                amountOut: _amountInStep,
                value: _amountInStep,
                encode: function encode(_) {
                  return WrapEth.sdk.contracts.beanstalk["interface"].encodeFunctionData('wrapEth', [_amountInStep, _this2.toMode]);
                },
                decode: function decode(data) {
                  return WrapEth.sdk.contracts.beanstalk["interface"].decodeFunctionData('wrapEth', data);
                }
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function run(_x, _x2) {
      return _run.apply(this, arguments);
    }
    return run;
  }();
  return WrapEth;
}(BaseAction);

var UnwrapEth = /*#__PURE__*/function (_BaseAction) {
  _inheritsLoose(UnwrapEth, _BaseAction);
  function UnwrapEth(toMode) {
    var _this;
    if (toMode === void 0) {
      toMode = exports.FarmToMode.EXTERNAL;
    }
    _this = _BaseAction.call(this) || this;
    _this.toMode = void 0;
    _this.name = 'unwrapEth';
    _this.toMode = toMode;
    return _this;
  }
  var _proto = UnwrapEth.prototype;
  _proto.run = /*#__PURE__*/function () {
    var _run = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_amountInStep, _forward) {
      var _this2 = this;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {
                name: this.name,
                amountOut: _amountInStep,
                value: _amountInStep,
                encode: function encode(_) {
                  return UnwrapEth.sdk.contracts.beanstalk["interface"].encodeFunctionData('unwrapEth', [_amountInStep, _this2.toMode]);
                },
                decode: function decode(data) {
                  return UnwrapEth.sdk.contracts.beanstalk["interface"].decodeFunctionData('unwrapEth', data);
                }
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function run(_x, _x2) {
      return _run.apply(this, arguments);
    }
    return run;
  }();
  return UnwrapEth;
}(BaseAction);

var AddLiquidity = /*#__PURE__*/function (_BaseAction) {
  _inheritsLoose(AddLiquidity, _BaseAction);
  function AddLiquidity(_pool, _registry, _amounts, _fromMode, _toMode) {
    var _this;
    if (_fromMode === void 0) {
      _fromMode = exports.FarmFromMode.INTERNAL_TOLERANT;
    }
    if (_toMode === void 0) {
      _toMode = exports.FarmToMode.INTERNAL;
    }
    _this = _BaseAction.call(this) || this;
    _this._pool = void 0;
    _this._registry = void 0;
    _this._amounts = void 0;
    _this._fromMode = void 0;
    _this._toMode = void 0;
    _this.name = 'addLiquidity';
    _this._pool = _pool;
    _this._registry = _registry;
    _this._amounts = _amounts;
    _this._fromMode = _fromMode;
    _this._toMode = _toMode;
    return _this;
  }
  var _proto = AddLiquidity.prototype;
  _proto.run = /*#__PURE__*/function () {
    var _run = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_amountInStep, _forward) {
      var _this2 = this;
      var amountInStep, poolAddr, pools, amountOut;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              AddLiquidity.sdk.debug('[step@addLiquidity] run: ', {
                _pool: this._pool,
                _registry: this._registry,
                _amounts: this._amounts,
                _fromMode: this._fromMode,
                _toMode: this._toMode,
                _amountInStep: _amountInStep
              });
              /// [0, 0, 1] => [0, 0, amountIn]
              amountInStep = this._amounts.map(function (k) {
                return k === 1 ? _amountInStep : ethers.ethers.BigNumber.from(0);
              }); /// Get amount out based on the selected pool
              poolAddr = this._pool.toLowerCase();
              pools = AddLiquidity.sdk.contracts.curve.pools;
              if (!(poolAddr === pools.tricrypto2.address.toLowerCase())) {
                _context.next = 12;
                break;
              }
              assert(amountInStep.length === 3);
              _context.next = 9;
              return pools.tricrypto2.callStatic.calc_token_amount(amountInStep,
              // [DAI, USDC, USDT]; assumes that amountInStep is USDT
              true,
              // _is_deposit
              {
                gasLimit: 10000000
              });
            case 9:
              amountOut = _context.sent;
              _context.next = 31;
              break;
            case 12:
              if (!(poolAddr === pools.pool3.address.toLowerCase())) {
                _context.next = 19;
                break;
              }
              assert(amountInStep.length === 3);
              _context.next = 16;
              return pools.pool3.callStatic.calc_token_amount(amountInStep, true,
              // _is_deposit
              {
                gasLimit: 10000000
              });
            case 16:
              amountOut = _context.sent;
              _context.next = 31;
              break;
            case 19:
              if (!(this._registry === AddLiquidity.sdk.contracts.curve.registries.metaFactory.address)) {
                _context.next = 26;
                break;
              }
              assert(amountInStep.length === 2);
              _context.next = 23;
              return CurveMetaPool__factory.connect(this._pool, AddLiquidity.sdk.provider).callStatic['calc_token_amount(uint256[2],bool)'](amountInStep, true,
              // _is_deposit
              {
                gasLimit: 10000000
              });
            case 23:
              amountOut = _context.sent;
              _context.next = 31;
              break;
            case 26:
              if (!(this._registry === AddLiquidity.sdk.contracts.curve.registries.cryptoFactory.address)) {
                _context.next = 31;
                break;
              }
              assert(amountInStep.length === 2);
              _context.next = 30;
              return CurvePlainPool__factory.connect(this._pool, AddLiquidity.sdk.provider).callStatic.calc_token_amount(amountInStep, true,
              // _is_deposit
              {
                gasLimit: 10000000
              });
            case 30:
              amountOut = _context.sent;
            case 31:
              if (amountOut) {
                _context.next = 33;
                break;
              }
              throw new Error('No supported pool found');
            case 33:
              AddLiquidity.sdk.debug('[step@addLiquidity] finish: ', {
                amountInStep: amountInStep.toString(),
                amountOut: amountOut.toString()
              });
              return _context.abrupt("return", {
                name: this.name,
                amountOut: amountOut,
                encode: function encode(minAmountOut) {
                  return AddLiquidity.sdk.contracts.beanstalk["interface"].encodeFunctionData('addLiquidity', [_this2._pool, _this2._registry, amountInStep, minAmountOut, _this2._fromMode, _this2._toMode]);
                },
                decode: function decode(data) {
                  return AddLiquidity.sdk.contracts.beanstalk["interface"].decodeFunctionData('addLiquidity', data);
                },
                data: {
                  pool: this._pool,
                  registry: this._registry,
                  fromMode: this._fromMode,
                  toMode: this._toMode
                }
              });
            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function run(_x, _x2) {
      return _run.apply(this, arguments);
    }
    return run;
  }();
  return AddLiquidity;
}(BaseAction);

var RemoveLiquidityOneToken = /*#__PURE__*/function (_BaseAction) {
  _inheritsLoose(RemoveLiquidityOneToken, _BaseAction);
  function RemoveLiquidityOneToken(_pool, _registry, _tokenOut, _fromMode, _toMode) {
    var _this;
    if (_fromMode === void 0) {
      _fromMode = exports.FarmFromMode.INTERNAL_TOLERANT;
    }
    if (_toMode === void 0) {
      _toMode = exports.FarmToMode.INTERNAL;
    }
    _this = _BaseAction.call(this) || this;
    _this._pool = void 0;
    _this._registry = void 0;
    _this._tokenOut = void 0;
    _this._fromMode = void 0;
    _this._toMode = void 0;
    _this.name = 'RemoveLiquidityOneToken';
    _this._pool = _pool;
    _this._registry = _registry;
    _this._tokenOut = _tokenOut;
    _this._fromMode = _fromMode;
    _this._toMode = _toMode;
    return _this;
  }
  var _proto = RemoveLiquidityOneToken.prototype;
  _proto.run = /*#__PURE__*/function () {
    var _run = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_amountInStep, _forward) {
      var _this2 = this;
      var registry, coins, i, poolAddr, pools, amountOut;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              registry = RemoveLiquidityOneToken.sdk.contracts.curve.registries.metaFactory;
              _context.next = 4;
              return registry.callStatic.get_coins(this._pool, {
                gasLimit: 10000000
              });
            case 4:
              coins = _context.sent;
              i = coins.findIndex(function (addr) {
                return addr.toLowerCase() === _this2._tokenOut.toLowerCase();
              }); /// FIXME: only difference between this and addLiquidity is the boolean
              /// Get amount out based on the selected pool
              poolAddr = this._pool.toLowerCase();
              pools = RemoveLiquidityOneToken.sdk.contracts.curve.pools;
              if (!(poolAddr === pools.tricrypto2.address.toLowerCase())) {
                _context.next = 14;
                break;
              }
              _context.next = 11;
              return pools.tricrypto2.callStatic.calc_withdraw_one_coin(_amountInStep, i, {
                gasLimit: 10000000
              });
            case 11:
              amountOut = _context.sent;
              _context.next = 30;
              break;
            case 14:
              if (!(poolAddr === pools.pool3.address.toLowerCase())) {
                _context.next = 20;
                break;
              }
              _context.next = 17;
              return pools.pool3.callStatic.calc_withdraw_one_coin(_amountInStep, i, {
                gasLimit: 10000000
              });
            case 17:
              amountOut = _context.sent;
              _context.next = 30;
              break;
            case 20:
              if (!(this._registry === RemoveLiquidityOneToken.sdk.contracts.curve.registries.metaFactory.address)) {
                _context.next = 26;
                break;
              }
              _context.next = 23;
              return CurveMetaPool__factory.connect(this._pool, RemoveLiquidityOneToken.sdk.provider).callStatic['calc_withdraw_one_coin(uint256,int128)'](_amountInStep, i, {
                gasLimit: 10000000
              });
            case 23:
              amountOut = _context.sent;
              _context.next = 30;
              break;
            case 26:
              if (!(this._registry === RemoveLiquidityOneToken.sdk.contracts.curve.registries.cryptoFactory.address)) {
                _context.next = 30;
                break;
              }
              _context.next = 29;
              return CurvePlainPool__factory.connect(this._pool, RemoveLiquidityOneToken.sdk.provider).callStatic.calc_withdraw_one_coin(_amountInStep, i, {
                gasLimit: 10000000
              });
            case 29:
              amountOut = _context.sent;
            case 30:
              if (amountOut) {
                _context.next = 32;
                break;
              }
              throw new Error('No supported pool found');
            case 32:
              RemoveLiquidityOneToken.sdk.debug("[step@removeLiquidity] amountOut=" + amountOut.toString());
              return _context.abrupt("return", {
                name: this.name,
                amountOut: amountOut,
                encode: function encode(minAmountOut) {
                  return RemoveLiquidityOneToken.sdk.contracts.beanstalk["interface"].encodeFunctionData('removeLiquidityOneToken', [_this2._pool, _this2._registry, _this2._tokenOut, _amountInStep, minAmountOut, _this2._fromMode, _this2._toMode]);
                },
                decode: function decode(data) {
                  return RemoveLiquidityOneToken.sdk.contracts.beanstalk["interface"].decodeFunctionData('removeLiquidityOneToken', data);
                },
                data: {}
              });
            case 34:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function run(_x, _x2) {
      return _run.apply(this, arguments);
    }
    return run;
  }();
  return RemoveLiquidityOneToken;
}(BaseAction);

var TransferToken = /*#__PURE__*/function (_BaseAction) {
  _inheritsLoose(TransferToken, _BaseAction);
  function TransferToken(_tokenIn, _recipient, _fromMode, _toMode) {
    var _this;
    if (_fromMode === void 0) {
      _fromMode = exports.FarmFromMode.INTERNAL_TOLERANT;
    }
    if (_toMode === void 0) {
      _toMode = exports.FarmToMode.INTERNAL;
    }
    _this = _BaseAction.call(this) || this;
    _this._tokenIn = void 0;
    _this._recipient = void 0;
    _this._fromMode = void 0;
    _this._toMode = void 0;
    _this.name = 'transferToken';
    _this._tokenIn = _tokenIn;
    _this._recipient = _recipient;
    _this._fromMode = _fromMode;
    _this._toMode = _toMode;
    return _this;
  }
  var _proto = TransferToken.prototype;
  _proto.run = /*#__PURE__*/function () {
    var _run = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_amountInStep, _forward) {
      var _this2 = this;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              TransferToken.sdk.debug('[step@transferToken] run', {
                _fromMode: this._fromMode,
                _toMode: this._toMode,
                _amountInStep: _amountInStep
              });
              return _context.abrupt("return", {
                name: this.name,
                amountOut: _amountInStep,
                encode: function encode(_) {
                  return TransferToken.sdk.contracts.beanstalk["interface"].encodeFunctionData('transferToken', [_this2._tokenIn, _this2._recipient, _amountInStep, _this2._fromMode, _this2._toMode //
                  ]);
                },

                decode: function decode(data) {
                  return TransferToken.sdk.contracts.beanstalk["interface"].decodeFunctionData('transferToken', data);
                }
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function run(_x, _x2) {
      return _run.apply(this, arguments);
    }
    return run;
  }();
  return TransferToken;
}(BaseAction);



var ActionLibrary = {
  __proto__: null,
  Exchange: Exchange,
  ExchangeUnderlying: ExchangeUnderlying,
  WrapEth: WrapEth,
  UnwrapEth: UnwrapEth,
  AddLiquidity: AddLiquidity,
  RemoveLiquidityOneToken: RemoveLiquidityOneToken,
  TransferToken: TransferToken
};

var LibraryPresets = function LibraryPresets(sdk) {
  var _this = this;
  this.weth2usdt = void 0;
  this.usdt2bean = void 0;
  this.usdt2weth = void 0;
  this.bean2usdt = void 0;
  this.weth2bean = void 0;
  this.bean2weth = void 0;
  ///////// WETH <> USDT ///////////
  this.weth2usdt = function (fromMode, toMode) {
    return new Exchange(sdk.contracts.curve.pools.tricrypto2.address, sdk.contracts.curve.registries.cryptoFactory.address, sdk.tokens.WETH, sdk.tokens.USDT, fromMode, toMode);
  };
  this.usdt2weth = function (fromMode, toMode) {
    return new Exchange(sdk.contracts.curve.pools.tricrypto2.address, sdk.contracts.curve.registries.cryptoFactory.address, sdk.tokens.USDT, sdk.tokens.WETH, fromMode, toMode);
  };
  ///////// BEAN <> USDT ///////////
  this.usdt2bean = function (fromMode, toMode) {
    return new ExchangeUnderlying(sdk.contracts.curve.pools.beanCrv3.address, sdk.tokens.USDT, sdk.tokens.BEAN, fromMode, toMode);
  };
  this.bean2usdt = function (fromMode, toMode) {
    return new ExchangeUnderlying(sdk.contracts.curve.pools.beanCrv3.address, sdk.tokens.BEAN, sdk.tokens.USDT, fromMode, toMode);
  };
  //////// WETH <> BEAN
  this.weth2bean = function (fromMode, toMode) {
    return [_this.weth2usdt(fromMode, exports.FarmToMode.INTERNAL), _this.usdt2bean(exports.FarmFromMode.INTERNAL, toMode)];
  };
  this.bean2weth = function (fromMode, toMode) {
    return [_this.bean2usdt(fromMode, exports.FarmToMode.INTERNAL), _this.usdt2weth(exports.FarmFromMode.INTERNAL, toMode)];
  };
};
LibraryPresets.sdk = void 0;

// This is the namespace holder for sdk.Works.whatever
var Farm = /*#__PURE__*/function () {
  function Farm(sdk) {
    this.actions = void 0;
    this.presets = void 0;
    Farm.sdk = sdk;
    this.actions = ActionLibrary;
    this.presets = new LibraryPresets(Farm.sdk);
  }
  var _proto = Farm.prototype;
  _proto.create = function create() {
    return new Work(Farm.sdk);
  };
  return Farm;
}();
Farm.sdk = void 0;

var Root = /*#__PURE__*/function () {
  /** @DISCUSS this pattern */

  function Root(sdk) {
    Root.sdk = sdk;
    Root.address = sdk.contracts.root.address;
  }
  /**
   * Mint ROOT tokens. The `Root.sol` contract supports Beanstalk's
   * Deposit Transfer permits; this function unpacks a provided
   * signed permit into the proper argument slots.
   *
   * @dev Passing _overrides directly as the last parameter
   * of a contract method seems to make ethers treat it like
   * a parameter for the contract call. Instead, we unpack and
   * thus pass an empty object for overrides if _overrides is undef.
   */
  var _proto = Root.prototype;
  _proto.mint =
  /*#__PURE__*/
  function () {
    var _mint = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_depositTransfers, _destination, _permit, _overrides) {
      var permit, _permit2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_permit) {
                _context.next = 12;
                break;
              }
              if (!_permit.typedData.message.token) {
                _context.next = 6;
                break;
              }
              permit = _permit;
              return _context.abrupt("return", Root.sdk.contracts.root.mintWithTokenPermit(_depositTransfers, _destination, permit.typedData.message.token, permit.typedData.message.value, permit.typedData.message.deadline, permit.split.v, permit.split.r, permit.split.s, _extends({}, _overrides)));
            case 6:
              if (!_permit.typedData.message.tokens) {
                _context.next = 11;
                break;
              }
              _permit2 = _permit;
              return _context.abrupt("return", Root.sdk.contracts.root.mintWithTokensPermit(_depositTransfers, _destination, _permit2.typedData.message.tokens, _permit2.typedData.message.values, _permit2.typedData.message.deadline, _permit2.split.v, _permit2.split.r, _permit2.split.s, _extends({}, _overrides)));
            case 11:
              throw new Error('Malformatted permit');
            case 12:
              return _context.abrupt("return", Root.sdk.contracts.root.mint(_depositTransfers, _destination, _extends({}, _overrides)));
            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    function mint(_x, _x2, _x3, _x4) {
      return _mint.apply(this, arguments);
    }
    return mint;
  }();
  return Root;
}();
Root.sdk = void 0;
Root.address = void 0;

var BeanstalkSDK = /*#__PURE__*/function () {
  //

  //

  //

  // public readonly swap: Swap;

  function BeanstalkSDK(config) {
    var _this$provider$networ, _this$provider, _this$provider$networ2;
    this.DEBUG = void 0;
    this.signer = void 0;
    this.provider = void 0;
    this.providerOrSigner = void 0;
    this.source = void 0;
    this.chainId = void 0;
    this.addresses = void 0;
    this.contracts = void 0;
    this.tokens = void 0;
    this.graphql = void 0;
    this.queries = void 0;
    this.farm = void 0;
    this.silo = void 0;
    this.events = void 0;
    this.sun = void 0;
    this.permit = void 0;
    this.root = void 0;
    this.handleConfig(config);
    // FIXME
    // @ts-ignore
    this.chainId = enumFromValue((_this$provider$networ = (_this$provider = this.provider) == null ? void 0 : (_this$provider$networ2 = _this$provider.network) == null ? void 0 : _this$provider$networ2.chainId) != null ? _this$provider$networ : 1, exports.ChainId);
    this.source = (config == null ? void 0 : config.source) || exports.DataSource.SUBGRAPH;
    // Globals
    this.addresses = addresses;
    this.contracts = new Contracts(this);
    this.tokens = new Tokens$1(this);
    this.graphql = new graphqlRequest.GraphQLClient((config == null ? void 0 : config.subgraphUrl) || 'https://graph.node.bean.money/subgraphs/name/beanstalk');
    this.queries = getSdk(this.graphql);
    // Facets
    // this.swap = new Swap(this);
    this.silo = new Silo(this);
    this.events = new EventManager(this);
    this.sun = new Sun(this);
    this.permit = new Permit(this);
    this.root = new Root(this);
    // Internal
    this.farm = new Farm(this);
  }
  var _proto = BeanstalkSDK.prototype;
  _proto.handleConfig = function handleConfig(config) {
    var _config$signer2, _config$DEBUG;
    if (config === void 0) {
      config = {};
    }
    if (config.rpcUrl) {
      config.provider = this.getProviderFromUrl(config.rpcUrl);
    }
    this.signer = config.signer;
    if (!config.provider && !config.signer) {
      console.log('WARNING: No provider or signer specified, using DefaultProvider.');
      this.provider = ethers.ethers.getDefaultProvider();
    } else {
      var _config$signer$provid, _config$signer;
      this.provider = (_config$signer$provid = (_config$signer = config.signer) == null ? void 0 : _config$signer.provider) != null ? _config$signer$provid : config.provider;
    }
    this.providerOrSigner = (_config$signer2 = config.signer) != null ? _config$signer2 : config.provider;
    this.DEBUG = (_config$DEBUG = config.DEBUG) != null ? _config$DEBUG : false;
    this.source = exports.DataSource.LEDGER; // FIXME
  };
  _proto.debug = function debug() {
    var _console;
    if (!this.DEBUG) return;
    (_console = console).debug.apply(_console, arguments);
  };
  _proto.getProviderFromUrl = function getProviderFromUrl(url) {
    if (url.startsWith('ws')) {
      return new ethers.ethers.providers.WebSocketProvider(url);
    }
    if (url.startsWith('http')) {
      return new ethers.ethers.providers.JsonRpcProvider();
    }
    throw new Error('rpcUrl is invalid');
  };
  _proto.getAccount = /*#__PURE__*/function () {
    var _getAccount = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_account) {
      var account;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_account) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", _account.toLowerCase());
            case 2:
              if (this.signer) {
                _context.next = 4;
                break;
              }
              throw new Error('Cannot get account without a signer');
            case 4:
              _context.next = 6;
              return this.signer.getAddress();
            case 6:
              account = _context.sent;
              if (account) {
                _context.next = 9;
                break;
              }
              throw new Error('Failed to get account from signer');
            case 9:
              return _context.abrupt("return", account.toLowerCase());
            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function getAccount(_x) {
      return _getAccount.apply(this, arguments);
    }
    return getAccount;
  }();
  _proto.deriveSource = function deriveSource(config) {
    return (config == null ? void 0 : config.source) || this.source;
  };
  _proto.deriveConfig = function deriveConfig(key, _config) {
    return (_config == null ? void 0 : _config[key]) || this[key];
  };
  return BeanstalkSDK;
}();

function assert$1(value, message) {
  if (value === false || value === null || typeof value === 'undefined') {
    throw new Error(message || 'Assertion failed');
  }
}
/**
 *
 * @export
 * @class DecimalBigNumber
 */
var DecimalBigNumber = /*#__PURE__*/function () {
  function DecimalBigNumber(value, decimals) {
    this._decimals = void 0;
    this._value = void 0;
    if (typeof value === 'string') {
      var _value = value.trim() === '' || isNaN(Number(value)) ? '0' : value;
      var _decimals = decimals === undefined ? this._inferDecimalAmount(value) : this._ensurePositive(decimals);
      var formatted = this._setDecimalAmount(_value, _decimals);
      this._value = utils.parseUnits(formatted, _decimals);
      this._decimals = _decimals;
      return;
    }
    assert$1(decimals !== undefined, 'Decimal cannot be undefined');
    this._value = value;
    this._decimals = decimals;
  }
  var _proto = DecimalBigNumber.prototype;
  _proto._inferDecimalAmount = function _inferDecimalAmount(value) {
    var _value$split = value.split('.'),
      decimalStringOrUndefined = _value$split[1];
    return (decimalStringOrUndefined == null ? void 0 : decimalStringOrUndefined.length) || 0;
  }
  /**
   * Sets a value to a specific decimal amount
   *
   * Trims unnecessary decimals
   * Or pads decimals if needed
   *
   * @param value Input value as a string
   * @param decimals Desired decimal amount
   */;
  _proto._setDecimalAmount = function _setDecimalAmount(value, decimals) {
    var _value$split2 = value.split('.'),
      integer = _value$split2[0],
      _decimalsOrUndefined = _value$split2[1];
    var _decimals = _decimalsOrUndefined || '';
    var paddingRequired = this._ensurePositive(decimals - _decimals.length);
    return integer + '.' + _decimals.substring(0, decimals) + '0'.repeat(paddingRequired);
  }
  /**
   * Ensures the desired decimal amount is positive
   */;
  _proto._ensurePositive = function _ensurePositive(decimals) {
    return Math.max(0, decimals);
  }
  /**
   * Converts this value to a BigNumber
   *
   * Often used when passing this value as
   * an argument to a contract method
   */;
  _proto.toBigNumber = function toBigNumber(decimals) {
    return decimals === undefined ? this._value : new DecimalBigNumber(this.toString(), decimals)._value;
  }
  /**
   * Converts this value to a string
   *
   * By default, the string returned will:
   * - Have the same decimal amount that it was initialized with
   * - Have trailing zeroes removed
   * - Not have thousands separators
   *
   * This ensures that the number string is accurate.
   *
   * To override any of these settings, add the `args` object as a parameter.
   *
   * @param args an object containing any of the properties: decimals, trim, format
   * @returns a string version of the number
   */;
  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      decimals = _ref.decimals,
      _ref$trim = _ref.trim,
      trim = _ref$trim === void 0 ? true : _ref$trim,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? false : _ref$format;
    var result = utils.formatUnits(this._value, this._decimals);
    // Add thousands separators
    if (format) result = utils.commify(result);
    // We default to the number of decimal places specified
    var _decimals = decimals === undefined ? this._decimals : this._ensurePositive(decimals);
    result = this._setDecimalAmount(result, _decimals);
    // We default to trimming trailing zeroes (and decimal points), unless there is an override
    if (trim) result = result.replace(/(?:\.|(\..*?))\.?0*$/, '$1');
    return result;
  }
  /**
   * @deprecated
   * Please avoid using this method.
   * If used for calculations: rather than converting this DecimalBigNumber
   * "down" to a number, convert the other number "up" to a DecimalBigNumber.
   *
   * Used when performing approximate calculations with
   * the number where precision __is not__ important.
   */;
  _proto.toApproxNumber = function toApproxNumber() {
    return parseFloat(this.toString());
  }
  /**
   * Determines if the two values are equal
   */;
  _proto.eq = function eq(value) {
    var valueAsDBN = value instanceof DecimalBigNumber ? value : new DecimalBigNumber(value);
    // Normalize decimals to the largest of the two values
    var largestDecimalAmount = Math.max(valueAsDBN._decimals, this._decimals);
    // Normalize values to the correct decimal amount
    var normalisedThis = new DecimalBigNumber(this.toString(), largestDecimalAmount);
    var normalisedValue = new DecimalBigNumber(valueAsDBN.toString(), largestDecimalAmount);
    return normalisedThis._value.eq(normalisedValue._value);
  }
  /**
   * Subtracts this value by the value provided
   */;
  _proto.sub = function sub(value) {
    var valueAsDBN = value instanceof DecimalBigNumber ? value : new DecimalBigNumber(value);
    // Normalize decimals to the largest of the two values
    var largestDecimalAmount = Math.max(valueAsDBN._decimals, this._decimals);
    // Normalize values to the correct decimal amount
    var normalisedThis = new DecimalBigNumber(this.toString(), largestDecimalAmount);
    var normalisedValue = new DecimalBigNumber(valueAsDBN.toString(), largestDecimalAmount);
    return new DecimalBigNumber(normalisedThis._value.sub(normalisedValue._value), largestDecimalAmount);
  }
  /**
   * Sums this value and the value provided
   */;
  _proto.add = function add(value) {
    var valueAsDBN = value instanceof DecimalBigNumber ? value : new DecimalBigNumber(value);
    // Normalize decimals to the largest of the two values
    var largestDecimalAmount = Math.max(valueAsDBN._decimals, this._decimals);
    // Normalize values to the correct decimal amount
    var normalisedThis = new DecimalBigNumber(this.toString(), largestDecimalAmount);
    var normalisedValue = new DecimalBigNumber(valueAsDBN.toString(), largestDecimalAmount);
    return new DecimalBigNumber(normalisedThis._value.add(normalisedValue._value), largestDecimalAmount);
  };
  _proto.isPositive = function isPositive() {
    return this._value.gte(0);
  }
  /**
   * Determines if this value is greater than the provided value
   */;
  _proto.gt = function gt(value) {
    var valueAsDBN = value instanceof DecimalBigNumber ? value : new DecimalBigNumber(value);
    // Normalize decimals to the largest of the two values
    var largestDecimalAmount = Math.max(valueAsDBN._decimals, this._decimals);
    // Normalize values to the correct decimal amount
    var normalisedThis = new DecimalBigNumber(this.toString(), largestDecimalAmount);
    var normalisedValue = new DecimalBigNumber(valueAsDBN.toString(), largestDecimalAmount);
    return normalisedThis._value.gt(normalisedValue._value);
  }
  /**
   * Determines if this value is less than the provided value
   */;
  _proto.lt = function lt(value) {
    var valueAsDBN = value instanceof DecimalBigNumber ? value : new DecimalBigNumber(value);
    // Normalize decimals to the largest of the two values
    var largestDecimalAmount = Math.max(valueAsDBN._decimals, this._decimals);
    // Normalize values to the correct decimal amount
    var normalisedThis = new DecimalBigNumber(this.toString(), largestDecimalAmount);
    var normalisedValue = new DecimalBigNumber(valueAsDBN.toString(), largestDecimalAmount);
    return normalisedThis._value.lt(normalisedValue._value);
  }
  /**
   * Multiplies this value by the provided value
   */;
  _proto.mul = function mul(value) {
    var valueAsDBN = value instanceof DecimalBigNumber ? value : new DecimalBigNumber(value);
    var product = this._value.mul(valueAsDBN._value);
    // Multiplying two BigNumbers produces a product with a decimal
    // amount equal to the sum of the decimal amounts of the two input numbers
    return new DecimalBigNumber(product, this._decimals + valueAsDBN._decimals);
  }
  /**
   * Divides this value by the provided value
   *
   * By default, this returns a value whose decimal amount is equal
   * to the sum of the decimal amounts of the two values used.
   * If this isn't enough, you can specify a desired
   * decimal amount using the second function argument.
   *
   * @param decimals The expected decimal amount of the output value
   */;
  _proto.div = function div(value, decimals) {
    var valueAsDBN = value instanceof DecimalBigNumber ? value : new DecimalBigNumber(value);
    var _decimals = decimals === undefined ? this._decimals + valueAsDBN._decimals : this._ensurePositive(decimals);
    // When we divide two BigNumbers, the result will never
    // include any decimal places because BigNumber only deals
    // with whole integer values. Therefore, in order for us to
    // include a specific decimal amount in our calculation, we need to
    // normalize the decimal amount of the two numbers, such that the difference
    // in their decimal amount is equal to the expected decimal amount
    // of the result, before we do the calculation
    //
    // E.g:
    // 22/5 = 4.4
    //
    // But ethers would return:
    // 22/5 = 4 (no decimals)
    //
    // So before we calculate, we add n padding zeros to the
    // numerator, where n is the expected decimal amount of the result:
    // 220/5 = 44
    //
    // Normalized to the expected decimal amount of the result
    // 4.4
    var normalisedThis = new DecimalBigNumber(this.toString(), _decimals + valueAsDBN._decimals);
    var quotient = normalisedThis._value.div(valueAsDBN._value);
    // Return result with the expected output decimal amount
    return new DecimalBigNumber(quotient, _decimals);
  };
  _proto.abs = function abs() {
    if (this._value.lt(0)) {
      return new DecimalBigNumber(this._value.mul('-1'), this._decimals);
    } else {
      return this;
    }
  }
  //only works for positive exponents
  ;
  _proto.pow = function pow(n) {
    if (n == 0) return new DecimalBigNumber('1');else if (n == 1) return this;else if (this.eq('0') && n !== 0) return new DecimalBigNumber('0');else {
      var z = new DecimalBigNumber(this._value, this._decimals);
      for (var i = 1; i < n; i++) {
        z = z.mul(this);
      }
      return z;
    }
  };
  return DecimalBigNumber;
}();
// var dbn1 = new DecimalBigNumber('22')
// var dbn2 = new DecimalBigNumber('5')
// var dbn3 = dbn1.div(dbn2, 24);
// var dbn4 = dbn2.pow(2)
// console.log(dbn3.toString())
// export class DecimalBigNumber {
//   constructor(readonly value: BigNumber, readonly divisor: BigNumber) {
//     this.value = value;
//     this.divisor = divisor;
//   }
//   static fromBN(value: BigNumber, decimals: number): DecimalBigNumber {
//     return new DecimalBigNumber(value, divisorFromDecimals(decimals));
//   }
//   /**
//    * Extract as a BigNumber with the specified number of decimal places
//    */
//   toBN(decimals: number): BigNumber {
//     return this.rescaledValue(divisorFromDecimals(decimals));
//   }
//   /**
//    * Create by parsing the floating point string using ethers.utils.parseUnits
//    */
//   static parseUnits(value: string, totalDecimals: number): DecimalBigNumber {
//     let [int, safeDecimals] = value.split('.');
//     if (safeDecimals && safeDecimals.length > totalDecimals) {
//       safeDecimals = safeDecimals.substring(0, totalDecimals);
//     }
//     const safeValue = safeDecimals ? `${int}.${safeDecimals}` : int;
//     const bnIn = ethers.utils.parseUnits(safeValue, totalDecimals);
//     return DecimalBigNumber.fromBN(bnIn, totalDecimals);
//   }
//   /**
//    * A floating point string representation using ethers.utils.formatUnits. If
//    * decimals is not specified, the full precision will used
//    */
//   formatUnits(decimals?: number): string {
//     if (decimals == undefined) {
//       decimals = this.getDecimals();
//     }
//     return ethers.utils.formatUnits(this.toBN(decimals), decimals);
//   }
//   /**
//    * Returns the number of decimal places stored
//    */
//   getDecimals(): number {
//     let decimals = 0;
//     let divisor = this.divisor;
//     while (divisor.gt(1)) {
//       divisor = divisor.div(10);
//       decimals += 1;
//     }
//     return decimals;
//   }
//   /**
//    * add: to preserve precision, output will have the max divisor of the
//    * two inputs
//    */
//   add(other: DecimalBigNumber): DecimalBigNumber {
//     const divisor = maxBN(this.divisor, other.divisor);
//     const value = this.rescaledValue(divisor).add(other.rescaledValue(divisor));
//     return new DecimalBigNumber(value, divisor);
//   }
//   /**
//    * sub: to preserve precision, output will have the max divisor of the
//    * two inputs
//    */
//   sub(other: DecimalBigNumber): DecimalBigNumber {
//     const divisor = maxBN(this.divisor, other.divisor);
//     const value = this.rescaledValue(divisor).sub(other.rescaledValue(divisor));
//     return new DecimalBigNumber(value, divisor);
//   }
//   /**
//    * mul: to preserve precision, output will have the combined divisor of the
//    * two inputs
//    */
//   mul(other: DecimalBigNumber): DecimalBigNumber {
//     const divisor = this.divisor.mul(other.divisor);
//     const value = this.value.mul(other.value);
//     return new DecimalBigNumber(value, divisor);
//   }
//   /**
//    * div: can always lose precision. Hence the caller must provide the
//    * target number of decimal places.
//    * Note this rounds 'half away from zero'
//    */
//   div(other: DecimalBigNumber, targetDecimals: number): DecimalBigNumber {
//     validateInteger(targetDecimals);
//     const divisor = BigNumber.from(10).pow(targetDecimals);
//     const numerator = this.value.mul(other.divisor).mul(divisor);
//     const denominator = other.value.mul(this.divisor);
//     let truncatedResult = numerator.div(denominator);
//     // The divisions truncate the results to integer parts only.
//     // So in order to round, calculate the fractional remainder with:
//     //    [(numerator x 10) / denominator] - [(numerator/denominator) x 10]
//     const resultTimesTen = numerator.mul(10).div(denominator);
//     const remainder = resultTimesTen.abs().sub(truncatedResult.abs().mul(10));
//     const roundup = remainder.gte(5);
//     if (roundup) {
//       truncatedResult = truncatedResult.isNegative() ? truncatedResult.sub(1) : truncatedResult.add(1);
//     }
//     return new DecimalBigNumber(truncatedResult, divisor);
//   }
//   lt(other: DecimalBigNumber): boolean {
//     const divisor = maxBN(this.divisor, other.divisor);
//     return this.rescaledValue(divisor).lt(other.rescaledValue(divisor));
//   }
//   lte(other: DecimalBigNumber): boolean {
//     const divisor = maxBN(this.divisor, other.divisor);
//     return this.rescaledValue(divisor).lte(other.rescaledValue(divisor));
//   }
//   gt(other: DecimalBigNumber): boolean {
//     const divisor = maxBN(this.divisor, other.divisor);
//     return this.rescaledValue(divisor).gt(other.rescaledValue(divisor));
//   }
//   isZero(): boolean {
//     return this.value.isZero();
//   }
//   min(other: DecimalBigNumber): DecimalBigNumber {
//     return this.lt(other) ? this : other;
//   }
//   // Note this rounds 'half away from zero'
//   private rescaledValue(todivisor: BigNumber): BigNumber {
//     let result = this.value.mul(todivisor).div(this.divisor);
//     if (this.value.isZero() || this.divisor.eq(1)) {
//       return result;
//     }
//     const roundup = this.value
//       .abs()
//       .mul(todivisor)
//       .mod(this.divisor)
//       .gte(this.divisor.div(2));
//     if (roundup) {
//       result = result.isNegative() ? result.sub(1) : result.add(1);
//     }
//     return result;
//   }
// }
// export const DBN_ZERO = DecimalBigNumber.fromBN(BigNumber.from(0), 0);
// export const DBN_ONE_HUNDRED = DecimalBigNumber.fromBN(BigNumber.from(100), 0);
// export function minDBN(v1: DecimalBigNumber, v2: DecimalBigNumber): DecimalBigNumber {
//   return v1.lte(v2) ? v1 : v2;
// }
// function divisorFromDecimals(decimals: number): BigNumber {
//   validateInteger(decimals);
//   return BigNumber.from(10).pow(decimals);
// }
// export function maxBN(v1: BigNumber, v2: BigNumber): BigNumber {
//   return v1.gte(v2) ? v1 : v2;
// }
// function validateInteger(v: number): void {
//   if (v % 1) {
//     throw new RangeError(`Expected integer, found ${v}`);
//   }
// }

exports.BeanNumber = BeanNumber;
exports.BeanstalkSDK = BeanstalkSDK;
exports.BeanstalkToken = BeanstalkToken;
exports.DecimalBigNumber = DecimalBigNumber;
exports.ERC20Token = ERC20Token;
exports.NativeToken = NativeToken;
exports.Utils = index;
//# sourceMappingURL=sdk.cjs.development.js.map
