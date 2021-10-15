// import logo from './logo.svg';
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Titlebar from './components/titlebar/Titlebar';
import HomeTitle from './components/titlebar/HomeTitle'
import Home from './components/home/Home'
import { Route, Switch, useParams } from "react-router-dom";
import ArticleTitle, { TitleProps } from "./components/articleTitle/ArticleTitle";

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
          <Switch>
            <Route exact path='/'>
              <HomeTitle blogName="Sid's Blog" links={links}></HomeTitle>
            </Route>
            <Route path='/Home'>
              <HomeTitle blogName="Sid's Blog" links={links}></HomeTitle>
            </Route>
            <Route path='/blog/:title'>
              <ToArticleTitle />
            </Route>
          </Switch>
        </Titlebar>
        <Home />
      </header>
    </div>
  );
}

export default App;

function ToArticleTitle() {

  return (
    <ArticleTitle title={useParams<{ title: string }>().title} date={{
      year: 2021,
      month: 10,
      day: 10
    }} tags={["test", "blog", "test"]}></ArticleTitle>
  );
}
