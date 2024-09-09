import React from 'react';
import {CustomLink} from "./CustomLink";

function Header(props) {
    return (
        <div>
            <header>
                <CustomLink to="/">Home</CustomLink>

                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/test">Tests</CustomLink>
            </header>
            <br/>
            <h1>Currency Swap Form</h1>
        </div>
    );
}

export default Header;