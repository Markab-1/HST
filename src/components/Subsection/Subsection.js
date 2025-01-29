import s from './Subsection.module.css';

function Subsection({ children }) {
  return <div className={s.section}>{children}</div>;
}

export default Subsection;