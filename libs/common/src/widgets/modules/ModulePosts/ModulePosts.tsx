import { FeaturePostsList } from "../../../features/server";
import { Container, Section, TitleAndLinkBlock } from "../../../shared";

export async function ModulePosts() {

  return (
    <Section>
      <Container>
        <TitleAndLinkBlock title="Нові пости" linkText="Переглянути всі пости" linkSrc="/" />
      </Container>
      <FeaturePostsList />
    </Section>
  )
}
