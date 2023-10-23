import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'



const footer = () => {
  return (
    <footer class="bg-dark text-white pt-4 pb-4">
        <div class="container text-center text-md-left">
            {/* <hr class="mb-4"></hr> */}
            <div class="row align-items-center">
                <div class="col-md-7 col-lg-8">
                   <p> <span className="myName">JayasreeProfile</span>
                    ©Copyright 2023.All rights reserved.
                
                       </p>
     
                </div>
                <div class="col-md-5 col-lg-3">
                    <div class="text-center text-md-right">
                        <ul class="list-unstyled list-inline">
                        <Link to="https://www.linkedin.com/in/jayasree-k-274607239" target="_blank"><li class="list-inline-item">
                        <i class="fab fa-linkedin-in fa-2x"></i>
                        
                         </li></Link>
                         <Link to="https://github.com/Jayasreekrishnamurthy"  target="_blank"><li class="list-inline-item">
                         <i class="fab fa-github fa-2x"></i>
                         </li></Link>
                            <li class="list-inline-item">
  
                               <i class="fab fa-facebook-f fa-2x"></i>
                            </li>
                            <li class="list-inline-item">
  
                            <i class="fab fa-youtube fa-2x" ></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default footer
