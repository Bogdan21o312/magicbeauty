import classes from './FeatureTableUsers.module.scss'
import { deleteUser, prisma } from '../../actions'
import { TableUser } from './components'

async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
async function deleteUserAction(id: number) {
  'use server'
  deleteUser(id)

}

export async function FeatureTableUsers() {
  let searchTerm = '' // Початкове значення для пошукового терміну
  let usersArray = [] // Початкове порожній список користувачів
  const users = await prisma.user.findMany({
    where: {
      firstName: {
        contains: searchTerm,
        mode: 'insensitive'
      }
    }
  })

  return (
    <div>
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
