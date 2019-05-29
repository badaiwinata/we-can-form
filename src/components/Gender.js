import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBJumbotron, MDBInput, MDBAnimation
} from "mdbreact";

export default class Gender extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBAnimation reveal type="fadeInLeft">
              <MDBJumbotron>
                <h3>3. Hi 'fungsi manggil nama' Whats your <u>gender</u> ?</h3>
                <MDBInput label="Male" type="radio"
                  id="radio1" />
                <MDBInput label="Female" type="radio"
                  id="radio2" />
              </MDBJumbotron>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
