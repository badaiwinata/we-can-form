import React, { Component } from 'react';
import {
	MDBIcon, MDBContainer, MDBModal,
	MDBModalHeader
}
	from "mdbreact";

export default class Modal extends Component {

	render() {
		console.log(this.state)
		return (
			<MDBContainer >
				<MDBModal isOpen={this.props.modal} toggle={this.props.toggle} >
					<MDBModalHeader toggle={this.props.toggle}>
						"Hi , nice to meet you." <MDBIcon far icon="grin-beam" />
					</MDBModalHeader>
				</MDBModal>
			</MDBContainer>
		)
	}
}
