import s from './Subtitle.module.css';

function Subtitle({title}) {     
  return ( 
       <h3 className={s.title}> {title} </h3>
  ) ;
}

export default Subtitle;