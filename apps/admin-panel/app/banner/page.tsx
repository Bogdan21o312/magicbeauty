import { prisma } from '@magicbeauty/common/server'

export default async function Banner() {
  const data = await prisma.banner.findMany()

  return (
    <div>
      <div>{data.length}</div>
    </div>
  )
}
