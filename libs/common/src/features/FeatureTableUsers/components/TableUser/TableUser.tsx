'use client'
import classes from './TableUser.module.scss'
import { TableUserProps } from './TableUserProps'
import Image from 'next/image'
import { Button, TableCell, TableRow } from '../../../../shared'

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
                            country,
                            ban,
                            banResponse
                          }: TableUserProps) {
  const isUpdate = createdAt.toISOString() === updatedAt.toISOString()
  const updateText = isUpdate ? 'Ще не було оновлень' : updatedAt.toISOString()
  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      {/*<TableCell>{id}</TableCell>*/}
      <TableCell>{avatar && <Image src={avatar} alt={firstName} width={50} height={50} />}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{password}</TableCell>
      <TableCell>{firstName}</TableCell>
      <TableCell>{surname}</TableCell>
      <TableCell>{patronymic}</TableCell>
      <TableCell>{region}</TableCell>
      <TableCell>{settlement}</TableCell>
      <TableCell>{country}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>{updateText}</TableCell>
      <TableCell>{createdAt.toISOString()}</TableCell>
      <TableCell><Button onClick={() => deleteUser(id)}>Видалити</Button></TableCell>
    </TableRow>
  )
}
