import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div class="header">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="./home">Smaile-Book</a>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="./home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="./requests">All Requests</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="./settings">Settings</a>
                        </li>
                        </ul>
                    </div>
                </nav>
        </div>
    );
};

export default Header;