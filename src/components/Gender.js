import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBJumbotron, MDBInput
} from "mdbreact";

export default class Gender extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h3>3. Hi 'fungsi manggil nama' Whats your <u>gender</u> ?</h3>
              <MDBInput label="Male" type="radio"
                id="radio1" />
              <MDBInput label="Female" type="radio"
                id="radio2" />
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
