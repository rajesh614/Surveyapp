import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = res.json();

        if(res.status === 400 || !data) {
            window.alert("Invalid Credentials");
        } else {
            window.alert("Login Successful");
            history.push('/Home');
        }
    }

        return(
            <div className="container" style={{width:'40%',backgroundColor:'#FEB7FD'}}>
                <div className="panel panel-primary" style={{marginTop:'20%'}}>
                    <div className="panel-heading" style={{fontSize:'25px',backgroundColor:'deepskyblue'}}>
                        Login
                    </div>
                    <div method="POST" className="panel-body">
                        <div className="form-group">
                            <label><i class="zmdi zmdi-email"></i></label>
                            <input type="email" name="email"
                            className="form-control" placeholder="Enter your Registered Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"/>
                        </div>
                        <div className="form-group">
                            <label><i class="zmdi zmdi-lock"></i></label>
                            <input name="password" type="password"
                            className="form-control" placeholder="Enter your password" value={password} onChange= {(e) => setPassword(e.target.value)} autoComplete="off"/>
                        </div>

                        <div className="form-group form-button">
                            <input type="submit" name="signin" id="signin" className="form-submit" value="Login" onClick={loginUser}/>
                        </div>
                        <div><center>Or</center></div>
                        <Link to='/'><button className="btn btn-info"
                        style={{width:'100%'}}>Signup
                        </button></Link>
                    </div>
                </div>
            </div>
        )
}
export default Login