'use client'

export function ImageItem({id, path, remove}: { id: number, path: string, remove: (id: number) => Promise<void>; }) {
    console.log(id)
    console.log(path)
    return (
        <div>
            <div>{id}</div>
            <div>{path}</div>
            <button onClick={() => remove(id)}>DELETE</button>
        </div>
    )
}
