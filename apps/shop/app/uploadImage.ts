import {prisma} from "@magicbeauty/common";
import cloudinary from "cloudinary";
import {revalidatePath} from "next/cache";
import {z} from "zod";

const createImageSchema = z.object({
    path: z.string(),
    file: z.any()
})

function generateRandom16DigitNumber() {
    return Math.floor(Math.random() * 1e16).toString();
}

export async function uploadImage(data: FormData) {
    'use server'
    const file = data.get('file') as File;
    const publicId = generateRandom16DigitNumber(); // Генеруємо 16-значне число

    const imageUrl = await new Promise<string>((resolve, reject) => {
        const stream = cloudinary.v2.uploader.upload_stream({ public_id: publicId }, (error, result) => {
            if (error) {
                console.error(error);
                reject('Помилка завантаження зображення');
            } else {
                console.log(result);
                // Отримуємо URL завантаженого зображення з Cloudinary
                const imageUrl = result.secure_url;
                resolve(imageUrl);
            }
        });

        // Передача файлу в cloudinary.uploader.upload_stream
        file.arrayBuffer().then(buffer => {
            const uint8Array = new Uint8Array(buffer);
            stream.end(Buffer.from(uint8Array));
        });
    });

    return imageUrl;
}

