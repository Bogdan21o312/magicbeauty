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
      imageSrc: imageSrc,
      GelPolishesWithBrandSizePrice: {
        create: {
          brand: {
            connect: { id: 1 }
          },
          size: {
            connect: { id: 1 }
          },
          price: {
            connect: { id: 1 }
          }
        }
      }
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

async function createSize(data: FormData) {
  'use server'
  const size = data.get('size') as string

  const create = await prisma.size.create({
    data: {
      size: size,
    }
  })

  if (create) {
    revalidatePath('/gel-polishes')
  }
}

async function createPrice(data: FormData) {
  'use server'
  const price = data.get('price') as string

  const create = await prisma.price.create({
    data: {
      price: price
    }
  })

  if (create) {
    revalidatePath('/gel-polishes')
  }
}
export default async function Page() {
  const brands = await prisma.brand.findMany()
  console.log(brands)
  const gelPolishes = await prisma.gelPolishes.findMany({
    include: {
      GelPolishesWithBrandSizePrice: true
    }
  })
  console.log(gelPolishes)
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
      <form action={createSize}>
        <h1>CREAT Size</h1>
        <Input name="size" placeholder="Size" />
        <Button>Create</Button>
      </form>
      <form action={createPrice}>
        <h1>CREAT </h1>
        <Input name="price" placeholder="Price" />
        <Button>Create</Button>
      </form>
    </div>
  )
}
