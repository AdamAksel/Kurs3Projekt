import React from "react";
import "./EventsInfo.css";
import StartCards from "../Cards/StartCards";
import { events } from "../event-info";

function EventsInfo() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      className="event-container"
    >
      <div className="event-image-container">
        <img
          className="event-image"
          src="https://www.ticketcorner.ch/obj/media/CH-eventim/teaser/evo/artwork/2022/chris-brown-tickets-2023.jpg"
          alt="event image"
        />
        <div className="eventImage-text-container">
          <h2 className="eventImage-text">Chris Brown</h2>
        </div>
      </div>
      <div className="events-info">
        <div className="events-info-wrap">
          <h2>Events Schedule</h2> <br /> <br />
          <StartCards event={events} />
        </div>
      </div>
      <div className="information">
        <h2>Information</h2> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi vero
          libero cupiditate eum quam temporibus, animi debitis sapiente
          voluptates ipsam! Laudantium atque autem officia asperiores aut amet
          sed reprehenderit!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          necessitatibus ratione odio voluptatem eius excepturi nam! Id quis
          consequatur aspernatur. Dolorum eligendi nihil, culpa nobis possimus
          dicta temporibus sunt quisquam.
        </p>
        <br />
        <p>
          The concert ticket costs 300 SEK and is valid for two people. The
          first the ticket release is on January 25, at 09.00 and is valid for
          concerts and festivals between February and September 2023. The number
          tickets are limited so first come first served.
        </p>
      </div>
    </div>
  );
}

export default EventsInfo;
