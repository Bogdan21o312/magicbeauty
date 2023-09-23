'use client'
import { Ibg, Text } from '../../../../shared'
import classes from './Post.module.scss'
import { PostProps } from "./PostProps"

export function Post({ post }: PostProps) {

  return (
    <div className={classes.main}>
      <Ibg src={post.imageSrc} alt={post.imageAlt} modClass={classes.image} />
      <Text type='titleSub'>{post.title}</Text>
      <Text type='textSmall'>{post.text}</Text>
    </div>
  )
}
