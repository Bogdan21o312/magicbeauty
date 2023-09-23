'use client'
import classes from './EntityGelPolishesProductCard.module.scss'
import { EntityGelPolishesProductCardProps } from './EntityGelPolishesProductCardProps'
import { Text, Ibg, IconCart, IconLove, Button } from "../../../shared"

export function EntityGelPolishesProductCard({ gelPolish, sizeAndPrice, brand }: EntityGelPolishesProductCardProps) {

  return (
    <div className={classes.main}>
      <div className={classes.mainImage}>
        <Ibg src={gelPolish.imageSrc} alt={gelPolish.imageAlt} modClass={classes.clImage}></Ibg>
      </div>
      <div className={classes.blockText}>
        <div className={classes.flex}>
          <Text type='titleSub'>{gelPolish.title}</Text>
          <Text opacity type='textSmall'>{brand.brand}</Text>
        </div>
      </div>
      <div className={classes.mainLine}></div>
      <div className={classes.blockText}>
        <div className={classes.flex}>
          <Text type='titleSub'>{sizeAndPrice.price} грн</Text>
          <Text opacity type='textSmall'>{sizeAndPrice.size} мл</Text>
        </div>
      </div>
      <Button widthHundredPercent>Купити <IconCart /></Button>
    </div>
  )
}
