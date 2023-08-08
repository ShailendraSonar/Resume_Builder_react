import React from 'react'
import { Link } from "react-router-dom";
import '../pages/Nav.css'

const Nav = () => {



    return (
        <>

            <div className='nav cardNav'>
                <div className="conttainer ">
                    <div className="row">
                        <div className="col-md-4 ">
                            <div>
                                <h2>Resume-2-Hire</h2>
                            </div>
                        </div>
                        <div className="col-md-8 ">
                            <div className='nav_ul_li d-flex flex-row-reverse'>
                                <ul className='list-unstyled d-flex'>
                                    <li className='mx-3'>
                                        <Link to="/">Resume Builder</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Nav