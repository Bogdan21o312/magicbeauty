import classes from './FeatureTableUsers.module.scss'
import { deleteUser, prisma } from '../../actions'
import { TableUser } from './components'
import { A } from './InputWithQueryParam'

async function deleteUserAction(id: number) {
  'use server'
  deleteUser(id)
}

export async function FeatureTableUsers() {
  let value = 'f'

  // function search(data: FormData) {
  //   const valueValid = data.get('search') as string
  //   const a = value + valueValid
  //   console.log(a)
  // }

  const users = await prisma.user.findMany({
    where: {
      firstName: {
        contains: value,
        mode: 'insensitive'
      }
    }
  })

  return (
    <div>
      {/*<form action={search}>*/}
      {/*  <input type='text' name='search' placeholder='Search' />*/}
      {/*</form>*/}
      {/*<A search={search} />*/}
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
