import cmcHeader from './assets/img/Logo CMC Header.png'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function Template() {
  return (
    <div className='pt-10 pb-20' style={{backgroundColor:'#fcf6eb'}}>
      <Header/>
      <HomePage/>
      <Footer/>
    
    </div>
  );
}

export default Template;