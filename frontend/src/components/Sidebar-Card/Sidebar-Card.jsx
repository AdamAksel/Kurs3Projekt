import './Sidebar-Card.css'
import altImg from './ATLienz.jpg'

const SidebarCard = ({event}) => {

    return (
        <>
            <div className="sidebar-card">
                <img className="sidebar-card-img"
                     src={event.image}
                     alt="Artist/Band"
                     onError={(e)=>{
                        e.target.src = altImg
                }}/>
                <div className="sidebar-card-info"> {event.name} </div>
                <div className="sidebar-card-info"> {event.added ? "Added Today!" : event.datum} </div>
                <div className="sidebar-card-info"><b>{event.venue}</b></div>
            </div>
        </>
    )
}
export default SidebarCard
