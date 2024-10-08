import HeaderEnd from './HeaderEnd'
import HeaderStart from './HeaderStart'
import React from 'react'
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher'

export default function Header() {
    return ( 
        <div className='flex items-center justify-between p-3 border bottom-1'>
            <HeaderStart />
            <HeaderEnd />
        </div>
    )
}
