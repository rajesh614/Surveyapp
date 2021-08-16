import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './signup.css';

const Signup = () => {

    const history = useHistory();

    const [user, setUser]= useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }

const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch('/register', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name, email, phone, work, password, cpassword
        })
    });

    const data = await res.json();
    if(res.status === 422 || !data) {
        window.alert("Invalid Registration")
    } else {
        window.alert("Registration Successful");
        history.push('/login');
    }
}

        return(
            <div className="container" style={{width:'60%',backgroundColor:'#CAFCA8'}}>
                <div className="panel panel-primary"style={{marginTop:'10px'}}>
                    <div className="panel-heading" style={{color:'deepskyblue'}}>
                        <h4>Signup</h4>
                    </div>
                    <div method="POST" className="panel-body">
                        <div className="form-group">
                            <label><i class="zmdi zmdi-account"></i></label>
                            <input type="text" name="name" id="name"
                            className="form-control" placeholder="Enter Your Name" value={user.name} onChange={handleInputs} autoComplete="off"/>
                        </div>

                        <div className="form-group">
                            <label><i class="zmdi zmdi-email"></i></label>
                            <input type="email" name="email" id="email"
                            className="form-control" placeholder="Enter your Email"  value={user.email} onChange={handleInputs} autoComplete="off"/>
                        </div>

                        <div className="form-group">
                            <label><i class="zmdi zmdi-phone"></i></label>
                            <input type="number" name="phone" id="phone"
                            className="form-control" placeholder="Enter Phone Number"  value={user.phone} onChange={handleInputs} autoComplete="off"/>
                        </div>

                        <div className="form-group">
                            <label><i class="zmdi zmdi-slideshow"></i></label>
                            <input type="text" name="work" id="work"
                            className="form-control" placeholder="Enter your Profession"  value={user.work} onChange={handleInputs} autoComplete="off"/>
                        </div>

                        <div className="form-group">
                            <label><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="password" id="password"
                            className="form-control" placeholder="Enter your Password"  value={user.password} onChange={handleInputs} autoComplete="off"/>
                        </div>

                        <div className="form-group">
                            <label><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="cpassword" id="cpassword"
                            className="form-control" placeholder="Confirm your Password"  value={user.cpassword} onChange={handleInputs} autoComplete="off"/>
                        </div>

                        <div className="form-group form-button">
                            <input type="submit" name="signup" id="signup" className="form-submit" value="Signup" onClick={PostData}/>
                        </div>
                        <div><center>Or</center></div>
                        <Link to='/login'><button className="btn btn-info"
                        style={{width:'100%'}}>Login
                        </button></Link>
                    </div>
                </div>
            </div>
        )
    }
export default Signup;