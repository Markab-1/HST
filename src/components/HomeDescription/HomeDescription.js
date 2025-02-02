import { useMediaQuery } from 'react-responsive'

import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import Subtitle from 'components/Subtitle/Subtitle';
import ShowText from 'components/ShowText/ShowText';
import {Intro, SciRationale, ImmObj} from 'components/Content/Content';

import s from './HomeDescription.module.css';
import Subsection from 'components/Subsection/Subsection';

function HomeDescription({children}) {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)'  })

  var Content = s.content 
  if (isMobile) {
    Content = s.contentMobile
  }
      
  return ( 
    <Section>
      <Title title="Intro"/>
      <Subsection>
        <div className={Content}>
            <Intro/>
        </div>
      </Subsection>
      <Title title="Description of the proposed programme"/>
      
      <Subsection>
      <Subtitle title="Scientific Rationale" />
      <div className={Content}>   
       <ShowText > <SciRationale/> </ShowText>
       </div>
      </Subsection>

      <Subsection>
      <Subtitle title="Immediate Objective" />
      <div className={Content}>   
       <ShowText > <ImmObj/> </ShowText>
       </div>
      </Subsection>

    </Section>
  ) ;
}

export default HomeDescription;
