import React from 'react'

function ThermalLibDocs(){
    return(
        <div id="thermal-lib-docs" className="h-auto md:h-screen px-3 md:px-8 pt-24 pb-8 bg-gray-200 md:space-x-6 flex flex-row justify-center items-center">
            <div id="docs-sidebar" className="hidden sticky h-full w-1/4 font-medium md:flex px-8 py-12 space-y-4 flex-col bg-white shadow-xl rounded-md">
                <a href="#content-about">About</a>
                <a href="#content-installation">Installation</a>
            </div>

            <div id="content" className="h-full w-full space-y-8 md:w-3/4 px-4 md:px-8 py-12 bg-white text-gray-900">
                <div id="content-about" className="space-y-3">
                    <h1 className="text-3xl font-medium">Why ThermalLib?</h1>

                    <p>ThermalLib make paper/spigot plugin development more faster and easier without worrying plugin performance.</p>

                    <p>The utilities that we offer is allow developer to manage data traffic and import or export its data 
                        <br/> between yml, json and mysql.</p>
                    
                </div>

                <div id="content-installation" className="space-y-3">
                    <h1 className="text-3xl font-medium">Installation</h1>

                    <p>You may need to use maven or gradle to use ThermalLib, after you have maven or gradle installed on your projects you can follow this steps</p>

                    <div className="space-y-6">
                        <div>
                            <h4><span className="font-medium text-gray-700">Step 1.</span> Add JitPack repository to build file</h4>
                            <div className="px-3 py-2 rounded-md bg-gray-900 text-gray-100">
                                <code>
                                    'https://jitpack.io'
                                </code>
                            </div>
                        </div>

                        <div>
                            <h4><span className="font-medium text-gray-700">Step 2.</span> Add the dependency</h4>
                            <div className="px-3 py-2 rounded-md bg-gray-900 text-gray-100">
                                <code>
                                    implementation 'com.github.TiveCS:thermal-lib:64489c3efe'
                                </code>
                            </div>
                        </div>

                        <h4><span className="font-medium text-gray-700">Step 3.</span> Library ready to use</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThermalLibDocs