import DataItem  from 'components/DataItem/DataItem';

import s from './DataList.module.css';

const DataList = ({list}) => {


    return (
    <div>
    <ul className={s.list}>
            {list.map(item  => 
             (<li key={item.id}>
                <div className={s.data} > 
                    <DataItem  root={item.root} id={item.id} RA={item.RA} DEC={item.DEC} m160={item.m160} m210={item.m210} m444={item.m444} z_spec={item.z_spec} z_phot={item.z_phot} z_map={item.z_map} max_line_sn={item.max_line_sn} flux_ha={item.flux_ha} sn_brg={item.sn_brg} sn_pab={item.sn_pab} sn_sii={item.sn_sii} sn_ha={item.sn_ha} sn_oiii={item.sn_oiii} />
                </div>
              <div className={s.imgBox}>
              <div className={s.imgItem}>
                <img  src={item.full} alt="full spectrum" />
              </div>
              <div className={s.imgItem}>
                <img  src={item.d1} alt="1d spectrum" />
              </div>
              <div className={s.imgItem}>
                <img  src={item.d2} alt="2d spectrum" />
              </div>
              <div className={s.imgItem}>
                <img  src={item.line} alt="line spectra" />
              </div>
              </div>
              </li>
              ))}           
           </ul>;
    </div>
    )
  }
  
  export default DataList;