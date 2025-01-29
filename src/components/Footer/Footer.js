import s from './Footer.module.css';

function Footer({ children }) {
    return (
        <div className={s.footerContainer}>
            <p>Our Team. All rights reserved | Design: Our Team </p> 
            <p><a className={s.link} href="https://www.flaticon.com/free-icons/hubble-space-telescope" title="HST icons">HST icons created by Smashicons - Flaticon</a></p>
        </div>
    );
}

export default Footer;