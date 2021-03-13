import React from 'react'

function ThermalLibDocs(){
    return(
        <div id="thermal-lib-docs" className="h-screen px-8 pt-24 pb-8 bg-gray-200 space-x-6 flex flex-row justify-center items-center">
            <div id="docs-sidebar" className="sticky h-full w-1/4 flex px-8 py-12 space-y-4 flex-col bg-white shadow-xl rounded-md">
                <a href="#content-about">About</a>
                <a href="#content-feature">Feature</a>
                <a href="#content-installation">Installation</a>
            </div>

            <div id="content" className="h-full w-3/4 px-8 py-12 bg-white">
                <div id="content-about">
                    <p>Juned</p>
                </div>
                <div id="content-feature">

                </div>
                <div id="content-installation">

                </div>
            </div>
        </div>
    )
}

export default ThermalLibDocs