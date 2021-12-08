import React from 'react'

export default function footer() {
    return (
        <div>
            <footer className="fixed-bottom">
                <div className="container-fluid navbar" id="contact-bar">
                    <ul className="list">
                        <li>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                        <a href="#"><i className="fa fa-github"></i></a>
                        </li>
                        <li>
                        <a href="#"><i className="fa fa-medium"></i></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
