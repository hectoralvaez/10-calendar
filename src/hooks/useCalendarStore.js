import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar);

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const startSavingEvent = async( calendarEvent ) => {
        // TODO: Aquí se haría la petición al backend
        
        // Todo sale bien
        if( calendarEvent._id ){
            // Actualizamos el evento
            dispatch( onUpdateEvent( { ...calendarEvent } ) );
        } else {
            // Agregamos un nuevo evento
            dispatch( onAddNewEvent({ 
                ...calendarEvent, 
                _id: new Date().getTime() // Este ID lo recibiremos del backend
            }) );
        }
    }

    const startDeletingEvent = () => {
        dispatch( onDeleteEvent() );
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
    }
}