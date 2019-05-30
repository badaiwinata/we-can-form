import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol,
  MDBJumbotron, MDBInput, MDBAnimation,
  MDBFormInline
} from "mdbreact";

export default class Gender extends Component {

  state = {
    radio: 2
  }

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBAnimation reveal type="fadeInLeft">
              <MDBJumbotron>
                <h3>3. Hi 'fungsi manggil nama' Whats your <u>gender</u> ?</h3>
                <MDBFormInline>
                  <MDBInput onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} label="Male"
                    type="radio" id="radio1" />
                  <MDBInput onClick={this.onClick(2)} checked={this.state.radio === 2 ? true : false} label="Female"
                    type="radio" id="radio2" />
                </MDBFormInline>
              </MDBJumbotron>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
