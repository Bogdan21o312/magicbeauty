import {prisma} from "@magicbeauty/common";
import cloudinary from "cloudinary";
import {revalidatePath} from "next/cache";
import {z} from "zod";

const createImageSchema = z.object({
    path: z.string(),
    file: z.any()
})

export async function uploadImage(data: FormData) {
    "use server"

    const createImage = createImageSchema.parse({
        path: data.get("name")
    })
    cloudinary.v2.uploader.upload(data.get('file'),
        {public_id: 'test'},
        function (error, result) {
            console.log(result);
        });
    const image = await prisma.image.create({
        data: createImage
    })
    if (image) {
        console.log(image)
        revalidatePath('/')
    }
}
