# Authentication Setup

This project uses a simple password-based authentication system that requires no database.

## Local Development Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and set a strong password:
   ```
   APP_PASSWORD=your-secure-password-here
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Navigate to `http://localhost:3000` - you'll be redirected to the login page
5. Enter your password to access the application

## Vercel Deployment Setup

1. Push your code to GitHub (make sure `.env.local` is NOT committed)

2. Import your project to Vercel

3. In Vercel, go to your project settings → Environment Variables

4. Add the following environment variable:
   - **Key:** `APP_PASSWORD`
   - **Value:** Your secure password
   - **Environment:** Production (and optionally Preview/Development)

5. Redeploy your project

6. When you visit your deployed URL, you'll be prompted to log in

## Security Notes

- The password is stored in environment variables only
- Authentication is cookie-based with a 7-day expiration
- Cookies are httpOnly and secure in production
- All routes except `/login` and `/api/auth/*` require authentication
- Use a strong, unique password that you don't use elsewhere

## Logging Out

- Click the "Logout" button in the top-right corner of the application
- Your session will be cleared and you'll be redirected to the login page

## Changing the Password

1. Update the `APP_PASSWORD` in your `.env.local` (local) or Vercel environment variables (production)
2. All existing sessions will become invalid after the password change
3. Users will need to log in again with the new password
