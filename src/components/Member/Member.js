import { useMediaQuery } from 'react-responsive'

import s from './Member.module.css';


const Member = ({ name, fname, institute, country, photo, role }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)'  })

  var Item = s.item ;
  var ItemInst = s.itemInst ;
  var Img = s.img ;
  var Country = s.itemCountry ;
  var Stamp = s.stamp ;

  if (isMobile){
    Item = s.itemMobile ;
    ItemInst = s.itemInstMobile ;
    Img = s.imgMobile ;
    Country = s.itemCountryMobile ;
    Stamp = s.stampMobile ;
  }

  return (
    <div >
    <div className={Stamp}>{role}</div>
    <img className={Img} src={photo} width="100px"/>
    <div className={s.info}>
    <p className={Item}>{name}</p>
    <p className={Item}>{fname}</p>
    </div>
    <p className={ItemInst}>{institute}</p>
    <p className={Country}>{country}</p>
    </div>

    );
}

export default Member;