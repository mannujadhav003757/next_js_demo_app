import React,{Fragment} from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-details/event-summary'
import EventLogistics from '../../components/event-details/event-logistics';
import EventContent from '../../components/event-details/event-content'
export default function EventDetailPage() {
  const Router = useRouter();
  const eventId = Router.query.eventId
  const event = getEventById(eventId)
  console.log("$$$$$$$$$$$$$$",event)
  if(!event){
    return <p>Ooppsss...!! no event found..!!</p>
  }
  return (
  <Fragment>
    <EventSummary title={event.title} />
    <EventLogistics 
    date={event.date} 
    address={event.location}
    image={event.image}
    imageAlt={event.title}
    />
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
  </Fragment>
  )
}
