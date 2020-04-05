import React from 'react';
import { Icon, Image, Statistic } from 'semantic-ui-react'

import './footer.scss';
const Footer = ()=> {
    return (
        <div>
             <footer className="footer-area section-padding">
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-3">
                <div className="single-widget-home mb-5 mb-lg-0">
                  <h3 className="mb-4">top products</h3>
                  <ul>
                    <li className="mb-2"><a href="#">managed website</a></li>
                    <li className="mb-2"><a href="#">managed reputation</a></li>
                    <li className="mb-2"><a href="#">power tools</a></li>
                    <li><a href="#">marketing service</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 offset-xl-1 col-lg-6">
                <div className="single-widget-home mb-5 mb-lg-0">
                  <h3 className="mb-4">newsletter</h3>
                  <p className="mb-4">You can trust us. we only send promo offers, not a single.</p>  
                  <Statistic.Group>
    <Statistic>
      <Statistic.Value>22</Statistic.Value>
      <Statistic.Label>Saves</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value text>
        Three
        <br />
        Thousand
      </Statistic.Value>
      <Statistic.Label>Signups</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name='plane' />5
      </Statistic.Value>
      <Statistic.Label>Flights</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Image src='/images/avatar/small/joe.jpg' inline circular />
        42
      </Statistic.Value>
      <Statistic.Label>Team Members</Statistic.Label>
    </Statistic>
  </Statistic.Group>
                </div>
              </div>
              <div className="col-xl-3 offset-xl-1 col-lg-3">
                <div className="single-widge-home">
                  <h3 className="mb-4">instagram feed</h3>
                  <div className="feed">
                    <img src="assets/images/feed1.jpg" alt="feed" />
                    <img src="assets/images/feed2.jpg" alt="feed" />
                    <img src="assets/images/feed3.jpg" alt="feed" />
                    <img src="assets/images/feed4.jpg" alt="feed" />
                    <img src="assets/images/feed5.jpg" alt="feed" />
                    <img src="assets/images/feed6.jpg" alt="feed" />
                    <img src="assets/images/feed7.jpg" alt="feed" />
                    <img src="assets/images/feed8.jpg" alt="feed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <span>
                  Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by l3abd w lela
                </span>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="social-icons">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                    <li><a href="#"><i className="fa fa-behance" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )
}

export default Footer
