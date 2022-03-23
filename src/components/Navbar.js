import React from 'react'
import Calabaza from './calabaza'

export default function Navbar() {
    return (
        <div className="mx-5 my-5 p-5">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid mx-5 my-5 p-5 d-flex justify-content-around">
                    <a className="navbar-brand" href="#">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYt9IYy1xY8m9pxGtNGJgjg0Xv22qyVb97w&usqp=CAU" className='' />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button> 
                    <Calabaza />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">                       
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-dark" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
