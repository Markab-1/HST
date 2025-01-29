

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Container from "components/Container/Container";

function Layout({children}) {
      
    return ( 
      <Container>
          <Header/>
          <Footer/>
      </Container>
    ) ;
  }
  
  export default Layout;
  