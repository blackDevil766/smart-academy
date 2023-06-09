import React from "react";

function Blog() {

    function BlogTable(props) {
        return (
            <div className="bloggy">
                <div className="imgsOfBlog">
                    <div className="coverImg"></div>
                    <div className="middle">
                        <img src="imgs\link.svg" />
                    </div>
                    <img className="blogImg" src={props.BlogImg} alt="" />
                </div>

                <div className="blogDetalis">
                    <div className="blogInfo">
                        <h3 >
                            <a className="blogLink" href="#">{props.blogTitle}</a>
                        </h3>
                        <a className="blogDefind"> <img src={props.icon} alt="" /> {props.blogDefind}</a>
                    </div>
                    <p className="blogIdtintfiy">{props.blogText}</p>

                </div>
            </div>
        )
    }

    return (
        <div id="blog" className="continer4">
            <div className="blogContiner">
                <div className="blog">
                    <h2 className="blogTitle">Our Blog</h2>
                    <div className="blogs">

                        <BlogTable
                            icon="imgs\card.svg"
                            BlogImg="https://demo.epic-webdesign.com/tf-smart/v1/images/blog4.jpg"
                            blogTitle="The Guide To LinkedIn Ads"
                            blogDefind="Marketing & Design — 11 Min Read"
                            blogText="Quis autem velis reprehender nets quiste voluptate velite estum quants etsamis sedit varias nets."
                        />

                        <BlogTable
                            icon="imgs\playInCircle.svg"
                            BlogImg="https://demo.epic-webdesign.com/tf-smart/v1/images/blog2.jpg"
                            blogTitle="The Guide To LinkedIn Ads"
                            blogDefind="Marketing & Design — 11 Min Read"
                            blogText="Quis autem velis reprehender nets quiste voluptate velite estum quants etsamis sedit varias nets."
                        />

                        <BlogTable
                            icon="imgs\mic.svg"
                            BlogImg="https://demo.epic-webdesign.com/tf-smart/v1/images/blog3.jpg"
                            blogTitle="The Guide To LinkedIn Ads"
                            blogDefind="Marketing & Design — 11 Min Read"
                            blogText="Quis autem velis reprehender nets quiste voluptate velite estum quants etsamis sedit varias nets."
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Blog;