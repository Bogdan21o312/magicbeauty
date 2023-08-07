import {prisma, ModuleBanner} from "@magicbeauty/common/server"
import {revalidatePath} from "next/cache"
import {Create} from "./create"
import {ImageItem} from "./ImageItem"
import {Test} from "./Test"

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
      <ModuleBanner/>
      <Test/>
      <Create/>
      {images.map(image =>
        <div key={image.id}>
          <ImageItem id={image.id} path={image.path} remove={deleteImage}/>
        </div>
      )}
    </div>
  )
}
