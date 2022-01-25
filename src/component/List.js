import React, { useEffect, useState } from 'react';
import axios from 'axios';

const List = () => {
  const [event, setEvent] = useState([]);
  const [contact, setContact] = useState([]);
  const [user, setUser] = useState([]);
  const [api, setApi] = useState([]);

  let one = "http://localhost:8080/event/getpost/";
  let two = "http://localhost:8080/contact/getall/";
  let three = "http://localhost:8080/user/getall/";
  let four = "http://localhost:8080/employe/getemploye/";

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  const requestThree = axios.get(three);
  const requestFour = axios.get(four);

  const renspons = async () => {
    axios.all([requestOne, requestTwo, requestThree, requestFour]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      const responesThree = responses[2]
      const responesFour = responses[3]
      setEvent(responseOne.data);
      setContact(responseTwo.data);
      setUser(responesThree.data);
      setApi(responesFour.data);
    })).catch(errors => {
      console.log(errors)
    })
  }

  useEffect(() => {
    renspons(); // eslint-disable-next-line
  }, []);


  return (
    <>
      <br />
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Desc</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">Members</th>
            </tr>
          </thead>
          <tbody>
            {event.map((data, key) => (
              <tr key={key}>
                <th key={key} scope="row">{key + 1}</th>
                <td>{data.eventTitle}</td>
                <td>{data.eventDescription}</td>
                <td>{new Date(data.startDate).toDateString()}</td>
                <td>{new Date(data.endDate).toDateString()}</td>
                <td>{data.maxMembers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Desc</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((data, key) => (
              <tr key={key}>
                <th key={key} scope="row">{key + 1}</th>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Message}</td>
                <td>{data.Subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Desc</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, key) => (
              <tr key={key}>
                <th key={key} scope="row">{key + 1}</th>
                <td>{data.address}</td>
                <td>{data.city}</td>
                <td>{data.counrty}</td>
                <td>{new Date(data.dob).toDateString()}</td>
                <td>{data.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Desc</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {api.map((data, key) => (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default List
