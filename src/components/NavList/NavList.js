import {NavLink} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
/*import { useState } from 'react'; */

import s from './NavList.module.css';


const NavList = (props) => {

    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })
    
    var currentMenuItem = s.menuItemMobile
    var currentMenuList = s.menuListMobile

    if (isTablet) {
        currentMenuItem = s.menuItemTablet ;
        currentMenuList = s.menuListTablet 
    }
    if (isDesktop) {
        currentMenuItem = s.menuItem ;
        currentMenuList = s.menuList 
    }

/*    const [isClicked, setIsClicked] = useState(false);
    const handleSelect = () => setIsClicked(isClicked => !isClicked);*/

/*style={{backgroundColor: isClicked ? '#747475' : '#3f3f40' }}
onClick={handleSelect}*/
  return  ( 
    <div>        
  <ul className={currentMenuList}>
  <li>
      <NavLink to= "/"  >
          <button className={currentMenuItem} onClick= {() => props.setOpenNav(false)}>Science</button>
      </NavLink>
  </li>
  <li>
      <NavLink to= "/team" >
          <button className={currentMenuItem} onClick = {() => props.setOpenNav(false)}>Team</button>
      </NavLink>
  </li>
  <li > 
      <NavLink to= "/products" >
          <button className={currentMenuItem} onClick = {() => props.setOpenNav(false)}>Keeping track</button>
      </NavLink>
  </li>
  <li > 
      <NavLink to= "/publications" >
          <button className={currentMenuItem} onClick = {() => props.setOpenNav(false)}>Publications</button>
      </NavLink>
  </li>
</ul> 
</div>);
}

export default NavList;