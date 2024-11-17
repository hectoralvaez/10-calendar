import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { NavBar } from "../"

import { localizer, getMessagesES } from '../../helpers'

const events = [{
  title: 'Cumpleaños',
  notes: 'Comprar pastel',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '1',
    name: 'Héctor'
  }
}]

export const CalendarPage = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    console.log({event, start, end, isSelected});

    const  style = {
      backgroundColor: '#0095ff',
      borderRadius: '0px',
      opacity: 0.8,
      color: '#fff'
    }
    
    return { style }

  }

  return (
    <>
      <NavBar />
      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 90px)' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
      />
    </>
  )
}
