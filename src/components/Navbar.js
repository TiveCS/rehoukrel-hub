import React from 'react'
import {Link} from "react-router-dom"

import "../index.css"

import GithubIcon from '../img/github.svg'

function Navbar(){
    return(

        <nav className="fixed z-10 w-screen h-16 px-6 md:px-24 font-medium bg-gray-100 text-gray-900 shadow-md flex flex-row justify-between items-center">
            <Link className="hover:text-gray-300" to="/">Home</Link>

            <div className="space-x-8 flex flex-row justify-between">
                <Link className="hidden md:block hover:text-gray-300" to="/thermal-lib-docs">Documentation</Link>
                <Link className="block md:hidden hover:text-gray-300" to="/thermal-lib-docs">Docs</Link>
                
                <a className="hover:text-gray-300" href="https://github.com/TiveCS/thermal-lib">
                    <img className="h-auto w-6" alt="GitHub" src={GithubIcon} />
                </a>
            </div>
        </nav>

    )
}

export default Navbar