# windows-store-link [![Build Status](https://travis-ci.org/xipasduarte/windows-store-link.svg?branch=master)](https://travis-ci.org/xipasduarte/windows-store-link)


## Install

```
$ npm install --save windows-store-link
```


## Usage

```js
var googleStoreLink = require('google-store-link');

googleStoreLink(id, lang);

// Example
windowsStoreLink('duolingo-learn-languages-for-free/9wzdncrcv5xn', 'pt-pt');
//=> https://www.microsoft.com/pt-pt/store/apps/duolingo-learn-languages-for-free/9wzdncrcv5xn
```


## API

### windowsStoreLink(id, lang)

#### id
*Required*

Type: `string`

The string that identifies the application on Microsoft Store for applications.

`https://www.microsoft.com/pt-pt/store/apps/[the_id]`

#### lang
*Optional*

Type: `string`;

Default: `null` (the site detects your language preference);

`https://www.microsoft.com/[lang]/store/apps/[the_id]`

The language can be generally defined like "en" (English) or "pt" (Portuguese), but also more localized like "pt-br" (Portuguese - Portugal).

**Note:** When you put the general identifier the module does a doubling of that key (`"pt" => "pt-pt"`) as this is required for the link construction. This way it is possible to use the same general language identifier when using [store-link](https://www.npmjs.com/package/store-link).

## License

MIT © [Pedro Duarte](https://github.com/xipasduarte)
