import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBJumbotron, MDBInput
} from "mdbreact";

export default class Birthday extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h3>5. When is your <u>birthday</u> ?</h3>
              <MDBInput size="lg" />
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
