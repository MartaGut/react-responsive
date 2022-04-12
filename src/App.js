
// import './App.css';
import Header from './header/header.tsx';
import Hero from './modules/Hero.tsx';
import WhatWeDo from './modules/WhatWeDo.tsx';
import WhoWeAre from './modules/WhoWeAre.tsx'
import './styles.scss';


function App() {


  return (
    <div className="App">
      <Header />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
    </div>
  );
}

export default App;
