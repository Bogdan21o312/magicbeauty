import { EntityGelPolishesProductCard } from "../../../../entites";
import { prisma } from "../../../../actions";
import { Container, Section, TitleAndLinkBlock } from "../../../../shared";

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
  console.log(gelPolishesWithDetails)
  return (
    <Section>
      <Container>
        <TitleAndLinkBlock title="Tilte" linkText="link" linkSrc="/" />
        <div style={{ display: 'flex' }}>
          {gelPolishesWithDetails.map(gelPolish =>
            <EntityGelPolishesProductCard
              key={gelPolish.gelPolish.imageSrc}
              gelPolish={gelPolish.gelPolish}
              sizeAndPrice={gelPolish.sizeAndPrice}
              brand={gelPolish.brand} />
          )}
        </div>
      </Container>
    </Section>
  )
}
