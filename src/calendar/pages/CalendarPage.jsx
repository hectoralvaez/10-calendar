import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { CalendarEvent, CalendarModal, NavBar } from "../"

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

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const  style = {
      backgroundColor: '#0095ff',
      borderRadius: '0px',
      opacity: 0.8,
      color: '#fff'
    }
    
    return { style }

  }

  const onDoubleClick = ( event ) => {
    console.log({ doubleClick: event});
  }

  const onSelect = ( event ) => {
    console.log({ click: event});
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event);
    setLastView( event );
  }

  return (
    <>
      <NavBar />
      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView= { lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 90px)' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

      <CalendarModal />

    </>
  )
}
