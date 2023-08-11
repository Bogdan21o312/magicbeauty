import { EntityFormCreateUserContent } from './EntityFormCreateUserContent'
import { createUser } from '../../../actions'
import { revalidatePath } from 'next/cache'

async function createUserAction(data: FormData) {
  'use server'
  createUser(data)
  revalidatePath('/users')
}

export async function EntityFormCreateUser() {

  return <EntityFormCreateUserContent createUser={createUserAction} />
}
