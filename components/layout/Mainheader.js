import Link from 'next/link'
import React from 'react'
import classes from './main-header.module.css'
export default function Mainheder() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
      <Link href="/">Demo_App</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <Link href="/events">Browse All Events</Link>
        </ul>
      </nav>
    </header>
  )
}
