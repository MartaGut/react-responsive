
import { useEffect, useState } from 'react';
import heroImg from "./../img/hero-img.png"

interface HeroProps {
    children: JSX.Element[];
  }

function Hero({ children }: HeroProps) {

    const activeSlide = children.map(slide => (
        <>
          {slide}
        </>
      ));

         

    return (
        <header className="hero">
            <div className="container">
                <div className="hero__wrapper">
                {activeSlide}
                </div>


            </div>
        </header>
    );
    


    const hero = heroImg;

    const slides = [
        {
            title: "home",
            src: hero
   
        },
        {
            title: "about us",
            src: hero
         
        },
        {
            title: "our work",
            src: hero
          
        },
        {
            title: "contact",
            src: hero
       
        }
    ]

}

export default Hero;