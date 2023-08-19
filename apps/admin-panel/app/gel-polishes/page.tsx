import { Button, Input, Select } from "@magicbeauty/common"
import { prisma, uploadImageToCloudinary } from "@magicbeauty/common/server"
import { revalidatePath } from "next/cache"

async function createGelPolishes(data: FormData) {
  'use server'
  const title = data.get('title') as string
  const imageFile = data.get('file') as File
  const imageAlt = data.get('imageAlt') as string
  const imageSrc = await uploadImageToCloudinary(imageFile)
  const brand = parseInt(data.get('brand') as string)
  const sizeAndPrice = parseInt(data.get('sizeAndPrice') as string)
  const create = await prisma.gelPolishes.create({
    data: {
      title: title,
      imageAlt: imageAlt,
      imageSrc: imageSrc,
      gelPolishesWithBrandSizePrice: {
        create: {
          brand: {
            connect: { id: brand }
          },
          sizeAndPrice: {
            connect: { id: sizeAndPrice }
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
  const price = data.get('price') as string

  const create = await prisma.sizeAndPrice.create({
    data: {
      size: size,
      price: price
    }
  })

  if (create) {
    revalidatePath('/gel-polishes')
  }
}

export default async function Page() {
  const brands = await prisma.brand.findMany()
  const sizeAndPrice = await prisma.sizeAndPrice.findMany()
  const gelPolishes = await prisma.gelPolishes.findMany({
    include: {
      gelPolishesWithBrandSizePrice: {
        include: {
          brand: true,
          sizeAndPrice: true,
        },
      },
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
        <Select name="brand" title="Brend">
          {brands.map(brand =>
            <option key={brand.id} value={brand.id}>{brand.brand}</option>
          )}
        </Select>
        <Select name="sizeAndPrice" title="Size and price">
          {sizeAndPrice.map(sizeAndPrice =>
            <option key={sizeAndPrice.id} value={sizeAndPrice.id}>{sizeAndPrice.size} ${sizeAndPrice.price}</option>
          )}
        </Select>
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
        <Input name="price" placeholder="Price" />
        <Button>Create</Button>
      </form>
    </div>
  )
}
