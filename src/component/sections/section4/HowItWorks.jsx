import React, { useState } from "react";




function HowItWork(props) {

    const [hide1, setHide1] = useState("textIDentfi1")
    const [hide2, setHide2] = useState("textIDentfi2")
    const [hide3, setHide3] = useState("textIDentfi3")

    var [text, setText] = useState(()=>{
        return{
            tex1: true,
            tex2: true,
            tex3: true
        }
    })

    var [iconSwitcher, setIconSwitcher] = useState(() => {
        return{
            ico1: "",
            ico2: "",
            ico3: ""
        }
    })


    function showText1(click) {
            setHide1("difine1")
            setHide3("textIDentfi3")
            setHide2("textIDentfi2")
        if (click) {
            setText((prev)=> {
                return{
                    tex1: false, tex2: true, tex3: true
                }
            })
            setIconSwitcher(() => {
                return{
                    ico1: "rotate(180deg)", ico2: "", ico3: ""
                }
            })

        }
            if(text.tex1 == false){
                setText(()=> {
                    return{
                        tex1: true, tex2: true, tex3: true
                    }
                })
                setHide1("textIDentfi1") 
           
                setIconSwitcher(() => {
                    return{
                        ico1: "", ico2: "", ico3: ""
                    }
                })

            }
        
        
    }

    console.log(text);


    function showText2(click) {
        setHide2("difine2")
        setHide1("textIDentfi1")
        setHide3("textIDentfi3")

        if (click) {
            setText((prev)=> {
                return{
                    tex1: true, tex2: false, tex3: true
                }
            })
            setIconSwitcher(() => {
                return{
                    ico1: "", ico2: "rotate(180deg)", ico3: ""
                }
            })

        }
            if(text.tex2 == false){
                setText((prev)=> {
                    return{
                        tex1: true, tex2: true, tex3: true
                    }
                })
                setHide2("textIDentfi2") 

                setIconSwitcher(() => {
                    return{
                        ico1: "", ico2: "", ico3: ""
                    }
                })
            }

        
    }


    function showText3(click) {
        setHide3("difine3")
        setHide1("textIDentfi1")
        setHide2("textIDentfi2")


        if (click) {
            setText((prev)=> {
                return{
                    tex1: true, tex2: true, tex3: false
                }
            })

            setIconSwitcher(() => {
                return{
                    ico1: "", ico2: "", ico3: "rotate(180deg)"
                }
            })
        }
            if(text.tex3 == false){
                setText((prev)=> {
                    return{
                        tex1: true, tex2: true, tex3: true
                    }
                })
                setHide3("textIDentfi3") 

                setIconSwitcher(() => {
                    return{
                        ico1: "", ico2: "", ico3: ""
                    }
                })
            }
    }




    return (
        <section id="howItWork" className="HowItWorkContiner">

            <div className="continer">

                <div className="continerFliud">
                    <section className="howItWorkpart1">
                        <div className="part1">
                            <h2 className="HowItWorkTitle">How It Work.</h2>
                            <p className="HowItWorkDifind">Quis autem velis ets reprehender net etid quiste netsum voluptate. Utise wisi enim minim veniam, quis etsad ets aspernatis netsum stationes nets qualitats.</p>
                        </div>

                        <div className="part2">

                            <div className="section1Part1">
                                <p className="freelance">LinkedIn</p>

                                <div className="SkillsStars">
                                    <img src="imgs\starsIcon\starFille.svg" alt="" />
                                    <img src="imgs\starsIcon\starFille.svg" alt="" />
                                    <img src="imgs\starsIcon\starFille.svg" alt="" />
                                    <img src="imgs\starsIcon\starFille.svg" alt="" />
                                    <img src="imgs\starsIcon\starFille.svg" alt="" />
                                </div>

                            </div>

                            <div className="section2Part2">
                                <p className="freelance">Upwork</p>

                                <div className="SkillsStars">
                                    <img src="imgs\starsIcon\starFille.svg" alt="" />
                                    <img src="imgs\starsIcon\starFille.svg" alt="" />
                                    <img src="imgs\starsIcon\starFille.svg" alt="" />
                                    <img src="imgs\starsIcon\starFille.svg" alt="" />
                                    <img src="imgs\starsIcon\halfStar.svg" alt="" />

                                </div>

                            </div>

                        </div>

                    </section>

                    <section className="howItWorkpart2">

                        <div className="listContiner">
                            <h2  className="listTitle">
                                <button onClick={showText1} className="listBtn"> <img className="icoList" src="imgs\listIcons\pencil.svg" />   Create Account  <img  className = "arrowIcon" style={{transform: iconSwitcher.ico1}} src="imgs\arrowIcon.svg" alt="" /></button>
                                
                            </h2>
                            <div className={hide1}>
                                <p className="hiddenText">This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</p>
                            </div>
                        </div>


                        <div className="listContiner">
                            <h2  className="listTitle">
                                <button onClick={showText2} className="listBtn"> <img className="icoList" src="imgs\listIcons\barChartLine.svg"></img> Choose Package <img  className = "arrowIcon" style={{transform: iconSwitcher.ico2}} src="imgs\arrowIcon.svg" alt="" /> </button>
                            </h2>
                            <div className={hide2}>
                                <p className="hiddenText">This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</p>
                            </div>
                        </div>


                        <div className="listContiner">
                            <h2  className="listTitle">
                                <button onClick={showText3} className="listBtn"> <img className="icoList" src="imgs\listIcons\thumbUp.svg"></img> Enjoy Smart <img  className = "arrowIcon" style={{transform: iconSwitcher.ico3}} src="imgs\arrowIcon.svg" alt="" /> </button>
                            </h2>
                            <div className={hide3}>
                                <p className="hiddenText">This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</p>
                            </div>
                        </div>


                    </section>

                </div>


            </div>
        </section>
    )
}

export default HowItWork;
































































// import React, { useState } from "react";


// // function showText(done) {
// //     if (text) {
// //       setIconSwitcher(textValue)
// //         console.log("it's true");
// //         setText(false)
// //     } else{
// //       setIconSwitcher("")
// //       console.log("it's false");
// //       setText(true)
// //     }

// //   }


// function HowItWork(props) {




//     // function ListWork(props) {

//     //     const [hide, setHide] = useState("textIDentfi")
//     //     var [text, setText] = useState(true)
//     //     var [catchText, setIconSwitcher] = useState("")


//     //     function showText(done) {
//     //         if (text) {
//     //             setHide("difine")
//     //             console.log("it's true");
//     //             setText(false)
//     //         } else {

//     //             setHide("textIDentfi")

//     //             console.log("it's false");
//     //             setText(true)
//     //         }

//     //     }


//     //     return (
//     //         <div className="listContiner">
//     //             <h2 onClick={showText} className="listTitle">
//     //                 <button className="listBtn"> <img className="icoList" src={props.ico}></img> {props.title} </button>
//     //             </h2>

//     //             <div className={hide}>
//     //                 <p className="hiddenText">{props.textList}</p>
//     //             </div>
//     //         </div>
//     //     )
//     // }


//     const [hide1, setHide1] = useState("textIDentfi1")
//     const [hide2, setHide2] = useState("textIDentfi2")
//     const [hide3, setHide3] = useState("textIDentfi3")

//     var [text, setText] = useState(true)
//     var [catchText, setIconSwitcher] = useState("")


//     function showText1() {
//         // setHide2("textIDentfi2")

//         if (text) {
            
            
//             setHide1("difine1")
            

//             console.log("it's true");
//             setText(false)
//             setHide2("textIDentfi2")
//             setHide3("textIDentfi3")

//         } else {
//             setHide1("textIDentfi1")
//             console.log("it's false");
//             setText(true)
//         }

//     }




//     function showText2() {

//         if (text) {
            
//             setHide2("difine2")
            

//             console.log("it's true");
//             setText(false)
//             setHide1("textIDentfi1")
//             setHide3("textIDentfi3")

//         } else {
//             setHide2("textIDentfi2")
//             console.log("it's false");
//             setText(true)
//         }


//     }


//     function showText3() {

//         if (text) {
           
//             setHide3("difine3")
           
//             console.log("it's true");
//             setText(false)
//             setHide1("textIDentfi1")
//             setHide2("textIDentfi2")
//         } else {
//             setHide3("textIDentfi3")
//             console.log("it's false");
//             setText(true)
//         }
//     }




//     return (
//         <section className="HowItWorkContiner">

//             <div className="continer">

//                 <div className="continerFliud">
//                     <section className="howItWorkpart1">
//                         <div className="part1">
//                             <h2 className="HowItWorkTitle">How It Work.</h2>
//                             <p className="HowItWorkDifind">Quis autem velis ets reprehender net etid quiste netsum voluptate. Utise wisi enim minim veniam, quis etsad ets aspernatis netsum stationes nets qualitats.</p>
//                         </div>

//                         <div className="part2">

//                             <div className="section1Part1">
//                                 <p className="freelance">LinkedIn</p>

//                                 <div className="SkillsStars">
//                                     <img src="imgs\starsIcon\starFille.svg" alt="" />
//                                     <img src="imgs\starsIcon\starFille.svg" alt="" />
//                                     <img src="imgs\starsIcon\starFille.svg" alt="" />
//                                     <img src="imgs\starsIcon\starFille.svg" alt="" />
//                                     <img src="imgs\starsIcon\starFille.svg" alt="" />
//                                 </div>

//                             </div>

//                             <div className="section2Part2">
//                                 <p className="freelance">Upwork</p>

//                                 <div className="SkillsStars">
//                                     <img src="imgs\starsIcon\starFille.svg" alt="" />
//                                     <img src="imgs\starsIcon\starFille.svg" alt="" />
//                                     <img src="imgs\starsIcon\starFille.svg" alt="" />
//                                     <img src="imgs\starsIcon\starFille.svg" alt="" />
//                                     <img src="imgs\starsIcon\halfStar.svg" alt="" />

//                                 </div>

//                             </div>

//                         </div>

//                     </section>

//                     <section className="howItWorkpart2">
//                         {/* <ListWork textList="" title="" ico="" />
//                         <ListWork textList="This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style." title="Choose Package" ico="imgs\listIcons\barChartLine.svg" />
//                         <ListWork textList="This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style." title="Enjoy Smart" ico="imgs\listIcons\thumbUp.svg" /> */}



//                         <div className="listContiner">
//                             <h2 onClick={showText1} className="listTitle">
//                                 <button className="listBtn"> <img className="icoList" src="imgs\listIcons\pencil.svg"></img> Create Account </button>
//                             </h2>
//                             <div className={hide1}>
//                                 <p className="hiddenText">This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</p>
//                             </div>
//                         </div>


//                         <div className="listContiner">
//                             <h2 onClick={showText2} className="listTitle">
//                                 <button className="listBtn"> <img className="icoList" src="imgs\listIcons\barChartLine.svg"></img> Choose Package </button>
//                             </h2>
//                             <div className={hide2}>
//                                 <p className="hiddenText">This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</p>
//                             </div>
//                         </div>


//                         <div className="listContiner">
//                             <h2 onClick={showText3} className="listTitle">
//                                 <button className="listBtn"> <img className="icoList" src="imgs\listIcons\thumbUp.svg"></img> Enjoy Smart </button>
//                             </h2>
//                             <div className={hide3}>
//                                 <p className="hiddenText">This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</p>
//                             </div>
//                         </div>


//                     </section>

//                 </div>


//             </div>
//         </section>
//     )
// }

// export default HowItWork;