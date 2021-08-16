import React from 'react';
import './display.css';

const BookingView = (props) => {
    const renderTable = ({bookdata}) => {
        if(bookdata){
            return bookdata.map((item) => {
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.city}</td>
                            <td>{item.dob}</td>
                            <td>{item.occupation}</td>
                            <td>{item.education}</td>
                        </tr>
                    )    
            })
        }
    }

    return(
        <div className="container" style={{width:'100%'}}>
            <center><h3>Customer Survey List</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>EmailId</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Age</th>
                        <th>Occupation</th>
                        <th>Education</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default BookingView;
