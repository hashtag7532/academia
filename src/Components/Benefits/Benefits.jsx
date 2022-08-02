import React from 'react';
import girlImage from "../../assets/about.webp";
import benefitsData from "../../data/benefits_data";

function Benefits(props) {
  
    return (
    <div className="benefits">
        <div className="left-side">
            <img src={girlImage} alt="Girl sitting with a laptop" />
        </div>
        <div className="right-side">
            <h4>LEARN ANYTHING</h4>
            <h1>Benfits About Online Learning Expertise</h1>
            <div className="cards">
                <div className="card-left"></div>
                <div className="card-right">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefits;