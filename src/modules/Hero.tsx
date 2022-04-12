
import { useEffect, useState } from 'react';
import heroImg from "./../img/hero-img.png";

import leftArrow from "./../img/home.svg";
import rightArrow from "./../img/right-arrow.svg";

interface HeroProps {
    title: string,
    srcImg: string
    index?: any
}

function Hero() {

    const hero = heroImg;

    const slides = [
        {
            title: "home",
            srcImg: hero

        },
        {
            title: "about us",
            srcImg: hero

        },
        {
            title: "our work",
            srcImg: hero

        },
        {
            title: "contact",
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
            <div className="container">
                <div className="container-slider">
                    {slides.map((obj, index) => {
                        return (
                            <div
                                key={obj.title}
                                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                            >
                                <img
                                    src={obj.srcImg}
                                />
                            </div>
                        )
                    })}
                </div>
                <button
                    onClick={prevSlide}
                    className="btn-slide prev"
                >
                    <img src={leftArrow} />
                </button>
                <button
                    onClick={nextSlide}
                    className="btn-slide next"
                >
                    <img src={rightArrow} />
                </button>

                <div className="container-dots">
                    {Array.from({ length: 5 }).map((item, index) => (
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