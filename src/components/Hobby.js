import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBJumbotron, MDBInput
} from "mdbreact";

export default class Hobby extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h3>6. What’s your <u>hobby</u> ?</h3>
              <MDBInput size="lg" />
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
