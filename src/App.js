import React from "react";

function App(props){
    return (
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="image" className="my_img" />
                <div className="card_info">
                    <h3 className="title">{props.heading}</h3>
                    <p className="title_category">{props.heading_info}</p>
                    <a href={props.link} target="_blank" className="series_link">
                        <button>Watch</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
export default App;