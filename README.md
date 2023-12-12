# @better-network/react-native-nfc-passport-reader

This package is a React native wrapper which handles reading an NFC Enabled passport using iOS 13 CoreNFC APIS

## Installation

```sh
npm install @better-network/react-native-nfc-passport-reader
```

## Usage

```js
import { scanPassport, NFCPassportModel } from '@better-network/react-native-nfc-passport-reader';

// birthdate & expiryDate must be of type iso8601 string
 scanPassport({
    birthDate: "",
    expiryDate: "",  
    passportNumber: "",
    useNewVerificationMethod: true
  }).then((result) => {
      if ('error' in result) {
        // Errors during scanning session
      }
      // Do something with result of type NFCPassportModel
    }).catch(err => {
      console.log(err)
    })
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT