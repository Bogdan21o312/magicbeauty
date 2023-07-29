import {prisma} from "@magicbeauty/common";
import {revalidatePath} from "next/cache";
import {z} from 'zod';
import cloudinary from "cloudinary";
import Image from "next/image";
import {Create} from "./create";

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

export default async function Index() {

  const users = await prisma.user.findMany()
  const images = await prisma.image.findMany()

  return (
    <div>
      <form action={createUser}>
        <input placeholder='Email' name="email"/>
        <button>ADD</button>
      </form>
      <Create/>
      <Image src={'https://res.cloudinary.com/dkklx0qqv/image/upload/v1690634850/olympic_flag.jpg'} alt={'alt'}
             width={300} height={300}/>
    </div>
  );
}
