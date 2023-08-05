import {prisma} from "@magicbeauty/common/server"
import {revalidatePath} from "next/cache"
import {z} from 'zod'
import {Create} from "./create"
import {ImageItem} from "./ImageItem"
import {Test} from "./Test"

const createUserSchema = z.object({
  email: z.string()
})


async function createUser(data: FormData) {
  "use server"

  const createUser = createUserSchema.parse({
    email: data.get("email")
  })
  const user = await prisma.user.create({
    data: createUser
  })
  if (user) {
    console.log(user)
    revalidatePath('/')
  }
}

async function deleteImage(id: number) {
  "use server"
  const deleteImage = await prisma.image.delete({
    where: {id}
  })

  if (deleteImage) {
    revalidatePath('/')
  }
}

export default async function Index() {

  const images = await prisma.image.findMany()

  console.log(images)

  return (
    <div>
      <Test/>
      <form action={createUser}>
        <input placeholder='Email' name="email"/>
        <button>ADD</button>
      </form>
      <Create/>
      {images.map(image =>
        <div key={image.id}>
          <ImageItem id={image.id} path={image.path} remove={deleteImage}/>
        </div>
      )}
    </div>
  )
}
