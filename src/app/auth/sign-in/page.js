'use client'

import Header from "@/components/global/header/Header";
import HeaderStart from "@/components/global/header/HeaderStart";
import Image from "next/image";
import SignInForm from "@/components/global/forms/auth/SignInForm";
import ThemeSwitcher from "@/components/global/theme-switcher/ThemeSwitcher";
import { useRef } from "react";

export default function SignIn() {
    const headerRef = useRef(null);
    return (
        <div >
            <div className='flex items-center justify-center p-3 border bottom-1'
                ref={headerRef}
            >
                <HeaderStart />
            </div>
            <div className={`flex items-center justify-center`}
                style={{ height: `calc(100vh - ${headerRef?.current?.clientHeight + 2}px)` }}
            >
                <SignInForm />
            </div>
        </div>
    );
}
