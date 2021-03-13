import React from 'react'
import {Link} from 'react-router-dom'

function ThermalLib(){
    return(
        <div className="bg-gray-200">
            <div id="header" className="z-10 h-screen flex flex-col justify-center items-center">
                <div id="title" className="text-center mb-12 space-y-4">
                    <h1 className="text-gray-900 text-4xl md:text-5xl font-semibold">Thermal Lib</h1>
                    <p className="text-gray-600 font-medium">Utility library for Paper/Spigot plugin development</p>
                </div>

                <div id="quick-access" className="flex flex-col text-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <Link to="/thermal-lib-docs" className="md:w-auto px-8 py-2 rounded-lg bg-gray-900 hover:bg-gray-700 text-gray-100 font-medium">Documentation</Link>
                    <a className="px-8 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium" href="https://github.com/TiveCS/thermal-lib">
                        GitHub</a>
                </div>
            </div>

        </div>
    )
}

export default ThermalLib