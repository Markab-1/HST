import s from './DataItem.module.css';


const DataItem = ({id, root, RA, DEC, m160, m210, m444, z_spec, z_phot, z_map, max_line_sn, flux_ha, sn_brg, sn_pab, sn_sii, sn_ha, sn_oiii, d2}) => {
    const DECM = Math.round(DEC*1000000)/1000000
    const RAM = Math.round(RA*1000000)/1000000
    return (
        <div>
            <ul className={s.tableHead}>
            <li className={s.tableItem} style={{"width": "140px"}}>root</li>
            <li className={s.tableItem} style={{"width": "60px"}}>id</li>
            <li className={s.tableItem} style={{"width": "100px"}}>ra</li>
            <li className={s.tableItem} style={{"width": "100px"}}>dec</li>
            <li className={s.tableItem} style={{"width": "60px"}}>m160</li>
            <li className={s.tableItem} style={{"width": "60px"}}>m210</li>
            <li className={s.tableItem} style={{"width": "60px"}}>m444</li>
            <li className={s.tableItem} style={{"width": "60px"}}>z_spec</li>
            <li className={s.tableItem} style={{"width": "60px"}}>z_phot</li>
            <li className={s.tableItem} style={{"width": "60px"}}>z_map</li>
            <li className={s.tableItem} style={{"width": "80px"}}>max_line_sn</li>
            <li className={s.tableItem} style={{"width": "60px"}}>flux_ha</li>
            <li className={s.tableItem} style={{"width": "60px"}}>sn_brg</li>
            <li className={s.tableItem} style={{"width": "60px"}}>sn_pab</li>
            <li className={s.tableItem} style={{"width": "60px"}}>sn_sii</li>
            <li className={s.tableItem} style={{"width": "60px"}}>sn_ha</li>
            <li className={s.tableItem} style={{"width": "60px"}}>sn_oiii</li>
            </ul>
        <ul className={s.list}>
        <li className={s.item} style={{"width": "140px"}}>
                {root}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {id}
            </li>
            <li className={s.item} style={{"width": "100px"}}>
                {RAM}
            </li>
            <li className={s.item} style={{"width": "100px"}}>
                {DECM}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {m160}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {m210}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {m444}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {z_spec}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {z_phot}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {z_map}
            </li>
            <li className={s.item} style={{"width": "80px"}}>
                {max_line_sn}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {flux_ha}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {sn_brg}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {sn_pab}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {sn_sii}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {sn_ha}
            </li>
            <li className={s.item} style={{"width": "60px"}}>
                {sn_oiii}
            </li>
        </ul>
        
        </div>
    );
  }
  
  export default DataItem;