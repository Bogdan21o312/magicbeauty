import { prisma } from '../lib'

export async function getAllUsers() {
  const allUsers = await prisma.user.findMany()
  if (allUsers) {
    return allUsers
  }
}
