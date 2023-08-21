import { TitleAndLinkBlockProps } from "./TitleAndLinkBlockProps";
import { Text } from "../../UI"
import classes from './TitleAndLinkBlock.module.scss'
import Link from "next/link";
import { IconArrow } from "../../assets";

export function TitleAndLinkBlock({ title, linkText, linkSrc }: TitleAndLinkBlockProps) {

  return (
    <div className={classes.main}>
      <Text as="h2" type="title">
        {title}
      </Text>
      <Link href={linkSrc} className={classes.link}>
        <span>{linkText}</span>
        <IconArrow />
      </Link>
    </div>
  )
}
