import classes from './FeaturePostsList.module.scss'
import { Container } from "../../shared"
import { prisma } from "../../actions"
import { Post } from "./components"

export async function FeaturePostsList() {
  const posts = await prisma.post.findMany()
  return (
    <Container>
      <div className={classes.items}>      {posts.map(post =>
        <Post key={post.id} post={post} />
      )}
      </div>
    </Container>
  )
}
