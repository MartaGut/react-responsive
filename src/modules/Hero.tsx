
import { useState } from 'react';
import heroImg from "./../img/hero-img.png";

function Hero() {

    const hero = heroImg;

    const slides = [
        {
            title: "Lorem ipsum dolor sit",
            srcImg: hero

        },
        {
            title: "Lorem ipsum dolor sit",
            srcImg: hero

        },
        {
            title: "Lorem ipsum dolor sit",
            srcImg: hero

        }
    ]

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        console.log('next')
        console.log(slideIndex)
        if (slideIndex !== slides.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === slides.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        console.log('prev')
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(slides.length)
        }
    }


    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="hero">
            <div className="hero__gradient"></div>
            <div className="container">
                <div className="hero__slider">
                    {slides.map((obj, index) => {
                        return (
                            <div
                                key={index}
                                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                            >
                                <img
                                    src={obj.srcImg}
                                />
                                <h1 className="hero__title">{obj.title}</h1>
                            </div>
                        )
                    })}
                </div>
                <button
                    onClick={prevSlide}
                    className="btn-slide prev"
                >
                </button>
                <button
                    onClick={nextSlide}
                    className="btn-slide next"
                >
                </button>

                <div className="container-dots">
                    {Array.from({ length: 3 }).map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Hero;