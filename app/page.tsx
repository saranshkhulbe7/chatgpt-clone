import { SunIcon, BoltIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import { examplesData } from "../data/homepageExamplesData.js"

function HomePage() {
  return (
    <div className="flex flex-col text-white items-center justify-center h-screen">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div className="flex space-x-4 text-center">
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* Sun Icon */}
                    <SunIcon className="h-8 w-8"/>
                    <h2>Examples</h2>
                </div>
                <div className="space-y-4">
                    {examplesData.map((example)=>{
                        return <p className="infoText cursor-pointer hover:bg-[#202123]">"{example}" →</p>
                    })}
                    
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* Bolt Icon */}
                    <BoltIcon className="h-8 w-8"/>
                    <h2>Capabilities</h2>
                </div>
                <div className="space-y-4">
                    <p className="infoText">Remembers what user said earlier in the conversation</p>
                    <p className="infoText">Allows user to provide follow-up corrections</p>
                    <p className="infoText">Trained to decline inappropriate requests</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* ExclamationTriangle Icon */}
                    <ExclamationTriangleIcon className="h-8 w-8"/>
                    <h2>Limitations</h2>
                </div>
                <div className="space-y-4">
                    <p className="infoText">May occasionally generate incorrect information</p>
                    <p className="infoText">May occasionally produce harmful instructions or biased content</p>
                    <p className="infoText">Limited knowledge of world and events after 2021</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage