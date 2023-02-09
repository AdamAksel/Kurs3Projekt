export default function ({setStartEvents, todaysEvents, featuredEvents, recentlyAddedEvents}) {
  return <div className="startButtons">
      <div
        onClick={() => setStartEvents([...todaysEvents])}
        className="start-button"
      >
        Todays Events
      </div>
      <div
        onClick={() => setStartEvents([...featuredEvents])}
        className="start-button"
      >
        Featured
      </div>
      <div
        onClick={() => setStartEvents([...recentlyAddedEvents])}
        className="start-button"
      >
        Latest Added
      </div>
</div>
}
