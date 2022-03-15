import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <div className="mx-5 my-5 p-5 text-white">
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                <strong>
                                    <a href="" className="text-white">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYt9IYy1xY8m9pxGtNGJgjg0Xv22qyVb97w&usqp=CAU" className="" />
                                    </a>
                                </strong>
                            </p>
                            <p className="text-white">
                                <small>
                                    <FontAwesomeIcon icon="map-marker-alt" />
                                    <span className="ml-2">
                                        <a href="" className="text-white">
                                        </a>
                                    </span>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
