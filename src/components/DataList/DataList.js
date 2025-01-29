
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import DataItem  from 'components/DataItem/DataItem';

import s from './DataList.module.css';
import data from '../../fresco_data.json'

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <li key={item.id}>
                <div className={s.data} > 
                    <DataItem  root={item.root} id={item.id} RA={item.RA} DEC={item.DEC} m160={item.m160} m210={item.m210} m444={item.m444} z_spec={item.z_spec} z_phot={item.z_phot} z_map={item.z_map} max_line_sn={item.max_line_sn} flux_ha={item.flux_ha} sn_brg={item.sn_brg} sn_pab={item.sn_pab} sn_sii={item.sn_sii} sn_ha={item.sn_ha} sn_oiii={item.sn_oiii} />
                </div>
              <div className={s.imgBox}>
              <div className={s.imgItem}>
                <img  src={item.full} className={s.img}  alt="full spectrum" />
              </div>
              <div className={s.imgItem}>
                <img  src={item.d1} className={s.img}  alt="1d spectrum" />
              </div>
              <div className={s.imgItem}>
                <img  src={item.d2} className={s.img}  alt="2d spectrum" />
              </div>
              <div className={s.imgItem}>
                <img  src={item.line} className={s.img} style={{"maxHeight":"200px"}} alt="line spectra" />
              </div>
              </div>
              </li>
        ))}
    </>
  );
}

function DataList({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
//  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
//    console.log(
//      `User requested page number ${event.selected}, which is offset ${newOffset}`
//    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< previous"
        nextClassName={s.prevBtn}
        previousClassName={s.prevBtn}
        containerClassName={s.menuBox}
        pageClassName={s.pageClass}
        pageLinkClassName={s.pageLinkClass}
        breakClassName={s.ellipsis}
        activeClassName={s.activeBtn}
        renderOnZeroPageCount={null}
      />
    </>
  );
  }
  
  export default DataList;