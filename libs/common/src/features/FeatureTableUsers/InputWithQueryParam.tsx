'use client'

export function A(search: any) {

  return (
    <form action={search}>
      <input type='text' name='search' placeholder='Search' />
    </form>
  )
}
