import cmcHeader from '../assets/img/Logo CMC Header.png'

function Header(props) {

    const chengePage = (page) =>{
        props.setPage(page)
    }

    return (
        <div className="relative flex items-center justify-between w-full" style={{paddingInline:180,zIndex:10}}>
            <img src={cmcHeader} style={{width:216,height:112}}/>
            <div className='flex'>
                <div className="flex flex-row gap-10 mr-10" style={{fontFamily:'CabinetGrotesk-Medium',fontSize:19}}>
                    <a onClick={()=>chengePage('H')} href='#' style={{color:'#1d3695'}}>Home</a>
                    <a onClick={()=>chengePage('E')} href='#' style={{color:'#1d3695'}}>O Escritório</a>
                    <a onClick={()=>chengePage('P')} href='#' style={{color:'#1d3695'}}>Profissionais</a>
                    <a onClick={()=>chengePage('C')} href='#' style={{color:'#1d3695'}}>Contato</a>
                </div>

                <div className="flex flex-row gap-5 ml-10" style={{fontFamily:'CabinetGrotesk-Medium',fontSize:19}}>
                    <a className='' style={{color:'#1d3695'}}>EN</a>
                    <a style={{color:'#1d3695'}}>FR</a>
                </div>
            </div>    
        </div>
    );
  }
  
  export default Header;