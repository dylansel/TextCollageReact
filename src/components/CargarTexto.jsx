import React,{Component} from "react";
import TextCollage from "./TextCollage";
import { DownloadButton } from './DownloadButton';


export default class CargarTerxto extends Component {
   
    constructor() {
        super();
        this.state = {
            title: null,
            imgs: [null],
            frequency:20,
            size:null,
            textGenere:null
            
          };

        this.handlerChange = e=>{
            this.setState({
                title: e.target.value,
              });
        }
        this.handleFileEvent =  (e) => {
           let images = [...e.target.files]
           images.forEach((img,index) =>{
                images[index] = URL.createObjectURL(img)
           })
           this.setState({
                imgs: images,
            });
        }
        this.handlerChangeFrequency = e =>{
            this.setState({
                frequency: e.target.value,
              });
        }
        this.handlerChangeSize = e =>{
            this.setState({
                size: e.target.value,
              });
        }
        this.handleTextGenere = e =>{
            this.setState({
                textGenere: true,
              });
        }
        this.stylesContConfig = {
            backgroundColor: "#210052",
            borderRadius:"15px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
        this.styleTextContain= {
        backgroundColor: "#FF4",
        margin:"15px",
        color: "black"
        }
    }
   
    render() {
        return (<>
        <h2>Generador de Textos Collage</h2>
        
        <div style={this.stylesContConfig}>
            <label htmlFor="">Imagenes:</label>
            <input type="file" accept="image/*" id="fileSelect" multiple onChange={this.handleFileEvent}/>
        
            {(this.state.imgs[0])?<>
                <label htmlFor="">Texto:</label>
                <input type="text" onChange={this.handlerChange} placeholder="Texto"/>
            </>:""}

            {(this.state.title != null)?<>
                <label htmlFor="">Frequencia:</label>
                <input type="number" onChange={this.handlerChangeFrequency} placeholder="20"/>
                <br />
            </>:""}

            {(this.state.title != null)?<>
                <label htmlFor="">Color Fondo:</label>
                <input type="color" onChange={e=>{this.styleTextContain={backgroundColor: e.target.value}}} />
                <br />
                <button onClick={this.handleTextGenere}>GENERAR</button>
                {(this.state.textGenere)?<DownloadButton idDiv="textCollageF"/>:""} 
            </>:""}

        </div>
        
        
        <div id="textCollageF" style={this.styleTextContain}>

        {this.state.textGenere?
        <TextCollage msg={this.state.title} src={this.state.imgs} frequency={this.state.frequency} size={250}/>:"NO"}
        </div>
        
        </>
        )
    }
}



