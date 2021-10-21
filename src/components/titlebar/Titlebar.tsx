import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Titlebar.css'

export interface Props {
    children?: React.ReactNode | React.ReactNode[],
}

export default function Titlebar({ children }: Props) {
    return (
        <div className="title-bar">
            <div className="nav-bar">
                <nav>
                    <NavLink to="/sidboxts/Home">Home</NavLink>
                    <NavLink to="/sidboxts/Category">Category</NavLink>
                    <NavLink to="/sidboxts/TimeLine">Time Line</NavLink>
                    <NavLink to="/sidboxts/About">About</NavLink>
                </nav>
            </div>
            {children}
        </div>
    );
}
