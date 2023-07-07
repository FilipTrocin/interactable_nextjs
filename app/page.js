// "use client";

import Image from 'next/image';
// import AOS from "aos";
// import {useEffect} from "react";

// CSS
import styles from '@/app/page.module.css';

// Logos
import logo from '@/public/images/interactable-logo.svg';
import dsImage from '@/public/images/ds_image.png';

// Icons
import padIcon from '@/public/images/icons/pad-icon.png';
import knowledgeIcon from '@/public/images/icons/knowledge-icon.png';
import factoryIcon from '@/public/images/icons/factory-icon.png';

import decisionTree from '@/public/images/decisiontree-img.png';
import knnImg from '@/public/images/knn-img.png';
import stayTuned from '@/public/images/stay-tuned.png';

// Components
import Card from "@/components/Card";


export default function Home() {
    // TODO: Fix AOS
    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, []);

  return (
    <main className={styles.main}>
      <div className={styles.app}>
        <Image className={styles.logo} src={logo} alt={"logo"} />
        <div className={styles.page}>
          <div className={styles.factsPanel}>
              <div className={styles.factsPanelText}>
                  <div className={styles.factsPanelTextGroup}>
                      <div className={styles.header}>
                          <h2>Unlock your potential - Embrace Data science, Avoid ignorance.</h2>
                      </div>
                      <div className={styles.subHeader}>
                          <p>Did you know - according to the US Bureau of Labor Statistics, employment of Data Scientists is
                              projected to grow 31% from 2019 to 2029, <span>much faster than the average for all occupations!</span></p>
                      </div>
                  </div>
              </div>
              <div className={styles.dsimgContainer}>
                <Image src={dsImage} className={`${styles.dsimg} ${styles.rotating}`} alt={"ds_image"}/>
              </div>
          </div>
          <div className={styles.methodologiesPanel}>
              <div className={styles.header}>
                  <h2>What makes <span className="logoFont">INTERACTABLE</span> different from another Data Science teaching tools?</h2>
              </div>
              <div className={styles.testimonials}>
                  <div className={styles.testimonial} data-aos="fade-up" data-aos-duration="600" data-aos-offset="200">
                      <div>
                          <Image src={padIcon} alt={"pad-icon"}/>
                      </div>
                      <div className={styles.testimonialTitle}>
                          <h3>Data Science shown in the form of mini-games </h3>
                      </div>
                      <div className={styles.testimonialTxt}>
                          <p>Interactable aims to teach Data Science through active learning, which has been shown to
                              improve students' grades by up to half a letter grade in STEM majors.</p>
                      </div>
                      <div className={styles.testimonialSmallTxt}>
                          <li>Freeman, S., Eddy, L., S., McDonough, M., Smith, M., K., Okoroafor, N., Jordt, H., Wenderoth, M., P. (2014) Active learning increases student performance in science, engineering, and mathematics</li>
                      </div>
                  </div>
                  <div className={styles.testimonial} data-aos="fade-up" data-aos-delay="150" data-aos-duration="600" data-aos-offset="200">
                      <div>
                          <Image src={knowledgeIcon} alt={"knowledge-icon"}/>
                      </div>
                      <div className={styles.testimonialTitle}>
                          <h3>Focus on understanding rather than mastering</h3>
                      </div>
                      <div className={styles.testimonialTxt}>
                          <p>Data Science is often taught with too heavy focus on statistical properties than their way
                              of working. Interactable aims to change that state!</p>
                      </div>
                      <div className={styles.testimonialSmallTxt}>
                          <li>Hicks, C., S., Irizarry, A., R. (2018) A Guide to Teaching Data Science</li>
                      </div>
                  </div>
                  <div className={styles.testimonial} data-aos="fade-up" data-aos-delay="250" data-aos-duration="600" data-aos-offset="200">
                      <div>
                          <Image src={factoryIcon} alt={"factory-icon"}/>
                      </div>
                      <div className={styles.testimonialTitle}>
                          <h3>Real-life examples for association</h3>
                      </div>
                      <div className={styles.testimonialTxt}>
                          <p>We believe by observing the application of a technique in a specific real-life example,
                              can significantly facilitate learners' understanding of how the technique works and what
                              can be its potential applications.</p>
                      </div>
                      <div className={styles.testimonialSmallTxt}></div>
                  </div>
              </div>
          </div>
          <div className={styles.articlesPanel}>
              <div className={styles.header}>
                  <h2>Give it a try and explore our notebooks below!</h2>
              </div>
              <div className={styles.notebooks}>
                  <div data-aos="flip-up" data-aos-duration="600" data-aos-offset="200">
                      <Card title={"K-Nearest Neighbours"} link="/article/k_nearest_neighbours" img={knnImg}/>
                  </div>
                  <div data-aos="flip-up" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200">
                      <Card title={"Decision Trees"} link="/article/decision_trees" img={decisionTree}/>
                  </div>
                  <div data-aos="flip-up" data-aos-delay="200" data-aos-duration="600" data-aos-offset="200">
                      <Card hoverCard={"inactive"} title={"Random Forrest"} img={stayTuned}/>
                  </div>
                  <div data-aos="flip-up" data-aos-delay="300" data-aos-duration="600" data-aos-offset="200">
                      <Card hoverCard={"inactive"} title={"Bayes Theorem"} img={stayTuned}/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  )
}
