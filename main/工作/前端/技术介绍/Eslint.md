```js
var babelParser = require('@babel/eslint-parser');

module.exports = [

{

// 忽略

ignores: ['node_modules/*', 'src/assets/*', 'src/sub-projects/*', 'bin/*'],

// JavaScript 进行 linting 相关的设置的对象。

languageOptions: {

ecmaVersion: '2017',

// 解析器

parser: babelParser,

// 附加选项

parserOptions: {

requireConfigFile: true,

babelOptions: {

babelrc: false,

configFile: false,

// your babel options

presets: ['@babel/preset-env'],

},

},

// 全局范围的其他对象的对象。

globals: {

_: 'readonly',

t: 'readonly',

globals: 'readonly',

window: 'writable',

IS_DEV: 'readonly',

USER: 'readonly',

GLOBAL_CONFIG: 'readonly',

Conf: 'readonly',

Config: 'readonly',

logger: 'readonly',

Encrypt: 'readonly',

PRODUCTS_BRIEF: 'readonly',

},

},

plugins:[],

rules: {

semi: 'error',

'prefer-const': 'error',

},

},

];
```

## import/order

```js
// pattern 语法

//@(react|prop-types)* 分组

// notify/** 以notify/开头

```