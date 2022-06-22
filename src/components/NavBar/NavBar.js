import React from 'react';
import {
    Link,
} from 'react-router-dom'
import './NavBar.scss'

function NavBar() {
    return (
        <>
            <section className="navigation">
                <div className="fb_box">
                    <h1
                        className="main_text"
                    >
                        facebook
                    </h1>
                    <div className="icon_box">
                        <div className="search_box">
                            <div className="search"/>
                        </div>
                        <div className="messenger_box">
                            <div className="messenger"/>
                        </div>
                    </div>
                </div>
                <div
                    className="menu_box"
                >
                    <div
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
                    <Link
                        className="burger"
                        to="/Menu"
                    />
                </div>
            </section>
            <section className="input_text">
                <div className="user"/>
                <input
                    type="text"
                    placeholder="co słychać?"
                    className="input_text_public"
                />
                <div className="image_section"/>
            </section>
            <div className="space_color"/>
        </>

    );
}

export default NavBar;