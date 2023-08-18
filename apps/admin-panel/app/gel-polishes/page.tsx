import { prisma, uploadImageToCloudinary } from "@magicbeauty/common/server"

async function createGelPolishes(data: FormData) {
  'use server'
  const title = data.get('title') as string
  const imageFile = data.get('file') as File
  const imageAlt = data.get('imageAlt') as string
  const imageSrc = await uploadImageToCloudinary(imageFile)
}

export default async function Page() {
  const a = await prisma.gelPolishes.findMany()
  console.log(a)

  return (<div></div>)
}
