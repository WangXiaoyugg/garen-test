// 立即执行函数，创建作用域
(function(){
    'use strict' // 使用严格模式
    // 兼容各种模块规范
    if(typeof module !== 'undefined' && module.exports) {
        classNames.default = classNames;  // 支持在node使用第三包import语法
        module.exports = classNames;
    } else if(typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define('classnames', [], function() { // amd
            return classNames;
        })
    } else {
        window.classNames = classNames; // 默认挂载到window
    }
    
    var hasOwn = {}.hasOwnProperty; // 验证是否对自身的属性，而不是继承于原型链

    function classNames() {
        var classes = []; // 保存classNames
        for(var i = 0; i < arguments.length; i++) {
            var arg = arguments[i]
            if(!arg) continue;

            var argType = typeof arg; // 区分传入字符串,对象,数字,其他类型

            if (argType === 'string' || argType === 'number') {
                classes.push(arg);
            } else if (Array.isArray(arg) && arg.length) {
                var inner = classNames.apply(null, arg); // 递归解析参数为数组，扁平化数组
                if(inner) {
                    classes.push(inner) 
                }
            } else if(argType === 'object') {
                for(var key in arg) {
                    if(hasOwn.call(arg, key) && arg[key]) {
                        classes.push(key);    
                    }
                }
            }
        }
        return classes.join(' ')
    }
}())


