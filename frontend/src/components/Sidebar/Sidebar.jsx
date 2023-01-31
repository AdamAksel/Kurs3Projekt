import React, {useState} from 'react'
import './Sidebar.css'
import SidebarCard from "../Sidebar-Card/Sidebar-Card.jsx";
import {events} from "../event-info.js";

const Sidebar = () => {

    const [viewChange, setViewChange] = useState(0)
    const [switchSidebarVisibility, setSwitchSidebarVisibility] = useState(0)

    function sideBarVisibilityVariable() {
        if (switchSidebarVisibility === 0) {
            setSwitchSidebarVisibility(1)
        } else {
            setSwitchSidebarVisibility(0)
        }
    }

    return (
        <>
            <div className="sidebarContainerAlpha">
            <div onClick={() => {sideBarVisibilityVariable()}} className="menuButton"> <div> <svg id="pic" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            </div>
            </div>

                {switchSidebarVisibility === 1 ? (
                    <div className="Sidebar-Container">
                        <div className="Sidebar-Texts">
                            <div style={viewChange === 0 ? {backgroundColor: "#374a64"} : null} onClick={() => {
                                setViewChange(0)
                            }} className="Sidebar-TodaysEvents-Text"> Today's Events
                            </div>
                            <div style={viewChange === 1 ? {backgroundColor: "#374a64"} : null} onClick={() => {
                                setViewChange(1)
                            }} className="Sidebar-RecentlyAdded-Text"> Recently Added
                            </div>
                        </div>
                        {viewChange === 0 ? (<div className="Sidebar-TodaysEvents">
                            <div className="Sidebar-TodaysEvents-Cards">
                                <SidebarCard events={events[0]}/>
                            </div>
                        </div>) : (<div className="Sidebar-RecentlyAdded">
                            <div className="Sidebar-RecentlyAdded-Cards">
                                <div className="Sidebar-Card">
                                    <img className="Sidebar-Card-Img"
                                         src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/633/25/633-25-101L/Kings-Van-Orton-Design-Poster.jpg"/>
                                    <div className="Sidebar-Card-Info"> Biggie N' 2pac</div>
                                    <div className="Sidebar-Card-Info"><b>SJÖBO</b>, Parken</div>
                                </div>
                                <div className="Sidebar-Card">
                                    <img className="Sidebar-Card-Img"
                                         src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/633/25/633-25-101L/Kings-Van-Orton-Design-Poster.jpg"/>
                                    <div className="Sidebar-Card-Info"> Biggie N' 2pac</div>
                                    <div className="Sidebar-Card-Info"><b>SJÖBO</b>, Parken</div>
                                </div>
                                <div className="Sidebar-Card">
                                    <img className="Sidebar-Card-Img"
                                         src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/633/25/633-25-101L/Kings-Van-Orton-Design-Poster.jpg"/>
                                    <div className="Sidebar-Card-Info"> Biggie N' 2pac</div>
                                    <div className="Sidebar-Card-Info"><b>SJÖBO</b>, Parken</div>
                                </div>
                            </div>
                        </div>)}
                    </div>): null }

            </div>
                    </>
                    )
                }

                export default Sidebar
