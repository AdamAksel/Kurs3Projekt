import React, { useContext, useState } from "react";
import "./Start.css";
import GlobalContext from "../../GlobalContext.jsx";
import StartCard from "../Cards/StartCard.jsx";

export default function () {
  const { concerts } = useContext(GlobalContext);
  const concertInfo = concerts.slice(0, 6);

    return <section className="startPage">
      <StartCards />
    </section>

    function StartCards() {
      return concertInfo.map((event) => (
        <StartCard event={event} key={event.id} />
    ));
  }
}
