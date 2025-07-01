import React from 'react';

import s from './Modal.module.css';


function Modal({isOpen, modalClose, children }) {

if (!isOpen) return null;

  return( 
  <div className={s.modalBox}>  
  <button className={s.btn} onClick={modalClose}>Close</button>    
   <div className={s.content}>{children}</div>
  </div>
  );
}

export default Modal;