import React from 'react'

function About() {
  return (
    <div>      {/* <!-- About --> */}
          <section id="about" className="section about">
              <div className="container">
                  <div className="row mb-50 pt-30">
                      <div className="col-md-12">
                          <div className="section-title">
                <h2 className="text-dark mb-0">About me</h2>
                <div>
                  <span>test</span>
                  <span style={{padding:'10px', margin: '10px 20px 10px 20px' /* top, right, bottom, left */}}>test2</span>
                  <span>test2</span>
                  <span>test2</span>
                  <span style={{margin: '10px 20px 10px 20px'}}>test2</span>
                  <span>test2</span>
                </div>
                          <p className="text-muted mb-0">Main informations about me and what I love to do.</p>
                          </div>
                      </div>
                  </div>
                  {/* <!--Hero & info--> */}
                  <div className="row mb-50">
                      <div className="col-lg-5">
                          <div className="hero">
                              <img src="./images/hero.jpg" alt=""/>
                          </div>
                      </div>
                 
                       <div className="col-lg-7 d-flex align-items-center">
                          <div className="details">
                              <h5>Hello ,I'm Devesh Srivastava</h5>
                              <p className="text-dark mb-25">
                                  Full stack developer with overall 13 years of experience in designing and development front end, back end application using React JS, Redux, Angular, Node.js, Jest with Enzyme, GraphQL, RESTfull API, Docker, MongoDB, .Net and CI/CD with Azure cloud. Performed technical lead role in UK for 6 years.
                              </p>
                         
                              {/* <!--about info--> */}
                              <ul className="info mb-5 list-inline">
                                  <li className="text-dark">
                                      <span className="font-w-600">Name :</span> Devesh Srivastava
                                  </li>
                                  <li className="text-dark">
                                      <span className="font-w-600">Phone :</span> +91 9999305585
                                  </li>
                      
                                  <li className="text-dark">
                                      <span className="font-w-600">Email :</span>
                                      <a href="mailto:devesh.kr.sri@gmail.com" className="text-dark">devesh.kr.sri@gmail.com</a>
                                  </li>
                                  <li className="text-dark">
                                      <span className="font-w-600">Nationality :</span> Indian
                                  </li>
                                  <li className="text-dark">
                                      <span className="font-w-600">Address :</span> Gurgaon, India
                                  </li>
                             
                                  <li className="text-dark">
                                      <span className="font-w-600">Work Status :</span> FULL STACK DEVELOPER
                                  </li>
             
                              </ul>
  
                              <a href="./images/resume.pdf" className="btn-custom" download="resume-devesh">
                                  <span><i className="fas fa-cloud-download-alt"></i></span>
                                  <span>Download My CV</span>
                              </a>
                          </div>
                      </div>
                  </div>
  
                  {/* <!--Features--> */}
                  <div className="row features mb-20">
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10"><i className="fas fa-user text-dark"></i></div>
                              <p className="text-dark mb-0">20 Projects Completed</p>
                          </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10">
                                  <i className="fas fa-coffee text-dark"></i>
                              </div>
                              <p className="text-dark mb-0">1000 Cup of coffee</p>
                          </div>
                      </div>
  
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10">
                                  <i className="fas fa-smile text-dark"></i>
                              </div>
                              <p className="text-dark mb-0">10+ Satisfied Clients</p>
                          </div>
                      </div>
  
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10">
                                  <i className="fas fa-certificate text-dark"></i>
                              </div>
                              <p className="text-dark mb-0">13 Years job experience</p>
                          </div>
                      </div>
  
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10">
                                  <i className="fas fa-medal text-dark"></i>
                              </div>
                              <p className="text-dark mb-0">+5 awards won</p>
                          </div>
                      </div>
  
                      <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="item">
                              <div className="icon mb-10">
                                  <i className="fas fa-code text-dark"></i>
                              </div>
                              <p className="text-dark mb-0">5000+ lines of code</p>
                          </div>
                      </div>
                  </div>
                  {/* <!-- Timeline--> */}
                  <div className="row ">
                      <div className="col-lg-6">
                          {/* <!--Timeline-->  */}
                          <h5 className="text-dark mb-30">My Expericence</h5>
                          <div className="timeline">
                       
                              {/* <!--item 1--> */}
                              <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Team Lead
                                          <span className="text-muted"> - </span> ACCENTURE PRIVATE LIMITED </h6>
                                      <small className="text-muted">2009 - present</small>
                                      <p className="text-dark pt-15 mb-0">Working as Solution Architect on FullStack Development with AI & Machine Learning. With Full Stack developer experience, building Architecture and scaling using micro-service.</p>
                                  </div>
                              </div>
                              {/* <!--item 2--> */}
                              <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Senior Software Developer
                                          <span className="text-muted"> - </span> PATNI COMPUTER SYSTEM</h6>
                                      <small className="text-muted">2008 - 2009</small>
                                      <p className="text-dark pt-15 mb-0">Working as Full Stack developer experience with AI, Machine Learning, NodeJs, Python Angular,React Aws Cloud, Docker...</p>
                                  </div>
                              </div>
                              {/* <!--item 3--> */}
                              <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Software Developer
                                          <span className="text-muted"> - </span> FCF Software Solution LTD</h6>
                                      <small className="text-muted">2006 - 2017</small>
                                      <p className="text-dark pt-15 mb-0">Working as Full Stack developer experience with AI, Machine Learning, NodeJs, Python Angular,React Aws Cloud, Docker....</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <h5 className="text-dark mb-30">My Education</h5>
                          <div className="timeline"> 
                              {/* <!--item 1--> */}
                              <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Master of Computer Application
                                          <span className="text-muted"> - </span> Ignou University</h6>
                                      <small className="text-muted">2002 - 2005</small>
                                      <p className="text-dark pt-15 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae
                                          sint dolor illo officia dignissimos.
                                      </p>
                                  </div>
                              </div>
                              {/* <!--item 2--> */}
                              <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Bachlor Degree
                                          <span className="text-muted"> - </span> Chennai University</h6>
                                      <small className="text-muted ">1999 - 2002</small>
                                      <p className="text-dark pt-15 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae
                                      sint dolor illo officia dignissimos.</p>
                                  </div>
                              </div>
              
                              {/* <!--item 3--> */}
                              {/* <!-- <div className="item">
                                  <div className="content">
                                      <h6 className="text-dark mb-0">Bachlor Degree
                                          <span className="text-muted"> - </span> Paris University</h6>
                                      <small className="text-muted">2015 - 2016 </small>
                                      <p className="text-dark pt-15 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae
                                      sint dolor illo officia dignissimos.</p>
                                  </div>
                              </div> --> */}
                          </div>
                      </div>
                  </div>
              </div>
          </section></div>
  )
}

export default About