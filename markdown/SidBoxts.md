前言：
> 想自己从零搭建一个自己的博客（从零是指不使用Hexo之类的东西直接建站），顺带学习相关的框架编码等知识。
> 选择了Typescript + React + GitHub Pages 的方案。
> 实际上最终目标是用rust来实现前后端，后端使用Rocket，前端使用yew.rs框架。

### React + Typescript
根据官方文档[《React Typescript Cheatsheet》](https://react-typescript-cheatsheet.netlify.app/)在命令行中使用如下命令

```sh
npx creat-react-app name-of-app --template typescript
```

或者可以`npm i -g creat-react-app`再使用`creat-react-app`来生成React的单页应用项目。
这里我命名为sidboxts用来与以后的Rust项目区分。

此外如果想构建组件库之类更加灵活的需求，文档也提供了其他许多工具的使用案例（有些我都不认识）。

也许你使用的是[《开始-React》](https://react.docschina.org/docs/getting-started.html)这里的文档,
要注意Typescript是强类型语言，许多地方是需要标注类型的，使用类组件时尤其要注意。

### GitHub Pages
github可以使用GitHub Pages来生成静态网页或着单页应用（也就是说可以不用考虑后端直接部署）。
使用GitHub Pages首先先安装[github cli](https://cli.github.com/)。我是Archlinux用户，安装方法为：
```sh
sudo pacman -S github-cli
```
如果是其他OS请务必去官网查看安装方法。

安装后先建立对应的github仓库比如我的仓库[XaydBayeck/sidboxts](https://github.com/XaydBayeck/sidboxts)

然后在项目的`package.json`文件中增加以下俩行

```json
将这两行
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
添加到`scripts`里面

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```

然后运行

```sh
git push

npm run predeploy
npm run deploy
```

Github 现在取消在命令行登陆推送代码了。。。
所以还需要在仓库目录下用`github cli`进行登陆或者获取`token`

运行如下命令进行登陆

```sh
gh auth login
```
然后就可以愉快的`push`了。

#### Card

在我的`Card`组件里使用范型参数，将来放进`Card`里的不仅有博文，可能还有项目展示，其他我的网站等等。

关于博客文章的上传，因为是我自己使用，所以没有制作后台页面的打算，我计划编写一个命令行工具来对博文和一些项目进行打包
自动生成Card参数到博客上进行展示。

这是目前为止的效果：

![图呢](/home/sid/Downloads/Sid'sBlog.png)
