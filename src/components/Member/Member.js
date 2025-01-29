import { useMediaQuery } from 'react-responsive'

import s from './Member.module.css';


const Member = ({ name, fname, institute, country, photo }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)'  })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })

  return (
    <div >
    <img className={s.img} src={photo} width="100px"/>
    <p className={s.item}>{name}</p>
    <p className={s.item}>{fname}</p>
    <p className={s.itemInst}>{institute}</p>
    <p className={s.itemCountry}>{country}</p>
    </div>

    );
}

export default Member;