import s from './Btn.module.css';

function Btn({text}) {     
  return ( 
       <div className={s.box}> {text} </div>
  ) ;
}

export default Btn;