import React,{Component} from "react";
const { createCanvas, loadImage } = require('canvas');
//si hay partes celestes, es por que faltan imagenes, agregar mas o quitar algunas
export function CreateCollageCanva(imgs,canvasWidth=400,canvasHeight = 400) {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "#00ffee";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    let columns = Math.round(Math.round(Math.sqrt(imgs.length)))
    let rows = Math.round(Math.round(Math.sqrt(imgs.length)))
    let lWidth = canvasWidth/columns;
    let lHeigth = canvasHeight/rows;
    let contR = 0;
    let contC = 0;
    imgs.forEach((el) => {
        if(contC>=columns){contC = 0;contR++;}
        /*
        loadImage(el).then((image) => {
            ctx.drawImage(image, lWidth*contC, lHeigth*contC, lWidth, lHeigth)
        });
        */
        let img = new Image();
        img.src = el;
        img.onload = function() {
            ctx.drawImage(img, lWidth*contC, lHeigth*contR, lWidth, lHeigth);
        }
        ctx.drawImage(img, lWidth*contC, lHeigth*contR, lWidth, lHeigth);
        contC++;
    })
    canvas.crossOrigin="anonymous"
  return canvas;
}


export default function TextCollage(props) {
    let msg = props.msg || "MENSAJE",
    src = props.src,
    font = props.fontFamily || 'sans-serif',
    size = props.size || "10rem",
    textStyle = props.textStyle,
    frequency = props.frequency || 30,
    width = size* msg.length,
    height = size* msg.length,
    imagen = CreateCollageCanva(src,frequency*msg.length,frequency*msg.length);
    //styles

    const styleContendor = {
        background: "blue",
        align: "center",
        justifyContent: "center",
        margin: "50px"
    }

    const styleText = {
        textAlign: "center",
        justifyContent: "center",
        width:width,
        height:height,
        fontFamily:font,
        fontSize: size,
        fontWeight: "bold",
        backgroundImage:`url(${imagen.toDataURL()})` ,
        backgroundClip:"text",
        WebkitBackgroundClip: "text",
        color:"transparent",
        boxSizing: "border-box",
        flexWrap: "wrap",
        ...textStyle
    }
    return (
        <>
            <div style={styleText}>{msg}</div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}