import s from './NavBtn.module.css';

function NavBtn({text}) {     
  return ( 
    <button className={s.menuItem}>{text}</button>
  ) ;
}

export default NavBtn;