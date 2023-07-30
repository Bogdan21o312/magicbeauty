import {prisma} from "@magicbeauty/common";
import cloudinary from "cloudinary";
import {revalidatePath} from "next/cache";

export function generateRandomNumber(digits: number) {
  const maxNumber = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * maxNumber).toString().padStart(digits, '0');
}

export function uploadImageToCloudinary(file: File) {
  const publicId = generateRandomNumber(16);
  return new Promise<string>((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream({public_id: publicId}, (error, result) => {
      if (error) {
        console.error(error);
        reject('Помилка завантаження зображення');
      } else {
        if (result) {
          console.log(result);
          const imageUrl = result.secure_url;
          resolve(imageUrl);
        } else {
          reject('Помилка завантаження зображення');
        }
      }
    });

    file.arrayBuffer().then(buffer => {
      const uint8Array = new Uint8Array(buffer);
      stream.end(Buffer.from(uint8Array));
    });
  });
}

export async function uploadImage(data: FormData) {
  'use server'
  const file = data.get('file') as File;

  const imageUrl = await uploadImageToCloudinary(file);

  // Зберігаємо адресу зображення у моделі Image за допомогою Prisma
  await prisma.image.create({
    data: {
      path: imageUrl,
    },
  });
  if (imageUrl) {
    revalidatePath('/')
  }
  return imageUrl;
}
