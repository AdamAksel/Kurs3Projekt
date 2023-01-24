import React, {useState} from 'react'
import './Sidebar.css'
import SidebarCard from "../Sidebar-Card/Sidebar-Card.jsx";
import {events} from "../event-info.js";

const Sidebar = () => {

    const [viewChange, setViewChange] = useState(0)

    return (
        <>
            <div className="Sidebar-Container">
                <div className="Sidebar-Texts">
                    <div style={viewChange === 0 ? {backgroundColor: "#374a64"} : null} onClick={() => {setViewChange(0)}} className="Sidebar-TodaysEvents-Text"> Today's Events </div>
                    <div style={viewChange === 1 ? {backgroundColor: "#374a64"} : null} onClick={() => {setViewChange(1)}} className="Sidebar-RecentlyAdded-Text"> Recently Added </div>
                </div>
                {viewChange === 0 ? (<div className="Sidebar-TodaysEvents">
                    <div className="Sidebar-TodaysEvents-Cards">
                        <SidebarCard events={events[0]}/>
                    </div>
                </div>) : (<div className="Sidebar-RecentlyAdded">
                    <div className="Sidebar-RecentlyAdded-Cards">
                        <div className="Sidebar-Card">
                            <img className="Sidebar-Card-Img" src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/633/25/633-25-101L/Kings-Van-Orton-Design-Poster.jpg" />
                            <div className="Sidebar-Card-Info"> Biggie N' 2pac </div>
                            <div className="Sidebar-Card-Info"><b>SJÖBO</b>, Parken</div>
                        </div>
                        <div className="Sidebar-Card">
                            <img className="Sidebar-Card-Img" src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/633/25/633-25-101L/Kings-Van-Orton-Design-Poster.jpg" />
                            <div className="Sidebar-Card-Info"> Biggie N' 2pac </div>
                            <div className="Sidebar-Card-Info"><b>SJÖBO</b>, Parken</div>
                        </div>
                        <div className="Sidebar-Card">
                            <img className="Sidebar-Card-Img" src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/633/25/633-25-101L/Kings-Van-Orton-Design-Poster.jpg" />
                            <div className="Sidebar-Card-Info"> Biggie N' 2pac </div>
                            <div className="Sidebar-Card-Info"><b>SJÖBO</b>, Parken</div>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    )
}

export default Sidebar
