import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">To Do and Pokemon</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">To Do</Link>
                        <Link className="nav-link" to="/pokemon">Pokemon</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
