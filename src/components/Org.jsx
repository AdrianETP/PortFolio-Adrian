import { useState } from 'react'

function Org() {

    const cyberSecurityTec = (
        <div className='flex flex-col justify-center items-center'>
            <div className='avatar w-40 h-40 mb-10 border-accent border-2 border-solid rounded-full'>
                <div className='rounded-full'>
                    <img src='/Cloro.png' />
                </div>
            </div>

            <p className='text-center text-xl w-1/2'>
                <a>
                    CyberSecurity Tec
                </a> is a school club commited to educating people about ways of protecting yourself in the digital realm
            </p>
            <p className='text-center text-xl w-1/2'>I have worked in this organization since 2022 and my duties have ranged from working on a Secure admin website for a non-profit organization as our social work to organization of events to strengthen the comunity</p>
        </div>
    )
    const [content, setContent] = useState(cyberSecurityTec)
    return (
        <div className="w-full h-full mt-10 flex flex-col justify-between items-center">
            <div id="info h-3/4">
                {content}
            </div>
            <div className="btn-group h-1/4">
                <button className="btn focus:btn-active" onClick={() => setContent(cyberSecurityTec)}>cyberSecurity Tec</button>
                <button className="btn focus:btn-active" onClick={() => setContent("button 2")}>Proyecto 99</button>
                <button className="btn focus:btn-active" onClick={() => setContent("button 3")}>Peninsula INV</button>
            </div>
        </div>
    )
}

export default Org
