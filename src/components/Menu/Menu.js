import s from './Menu.module.css';

function Menu({children}) {
  return ( 
  <ul className={s.menulist}>
    <li className={s.menuitem}> Home </li>
    <li className={s.menuitem}> Survey </li>
    <li className={s.menuitem}> Team </li>
    <li className={s.menuitem}> Data products </li>
  </ul>) ;
}

export default Menu;
