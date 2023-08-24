import { ADMIN_PANEL_LANGUAGE_PAGE_URL, Button, Input } from "@magicbeauty/common"
import { prisma } from "@magicbeauty/common/server"
import { revalidatePath } from "next/cache"

async function createLanguage(data: FormData) {
  'use server'
  const name = data.get('name') as string
  const code = data.get('code') as string

  const newLanguage = await prisma.language.create({
    data: {
      code: code,
      name: name,
    },
  })

  if (newLanguage) {
    revalidatePath(ADMIN_PANEL_LANGUAGE_PAGE_URL)
  }
}

export default function Page() {

  return (
    <div>
      <form action={createLanguage}>
        <Input name="name" placeholder="Назва" />
        <Input name="code" placeholder="Код мови наприклад en" />
        <Button type="submit">Створити</Button>
      </form>
    </div>
  )
}
