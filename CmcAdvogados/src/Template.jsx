import { useState } from 'react';
import cmcHeader from './assets/img/Logo CMC Header.png'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import DeskPage from './pages/DeskPage';
import IfComponent from './components/IfComponent';
function Template() {
  const [page,setPage] = useState('H')

  return (
    <div className='pt-10 pb-20' style={{backgroundColor:'#fcf6eb'}}>
      <Header setPage={setPage}/>

      <IfComponent conditional={page == 'H'}>
        <HomePage/> 
      </IfComponent>

      <IfComponent conditional={page == 'E'}>
        <DeskPage/> 
      </IfComponent>

      <IfComponent conditional={page == 'P'}>
        profissionais
      </IfComponent>

      <IfComponent conditional={page == 'C'}>
        Contato
      </IfComponent>
      
      
      {/* {(page == 'H')  ?
        <HomePage/> 
        : 
        <DeskPage/>
      } */}
      <Footer/>
    
    </div>
  );
}

export default Template;