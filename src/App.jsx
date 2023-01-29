import logo from './logo.svg';
import './App.css';
import TextCollage from './components/TextCollage';
import img1 from "./FotosDiego/img1.jpg"
import img2 from "./FotosDiego/img2.jpg"
import img3 from "./FotosDiego/img3.jpg"
import img4 from "./FotosDiego/img4.jpg"
import img5 from "./FotosDiego/img5.jpg"
import img6 from "./FotosDiego/img6.jpg"
import img7 from "./FotosDiego/img7.jpg"
import img8 from "./FotosDiego/img8.jpg"
import CargarTerxto from './components/CargarTexto';


function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        
        <section>
          <div id="contentText">
            <CargarTerxto/>
          </div>
        
                
        </section>
      </header>
    </div>
  );
}

export default App;
