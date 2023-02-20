import '../styles/globals.css'

import { SessionProvider } from '../components/SessionProvider'
import { authOptions } from '../pages/api/auth/[...nextAuth]'
import { getServerSession } from 'next-auth'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session =  await getServerSession(authOptions)
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          <div className='flex'>

          {/* Sidebar */}

          {/* ClientProvider - Notification*/}

          <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
        </SessionProvider>
      </body>
    </html>
  )
}
