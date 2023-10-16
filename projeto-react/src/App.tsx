
import './App.css'
import { HeadName } from './components/Header/style'
import OnePiece from './assets/img/i521738.jpeg'


import { IconWithText } from './components/Header/icons'

// icons
import { RiComputerLine } from 'react-icons/ri';
import { PiStackLight } from 'react-icons/pi';
import { BsCheckCircle } from 'react-icons/bs';



import { Paragrafo } from './components/Header/Parafrafos'

import { BodyI } from './components/Header/Bory.img/style'
import OnePiece2 from './assets/img/one-piece-scaled.jpg'
import OnePiece3 from './assets/img/one piece 3.jpg'
import OnePiece4 from './assets/img/one piece 4.jpg'
import OnePiece5 from './assets/img/one piece 5.png'



import { FooterIcon } from './components/Header/icons/indexFooter'

//icons Footer

import {BsFacebook} from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import {FiHelpCircle} from 'react-icons/fi';



function App() {

  return (
    <>
      <HeadName src={OnePiece} />
       
      <div id='divHeader'>
       <IconWithText
          icon={< RiComputerLine style={{ fontSize: '3rem' }}/>}
          title="Este site fala sobre Animes "
          text="Aventure-se nessa história." />

        <IconWithText
          icon={<PiStackLight style={{ fontSize: '3rem' }} />}
          title="Este site fala sobre Animes "
          text="Aventure-se nessa história."
        />

        <IconWithText
          icon={<BsCheckCircle style={{ fontSize: '3rem' }} />}
          title="Este site fala sobre Animes "
          text="Aventure-se nessa história."
        />
      </div>

      <div id='divBody'>
        <Paragrafo
          title="O que é One Piece?"
          text="
         One Piece é um popular anime e manga criado por Eiichiro Oda.
         A história segue Monkey D. Luffy, um jovem pirata com a 
         habilidade de esticar seu corpo como resultado de comer a Fruta do Diabo Gomu Gomu.
         Luffy embarca em uma jornada para encontrar o tesouro lendário conhecido como One Piece e
         se tornar o Rei dos Piratas. Ao longo do caminho, ele forma uma tripulação
         diversificada, incluindo Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook e Jinbei."
        />

        <BodyI src={OnePiece2} />

      </div>

      <div id='divBody'>

        <BodyI src={OnePiece3} />

        <Paragrafo
          title="Um bando pirata?"
          text="Os Chapéus de Palha: Luffy forma uma tripulação chamada Os Chapéus de Palha
           composta por membros carismáticos, cada um com suas habilidades e sonhos únicos.
            Juntos, eles enfrentam desafios perigosos e inimigos formidáveis.
           Mundos Diversificados: A história se passa em um mundo vasto e diversificado,
           cheio de ilhas exóticas, terras misteriosas e nações com culturas únicas.
           Cada ilha que os Chapéus de Palha visitam apresenta novos desafios e aventuras."
        />

      </div>
      <div id='divBody'>
        <Paragrafo
          title="O que é One Piece?"
          text="Marinheiros e Piratas: Além dos próprios piratas, a série explora a complexa relação entre os piratas e a Marinha Mundial, a organização encarregada de combater a pirataria.
           O antagonista principal é o Almirante da Marinha, Sakazuki (também conhecido como Akainu)
           Frutas do Diabo: No mundo de One Piece,
           existem as Frutas do Diabo, que concedem poderes especiais a quem as come. Luffy ganha seus poderes de esticamento comendo a Fruta do Diabo Gomu Gomu, e muitos outros personagens têm habilidades únicas através dessas frutas.
           Os Shichibukai: Os Shichibukai, ou Piratas Caza Recompensas, são uma coalizão de piratas renomados que fazem parceria com o Governo Mundial em troca de indulgência e status especial. Esses personagens trazem uma dinâmica única à história."
        />

        <BodyI src={OnePiece4} />
      </div>

      <div >
        <img id='imgFooter' src={OnePiece5} />
      </div>

      <footer>
        <div id='divFooter'>
          <p>About</p>
          <p>Contact</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>

        <div id='divFooter2'>
          <FooterIcon
            icon={<BsFacebook />}
             />
             <FooterIcon
            icon={<BsTwitter />}
             />
             <FooterIcon
            icon={<BsInstagram />}
             />

             <h4> <FooterIcon
            icon={<FiHelpCircle/>}
             /></h4>

        </div>
        <div id='divFooter3'>
          <p>Your Website 2020. All Rights Reserved.</p>
        </div>

      </footer>

    </>
  )
}

export default App
