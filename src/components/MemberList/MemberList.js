import { useMediaQuery } from 'react-responsive'
import Member  from 'components/Member/Member';
import s from './MemberList.module.css';


const MemberList = ({list}) => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })

  var List = s.listMobile;
  var Item = s.itemMobile;

  if(isTablet) {
    List = s.listTablet;
    Item = s.itemTablet;
  }

  if(isDesktop) {
    List = s.list;
    Item = s.item;
  }

  return <ul className={List}>
          {list.map(item  => 
           (<li key={item.id} className={Item}>
            <Member name={item.name} fname={item.fname} institute={item.institute} country={item.country} photo={item.photo} role={item.role}/>
            </li>
            ))}           
         </ul>;
}

export default MemberList;