import cmcHeader from '../assets/img/Logo CMC Header.png'
import escritorio from '../assets/img/CMC - banner jardim europa.jpg'
import cmcGif from '../assets/img/cmcGifProvisorio.png'
import instituicoes from '../assets/img/CMC - logos instituições.png'

function DeskPage() {
    return (     
        <div>
            <div className="top-0 left-0 w-full h-screen -z-10">
                <div
                    className="w-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${escritorio})`,height:741 }}
                >
                    <div 
                        // className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                        style={{color:'#1d3695',fontSize:38,fontFamily:'CabinetGrotesk-Bold',paddingLeft:180,paddingTop:450}}
                    >
                        Assessoramos empresas, famílias e associações,
                        <br />
                        buscando soluções sólidas e éticas.
                    </div>
                </div>
                {/* <img src={escritorio} className="w-screen" style={{height:500}} /> */}
            </div>
            
            <div className='flex items-center justify-between w-full' style={{backgroundColor:'#fff',padding:'115px 180px',color:'#1d3695',fontFamily:'CabinetGrotesk-Medium',fontSize:19}}>
                <div className="flex items-center">
                    {/* Círculo */}
                    <div className="w-4 h-4 rounded-full" style={{backgroundColor:'#1d3695'}} />
                    {/* Linha */}
                    <div style={{width:270,height:1.5,backgroundColor:'#1d3695'}} />
                </div>

                <div>
                    O escritório foi fundado pelos sócios
                    <br />
                    Lucas Corsino de Paiva e Antônio
                    <br />
                    Flávio Coimbra Motta Castro que se
                    <br />
                    conhecem desde a graduação na
                    <br />
                    Faculdade de Direito do Largo São
                    <br />
                    Francisco (USP).
                </div>
                
                <div>
                    Após trabalharem em alguns dos
                    <br />
                    principais escritórios de advocacia do
                    <br />
                    país, tendo acumulado mais de 10 anos
                    <br />
                    de experiência, Lucas e Antonio
                    <br />
                    uniram seus esforços para criar o
                    <br />
                    CMC + Associados.
                </div>
            </div>

            <div className="flex flex-row w-full" style={{height:500}}>
                <div className='flex-1 flex flex-col justify-center' style={{backgroundColor:'#1d3695',padding:120}}>
                    <img src={cmcGif}/>
                </div>

                <div className='flex-1 flex flex-col justify-center' style={{backgroundColor:'#fcf6eb',padding:120}}>
                    <p style={{color:'#1d3695',fontFamily:'CabinetGrotesk-Medium',fontSize:19}}>
                        Estar próximo dos nossos clientes e oferecer soluções
                        jurídicas customizadas é a nossa essência. Em um
                        mundo cada vez mais marcado pela padronização e
                        automação, acreditamos no valor de um atendimento
                        estratégico e sob medida.
                        <br />
                        <br />
                        Nosso escritório é guiado por excelência, ética,
                        comprometimento e humanidade. Sabemos que a
                        confiança e o conhecimento são fundamentais para
                        enfrentar desafios complexos e multidisciplinares. Por
                        isso, no CMC + Associados, trabalhamos lado a lado
                        com aqueles que transformam o mundo, oferecendo
                        suporte jurídico com clareza e solidez.
                    </p>
                </div>

            </div>
            <div className="text-center w-full" style={{padding:'115px 180px',color:'#1d3695',fontFamily:'CabinetGrotesk-Medium',backgroundColor:'#fff'}}>
            {/* Título */}
                <h1 className="text-3xl md:text-4xl font-bold mb-20">
                    Assessoria jurídica estratégica e sob medida<br />
                    para empresas, famílias e associações
                </h1>

                {/* Parágrafos */}
                <p className="text-lg md:text-xl mb-20">
                    Com atuação em litígios cíveis e tributários, contratos, reestruturação empresarial,
                    planejamento sucessório e consultoria societária e tributária, temos como propósito
                    simplificar a relação entre cliente e advogado: acreditamos que transparência e
                    acessibilidade devem ser regras absolutas na prestação de serviços jurídicos.
                </p>

                <p className="text-lg md:text-xl mb-20">
                    Nossos sócios são genuinamente presentes em cada caso, servindo com empatia e conhecimento
                    atualizado pelas mais reconhecidas instituições do país e do mundo.
                </p>


                <img src={instituicoes} className='w-full' style={{}}/>

            </div>
            
            
        </div>
    );
  }
  
  export default DeskPage;

              {/* <div
                className="absolute top-0 left-0 w-full -z-10"
                style={{ backgroundImage: `url(${background})` }}
            />  */}


