import { FeatureFormRegister } from '@magicbeauty/common'
import { prisma } from '@magicbeauty/common/server'


export default async function Page() {
  const users = await prisma.user.findMany()
  console.log(users)
  return (
    <div>
     <FeatureFormRegister/>
    </div>
  )
}
