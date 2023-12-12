import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'react-native-nfc-passport-reader' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const NfcPassportReader = NativeModules.NfcPassportReader ? NativeModules.NfcPassportReader : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export function scanPassport(options) {
  return NfcPassportReader.scanPassport(options);
}
export * from './interfaces';
//# sourceMappingURL=index.js.map