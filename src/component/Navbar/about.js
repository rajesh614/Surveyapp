import React from 'react';
import Mypic from '../images/my.JPG';
import './about.css';
import Navbar from './Navbar';
import { MdComputer } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im'; 
import { GoDeviceMobile } from 'react-icons/go';
import { FiMail } from 'react-icons/fi';


function About() {
    return (
        <div>
            <Navbar/>
            <div class="container">
                <center><h2>About me</h2></center>
                <div class="life">
                    <img src={Mypic} className="imge"/>
                </div>
                <div class="header-right">
                    <h5 className="H">Hello</h5>
                    <h4>I'm RAJESH KUMAR NAYAK</h4>
                    <h6 className="web"><MdComputer/> (MERN) Full Stack Web Developer</h6>
                    <p className="loco"><ImLocation2/> Bhubaneswar, Odisha.</p>
                    <p className="mail"><FiMail/> rajesh.kumar143@gmail.com</p>
                    <p className="phn"><GoDeviceMobile/> +91 9999999999</p>
                </div>
            </div>
        </div>
    )
}

export default About;