import "./StartCards.css";

const StartCards = (props) => {
  
  return (
    <section className="cards-container">
      <div style={{ position: "relative", outline: 'none' }}>
        <div style={{outline:'none'}}>
          <img
            src="https://www.vibe.com/wp-content/uploads/2016/03/Chris-Brown-.png"
            alt="chris-brown image"
          />
          <div className="cards-name">
            <div className="cards-name-text">{props.event.artist}</div>
          </div>
        </div>

        
        <p className="date">Date: 2023-01-20</p>
        <p className="time">Time: 18:00-22:00</p>
        <p className="location" style={{ fontWeight: "bold" }}>
          Helsingborg:{" "}
          <span style={{ fontWeight: "normal", outline: "none" }}>Olympia</span>
        </p>
      </div>
    </section>
  );
};

export default StartCards;
