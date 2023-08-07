import { prisma, uploadImageToCloudinary } from '../lib'

export async function createUser(data: FormData) {
  const avatar = data.get('avatar') as File
  const email = data.get('email') as string
  const password = data.get('password') as string
  const phone = data.get('phone') as string
  const firstName = data.get('firstName') as string
  const surname = data.get('surname') as string
  const patronymic = data.get('patronymic') as string
  const country = data.get('country') as string
  const region = data.get('region') as string
  const settlement = data.get('settlement') as string

  const imageUrl = await uploadImageToCloudinary(avatar)
  await prisma.user.create({
    data: {
      email: email,
      password: password,
      phone: phone,
      firstName: firstName,
      surname: surname,
      patronymic: patronymic,
      country: country,
      region: region,
      settlement: settlement,
      avatar: imageUrl
    }
  })
}
