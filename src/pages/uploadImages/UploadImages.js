import React from 'react'
import './styles.css'
import { storage } from '../../firebase-config'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from "uuid"

export const UploadImages = () => {
  const [imageUpload, setImageUpload] = React.useState(null)
  const [imageList, setImageList] = React.useState([])

  const imageListRef = React.useMemo(() => ref(storage, "images/"), [])

  const uploadImage = () => {
    if (imageUpload == null) return

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url])
      })
    }).catch(error => {
      console.log(error)
    })
  }

  React.useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    })
  }, [imageListRef])

  return (
    <div className='App'>
      <input type="file" onChange={(event) => {
        setImageUpload(event.target.files[0])
      }} />
      <button onClick={uploadImage}>Upload</button>

      {imageList.map((url, index) => {
        return <img src={url} alt={`${index}`} key={index} />
      })}
    </div>
  )
}
