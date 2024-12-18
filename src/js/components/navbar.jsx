import React from "react";

const Navbar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary pt-0">
        <div className="container-fluid bg-black">
            <a className="navbar-brand text-white fw-medium ps-5" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="AlertHamburger navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active text-white fw-medium" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white-50 fw-medium" href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white-50 fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white-50 fw-medium me-4" href="#" aria-disabled="false">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

    </>
    )
}

export default Navbar