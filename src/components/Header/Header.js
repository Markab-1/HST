import {Outlet} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import React, { useState } from 'react';

//import logo from '../../figs/FRESCO_Logo_NoText.png';
import Symbols from '../../figs/sprite.svg';

import NavList from 'components/NavList/NavList';
import s from './Header.module.css';

function Header({children}) {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)'  })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })

    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        setOpenNav(!openNav);
        console.log("click Open");
    };



     console.log("openNav = ",openNav)

    return (       
        <div> 
            {isMobile &&              
                <div className={s.containerMobile}>
{/*                <img className={s.imgMobile} src={logo} alt="logo" /> */}
                <h1 className={s.titleMobile}>The FRESCO JWST Survey </h1> 
                <div className={s.dropMenuContainer} >
                <svg className={s.menuSvg} width='35px' height='35px' fill='gray' onClick={toggleNav} style={{visibility: openNav ? `hidden` : `visible` }}><use href={`${Symbols}#icon-menu-sandwich`}/></svg>
                    <div className={s.dropMenu} style={{transform: openNav ? `translateX(0%)` : `translateX(100%)` }}>
                    <NavList setOpenNav={setOpenNav} /> 
                    <svg  height='35px' width='35px' fill='#b55c5e' onClick={toggleNav}><use href={`${Symbols}#icon-cross`}/></svg>                
                    </div>
                </div>
                </div> }
            {isTablet &&             
                <div className={s.containerTablet}>
{/*                <img className={s.imgTablet} src={logo} alt="logo" />*/}
                <h1 className={s.titleTablet}>The FRESCO JWST Survey </h1>
                <NavList setOpenNav={setOpenNav}/>
            </div>  }
            {isDesktop &&            
                <div className={s.container}>
{/*                <img className={s.img} src={logo} alt="logo" /> */}
                <h1 className={s.title}>Mining titanium: the abundances of metals and dust in the interstellar medium of the Milky Way </h1>
                <NavList setOpenNav={setOpenNav}/>
            </div>
            }

            <Outlet/>
        </div>
        

    );
}

export default Header;