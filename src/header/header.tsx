
import { useEffect, useState } from 'react';
import hamburger from './../img/hamburger.svg';
import logo from './../img/logo.svg';
import hat from './../img/hat.svg';
import home from './../img/home.svg';
import mail from './../img/mail.svg';
import question from './../img/question.svg';

function Header() {

    const logoImg = logo;
    const hamburgerImg = hamburger;
    const hatImg = hat;
    const homeImg = home;
    const mailImg = mail;
    const questionImg = question;

    const links = [
        {
            title: "home",
            href: "#",
            src: homeImg
        },
        {
            title: "about us",
            href: "#",
            src: questionImg
        },
        {
            title: "our work",
            href: "#",
            src: hatImg
        },
        {
            title: "contact",
            href: "#",
            src: mailImg
        }
    ]


    // toggle menu

    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 320px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
            console.log("clicked")
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="header">
            <div className="container">
                <embed className="header__img" src={logoImg} alt="Logo" />
                {/* <embed src={hamburger}></embed> */}
                {(!isSmallScreen || isNavVisible) && (
                    <nav className="header__links">
                        {links.map(({ title, href, src }) => (
                            <a className="header__link" key={title} href={href}>{title}
                                <embed className="header__img" src={src} alt="Logo" />
                            </a>
                        ))}
                    </nav>
                )}
                <button type="button" onClick={toggleNav}><img className="header__img" src={hamburgerImg} alt="Logo" /></button>

            </div>
        </header>
    );
}

export default Header;
