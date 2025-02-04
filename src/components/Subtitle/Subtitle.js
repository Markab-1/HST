import { useMediaQuery } from 'react-responsive' ;

import s from './Subtitle.module.css';

function Subtitle({title}) {     
  const isMobile = useMediaQuery({ query: '(max-width: 767px)'  });

  var Title = s.title ;
  if (isMobile){
    Title = s.titleMobile ;
  }

  return ( 
       <h3 className={Title}> {title} </h3>
  ) ;
}

export default Subtitle;