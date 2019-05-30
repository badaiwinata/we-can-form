import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation,
  MDBJumbotron, MDBCardTitle, MDBBtn, MDBInput
} from "mdbreact";
import scrollToComponent from 'react-scroll-to-component';
import './styles/styles.css';
// import gradient1 from './styles/gradient1.jpg';


export default class Header extends Component {

  state = {
    firstName: ''
  };

  validateForm() {
    return this.state.firstName.length > 0
  }

  handleAddState = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  componentWillMount() {
    scrollToComponent(this.firstName);
  }

  render() {
    return (
      <div>
        <MDBContainer className="header">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron style={{ padding: 0 }}>
              {/* https://mdbootstrap.com/img/Photos/Others/gradient1.jpg */}
                <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url()` }}>
                  <MDBCol className="py-5">
                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                      Hey Stranger!
                  </MDBCardTitle>
                    <h5 className="mx-5 mb-5">
                      I'm dying to get to know you better!
                  </h5>
                    <MDBBtn
                      outline color="white"
                      className="mb-5"
                      onClick={() => scrollToComponent(this.firstName)}
                    >
                      <MDBIcon icon="comment-alt" className="mr-2" /> Talk to me
                  </MDBBtn>
                  </MDBCol>
                </MDBCol>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className='firstName' ref={(section) => { this.firstName = section; }}>
          <MDBRow>
            <MDBCol>
              <MDBAnimation reveal type="fadeInLeft">
                <MDBJumbotron>
                  <h3>1. Hola, Whats your <u>first name</u> ?</h3>
                  <MDBInput size="lg" value={this.state.firstName} onChange={this.handleAddState} />
                  <MDBBtn
                    type="button"
                    disabled={!this.validateForm()}
                    onClick={this.handleSubmit}
                  >
                    Next
                  </MDBBtn>
                </MDBJumbotron>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}
