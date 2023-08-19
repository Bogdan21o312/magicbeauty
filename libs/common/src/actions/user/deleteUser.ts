import { prisma } from '../lib'
export async function deleteUser(id: number) {
  await prisma.user.delete({
    where: { id }
  })
}
