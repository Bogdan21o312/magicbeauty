import {prisma} from "@magicbeauty/common";
import cloudinary from "cloudinary";

function generateRandom16DigitNumber() {
    return Math.floor(Math.random() * 1e16).toString();
}

export async function uploadImage(data: FormData) {
    'use server'
    const file = data.get('file') as File;
    const publicId = generateRandom16DigitNumber();

    const imageUrl = await new Promise<string>((resolve, reject) => {
        const stream = cloudinary.v2.uploader.upload_stream({public_id: publicId}, (error, result) => {
            if (error) {
                console.error(error);
                reject('Помилка завантаження зображення');
            } else {
                console.log(result);
                const imageUrl = result.secure_url;
                resolve(imageUrl);
            }
        });

        file.arrayBuffer().then(buffer => {
            const uint8Array = new Uint8Array(buffer);
            stream.end(Buffer.from(uint8Array));
        });
    });

    // Зберігаємо адресу зображення у моделі Image за допомогою Prisma
    await prisma.image.create({
        data: {
            path: imageUrl,
        },
    });

    return imageUrl;
}

