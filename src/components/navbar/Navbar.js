import React from "react";

function Navbar(){

    return (
    
    
    <nav class="navbar bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#" >{'BOT BATTLR'}</a>
                    <ul class="navbar-nav me-auto d-flex flex-row">
                        <li class="nav-item me-2">
                            <a class="text-light nav-link" href="#" >SOURCES</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-light nav-link" href="#" >COUNTRIES</a>
                        </li>
                    </ul>
    
                <form class="d-flex">
                    <input class="form-control" type="text" placeholder="search here" id="search"/>
                    <button class="btn btn-outline-info ms-1" id="searchBtn">{'SEARCH'}</button>
                </form>
            </div>
        </nav>
    );
    
    }
    export default Navbar;