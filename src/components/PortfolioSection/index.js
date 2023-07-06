import React from "react";
import "./Portfolio.css";
import * as SiIcons from "react-icons/si";

import Inventory from "../../Images/video.png";
import cms from "../../Images/cms.png";
import blog from "../../Images/blog.avif";
import social from "../../Images/social.png";



function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">Check out my work</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={cms} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">CMS</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Contact management system</div>
            <div className="img-description">
              <p>
              This project helps us to save contacts of someone for the future needs , it is done using MERN stack
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/manojprabhakar24/cms-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/manojprabhakar24/cms-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://cms-frontend-ten.vercel.app/login"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={blog} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">BLOG</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">My memories</div>
            <div className="img-description">
              <p>
              This project helps us to share our memories , it is done using MERN stack
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/manojprabhakar24/blog-fe"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/manojprabhakar24/blog-be"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://blog-fe-ipd8.vercel.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Inventory} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title"> Inventory</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">My Inventory</div>
            <div className="img-description">
              <p>
              This project helps us to maintain bills and payments , 
              I have created this project using MERN stack.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/manojprabhakar24/social-media-FE"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/manojprabhakar24/social-media-BE"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://inventory-fe-psi.vercel.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={social} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Social Media</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Social media app</div>
            <div className="img-description">
              <p>
              This app is done using MERN stack , used as a social media platform .
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/manojprabhakar24/social-media-FE"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/manojprabhakar24/social-media-BE"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://social-media-fe-roan.vercel.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
       
       
      </div>
    </div>
  );
}

export default Portfolio;
