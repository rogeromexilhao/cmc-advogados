import cmcHeader from '../assets/img/Logo CMC Header.png'
import cmcFooter from '../assets/img/Logo CMC Rodapé.png'

function Footer() {
    return (
        <footer style={{color:'#1d3695',paddingInline:180}}>
            <div className="flex w-full items-center">
                <p style={{ fontSize: 19, fontFamily: 'CabinetGrotesk-Medium' }} className="flex-shrink-0">
                    Inscreva-se para receber nossa newsletter de artigos e notícias relevantes
                </p>
                <input
                    style={{ border: '1px solid #1d3695' }}
                    type="email"
                    placeholder="Seu melhor email"
                    className="p-1 ml-3 flex-grow"
                />
            </div>

            <div className="flex items-center justify-between w-full" style={{paddingTop:94}}>
                <img src={cmcFooter} style={{width:189,height:45}}/>
                <div style={{fontFamily:'CabinetGrotesk-Medium'}} className='justify-items-end'>
                    <p>São Paulo</p>
                    <p>Av. Renato Paes de Barros, 33</p>
                    <p>14° andar, Itaim Bibi, SP</p>
                    <p>04530050</p>
                </div>
            </div>

            <nav className="flex justify-end gap-6" style={{paddingTop:59,fontFamily:'CabinetGrotesk-Medium',fontSize:24}}>
                <a href="#" className="hover:underline">Escritório</a>
                <a href="#" className="hover:underline">Equipe</a>
                <a href="#" className="hover:underline">Contato</a>
                <a href="#" className="hover:underline">LinkedIn</a>
            </nav>
            
            <div className="flex items-center justify-between w-full" style={{paddingTop:94,fontSize:17}}>
                <p className="mt-4">© 2025</p>
                
                <p className="mt-6">
                    <a href="#" className="hover:underline">Política de privacidade</a>
                </p>
            </div>


            
    </footer>
    );
  }
  
  export default Footer;