'use client'

import Header from "@/components/global/header/Header";
import { redirect } from 'next/navigation'
import { useEffect } from "react";

export default function Auth() {
    useEffect(() => {
        redirect('/auth/sign-in')
    }, [])
    return <></>
}