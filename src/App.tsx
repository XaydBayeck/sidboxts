import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import CardsDrawers from "./components/card/CardsDrawers";
import blogs from "./resources/blogs.json";
import Titlebar from './components/titlebar/Titlebar';

let nblogs = blogs.map((blog) => {
  let newBlog = {
    ...blog,
    content: {
      ...blog.content,
      converToText: () => {
        return blog.content.str;
      },
    },
    tkey: {},
  };
  return newBlog;
});

// <img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar blogName="Sid's blog"></Topbar>
        <Titlebar blogName="Sid's Blog" links={["bilibili", "github"]}></Titlebar>
        <CardsDrawers cards={nblogs} />
      </header>
    </div>
  );
}

export default App;
