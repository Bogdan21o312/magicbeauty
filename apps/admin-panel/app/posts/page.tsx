async function createPost(data: FormData) {
  'use server'
  const title = data.get('title') as string
  const text = data.get('text') as string

}

export default function Page() {

  return (
    <div>
      posts
    </div>
  )
}
