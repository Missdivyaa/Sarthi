'use server'

import { prismaClient } from '@/lib/prismaClient'
import { currentUser } from '@clerk/nextjs/server'

export async function onAuthenticateUser() {
  try {
    const user = await currentUser()

    if (!user) {
      return {
        status: 403,
        message: 'No user found'
      }
    }

    // Validate required user data
    if (!user.id) {
      return {
        status: 400,
        message: 'Invalid user ID'
      }
    }

    if (!user.emailAddresses || user.emailAddresses.length === 0) {
      return {
        status: 400,
        message: 'No email address found'
      }
    }

    const userExists = await prismaClient.user.findUnique({
      where: {
        clerkId: user.id,
      },
    })

    if (userExists) {
      return {
        status: 200,
        user: userExists,
      }
    }

    // Safely construct user data with null checks
    const email = user.emailAddresses[0]?.emailAddress
    const firstName = user.firstName || ''
    const lastName = user.lastName || ''
    const fullName = `${firstName} ${lastName}`.trim() || email?.split('@')[0] || 'User'
    const profileImage = user.imageUrl || ''

    if (!email) {
      return {
        status: 400,
        message: 'Email address is required'
      }
    }

    const newUser = await prismaClient.user.create({
      data: {
        clerkId: user.id,
        email: email,
        name: fullName,
        profileImage: profileImage,
      },
    })

    if (!newUser) {
      return {
        status: 500,
        message: 'Failed to create user',
      }
    }

    return {
      status: 201,
      user: newUser,
    }
  } catch (error) {
    console.error('Authentication error:', error)
    return {
      status: 500, 
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}