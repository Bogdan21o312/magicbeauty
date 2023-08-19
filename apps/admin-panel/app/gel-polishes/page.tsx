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

async function createGelPolishesBrand(data: FormData) {
  'use server'
  const brand = data.get('brand') as string

  const create = await prisma.gelPolishBrand.create({
    data: {
      brand: brand,
      gelPolish: {
        connect: {
          id: 1,
        },
      }
    }
  })

  if (create) {
    revalidatePath('/gel-polishes')
  }
}

async function createCategory(data: FormData) {
  'use server'
  const category = data.get('category') as string

  const create = await prisma.category.create({
    data: {
      name: category
    }
  })

  if (create) {
    revalidatePath('gel-polishes')
  }
}

async function createPost(data: FormData) {
  'use server'
  const title = data.get('title') as string

  const create = await prisma.post.create({
    data: {
      title: title,
      categories: {
        createMany: {
          data: [
            {
              categoryId: 1,
              assignedBy: 'men'
            },
            {
              categoryId: 2,
              assignedBy: 'men'
            }
          ]
        }
      }
    }
  })

  if (create) {
    revalidatePath('gel-polishes')
  }
}
export default async function Page() {
  const gelPolishes = await prisma.gelPolishes.findMany({
    include: {
      brands: true,
      sizes: true,
      prices: true
    }
  })
  // console.log(gelPolishes)
  // const gelPolishSize = await prisma.gelPolishSize.findMany()
  // console.log(gelPolishSize)
  // const gelPolishPrice = await prisma.gelPolishPrice.findMany()
  // console.log(gelPolishPrice)
  // const gelPolishBrand = await prisma.gelPolishBrand.findMany()
  // console.log(gelPolishBrand)

  const posts = await prisma.post.findMany({
    include: {
      categories: true
    }
  })
  console.log(posts)
  const categories = await prisma.category.findMany()
  console.log(categories)
  // const categoriesOnPosts = await prisma.categoriesOnPosts.findMany()
  // console.log(categoriesOnPosts)

  return (
    <div>
      <form action={createCategory}>
        <h1>category</h1>
        <Input name="category" placeholder="Category" />
        <Button>Create</Button>
      </form>
      <form action={createPost}>
        <h1>Post</h1>
        <Input name="title" placeholder="title" />
        <Button>Create</Button>
      </form>
      <form action={createGelPolishes}>
        <h1>CREAT PRODUCT</h1>
        <Input name="title" placeholder="TITLE" />
        <Input name="imageAlt" placeholder="imageALT" />
        <Input name="file" placeholder="imageSrc" type="file" />
        <Button>Create</Button>
      </form>
      <form action={createGelPolishesBrand}>
        <h1>CREAT PRODUCT BRAND</h1>
        <Input name="brand" placeholder="Brand" />
        <Button>Create</Button>
      </form>
    </div>
  )
}
