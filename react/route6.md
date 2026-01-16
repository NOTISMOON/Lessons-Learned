## 单页面和多页面

多页面

本质是多个html 文件  通过window.location 进行跳转 每次跳转都要重新加载资源性能比较慢

SEO友好适合C端隔离性好  每一个页面可以是一个独立的项目 

单页面

本质 只有一个html文件 通过js控制  比较适合B端项目

缺陷SEO不好  

优点 页面跳转不刷新 

## react-router与 react-router-dom

react-router  用于跨端开发 Native

react-router-dom用于网页开发 依赖react-router



```node
npm i react-router-dom
```

## 路由模式

1. BrowserRouter
2. HashRouterm