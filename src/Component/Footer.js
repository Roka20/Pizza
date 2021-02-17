import React from 'react'
import { Component } from 'react'

class Footer extends Component {
    render(){
    return (
        
            <div className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <div className="about-Us">
                        <h5>About Us</h5> 
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="row">
                            <div className="col">                       
                             <i className="fab fa-facebook-f fa-2x"></i>
                            </div>
                            <div className="col">
                                <i className="fab fa-twitter fa-2x"></i>
                                </div>
                            <div className="col">
                                <i className="fab fa-instagram fa-2x"></i>
                                </div>
                        </div>
                    </div>
                  </div>
                  <div className="col-3">
                     <div className="recent-blog">
                     <h5>RECENT BLOG</h5>
                      <div className="row">
                          <div className="col-4">
                              <img src="./image/pizzas4.jpg" alt="pizza" style={{width:80 , height:80}}/>

                          </div>
                          <div className="col-8">
                              <p>Even the all-powerful Pointing has no control about</p>
                              <div className="row">
                                  <div className="col">
                                  <i className="fas fa-calendar-alt fa-xs">Sept 15,2018</i>
                                  </div>
                                  <div className="col">
                                  <i className="fas fa-user fa-xs">admin</i>
                                  </div>
                                  <div className="col">
                                  <i className="far fa-comment-alt fa-xs"></i>
                                  </div>

                              </div>
                          </div>
                          <div className="row">
                          <div className="col-4">
                              <img src="./image/pizzas5.jpg" alt="pizza" style={{width:80 , height:80}}/>

                          </div>
                          <div className="col-8">
                              <p>Even the all-powerful Pointing has no control about</p>
                              <div className="row">
                                  <div className="col">
                                  <i className="fas fa-calendar-alt fa-xs">Sept 15,2018</i>
                                  </div>
                                  <div className="col">
                                  <i className="fas fa-user fa-xs">admin</i>
                                  </div>
                                  <div className="col">
                                  <i className="far fa-comment-alt fa-xs"></i>
                                  </div>

                              </div>
                          </div>

                          </div>
        
                      </div>
                     </div>
                      </div>
                      <div className="col-3">
                          <div className="services">
                          <h5>Services</h5>
                          <ul>
                              <li><a href="O">Cooked</a> </li>
                              <li> <a href="O">Deliver</a> </li>
                              <li> <a href="O">Quality Foods</a> </li>
                              <li> <a href="O">Mixed</a></li> 
                          </ul>
                          
                          <div/>

                          </div>
                </div>
                <div className="col-3">
                  <div className="have-question">
                  <h5>HAVE A QUESTIONS?</h5>
                      <div className="row">
                          <div className="col-4">
                          <i className="fas fa-map-marker-alt "></i>
                          </div>
                          <div className="col-8">
                              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                              </div>
                          </div>
                          <div className="row">
                          <div className="col-4">
                          <i className="fas fa-phone "></i>
                          </div>
                          <div className="col-8">
                              <a href="O">+2 392 3929 210</a>
                              
                          </div>


                          </div>
                          <div className="row">
                          <div className="col-4">
                          <i className="fas fa-envelope "></i>
                            </div>
                          <div className="col-8">
                              <a href="O">roka.elsofi@gmail.com</a>
                              
                          </div>


                          </div>

                  </div>
                      </div>
             </div>
           </div>
           </div>
           
            
        
    )
}
}

export default Footer
