import { Button, Input } from "@magicbeauty/common"
import { prisma, uploadImageToCloudinary } from "@magicbeauty/common/server"
import { revalidatePath } from "next/cache"

async function createGelPolishes(data: FormData) {
  'use server'
  const title = data.get('title') as string
  const imageFile = data.get('file') as File
  const imageAlt = data.get('imageAlt') as string
  const imageSrc = await uploadImageToCloudinary(imageFile)
  const create = await prisma.gelPolishes.create({
    data: {
      title: title,
      imageAlt: imageAlt,
      imageSrc: imageSrc
    }
  })

  if (create) {
    revalidatePath('/gel-polishes')
  }
}

async function createBrand(data: FormData) {
  'use server'
  const brand = data.get('brand') as string

  const create = await prisma.brand.create({
    data: {
      brand: brand,
    }
  })

  if (create) {
    revalidatePath('/gel-polishes')
  }
}

export default async function Page() {
  const brands = await prisma.brand.findMany()
  console.log(brands)
  return (
    <div>
      <form action={createGelPolishes}>
        <h1>CREAT PRODUCT</h1>
        <Input name="title" placeholder="TITLE" />
        <Input name="imageAlt" placeholder="imageALT" />
        <Input name="file" placeholder="imageSrc" type="file" />
        <Button>Create</Button>
      </form>
      <form action={createBrand}>
        <h1>CREAT PRODUCT BRAND</h1>
        <Input name="brand" placeholder="Brand" />
        <Button>Create</Button>
      </form>
    </div>
  )
}
