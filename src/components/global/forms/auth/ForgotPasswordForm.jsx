'use client'

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SignInForm from "./SignInForm"
import { useState } from 'react'

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [step, setStep] = useState(1)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSignIn, setIsSignIn] = useState(false) 

    const switchToSignIn = () => {
        setIsSignIn(true)
    }

    const handleEmailSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            // Simulating an API call to send reset code
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log('Reset code sent to:', email)
            setStep(2)
        } catch (err) {
            setError('Failed to send reset code. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleCodeSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            // Simulating an API call to verify code
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log('Code verified:', code)
            setStep(3)
        } catch (err) {
            setError('Invalid code. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const handlePasswordReset = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.')
            setIsLoading(false)
            return
        }

        try {
            // Simulating an API call to reset password
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log('Password reset for:', email)
            setStep(4)
        } catch (err) {
            setError('Failed to reset password. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        isSignIn ? <SignInForm /> : <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Reset Password</CardTitle>
                <CardDescription>
                    {step === 1 && "Enter your email to receive a reset code."}
                    {step === 2 && "Enter the code sent to your email."}
                    {step === 3 && "Enter your new password."}
                    {step === 4 && "Password reset successful!"}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {step === 1 && (
                    <form onSubmit={handleEmailSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        {error && (
                            <Alert variant="destructive" className="mt-4">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send Reset Code'}
                        </Button>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleCodeSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="code">Reset Code</Label>
                                <Input
                                    id="code"
                                    placeholder="Enter the reset code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        {error && (
                            <Alert variant="destructive" className="mt-4">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                            {isLoading ? 'Verifying...' : 'Verify Code'}
                        </Button>
                    </form>
                )}
                {step === 3 && (
                    <form onSubmit={handlePasswordReset}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input
                                    id="new-password"
                                    placeholder="Enter new password"
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="confirm-password">Confirm New Password</Label>
                                <Input
                                    id="confirm-password"
                                    placeholder="Confirm new password"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        {error && (
                            <Alert variant="destructive" className="mt-4">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                            {isLoading ? 'Resetting...' : 'Reset Password'}
                        </Button>
                    </form>
                )}
                {step === 4 && (
                    <Alert className="mt-4">
                        <AlertDescription>Your password has been successfully reset. You can now log in with your new password.</AlertDescription>
                    </Alert>
                )}
            </CardContent>
            <CardFooter className="flex justify-between">
                {step > 1 && step < 4 && (
                    <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>
                )}
                <Button variant="link" className="mt-2 p-0 h-auto" onClick={() => switchToSignIn()}>
                    Back to Sign In
                </Button>
            </CardFooter>
        </Card>
    )
}