import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Pre, Tabs } from 'nextra/components'

const ButtonExplorer = () => {
    const COLORS = ['black', 'white']
    const THEME = ['light', 'dark', 'invert', 'static']
    const HOVER = ['pop', 'glow', 'flare', 'none']
    const FRAMEWORKS = ['HTML', 'React', 'Svelte', 'Vue']
    const CLASS_MAPPING = {
        black: {
            "light": "",
            "dark": "hello-btn-black-on-dark",
            "invert": "hello-btn-black-and-invert",
            "static": "hello-btn-black-and-static"
        },
        white: {
            "light": "hello-btn-white-on-light",
            "dark": "hello-btn-white-on-dark",
            "invert": "hello-btn-white-and-invert",
            "static": "hello-btn-white-and-static"
        },
    }
    const HOVER_MAPPING = {
        "pop": "",
        "glow": "hello-btn-hover-glow",
        "flare": "hello-btn-hover-flare",
        "none": "hello-btn-hover-none"
    }

    const [ color, setColor ] = useState(COLORS[0])
    const [ theme, setTheme ] = useState(THEME[0])
    const [ hover, setHover ] = useState(HOVER[0])
    const [ loading, setLoading ] = useState(false)
    const docIsAvailable = typeof document !== 'undefined'
    const lightButton: HTMLElement = docIsAvailable && document.querySelector("#button-explorer-light button")
    const darkButton: HTMLElement = docIsAvailable && document.querySelector("#button-explorer-dark button")

    const buttonClass = clsx('hello-btn', CLASS_MAPPING[color][theme], HOVER_MAPPING[hover], loading && 'hello-btn-loader', )
    
    useEffect(() => {
        if(!lightButton || !darkButton)
            return

        //TBD: For some reason useRef() ref.current.focus() is not working
        lightButton.focus()
        // buttonRefs.light.current.focus()
        setTimeout(()=>{
            lightButton.blur()
            darkButton.focus()
            setTimeout(() => {
                darkButton.blur()
            }, 500);
        }, 500)
    }, [color, theme, hover])

    return (
        <section className='rounded-t-lg overflow-hidden mt-6'>
            <div className='bg-[#1D2429] flex text-white'>
                <div className='bg-gray-800 px-2 py-3 flex flex-wrap gap-2 justify-around items-center flex-1 relative'>
                    <span className='uppercase absolute -rotate-90 left-0 font-bold opacity-50' style={{fontSize: '9px'}}>Style</span>
                    
                    <div className='flex flex-col items-center'>
                        <span className='text-xs'>Color</span>
                        <div className='flex gap-0.5 border border-black p-0.5 rounded-md ml-3 mt-1'>
                            {COLORS.map(i => <button key={i} className={clsx("capitalize rounded-md px-3", color === i && "bg-black")} onClick={() => setColor(i)}>{i}</button>)}
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='flex justify-around w-full'>
                            <span className='text-xs'>Theme Ignore</span>
                            <span className='text-xs'>Theme Aware</span>
                        </div>
                        <div className='flex gap-0.5 border border-black p-0.5 rounded-md mt-1'>
                            {THEME.map(i => <button key={i} className={clsx("capitalize rounded-md px-3", theme === i && "bg-black")} onClick={() => setTheme(i)}>{i}</button>)}
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <span className='text-xs'>Hover</span>
                        <div className='flex gap-0.5 border border-black p-0.5 rounded-md mt-1'>
                            {HOVER.map(i => <button key={i} className={clsx("capitalize rounded-md px-3", hover === i && "bg-black")} onClick={() => setHover(i)}>{i}</button>)}
                        </div>
                    </div>
                </div>
                <div className='bg-gray-700 p-2 flex justify-around items-center relative'>
                    <span className='uppercase absolute -rotate-90 left-0 font-bold opacity-50' style={{fontSize: '9px'}}>State</span>
                    <div className='flex gap-0.5 border border-black p-0.5 rounded-md ml-5'>
                        <button className={clsx("capitalize rounded-md px-2", loading && "bg-black")} onClick={() => setLoading(!loading)}>Loading</button>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col md:flex-row rounded-b-lg overflow-hidden'>
                {["light", "dark"].map(i => (
                    <div key={i} id={"button-explorer-" + i} className="md:w-1/2 py-10 flex items-center justify-center relative">
                        <span className={clsx('uppercase absolute -rotate-90 -left-3.5 font-bold opacity-50', i === "light" ? "text-black" : "text-white")} style={{fontSize: '9px'}}>{i} Mode</span>
                        <button className={buttonClass}>ō&nbsp;&nbsp;&nbsp;Continue with Hellō</button>
                    </div>
                ))}
            </div>

            <Pre hasCopyCode={true}>
                <code data-language="html" data-theme="default">
{`<button class="${buttonClass}">
  ō&nbsp;&nbsp;Continue with Hellō
</button>`}
                </code>
           </Pre>

            {/* <Tabs items={FRAMEWORKS}>
                {FRAMEWORKS.map(i => (
                    <Tabs.Tab key={i}>
           <Pre hasCopyCode={true}>
                <code data-language="html" data-theme="default">
{`<button ${i === 'React' ? 'className' : 'class'}="${buttonClass}">
  ō&nbsp;&nbsp;Continue with Hellō
</button>`}
                </code>
           </Pre>
                    </Tabs.Tab>
                ))}
            </Tabs> */}
        </section>
    )
}

export default ButtonExplorer