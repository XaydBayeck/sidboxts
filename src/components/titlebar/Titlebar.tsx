import * as React from 'react';
import './Titlebar.css'

export interface Props {
    blogName: string,
    links: string[],
}

export default function Titlebar({ blogName, links }: Props) {
    return (
        <div className="title-bar">
            <div className="blog-name">
                {blogName}
            </div>
            <div className="links">
                <ul id="links">
                    {links.map((item, i) => {
                        return <li key={i.toString()}>{item}</li>
                    })}
                </ul>
            </div>
            <div className="nav-bar">
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Category</a>
                    <a href="#">Time Line</a>
                    <a href="#">About</a>
                </nav>
            </div>
        </div>
    );
}
