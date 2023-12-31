import NextAuth from 'next-auth'
import { authConfig } from '@magicbeauty/common/server'

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
