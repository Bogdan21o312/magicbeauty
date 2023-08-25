import { prisma } from "../../../../actions";
import { Container, Section, TitleAndLinkBlock } from "../../../../shared";
import { GelPolishesSliderNew } from "./components";

export async function ModuleGelPolishesNew() {
  const gelPolishesWithDetails = await prisma.gelPolishesWithBrandSizePrice.findMany({
    select: {
      gelPolish: {
        select: {
          title: true,
          imageSrc: true,
          imageAlt: true,
          discount: true,
          publish: true,
        },
      },
      brand: {
        select: {
          brand: true,
        },
      },
      sizeAndPrice: {
        select: {
          size: true,
          price: true,
        },
      },
    },
  });

  return (
    <Section>
      <Container>
        <TitleAndLinkBlock title="Tilte" linkText="link" linkSrc="/" />
        <GelPolishesSliderNew gelPolishes={gelPolishesWithDetails} />
      </Container>
    </Section>
  )
}
