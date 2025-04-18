import React from 'react'

function BekerIA() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="text-center p-10 max-w-2xl w-full mx-auto">
        <h1 className="text-5xl font-bold text-blue-700 mb-6">Bekr IA</h1>
        <div className="bg-white p-8 rounded-xl shadow-lg w-full">
          <p className="text-xl text-gray-700 mb-6">
            Soluciones inteligentes impulsadas por la última tecnología en inteligencia artificial.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 w-full">
            <div className="bg-blue-50 p-4 rounded-lg shadow flex-1 min-w-[250px]">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Innovación</h3>
              <p className="text-gray-600">Tecnologías de vanguardia para resolver problemas complejos.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow flex-1 min-w-[250px]">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Precisión</h3>
              <p className="text-gray-600">Resultados confiables con alta exactitud.</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Conocer más
          </button>
        </div>
      </div>
    </div>
  )
}

export default BekerIA