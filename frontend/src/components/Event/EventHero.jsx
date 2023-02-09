export default function EventHero({ event }) {
  return (
    <>
      <img className='event-image' src={event.image} />
      <div className='event-info'>
        <h1>{event.name}</h1>
        <p>{event.info}</p>
      </div>
    </>
  )
}
