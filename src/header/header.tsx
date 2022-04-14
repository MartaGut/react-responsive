
import { useEffect, useState } from 'react';
import logo from './../img/logo.svg';
import iconSet from "./../selection.json";
import IcomoonReact from "icomoon-react";

function Header() {

    const links = [
        {
            title: "home",
            href: "#",
            src: "home"
        },
        {
            title: "about us",
            href: "#",
            src: "about"
        },
        {
            title: "our work",
            href: "#",
            src: "our-work"
        },
        {
            title: "contact",
            href: "#",
            src: "contact"
        }
    ]

    // toggle menu

    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isTabletScreen, setIsTabletScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 320px)");
        const mediaQueryTablet = window.matchMedia("(max-width: 480px)");
        mediaQuery.addListener(handleMediaQueryChange);
        mediaQueryTablet.addListener(handleMediaQueryChangeTablet);
        handleMediaQueryChange(mediaQuery);
        handleMediaQueryChangeTablet(mediaQueryTablet);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
            mediaQueryTablet.removeListener(handleMediaQueryChangeTablet);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const handleMediaQueryChangeTablet = mediaQueryTablet => {
        if (mediaQueryTablet.matches) {
            setIsTabletScreen(true);
        } else {
            setIsTabletScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="header">
            <div className="container">
                <embed className="header__img" src={logo} />
                {(!isSmallScreen || isNavVisible) && (
                    <>
                        <nav className="header__links">
                            {links.map(({ title, href, src }) => (
                                <>
                                    <a className="header__link-icon" key={title} href={href}>
                                        {(!isTabletScreen) &&
                                            <span className="header__link">{title}</span>
                                        }
                                            {(isSmallScreen) &&
                                            <span className="header__link">{title}</span>
                                        }
                                        {(!isSmallScreen && isTabletScreen) &&
                                            <IcomoonReact className="header__link-img" iconSet={iconSet} color="#444" size={100} icon={src} />
                                        }
                                    </a>
                                    {/* <a className="header__link" key={title} href={href}>
                                        {title}
                                    </a> */}
                                </>
                            ))}
                        </nav>
                        <button className="header__search-btn" type="button"><IcomoonReact className="header__search-icon" iconSet={iconSet} icon="search" /></button>
                    </>
                )}
                <button className="header__hamburger-btn" type="button" onClick={toggleNav}><IcomoonReact className="header__hamburger-icon" iconSet={iconSet} color="#444" size={100} icon="burger" /></button>

            </div>
        </header>
    );
}

export default Header;
