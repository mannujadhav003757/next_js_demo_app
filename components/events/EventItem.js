import React from 'react'
import Link from "next/link"
import classes from"./event-item.module.css"
import Button from '../ui/Button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
export default function EventItem(props) {
    const {title,image,date,location,id} = props
    const readableDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year : 'numeric'
    })
    console.log("*************",title)
    const fromattedAddress = location.replace(', ','\n')
    const exploreLink = `/events/${id}`
  return (
    <li className={classes.item}>
        <img src={`/${image}`} alt={title}/>
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.Date}>
                <span className={classes.icon}><DateIcon /></span>
                <span><time>{readableDate}</time></span>
            </div>
            </div>
            <div className={classes.address}>
                <AddressIcon />
                <address>{fromattedAddress}</address>
            </div>
            <div className={classes.actions}> 
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
            </div>
        </div>
    </li>
  )
}
