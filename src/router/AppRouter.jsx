import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if ( status === 'checking' ) {
    return (
      <h3>Cargando...</h3>
    )
  }

  return (
    <Routes>
        {
          (status === 'not-authenticated')
            ? <Route path="/auth/*" element={ <LoginPage /> } />
            : <Route path="/*" element={ <CalendarPage /> } />
        }
        {/* A esta ruta en principio no tendría que llegar ningún usuario, pero es un "Fail-Safe", una ruta a prueba de fallos */}
        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
