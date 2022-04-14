
// import './App.css';

import Footer from './footer/Footer.tsx';
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
      <Footer />
    </div>
  );
}

export default App;
