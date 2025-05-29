import { useMediaQuery } from 'react-responsive' ;

import s from './Title.module.css';

function Title({title}) {   
  
  const isMobile = useMediaQuery({ query: '(max-width: 767px)'  })
  
 var Title = s.title;

 if(isMobile){
  Title = s.titleMobile;
 }

  return ( 
       <h2 className={Title}> {title} </h2>
  ) ;
}

export default Title;