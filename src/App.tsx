// import logo from './logo.svg';
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import CardsDrawers from "./components/card/CardsDrawers";
import blogs from "./resources/blogs.json";
import Titlebar from './components/titlebar/Titlebar';
import HomeTitle from './components/titlebar/HomeTitle'

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

let links = [
  {
    linkName: "bilibili",
    linkPath: "https://www.bilibili.com",
  },
  {
    linkName: "github",
    linkPath: "https://www.github.com",
  }
]

// <img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar></Topbar>
        <Titlebar>
          <HomeTitle blogName="Sid's Blog" links={links}></HomeTitle>
        </Titlebar>
        <CardsDrawers cards={nblogs} />
      </header>
    </div>
  );
}

export default App;
