import logo from "../../assets/logo.png"
import fotogradiente from "../../assets/fundo_mainpage.png"
import { ContStyle, GradStyle, HeaderStyle, ImgGradStyle, ImgStyle, ReestStyle, SectionStyle, Texto1Style, Texto2Style, TriStyle } from "./styled"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FooterStyle, FotoFooterStyle } from "./styled"
import footerlogo from "../../assets/logo_footer.png"

function Header() {
    return (
        <>
            <HeaderStyle>
                <ContStyle>
                    <ImgStyle src={logo} />
                    <h1 style={{ marginLeft: '5px' }}>talk about it</h1>
                </ContStyle>

                <nav>
                    <a><Button colorScheme='#7CD77A'>Login</Button></a>
                    <a><Button colorScheme='#7CD77A'>Cadastro</Button></a>
                </nav>
            </HeaderStyle>

            <GradStyle
                style={{
                    backgroundImage: "linear-gradient(#7CD77A,#F9F4F4)",
                    color: "#F9F4F4",
                    alignItems: "center",    // Centraliza verticalmente
                    justifyContent: "center",    // Centraliza horizontalmente
                    height: "80vh",
                }}
            >
                <img src={fotogradiente} />
            </GradStyle>

            <SectionStyle>
                <TriStyle>
                    <p style={{ fontWeight: 'bold', backgroundColor: '#4CA97C' }}>reestruture.</p>
                    <p style={{ fontWeight: 'bold' }}>⠀⠀⠀reconheça.</p>
                    <p style={{ fontWeight: 'bold' }}>⠀⠀⠀⠀⠀vivencie.</p>
                </TriStyle>

                <Texto1Style>
                A musicoterapia desempenha um papel significativo no tratamento de pacientes com Alzheimer. Através da harmonia das melodias, ela oferece uma forma única de comunicação, muitas vezes resgatando memórias esquecidas. As canções familiares têm o poder de evocar emoções e lembranças, proporcionando conforto aos pacientes. Além disso, a musicoterapia pode reduzir a ansiedade e a agitação, melhorando a qualidade de vida dos indivíduos afetados pela doença. As sessões envolvem instrumentos e ritmos adaptados, estimulando diferentes áreas do cérebro e incentivando a interação social. Em última análise, a musicoterapia oferece uma conexão profunda com o passado, iluminando momentos preciosos para aqueles que enfrentam os desafios do Alzheimer.
                </Texto1Style>
            </SectionStyle>

            <Texto2Style>
            Em conclusão, a musicoterapia emerge como uma abordagem notável e compassiva no tratamento de pacientes com Alzheimer. Através das notas melodiosas, ela transcende as barreiras da memória, reacendendo lembranças e proporcionando conforto emocional. As harmonias cuidadosamente selecionadas não só aliviam a ansiedade e a agitação, mas também promovem interações significativas e momentos compartilhados. Nesse elo entre a música e a mente, a musicoterapia não apenas traz ressonância ao presente, mas também oferece um vínculo duradouro com as experiências passadas. Com suas nuances terapêuticas, ela continua a oferecer esperança, expressão e serenidade aos corações afetados pelo Alzheimer.
            </Texto2Style>

            <FooterStyle style={{ backgroundColor: '#7CD77A' }}>
            <FotoFooterStyle src={footerlogo}/>
        </FooterStyle>
        </>
    )
}

export default Header