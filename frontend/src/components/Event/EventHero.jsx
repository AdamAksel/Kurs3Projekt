export default function EventHero({ event }) {
  return (
    <>
      <img className='Event-image-div' src={event.image} />
      <div className='Event-info'>
        <h1>{event.name}</h1>
        <p>{event.info}</p>
      </div>
    </>
  )
}
