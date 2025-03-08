import cmcHeader from '../assets/img/Logo CMC Header.png'
import cmcFooter from '../assets/img/Logo CMC Rodapé.png'
import lucas from '../assets/img/CMC Lucas Corsino Paiva copiar.png'

function ProfessionalPages() {
    return (
        <div className='bg-white w-full pX-page text-blue-color' style={{paddingTop:95}}>
            <div className='flex items-center justify-between'>
                <h2 style={{fontSize:38,fontFamily:'CabinetGrotesk-Medium'}}>
                    Profissionais
                </h2>
                <div className="flex items-center px-20">
                    {/* Círculo */}
                    <div className="w-4 h-4 rounded-full" style={{backgroundColor:'#1d3695'}} />
                    {/* Linha */}
                    <div style={{width:164,height:1.5,backgroundColor:'#1d3695'}} />
                </div>
                <p style={{fontSize:19,fontFamily:'CabinetGrotesk-Medium'}}>
                    O time de profissionais do CMC + Associados é experiente, preparado e
                    comprometido para assessorar nossos clientes ao longo de toda a sua
                    jornada.
                </p>
            </div>
            <div style={{paddingTop:95}}>
                <div className='flex'>
                    <div>
                        <img src={lucas} style={{width:423,height:450}}/>
                    </div>
                    <div className='w-screen' style={{paddingLeft:59}}>
                        <div style={{borderBottom:'1px solid #1d3695'}}>
                            <h2 style={{fontSize:38,fontFamily:'CabinetGrotesk-Medium'}}>
                                Lucas Corsino de Paiva, CFP®
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ProfessionalPages;