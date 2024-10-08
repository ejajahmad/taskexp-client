import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from 'react'
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher'
import { buttonVariants } from "@/components/ui/button"

export default function HeaderEnd() {
    return (
        <div className='flex items-center gap-2'>
            <ThemeSwitcher />
            <Link className={buttonVariants({ variant: "outline" })} href={'/auth/sign-in'}>Sign In</Link>
            <Link className={buttonVariants({})} href={'/auth/sign-up'}>Sign Up</Link>
        </div>
    )
}