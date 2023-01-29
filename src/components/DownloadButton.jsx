import React, { useRef } from 'react';
import * as htmlToImage from 'html-to-image';
//si hay partes celestes, es por que faltan imagenes, agregar mas o quitar algunas
export function DownloadButton(props) {
    
 
    console.warn("-------GENERADO PARA GUARDAR--------")
    const div = document.getElementById(props.idDiv);
    const domEl = useRef(div);

    const download = async e=>{
        console.log("Descargando...")
        
        const dataUrl = await htmlToImage.toPng(domEl.current);
 
        // download image
        const link = document.createElement('a');
        link.download = "TextCollage.png";
        link.href = dataUrl;
        link.click();
    }
    return (
        <>
            <button onClick={download}>Descargar</button>
        </>
    )
}