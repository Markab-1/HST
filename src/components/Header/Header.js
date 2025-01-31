import {Outlet} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import React, { useState } from 'react';

import hstimg from '../../figs/HST_logo1.png';
import Symbols from '../../figs/sprite.svg';

import NavList from 'components/NavList/NavList';
import s from './Header.module.css';

function Header({children}) {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)'  })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })

    var Container = s.containerTablet;
    var Img = s.imgMobile ;
    var Title = s.titleTablet ;

    if (isTablet) {
        Container = s.containerTablet;
        Img = s.imgTablet ;
        Title = s.titleTablet ;
    }
    if (isDesktop) {
        Container = s.container ;
        Img = s.img ;
        Title = s.title;
    }

    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        setOpenNav(!openNav);
        console.log("click Open");
    };

    return (       
    <div>               
        <div className={Container}>
            <img className={Img} src={hstimg} alt="logo" /> 
            <h1 className={Title}>Mining titanium: the abundances of metals and dust in the interstellar medium of the Milky Way </h1>
    {(isDesktop || isTablet ) && 
            <NavList setOpenNav={setOpenNav}  />
        }
    {isMobile && 
        <div className={s.dropMenuContainer} >
            <svg className={s.menuSvg} width='35px' height='35px' fill='#ADD8E6' onClick={toggleNav} style={{visibility: openNav ? `hidden` : `visible` }}><use href={`${Symbols}#icon-menu-sandwich`}/></svg>
            <div className={s.dropMenu} style={{transform: openNav ? `translateX(0%)` : `translateX(100%)` }}>
            <NavList setOpenNav={setOpenNav} /> 
            <svg  height='35px' width='35px' fill='#b55c5e' onClick={toggleNav}><use href={`${Symbols}#icon-cross`}/></svg>                
            </div>
        </div>}    
    </div>
            <Outlet/>
        </div>
        

    );
}

export default Header;