import {Icon} from '@iconify/react'
import {useState} from "react"
import { ModeToggle } from './mode-toggle'
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home',
            href: '/'
        },
        {
            id: 2,
            link: 'deal search',
            href: '/dealsearch'
        },
        {
            id: 3,
            link: 'Contact Me',
            href: '/contact'
        },


    ]

  return (
    <div className='flex justify-between items-center w-full h-20 fixed px-4 z-10 bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-white'>
        <div>
            <Link to='/'><h1 className='font-pacifico text-4xl ml-2'>PC Game Deals</h1></Link>
        </div>

        <ul className='hidden md:flex md:items-center'>
            {links.map(({id, link, href}) => 
                (<li key={id} className='px-4 cursor-pointer capitalize font-medium text-slate-900 dark:text-white hover:scale-105 duration-200'><Link to={href}>{link}</Link></li>)
            )}
            <ModeToggle />
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <Icon className="text-3xl" icon="material-symbols:cancel-outline"/> : <Icon icon="lucide:align-justify" className='text-3xl'/>}
        </div> 

        
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-50 to-gray-300 dark:from-slate-950 dark:to-slate-800 text-slate-900 dark:text-white z-11'>
                <ModeToggle />
            {links.map(({id, link, href}) => 
                    (<li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to={href} onClick={()=>setNav(false)}>{link}</Link></li>)
                )}
                
            </ul>
        )}
        
    </div>
    
  )
}
