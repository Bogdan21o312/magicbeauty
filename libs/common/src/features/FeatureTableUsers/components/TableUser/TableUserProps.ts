import type { User } from '@prisma/client'

export type TableUserProps = User & {
  index: number
  deleteUser: (id: number) => void
}
