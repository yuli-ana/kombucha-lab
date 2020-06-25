import React from 'react';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="wrapper">
                <div>
                    <p>
                        All product design and images credited to
                        <a
                            className="footer-juicery"
                            href="https://www.villagejuicery.com/"
                            target="_blanc"
                            rel="noopener noreferrer">Village Juicery
                        </a>
                    </p>
                    <p>Built by Yuliana Hazda, 2020</p>
                </div>
                <ul className="row row--center">
                    <li className="col-auto">
                        <a
                            className="footer-icon"
                            href="https://github.com/yuli-ana"
                            target="_blanc"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li className="col-auto">
                        <a
                            className="footer-icon"
                            href="https://www.linkedin.com/in/yuliana-hazda-b0ab711a8/"
                            target="_blanc"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li className="col-auto">
                        <a
                            className="footer-icon"
                            href="https://twitter.com/yulianahazda"
                            target="_blanc"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;