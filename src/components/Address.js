import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBJumbotron, MDBInput
} from "mdbreact";

export default class Address extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h3>4. Where do you <u>live</u>, 'fungsi manggil nama' ?</h3>
              <MDBInput size="lg" />
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
