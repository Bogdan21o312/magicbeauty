'use client'
import { Text } from '../../../../shared'
import classes from './Post.module.scss'
import { PostProps } from "./PostProps"

export function Post({ title, imageAlt, imageSrc, text, createdAt }: PostProps) {

  return (
    <div className={classes.main}>
      <Text>{title}</Text>
      <Text>{text}</Text>
    </div>
  )
}
