// import calculator from "./../img/calculator.svg"
// import cloud from "./../img/cloud.svg"
// import clock from "./../img/clock.svg"
// import heart from "./../img/heart.svg"
import iconSet from "./../selection.json";
import IcomoonReact from "icomoon-react";



function WhatWeDo() {

    const posts = [
        {
            srcImg: "calculator",
        },
        {
            srcImg: "cloud",
        },
        {
            srcImg: "clock",
        },
        {
            srcImg: "heart",
        },
    ]


    return (
        <div className="posts no-copy">
            <div className="container">
                <h2 className="posts__title h2">What we do</h2>
                <div className="posts__items">
                    {posts.map((obj, index) => {
                        return (
                            <div
                                key={index}
                                className="posts__item"
                            >
                                <div className="posts__img-wrapper">
                                    <IcomoonReact className="posts__link-img" iconSet={iconSet} icon={obj.srcImg} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;