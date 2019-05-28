import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBJumbotron, MDBBtn
} from "mdbreact";
import './styles/styles.css'


export default class Header extends Component {
  render() {
    return (
      <MDBContainer className="header">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h1>
                <strong>Hey Stranger!</strong>
              </h1>
              <h4>I'm dying to get to know you better!</h4>
              <MDBBtn>Talk to me</MDBBtn>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
