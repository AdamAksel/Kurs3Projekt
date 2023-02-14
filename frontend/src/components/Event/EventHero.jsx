import altImg from '../Sidebar-Card/ATLienz.jpg'

export default function EventHero({ event }) {
  return (
    <>
      <img
        className='event-image'
        src={event.image}
        onError={(e) => {
          e.target.src = altImg
        }}
      />
      <div className='event-info'>
        <h1>{event.name}</h1>
        <p>{event.info}</p>
      </div>
    </>
  )
}
