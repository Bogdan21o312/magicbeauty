import { ADMIN_PANEL_POSTS_PAGE_URL, Button, Input, Select } from "@magicbeauty/common";
import { prisma, uploadImageToCloudinary } from "@magicbeauty/common/server";
import { revalidatePath } from "next/cache";

async function createCategory(data: FormData) {
  'use server'
  const name = data.get('name') as string
  const languageCode = data.get('language-code')
  const newCategory = await prisma.category.create({
    data: {
      name: name,
      languageCode: String(languageCode),
    },
  });

  if (newCategory) {
    revalidatePath(ADMIN_PANEL_POSTS_PAGE_URL)
  }
}

async function createPost(data: FormData) {
  'use server'
  const title = data.get('title') as string
  const text = data.get('text') as string
  const imageAlt = data.get('alt') as string
  const file = data.get('file') as File
  const imageSrc = await uploadImageToCloudinary(file)
  const languageCode = data.get('language-code')
  const category = parseInt(data.get('category') as string)
  const newPost = await prisma.post.create({
    data: {
      title: title,
      text: text,
      imageSrc: imageSrc,
      imageAlt: imageAlt,
      languageCode: String(languageCode),
      categoris: {
        connect: {
          id: category,
        },
      },
    },
    include: {
      language: true,
      categoris: true,
    },
  });

  if (newPost) {
    revalidatePath(ADMIN_PANEL_POSTS_PAGE_URL)
  }
}

export default async function Page() {
  const language = await prisma.language.findMany()
  const categories = await prisma.category.findMany()
  const posts = await prisma.post.findMany({
    include: {
      language: true,
      categoris: true
    }
  })
  return (
    <div>
      <form action={createCategory}>
        <Input name="name" placeholder="Назва переміни" />
        <Select name="language-code" title="Виберіть мову">
          {language.map(language =>
            <option key={language.id} value={language.code}>{language.name}</option>
          )}
        </Select>
        <Button type="submit">Сторити категорію</Button>
      </form>
      <form action={createPost}>
        <Input name="title" placeholder="Заголовок" />
        <Input name="text" placeholder="Текст" />
        <Input name="alt" placeholder="ALT картинки" />
        <Input name="file" placeholder="Картинка" type="file" />
        <Select name="language-code" title="Виберіть мову">
          {language.map(language =>
            <option key={language.id} value={language.code}>{language.name}</option>
          )}
        </Select>
        <Select name="category" title="Виберіть ">
          {categories.map(category =>
            <option key={category.id} value={category.id}>{category.name}</option>
          )}
        </Select>
        <Button type="submit">Створити пост</Button>
      </form>
    </div>
  )
}
