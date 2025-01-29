import s from './Footer.module.css';

function Footer({ children }) {
    return (
        <div className={s.footerContainer}>
            <p>Our Team. All rights reserved | Design: Our Team </p> 
        </div>
    );
}

export default Footer;