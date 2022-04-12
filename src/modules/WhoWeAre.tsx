import hat from "./../img/hat.svg"
import thumb from "./../img/thumbs.svg"

function WhoWeAre() {

    const posts = [
        {
            title: "Lorem Ipsum",
            srcImg: hat,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
            button: "Show more"

        },
        {
            title: "Lorem Ipsum",
            srcImg: thumb,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
            button: "Show more"

        }
    ]


    return ( 
        <div className="posts">
        <div className="container">
            <div className="posts__items">
                {posts.map((obj, index) => {
                    return (
                        <div
                            key={obj.title}
                            className="post__item"
                        >
                            <embed
                                src={obj.srcImg}
                            />
                            <h3>{obj.title}</h3>
                            <p>{obj.text}</p>
                            <button>{obj.button}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}

export default WhoWeAre;