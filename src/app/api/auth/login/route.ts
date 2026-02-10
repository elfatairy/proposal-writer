import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()
    
    // Check password against environment variable
    const correctPassword = process.env.APP_PASSWORD
    
    if (!correctPassword) {
      return NextResponse.json(
        { error: 'Authentication not configured' },
        { status: 500 }
      )
    }

    if (password === correctPassword) {
      const response = NextResponse.json({ success: true })
      
      // Set a secure cookie that expires in 7 days
      response.cookies.set('auth-token', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      })
      
      return response
    }

    return NextResponse.json(
      { error: 'Invalid password' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
