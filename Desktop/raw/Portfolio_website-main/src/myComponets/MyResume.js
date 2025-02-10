import ProgressBar from '@ramonak/react-progress-bar';
import React, { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';
import punjab from '../Pics/pgc.jpg';
import Kahnur from '../Pics/kahnur.jpg';
import umt from '../Pics/umt.jpg';
export default function MyResume() {
  const reactPercentage = 80;
  const nodePercentage = 83;
  const expressPercentage = 80;
  const mongodbPercentage = 85;
  const bootstrapPercentage = 90;
  const jsPercentage = 85;
  const htmlPercentage = 80;
  const cssPercentage = 88;
  const wordpress = 80;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <Navbar />
      <div className='container textColor my-3 '>
        <div className='row '>
          <div className='col-8 col-12 col-sm-12 col-md-8 order-1 order-md-1 order-sm-1'>
            <h2 className='Mainheading font-weight-bold'>Education</h2>
            <br />
            {/* <!-- ------------ University of Management and Technology---------- --> */}
            <div class='row'>
              <div class='col-4'>
                <b class='heading font-weight-bold'>2020-2024</b> <br />
                <span class='textColor font-weight-light'>
                  University of Management and Technology ( CGPA 3.2 )
                </span>
                <br />
                <img
                  class='bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded mt-2'
                  width='200'
                  src={umt}
                  alt=''
                />
              </div>
              <div class='col-8 textColor font-weight-light'>
                <span class='heading font-weight-bold '>
                  BS Information Technology
                </span>
                <br />
                Completed BS Information Technology degree at the University of
                Management and Technology offers a comprehensive curriculum and
                practical experiences, empowering students to become skilled
                software engineers in the digital age.
              </div>
            </div>
            <br />
            {/* <!-- ------------Aspire Group of Colleges ---------- --> */}
            <div className='row'>
              <div className='col-4'>
                <b className='heading font-weight-bold'>2018-2019</b> <br />
                <span className='textColor font-weight-light'>
                  Punjab Group of Colleges (Grade A)
                </span>
                <img
                  className='bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded mt-2'
                  width='200'
                  src={punjab}
                  alt=''
                />
              </div>
              <div className='col-8 textColor font-weight-light'>
                <span className='heading font-weight-bold'>
                  <b> ICS- Computer Science</b>
                </span>
                <br />
                Studying Computer Science at Punjab Group of Colleges lays a
                strong academic foundation for students pursuing Science
                disciplines, with experienced faculty and excellent resources to
                foster their scientific and technical growth.
              </div>
            </div>
            <br />
            {/* <!-- -- ------------ Deen Public High School---------- --> */}
            <div className='row'>
              <div className='col-4 mb-3 '>
                <b className='heading font-weight-bold'>2008-2017</b> <br />
                <span className='textColor'>Kahnur Eduction School</span>
                <img
                  className='bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded mt-2'
                  width='200'
                  src={Kahnur}
                  alt=''
                />
              </div>
              <div className='col-8 font-weight-light'>
                <span className='heading font-weight-bold'>
                  <b>Secondary Education</b>
                </span>
                <br />
                Studying at Kahnur Eduction High School during my secondary
                education was a transformative journey that nurtured my academic
                excellence and shaped my character with values-based education.
              </div>
            </div>
          </div>
          <div className='col-4 col-12 col-sm-12 col-md-4 order-2 order-md-2 order-sm-2'>
            <div className='Skills textColor'>
              <h2 className='Mainheading font-weight-bold'>Coding Skills</h2>
              <div className='row'>
                <div className='col-12 mb-2 d-flex justify-content-center'>
                  <p
                    class='badge bg-dark text-light fs-3'
                    style={{ width: '100%' }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <i
                      class='fa-brands fa-react'
                      style={{ color: '#00D9FF' }}
                    ></i>
                    React
                    {isHovering && (
                      <ProgressBar
                        completed={reactPercentage}
                        maxCompleted={100}
                        className='mt-2'
                        bgColor='lime'
                        labelColor='black'
                      />
                    )}
                  </p>
                </div>
                <div className='col-12 mb-2 d-flex justify-content-center'>
                  <p
                    class='badge bg-dark text-light fs-3'
                    style={{ width: '100%' }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <i
                      class='fa-brands fa-node'
                      style={{ color: '#14a40a' }}
                    ></i>
                    NodeJs
                    {isHovering && (
                      <ProgressBar
                        completed={nodePercentage}
                        maxCompleted={100}
                        className='mt-2'
                        bgColor='lime'
                        labelColor='black'
                      />
                    )}
                  </p>
                </div>
                <div className='col-12 mb-2 d-flex justify-content-center'>
                  <p
                    class='badge bg-dark text-light fs-3'
                    style={{ width: '100%' }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    Express
                    <i class='fa-brands fa-js' style={{ color: '#F0DB4F' }}></i>
                    {isHovering && (
                      <ProgressBar
                        completed={expressPercentage}
                        maxCompleted={100}
                        className='mt-2'
                        bgColor='lime'
                        labelColor='black'
                      />
                    )}
                  </p>
                </div>
                <div className='col-12 mb-2 d-flex justify-content-center'>
                  <p
                    class='badge bg-dark text-light fs-3'
                    style={{ width: '100%' }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <i
                      class='fa-solid fa-leaf mb-2'
                      style={{ color: '#00ed64' }}
                    ></i>
                    MongoDB
                    {isHovering && (
                      <ProgressBar
                        completed={mongodbPercentage}
                        maxCompleted={100}
                        className='mt-2'
                        bgColor='lime'
                        labelColor='black'
                      />
                    )}
                  </p>
                </div>
                <div className='col-12 mb-2 d-flex justify-content-center'>
                  <p
                    class='badge bg-dark text-light fs-3'
                    style={{ width: '100%' }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <i
                      class='fa-brands fa-wordpress'
                      style={{ color: '#21759b' }}
                    ></i>
                    Wordpress
                    {isHovering && (
                      <ProgressBar
                        completed={wordpress}
                        maxCompleted={100}
                        className='mt-2'
                        bgColor='lime'
                        labelColor='black'
                      />
                    )}
                  </p>
                </div>
                <div className='col-12 mb-2 d-flex justify-content-center'>
                  <p
                    class='badge bg-dark text-light fs-3'
                    style={{ width: '100%' }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <i
                      class='fa-brands fa-bootstrap'
                      style={{ color: '#6f2cf5' }}
                    ></i>
                    BootStrap
                    {isHovering && (
                      <ProgressBar
                        completed={bootstrapPercentage}
                        maxCompleted={100}
                        className='mt-2'
                        bgColor='lime'
                        labelColor='black'
                      />
                    )}
                  </p>
                </div>
                <div className='col-12 mb-2 d-flex justify-content-center'>
                  <p
                    class='badge bg-dark text-light fs-3'
                    style={{ width: '100%' }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <i class='fa-brands fa-js' style={{ color: '#F0DB4F' }}></i>
                    JavaScript
                    {isHovering && (
                      <ProgressBar
                        completed={jsPercentage}
                        maxCompleted={100}
                        className='mt-2'
                        bgColor='lime'
                        labelColor='black'
                      />
                    )}
                  </p>
                </div>
                <div className='col-12 mb-2 d-flex justify-content-center'>
                  <p
                    class='badge bg-dark text-light fs-3'
                    style={{ width: '100%' }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <i
                      class='fa-brands fa-css3-alt'
                      style={{ color: '#1572b6' }}
                    ></i>
                    CSS
                    {isHovering && (
                      <ProgressBar
                        completed={cssPercentage}
                        maxCompleted={100}
                        className='mt-2'
                        bgColor='lime'
                        labelColor='black'
                      />
                    )}
                  </p>
                </div>
                <div className='col-12 mb-2 d-flex justify-content-center'>
                  <p
                    class='badge bg-dark text-light fs-3'
                    style={{ width: '100%' }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <i
                      class='fa-brands fa-html5'
                      style={{ color: '#e44d26' }}
                    ></i>
                    Html
                    {isHovering && (
                      <ProgressBar
                        completed={htmlPercentage}
                        maxCompleted={100}
                        className='mt-2'
                        bgColor='lime'
                        labelColor='black'
                      />
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
