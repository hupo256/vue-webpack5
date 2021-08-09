基于 vue + webpack5 搭建的微前端 业务层。 自己可以独自运行，也可以为其他项目提供 vue 组件。
在其他项目中用 vuera 作为中间件，磨平 react 与 vue 之间的差异。
目录下的 app1\app2 自己构成微前端最基本的框架
app1 与其 h5-samlple 、remote 构成另一个微前端框架

```
cd app1
npm install
npm run start
```

启动端口 3000

```
cd app2
npm install
npm run start
```

启动端口 3001
