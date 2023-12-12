"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  scanPassport: true
};
exports.scanPassport = scanPassport;
var _reactNative = require("react-native");
var _interfaces = require("./interfaces");
Object.keys(_interfaces).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _interfaces[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interfaces[key];
    }
  });
});
const LINKING_ERROR = `The package 'react-native-nfc-passport-reader' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const NfcPassportReader = _reactNative.NativeModules.NfcPassportReader ? _reactNative.NativeModules.NfcPassportReader : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function scanPassport(options) {
  return NfcPassportReader.scanPassport(options);
}
//# sourceMappingURL=index.js.map