import { createSlice } from '@reduxjs/toolkit';
// import { addHours } from 'date-fns';

// const tempEvent = {
//   _id: new Date().getTime(), // Este ID lo recibiremos del backend
//   title: 'Cumpleaños',
//   notes: 'Comprar pastel',
//   start: new Date(),
//   end: addHours( new Date(), 2),
//   bgColor: '#fafafa',
//   user: {
//     _id: '1',
//     name: 'Héctor'
//   }
// }


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true,
        events: [
            // tempEvent
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
        onDeleteEvent: (state) => {
            // Si hay un evento activo en el estado actual (con esto evitamos el error de borrar un evento que no existe)
            if ( state.activeEvent ) { 
                // Eliminamos el evento activo del estado
                state.events = state.events.filter( event => event._id !== state.activeEvent._id ); 
                state.activeEvent = null;
            }
        },
        onLoadEvents: (state, { payload = [] }) => {
            state.isLoadingEvents = false;
            // state.events = payload;

            payload.forEach( event => {
                const exist = state.events.some( dbEvent => dbEvent.id === event.id );
                if ( !exist ) {
                    state.events.push( event );
                }
            });
        }
    }
});


// Action creators are generated for each case reducer function
export const { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onLoadEvents } = calendarSlice.actions;