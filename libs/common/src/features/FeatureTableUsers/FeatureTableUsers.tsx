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
  revalidatePath('/users')
}

async function getAllUsersBySearch(page: number, pageSize: number) {
  'use server'
  const cookieStore = cookies()
  // cookieStore.set('paggination', '')
  const pagginationGet = cookieStore.get('paggination')?.value
  console.log(pagginationGet)

  const name = cookieStore.get('name')?.value
  const skip = (page - 1) * pageSize

  const totalUsers = await prisma.user.count({
    where: {
      firstName: {
        contains: name,
        mode: 'insensitive'
      }
    }
  })

  const users = await prisma.user.findMany({
    where: {
      firstName: {
        contains: name,
        mode: 'insensitive'
      }
    },
    skip: skip,
    take: pageSize
  })

  return { users, totalUsers }
}

export async function FeatureTableUsers() {
  const pageSize = 5
  const { users, totalUsers } = await getAllUsersBySearch(1, pageSize)
  const totalPages = Math.ceil(totalUsers / pageSize)
  console.log(totalPages)
  const paginationButtons = []
  for (let page = 1; page <= totalPages; page++) {
    paginationButtons.push(
      <div
        key={page}
      >
        {page}
      </div>
    )
  }
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
              ban={user.ban}
              banResponse={user.banResponse}
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
      {paginationButtons}
    </div>
  )
}
