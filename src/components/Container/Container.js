import { useMediaQuery } from 'react-responsive'

import s from './Container.module.css';

const Container = ({ children }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)'  })
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })

    return (
        <div>
        {isMobile &&    
        <div className={s.containerMobile} >
            {children}
        </div>
        } 
        {isTablet &&    
        <div className={s.containerTablet} >
            {children}
        </div>
        }
        {isDesktop &&    
        <div className={s.containerDesktop} >
            {children}
        </div>
        }  
        </div>
    );
}

export default Container;