import calculator from "./../img/calculator.svg"
import cloud from "./../img/cloud.svg"
import clock from "./../img/clock.svg"
import heart from "./../img/heart.svg"

function WhatWeDo() {

    const posts = [
        {
            srcImg: calculator,
        },
        {
            srcImg: cloud,
        },
        {
            srcImg: clock,
        },
        {
            srcImg: heart,
        },
    ]


    return ( 
        <div className="posts">
        <div className="container">
            <div className="posts__items">
                {posts.map((obj, index) => {
                    return (
                        <div
                            key={index}
                            className="post__item"
                        >
                            <embed
                                src={obj.srcImg}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default WhatWeDo;