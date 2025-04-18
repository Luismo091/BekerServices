import React from 'react'

const WebUnderConstruction = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800">
            {/* Frosted Glass Container */}
            <div className="backdrop-filter backdrop-blur-lg bg-white/30 dark:bg-gray-800/40 rounded-lg shadow-2xl p-8 max-w-lg w-full text-center border border-white/20">
                <div className="mb-6">
                    <svg className="w-24 h-24 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                </div>
                <h1 className="text-4xl font-bold text-white mb-4 text-shadow special-gothic-expanded-one-regular">Web En Construcción</h1>
                <p className="text-lg text-white mb-6">
                    Estamos trabajando para mejorar nuestra página web y brindarle una mejor experiencia.
                </p>
                <p className="text-md text-white/80">
                    Por favor, vuelva a visitarnos pronto.
                </p>

            </div>
        </div>
    )
}

export default WebUnderConstruction
