import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="text-center p-8 max-w-md w-full bg-white rounded-lg shadow-md mx-auto">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">¡Upps! Esta página no se ha encontrado</h2>
        <p className="text-gray-600 mb-6">La página que estás buscando no existe o ha sido movida.</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound