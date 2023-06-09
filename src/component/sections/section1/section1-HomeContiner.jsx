import React from "react";
// import AOS from "aos";


function HomeContiner() {

    const datas = "https://api.kanye.rest"
    console.log(datas);

    // AOS.init();

    return (
        <div className="HolPage">

            <div className="continar">
                <div className="topContinarHalf1">


                    <h1 className="topText">Service Education Center For Obour Institutes<img src="imgs\chat.svg" alt="" /> </h1>
                    {/* <p className="topPara">Track and analyze all your data in one central location.</p> */}
                    <div>
                        <div className="emailSection">

                            <div className="email-input">
                                <img className="emailInputLogo" src="imgs\mail.svg" alt="" />
                                <input type="email" className="emailInput" placeholder="Enter Your Email Address" />
                            </div>

                            <button type="button" className="emailBtn" > GET STARTED! </button>
                        </div>

                        <p className="sign">
                            <span> <img src="imgs\trueMark.svg" alt="" />Free 30-Day Trial</span>
                            <span>
                                <img src="imgs\trueMark.svg" alt="" />  Money Back Guarantee
                            </span>
                        </p>

                    </div>


                </div>
                <div className="topContinarHalf2">
                    <img className="openingImg" src="imgs\ui-design.png" alt="" />
                </div>


            </div>
        </div>

    )

}



export default HomeContiner;