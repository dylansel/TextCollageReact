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

let handler = true;
function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
        
        <TextCollage msg="2022" src={[img1,img2,img3,img4,img5,img6,img7,img8,img6]} frequency={20} />
        
        </section>
      </header>
    </div>
  );
}

export default App;
