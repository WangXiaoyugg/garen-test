# 笔记
- e.target 和 e.currentTarget的区别

## e.target 和 e.currentTarget的区别
- e.target 指向触发事件监听的对象, 事件委托
- e.currentTarget 指向添加事件监听的对象
- [e.target与e.currentTarget的区别](https://www.jianshu.com/p/1dd668ccc97a)

## 自动发布阶段
- 修改config.yml
- 选择性的加版本号
- circle-ci tag filter
- `js < jsx , ts < tsx`, X表示扩展
    
## 静态引入和动态引入
- 静态引入，能使用tree-shaking做性能优化
   import A from A,import B from B,import C from C
- 非静态引入，方便，importAll from 'lib'
