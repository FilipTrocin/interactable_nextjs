import React from 'react';
import {testimonials} from "@/components/info_panel/k_nearest_neighbours";

// CSS
import styles from "@/app/pages/article/article.module.css";

// TODO: transfer common things to template and abstract the code

function Testimonial({testimonial}) {
  return (
    <div className={styles.testimonial}>
      <div>
        <img src={testimonial.icon} alt={testimonial.icon.match(/\/([^\/]+)\.\w+$/)[1]} />
      </div>
      <div className={styles.testimonialTitle}>
        <h3>{testimonial.title}</h3>
      </div>
      <div>
        <p>{testimonial.desc}</p>
      </div>
    </div>
  );
}

export default function Knn() {
    const technique = "k_nearest_neighbours"

    return (
        <div className={styles.app}>
            <a href="/">
                <div className={styles.banner}></div>
            </a>
            <div className={styles.infoPanel}>
               <div className={styles.headerDiv}>
                  <h1>Did you know <span>{technique.toUpperCase().replaceAll("_", " ")}</span> is commonly used in:</h1>
               </div>
               <div className={styles.testimonialsBox}>
                  {testimonials.map((testimonial, i) => <Testimonial key={i} testimonial={testimonial} />)}
               </div>
            </div>
            <section className={styles.scrollingSection}>
            <a href="#mainNotebook" style={{color: "#2272FF"}}>
              Scroll to understand the way it works!
              {Array(3).fill().map((_, i) => <span key={i} />)}
            </a>
            </section>
            <div className={styles.notebook} id="mainNotebook">
                <iframe width="100%" height="1000" frameBorder="0"
                    src="https://observablehq.com/embed/c2c4aa78b69f979f@427?cell=*">
                </iframe>
            </div>
            <div>
                <div>
                  <p><a href="/" className={styles.footerTitle}>Interactable</a></p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                  <p>Filip Trociński, 2023 © All rights reserved</p>
                </div>
            </div>
        </div>
    );
}

