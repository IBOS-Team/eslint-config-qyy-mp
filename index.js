module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    // "standard",
    require.resolve('./rules')
  ],
  // "plugins": [
  //   "standard",
  //   "promise"
  // ],
  // "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      // http://es6.ruanyifeng.com/#docs/object#对象的扩展运算符
      "experimentalObjectRestSpread": true
    }
  },
  "globals": {
    "wx": true,
    "App": true,
    "Page": true,
    "getApp": true,
    "getCurrentPages": true,
    "Component": true,
  },
  "rules": {}
};
