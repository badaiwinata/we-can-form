import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBJumbotron, MDBInput
} from "mdbreact";

export default class Interest extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h3>7. What’s something you’re really <u>interest</u> right now?</h3>
              <MDBInput size="lg" />
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
