import moon from './assets/moon.png';
import land from './assets/land.png';
import cat from './assets/cat.gif';
import { useRef } from 'react';
import './App.css'

import { Parallax,ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();  

  return (
   <div>
    <Parallax pages={4} ref={ref}>
    <ParallaxLayer
    offset={0}
    // the factor property defines how many pages will efected by this Layer
    factor={2}
    speed={1}
    style={{
      backgroundImage:`url(${moon})`,
      backgroundSize:`cover`,
    }}
    />
    
    <ParallaxLayer 
    offset={2} 
    speed={1}
    factor={4}
    style={{
      backgroundImage:`url(${land})`,
      backgroundSize:`cover`,
    }}
    >
    </ParallaxLayer>

    <ParallaxLayer 
    offset={0.2}
    speed={0.05}
    onClick={()=>ref.connect.scrollTo(3)}
    >
      <h2>Welcome to my website</h2>
    </ParallaxLayer>

    <ParallaxLayer
    offset={3.2}
    speed={2}>
      <h2>web developement is fun</h2>
    </ParallaxLayer>
    <ParallaxLayer
    sticky={{ start: 0.9, end: 2.9}}
    >
      <img src={cat} className='center'/>
    </ParallaxLayer>

    </Parallax>
   </div>
  )
}

export default App
