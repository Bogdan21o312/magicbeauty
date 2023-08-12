import classes from './FeatureTableUsers.module.scss'
import { deleteUser, prisma } from '../../actions'
import { TableUser } from './components'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function deleteUserAction(id: number) {
  'use server'
  deleteUser(id)
}
async function search(data: FormData) {
  'use server'
  const cookieStore = cookies()
  cookieStore.set('name', data.get('search') as string)
  revalidatePath('/users')
}

async function getAllUsersBySearch() {
  'use server'
  const cookieStore = cookies()
  const name = cookieStore.get('name')?.value
  console.log(name)
  const users = await prisma.user.findMany({
    where: {
      firstName: {
        contains: name,
        mode: 'insensitive'
      }
    }
  })
  return users
}

export async function FeatureTableUsers() {
  const users = await getAllUsersBySearch()

  return (
    <div>
      <form action={search}>
        <input type='text' name='search' placeholder='Search' />
      </form>
      <table className={classes.table}>
        <tbody>
          {users.map((user, index) =>
            <TableUser
              key={user.id}
              id={user.id}
              email={user.email}
              password={user.password}
              phone={user.phone}
              firstName={user.firstName}
              surname={user.surname}
              patronymic={user.patronymic}
              country={user.country}
              region={user.region}
              settlement={user.settlement}
              avatar={user.avatar}
              role={user.role}
              createdAt={user.createdAt}
              updatedAt={user.updatedAt}
              index={index + 1}
              deleteUser={deleteUserAction}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}
