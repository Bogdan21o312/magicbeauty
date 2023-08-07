import cloudinary from 'cloudinary'
import { generateRandomNumber } from '../../shared'

export function uploadImageToCloudinary(file: File) {
  const publicId = generateRandomNumber(16)
  return new Promise<string>((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream({ public_id: publicId }, (error, result) => {
      if (error) {
        console.error(error)
        reject('Помилка завантаження зображення')
      } else {
        if (result) {
          console.log(result)
          const imageUrl = result.secure_url
          resolve(imageUrl)
        } else {
          reject('Помилка завантаження зображення')
        }
      }
    })

    file.arrayBuffer().then(buffer => {
      const uint8Array = new Uint8Array(buffer)
      stream.end(Buffer.from(uint8Array))
    })
  })
}
