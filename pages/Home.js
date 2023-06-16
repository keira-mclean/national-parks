import image from "../images/Garfield-StoryImage.jpg";
import React from 'react';

export default function Home() {
    return (<>
    <div>
    <h1>National Adventures</h1>
    </div>
    <div>
        <h1>title statement</h1>
        <h2>another statement</h2>
        <img src={image} alt="Hale Mountain pic" />
    </div>
    <div>
        <h3>and yet another</h3>
    </div>
    </>
    )
    
}

