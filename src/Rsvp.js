import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

class Rsvp extends Component {
  state = {
    email: ""
  };

  render() {
    return (
      <div>
        <h2>Add Your Details</h2>
        <p>If you are attending please let me know here</p>
        <Form onSubmit={e => this.submitForm(e)}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full Name"
              name="name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone" name="phone" />
          </Form.Group>
          <Form.Group controlId="formBasicDateOfArrival">
            <Form.Label>Select Arrival Date</Form.Label>
            <Form.Control as="select" name="arrival">
              <option>23rd Nov</option>
              <option>24th Nov</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicDateOfArrivalTime">
            <Form.Label>Enter Arrival Time</Form.Label>
            <Form.Control type="text" name="arrivaltime">

            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicNoOfGuests">
            <Form.Label>Select Number Of Guests</Form.Label>
            <Form.Control as="select" name="guests">
              {this.createOptions()}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPickup">
            <Form.Label>Select PickUp location</Form.Label>
            <Form.Control as="select" name="pickup">
              <option>Nagpur Railway Station</option>
              <option>Nagpur Bus Station</option>
              <option>Nagpur Airport</option>
            </Form.Control>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            //onClick={() => this.handleIncrement({email: "updated one"})}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }

  createOptions = () => {
    let options = [];
    // Outer loop to create parent
    for (let i = 0; i < 10; i++) {
      //Create the parent and add the children
      options.push(<option key={i}>{i}</option>);
    }
    return options;
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    //set current function to the fuction which is returned by bind mehtod
    //console.log("Constructor ", this);
  }
  handleIncrement(emailEntered) {
    this.setState(emailEntered);
    console.log("increment clicked", this.state.email);
  }

  submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("name"));
    console.log(data.get("phone"));
    console.log(data.get("guests"));
    axios
      .post("https://mycoresshukoor.herokuapp.com/add", {
        name: data.get("name"),
        guests: data.get("guests"),
        pickup: data.get("pickup"),
        arrivaltime: data.get("arrivaltime"),
        arrival: data.get("arrival"),
        phone: data.get("phone")
      })
      .then(result => {
        console.log(result);
        //access the results here....
      });

    // Require'ing module and setting default options
    /* 
var send = require('gmail-send')({
  user: "tasaidhawedding@gmail.com", // Your GMail account used to send emails
  pass: "tasaidha123", // Application-specific password
  to: "tasaidhawedding@gmail.com", // Send to yourself
  subject: 'ping',
  text: 'gmail-send example 2' // Plain text
  })(); */

    /* var send = require('gmail-send')({
//var send = require('../index.js')({
  user: 'tasaidhawedding@gmail.com',
  pass: 'tasaidha123',
  to:   'tasaidhawedding@gmail.com',
  subject: 'test subject',
  text:    'gmail-send example 1',         // Plain text
  //html:    '<b>html text</b>'            // HTML
});

    send({ // Overriding default parameters
      subject: 'attached '        // Override value set as default
    }, function (err, res) {
      console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
    });

    console.log('sucessfully sent email'); */

    /* (async () => {
      let db = null;
      const mongodbConnection = `mongodb://sshukoor:sshukoor@123@ds137019.mlab.com:37019/sshukoor`;
      //const mongodbConnection = settings.mongodbServerUrl;
      const mongoPathName = url.parse(mongodbConnection).pathname;
      const dbName = mongoPathName.substring(
        mongoPathName.lastIndexOf("/") + 1
      );

      try {
        client = await MongoClient.connect(mongodbConnection, {
          useNewUrlParser: true
        });
        db = client.db(dbName);
        console.log(
          `API Server Successfully connected to ${mongodbConnection}`
        );
      } catch (e) {
        console.log(`API Server MongoDB connection was failed. ${e.message}`);
        return;
      }
      client.close();
    })(); */
  }
}

export default Rsvp;
