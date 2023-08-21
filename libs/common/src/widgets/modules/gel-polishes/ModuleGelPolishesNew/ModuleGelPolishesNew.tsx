import { prisma } from "../../../../actions";
import { Container, Section, TitleAndLinkBlock } from "../../../../shared";

export async function ModuleGelPolishesNew() {
  const gelPolishes = await prisma.gelPolishes.findMany()
  console.log(gelPolishes)
  return (
    <Section>
      <Container>
        <TitleAndLinkBlock title="Tilte" linkText="link" linkSrc="/" />
      </Container>
    </Section>
  )
}
