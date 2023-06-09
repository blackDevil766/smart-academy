import React from "react";
import Icon from "../xfooter/Icons";



function Footer(props) {
    return (
        <div className="continerFoot">
            <div className="footer">

                <div className="footer-container-rightPart">
                    <div className="leftPartFooter">
                        <p data-aos="fade-down" data-aos-duration="2000" className="footerText">© 2021 <span className="SmartWord">Smart.</span> Designed by <a href="">Epic-Themes</a> </p>
                    </div>
                </div>

                <div className="footer-container-leftPart">
                    <div className="rightPartFooter">
                        <p className="footerText"> Follw us:
                            {Icon[0].twit}
                            {Icon[1].inst}
                            {Icon[2].whatup}
                            {Icon[3].google}
                            {Icon[4].github}
                        </p>
                    </div>
                </div>

            </div>
        </div>

    )
}


export default Footer;