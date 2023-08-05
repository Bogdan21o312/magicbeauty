'use client'
import { useSession } from 'next-auth/react'

export function UseSesion() {
  const sesion = useSession()
  console.log(sesion)
  return (
    <div>
      <div>
        <pre>{JSON.stringify(sesion)}</pre>
      </div>
      {sesion ? <div>TRUE</div> : <div>FALCE</div>}
    </div>
  )
}
