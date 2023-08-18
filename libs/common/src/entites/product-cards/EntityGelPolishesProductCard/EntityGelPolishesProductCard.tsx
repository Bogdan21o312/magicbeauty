'use client'
import classes from './EntityGelPolishesProductCard.module.scss'
import { EntityGelPolishesProductCardProps } from './EntityGelPolishesProductCardProps'
import { Text, Ibg, IconCart, IconLove, Button } from "../../../shared"

export function EntityGelPolishesProductCard({ title, imageSrc, imageAlt, size, name, price }: EntityGelPolishesProductCardProps) {

  return (
    <div className={classes.main}>
      <div className={classes.mainImage}>
        <Ibg src={imageSrc!} alt={imageAlt!} modClass={classes.clImage}></Ibg>
      </div>
      <div className={classes.blockText}>
        <Text type='titleSub'>{title}</Text>
        <div className={classes.flex}>
          <Text opacity type='textSmall'>{size}</Text>
          <Text opacity type='textSmall'>{name}</Text>
        </div>
      </div>
      <div className={classes.mainLine}></div>
      <div className={classes.clPrice}>
        <div className={classes.priceNum}>
          {price}
        </div>
        <button className={classes.priceLove}><IconLove /></button>
      </div>
      <Button widthHundredPercent>Купити <IconCart /></Button>
    </div>
  )
}
