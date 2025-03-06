import cmcHeader from '../assets/img/Logo CMC Header.png'

function Header() {
    return (
        <div className="flex items-center justify-between w-full" style={{paddingInline:180}}>
            <img src={cmcHeader} style={{width:216,height:112}}/>        
            <div className="flex flex-row gap-4" style={{fontFamily:'CabinetGrotesk-Medium'}}>
                <a style={{color:'#1d3695'}}>Home</a>
                <a style={{color:'#1d3695'}}>O Escritório</a>
                <a style={{color:'#1d3695'}}>Profissionais</a>
                <a style={{color:'#1d3695'}}>Contato</a>
                
                <a className='ml-9' style={{color:'#1d3695'}}>EN</a>
                <a style={{color:'#1d3695'}}>FR</a>
            </div>
        </div>
    );
  }
  
  export default Header;