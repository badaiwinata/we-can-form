import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn,
  MDBJumbotron, MDBInput, MDBAnimation
} from "mdbreact";

export default class Birthday extends Component {

  getPickerValue = (value) => {
    console.log(value);
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBAnimation reveal type="fadeInLeft">
              <MDBJumbotron>
                <h3>5. When is your <u>birthday</u> ?</h3>
                <MDBInput size="lg" type="date"/>
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
