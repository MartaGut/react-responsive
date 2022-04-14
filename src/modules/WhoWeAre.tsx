import iconSet from "./../selection.json";
import IcomoonReact from "icomoon-react";

function WhoWeAre() {

    const posts = [
        {
            title: "Lorem Ipsum",
            srcImg: "our-work",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
            button: "Show more"

        },
        {
            title: "Lorem Ipsum",
            srcImg: "cloud",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
            button: "Show more"

        }
    ]


    return (
        <div className="posts">
            <div className="container">
                <h2 className="posts__title h2">Who we are</h2>
                <div className="posts__items">
                    {posts.map((obj, index) => {
                        return (
                            <div
                                key={obj.title}
                                className="posts__item"
                            >
                                <div className="posts__img-wrapper">
                                <IcomoonReact className="posts__link-img" iconSet={iconSet} icon={obj.srcImg} />
                                </div>
                                <div className="posts__column">
                                    <h3 className="posts__item-title">{obj.title}</h3>
                                    <p className="posts__item-copy">{obj.text}</p>
                                    <button className="posts__item-button">{obj.button}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;