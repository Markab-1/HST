import Section from 'components/Section/Section';
import Subsection from 'components/Subsection/Subsection';
import Title from 'components/Title/Title';
import ContactForm from 'components/ContactForm/ContactForm';

import s from "./ContactPage.module.css"



function ContactPage({children}) {
      
  return ( 
    <Section>
        <Title title="Contact us"/> 
        <Subsection> 
           <div className={s.div}>If you have any questions, please fill in the form: </div>   
            <ContactForm/>  
          <div className={s.divEnd}>or send us an email to <span className={s.email}>stisismteam@gmail.com</span> </div> 
        </Subsection>   
    </Section>
  ) ;
}

export default ContactPage;