import { Button } from '@/components/ui/button'
import { CircleCheckBig } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher'

export default function HeaderStart() {
    return (
        <div className='flex items-center gap-2'>
            <Link className="flex items-center gap-2" href={'/'}>
                <Button variant="outline" size="icon">
                    <CircleCheckBig className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-blue-600" />
                </Button>
                <p className='text-lg font-bold'>Task<span className="text-blue-600">Exp.</span></p>
            </Link>
        </div>
    )
}