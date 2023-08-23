import { prisma } from '@magicbeauty/common/server'

export default async function Page() {
  const users = await prisma.user.findMany()

  return (
    <div>

    </div>
  )
}
