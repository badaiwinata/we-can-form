import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn,
  MDBJumbotron, MDBInput, MDBAnimation
} from "mdbreact";

export default class Lastname extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBAnimation reveal type="fadeInLeft">
              <MDBJumbotron>
                <h3>2. And your <u>last name</u> ?</h3>
                <MDBInput size="lg" />
                <MDBBtn
                  type="button"
                  color="info"
                >
                  Next
                </MDBBtn>
              </MDBJumbotron>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
