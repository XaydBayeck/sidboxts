import * as React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to="/Home">Home</NavLink>
                    <NavLink to="/Category">Category</NavLink>
                    <NavLink to="/TimeLine">Time Line</NavLink>
                    <NavLink to="/About">About</NavLink>
                </nav>
            </div>
        </div>
    );
}
