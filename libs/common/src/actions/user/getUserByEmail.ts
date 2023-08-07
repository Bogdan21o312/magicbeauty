import { prisma } from '../lib'

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  })

  if (user) {
    return user
  }
}
