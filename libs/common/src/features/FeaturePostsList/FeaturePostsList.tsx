import { Container } from "../../shared"
import { prisma } from "../../actions"

export async function FeaturePostsList() {
  const fdaksjfdakslfsdka = await prisma.post.findMany()
  console.log(fdaksjfdakslfsdka)
  return (
    <Container>
      {fdaksjfdakslfsdka.map(m =>
        <div key={m.id}>{m.id}</div>
      )}
    </Container>
  )
}
