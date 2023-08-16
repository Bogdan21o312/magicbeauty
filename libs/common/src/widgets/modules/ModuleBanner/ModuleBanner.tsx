import Image from 'next/image'
import { prisma } from '../../../actions'

export async function ModuleBanner() {
  const banner = await prisma.banner.findFirst()
  console.log(banner)
  return banner && (
    <div>
      {banner.id}
      {banner.title}
      {banner.description}
      <Image src={banner.src} alt={banner.alt} width={100} height={100} />
    </div>
  )
}
