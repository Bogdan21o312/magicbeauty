import { prisma } from '../lib'

export async function createUser(data: FormData) {
  const email = data.get('email') as string
  const password = data.get('password') as string
  const phone = data.get('phone') as string
  const firstName = data.get('firstName') as string
  const surname = data.get('surname') as string
  const patronymic = data.get('patronymic') as string

  await prisma.user.create({
    data: {
      email: email,
      password: password,
      phone: phone,
      firstName: firstName,
      surname: surname,
      patronymic: patronymic,
    }
  })
}
