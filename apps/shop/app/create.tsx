import {uploadImage} from "./uploadImage";

export function Create() {

  return (
    <div>
      <form action={uploadImage}>
        <input placeholder='name' name="path" />
        <input placeholder='file' type="file" name="file" />
        <button>ADD</button>
      </form>
    </div>
  )
}
