'use client'

import Image from "next/image";

export function ImageItem({id, path, remove}: { id: number, path: string, remove: (id: number) => Promise<void>; }) {
    return (
        <div>
            <div>{id}</div>
            <Image src={path} alt={'alt'}
                   width={300} height={300}/>
            <button onClick={() => remove(id)}>DELETE</button>
        </div>
    )
}
