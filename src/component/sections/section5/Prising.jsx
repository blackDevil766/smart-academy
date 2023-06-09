import React from "react";

function Prising(props) {


    function PrisingSection2(props) {
        return (
            <div className="section2OfPrising">
                <div className="features">
                    <img className="featuresIco" src={props.prisingImg} alt="" />
                    <div className="featuresTypoContiner">
                        <h4 className="sectionText">{props.title}</h4>
                        <p className="sectionPara">Utise wisi enim nets venias, quis tation ullamcorper nets lobotis nisle consequat.</p>
                    </div>
                </div>
            </div>
        )
    }



    function PriseBox(props) {
        return (

            <div className="PrisingContiner">
                <div className="prise-box">
                    <ul className="prise-list">
                        <li className="prise-title">{props.title}</li>
                        <li className="prise-value">{props.prise}</li>
                        <li className="prise-subtitle">Per Month</li>
                        <li className="prise-text"> <img src="imgs\correctIcon.svg" alt="" />{props.priseText1} </li>
                        <li className="prise-text"> <img src="imgs\correctIcon.svg" alt="" />{props.priseText2} </li>
                        <li className="prise-text"> <img src="imgs\correctIcon.svg" alt="" />{props.priseText3} </li>
                        <li className="prise-text"> <img src="imgs\correctIcon.svg" alt="" />{props.priseText4} </li>
                        <li className="prise-tag-line">
                            <a className="prising-btn" href="#">FREE 15-DAY TRIAL</a>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }



    return (
        <div id="pricing">
            <h2 className="MainWord">Prising for every Business at any stage</h2>
            <div className="prisingSection">
                <PriseBox animate = "fade-right" title="BASIC" prise="$25" priseText1="Custom Charts" priseText2="5 Mailboxes, 10 Gb Storage" priseText3="Unlimited Free Dashboards" priseText4="Access to all APIs" />
                <PriseBox animate = "fade-down" title="STANDARD" prise="$99" priseText1="All Basic features" priseText2="15 Mailboxes, 50 Gb Storage" priseText3="Interactive Screen Sharing" priseText4="Full Report History" />
                <PriseBox animate = "fade-left" title="PRO" prise="$199" priseText1="All Standard Features" priseText2="50 Mailboxes, 90 Gb Storage" priseText3="Dedicated Account Manager" priseText4="24/7 Priority Support" />
            </div>

            <div className="priseContiner">

                <div className="priseing2Continer">
                    <h2 className="mainWord2">Amazing Features</h2>
                    <div className="continersPrise">
                        <PrisingSection2 title="Support 24/7" prisingImg="imgs\prisingImgs\gem.svg" />
                        <PrisingSection2 title="User Friendly" prisingImg="imgs\prisingImgs\people.svg" />
                        <PrisingSection2 title="Notifications" prisingImg="imgs\prisingImgs\notification.svg" />
                        <PrisingSection2 title="Accesibility" prisingImg="imgs\prisingImgs\gear.svg" />
                        <PrisingSection2 title="Cost Control" prisingImg="imgs\prisingImgs\cash.svg" />
                        <PrisingSection2 title="Chat With Friends" prisingImg="imgs\prisingImgs\textMessage.svg" />
                    </div>
                </div>
            </div>


            <div className="prising3Continer">
                <div className="prising3">
                    <p className="prisingAdvice">“People who succeed in business aren't afraid to hear feedback from their customers - they actually thrive from it.”</p>
                    <h5 className="PrisingCharater">Johanna S. Richardson</h5>
                    <p className="blue">CEO Essentials</p>
                </div>
                <div className="testimonials-women">
                    <img src="https://demo.epic-webdesign.com/tf-smart/v1/images/testimonials-woman.jpg" class="width-100" alt="pic" />
                </div>
            </div>
        </div>
    )
}


export default Prising;