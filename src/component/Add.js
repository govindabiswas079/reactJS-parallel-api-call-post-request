import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Add = () => {
    let history = useHistory();
    const [users, setUsers] = useState({
        eventTitle: '',
        eventDescription: '',
        startDate: '',
        endDate: '',
        avenue: '',
        maxMembers: ''
    });

    const [send, setSend] = React.useState({
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
    });

    const [info, setInfo] = useState({
        name: '',
        email: '',
        username: '',
        mobile: '',
        dob: '',
        address: '',
        counrty: '',
        state: '',
        city: '',
        zipcode: '',
        role: '',
        password: ''
    });

    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        designation: '',
        phoneNumber: ''
    });

    let one = "http://localhost:8080/event/add/";
    let two = "http://localhost:8080/contact/add/";
    let three = "http://localhost:8080/user/add/";
    let four = "http://localhost:8080/employe/add/";

    var evetndata = JSON.stringify({
        eventTitle: users.eventTitle,
        eventDescription: users.eventDescription,
        startDate: users.startDate,
        endDate: users.endDate,
        avenue: users.avenue,
        maxMembers: users.maxMembers
    });

    var eventconfig = {
        method: 'post',
        url: one,
        headers: {
            'Content-Type': 'application/json'
        },
        data: evetndata
    };

    var contactdata = JSON.stringify({
        Name: send.Name,
        Email: send.Email,
        Subject: send.Subject,
        Message: send.Message
    });

    var contactconfig = {
        method: 'post',
        url: two,
        headers: {
            'Content-Type': 'application/json'
        },
        data: contactdata
    };

    var userdata = JSON.stringify({
        name: send.Name,
        email: send.Email,
        username: info.username,
        mobile: info.mobile,
        dob: info.dob,
        address: info.address,
        counrty: info.counrty,
        state: info.state,
        city: info.city,
        zipcode: info.zipcode,
        role: info.role,
        password: info.password
        // password: 'prem-123'
    });

    var userconfig = {
        method: 'post',
        url: three,
        headers: {
            'Content-Type': 'application/json'
        },
        data: userdata
    };

    var apidata = JSON.stringify({
        name: send.Name,
        email: send.Email,
        designation: employee.designation,
        phoneNumber: info.mobile,
    });

    var apiconfig = {
        method: 'post',
        url: four,
        headers: {
            'Content-Type': 'application/json'
        },
        data: apidata
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios(eventconfig)
            .then(function (response) {
                var data = response.status;
                if (data === 200) {
                    axios(contactconfig)
                        .then(function (response) {
                            var contactconfigresponse = response.status;
                            if (contactconfigresponse === 200) {
                                axios(userconfig)
                                    .then(function (response) {
                                        var userconfigresponse = response.status;
                                        if (userconfigresponse === 200) {
                                            axios(apiconfig)
                                                .then(function (response) {
                                                    var apiconfigresponse = response.status;
                                                    if (apiconfigresponse === 200) {
                                                        history.push('/list');
                                                    } else {
                                                        alert('apiconfig')
                                                    }
                                                })
                                        } else {
                                            alert('userconfig')
                                        }
                                    })
                            } else {
                                alert('contactconfig')
                            }
                        })
                } else {
                    alert('eventconfig')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-7" style={{ maxWidth: 900, margin: "0 auto" }}>
                                <div className="p-5">
                                    <form className="user" onSubmit={e => onSubmit(e)}>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="eventTitle" className="form-control form-control-user" name="eventTitle" value={users.eventTitle} onChange={(e) => setUsers({ ...users, eventTitle: e.target.value })} placeholder="eventTitle" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="eventDescription" className="form-control form-control-user" name="eventDescription" value={users.eventDescription} onChange={(e) => setUsers({ ...users, eventDescription: e.target.value })} placeholder="eventDescription" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="date" className="form-control form-control-user" name="startDate" value={users.startDate} onChange={(e) => setUsers({ ...users, startDate: e.target.value })} placeholder="startDate" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="date" className="form-control form-control-user" name="endDate" value={users.endDate} onChange={(e) => setUsers({ ...users, endDate: e.target.value })} placeholder="endDate" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="avenue" className="form-control form-control-user" name="avenue" value={users.avenue} onChange={(e) => setUsers({ ...users, avenue: e.target.value })} placeholder="avenue" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="maxMembers" className="form-control form-control-user" name="maxMembers" value={users.maxMembers} onChange={(e) => setUsers({ ...users, maxMembers: e.target.value })} placeholder="maxMembers" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="name" className="form-control form-control-user" name="Name" value={send.Name} onChange={(e) => setSend({ ...send, Name: e.target.value })} placeholder="Name" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="email" className="form-control form-control-user" name="Email" value={send.Email} onChange={(e) => setSend({ ...send, Email: e.target.value })} placeholder="Email" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="subject" className="form-control form-control-user" name="Subject" value={send.Subject} onChange={(e) => setSend({ ...send, Subject: e.target.value })} placeholder="Subject" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="message" className="form-control form-control-user" name="Message" value={send.Message} onChange={(e) => setSend({ ...send, Message: e.target.value })} placeholder="Message" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="username" className="form-control form-control-user" name="username" value={info.username} onChange={(e) => setInfo({ ...info, username: e.target.value })} placeholder="username" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="mobile" className="form-control form-control-user" name="mobile" value={info.mobile} onChange={(e) => setInfo({ ...info, mobile: e.target.value })} placeholder="mobile" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="date" className="form-control form-control-user" name="dob" value={info.dob} onChange={(e) => setInfo({ ...info, dob: e.target.value })} placeholder="dob" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="address" className="form-control form-control-user" name="address" value={info.address} onChange={(e) => setInfo({ ...info, address: e.target.value })} placeholder="address" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="counrty" className="form-control form-control-user" name="counrty" value={info.counrty} onChange={(e) => setInfo({ ...info, counrty: e.target.value })} placeholder="counrty" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="state" className="form-control form-control-user" name="state" value={info.state} onChange={(e) => setInfo({ ...info, state: e.target.value })} placeholder="state" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="city" className="form-control form-control-user" name="city" value={info.city} onChange={(e) => setInfo({ ...info, city: e.target.value })} placeholder="city" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="zipcode" className="form-control form-control-user" name="zipcode" value={info.zipcode} onChange={(e) => setInfo({ ...info, zipcode: e.target.value })} placeholder="zipcode" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="role" className="form-control form-control-user" name="role" value={info.role} onChange={(e) => setInfo({ ...info, role: e.target.value })} placeholder="role" />
                                            </div>
                                            {/* <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-user" name="password" value={info.password} onChange={(e) => setInfo({ ...info, password: e.target.value })} placeholder="password"/>
                                        </div> */}
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="designation" className="form-control form-control-user" name="designation" value={employee.designation} onChange={(e) => setEmployee({ ...employee, designation: e.target.value })} placeholder="designation" />
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add;






/* await axios.all([eventconfig, contactconfig, userconfig, apiconfig]).then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    const responesThree = responses[2]
    const responesFour = responses[3]
    //  console.log('responseOne', responseOne)
    //  console.log('responseTwo', responseTwo.data)
    //  console.log('responesThree', responesThree.data)
    //  console.log('responesFour', responesFour.data)

})).catch(errors => {
    console.log(errors)
}) */