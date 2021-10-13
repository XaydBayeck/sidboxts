import * as React from "react";
import menu from './menu.svg';
import search from './search.svg';
import "./Topbar.css";

export interface Props {
  blogName:string
}

export default function Topbar(props: Props) {
  return (
    <div className="topbar">
      <div className="profile">
        <img src={menu} className="topbar-profile" alt="menu" />
      </div>
      <div className="blog-name">{props.blogName}</div>
      <div className="searchbar">
        <input type="text" className="search-input" />
        <button className="to-search">
          <img src={search} alt="search" className="search-button" />
        </button>
      </div>
    </div>
  );
}