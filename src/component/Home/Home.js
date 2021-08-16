import React from 'react';
import Navbar  from '../Navbar/Navbar';
import DisplayApi from '../surveyform/DisplayApi';
import Corona from '../images/corona.png';
import { FaFacebookF , FaInstagram ,  FaYoutube , FaPinterestP , FaLinkedinIn , FaTwitter } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <marquee direction="right" style={{color:"red", fontSize:'15px'}}>
        To Fill up the Survey Form, just Click the  " <b style={{fontSize:'17px'}}>+</b> " icon inside the navigation bar.
      </marquee>
      <img src={Corona} className="img" style={{width:'100%',height:'300px'}}/>
      <DisplayApi/>
      <marquee direction="left" style={{color:"green",fontSize:'15px'}}>
        Do not let the behavior of others destroy your inner peace. 
      </marquee>
      <hr/>
      <div className="note">
        <center><h4><b>Privacy Notes</b></h4></center>
          <p style={{fontSize:13,textAlign:'center'}}> By using our website, you are fully accepting the Privacy Policy available at https://survey4peace.org/privacy governing you access to bookmyshow and provision of services by Bookmyshow to you If you donot accept terms mentioned in the Privacy policies.</p>
        </div>
        <br/>
        <div className="iconic">
          <center>
            <p style={{fontSize:'13px'}}>Follow & Suscribe my Social Media Handles;</p>
                <a href="https://www.facebook.com/rknayakbabu" style={{color:'blue',fontSize:'28px'}} target="_blank"><FaFacebookF/></a>&ensp;
                <a href="https://www.instagram.com/" style={{color:'rgb(205,72,107)',fontSize:'28px'}} target="_blank"><FaInstagram/></a>&ensp;
                <a href="https://www.twitter.com/" style={{color:'rgb(29,161,242)',fontSize:'28px'}} target="_blank"><FaTwitter/></a>&ensp;
                <a href="https://www.pinterest.com/" style={{color:'brown',fontSize:'28px'}} target="_blank"><FaPinterestP/></a>&ensp;
                <a href="https://www.linkedin.com/in/rajesh-kumar-nayak-754616138/" style={{color:'navy',fontSize:'28px'}} target="_blank"><FaLinkedinIn/></a>&ensp;
                <a href="https://www.youtube.com/channel/UCAGf8EY29uVhpt9pm0NklnQ" style={{color:'red',fontSize:'28px'}} target="_blank"><FaYoutube/></a>
          </center>
        </div>
        <div className="info">
            <center>
                <p>Copyright 2021 &copy; Survey For Peace Pvt. Ltd. All Rights Reserved .</p>
                <p>The Content used on this site are copyrights vests with the respective owners. Unauthorized use is prohibited and punishable by the law. </p>
            </center>
        </div>
    </div>
  );
}

export default App;
