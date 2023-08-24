import { ADMIN_PANEL_POSTS_PAGE_URL, Button, Input, Select } from "@magicbeauty/common";
import { prisma } from "@magicbeauty/common/server";
import { revalidatePath } from "next/cache";

async function createCategory(data: FormData) {
  'use server'
  const name = data.get('name') as string
  const languageCode = data.get('language-code')
  console.log(languageCode)
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

export default async function Page() {
  const language = await prisma.language.findMany()
  console.log(language)
  const categories = await prisma.category.findMany()
  console.log(categories)
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
    </div>
  )
}
