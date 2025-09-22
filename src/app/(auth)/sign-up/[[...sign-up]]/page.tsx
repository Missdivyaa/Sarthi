import { SignUp } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-8">
          <Button 
            asChild 
            variant="ghost" 
            className="text-gray-400 hover:text-gray-300 hover:bg-white/10"
          >
            <Link href="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Join Sarthi</h1>
            <p className="text-gray-400">Create your account and start creating amazing webinars</p>
          </div>
          
          <SignUp 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-transparent shadow-none border-none",
                headerTitle: "text-white text-xl font-semibold",
                headerSubtitle: "text-gray-400",
                socialButtonsBlockButton: "bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300",
                socialButtonsBlockButtonText: "text-white",
                formFieldInput: "bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500",
                formButtonPrimary: "bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-semibold py-3 rounded-lg transition-all duration-300",
                footerActionLink: "text-gray-400 hover:text-gray-300",
                identityPreviewText: "text-gray-300",
                formFieldLabel: "text-gray-300",
                dividerLine: "bg-white/20",
                dividerText: "text-gray-400",
              }
            }}
          />
          
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-gray-400 hover:text-gray-300 underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup