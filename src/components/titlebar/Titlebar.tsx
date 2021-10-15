import * as React from 'react';
import './Titlebar.css'

export interface Props {
    children?: React.ReactNode | React.ReactNode[],
}

export default function Titlebar({ children }: Props) {
    return (
        <div className="title-bar">
            {children}
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
