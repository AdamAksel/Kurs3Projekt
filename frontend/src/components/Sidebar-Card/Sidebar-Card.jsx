import React from "react";

const SidebarCard = ({event}) => {

    return (
        <>
            <div className="Sidebar-Card">
                <img className="Sidebar-Card-Img"
                     src={event.image}/>
                <div className="Sidebar-Card-Info"> {event.name} </div>
                <div className="Sidebar-Card-Info"> {event.added ? "Added Today!" : event.datum} </div>
                <div className="Sidebar-Card-Info"><b>{event.venue}</b></div>
            </div>
        </>
    )
}
export default SidebarCard
