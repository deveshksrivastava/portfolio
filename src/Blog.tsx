import React from 'react'

function Blog() {
  return (
    <div>       <section className="section blog" id="blog">
              <div className="container">
                  <div className="row mb-50">
                      <div className="col-md-12">
                          <div className="section-title">
                              <h2 className="text-dark mb-0">My Blog</h2>
                              <p className="text-muted mb-0">The Last posts About Graphic And Web Design.</p>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      {/* <!--item--> */}
                      <div className="col-lg-6 col-md-6">
                          <div className="item">
                              <div className="image">
                                  <img src="./images/1(2).jpg" alt=""/>
                              </div>
                              <div className="content">
                                  <small className="text-muted">09 March, 2020 <span className="dot"></span>  #Design , #web</small>
                                  <h5 className="title  mb-15 mt-10">
                                      <a href="https://dev.to/deveshprojectwork/8-react-application-deployment-and-hosting-solutions-for-2019-4eb" className="text-dark">8 react application deployment and hosting solutions</a>
                                  </h5>
                                  <p className="text-dark mb-25">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, soluta rerum molestias optio distinctio blanditiis
                                          cupiditate...
                                  </p>
                                  <a href="https://dev.to/deveshprojectwork/8-react-application-deployment-and-hosting-solutions-for-2019-4eb#" className="btn-custom">
                                      <span>Read More</span>
                                      <span className="arrow_right"></span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      {/* <!--item--> */}
                      <div className="col-lg-6 col-md-6">
                          <div className="item">
                              <div className="image">
                                  <img src="./images/2(2).jpg" alt=""/>
                              </div>
                              <div className="content">
                                  <small className="text-muted">09 March, 2020
                                      <span className="dot"></span> #Design , #web</small>
                                  <h5 className="title mb-15 mt-10">
                                      <a href="https://dev.to/deveshprojectwork/difference-between-angular-and-react-2cgo/#" className="text-dark">Difference Between Angular and React</a>
                                  </h5>
                                  <p className="text-dark mb-25">Angular is a complete structural framework for development of dynamic web pages and web applications. It is a JavaScript framework developed and maintained by Google that is written in ...
                                  </p>
                                  <a href="https://dev.to/deveshprojectwork/difference-between-angular-and-react-2cgo/#" className="btn-custom">
                                      <span>Read More</span>
                                      <span className="arrow_right"></span>
                                  </a>
                              </div>                  
                          </div>
                      </div>
                      {/* <!--item--> */}
                      <div className="col-lg-6 col-md-6">
                          <div className="item">
                              <div className="image">
                                  <img src="./images/3(2).jpg" alt=""/>
                              </div>
                              <div className="content">
                                  <small className="text-muted">12 June, 2020
                                      <span className="dot"></span> #Design , #web
                                  </small>
                                  <h5 className="title mb-15 mt-10">
                                      <a href="https://www.notion.so/Why-you-should-try-GraphQL-d83c2a4d339c488f970dee0c64ec824a/#" className="text-dark">Why you should try GraphQL!</a>
                                  </h5>
                                  <p className="text-dark mb-25">GraphQL started at Facebook back in 2012, it was developed internally before being released as open-source in 2015. In 2018 the project was moved to the newly created GraphQL...
                                  </p>
                                  <a href="https://www.notion.so/Why-you-should-try-GraphQL-d83c2a4d339c488f970dee0c64ec824a/#" className="btn-custom">
                                      <span>Read More</span>
                                      <span className="arrow_right"></span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      {/* <!--item--> */}
                      <div className="col-lg-6 col-md-6">
                          <div className="item">
                              <div className="image">
                                  <img src="./images/4(1).jpg" alt=""/>
                              </div>
                              <div className="content">
                                  <small className="text-muted">09 March, 2020
                                      <span className="dot"></span> #Design , #web
                                  </small>
                                  <h5 className="title mb-15 mt-10">
                                      <a href="#" className="text-dark">5 Best Tools will help you to grow your mobile app</a>
                                  </h5>
                                  <p className="text-dark mb-25">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, soluta rerum molestias optio distinctio
                                                      blanditiis cupiditate...
                                  </p>
                                  <a href="#" className="btn-custom">
                                      <span>Read More</span>
                                      <span className="arrow_right"></span>
                                  </a>
                              </div>     
                          </div>
                      </div>
                  </div>
              </div>
          </section></div>
  )
}

export default Blog