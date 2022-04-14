import { useEffect, useState } from 'react';
import iconSet from "./../selection.json";
import IcomoonReact from "icomoon-react";

function Footer() {

    const socialMedia = [
        {
            srcImg: "facebook",
        },
        {
            srcImg: "twitter",
        },
        {
            srcImg: "email",
        }
    ]

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

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__social">
                    {socialMedia.map(({ srcImg }) => (
                        <a className="footer__link" key={srcImg} href="#">
                            <IcomoonReact className="footer__link-img" iconSet={iconSet} icon={srcImg} />
                        </a>
                    ))}
                </div>
                <nav className="footer__links">
                    {links.map(({ title, href, src }) => (
                        <a className="footer__link-copy" key={title} href={href}>
                            {title}
                        </a>
                    ))}
                </nav>
                <button className="footer__button" type="button"><IcomoonReact className="footer__link-img" iconSet={iconSet} icon="top" /></button>
            </div>
        </footer>
    );
}

export default Footer;
