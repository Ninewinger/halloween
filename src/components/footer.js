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
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled list-inline text-right">
                                <li className="list-inline-item">
                                    <a href="">
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="">
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="">
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="">
                                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="">
                                        <FontAwesomeIcon icon={['fab', 'youtube']} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
