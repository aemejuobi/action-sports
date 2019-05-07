import React, { Component } from "react";
import api from "./api";
import "./Card.css";
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";

export class Cards extends Component {
	state = {
		buyList: [],
	}
	componentDidMount () {
		api.get((res) => {
			this.setState({
				buyList: res
			},() => {
				console.log(this.state)
			})
		})
	}

  	render() {
    	return (
			<div>
				{this.state.buyList.map(card => {
					return (
						<div key={card.name} className="cardWrapper mt-3">
						<MDBRow>
							<MDBCol>
								<img className="card" src={card.image} />
							</MDBCol>
							<MDBCol>
								<MDBRow className="pb-3">
								{card.name}
								</MDBRow>
								<MDBRow className="pb-3">
									Paying: {card.price}
								</MDBRow>
								<MDBRow className="pb-3">
									Needing: {card.quantity}
								</MDBRow>
								<MDBRow className="pb-5">
									<MDBBtn>Sell</MDBBtn>
								</MDBRow>
							</MDBCol>
						</MDBRow>
						</div>
					)
				})}
			</div>
		);
  	}
}

export default Cards;
