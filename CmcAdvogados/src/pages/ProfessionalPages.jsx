import cmcHeader from '../assets/img/Logo CMC Header.png'
import cmcFooter from '../assets/img/Logo CMC Rodapé.png'
import lucas from '../assets/img/CMC Lucas Corsino Paiva copiar.png'
import linkedinLogo from '../assets/img/CMC - linked in.png'

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
            <div style={{paddingTop:95}} className="w-full">
                <div className='flex items-center'>
                    <div>
                        <img src={lucas} style={{minWidth:423,minHeight:450,maxWidth:423,maxHeight:450}}/>
                    </div>
                    <div style={{paddingLeft:59}} className="flex flex-col flex-grow">
                        <div className='flex items-center justify-between' style={{borderBottom:'1px solid #1d3695'}}>
                            <h2 style={{fontSize:38,fontFamily:'CabinetGrotesk-Medium'}}>
                                Lucas Corsino de Paiva, CFP®
                            </h2>
                            <img src={linkedinLogo} style={{width:23,height:23}}/>
                        </div>
                        <div className='py-3' style={{fontSize:19,fontFamily:'CabinetGrotesk-Medium'}}>
                            lucas.corsino@cmcassociados.com.br
                        </div>
                        <div className='flex items-center gap-5 justify-between'>
                            <p style={{fontSize:19,fontFamily:'CabinetGrotesk-Medium'}}>
                            Lucas Corsino de Paiva é sócio
                            fundador do CMC + Associados,
                            atuando há mais de 10 (dez) anos
                            na área tributária empresarial e
                            sucessória, tendo representado
                            clientes em julgamentos administrativos e judiciais, participado da
                            elaboração de projetos de lei em
                            defesa de setores econômicos e
                            elaborado diversos planejamentos
                            sucessórios nacionais e internacionais para famílias brasileiras. É graduado em Direito pela Universidade de São Paulo (USP), participando do programa "Droits des Affaires" da Universidade Panthéon
                            </p>

                            <p style={{fontSize:19,fontFamily:'CabinetGrotesk-Medium'}}>
                            Sorbonne (Paris-França). Possui
                            especialização em Direito Tributário Internacional pelo Instituto Brasileiro de Direito Tributário (IBDT) e
                            é mestrando em Direito Tributário
                            pela USP, sendo pesquisador-visitante da Wirtschaftsuniversität
                            Wien (Vienna University of Economics and Business). Certified Financial Planner®, pela Associação
                            Brasileira de Planejamento Financeiro (“Planejar”)/Financial Planning Standards Board. Presidente
                            do Conselho Fiscal do Instituto
                            Marco Zero – Desenvolvimento Socioeconômico e Cidadania.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ProfessionalPages;