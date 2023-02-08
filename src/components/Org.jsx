import { useState } from 'react'

function Org() {

    const cyberSecurityTec = (
        <div className='flex flex-col justify-center items-center'>
            <div className='avatar w-40 h-40 mb-10 border-accent border-2 border-solid rounded-full'>
                <div className='rounded-full'>
                    <img src='/PortFolio-Adrian/LogoCyber.png' />
                </div>
            </div>

            <p className='text-center text-xl w-1/2'>
                <a className='text-accent'>
                    CyberSecurity Tec
                </a> is a school club commited to educating people about ways of protecting yourself in the digital realm.
            </p>
            <br />
            <p className='text-center text-xl w-1/2'>I have worked in this organization since 2022 and my duties have ranged from working on a Secure admin website for a non-profit organization as our social work (Made with AngularJS and Mysql) to organization of events to strengthen the comunity.</p>
        </div>
    )

    const proyecto99 = (
        <div className='flex flex-col justify-center items-center'>
            <div className='avatar w-40 h-40 mb-10 border-accent border-2 border-solid rounded-full'>
                <div className='rounded-full'>
                    <img src='/PortFolio-Adrian/P99.jpeg' />
                </div>
            </div>

            <p className='text-center text-xl w-1/2'>
                <a className='text-accent'>
                    Proyecto 99
                </a> is a non-profit organization dedicated to giving free quality education for everyone.
            </p>
            <br />
            <p className='text-center text-xl w-1/2'>I worked with this organization through the winter of 2022-2023 and my main job was building a web application where the administrators can manage classes, students and teachers, and the users can look for information about the classes and sign up to any course they like.<br /><br /> This website was built with ReactJS, ExpressJS, MongoDB and Material UI. And as a result of my continuous work, I now feel very agile in all of this technologies</p>
        </div>
    )

    const peninsulaINV = (
        <div className='flex flex-col justify-center items-center'>
            <div className='avatar w-40 h-40 mb-10 border-accent border-2 border-solid rounded-full'>
                <div className='rounded-full'>
                    <img src='/PortFolio-Adrian/Peninsula.png' />
                </div>
            </div>

            <p className='text-center text-xl w-1/2'>
                <a className='text-accent'>
                    Peninsula Investments
                </a> is a company dedicated to helping people find the best properties at the Peninsula of Yucatan as an investment, an strategic point for comerce or just a place to live

            </p>
            <br />
            <p className='text-center text-xl w-1/2'>My main contribution to this company was through helping build their main website as a contact point for their future clients.</p>
        </div>
    )
    const [content, setContent] = useState(cyberSecurityTec)
    return (
        <div className="w-full h-[80vh] mt-10 flex flex-col justify-between items-center">
            <div id="info h-3/4">
                {content}
            </div>
            <div className="btn-group h-1/4">
                <button className="btn focus:btn-active" onClick={() => setContent(cyberSecurityTec)}>cyberSecurity Tec</button>
                <button className="btn focus:btn-active" onClick={() => setContent(proyecto99)}>Proyecto 99</button>
                <button className="btn focus:btn-active" onClick={() => setContent(peninsulaINV)}>Peninsula INV</button>
            </div>
        </div>
    )
}

export default Org
