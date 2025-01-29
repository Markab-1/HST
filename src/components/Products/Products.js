import { useMediaQuery } from 'react-responsive'

import Section from 'components/Section/Section';
import Subsection from 'components/Subsection/Subsection';
import Title from 'components/Title/Title';

function Products({children}) {   
  const isMobile = useMediaQuery({ query: '(max-width: 767px)'  })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })

    return ( 
      <Section>
         <Title title="The news"/>  
        <Subsection>
        <p>
            To be updated...
        </p>
        </Subsection>
      </Section>
    
    ) ;
  }
  
  export default Products;