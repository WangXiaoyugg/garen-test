# garen-test

- 未集成测试，jest,ts-jest
- importAlIcons
```
// 静态引入，能使用tree-shaking做性能优化
import A from A
import B from B
import C from C
对比
// 非静态，方便
importAll from 'lib'


```