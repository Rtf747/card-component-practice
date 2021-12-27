import mainImage from './assets/images/image-equilibrium.jpg';
import iconEthereum from './assets/images/icon-ethereum.svg';
import iconClock from './assets/images/icon-clock.svg';
import avatar from './assets/images/image-avatar.png';

import view from './assets/images/icon-view.svg';

function App() {
 return (
  <>
   <div className='main-container' tabindex='-1'>
    <div className='content'>
     <div className='image-container'>
      <img className='main-image' src={mainImage} alt='' />
      <div className='overlay'>
       <img className='view' src={view} alt='' />
      </div>
     </div>

     <p className='title'>Equilibrium #3429</p>
     <p>Our Equilibrium collection promotes balance and calm.</p>
     <div className='top-details'>
      <div className='top-left'>
       <img src={iconEthereum} alt='' />
       <p className='eth-price'>0.041 ETH</p>
      </div>
      <div className='top-right'>
       <img src={iconClock} alt='' />
       <p className='time-left'>3 days left</p>
      </div>
     </div>
     <hr />
     <div className='botton-details'>
      <img className='avatar' src={avatar} alt='' />
      <p>
       Creation of <span className='author'>Jules Wyvern</span>
      </p>
     </div>
    </div>
   </div>
  </>
 );
}

export default App;
