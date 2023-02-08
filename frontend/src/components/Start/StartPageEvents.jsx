import StartCards from '../Cards/StartCards'

export default function ({startEvents, featuredEvents}) {
  
    return <div className='startPage'>
    {startEvents.length == 0
      ? featuredEvents.map((event) => (
            <StartCards event={event} key={Math.random() * 1000000}/>       
        ))
      : startEvents.map((event) => (
            <StartCards event={event}  key={Math.random() * 1000000}/>
        ))}
  </div>  
}

