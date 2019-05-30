import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn,
  MDBJumbotron, MDBInput, MDBAnimation
} from "mdbreact";

export default class Address extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBAnimation reveal type="fadeInLeft">
              <MDBJumbotron>
                <h3>4. Where do you <u>live</u> ?</h3>
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
