import { prisma, uploadImageToCloudinary } from "@magicbeauty/common/server"

async function a(data: FormData) {
  'use server'
  const title = data.get('title') as string
  const description = data.get('description') as string
  await prisma.banner.create({
    data: {
      title: title,
      description: description,
    }
  })
}

export default async function Banner() {
  const p = await prisma.banner.findMany()
  console.log(p)
  return (
    <div>
      <form action={a}>
        <input name="title" />
        <input name="description" />
        <button>Submit</button>
      </form>
    </div>
  )
}
