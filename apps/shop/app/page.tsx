import {prisma} from "@magicbeauty/common";
import {revalidatePath} from "next/cache";
import { z } from 'zod';

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

  return (
    <div>
      <form action={createUser}>
        <input placeholder='Email' name="email" />
        <button>ADD</button>
      </form>
      {users.map(user =>
        <div key={user.id}>
          <div>{user.id}</div>
          <div>{user.email}</div>
        </div>
      )}
    </div>
  );
}
