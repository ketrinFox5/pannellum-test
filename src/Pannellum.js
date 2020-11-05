import React from 'react';
import { Pannellum } from "pannellum-react";
import myImage from './img/photo.png';
import myImageTwo from './img/photo1.jpg';
import myImageThree from './img/photo4.jpg'

const PannellumReact = () => {
    return(
        <div>
        <h1>
            Pannellum React Component
        </h1>
        <Pannellum
        
        //  type="equirectangular"
            width="100%"
            height="350px"
            image={myImage}
            pitch={0}
            yaw={0}
            // vaov={180}
            // haov={360}
            // hfov={110}
            autoLoad
            onLoad={() => {
                console.log("panorama loaded");
            }}
            
        />
        <Pannellum
             width="100%"
             height="400px"
             image={myImageTwo}
             pitch={0}
             yaw={0}
             vaov={180}
             haov={360}
             hfov={500}
             autoLoad
             onLoad={() => {
                 console.log("panorama loaded");
             }}
        />
        <Pannellum
             width="495px"
             height="400px"
             image={myImageThree}
             pitch={10}
             yaw={100}
            //  vaov={180}
            //  haov={360}
             hfov={100}
             autoLoad
             onLoad={() => {
                 console.log("panorama loaded");
             }}
        />
    </div>
    )
   
}

export default PannellumReact;