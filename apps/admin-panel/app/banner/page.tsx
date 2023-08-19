import { prisma, uploadImageToCloudinary } from "@magicbeauty/common/server"

async function a(data: FormData) {
  'use server'
  const file = data.get('file') as File
  const title = data.get('title') as string
  const description = data.get('description') as string
  const alt = data.get('alt') as string
  const imageUrl = await uploadImageToCloudinary(file)
  await prisma.banner.create({
    data: {
      title: title,
      description: description,
      src: imageUrl,
      alt: alt
    }
  })
}

export default async function Banner() {
  const data = await prisma.banner.findMany()
  console.log(data)
  return (
    <div>
      <form action={a}>
        <input name="title" />
        <input name="description" />
        <input name="file" type="file" />
        <input name="alt" />
        <button>Submit</button>
      </form>
      <div>{data.length}</div>
    </div>
  )
}
