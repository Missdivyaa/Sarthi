import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider"
import { Manrope } from "next/font/google";
import {ClerkProvider} from '@clerk/nextjs'
import "./globals.css";

const manrope=Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})


export const metadata: Metadata = {
  title: "Sarthi",
  description: "AI Powered Webinar Streaming & Sales Platform",
  icons: {
  icon: [
    { url: '/favicon.png', type: 'image/png' },
  ],
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#6B7280',
          colorBackground: '#000000',
          colorInputBackground: '#1A1A1A',
          colorInputText: '#FFFFFF',
          colorText: '#FFFFFF',
          colorTextSecondary: '#9CA3AF',
          colorNeutral: '#374151',
          colorSuccess: '#10B981',
          colorWarning: '#F59E0B',
          colorDanger: '#EF4444',
          borderRadius: '0.5rem',
        },
        elements: {
          formButtonPrimary: 'bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300',
          card: 'bg-gray-900 border border-gray-700 shadow-2xl',
          headerTitle: 'text-white text-2xl font-bold',
          headerSubtitle: 'text-gray-400',
          socialButtonsBlockButton: 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700 transition-all duration-300',
          socialButtonsBlockButtonText: 'text-white',
          formFieldInput: 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 rounded-lg',
          footerActionLink: 'text-gray-400 hover:text-gray-300 transition-colors duration-300',
          identityPreviewText: 'text-gray-300',
          formFieldLabel: 'text-gray-300 font-medium',
          dividerLine: 'bg-gray-700',
          dividerText: 'text-gray-400',
          formFieldSuccessText: 'text-green-400',
          formFieldErrorText: 'text-red-400',
          formFieldWarningText: 'text-yellow-400',
          formFieldInputShowPasswordButton: 'text-gray-400 hover:text-gray-300',
          formFieldInputShowPasswordIcon: 'text-gray-400',
          formFieldInputHidePasswordButton: 'text-gray-400 hover:text-gray-300',
          formFieldInputHidePasswordIcon: 'text-gray-400',
          formFieldInputShowPasswordButtonHover: 'text-gray-300',
          formFieldInputHidePasswordButtonHover: 'text-gray-300',
          formFieldInputShowPasswordIconHover: 'text-gray-300',
          formFieldInputHidePasswordIconHover: 'text-gray-300',
          formFieldInputShowPasswordButtonActive: 'text-gray-200',
          formFieldInputHidePasswordButtonActive: 'text-gray-200',
          formFieldInputShowPasswordIconActive: 'text-gray-200',
          formFieldInputHidePasswordIconActive: 'text-gray-200',
          formFieldInputShowPasswordButtonFocus: 'text-gray-300',
          formFieldInputHidePasswordButtonFocus: 'text-gray-300',
          formFieldInputShowPasswordIconFocus: 'text-gray-300',
          formFieldInputHidePasswordIconFocus: 'text-gray-300',
          formFieldInputShowPasswordButtonDisabled: 'text-gray-500',
          formFieldInputHidePasswordButtonDisabled: 'text-gray-500',
          formFieldInputShowPasswordIconDisabled: 'text-gray-500',
          formFieldInputHidePasswordIconDisabled: 'text-gray-500',
          formFieldInputShowPasswordButtonHoverDisabled: 'text-gray-500',
          formFieldInputHidePasswordButtonHoverDisabled: 'text-gray-500',
          formFieldInputShowPasswordIconHoverDisabled: 'text-gray-500',
          formFieldInputHidePasswordIconHoverDisabled: 'text-gray-500',
          formFieldInputShowPasswordButtonActiveDisabled: 'text-gray-500',
          formFieldInputHidePasswordButtonActiveDisabled: 'text-gray-500',
          formFieldInputShowPasswordIconActiveDisabled: 'text-gray-500',
          formFieldInputHidePasswordIconActiveDisabled: 'text-gray-500',
          formFieldInputShowPasswordButtonFocusDisabled: 'text-gray-500',
          formFieldInputHidePasswordButtonFocusDisabled: 'text-gray-500',
          formFieldInputShowPasswordIconFocusDisabled: 'text-gray-500',
          formFieldInputHidePasswordIconFocusDisabled: 'text-gray-500',
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${manrope.variable} antialiased`}
          suppressHydrationWarning
        >
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
