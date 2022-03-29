import React from 'react'
import Image from 'next/image'

const Dialog = () => {
    return (
        <section className="section_dialog mt-9">
            <div className={`container`}>
                <div className="flex bg-zinc-200 px-5 py-5 color_black items-center">
                    <div className="left w-2/5 xl:w-1/3 text-center">
                        <h3 className="text-sm xl:text-lg font-thin leading-none tracking-tighter">Speak out. Be heard. <br />
                            <strong className="font-bold text-xl xl:text-3xl">Be counted</strong>
                        </h3>
                    </div>
                    <div className="right font-thin text-lg pl-2 pr-2 leading-snug tracking-tighter">
                        <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
                    </div>
                    <button className="close"><Image src="/images/close.svg" alt="Close" width={30} height={30}/></button>
                </div>
            </div>
        </section>
    )
}

export default Dialog