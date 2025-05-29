import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import emailjs from '@emailjs/browser';

import s from './ContactForm.module.css'

const ContactForm = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })

  var Container = s.containerMobile ;
  var Field = s.fieldMobile ;
  var Msg = s.msgMobile
  if (isTablet) 
    {Container = s.containerTablet ;
     Field = s.field ;
     Msg = s.msg ;
    }
  if (isDesktop) 
    {Container = s.containerDesktop ;
     Field = s.field ;
     Msg = s.msg ;
    }

  const form = useRef();
  const [openMsg, setOpenMsg] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_stisism', 'template_mgo0vc5', form.current, {
        publicKey: '0SV1DK-4YE6Q8_3EJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setOpenMsg(!openMsg);
          console.log("click Open");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };

  return (
    <div className={s.container}>
        <div className={Container}>
            <div className={s.textContainer} style={{transform: openMsg ? `translateY(0%)` : `translateY(-100%)` }}>
            <span className={s.text}>Your message has been sent. Thank you for your interest in our project.</span>
            <button className={s.menuBtn} onClick={()=>setOpenMsg(!openMsg)}>Got it</button>
            </div>
        </div>
  
    <form className={s.form} ref={form} onSubmit={sendEmail}>
      <input className={Field} type="text" name="user_name" placeholder="Your Name" required />
      <input className={Field} type="email" name="user_email" placeholder="Your Email" required />
      <textarea className={Msg} name="message" placeholder="Your Message" required />
      <button className={s.btn} type="submit"> Send </button>
    </form>
    </div>
  );
};

export default ContactForm;