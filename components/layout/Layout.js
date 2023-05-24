import React,{Fragment} from 'react'
import Mainheder from './Mainheader'

export default function Layout(props) {
  return (
    <Fragment>
      <Mainheder />
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}
