import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import Subtitle from 'components/Subtitle/Subtitle';
import ShowText from 'components/ShowText/ShowText';
import {Intro, SciRationale, ImmObj} from 'components/Content/Content';

import s from './HomeDescription.module.css';
import Subsection from 'components/Subsection/Subsection';
//import {ImmObj} from '../../content';

function HomeDescription({children}) {
      
  return ( 
    <Section>
      <Title title="Intro"/>
      <Subsection>
        <div className={s.content}>
            <Intro/>
        </div>
      </Subsection>
      <Title title="Description of the proposed programme"/>
      
      <Subsection>
      <Subtitle title="Scientific Rationale" />
      <div className={s.content}>   
       <ShowText > <SciRationale/> </ShowText>
       </div>
      </Subsection>

      <Subsection>
      <Subtitle title="Immediate Objective" />
      <div className={s.content}>   
       <ShowText > <ImmObj/> </ShowText>
       </div>
      </Subsection>

    </Section>
  ) ;
}

export default HomeDescription;
