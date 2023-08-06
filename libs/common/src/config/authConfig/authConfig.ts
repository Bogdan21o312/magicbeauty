import { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { prisma } from '../../actions'

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null

        const users = await prisma.user.findMany()

        const currentUser = users.find(user => user.email === credentials.email)

        if (currentUser) {
          const { ...userWithoutPass } = currentUser

          return userWithoutPass as any
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/auth',
    newUser: '/auth',
    error: '/auth'
  }
}
