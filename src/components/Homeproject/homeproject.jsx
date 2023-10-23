import React from 'react'
import "./homeproject.css"
import profile from "../../assets/avatar.svg"
import { Link } from "react-router-dom";
import { ArrowRightCircle } from 'react-bootstrap-icons';


function Homeproject() {
  return (
    <>
    <div className='exppart'>
   <div className='headingpart'>
     My Experience And Projects
   </div>
  <section className='about container section' id='about'>
    <div className='about_container grid'>
      <img src={profile} alt='' className='about_img' />
      <div className='about_data grid'>
        <div className='about_info'>
          <p className='about_description'>Please download my resume.
You can also provide additional information or context if necessary, such as
"Please find my resume attached for download."
Keep your request simple and to the point to make it easy for the recipient to understand and act on.</p>
      <Link to="https://drive.google.com/file/d/1zLgIri_u8Ej7BrDCMKuqEVCpzot7JhoJ/view?usp=sharing" className='btn' target="_blank">
        Download CV <ArrowRightCircle size={25} /></Link>
          
        </div>
        <div className='about_skills grid'>
          <div className='skills_data'>
            <div className='skills_titles'>
              <h3 className='skills_name'>Web Development</h3>
              <span className='skills_number'>95%</span>
            </div>
            <div className='skills_bar'>
              <span className='skills_percentage development'></span>
            </div>
          </div>
          <div className='skills_data'>
            <div className='skills_titles'>
              <h3 className='skills_name'>MERN</h3>
              <span className='skills_number'>96%</span>
            </div>
            <div className='skills_bar'>
              <span className='skills_percentage mern'></span>
            </div>
          </div>
          <div className='skills_data'>
            <div className='skills_titles'>
              <h3 className='skills_name'>Full stack</h3>
              <span className='skills_number'>90%</span>
            </div>
            <div className='skills_bar'>
              <span className='skills_percentage fullstack'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* <div className='about_boxes grid'>
    <div className='about_box'>
      <i className='about_icon icon-fire'></i>
      <div>
        <h3 className='about_title'>5+</h3>
        <span className='about_subtitle'>React project completed</span>
      </div>
    </div>
    <div className='about_box'>
      <i className='about_icon icon-cup'></i>
      <div>
        <h3 className='about_title'>1+</h3>
        <span className='about_subtitle'>MERN project completed</span>
      </div>
    </div>
    <div className='about_box'>
      <i className='about_icon'></i>
      <div>
        <h3 className='about_title'>1+</h3>
        <span className='about_subtitle'>PHP project completed</span>
      </div>
    </div>
    
  </div> */}
  </section>
  </div>
   </>
  )
}

export default Homeproject
