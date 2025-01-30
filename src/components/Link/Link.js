import s from './Link.module.css';

const Link = ({ link, children }) => {
  return (
    <a className={s.link} href={link}  target="_blank">
     {children}
    </a>

    );
}

export default Link;