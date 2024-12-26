import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store";

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
        } else {
            // Agregamos un nuevo evento
            dispatch( onAddNewEvent({ 
                ...calendarEvent, 
                _id: new Date().getTime() // Este ID lo recibiremos del backend
            }) );
        }
    }

    return {
        // Propiedades
        activeEvent,
        events,

        // Métodos
        setActiveEvent,
        startSavingEvent,
    }
}