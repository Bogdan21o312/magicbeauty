import {prisma} from "@magicbeauty/common";
import {revalidatePath} from "next/cache";
import {z} from 'zod';
import Image from "next/image";
import {Create} from "./create";
import {ImageItem} from "./ImageItem";

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

    const users = await prisma.user.findMany()
    const images = await prisma.image.findMany()

    console.log(images)

    return (
        <div>
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
            <Image src={'https://res.cloudinary.com/dkklx0qqv/image/upload/v1690634850/olympic_flag.jpg'} alt={'alt'}
                   width={300} height={300}/>
        </div>
    );
}
