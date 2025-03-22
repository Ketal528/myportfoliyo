import React from "react";

const About = () => {
    return (
        <div>
            <div className="about" id="about">
                <div className="main">
                    <h1>about me</h1>
                    <div className="row">

                        <div className="col-lg-3 col-sm-3 col-tb-6 col-xs-12">
                            <div className="my-ditel" id="left">
                                <h2>my details</h2>
                                <div className="ditel">
                                    <p>age:<a href="">22</a></p>
                                    <br />
                                    <p>Freelance: <a href="">Available</a></p>
                                    <br />
                                    <p>Address: <a href="">Idar,Gujarat-383410</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-tb-6 col-xs-12">
                            <div class="my-ditel buttom" id="languages">
                                <h2>Languages</h2>
                                <p>gujrati:<a href="">100%</a></p>
                                <div class="line">
                                    <div class="prs"></div>
                                </div>
                                <p id="lan">hindi:<a href="">90%</a></p>
                                <div class="line">
                                    <div class="prs3"></div>
                                </div>
                                <p id="lan">english:<a href="">80%</a></p>
                                <div class="line">
                                    <div class="prs5"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-tb-6 col-xs-12">
                            <div class="my-ditel buttom" id="skill">
                                <h2>Skills</h2>
                                <p>html:<a href="">90%</a></p>
                                <div class="line">
                                    <div class="prs3"></div>
                                </div>
                                <p id="lan">css:<a href="">85%</a></p>
                                <div class="line">
                                    <div class="prs4"></div>
                                </div>
                                <p id="lan">js:<a href="">80%</a></p>
                                <div class="line">
                                    <div class="prs5"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-tb-6 col-xs-12">
                            <div class="my-ditel right" id="ext-skills">
                                <h2>ext-skills</h2>
                                <p><i class="fa  fa-bookmark-o"></i><a href="">Bootstrap</a></p>
                                <p id="ext-p"><i class="fa  fa-bookmark-o"></i><a href="">jquary</a></p>
                                <p id="ext-p"><i class="fa  fa-bookmark-o"></i><a href="">react</a></p>
                                <p id="ext-p"><i class="fa  fa-bookmark-o"></i><a href="">MYSQL</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About