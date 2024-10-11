'use client'

import * as yup from 'yup'

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import AuthService from '@/services/AuthService'
import { Button } from "@/components/ui/button"
import ForgotPasswordForm from './ForgotPasswordForm'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { yupResolver } from '@hookform/resolvers/yup'

// Define validation schema using Yup
const signInSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

export default function SignInForm() {
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    const router = useRouter()
    const {toast} = useToast()

    // React Hook Form setup
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(signInSchema),
    })

    // Handle Sign In
    const handleSignIn = async (data) => {
        try {
            await AuthService.signin(data)
            toast({ title: 'Success', description: 'Signed in successfully!' })
            window.location.reload()
        } catch (error) {
            console.error(error)
            if (error?.response?.data) {
                toast({ title: 'Error', description: error.response.data.message, status: 'error' })
            }
        }
    }

    return (
        isForgotPassword ? (
            <ForgotPasswordForm />
        ) : (
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Enter your email and password to sign in.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    {...register('email')} // Hook form register
                                />
                                    {errors.email && 
                                <small className="text-red-500">{errors.email.message}</small>
                                }
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    placeholder="Enter your password"
                                    type="password"
                                    {...register('password')} // Hook form register
                                />
                                {errors.password && <small className="text-red-500">{errors.password.message}</small>}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start">
                        <Button className="w-full" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Signing In...' : 'Sign In'}
                        </Button>
                        <Button variant="link" className="mt-2 p-0 h-auto" onClick={() => setIsForgotPassword(true)}>
                            Forgot password?
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        )
    )
}
