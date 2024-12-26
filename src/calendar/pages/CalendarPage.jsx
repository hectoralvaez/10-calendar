import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, NavBar } from "../"

import { localizer, getMessagesES } from '../../helpers'
import { useUiStore, useCalendarStore } from '../../hooks'

export const CalendarPage = () => {

  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();
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
    openDateModal();
  }

  const onSelect = ( event ) => {
    console.log({ click: event});
    setActiveEvent( event );
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
      <FabAddNew />
      <FabDelete />

    </>
  )
}
