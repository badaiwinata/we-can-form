import React, { Component } from 'react'
import {
  MDBContainer, MDBRow, MDBCol,
  MDBJumbotron, MDBInput, MDBAnimation
} from "mdbreact";

export default class Firstname extends Component {
  render() {
    return (
      <MDBContainer className='blue' ref={(section) => { this.Blue = section; }}>
        <MDBRow>
          <MDBCol>
            <MDBAnimation reveal type="fadeInLeft">
              <MDBJumbotron>
                <h3>1. Hola, Whats your <u>first name</u> ?</h3>
                <MDBInput size="lg" />
              </MDBJumbotron>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
