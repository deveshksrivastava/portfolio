import React from 'react'

function Contact() {
  return (
    <div>   <section className="section contact pb-70" id="contact">
              <div className="container">
                  <div className="row mb-50">
                      <div className="col-md-12">
                          <div className="section-title">
                              <h2 className="text-dark mb-0">Contact Me</h2>
                              <p className="text-muted mb-0">Feel Free To Contact Me Any Time </p>
                          </div>
                      </div>
                  </div>
                 
                  <div className="row">
  
                      <div className="col-lg-6">
                          <form action="https://mariame.netlify.app/assets/php/mail.php" method="post" id="main_contact_form" className="form contact_form ">
                              <div className="alert alert-success contact_msg " style={{display: 'none'}} role="alert">
                                  Your message was sent successfully.
                              </div>       
                              <div className="form-group">
                                  <input type="text" name="name" id="name" className="form-control" placeholder="Name" />
                              </div>
                                  
                              <div className="form-group">
                                  <input type="email" name="email" id="email" className="form-control" placeholder="Email" />
                              </div>
                                            
                              <div className="form-group">
                                  <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" />
                              </div>
                                             
                              <div className="form-group">
                                  <textarea name="message" id="message" cols={Number('30')} rows={Number('5')} className="form-control" placeholder="Message" ></textarea>
                              </div>
                                      
                              <button type="submit" name="submit" className="btn-custom">
                                  <span><i className="fas fa-paper-plane"></i></span>
                                  <span> Send Message</span>
                              </button>
  
                          </form>
                      </div>
                     
                      {/* <!--Contact -info --> */}
                      <div className="col-lg-6">
                          <h5 className="text-dark">Let's talk about everything!</h5>
                          <p className="text-dark mb-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem
                              ipsum dolor sit amet, consectetuer adipiscing elit.
                               Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                          <div className="contact-info">
                              <div className="item mb-20">
                                  <p className="text-dark font-w-700 mb-0">Phone: </p>
                                  <p className="text-dark mb-0"><i className="fas fa-phone base-color"></i>+91-9999305585</p>
                              </div>
                              <div className="item mb-20">
                                  <p className="text-dark font-w-700 mb-0">Email: </p>
                                  <p className="text-dark mb-0"><i className="fas fa-envelope base-color"> </i> devesh.kr.sri@gmail.com</p>                                 
                              </div>
                              <div className="item mb-20">
                                  <p className="text-dark font-w-700 mb-0">Adress: </p>
                                  <p className="text-dark mb-0"><i className="fas fa-map-marker-alt base-color"> </i>Gurgaon, India</p>
                              </div>
                              <div className="item">
                                  <p className="text-dark font-w-700 mb-0">linkedin: </p>
                                  <p className="text-dark mb-0"> <i className="fab fab fa-skype base-color"> </i>linkedin.com/in/devesh-srivastava-94268516</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7011.349454829149!2d77.01360057467625!3d28.519432506820067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a0488e56d61%3A0xc3641b05f8c4bfb0!2sBlock%20E%2C%20New%20Palam%20Vihar%20Phase%202%2C%20Sector%20110%2C%20Gurugram%2C%20Haryana%20122017!5e0!3m2!1sen!2sin!4v1598856041395!5m2!1sen!2sin" width="1050" height="350"   aria-hidden="false" ></iframe>
                      </div>
                  </div>
              </div>
          </section></div>
  )
}

export default Contact