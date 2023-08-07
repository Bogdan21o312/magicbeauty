import { createUser, deleteUser, prisma } from '@magicbeauty/common/server'
import { FeatureFormRegister } from '@magicbeauty/common'

async function cU(data: FormData) {
  'use server'
  createUser(data)
}
async function dU(id: number) {
  'use server'
  deleteUser(id)
}

export default async function Page() {
  const users = await prisma.user.findMany()
  return (
    <div>
      <FeatureFormRegister/>
      <form action={cU}>
        <input type='text' name='email' />
        <input type='text' name='password' />
        <input type='text' name='phone' />
        <input type='text' name='firstName' />
        <input type='text' name='surname' />
        <input type='text' name='patronymic' />
        <input type='text' name='country' />
        <input type='text' name='region' />
        <input type='text' name='settlement' />
        <input type='file' name='avatar' />
        <button>create</button>
      </form>
      {users.map(user =>
        <div key={user.id}>
          <div>{user.email}</div>
          <div>{user.password}</div>
          <div>{user.phone}</div>
          <div>{user.firstName}</div>
          <div>{user.surname}</div>
          <div>{user.patronymic}</div>
          <div>{user.country}</div>
          <div>{user.region}</div>
          <div>{user.settlement}</div>
          <div><img src={user.avatar} alt='User' /></div>
          <div>{user.role}</div>
        </div>
      )}
    </div>
  )
}
