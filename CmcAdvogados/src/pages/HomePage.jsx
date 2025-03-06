import gifHome from '../assets/img/gifHomeProvisorio.png'


function HomePage() {
  return (
    <div>
        <img src={gifHome} style={{paddingInline:180}} className='w-full'/>
        <div className='flex items-center justify-between w-full' style={{padding:'100px 180px'}}>
          <p style={{color:'#1d3695',fontFamily:'CabinetGrotesk-Bold',fontSize:38}}>
            Traduzimos a complexidade
            <br/>
            do direito com prática,
            <br/>
            conhecimento e eficiência.
          </p>
          <p style={{color:'#1d3695',fontFamily:'CabinetGrotesk-Medium',fontSize:19}}>
            Corsino Motta Castro + Associados
            <br/>
            assessora empresas, famílias e
            <br/>
            associações, buscando soluções
            <br/>
            sólidas e éticas. 
          </p>
        </div>

        <div className="flex flex-row gap-1 w-full mb-20" style={{height:500}}>
          <div className='flex-1 p-10 flex flex-col justify-center' style={{backgroundColor:'#1d3695'}}>
            <strong className="self-start w-full" style={{color:'#fcf6eb',fontSize:38}}>
              Empresas
            </strong>
            <br />
            <p style={{color:'#fcf6eb',fontSize:19}}>
              Advocacia empresarial focada
              <br />
              em resultado, com profundo
              <br />
              conhecimento do negócio do cliente
              <br />
              para oferecer soluções jurídicas
              <br />
              personalizadas.
            </p>
          </div>

          <div className='flex-1 p-10 flex flex-col justify-center' style={{backgroundColor:'#1d3695'}}>
            <strong className="self-start w-full" style={{color:'#fcf6eb',fontSize:38}}>
              Famílias
            </strong>
            <br />
            <p style={{color:'#fcf6eb',fontSize:19}}>
              Planejamento sucessório ancorado
              <br />
              em governança familiar, prevenção
              <br />
              de disputas e eficiência tributária, de
              <br />
              forma personalizada
            </p>  
          </div>

          <div className='flex-1 p-10 flex flex-col justify-center' style={{backgroundColor:'#1d3695'}}>
            <strong className="self-start w-full" style={{color:'#fcf6eb',fontSize:38}}>
              Associações
            </strong>
            <br />
            <p style={{color:'#fcf6eb',fontSize:19}}>
              Advocacy perante os órgãos
              <br />
              públicos para defesa dos interesses
              <br />
              de associações e entidades do
              <br />
              terceiro setor.
            </p>  
          </div>

        </div>
    </div>
  );
}

export default HomePage;