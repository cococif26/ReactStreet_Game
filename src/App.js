import React from 'react';
import './App.css';
import Intro from './component/intro';
import './style/landingPage.css';
import NavigationBar from './component/navigationbar';
import TrandingGame from './component/trendinggame';
import BestGame from './component/bestgame';

function App() {
  return (
   <div>
      <div className='myBG'>
        <NavigationBar/>
        <Intro/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginTop: '105px' }}><path fill="#d63384" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,117.3C480,107,600,117,720,149.3C840,181,960,235,1080,250.7C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

      </div>
      
      <div className='trending'>
        <TrandingGame/>
      </div>

      <div className='best'>
        <BestGame/>
      </div>
    </div>
  );
}

export default App;
