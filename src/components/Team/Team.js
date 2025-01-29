import Section from 'components/Section/Section';
import Subsection from 'components/Subsection/Subsection';
import Title from 'components/Title/Title';
import Undertitle from 'components/Undertitle/Undertitle';
import MemberList from 'components/MemberList/MemberList';

import members from '../../team-members.json'

import s from 'components/Team/Team.module.css'



function Team({children}) {
      
  return ( 
    <Section>
        <Title title="Team"/> 
        <Undertitle title="Who is behind the proposal"/>
        <Subsection>
        <p className={s.text}>Our team is an international collaboration including:</p>
        <MemberList list={members}/>
        </Subsection>   
    </Section>
  ) ;
}

export default Team;