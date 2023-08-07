import { getServerSession } from 'next-auth'
import { authConfig, getUserByEmail } from '@magicbeauty/common/server'
import { Ant } from '../fdsakljfdks'

export default async function Page() {
  const session = await getServerSession(authConfig)

  const user = await getUserByEmail('dfasdf')


  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, asperiores assumenda distinctio dolores earum enim
      et expedita facilis inventore, iste itaque magni maxime quibusdam quis quisquam reprehenderit velit voluptates
      voluptatum?
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt='' />}
      <div>{JSON.stringify(user)}</div>
      <Ant/>
    </div>
  )
}
