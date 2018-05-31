## redux构建
```
src
│
├─components
│      Tbody.js
│      Tfooter.js
│      Theader.js
│
├─static
│      api.js
│
└─store
    │  action-types.js  //定义有哪些动作
    │  index.js     //导出store
    │
    ├─actions   //派发action
    │  index.js
    │
    └─reducer   //合并reducer
      index.js
      
$ yarn start
$ yarn build
```