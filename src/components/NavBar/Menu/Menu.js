import React from 'react';
import '../NavBar.scss'
import {Link} from "react-router-dom";

function Menu() {
    return (
        <section className="navigation">
            <div
                className="menu_box"
            >
                <Link
                    to="/"
                    className="home"
                />
                <div
                    className="shop"
                />
                <div
                    className="user"
                />
                <div
                    className="watch"
                />
                <div
                    className="bell"
                />
            </div>
        </section>
    );
}

export default Menu;