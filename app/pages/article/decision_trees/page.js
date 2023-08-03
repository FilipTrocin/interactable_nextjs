import React from 'react';
import {testimonials} from "@/components/info_panel/decision_trees.js";

function Testimonial({testimonial}) {
  return (
    <div className='testimonial'>
      <div className='testimonial-icon'>
        <img src={testimonial.icon} alt={testimonial.icon.match(/\/([^\/]+)\.\w+$/)[1]} />
      </div>
      <div className='testimonial-title'>
        <h3>{testimonial.title}</h3>
      </div>
      <div className='testimonial-txt'>
        <p>{testimonial.desc}</p>
      </div>
    </div>
  );
}

export default function DecTrees() {
    const technique = "decision_trees"

    return (
        <div className="App">
            <div id="infoPanel">
                <div className="headerDiv">
                    <h1>Did you know <span>{technique.toUpperCase().replaceAll("_", " ")}</span> is commonly used in:
                    </h1>
                </div>
                <div id="testimonials-box">
                    {testimonials.map((testimonial, i) => <Testimonial key={i} testimonial={testimonial}/>)}
                </div>
            </div>
            <section className='scrolling-section'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <a href="#main" style={{color: "#2272FF"}}>
                    Scroll
                    {Array(3).fill().map((_, i) => <span key={i}/>)}
                </a>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </section>
            <div id="main">
                <iframe width="100%" height="1000" frameBorder="0"
                        src="https://observablehq.com/embed/3b4097c305719cef?cell=*">
                </iframe>
            </div>
        </div>
    )
}

