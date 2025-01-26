import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar);
    const { user } = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const startSavingEvent = async( calendarEvent ) => {
        // TODO: Update event
        if( calendarEvent._id ){
            // Actualizamos el evento
            dispatch( onUpdateEvent( { ...calendarEvent } ) );
        } else {
            // Agregamos un nuevo evento
            const { data } = await calendarApi.post('/events/new', calendarEvent );

            dispatch( onAddNewEvent({ 
                ...calendarEvent, 
                id: data.event.id,
                user
            }) );
        }
    }

    const startDeletingEvent = () => {
        dispatch( onDeleteEvent() );
    }

    const startLodingEvents = async() => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents( data.events );
            dispatch( onLoadEvents( events ) );

        } catch (error) {
            console.log('Error cargando eventos');
            console.log(error);
        }
    }

    return {
        // Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent, // Si activeEvent es null, entonces no hay evento seleccionado y regresamos false

        // Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        startLodingEvents
    }
}