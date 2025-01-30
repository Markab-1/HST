import {NavLink} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react'; 

import s from './NavList.module.css';


const NavList = (props) => {

    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })
    
    const [currentLink, setCurrentLink] = useState('science');

    var MenuItem = s.menuItemMobile ;
    var CurrentMenuItem = s.currentMenuItemMobile ;
    var MenuList = s.menuListMobile ;

    if (isTablet) {
        MenuItem = s.menuItemTablet ;
        CurrentMenuItem = s.currentMenuItemTablet ;
        MenuList = s.menuListTablet 
    }
    if (isDesktop) {
        MenuItem = s.menuItem ;
        CurrentMenuItem = s.currentMenuItem ;
        MenuList = s.menuList ;
    }

  return  ( 
    <div>        
  <ul className={MenuList}>
  <li>
      <NavLink to= "/"  >
          <button className={currentLink  === "science" ? CurrentMenuItem : MenuItem} onClick= {() => setCurrentLink('science')}>Science</button>
      </NavLink>
  </li>
  <li>  
      <NavLink to= "/team" >
          <button className={currentLink  === "team" ? CurrentMenuItem : MenuItem} onClick = {() => setCurrentLink('team')}>Team</button>
      </NavLink>
  </li>
  <li > 
      <NavLink to= "/products" >
          <button className={currentLink  === "track" ? CurrentMenuItem : MenuItem} onClick = {() => setCurrentLink('track')}>Keeping track</button>
      </NavLink>
  </li>
  <li > 
      <NavLink to= "/publications" >
          <button className={currentLink  === "publications" ? CurrentMenuItem : MenuItem} onClick = {() => setCurrentLink('publications')}>Publications</button>
      </NavLink>
  </li>
</ul> 
</div>);
}

export default NavList;