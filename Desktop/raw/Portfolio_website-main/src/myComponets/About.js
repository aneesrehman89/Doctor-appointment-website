import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
import anees from '../Pics/anees.jpg';
export default function About() {
  return (
    <div>
      <Navbar />
      <div className=''>
        {/* <!-- -----intro----- --> */}
        <div className='container mx-auto my-3'>
          <h1 className='text-warning'>About Me</h1>
          <div className='row featurette my-3'>
            <div className='col-md-6'>
              <p className='textColor fs-5'>
                I have done my studies in Bachelor Of Information Technology,  having experties in creating responsive web pages with a perfect blend of stunning graphics, smooth animations, and user-friendly interfaces. Additionally, I bring six months of experience with MERN Stack where I worked on building dynamic, full-stack applications. Ability to do work in less time with more accuracy.
              </p>
            </div>
            <div className='col-md-6'>
              <div className='text-warning font-weight-bold'>
                Age<span className='textColor'> ➤ 24</span>
              </div>
              &nbsp;
              <div className='text-warning font-weight-bold'>
                Residence<span className='textColor'> ➤ Pakistan</span>
              </div>
              &nbsp;
              <div className='text-warning font-weight-bold'>
                Address
                <span className='textColor'> ➤ Johar Town, Lahore</span>
              </div>
              &nbsp;
              <div className='text-warning font-weight-bold'>
                E-mail
                <span className='textColor'>
                  {' '}
                  ➤ mr.anees.se@gmail.com
                </span>
              </div>
              &nbsp;
              <div className='text-warning font-weight-bold'>
                Phone<span className='textColor'> ➤ +92 3126426807</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- -------What I Do--- --> */}
        <div className='container mx-auto '>
          <div className='h3 textColor'>
            What<span className='text-warning'> I Do</span>
          </div>
          <div className='row featurette my-3'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-6 text-light   mb-2'>
                  <div className='box AboutBox text-center'>
                    <br />
                    <h2>
                      <i
                        className='fa-sharp fa-solid fa-ribbon'
                        style={{ color: '#FFC107' }}
                      ></i>
                    </h2>
                    <p className='text-light font-weight-bold'>Experience</p>
                    <p className='text-light'>1 Year working</p>
                  </div>
                </div>
                <div className='col-md-6 text-light   mb-2'>
                  <div className='box AboutBox text-center '>
                    <br />
                    <h2>
                      <i
                        className='fa-solid fa-briefcase'
                        style={{ color: '#FFC107' }}
                      ></i>
                    </h2>
                    <p className='text-light font-weight-bold'>Completed</p>
                    <p className='text-light'>10+ Projects</p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 text-light  mb-2'>
                  <div className='box AboutBox text-center'>
                    <br />
                    <h2>
                      <i
                        className='fa-solid fa-envelope'
                        style={{ color: '#FFC107' }}
                      ></i>
                    </h2>
                    <p className='text-light font-weight-bold'>E-mail</p>
                    <p className='text-light about-email'> mr.anees.se@gmail.com</p>
                  </div>
                </div>
                <div className='col-md-6 text-light  mb-2'>
                  <div className='box AboutBox text-center'>
                    <br />
                    <h2>
                      <i
                        className='fa-solid fa-headset'
                        style={{ color: '#FFC107' }}
                      ></i>
                    </h2>
                    <p className='text-light font-weight-bold'>Support</p>
                    <p className='text-light'>Online 24/7</p>
                  </div>
                </div>
              </div>
              <br />
              <div className='col-md-12 conbtn'>
                <button type='button' className='btn btn-warning btn-lg'>
                  <Link
                    className='text-light'
                    to='/contact'
                    style={{ textDecoration: 'none' }}
                  >
                    Contact Me
                  </Link>
                </button>
              </div>
              <br />
            </div>
            <div className='col-md-6 pic ' style={{ width: '450px', height: '400px' }}>
              <img
                className='bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded'
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={anees}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
