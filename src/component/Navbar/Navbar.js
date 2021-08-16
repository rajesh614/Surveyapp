import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { SiAboutDotMe } from 'react-icons/si';
import { AiOutlineHome } from 'react-icons/ai';
import { TiContacts } from 'react-icons/ti';
import './navbar.css';


const Navbar =() => {

    
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
                <a className="navbar-brand" href='/Home'>Survey4Peace</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href='/Home'><AiOutlineHome/> Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/surveyform'><FaPlusCircle/> SurveyForm</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About <SiAboutDotMe/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/contact'> <TiContacts/> Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled"><FiLogIn/> Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
    </>
    )
}

export default Navbar;