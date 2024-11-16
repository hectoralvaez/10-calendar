import { Calendar, dateFnsLocalizer } from 'react-big-calendar'

import { addHours, format, parse, startOfWeek, getDay } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { NavBar } from "../"

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})


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
  return (
    <>
      <NavBar />
      <Calendar
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 90px)' }}
      />
    </>
  )
}
