import React from 'react';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Work from './Work';
import Blog from './Blog';
import Contact from './Contact';

function App() {
 

  return (
    <div>
       {/* <!--menu toggle--> */}
      <div className="menu-toggle" id="menuToggle">
          <span></span>
      </div>

      
      {/* <!--header-left--> */}
      <div className="header-left" id="scrollspy">
          {/* <!--logo--> */}
          <div className="logo bg-base-color">
              <a href="https://mariame.netlify.app/index.html" className="text-white mb-0">D</a>
          </div>
  
          {/* <!--menu/> */}
          <div className="main-menu" id="js-menu">
             <div className="cross bg-base-color">
                  <span><i className="fas fa-times text-white"></i></span>
             </div>
              <nav className="menu">
                  <ul className="menu-nav">
                      <li className="nav-item">
                          <a className="nav-link" href="#home">Home</a>
                      </li>
          
                      <li className="nav-item">
                          <a className="nav-link" href="#about">About </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#skills">Skills</a>
                      </li>
                      {/* <!-- <li className="nav-item">
                          <a className="nav-link" href="#services">Services</a>
                      </li> --> */}
          
                      <li className="nav-item">
                          <a className="nav-link active" href="#works">Works</a>
                      </li>
          
                      <li className="nav-item">
                          <a className="nav-link" href="#blog">Blog</a>
                      </li>
          
                      <li className="nav-item">
                          <a className="nav-link" href="#contact">Contact</a>
                      </li>
                  </ul>
              </nav>
          </div>
          
          {/* <!--btn-share--> */}
          <div className="btn-share" >
              <span className="social_share text-dark"></span>
          </div>   
  
      </div>
  
      {/* <!--main--> */}
      <div className="main">
          {/* <!--Home --> */}
            {/* <section className="home bg-light vh-100" id="home"  > */}
          <section className="home bg-light vh-100" id="home" style={{backgroundImage: 'url(./images/profile2.jpg)'}} >
          {/* <section className="home bg-light vh-100" id="home" style={{backgroundImage: 'url(https://images.pexels.com/photos/3759099/pexels-photo-3759099.jpeg)'}} > */}
          {/* <section className="home bg-light vh-100" id="home" style={{backgroundImage: 'url(https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg)'}} > */}
          {/* <section className="home bg-light vh-100" id="home" style={{backgroundImage: 'url(https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg)'}} > */}
        <div className="container ">
          <div className="row ">
            <div className="col-lg-12 ">
              {/*social-media*/}
              <div className="social-home">
                <ul className="list-inline">
                  <li><a href="#" className="text-dark"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#" className="text-dark"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#" className="text-dark"><i className="fab fa-instagram" /></a></li>
                  <li><a href="https://github.com/deveshprojectwork/#" className="text-dark"><i className="fab fa-github" /></a></li>
                  {/* <li><a href="#" class="text-dark"><i class="fab fa-behance"></i></a></li> */}
                </ul>
              </div>
              <div className="d-flex align-items-center vh-100">
                <div className="full-width">
                  <div className="banner">
                    <h6 className="text-dark">Hi There,</h6>
                    <h1 className="cd-headline clip text-dark">I Am a
                      <span className="cd-words-wrapper" style={{overflow: 'hidden'}}>
                        <b className="is-visible">&nbsp;Software</b>
                        <b className="is-visible">&nbsp;Developer</b>
                        {/* <b class="is-hidden">&nbsp;Freelancer</b> */}
                      </span>
                    </h1>
                    <p className="max-width-450 text-dark mt-20 mb-30">
                      <b /></p><h6><b>Full Stack Solution Architect</b></h6>
                    <p />
                    <p className="max-width-450 text-dark mt-20 mb-30">
                      The crossover between design and programming has always been of interest to me, 
                      I've been lucky enough to work alongside 
                      some talented teams on a number of high profile websites. I have a wide range of skills 
                      that include back-end development using open source technologies (NodeJs, .Net Core), 
                      design (working closely with designers), front-end development 
                      (Angular, ReactJs, HTML5, CSS3, Javascript, Responsive, UX), 
                      Server Administrator(AWS, Azure, GCP),database(MongoDB,cassendra,Mysql, SqlServer), 
                      load balancing, Dep-Ops, Jenkin, Azure Dev-Ops, Azure WebApps, Kubernates &amp; Docker.
                    </p>
                    <a href="#about" className="btn-custom">
                      <span><i className="fas fa-user" /></span>
                      <span> More About Me</span>
                    </a>
                  </div>
                </div>
              </div>
              {/*my-info*/}
              <div className="my-info">
                <div className="item">
                  <p className="text-dark font-w-700 mb-0">Email</p>
                  <p className="text-dark mb-0">devesh.kr.sri@gmail.com</p>
                </div>
                <div className="item">
                  <p className="text-dark font-w-700 mb-0">Phone</p>
                  <p className="text-dark mb-0">+91 9999305585</p>
                </div>
                <div className="item">
                  <p className="text-dark font-w-700  mb-0">Location</p>
                  <p className="text-dark mb-0">Gurgaon , India</p>
                </div>
              </div>
            </div> 
          </div> 
        </div>
      </section>
  
      <About />
          {/*  */}
      <Skills />
          {/* <!-- Services --> */}
      <Services />
  
          {/* <!-- Works --> */}
      <Work />
  
          {/* <!-- testimonials--> */}


      
          {/* <!-- Blog --> */}
   <Blog />
  
          {/* <!-- Contact --> */}
       <Contact />
  
          {/* <!--Footer--> */}

  
          {/* <!--social-media--> */}
          <div className="social-footer">
              <ul className="list-inline">
                  <li><a href="#"><i className="fab fa-facebook-f text-dark"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter text-dark"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram text-dark"></i></a></li>
                  <li><a href="https://github.com/deveshprojectwork/#" className="text-dark"><i className="fab fa-github"></i></a></li>
                  {/* <!-- <li><a href="#"><i className="fab fa-behance text-dark"></i></a></li> --> */}
  
              </ul>
          </div>
      </div>
      {/* <!--Main End--> */}
   
       {/* <!--loading --> */} 
       <div className="loading" style={{display: 'none'}}>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default App;
