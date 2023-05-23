import React from 'react'
import EventItem from './EventItem'
import classes from './event-list.module.css'
export default function EventList(props) {
    const {items} = props
  return (
    <ul className={classes.list}>
        {items.map(el => <EventItem 
        key={el.id} 
        id ={el.id} 
        title ={el.title} 
        location={el.location} 
        date={el.date} 
        image ={el.image}/>)}
    </ul>
  )
}
