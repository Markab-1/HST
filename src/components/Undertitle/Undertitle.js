import s from './Undertitle.module.css';

function Undertitle({title}) {     
  return ( 
       <h3 className={s.title}> {title} </h3>
  ) ;
}

export default Undertitle;