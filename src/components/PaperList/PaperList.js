/*import PaperInfo  from 'components/PaperInfo/PaperInfo';*/
import Btn from 'components/Btn/Btn';
import s from './PaperList.module.css';


/*const PaperList = ({list}) => {
  return <ul className={s.list}>
          {list.map(item  => 
           (<li key={item.id} className={s.item}>
            <PaperInfo authors={item.authors} title={item.title} link={item.link}/>
            </li>
            ))}           
         </ul>;
}*/

const PaperList = () => {
  return <div >
    <div className={s.text}>All publications that use FRESCO data are collected here:  </div>
    <div className={s.pub}> 
      <a href="https://ui.adsabs.harvard.edu/search/p_=0&q=docs(library%2F01hHyT2GSe-p7LucKkC5yQ)&sort=date%20desc%2C%20bibcode%20desc" target="_blank" rel="noreferrer noopener" > 
        <Btn text="Publications"/>
      </a> 
    </div>
         </div>;
}

export default PaperList;