import { useMediaQuery } from 'react-responsive'

import Section from 'components/Section/Section';
import Subsection from 'components/Subsection/Subsection';
import Title from 'components/Title/Title';
import NewsList from 'components/NewsList/NewsList';


function Products({children}) {   
  const isMobile = useMediaQuery({ query: '(max-width: 767px)'  })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })

    return ( 
      <Section>
         <Title title="What's new"/>  
        <Subsection>
        <NewsList/>
        </Subsection>
      </Section>
    
    ) ;
  }
  
  export default Products;