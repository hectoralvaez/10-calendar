import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(), // Este ID lo recibiremos del backend
  title: 'Cumpleaños',
  notes: 'Comprar pastel',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '1',
    name: 'Héctor'
  }
}


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push( payload );
            state.activeEvent = null;
        },
        onUpdateEvent: (state, { payload } ) => {
            state.events = state.events.map( event => {
                if ( event._id === payload._id ) {
                    // Si el evento es el que estamos actualizando, retornamos el payload
                    return payload;
                }
                // Si no, retornamos el evento tal cual está
                return event;
            });
        },
    }
});


// Action creators are generated for each case reducer function
export const { onAddNewEvent, onSetActiveEvent, onUpdateEvent } = calendarSlice.actions;