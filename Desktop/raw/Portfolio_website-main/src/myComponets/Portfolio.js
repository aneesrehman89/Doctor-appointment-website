import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import bnb from "../Gifs/bnb.mp4";
import siredBits from "../images/siredBits.png";
import gemini from "../images/capture.png";
import pexles from "../Gifs/pexles.mp4";
import joya from "../Gifs/joya.mp4";
import gym from "../Gifs/gym.mp4";
import port from "../Gifs/port.mp4";
import MKS from "../Gifs/MKS.mp4";
import BLVQ from "../Gifs/BLVQ.mp4";
import blog from "../Gifs/blog.mp4";
import kodex from "../Gifs/kodex.mp4";

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      {/* --------------------------------------------First One----------------------------- */}
      <div className="container">
        <div className="row my-3">
          <div className="col-md-5 ">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <img src={gemini} alt="" srcSet="" width="100%" height="230px" />
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    GEMINI_AI Chat Bot – Intelligent Conversational Assistant
                  </span>{" "}
                  is a smart, AI-powered chatbot built using
                  the MERN Stack and integrated with the Gemini AI model.
                  This chatbot offers a real-time
                  answers, along with an interactive voice feature that converts
                  text into speech, making conversations more engaging and
                  accessible.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://gemini-app-frontend.vercel.app/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning me-2"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">1 Month ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">&nbsp;&nbsp;&nbsp;&nbsp;</div>
          {/* right */}
          <div className="col-md-5 ">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <video
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="240"
                muted
                autoPlay
                loop
              >
                <source src={pexles} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    Pexels Clone using React.js
                  </span>{" "}
                  is a api fetcing functionality website with interactive UI
                  based on HTML, CSS, JavaScript Bootstrap and React.js. It
                  allow user to search any kind of thing based on their
                  prefernces.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://pexels-clone-lake.vercel.app/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">2 Month ago</small>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      {/* --------------------------------------------Second One----------------------------- */}
      <div className="container my-3">
        <div className="row my-3">
          <div className="col-md-5">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                muted
                src="https://res.cloudinary.com/dvccsosdc/image/upload/v1706048093/ToDo_List_q9p4dv.gif"
                alt=""
              />
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    To-Do List App Using JavaScript
                  </span>{" "}
                  include funtionality Edit,Delete,Done Task and Shows the Task
                  adding time with date.In addition the tasks and changes will
                  not remove after reload due to use of Local Storage.{" "}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://todo-app-zeta-sandy.vercel.app/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">1 Month ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">&nbsp;&nbsp;&nbsp;&nbsp;</div>
          {/* right */}
          <div className="col-md-5">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                muted
                src="https://res.cloudinary.com/dvccsosdc/image/upload/v1706048071/conveter_skzidd.gif"
                alt=""
              />
              <div className="card-body bg-dark text-light ">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    Real time Currency Converter
                  </span>{" "}
                  of almost ten plus country with the help of JavaScript. In
                  addition show the conversion rate with real time output,
                  adding animations and effects.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://currency-calculator-delta.vercel.app/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">1 Month ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------Third One----------------------------- */}
      <div className="container my-3">
        <div className="row">
        <div className="col-md-5 ">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <img
                src={siredBits}
                alt=""
                srcSet=""
                width="100%"
                height="230px"
              />
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    SiredBits is a business startup website built with React.js
                  </span>{" "}
                  showcasing services with a modern design. Integrated with
                  Firebase to capture user messages from the contact form for
                  seamless communication.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link to="https://www.siredbits.com/" target="_blank">
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">1 Month ago</small>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-md-2">&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className="col-md-5">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <video
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="240"
                muted
                autoPlay
                loop
              >
                <source src={port} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    Portfolio using HTML CSS and animation
                  </span>{" "}
                  using external CSS with media quries. In Addition the Navbar
                  with smooth scrolling, showcase the projects created with
                  html, css, bootstrap and Js.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://css-portfolio-sage.vercel.app/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">2 Month ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------Fourth One----------------------------- */}
      <div className="container my-3">
        <div className="row">
          <div className="col-md-5">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <video
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="240"
                muted
                autoPlay
                loop
              >
                <source src={gym} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    GYM Trainer Website
                  </span>{" "}
                  with five pages. using the concept of flex-box, bootstrap
                  grid, positioning, transform, translate, each page have
                  attractive view with transitions for better user experience.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://github.com/aneesrehman89/Gym-trannie-website"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">1/5 Month ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className="col-md-5">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <video
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="240"
                muted
                autoPlay
                loop
              >
                <source src={blog} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    CSS Responsive Blog Website{" "}
                  </span>
                  is a simple website created for understanding the concept of
                  bootstrap grid, make website responsive, adding some blogs to
                  showcase the futuring technologies.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://mini-blog-website-snowy.vercel.app/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">1/5 Month ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------Fifth One----------------------------- */}
      <div className="container my-3">
        <div className="row">
          <div className="col-md-5">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <video
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="240"
                muted
                autoPlay
                loop
              >
                <source src={MKS} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    MKS Engineering Website
                  </span>{" "}
                  with ten sections is a client based website which is fully
                  responsive to all the devices. making more fun to Create
                  differenct slick sliders, videos, FAQ secction and much more.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://github.com/aneesrehman89/Mks-Engineering-Website"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">2/5 Month ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className="col-md-5">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <video
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="240"
                muted
                autoPlay
                loop
              >
                <source src={BLVQ} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    BLVQ Website{" "}
                  </span>
                  with eight sections is a client based real-estate website
                  which is fully responsive to all the devices. gain experince
                  with industry based projects, working on single single section
                  is easy to manage.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://github.com/aneesrehman89/real-estate-webiste"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">2/5 Month ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------Sixth One----------------------------- */}
      <div className="container my-3">
        <div className="row">
          <div className="col-md-5">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <video
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="240"
                muted
                autoPlay
                loop
              >
                <source src={joya} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    JOYA Real Estate Website
                  </span>{" "}
                  is a client based real-estate website which is fully
                  responsive to all the devices. gain experince with industry
                  based projects, working on single single section is easy to
                  manage.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://github.com/aneesrehman89/real-estate-webiste"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">3/5 Month ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className="col-md-5 mb-3">
            <div className="card shadow-sm" style={{ height: "430px" }}>
              <video
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="240"
                muted
                autoPlay
                loop
              >
                <source src={kodex} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    Kodex Website{" "}
                  </span>
                  is a practicing software house website, consiting of multiple
                  pages in experince with industry based projects. Wesbiste is
                  creating in that a way so that it beccome fully resposive on
                  all sizes screens.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://github.com/aneesrehman89/Kodex-Website"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">3/5 Month ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
