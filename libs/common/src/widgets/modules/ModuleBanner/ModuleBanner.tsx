import { prisma } from '../../../actions'
import { Container, Section, Text } from '../../../shared'
import classes from './ModuleBanner.module.scss'

export async function ModuleBanner() {
  const banner = await prisma.banner.findFirst()
  console.log(banner)
  return banner && (
    <Section>
      <Container>
        <div className={classes.content}>
          <Text as='h1' center type='titleBig'>{banner.title}</Text>
          <Text as='p' center type='text'>{banner.description}</Text>
        </div>
      </Container>
    </Section>
  )
}
