import React from 'react'
import { Switch } from '@chakra-ui/react';
import logo from '../src/assets/logo.svg'
import settings from '../src/assets/settings.svg'
import close from '../src/assets/close-circle.svg'
import monitor from '../src/assets/monitor.svg'
import tab from '../src/assets/tab.svg'
import camera from '../src/assets/video-camera.svg'
import microphone from '../src/assets/microphone.svg'

const Popup = () => {
  return (
    <div className='w-[252px] flex flex-col mx-6 mt-6 pb-8'>

        <div className='flex flex-col gap-y-4'>

            <div className='flex justify-between'>

                <div className='flex gap-x-2'>
                    <img src={logo} alt='logo'/>
                    <h1 className=''>HelpMeOut</h1>
                </div> 
                <div className='flex gap-x-3'>
                    <img src={settings} alt='settings-icon'/>
                    <img src={close} alt='close-button-icon'/>
                </div>
                
            </div>

            <p className=''>This extension helps you record and share help videos with ease</p>
        </div>
        
        <div class='flex flex-col gap-y-6'>
            <div className='mt-8'>
                <div className='flex justify-between'>

                    <div className='flex flex-col pl-4'>
                        <img className='w-8 h-8' src={monitor} alt='fullscreen-icon'/>
                        <p>Full screen</p>
                    </div>

                    <div className='flex flex-col pr-4'>
                        <img className='w-8 h-8' src={tab} alt='current-tab-icon'/>
                        <p>Current Tab</p>
                    </div>

                </div>
            </div>

            <div className='flex justify-between border border-[#100A42] border-solid rounded-2xl py-3 pr-4 pl-3'>
                <div className='flex text-center gap-x-2'>
                    <img src={camera} alt='video-camera-icon'/>
                    <p>Camera</p>
                </div>
                <Switch colorScheme='navy'/>
            </div>

            <div className='flex justify-between border border-[#100A42] border-solid rounded-2xl py-3 pr-4 pl-3'>
                <div className='flex text-center gap-x-2'>
                    <img src={microphone} alt='microphone-icon'/>
                    <p>Audio</p> 
                </div>
                <Switch colorScheme='navy' />
            </div>
        </div>
        <button onClick={record} className='bg-[#100A42] hover:bg-[#171434] active:bg-[#0e0c21] text-white border border-solid rounded-2xl py-3 mt-6'>Start Recording</button>
        <button onClick={stoprecord} className='bg-[#100A42] hover:bg-[#171434] active:bg-[#0e0c21] text-white border border-solid rounded-2xl py-3 mt-6'>Stop Recording</button>


    </div>
  )
}

const record = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"}, function(response) {
            if(!chrome.runtime.lastError) {
                console.log(response)
            }
            else {
                console.log(chrome.runtime.lastError, "error line 81")
            }
        })
    }) 
}

const stoprecord = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "stopvideo"}, function(response) {
            if(!chrome.runtime.lastError) {
                console.log(response)
            }
            else {
                console.log(chrome.runtime.lastError, "error line 94")
            }
        })
    }) 
}
export default Popup