import React from 'react'

function Services() {
  return (
    <div>          {/* <!-- Services --> */}
                 <section id="services" className="section services">
              <div className="container">
                  <div className="row mb-50">
                      <div className="col-md-12">
                          <div className="section-title">
                              <h2 className="text-dark mb-0">My Services</h2>
                              <p className="text-muted mb-0">I Have Worked With A Number Of Clients.</p>
                          </div>
                      </div>
                  </div>
                  <div className="row" >
                      <div className="col-sm-6 col-lg-4" >
                          <div className="item" style={{height: '300px'}}>
                              <div className="circle">
                                 <h2>01</h2>
                              </div>
                              <div className="content ">
                                  <h5 className="text-dark mt-15 mb-10">Full Stack Development</h5>
                                  <p className="text-dark mb-0">
                                  Experience in fullstack development.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                          <div className="item"  style={{height: '300px'}}>
                              <div className="circle">
                                  <h2>03</h2>
                              </div>
                              <div className="content">
                                  <h5 className="text-dark  mt-15 mb-10">Web Development</h5>
                                  <p className="text-dark mb-0"> Experience in both frontend technology and backend technoolgy. 
                                       I am able to work on the React, Angular and MongoDB, Prostgre-Sql and Sql Server</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                          <div className="item"  style={{height: '300px'}}>
                              <div className="circle">
                                  <h2>02</h2>
                              </div>
                              <div className="content">
                                  <h5 className="text-dark  mt-15 mb-10">Web Design</h5>
                                  <p className="text-dark mb-0">
                                    Experience on working on the css, html5 and bootstrap </p>
                              </div>
                          </div>
                      </div>
                     
                      <div className="col-sm-6 col-lg-4">
                          <div className="item"  style={{height: '300px'}}>
                              <div className="circle">
                                  <h2>04</h2>
                              </div>
                              <div className="content">
                                  <h5 className="text-dark  mt-15 mb-10">Testing</h5>
                                  <p className="text-dark mb-0"> 
                                  Experience in unit and End-To-End testing, using a TDD approach with tools like Jest with Enzyme, Mocha, junit, N-Unit with Seleniun web automation Testing
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                          <div className="item"  style={{height: '300px'}}>
                              <div className="circle">
                                  <h2>05</h2>
                              </div>
                              <div className="content">
                                  <h5 className="text-dark mt-15 mb-10">Team Lead</h5>
                                  <p className="text-dark mb-0"> Handling onshore and offshore team and closely working with the client.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                          <div className="item"  style={{height: '300px'}}>
                              <div className="circle">
                                  <h2>06</h2>
                              </div>
                              <div className="content">
                                  <h5 className="text-dark  mt-15 mb-10">Dev-ops</h5>
                                  <p className="text-dark mb-0"> Experience on deployment of code on the Azure web-app, vm, Aws, Heroku with the help of
                                  Azure-Devops pipeline and Jenkin. Also working Docker and Kubernete.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section></div>
  )
}

export default Services