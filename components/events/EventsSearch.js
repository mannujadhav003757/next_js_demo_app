import React,{useRef} from 'react'
import Button from '../ui/Button'
import classes from './event-search.module.css'
export default function EventsSearch(props) {

    const yearInputRef = useRef()
    const monthInputRef = useRef()

    function submitHandler(event){
        event.preventDefault()

        const selectedYear= yearInputRef.current.value
        const selectedMonth = monthInputRef.current.value

        props.onSearch(selectedYear,selectedMonth)
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor='year'>Year</label>
                <select id='year' ref={yearInputRef}>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
        <div className={classes.control}>
            <label htmlFor="month">Month</label>
            <select id='month' style={{width:"auto"}} ref={monthInputRef}>
                <option value='1'>january</option>
                <option value='2'>february</option>
                <option value='3'>march</option>
                <option value='4'>april</option>
                <option value='5'>may</option>
                <option value='6'>june</option>
                <option value='7'>july</option>
                <option value='8'>august</option>
                <option value='9'>september</option>
                <option value='10'>october</option>
                <option value='11'>november</option>
                <option value='12'>december</option>
            </select>
        </div>
        <Button>Find Events</Button>
    </form>
  )
}
