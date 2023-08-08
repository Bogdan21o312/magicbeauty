'use client'
import classes from './TableUser.module.scss'
import { TableUserProps } from './TableUserProps'
import Image from 'next/image'
import { Button } from '../../../../shared'

export function TableUser({
                            index,
                            deleteUser,
                              id,
                            password,
                            email,
                            avatar,
                            createdAt,
                            firstName,
                            patronymic,
                            phone,
                            region,
                            role,
                            surname,
                            settlement,
                            updatedAt,
                            country
                          }: TableUserProps) {
  const isUpdate = createdAt === updatedAt
  const updateText = isUpdate ? 'Ще не було оновлень' : updatedAt.toISOString()
  return (
    <tr>
      <th>{index}</th>
      <td>{id}</td>
      {/*<td><Image src={avatar} alt={firstName} width={50} height={50} /></td>*/}
      <td>{email}</td>
      <td>{phone}</td>
      <td>{password}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{patronymic}</td>
      <td>{region}</td>
      <td>{settlement}</td>
      <td>{country}</td>
      <td>{role}</td>
      <td>{updateText}</td>
      <td>{createdAt.toISOString()}</td>
      <td><Button onClick={() => deleteUser(id)}>Видалити</Button></td>
    </tr>
  )
}
