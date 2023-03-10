import './Sidebar-Card.css'
import altImg from './ATLienz.jpg'
import { NavLink } from 'react-router-dom'

const SidebarCard = ({ event }) => {
  return (
    <>
      <NavLink to={`/Event/${event.id}`} className='sidebar-card-navlink'>
        <div className='sidebar-card'>
          <img
            className='sidebar-card-img'
            src={event.image}
            alt='Artist/Band'
            onError={(e) => {
              e.target.src = altImg
            }}
          />
          <div className='sidebar-card-info'> {event.name} </div>
          <div className='sidebar-card-info'>
            {' '}
            {event.added ? 'Added Today!' : event.datum}{' '}
          </div>
          <div className='sidebar-card-info'>
            <b>{event.venue}</b>
          </div>
        </div>
      </NavLink>
    </>
  )
}
export default SidebarCard
