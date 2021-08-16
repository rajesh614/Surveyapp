import React,{Component} from 'react';
import axios from 'axios';
import BookingView from './displayBooking';


const url = "https://mymusicapis.herokuapp.com/lists"

class DisplayApi extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div>
                <BookingView bookdata={this.state.booking}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(url).then((res) => {this.setState({booking:res.data})})
    }
}


export default DisplayApi;