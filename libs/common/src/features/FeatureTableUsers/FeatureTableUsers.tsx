import { deleteUser, prisma } from '../../actions'
import { TableUser } from './components'
import { revalidatePath } from 'next/cache'

async function deleteUserAction(id: number) {
  'use server'
  deleteUser(id)

}

export async function FeatureTableUsers() {
  const users = await prisma.user.findMany()
  console.log(users)
  if (users.length === 0) {
    return <div>No users available</div>
  }
  return (
    <div>
      <table>
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
