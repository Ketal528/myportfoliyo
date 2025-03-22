import React from "react";

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="main">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-tb-12 col-xs-12">
                            <div className="header-left">
                                <h1>i'am ketal sutariya
                                    <br />
                                    <span>web</span>
                                    <br />
                                    developer
                                </h1>

                                <p>Let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. you measure yourself by the people who measure themselves by you. it only took me six days.</p>

                                <button><a href="#">hire me <i className="fa fa-arrow-right"></i></a></button>

                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-tb-12 col-xs-12">
                            <div className="header-right">
                                <div>
                                    <img src="myphoto.jpg" alt="" />
                                </div>

                                <br />
                                <div className="icone">
                                    <a href="https://www.instagram.com/ketal_98" id="icone-a"><i class="fa fa-instagram"></i></a>
                                    <a href="https://www.facebook.com/ketal_98" id="icone-a"><i class="fa fa-facebook"></i></a>
                                    <a href="https://github.com/Ketal528" id="icone-a"><i class="fa fa-github"></i></a>
                                    <a href="https://www.linkedin.com/in/ketal-sutariya-385035251" id="icone-a"><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header