import Image from 'next/image';

import styles from './page.module.css';

import logo from '@/public/images/interactable-logo.svg';
import dsImage from '@/public/images/ds_image.png';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <Image src={logo} className="logo" alt="logo" />
        <div className={"Main"}>

          <div className="first-group">
              <div className="text-logo-centered">
                  <div className="text-group-1">
                      <div className="header">
                          <h2>Unlock your potential - Embrace Data science, Avoid ignorance.</h2>
                      </div>
                      <div className="sub-header">
                          <p>Did you know - according to the US Bureau of Labor Statistics, employment of Data Scientists is
                              projected to grow 31% from 2019 to 2029, <span>much faster than the average for all occupations!</span></p>
                      </div>
                  </div>
              </div>
              <div className="image-container-1">
                <Image src={dsImage} className={styles.dsimg} alt={"ds_image"}/>
              </div>
          </div>
          <div className="second-group">
              <div className="header">
                  <h2>What makes <span className="logo-font">INTERACTABLE</span> different from another Data Science teaching tools?</h2>
              </div>
              <div className="testimonials">
                  <div className="testimonial" data-aos="fade-up" data-aos-duration="600" data-aos-offset="200">
                      <div className="testimonial-icon">
                          <Image src='/images/icons/pad-icon.png' width={170} height={170} alt={"pad-icon"}/>
                      </div>
                      <div className="testimonial-title">
                          <h3>Data Science shown in the form of mini-games </h3>
                      </div>
                      <div className="testimonial-txt">
                          <p>Interactable aims to teach Data Science through active learning, which has been shown to
                              improve students' grades by up to half a letter grade in STEM majors.</p>
                      </div>
                      <div className="testimonial-small-txt">
                          <li>Freeman, S., Eddy, L., S., McDonough, M., Smith, M., K., Okoroafor, N., Jordt, H., Wenderoth, M., P. (2014) Active learning increases student performance in science, engineering, and mathematics</li>
                      </div>
                  </div>
                  <div className="testimonial" data-aos="fade-up" data-aos-delay="150" data-aos-duration="600" data-aos-offset="200">
                      <div className="testimonial-icon">
                          <Image src='/images/icons/knowledge-icon.png' width={170} height={170} alt={"knowledge-icon"}/>
                      </div>
                      <div className="testimonial-title">
                          <h3>Focus on understanding rather than mastering</h3>
                      </div>
                      <div className="testimonial-txt">
                          <p>Data Science is often taught with too heavy focus on statistical properties than their way
                              of working. Interactable aims to change that state!</p>
                      </div>
                      <div className="testimonial-small-txt">
                          <li>Hicks, C., S., Irizarry, A., R. (2018) A Guide to Teaching Data Science</li>
                      </div>
                  </div>
                  <div className="testimonial" data-aos="fade-up" data-aos-delay="250" data-aos-duration="600" data-aos-offset="200">
                      <div className="testimonial-icon">
                          <Image src='/images/icons/factory-icon.png' width={170} height={170} alt={"factory-icon"}/>
                      </div>
                      <div className="testimonial-title">
                          <h3>Real-life examples for association</h3>
                      </div>
                      <div className="testimonial-txt">
                          <p>We believe by observing the application of a technique in a specific real-life example,
                              can significantly facilitate learners' understanding of how the technique works and what
                              can be its potential applications.</p>
                      </div>
                      <div className="testimonial-small-txt"></div>
                  </div>
              </div>
          </div>
          {/*<div className="third-group">*/}
          {/*    <div className="header">*/}
          {/*        <h2>Give it a try and explore our notebooks below!</h2>*/}
          {/*    </div>*/}
          {/*    <div className="notebooks">*/}
          {/*        <div data-aos="flip-up" data-aos-duration="600" data-aos-offset="200">*/}
          {/*            <Card title={"K-Nearest Neighbours"} link="/article/k_nearest_neighbours" img='/images/knn-img.png'/>*/}
          {/*        </div>*/}
          {/*        <div data-aos="flip-up" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200">*/}
          {/*            <Card title={"Decision Trees"} link="/article/decision_trees" img={decisionTree}/>*/}
          {/*        </div>*/}
          {/*        <div data-aos="flip-up" data-aos-delay="200" data-aos-duration="600" data-aos-offset="200">*/}
          {/*          <Card hoverCard="inactive" title={"Random Forrest"} img={stayTuned}/>*/}
          {/*        </div>*/}
          {/*        <div data-aos="flip-up" data-aos-delay="300" data-aos-duration="600" data-aos-offset="200">*/}
          {/*            <Card hoverCard="inactive" title={"Bayes Theorem"} img={stayTuned}/>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </main>
  )
}
