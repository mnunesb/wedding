import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div id='logo'>
          <a href='/'>Marcello & Camilla</a>
        </div>
        <ul id='menu'>
          <li></li>
          <li><a href='#about'>Nosso Casamento</a></li>
          <li><a href='#cerimony'>Comemoração</a></li>
          <li><a href='#gifts'>Lista de Presentes</a></li>
        </ul>
      </nav>
      <div id='hero'>
        <img src='/src/assets/hero-img.jpeg'></img>
        <h1>Marcello & Camila</h1>
      </div>
      <div id='about'>
        <h2>Bem vindos ao nosso casamento!</h2>
        <img src='/src/assets/placeholder.jpg'></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula quam nec orci aliquet, quis condimentum ante scelerisque. Vestibulum vulputate eros et porta tincidunt. Suspendisse orci dolor, condimentum commodo purus ac, dignissim malesuada ipsum. Aenean fringilla ac orci interdum porttitor. Phasellus sodales, augue id ornare maximus, tellus turpis viverra dui, id placerat magna arcu eget sem. Mauris eget pretium dui. Phasellus venenatis pulvinar tellus eu pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse malesuada odio quis hendrerit sagittis.</p>
        <p>Proin consectetur vehicula ipsum eget faucibus. Nullam malesuada magna sed ex viverra laoreet. Etiam sodales faucibus metus nec ultricies. Aenean posuere, nisi sed ultrices euismod, risus tortor porta felis, in interdum augue nisl in libero. Nulla et posuere sapien. Curabitur vitae tempor arcu. Aenean vulputate sit amet nulla eu venenatis.</p>
        <p>Morbi purus velit, dignissim vitae erat sit amet, fringilla ullamcorper libero. Donec accumsan ante quis magna fermentum gravida. Fusce ac sem felis. Donec faucibus, ante eu efficitur euismod, sem sem faucibus est, ut vestibulum justo enim sit amet metus. Nam aliquet a arcu sit amet convallis. Maecenas vel auctor magna, eget aliquam purus. In tempor nibh a auctor vulputate. Proin eu finibus arcu. In hac habitasse platea dictumst. Maecenas eu mollis tortor. Nullam pharetra, ipsum eget dapibus fermentum, ex odio suscipit massa, nec congue tortor ipsum vitae arcu.</p>
      </div>
      <div id='cerimony'>
        <h2>Jantar de comemoração</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.187894761761!2d-43.223384025042776!3d-22.980117140495217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5ae55305455%3A0x8bc871cac8864180!2sR.%20Fadel%20Fadel%2C%20186%20-%20Leblon%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022430-170!5e0!3m2!1sen!2sbr!4v1719624573539!5m2!1sen!2sbr" width="600" height="450" style={{ border:0}} ></iframe>
        <h3>Dia: 13/07/2024</h3>
        <h3>Endereço: Rua Fadel Fadel, 186, Leblon - Salão de Festas</h3>
        <h3>Horário: a partir das 18h</h3>
      </div>
      <div id='gifts'>
        <div>
          <img src='./src/assets/placeholder.jpg'></img>
          <h3>Comprar um petisco pra tequila</h3>
          <button>Doar esse item</button>
        </div>
        <div>
          <img src='./src/assets/placeholder.jpg'></img>
          <h3>Comprar brinquedo para os gatos</h3>
          <button>Doar esse item</button>
        </div>
        <div>
          <img src='./src/assets/placeholder.jpg'></img>
          <h3>Comprar um vinho do porto para os noivos</h3>
          <button>Doar esse item</button>
        </div>
        <div>
          <img src='./src/assets/placeholder.jpg'></img>
          <h3>Ajudar a montar a cozinha dos noivos</h3>
          <button>Doar esse item</button>
        </div>
        <div>
          <img src='./src/assets/placeholder.jpg'></img>
          <h3>Ajudar os noivos a custear a mudança</h3>
          <button>Doar esse item</button>
        </div>
      </div>
    </>
  )
}

export default App
