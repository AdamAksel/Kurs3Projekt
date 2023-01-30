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
    "A1", "A2", "A3", "A4", "A5", "B4", "B5",
    "B1", "B2", "B3", "B4", "B5", "B4", "B5",
    "C1", "C2", "C3", "C4", "C5", "B4", "B5",
    "D1", "D2", "D3", "D4", "D5", "B4", "B5",
    "E1", "E2", "E3", "E4", "E5", "B4", "B5",
    "F1", "F2", "F3", "F4", "F5", "B4", "B5",
    "G1", "G2", "G3", "G4", "G5", "B4", "B5",
    "G1", "G2", "G3", "G4", "G5", "B4", "B5",
    // "H1", "H2", "H3", "H4", "H5",
    // "I1", "I2", "I3", "I4", "I5",
    // "J1", "J2", "J3", "J4", "J5",
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
        <div style={{width: "50%", float: "left"}}>
          <ol className="container-wrap">
            <li className="">
              <ol className="seats" type="A">
                {this.seats.slice(0, Math.ceil(this.seats.length / 2)).map((seat) => (
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
        </div>
        <div style={{width: "50%", float: "left"}}>
          <ol className="container-wrap">
            <li className="">
              <ol className="seats" type="A">
                {this.seats.slice(Math.ceil(this.seats.length / 2)).map((seat) => (
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
        </div>
        <BuyTickets ticketCount={this.state.ticketCount} />
      </div>
    );
  }
}
