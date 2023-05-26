import React from 'react'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/EventsSearch'
import { useRouter } from 'next/router'
export default function AllEventsPage() {
  const events = getAllEvents()
  const Router = useRouter()

  const findEventHandler = (selectedYear,selectedMonth) =>{
    const fullPath = `/events/${selectedYear}/${selectedMonth}`
    Router.push(fullPath)
  }
  
  return (
    <div>
      <EventsSearch onSearch = {findEventHandler} />
      <EventList items={events} />
    </div>
  )
}
