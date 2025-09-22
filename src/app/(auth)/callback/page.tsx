import { onAuthenticateUser } from '@/actions/auth'
import { redirect } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

//TODO: Implement the auth callback page
export const dynamic = 'force-dynamic'

const AuthCallbackPage = async () => {
  const auth = await onAuthenticateUser()

  if (auth.status === 200 || auth.status === 201) {
    redirect('/home')
  }
  
  // For any error status, redirect to home page
  redirect('/')

  // Show loading state while processing
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-6">
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl max-w-md w-full">
        <CardContent className="p-8 text-center">
          {/* Logo */}
          <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-white font-bold text-2xl">S</span>
          </div>

          {/* Loading State */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Authenticating...</h1>
            <p className="text-gray-400">
              Please wait while we verify your authentication.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-sm text-gray-500">
              Having trouble? Contact our support team.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthCallbackPage