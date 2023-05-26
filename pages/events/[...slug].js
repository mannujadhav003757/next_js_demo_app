import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/events/EventList'
export default function FiltterdEventsPage() {
  const Router = useRouter()
  const forFilterParameters = Router.query.slug

  if(!forFilterParameters){
    return <p className="center">Loading...</p>
  }

  const filteredYear = forFilterParameters[0]
  const filterMonth = forFilterParameters[1]

  const numYear = +filteredYear
  const numMonth = filterMonth
  
  if(isNaN(numYear) || 
  isNaN(numMonth) || 
  numYear > 2030 || 
  numYear < 2021 || 
  numMonth < 1 || 
  numMonth > 12){
    return <h2 className='center' style={{marginTop:"30%"}}>Invalid filter please adjust your values...!</h2>
  }

  const filteredEvents = getFilteredEvents({
    year:numYear,
    month: numMonth
  })

  if(!filteredEvents || filteredEvents.length === 0){
    return <h2 className='center' style={{marginTop:"30%"}}>No events found on this filter Parameters</h2>
  }

  return (
    <>
    <EventList items={filteredEvents}/>
    </>
  )
}
