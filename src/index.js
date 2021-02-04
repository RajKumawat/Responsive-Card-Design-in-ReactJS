import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Sdata from "./Sdata";

ReactDOM.render(
    <>
    <h1 className="headingh1">Top 9 Netflix Series of All time</h1>
    
    <App
        imgsrc={Sdata[0].imgsrc}
        heading={Sdata[0].heading}
        heading_info={Sdata[0].heading_info}
        link={Sdata[0].link}
    />

    <App
        imgsrc={Sdata[1].imgsrc}
        heading={Sdata[1].heading}
        heading_info={Sdata[1].heading_info}
        link={Sdata[1].link}
    />

    <App
        imgsrc={Sdata[2].imgsrc}
        heading={Sdata[2].heading}
        heading_info={Sdata[2].heading_info}
        link={Sdata[2].link}
    />

    <App
        imgsrc={Sdata[3].imgsrc}
        heading={Sdata[3].heading}
        heading_info={Sdata[3].heading_info}
        link={Sdata[3].link}
    />

    <App
        imgsrc={Sdata[4].imgsrc}
        heading={Sdata[4].heading}
        heading_info={Sdata[4].heading_info}
        link={Sdata[4].link}
    />

    <App
        imgsrc={Sdata[5].imgsrc}
        heading={Sdata[5].heading}
        heading_info={Sdata[5].heading_info}
        link={Sdata[5].link}
    />

    <App
        imgsrc={Sdata[6].imgsrc}
        heading={Sdata[6].heading}
        heading_info={Sdata[6].heading_info}
        link={Sdata[6].link}
    />

    <App
        imgsrc={Sdata[7].imgsrc}
        heading={Sdata[7].heading}
        heading_info={Sdata[7].heading_info}
        link={Sdata[7].link}
    />

    <App
        imgsrc={Sdata[8].imgsrc}
        heading={Sdata[8].heading}
        heading_info={Sdata[8].heading_info}
        link={Sdata[8].link}
    />
 
    </>,
    document.getElementById("root")
);
