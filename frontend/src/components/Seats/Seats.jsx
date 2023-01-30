import React from "react";
import './Seats.css'
class BuyTickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketQuantity: 0,
      totalCost: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ticketCount !== this.props.ticketCount) {
      this.setState((prevState) => ({
        ticketQuantity: prevState.ticketQuantity + 1,
        totalCost: prevState.totalCost + 10,
      }));
    }
  }

  render() {
    return (
      <div>
        <p>Ticket Quantity: {this.state.ticketQuantity}</p>
        <p>Total Cost: {this.state.totalCost}</p>
      </div>
    );
  }
}

export default class SeatSelection extends React.Component {
  seats = [
    "A1", "A2", "A3", "A4", "A5",
    "B1", "B2", "B3", "B4", "B5",
    "C1", "C2", "C3", "C4", "C5",
    "D1", "D2", "D3", "D4", "D5",
    "E1", "E2", "E3", "E4", "E5",
  ];

  state = {
    ticketCount: 0,
  };

  handleInputClick = () => {
    this.setState((prevState) => ({
      ticketCount: prevState.ticketCount + 1,
    }));
  };

  render() {
    return (
      <div className="container">
      <div className="container-wrap">
        <ol>
          <li className="row row--1">
            <ol className="seats" type="A">
              {this.seats.map((seat) => (
                <li className="seat" key={seat}>
                  <input
                    type="checkbox"
                    id={seat}
                    onClick={this.handleInputClick}
                  />
                  <label for={seat}>{seat}</label>
                </li>
              ))}
            </ol>
          </li>
        </ol>
        <BuyTickets ticketCount={this.state.ticketCount} />
      </div>
      </div>
    );
  }
}
