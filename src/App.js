import styled from "styled-components";
import './index.css'
import paris from './assets/paris.jpg'

function App() {
  return (
    <>
      <SSection>
        <div className="title">
          <h3>Intercâmbio Voluntário</h3>
          <h1>Saiba como morar fora do Brasil gastando <span>MENOS de 5 MIL reais</span> com inglês básico.</h1>
          <h2>Viaje <span>sem precisar pagar</span> por alimentação, hospedagem, aulas de idioma e até <span>receba ajuda de custo.</span></h2>
        </div>

        <div className="forms">
          <div className="form1">
            <h4>Descubra o passo a passo para realizar seu intercâmbio <span>gastando pouco!</span></h4>
          </div>

          <div className="form2">
            <h5>Baixe <span id='agora'>Agora</span> Seu E-Book</h5>
            <h6>100% gratuito!</h6>
            <input placeholder="Seu Nome"/>
            <input placeholder="Seu Melhor E-mail" />
            <button>Quero Receber Meu E-book</button>
          </div>
        </div>

      </SSection>

      <SSection2>
        <div>
          <img src={paris} alt=''/>
        </div>

        <div className="infos">
          <h1>Intercâmbio Voluntário</h1>
          <p>O <b>Intercâmbio Voluntário</b> é a oportunidade para você realizar seu sonho de aprender um novo idioma, viajar muito, adquirir novas experiencias e fazer diferença na vida de alguém!</p>
          <p>É uma modalidade de intercambio onde você trocará algumas horas da sua ajuda por semana por uma experiência única em outro pais</p>
          <p>Em troca <b>receberá casa, alimentação</b> e terá contato com uma cultura estrangeira. Além disso, muitas vezes voce poderá receber <b>ajuda de custo,</b> disponibilidade de bicicletas, <b>aulas de idiomas,</b> cursos de logo, pranchas de surf, etc.</p>
          <button>GANHE SEU E-BOOK</button>
        </div>

      </SSection2>

      <SSection3>
        <p>Copyright Intercâmbio Voluntário 2022</p>
        <p>Todos os direitos reservados</p>
        <p className="links">Política de Privacidade - Termos de Uso e Serviços</p>
      </SSection3>
    </>
  );
}

export default App;


//-------------------------STYLES-------------------------------//

const SSection = styled.section`
display: flex;
justify-content: center;
padding: 20px;
font-family: 'Ubuntu', sans-serif;
height: 570px;


& .title {
  color: white;
}

& span {
  color: #A889BE;
  font-weight: 900;
}

& h3 {
  font-weight: 100;
  margin-top: 85px;
}

& h2 {
  font-weight: 100;
  width: 490px;
  margin-top: -25px;
}

& h1 {
  font-size: 50px;
  width: 600px;
  margin-top: -10px;
}

& h6 {
  text-align: center;
  color: white;
  font-size: 30px;
  font-weight: 100;
  margin-top: -70px;
  margin-bottom: 15px;
}

& h5 {
  text-align: center;
  color: white;
  font-size: 40px;
  margin-top: 8px;
}

& h4 {
  color: white;
  font-size: 26px;
  width: 500px;
  margin-left: 20px;
  font-weight: 100;
  margin-top: 10px;
}

& input {
  height: 30px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: none;
  width: 443px;
  margin-left: 20px;
  padding-left: 10px;
}

& button {
  width: 455px;
  margin-left: 20px;
  border: 1px solid red;
  background-color: red;
  padding: 10px;
  color: white;
  cursor: pointer;
}

& #agora {
  color: #52260E;
}

& .forms {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

& .form1 {
  background-color: #4A226A;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 100px;
  opacity: 0.9;
}

& .form2 {
  display: flex;
  flex-direction: column;
  background-color: #C95D22;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px; 
  height: 250px;
  opacity: 0.9;
}
`

const SSection2 = styled.section`
background-color: white;
display: flex;
justify-content: center;
height: 700px;
font-family: 'Ubuntu', sans-serif;


& img {
  width: 700px;
  height: 650px;
  margin-left: -80px;
}

& .infos {
  margin-left: 40px;
  color: #7B7777;
  

  & h1 {
    color: #4A226A;
    font-size: 40px;
  }

  & p {
    font-size: 20px;
    width: 550px;
    margin-top: 20px;
    
  }

  & button {
  width: 250px;
  margin-left: -5px;
  border: 1px solid #177B11;
  background-color: #177B11;
  border-radius: 30px;
  padding: 10px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
  margin-top: 60px;
}

}`

const SSection3 = styled.section`
background-color: #313538;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
line-height:1px;
height: 150px;
color: white;
font-family: 'Ubuntu', sans-serif;

& .links {
  color: #4C8AD1;
}
`
