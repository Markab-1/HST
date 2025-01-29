import Member  from 'components/Member/Member';
import s from './MemberList.module.css';


const MemberList = ({list}) => {
  return <ul className={s.list}>
          {list.map(item  => 
           (<li key={item.id} className={s.item}>
            <Member name={item.name} fname={item.fname} institute={item.institute} country={item.country} photo={item.photo}/>
            </li>
            ))}           
         </ul>;
}

export default MemberList;