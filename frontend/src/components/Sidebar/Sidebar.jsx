import React, { useState, useContext, useEffect } from "react";
import "./Sidebar.css";
import SidebarCard from "../Sidebar-Card/Sidebar-Card.jsx";
import GlobalContext from "../../GlobalContext";


const Sidebar = () => {
    const { concerts } = useContext(GlobalContext)
   
  const [viewChange, setViewChange] = useState(0);
  const [todaysEvents, setTodaysEvents] = useState([])
  const [recentlyAddedEvents, setRecentlyAddedEvents] = useState([])

  async function todaysConcerts(){
    let tempArray = []
    for(let i = 0; i < 2; i++){
    tempArray.push(concerts[Math.floor(Math.random() * concerts.length) ])
    let today = new Date();
    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
    tempArray[i].datum = date
    }
    setTodaysEvents([...tempArray])
}

async function recentlyAddedConcerts(){
    let tempArray = []
    for(let i = 0; i < 1; i++){
    tempArray.push(concerts[Math.floor(Math.random() * concerts.length) ])
    let today = new Date();
    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
    tempArray[i].added = date
    } 
    setRecentlyAddedEvents([...tempArray])
}

  useEffect(() => {

    
        todaysConcerts()
     recentlyAddedConcerts()
       

   
  }, [])

  return (
    <>
      <div className="Sidebar-Container">
        <div className="Sidebar-Texts">
          <div
            style={viewChange === 0 ? { backgroundColor: "#374a64" } : null}
            onClick={() => {
              setViewChange(0);
            }}
            className="Sidebar-TodaysEvents-Text"
          >
            {" "}
            Today's Events{" "}
          </div>
          <div
            style={viewChange === 1 ? { backgroundColor: "#374a64" } : null}
            onClick={() => {
              setViewChange(1);
            }}
            className="Sidebar-RecentlyAdded-Text"
          >
            {" "}
            Recently Added{" "}
          </div>
        </div>
        {viewChange === 0 ? (
          <div className="Sidebar-TodaysEvents">
            {todaysEvents.map((event) => (
              <div className="Sidebar-TodaysEvents-Cards">
                <SidebarCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="Sidebar-RecentlyAdded">
            <div className="Sidebar-RecentlyAdded-Cards">
            {recentlyAddedEvents.map((event) => (
              <div className="Sidebar-TodaysEvents-Cards">
                <SidebarCard event={event} />
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
