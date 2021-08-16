import React,{Component , useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar';
const BookingUrl = "https://mymusicapis.herokuapp.com/keep"

export const Surveys = () => {

    const [user, setUser] = useState();

    const callAboutPage = async () => {
        try {
            const res = await fetch('/surveyform',{
                method: "GET",
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                credentials:"include"
            });
            const data = await res.json();
            console.log(data);
            setUser(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);
}


class Survey extends Component{
    constructor(props){
        super(props)

        this.state={
            name:sessionStorage.getItem('username'),
            email:'',
            phone:'',
            city:''
        }
    } 


    handleSubmit = () => {
        console.log(this.state)
        fetch(BookingUrl,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then(this.props.history.push('/viewBooking'))
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        return(
            <>
            <Navbar/>
            <div className="container" style={{width:'100%'}}>
                <div className="panel panel-success">
                    <div className="panel-heading" style={{fontSize:'26px',backgroundColor:'#AB7BFB'}}>
                        Survey Form
                    </div>
                    <div className="panel-body" style={{backgroundColor:'#ACFFEE'}}>
                        <div className="form-group">
                            <label>Name <i style={{color:'red'}}>*</i></label>
                            <input name="name" 
                            className="form-control" placeholder="enter your name"  onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Email <i style={{color:'red'}}>*</i></label>
                            <input name="email"
                            className="form-control" placeholder="enter your email id" onChange={this.handleChange}required/>
                        </div>
                        <div className="form-group">
                            <label>Phone no. <i style={{color:'red'}}>*</i></label>
                            <input name="phone"
                            className="form-control" placeholder="enter your phone number" onChange={this.handleChange}required/>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input name="city"
                            className="form-control" placeholder="enter your city" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="date" name="dob" placeholder="age" class="form-control" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Occupation</label>
                            <input name="occupation"
                            className="form-control" placeholder="enter your occupation" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Education</label>
                            <input name="education"
                            className="form-control" placeholder="lastest qualification" onChange={this.handleChange}/>
                        </div>

                        <div class="modal-footer">
                            <button className="btn btn-success"
                            onClick={this.handleSubmit}>
                                Submit
                            </button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Survey;