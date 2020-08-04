import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <header className="header">
            <h1>Hello {props.name}!!!</h1>
        </header>
    )
}