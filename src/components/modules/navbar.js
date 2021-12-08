import React from 'react'

export default function navbar(props) {
    return (
        <div>
             <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
                <link to="/" className="navbar-brand d-flex w-50 mr-auto">{props.title}</link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li className="nav-item">
                            <link className="nav-link" to="/">HOME</link>
                        </li>
                        <li className="nav-item">
                            <link className="nav-link" to="/">WORK WITH US</link>
                        </li>
                        <li className="nav-item">
                            <link className="nav-link" to="/">GET HIRED</link>
                        </li>
                        <li className="nav-item">
                            <link className="nav-link" to="/">ABOUT</link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
