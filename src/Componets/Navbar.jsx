import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return (
        <div>
            <div className="new-bars">
                <div className="main">
                    <div className="row">

                        <div className="col-lg-3 col-sm-3 col-tb-12 col-xs-12">
                            <div className="logo">
                                <img src="" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-9 col-sm-9 col-tb-12 col-xs-12">
                            <input type="checkbox" name="" id="check" />
                            <label htmlFor="check"><i className="fa fa-bars"></i></label>
                            <div className="menu">
                                <ul>
                                    <li><NavLink to="/" className="a">Home</NavLink></li>
                                    <li><NavLink to="about" className="a">About me</NavLink></li>
                                    <li><NavLink to="services" className="a">services</NavLink></li>
                                    <li><NavLink to="portfolio" className="a">Portfolio</NavLink></li>
                                    <li><NavLink to="contect" className="a">contect</NavLink></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
