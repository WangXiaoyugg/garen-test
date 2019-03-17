const classNames = require('./classnames.js');
console.log(classNames('foo', 'bar') === 'foo bar');
console.log(classNames('foo', null, ['bar'], undefined) === 'foo bar');
console.log(classNames('foo', null, ['bar'], {"test": true}, {"good": false}) === 'foo bar test');


