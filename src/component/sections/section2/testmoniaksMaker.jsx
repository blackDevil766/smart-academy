import React from "react";

function HowItWorkMaker(props) {
    return (
        <div className = "howItWorkMaker" >
            <img src={props.icon} alt="" />
            <h4 className = "HowItWorkCardH4">{props.title}</h4>
            <p className="HowItWorkCardP4">{[props.meaning]}</p>
        </div>
    )
}


function TrustedCard(props) {
    return (
        <div  className="cardImg">
            <img className="ImgCard" src={props.img} alt="" />
        </div>
    )
}



function Testmonial(props) {

    return (

        <div className="testmonialContianer">
            <div className={props.class}>
                <div className="video">
                   <a href=""> <img className="cart-right" src="imgs\caret-right.svg" alt="" /> <img className="testimonImg" src={props.img} alt="" /> </a>
                    
                </div>
            </div>

            <div className="testmonialsiDentification">
                <img src="imgs\chat.svg" style={{ display: "block" }} alt="" />
                <p className="testmonialText">{props.text}</p>
                <h6>{props.brandName} <span className="red">{props.brandType}</span></h6>
            </div>
        </div>
    )
}


export default Testmonial;
export {HowItWorkMaker, TrustedCard}